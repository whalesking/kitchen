<template>
    <div class="guess-box">
        <loading :show="isLoading"></loading>

        <!--顶部区域-->
        <div class="top-box">
            <div class="title"></div>
            <div class="balance-box">
                <div class="phone-box" @click="showShop = true">
                    <span>{{ conch }}</span>
                    <button class="shop-btn"></button>
                </div>
            </div>
            <button class="btn-help"></button>
        </div>
        <!-- 近期记录 -->
        <div class="history-line-box">
            <div class="history-line">
                <template v-for="item, index in historyList">
                    <div :class="`history-item t-${index + 1}`" :key="index">

                    </div>
                </template>
            </div>


        </div>
        <!--转盘区域-->
        <div class="rolling-box">
            <div class="gift-list-box">
                <ul>
                    <li v-for="item, index in giftArr"
                        :class="{ turn: current == index, active: isRollStop == (index + 1) && isRollStop == (current + 1) }"
                        :key="index">
                        <div :class="`icon icon-${index + 1}`"></div>
                    </li>
                </ul>
                <div class="running-box">
                    <template v-if="showTime">
                        <span>本轮进行中</span>
                        <p><span>{{ runTime }}</span>s</p>
                    </template>
                    <template v-if="isOver">
                        本轮已结束
                    </template>

                </div>
            </div>
        </div>
        <!--底部操作区-->
        <div class="bottom-box">
            <div class="chose-box">
                <ul>
                    <li v-for="item, index in giftArr" @click="choseThis(index)"
                        :class="`${betedInfo[index + 1] > 0 ? 'win' : ''} ${choseGift === index ? 'active' : ''} `"
                        :key="index">
                        <div :class="`icon icon-${index + 1}`"></div>
                        <div class="get-num">{{ betedInfo[index + 1] || 0 }}</div>
                    </li>
                </ul>
            </div>
            <div class="button-box" @click="movePx($event)">
                <div class="tip">
                    单次增加数量：
                </div>
                <div class="add-box">
                    <span class="add-btn" @click="betThis(1)">+1 <span class="price">
                            <template v-if="conch >= 1000"><i class="icon"></i>X200</template>
                            <template v-else>200金币</template>
                        </span>
                    </span>
                    <span class="add-btn" @click="betThis(10)">+10 <span class="price">
                            <template v-if="conch >= 2000"><i class="icon"></i>X2000</template>
                            <template v-else>2000金币</template>
                        </span>
                    </span>
                    <span class="add-btn" @click="betThis(99)">+99 <span class="price">
                            <template v-if="conch >= 19800"><i class="icon"></i>X19800</template>
                            <template v-else>19800金币</template>
                        </span>
                    </span>
                </div>
                <button class="last-again active" key="1" v-if="(currentSid - betSid) == 1 && !isOver"
                    @click="tryLastAgain">重复上轮
                </button>
                <button class="last-again" key="2" v-else>重复上轮</button>
                <button class="nav" @click="showNav = true">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div class="phone-list" v-for="item, index in moveArr" :key="item + index + 's'"
                    :style="beginLeft ? `left:${beginLeft - 20}px` : ''" :class="`show-end-${item}`">
                </div>
            </div>
        </div>
        <!--菜单导航-->
        <div class="nav-list-mask" v-if="showNav" @click="showNav = false">
            <div class="nav-list">
                <ul>
                    <li @click="showRule = true">玩法介绍</li>
                    <li @click="showHistory = true">近期纪录</li>
                    <li @click="showShop = true">贝壳商城</li>
                </ul>
            </div>
        </div>
        <!--大奖弹窗-->
        <div class="notice-box" v-if="showBig">
            {{ bigTxt }}
        </div>
        <!--消费确认-->
        <div class="mask-box" v-if="showConfirm">
            <div class="confirm-box">
                <div class="top-box">
                    <p>本次支付需消耗{{ betNum * 200 }}{{ conch > (betNum * 200) ? `贝壳` : `金币` }}，是否确定</p>
                    <span @click="noTip = !noTip"><i :class="`icon ${noTip ? 'checked' : ''}`"></i>今日不再提醒</span>
                </div>
                <div class="button-box">
                    <button @click="showConfirm = false">取消</button>
                    <button class="confirm" @click="confirmBet">确认</button>
                </div>
            </div>

        </div>
        <!--中奖弹窗-->
        <div class="mask-box result" v-if="showRs">
            <div class="result-box">
                <div class="img-box">
                    <img :src="`https://file8.iusns.com/gift/${giftArr[winGift - 1].id}_b`" alt="">
                </div>
                <p>恭喜您，本轮共获得{{ rsTxt }}贝壳</p>
                <button @click="showRs = false">确定</button>
            </div>
        </div>
        <!--子页面-->
        <div class="left-enter-box" :class="`${showHistory || showRule || showShop ? 'show' : ''}`"
            v-if="showHistory || showRule || showShop">
            <History :giftArr="giftArr" v-if="showHistory" @back="showHistory = false"></History>
            <Rule v-if="showRule" @back="showRule = false"></Rule>
            <Shop @refreshBalance="e => {
                conch = e
            }" :conch="conch" v-if="showShop" @back="showShop = false"></Shop>
        </div>

    </div>
</template>
<script>
import { Icon, Toast } from "vant";
import Rule from "./rule";
import History from "./history";
import Shop from "./shop";
import TIM from 'tim-js-sdk';
import Vconsole from "vconsole";
import TIMUploadPlugin from 'tim-upload-plugin';
import Proto from '../../../../IMBody_pb.js'; // Proto
import '../../../utils/build';
import loading from "../../../components/loading"; //

export default {
    data() {
        return {
            rid: '',
            initData: '',
            timeError: '',
            interKey: '',
            showConfirm: false,
            isLoading: false,
            showRs: false,
            showHistory: false,
            showShop: false,
            showRule: false,
            showBig: false,
            bigTxt: '',
            rsTxt: '',
            showNav: false,
            isIMReady: false,
            showTime: false,
            isLock: false,
            isRollFailed: false,
            isRollStop: false,
            isOver: false,
            showEnd: false,
            tim: '',
            conch: 0,
            beginLeft: 0,
            current: -1,
            runTime: '',
            imSign: '',
            imRid: '',
            imGuid: '',
            uid: '',
            TIM: '',
            choseGift: '',
            noTip: false,
            winGift: '',
            betNum: '',
            historyList: [1, 2, 3, 4, 5, 6],//近期记录
            moveArr: [],//动画用
            enterTime: '',//进房系统时间
            currentStatus: '',
            currentSid: '',//当前轮次
            betedInfo: {},
            betSid: '',//下注轮次
            speed: 300,
            giftArr: [
                { id: 100032, tip: '×2倍', mul: '2', },
                { id: 100030, tip: '×4倍', mul: '4', },
                { id: 100026, tip: '×8倍', mul: '8', },
                { id: 100019, tip: '×16倍', mul: '16', },
                { id: 100024, tip: '×20倍', mul: '20', },
                { id: 100009, tip: '×30倍', mul: '30', },
            ],
            isFromPc: false,
            token: "",
        }
    },
    components: {
        [Icon.name]: Icon,
        [Toast.name]: Toast,
        Rule,
        History,
        loading,
        Shop
    },
    created() {
        this.isFromPc = this.$route.query.pc === null ? true : false;
    },
    mounted() {
        let options = {
            SDKAppID: 1400502496
        };
        this.tim = TIM.create(options);
        this.TIM = TIM
        this.tim.setLogLevel(3);
        this.tim.registerPlugin({ 'tim-upload-plugin': TIMUploadPlugin });
        this.checkShowTip();
        // this.isLoading = true
        if (this.isFromPc) {
            this.uid = this.$route.query.uid;
            this.rid = this.$route.query.rid;
            this.token = this.$route.query.token;
            sessionStorage.setItem("token", this.token);
            sessionStorage.setItem("isPc", 5);
            this.getBaseInfo();
        } else {
            let time = window.winOcx.browser.ios ? 1000 : 0;
            window.winOcx.resetTransparentBg && window.winOcx.resetTransparentBg();
            setTimeout(() => {
                window.winOcx.getUserInfo &&
                    window.winOcx.getUserInfo((data) => {
                        this.initData = data;
                        this.rid = this.initData.rid ? this.initData.rid : 1;
                        this.uid = this.initData.uid ? this.initData.uid : '';
                        if (this.initData.uid == "10005023") {
                            new Vconsole();
                        }
                        sessionStorage.setItem("userInfo", JSON.stringify(data));
                        document.onselectstart = function (e) {
                            return false;
                        };
                        this.getBaseInfo();
                    });
            }, time);
        }
    },
    methods: {
        msg(m) {
            Toast(m);
        },
        msgLong(m) {
            Toast({
                duration: 3000,
                message: m
            });
        },
        getBaseInfo() {
            this.request.get("/v1/hwd/guess/conf").then((res) => {
                this.isLoading = false
                if (res.code == 200) {
                    console.log(1)
                    let data = res.data;
                    this.conch = data.conch;
                    this.imSign = data.imSign;
                    this.imRid = data.rid;
                    this.imGuid = data.guid;
                    let schedule = data.schedule;
                    res.data.list.forEach(v => {
                        this.$nextTick(e => {
                            this.betedInfo[v.ticket] = v.count;
                        })
                    })
                    if (schedule.status === 1) {
                        this.roll();
                    } else if (schedule.status === 2) {
                        this.isRollStop = schedule.lucky_ticket
                        this.current = this.isRollStop - 1
                        if (this.betedInfo[this.isRollStop] && this.betedInfo[this.isRollStop] > 0) {
                            this.rsTxt = this.betedInfo[this.isRollStop] * this.giftArr[this.isRollStop - 1].mul * 1000
                            this.showRs = true;
                            setTimeout(e => {
                                this.showRs = false;
                            }, 6000)
                        } else {
                            let cup = 0;
                            Object.values(this.betedInfo).forEach(e => {
                                cup += (e - 1 + 1);
                            })
                            if (cup > 0) {
                                this.msgLong(`很遗憾，未猜中礼物，获得${cup * 2}贝壳的参与奖励。`)
                            }
                        }
                        if (schedule.mvp) {
                            this.bigTxt = schedule.mvp;
                            this.showBig = true;
                        }
                    }
                    this.enterTime = data.server_time;
                    this.dealInfo(data.server_time, schedule.status, schedule.tik_time, schedule.sid)
                    this.joinGroup();
                } else {
                    this.msg(res.message);
                }
            });
        },
        checkShowTip() {
            var data = new Date();
            var time = data.getMonth() + 1 + "/" + data.getDate();
            if (localStorage.getItem("guessTipKey")) {
                if (localStorage.getItem("guessTipKey") == time) {
                    this.noTip = true;
                }
            }
        },
        //处理此轮游戏数据
        dealInfo(server_time, status, tik_time, sid) {
            this.getTimeError(server_time);
            this.currentStatus = status;
            this.currentSid = sid;

            if (status === 0) {//状态 0:开始 1:准备开奖 2:开奖结果 3:结束
                this.showTime = true;
                this.isOver = false;
                this.showBig = false
                this.betedInfo = {};
                this.choseGift = '';
                this.isRollStop = false;
                this.current = -1;
                this.moveArr = [];
                this.runningTime(tik_time)
            } else {
                this.showTime = false;
                this.isOver = true;
            }
        },
        movePx(e) {
            if (this.isOver) {
                return;
            }
            this.beginLeft = e.clientX;
        },
        //获取当前系统时间于服务时间的误差值
        getTimeError(t) {
            let currentTime = Math.round(new Date() / 1000);
            this.timeError = currentTime - t;
        },
        //礼物选择
        choseThis(n) {
            this.choseGift = n;
        },
        //下注
        betThis(x) {
            if (this.currentStatus !== 0) {
                Toast('本轮已结束，请等待下一轮！')
                return;
            }
            if (this.choseGift === '') {
                this.msg('请先选择礼物')
                return;
            }
            this.betNum = x;
            if (this.noTip) {
                this.confirmBet()
            } else {
                this.showConfirm = true;
            }
        },
        confirmBet() {
            this.showConfirm = false;
            let data = {
                rid: this.rid,
                type: this.choseGift + 1,
                count: this.betNum
            }
            this.request.post("/v1/hwd/guess/buyTicket", data).then((res) => {
                if (res.code == 200) {
                    if (this.noTip) {
                        let data = new Date();
                        let time = data.getMonth() + 1 + "/" + data.getDate();
                        localStorage.setItem("guessTipKey", time)
                    }
                    this.moveArr.push(this.choseGift + 1);
                    // this.choseGift = '';
                    this.betSid = this.currentSid;
                    res.data.list.forEach(v => {
                        this.$nextTick(e => {
                            this.betedInfo[v.ticket] = v.count;
                        })
                    })
                    this.conch = res.data.conch;
                    console.log(this.moveArr)
                } else {
                    this.msg(res.message);
                }
            });
        },
        joinGroup() {
            // 监听群聊信息
            this.tim.on(this.TIM.EVENT.MESSAGE_RECEIVED, event => {
                // console.log(event)
                event.data.forEach(msg => {
                    if (msg.conversationType === "GROUP") {
                        if (msg.payload.data) {
                            //群聊消息
                            let data = JSON.parse(msg.payload.data);
                            if (data.type === 33000) {
                                let message = Proto['GuessScheduleStatusChange'].deserializeBinary(data.biz);
                                console.log(message.getStatus(), 'data.status')
                                let status = message.getStatus()
                                let sid = message.getSid();
                                let serverTime = message.getServerTime();
                                if (sid < this.currentSid) {
                                    return
                                }
                                //避免历史消息影响倒计时
                                if (serverTime < this.enterTime && sid == this.currentSid) {
                                    return
                                }
                                console.log(message.getSid(), 'data.sid')
                                console.log(message.getTikTime(), 'data.tik_time')
                                console.log(message.getLuckyTicket(), 'data.lucky_ticket')
                                console.log(message.getBig(), 'data.getBig')
                                console.log(message.getServerTime(), 'data.getServerTime')
                                this.dealInfo(message.getServerTime(), status, message.getTikTime(), message.getSid())
                                if (status === 1) {
                                    this.roll();
                                }
                                if (status == 2) {
                                    this.bigTxt = message.getBig();
                                    this.winGift = message.getLuckyTicket();
                                    this.isRollStop = this.winGift
                                }
                            }
                        }
                    } else {
                        console.log('未知消息：', msg, msg.conversationType);
                    }
                })
            }, this);
            // 监听事件，如：
            this.tim.on(this.TIM.EVENT.SDK_READY, event => {
                // 收到离线消息和会话列表同步完毕通知，接入侧可以调用 sendMessage 等需要鉴权的接口
                // event.name - TIM.EVENT.SDK_READY
                console.log('SDK_READY')

            }, this);
            // 监听事件，如：
            this.tim.on(this.TIM.EVENT.SDK_NOT_READY, event => {
                // 收到离线消息和会话列表同步完毕通知，接入侧可以调用 sendMessage 等需要鉴权的接口
                // event.name - TIM.EVENT.SDK_READY
                // 拉取会话列表
                console.log(event, 'SDK_NOT_READY  ---重连')
            }, this);
            // 监听事件，如：
            this.tim.on(this.TIM.EVENT.KICKED_OUT, event => {
                // 收到离线消息和会话列表同步完毕通知，接入侧可以调用 sendMessage 等需要鉴权的接口
                // event.name - TIM.EVENT.SDK_READY
                // 拉取会话列表
                console.log(event.data.type, 'KICKED_OUT')
            }, this);
            // 监听事件，如：
            this.tim.on(this.TIM.EVENT.NET_STATE_CHANGE, event => {
                // 收到离线消息和会话列表同步完毕通知，接入侧可以调用 sendMessage 等需要鉴权的接口
                // event.name - TIM.EVENT.SDK_READY
                // 拉取会话列表
                console.log(event.data.state, 'NET_STATE_CHANGE')
            }, this);
            //加入群聊
            this.tim.joinGroup({ groupID: `${this.imRid}`, type: this.TIM.TYPES.GRP_AVCHATROOM }).then(res => {
                console.log(`已加入${this.imRid}群聊`)
                this.isIMReady = true;
            }).catch(err => {
                this.msg(err)
            });
            // this.imLogin();
        },
        // IM登录
        imLogin() {
            let dataLogin = {
                userID: `${this.imGuid}`,
                userSig: this.imSign
            }
            this.tim.login(dataLogin).then(res => {
                console.log(res, 'tim.login')
            }).catch(err => {
                this.msg(err)
            });
        },
        // IM登录
        imLoginOut(callBack) {
            this.tim.logout().then(res => {
                console.log(res, 'tim.imLoginOut')
                callBack && callBack();
            }).catch(err => {
                console.log(err)
            });
        },
        //更新PK倒计时
        runningTime(v) {
            v = v || 0;
            if (this.interKey) {
                clearInterval(this.interKey)
            }
            this.getTimeValue(v)
            this.interKey = setInterval(e => {
                this.getTimeValue(v);
            }, 1000)
        },
        getTimeValue(v) {
            let currentTime = Math.round(new Date() / 1000);
            let _del = v - (currentTime - this.timeError);//抵消计时器1秒延迟
            this.runTime = _del > 0 ? _del : '0';
        },
        //重复上轮
        tryLastAgain() {
            let data = {
                rid: this.rid
            }
            this.request.post("/v1/hwd/guess/reBuyTicket", data).then((res) => {
                if (res.code == 200) {
                    res.data.list.forEach(v => {
                        this.$nextTick(e => {
                            this.betedInfo[v.ticket] = v.count;
                            this.moveArr.push(v.ticket);
                        })
                    })
                    this.betSid = this.currentSid;
                    this.conch = res.data.conch;
                } else {
                    this.msg(res.message);
                }
            });

        },
        //刷新余额
        refreshBalance() {
            this.request.get("/v1/hwd/guess/conchInfo").then((res) => {
                if (res.code == 200) {
                    this.conch = res.data.conch;
                    console.log(res)
                } else {
                    this.msg(res.message);
                }
            });
        },

        //转盘滚动
        roll() {
            setTimeout(() => {
                if (this.isRollStop !== false && this.isRollStop == (this.current + 1)) {
                    setTimeout(() => {
                        if (this.betedInfo[this.winGift] && this.betedInfo[this.winGift] > 0) {
                            this.rsTxt = this.betedInfo[this.winGift] * this.giftArr[this.winGift - 1].mul * 1000
                            this.showRs = true;
                            setTimeout(e => {
                                this.showRs = false;
                            }, 6000)
                        } else {
                            let cup = 0;
                            Object.values(this.betedInfo).forEach(e => {
                                cup += (e - 1 + 1);
                            })
                            if (cup > 0) {
                                this.msgLong(`很遗憾，未猜中礼物，获得${cup * 2}贝壳的参与奖励。`)
                            }
                        }
                        if (this.bigTxt) {
                            this.showBig = true
                        }
                        this.refreshBalance();
                    }, 1000)
                    return
                }
                this.current++
                if (this.current == 6) {
                    this.current = 0
                }

                if (this.isRollStop !== false) {
                    this.speed += 80;
                    this.speed = this.speed > 200 ? 200 : this.speed;
                } else {
                    this.speed -= 50;
                    this.speed = this.speed < 80 ? 80 : this.speed;
                }
                this.roll()
            }, this.speed)
        },
    },
    watch: {},
    beforeDestroy() {
        this.imLoginOut();
    },
    computed: {},


}
</script>
<style lang="scss" scoped>
.guess-box {
    height: 1312px;
    background: url("~@/assets/kitchen/game-bg.png") no-repeat bottom center transparent;
    background-size: 100% 1166px;
    position: relative;
    overflow: hidden;

    * {
        font-family: PingFangSC-Medium, PingFang SC, "Helvetica Neue", Arial, sans-serif;
        font-weight: bold;
    }
}

.top-box {
    position: absolute;
    right: 0;
    width: 100%;
    top: 20px;

    .balance-box {
        position: absolute;
        right: 18px;
        z-index: 1;

        .coin-box,
        .phone-box {
            float: right;
            height: 44px;
            background: url("~@/assets/guess/jifen_icon@3x.png") no-repeat 4px center #6E5548;
            background-size: 40px;
            border-radius: 22px;
            font-size: 24px;
            box-sizing: border-box;
            padding-right: 10px;
            color: #FFFFFF;
            text-indent: 54px;
            display: flex;
            align-items: center;

            span {
                line-height: 24px;
            }
        }

        .phone-box {
            background-image: url(~@/assets/kitchen/icon-phone.png);
            position: relative;
            padding-right: 100px;
            margin-left: 20px;

            button {
                width: 88px;
                height: 44px;
                background: url("~@/assets/guess/shop-btn.png") no-repeat center;
                background-size: cover;
                position: absolute;
                right: 0;
                top: 0;
            }
        }
    }

    .title {
        position: absolute;
        top: 0px;
        left: 50%;
        transform: translateX(-50%);
        background: url("~@/assets/kitchen/title.png") no-repeat center;
        background-size: contain;
        z-index: 10;
        width: 478px;
        height: 260px;
    }

}

.history-line-box {
    width: 708px;
    height: 72px;
    background: url("~@/assets/kitchen/history-scroll-bg.png") no-repeat center;
    background-size: contain;
    position: absolute;
    top: 320px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    box-sizing: border-box;
    padding: 0 10px;

    .history-line {
        width: 630px;
        height: 72px;
        display: flex;
        margin-left: 78px;
        align-items: center;
        justify-content: flex-start;
        overflow-y: hidden;
        overflow-x: auto;

        .history-item {
            width: 52px;
            height: 52px;
            margin-right: 4px;
            background: url("~@/assets/kitchen/icon-mini-1.png") no-repeat center;
            background-size: contain;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            color: #fff;

            @for $i from 1 through 6 {
                &:nth-child(#{$i}) {
                    background-image: url("~@/assets/kitchen/icon-mini-#{$i}.png");
                }
            }
        }
    }

}

.rolling-box {
    width: 750px;
    height: 750px;
    position: absolute;
    top: 350px;
    overflow: hidden;
    z-index: 2;

    .gift-list-box {
        width: 0px;
        height: 0px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        ul {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 0px;
            height: 0px;
            transform: translate(-50%, -50%);
        }

        li {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 156px;
            height: 168px;
            transform: translate(-50%, -50%) rotateZ(0) translateY(-200px);
            background: url("~@/assets/kitchen/icon-lotto-1.png") no-repeat center;
            background-size: cover;

            @for $i from 1 through 6 {
                &:nth-child(#{$i}) {
                    background-image: url("~@/assets/kitchen/icon-lotto-#{$i}.png");
                }
            }

            &:nth-child(1) {
                transform: translate(-50%, -50%) rotateZ(-150deg) translateY(-200px) rotateZ(150deg);
            }

            &:nth-child(2) {
                transform: translate(-50%, -50%) rotateZ(-210deg) translateY(-200px) rotateZ(210deg);
            }

            &:nth-child(3) {
                transform: translate(-50%, -50%) rotateZ(-270deg) translateY(-250px) rotateZ(270deg);
            }

            &:nth-child(4) {
                transform: translate(-50%, -50%) rotateZ(-330deg) translateY(-200px) rotateZ(330deg);
            }

            &:nth-child(5) {
                transform: translate(-50%, -50%) rotateZ(-390deg) translateY(-200px) rotateZ(30deg);
            }

            &:nth-child(6) {
                transform: translate(-50%, -50%) rotateZ(-450deg) translateY(-250px) rotateZ(90deg);
            }



            &.turn:after,
            &.active:after {
                background-image: url("~@/assets/kitchen/icon-lotto-1-c.png");

                @for $i from 1 through 6 {
                    &:nth-child(#{$i}) {
                        background-image: url("~@/assets/kitchen/icon-lotto-#{$i}-c.png");
                    }
                }
            }

            &.active:after {
                animation: shaking 1s infinite linear;
            }


        }

        .running-box {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 176px;
            height: 168px;
            transform: translate(-50%, -50%);
            margin-top: -20px;
            background: url("~@/assets/kitchen/center-bg.png") no-repeat center;
            background-size: cover;

            span {
                font-size: 28px;
                color: #FFCA85;
                line-height: 28px;
            }

            p {
                font-size: 32px;
                color: #FFCA85;
                text-align: center;
                font-weight: bold;
                line-height: 48px;

                span {
                    font-size: 48px;
                    font-weight: bold;
                    line-height: 48px;
                }
            }
        }

        .over-box {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 160px;
            font-size: 28px;
            height: 28px;
            text-align: center;
            font-weight: 400;
            color: #FFCA85;
            transform: translate(-50%, -50%);
        }
    }
}

.bottom-box {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background: #462D21;

    width: 750px;
    height: 364px;

    background: rgba(255, 255, 255, 0.13);
    box-shadow: inset 0px 2 126px 0px rgba(205, 134, 26, 0.66), inset 0px 2 46px 0px rgba(255, 255, 255, 0.5);
    border-radius: 34px 34px 0px 0px;
    box-sizing: border-box;
    border: 2px solid #FFF1BE;

    .chose-box {
        position: absolute;
        top: 65px;
        width: 100%;

        ul {
            display: flex;
            align-items: center;
            justify-content: space-around;

            li {
                width: 110px;
                height: 160px;
                position: relative;
                z-index: 1;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                flex-direction: column;

                .icon {
                    display: block;
                    width: 110px;
                    height: 128px;
                    background: url("~@/assets/kitchen/game-tab-1.png") no-repeat center top;
                    background-size: 156px auto;
                    z-index: -10;
                }


                &.win:before {
                    background-image: url(~@/assets/guess/beilv_xuanzhong_bg@3x.png);
                }

                .get-num {
                    width: 100px;
                    height: 29px;
                    font-weight: 400;
                    font-size: 20px;
                    color: #FFFFFF;
                     background: url("~@/assets/kitchen/bet-num-bg.png") no-repeat center bottom;
                    background-size: 100px 29px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }   

                @for $i from 1 through 6 {
                    &:nth-child(#{$i}) .icon-#{$i} {
                        background-image: url("~@/assets/kitchen/game-tab-#{$i}.png");
                    }
                }


                &.active {
                    @for $i from 1 through 6 {
                        &:nth-child(#{$i}) .icon-#{$i} {
                            background-image: url("~@/assets/kitchen/game-tab-#{$i}-c.png");
                        }
                    }
                }

            }
        }

    }

    .button-box {
        position: absolute;
        left: 0;
        bottom: 0;
        height: 172px;
        right: 0;

        .tip {
            font-size: 20px;
            color: #fff;
            position: absolute;
            left: 24px;
            top: 10px;
        }

        .add-box {
            position: absolute;
            left: 24px;
            top: 50px;

            .add-btn {
                float: left;
                background: rgba(0, 0, 0, 0.3);
                font-size: 28px;
                width: 120px;
                display: block;
                height: 40px;
                line-height: 40px;
                color: #fff;
                margin-right: 10px;
                border-radius: 20px;
                position: relative;
                text-align: center;

                .price {
                    position: absolute;
                    bottom: -45px;
                    width: 100%;
                    left: 50%;
                    float: left;
                    font-size: 20px;
                    transform: translateX(-50%);
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    i.icon {
                        display: inline-block;
                        width: 20px;
                        height: 20px;
                        background: url("~@/assets/kitchen/icon-phone.png") no-repeat center;
                        background-size: cover;
                        margin-right: 8px;
                    }
                }
            }
        }

        .last-again {
            width: 160px;
            height: 52px;
            border-radius: 26px;
            opacity: 0.3;
            font-size: 28px;
            position: absolute;
            top: 50px;
            right: 120px;
            background: rgb(0, 0, 0);

            &.active {
                opacity: 1;
                background: #d88e40;
                color: #fff;
            }
        }

        .nav {
            width: 48px;
            height: 48px;
            background: transparent;
            color: #AB855F;
            position: absolute;
            z-index: 10;
            right: 32px;
            top: 54px;
            display: flex;
            padding: 5px 0;
            box-sizing: border-box;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;

            span {
                width: 32px;
                height: 4px;
                display: block;
                background: #AB855F;

            }
        }

        .phone-list {
            position: absolute;
            top: 50px;
            width: 30px;
            height: 30px;
            background: url("~@/assets/kitchen/icon-phone.png") no-repeat center transparent;
            background-size: cover;
            transition: all 0.4s;
            z-index: 11;
            opacity: 0;

            &.show-end-1 {

                animation: end-1 0.5s 1 linear;
            }

            &.show-end-2 {
                animation: end-2 0.5s 1 linear;
            }

            &.show-end-3 {
                animation: end-3 0.5s 1 linear;
            }

            &.show-end-4 {
                animation: end-4 0.5s 1 linear;
            }

            &.show-end-5 {
                animation: end-5 0.5s 1 linear;
            }

            &.show-end-6 {
                animation: end-6 0.5s 1 linear;
            }
        }
    }
}

.nav-list-mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 80;
    background: transparent;

    .nav-list {
        width: 130px;
        height: 240px;
        position: absolute;
        bottom: 140px;
        right: 10px;
        background: rgba(0, 0, 0, 0.7);
        padding: 0 30px;
        border-radius: 5px;
        z-index: 20;

        li {

            line-height: 80px;
            font-size: 28px;
            color: #fff;
            text-align: center;

            &:nth-child(2) {
                border-top: 1px solid rgba(238, 238, 238, 0.8);
                border-bottom: 1px solid rgba(238, 238, 238, 0.8);

            }

        }
    }
}

.notice-box {
    width: 560px;
    height: 64px;
    background: rgba(255, 201, 51, 0.9);
    border-radius: 32px;
    color: #36211B;
    font-size: 24px;
    line-height: 64px;
    position: fixed;
    top: 136px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
}

.mask-box {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);

    .confirm-box {
        width: 550px;
        height: 292px;
        background: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 10px;

        .top-box {
            padding: 10px 40px;
            box-sizing: border-box;
            text-align: center;

            p {
                font-size: 26px;
                color: #666666;
                text-align: center;
                line-height: 110px;
            }

            span {
                font-size: 24px;
                color: #999999;
                line-height: 24px;
                display: flex;
                align-items: center;
                justify-content: center;

                .icon {
                    width: 24px;
                    display: inline-block;
                    height: 24px;
                    background: url(~@/assets/guess/check.png) no-repeat center;
                    background-size: cover;
                    margin-right: 10px;

                    &.checked {
                        background-image: url(~@/assets/guess/checked.png);
                    }
                }
            }

        }

        .button-box {
            height: 99px;
            position: absolute;
            bottom: 0;
            left: 20px;
            right: 20px;
            border-top: 1px solid rgba(238, 238, 238, 1);
            display: flex;
            align-items: center;

            button {
                width: 50%;
                font-size: 28px;
                height: 99px;
                color: #666666;
                text-align: center;
                background: transparent;
                line-height: 99px;

                &.confirm {
                    color: #F4D716;
                }
            }
        }
    }

    &.result {
        background: rgba(0, 0, 0, 0.8);
    }

    .result-box {
        width: 600px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 30px;
        height: 600px;
        background: url("~@/assets/guess/liwu_xuanzhong_bg@3x.png") no-repeat center transparent;
        background-size: cover;

        .img-box {
            width: 320px;
            height: 320px;
            top: 50%;
            left: 50%;
            position: absolute;
            transform: translate(-50%, -50%);
            display: flex;
            align-items: center;
            justify-content: center;

            img {
                width: 60%;
                height: 60%;
            }
        }

        p {
            font-size: 32px;
            color: #FFFFFF;
            letter-spacing: 0;
            width: 100%;
            position: absolute;
            bottom: 80px;
            line-height: 40px;
            text-align: center;
        }

        button {
            width: 200px;
            height: 84px;
            color: #fff;
            font-size: 32px;
            background: #8E5C47;
            border-radius: 47px;
            position: absolute;
            bottom: -40px;
            left: 50%;
            transform: translateX(-50%);
        }
    }
}

.left-enter-box {
    position: absolute;
    z-index: 22;
    left: 100%;
    width: 100%;
    bottom: 0;
    top: 0;

    &.show {
        left: 0;
        animation: enter 0.3s 1 linear;
    }
}

@keyframes enter {
    0% {
        left: 100%;
    }

    100% {
        left: 0;
    }
}

@keyframes running {
    0% {
        transform: translate(-50%, -50%) rotateZ(0);
    }

    100% {
        transform: translate(-50%, -50%) rotateZ(360deg);
    }
}

@keyframes shaking {
    0% {
        opacity: 0.7;
    }

    50% {
        opacity: 1;
    }

    100% {
        opacity: 0.7;
    }
}

@keyframes end-1 {
    0% {
        opacity: 1;
    }

    100% {
        top: -45px;
        left: 50px;
        opacity: 1;
    }
}

@keyframes end-2 {
    0% {
        opacity: 1;
    }

    100% {
        top: -45px;
        left: 170px;
        opacity: 1;
    }
}

@keyframes end-3 {
    0% {
        opacity: 1;
    }

    100% {
        top: -45px;
        left: 300px;
        opacity: 1;
    }
}

@keyframes end-4 {
    0% {
        opacity: 1;
    }

    100% {
        top: -45px;
        left: 428px;
        opacity: 1;
    }
}

@keyframes end-5 {
    0% {
        opacity: 1;
    }

    100% {
        top: -45px;
        left: 550px;
        opacity: 1;
    }
}

@keyframes end-6 {
    0% {
        opacity: 1;
    }

    100% {
        top: -45px;
        left: 668px;
        opacity: 1;
    }
}
</style>
