<template>
    <div class="guess-box">
        <loading :show="isLoading"></loading>
        <!--顶部区域-->
        <div class="top-box">
            <button class="btn-history" @click="toShowHistory"></button>
            <div class="balance-box">
                <div class="shell-box">
                    <span>{{ conch  }}</span>
                    <button class="btn-add" @click="showBuy"></button>
                </div>
                <button  @click="showShop = true" class="shop-btn"></button>
            </div>
            <div class="title"></div>
        </div>
        <!--转盘区域-->
        <div class="rolling-box">
            <div class="gift-list-box">
                <ul>
                    <li v-for="(item,index) in giftArr"
                        :class="{turn:current==index,active:isRollStop==(index+1)&&isRollStop==(current+1)}"
                        :key="index">
                        <img :src="`https://r1.xunsns.com/gift_v2/${item.id}_b`" alt="">
                        <span><i>{{ item.tip }}</i></span>
                    </li>
                </ul>
                <div class="running-box" v-if="showTime">
                    <span>本轮进行中</span>
                    <p><span>{{ runTime }}</span>s</p>
                </div>
                <div class="over-box" v-if="isOver">
                    本轮已结束
                </div>
            </div>
        </div>
        <!--底部操作区-->
        <div class="bottom-box">
            <div class="chose-box">
                <ul>
                    <li v-for="(item,index) in giftArr" @click="choseThis(index)"
                        :class="`${betedInfo[index+1]>0?'win':''} ${choseGift===index?'active':''} `"
                        :key="index">
                        <img :src="`https://r1.xunsns.com/gift_v2/${item.id}_s`" alt="">
                        <span>{{ item.tip }}</span>
                        <span class="get">{{ betedInfo[index + 1] || 0 }}</span>
                    </li>
                </ul>
            </div>
            <div class="button-box" @click="movePx($event)">
                <div class="tip">
                    单次增加数量：
                </div>
                <div class="add-box">
                    <span class="add-btn" @click="betThis(1)">+1 <span class="price">
                       <i class="icon"></i>X200
                    </span>
                    </span>
                    <span class="add-btn" @click="betThis(10)">+10 <span class="price">
                       <i class="icon"></i>X2000
                    </span>
                    </span>
                    <span class="add-btn" @click="betThis(99)">+99 <span class="price">
                       <i class="icon"></i>X19800
                    </span>
                    </span>
                </div>
                <button class="last-again active" key="1" v-if="(currentSid-betSid)==1&&!isOver"
                        @click="tryLastAgain">重复上轮
                </button>
                <button class="last-again" key="2" v-else>重复上轮</button>
                <button class="nav" @click="showNav = true">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div class="shell-list" v-for="(item,index) in moveArr" :key="item+index+'s'"
                     :style="beginLeft ? `left:${beginLeft-20}px` : ''"
                     :class="`show-end-${item}`"
                >
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
                    <p>本次支付需消耗{{ betNum * 200 }}贝壳，是否确定</p>
                    <span @click="noTip = !noTip"><i :class="`icon ${noTip?'checked':''}`"></i>今日不再提醒</span>
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
                    <img :src="`https://r1.xunsns.com/gift_v2/${giftArr[winGift-1].id}_b`" alt="">
                </div>
                <p>恭喜您，本轮共获得{{ rsTxt }}贝壳</p>
                <button @click="showRs=false">确定</button>
            </div>
        </div>
        <!--子页面-->
        <div class="left-enter-box" :class="`${showHistory||showRule||showShop?'show':''}`"
             v-if="showHistory||showRule||showShop">
            <History :giftArr="giftArr" v-if="showHistory" @back="showHistory = false"></History>
            <Rule :appName="appName" v-if="showRule" @back="showRule = false"></Rule>
            <Shop @refreshBalance="e=>{
               conch = e
            }" :conch="conch"
            :isFromPc="isFromPc"
            :token="token"
            v-if="showShop"
            @back="showShop = false"></Shop>
        </div>
        <BuyDialog
                v-if="showBuyTicket"
                :rid="rid"
                :ticket="conch"
                @refresh="refreshTicket"
                :pay_dress="pay_dress"
                @closeThis="e=>{showBuyTicket = false;isAutoBuyTicket = e;}">
        </BuyDialog>
        <NeedRecharge
                v-if="showNeedRecharge"
                @closeThis="closeRechargeTip">
        </NeedRecharge>
        <HistoryDialog v-if="showHistoryBox" :pay_dress="pay_dress" :giftArr="giftArr"
                       @closeThis="e=>{showHistoryBox = false; noScroll = false;}">
        </HistoryDialog>
        <Law :appName="appName" v-if="showLaw" @agreeThis="agreeLaw" @closeThis="lawClose"></Law>
    </div>
</template>
<script>
import {Icon, Toast} from "vant";
import Rule from "./rule";
import History from "./history";
import Shop from "./shop";
import TIM from 'tim-js-sdk';
import Vconsole from "vconsole";
import TIMUploadPlugin from 'tim-upload-plugin';
import Proto from '/IMBody_pb.js'; // Proto
import '@/utils/build';
import loading from "@/components/loading";
import BuyDialog from "./components/BuyDialog.vue";
import NeedRecharge from "./components/NeedRecharge.vue";
import Law from "./components/Law.vue";
import HistoryDialog from "./components/HistoryDialog.vue"; //

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
            moveArr: [],//动画用
            enterTime: '',//进房系统时间
            currentStatus: '',
            currentSid: '',//当前轮次
            betedInfo: {},
            betSid: '',//下注轮次
            speed: 300,
            giftArr: [
                {id: 101611,name:'掌声', tip: '×2倍', mul: '2',},
                {id: 100761,name:'一见钟情', tip: '×4倍', mul: '4',},
                {id: 100774,name:'香吻', tip: '×8倍', mul: '8',},
                {id: 101447,name:'怦然心动', tip: '×16倍', mul: '16',},
                {id: 101169,name:'珍爱花海', tip: '×20倍', mul: '20',},
                {id: 102014,name:'臻爱永恒', tip: '×30倍', mul: '30',},
            ],
            isFromPc: false,
            token: "",
            showBuyTicket: false,
            isAutoBuyTicket: false,//是否自动帮我购买
            showNeedRecharge: false,
            showHistoryBox: false,
            showLaw: false,
            isFirsatPlay: true,
            isPlay:false,
            isInit:false,
            pay_dress: [],
            appMap: {
                'com.wondership.iu': 'IU交友',
                'com.wondership.iuvv': 'IU语音',
                'com.wzxc.planet': '引力星球',
                'com.wzxc.planetios': '引力星球',
                'com.wondership.iuapp': 'IU交友',
                'com.fishdive.libertinism': '玩乐派',
                'com.brigtvioce.iuapp': 'IU语音',
                'com.jrjj.keysns': '引力星球',
                'com.catness.cateat': '引力星球',
                'com.wondership.mt': '觅她',
                'com.one.xyz.star': 'IU星球',
            },
            appName: '本应用',

        }
    },
    components: {
        HistoryDialog,
        NeedRecharge,
        BuyDialog,
        [Icon.name]: Icon,
        [Toast.name]: Toast,
        Rule,
        History,
        loading,
        Law,
        Shop
    },
    filters:{
      conchNum(conch){
          let value = Number(conch)
          if (value >= 10000) {
              let res= parseFloat(value/10000);
              let pointerl=res.toString().indexOf('.');
              return  res.toString().substring(0,parseInt(pointerl)+3)+ "w"
          } else {
              return value;
          }
      }
    },
    created() {
    },
    mounted() {
        let isFirst = localStorage.getItem(`isFirstPlayGuess2026`)
        if (isFirst == 2) {
            this.isFirstPlay = false;
        } else {
            this.isFirstPlay = true;
        }
        if (this.isFirstPlay) {
            this.showLaw = true;
        }
        let tip = localStorage.getItem(`autoBuyThisGuess`)
        if (tip == 2) {
            this.isAutoBuyTicket = true;
        } else {
            this.isAutoBuyTicket = false;
        }
        window.addEventListener('visibilitychange', this.visibilityState)
        let options = {
            SDKAppID: 1400818008
        };
        this.tim = TIM.create(options);
        this.TIM = TIM
        this.tim.setLogLevel(3);
        this.tim.registerPlugin({'tim-upload-plugin': TIMUploadPlugin});
        this.checkShowTip();
        this.isLoading = true
        this.appInit(data => {
            this.rid = data.rid > 0 ? data.rid : 1;
            this.uid = data.uid ? data.uid : '';
            let appid = data.header['X-appid'];
            if (this.appMap[appid]) {
                this.appName = this.appMap[appid]
            }
            this.version = data.header['X-appver'];
            this.userInfo = data;
            document.onselectstart = function (e) {
                return false;
            };
            this.getBaseInfo(true);
        }, '礼物猜猜猜',true)
    },
    methods: {
        //监听分享返回
        visibilityState() {
            if (document.visibilityState === 'visible' || event.persisted) {
                console.log('visible---')
                if(this.isInit){
                    window.location.reload();
                }
                // this.getBaseInfo();
                // //退出群聊
                // console.log(this.imRid,`-退出群聊`)
                // this.tim.quitGroup(`${this.imRid}`).then(res => {
                //     console.log(`已退出${this.imRid}群聊`)
                //     this.isIMReady = false;
                //     //加入群聊
                //     this.tim.joinGroup({groupID: `${this.imRid}`, type: this.TIM.TYPES.GRP_AVCHATROOM}).then(res => {
                //         console.log(`已加入${this.imRid}群聊`)
                //         this.isIMReady = true;
                //     }).catch(err => {
                //         this.msg(err)
                //     });
                // }).catch(err => {
                //     this.msg(err)
                // });


            }
        },
        msg(m) {
            Toast(m);
        },
        msgLong(m) {
            Toast({
                duration: 3000,
                message: m
            });
        },
        getBaseInfo(b) {
            this.request.post("/v1/star/guess/conf").then((res) => {
                this.isLoading = false
                if (res.code == 200) {
                    let data = res.data;
                    if(!res.data.checkUserIdAuth){
                        window.winOcx.tip('请先进行实名认证哦~');
                        window.winOcx.openAuthentication && window.winOcx.openAuthentication();
                        setTimeout(e=>{
                            window.winOcx.closePage && window.winOcx.closePage();
                        },300)
                        return
                    }
                    // if(!res.data.checkUserFace){
                    //     window.winOcx.tip('需要人脸~');
                    //     let _data = {
                    //         realname: '',
                    //         id_no: ''
                    //     }
                    //     setTimeout(e=>{
                    //         window.winOcx.openFaceDetection && window.winOcx.openFaceDetection(_data);
                    //     },300)
                    //     // return
                    // }
                    this.isInit = true;
                    this.conch = data.conch;
                    this.imSign = data.imSign;
                    this.imRid = data.rid;
                    this.imGuid = data.guid;
                    this.pay_dress = data.pay_dress;
                    let schedule = data.schedule;
                    res.data.list.forEach(v => {
                        this.$nextTick(e => {
                            this.betedInfo[v.ticket] = v.count;
                        })
                    })
                    if (schedule.status === 1) {
                        this.isPlay = true;
                        this.roll();
                    } else if (schedule.status === 2) {
                        this.isRollStop = schedule.lucky_ticket
                        this.current = this.isRollStop - 1
                        if (this.betedInfo[this.isRollStop] && this.betedInfo[this.isRollStop] > 0) {
                            this.rsTxt = this.betedInfo[this.isRollStop] * this.giftArr[this.isRollStop - 1].mul * 200
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
                    b&&this.joinGroup();
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
                this.isPlay = false;
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
                count: this.betNum,
                check_ticket: this.isAutoBuyTicket ? 2 : 1,
                ver:1
            }
            this.request.post("/v1/star/guess/buy_ticket", data).then((res) => {
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
                } else if(res.code == 403102){
                    window.winOcx.openAuthentication && window.winOcx.openAuthentication();
                } else if (res.code == 4001) { //抽奖券不足
                    this.isLock = false;
                    window.winOcx.tip('贝壳数量不足');
                    this.showBuy()
                } else if (res.code == 400990) {//余额不足
                    this.isLock = false;
                    window.winOcx.tip('余额不足');
                    this.showRecharge()
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
                                // console.log(message.getSid(), 'data.sid')
                                // console.log(message.getTikTime(), 'data.tik_time')
                                // console.log(message.getLuckyTicket(), 'data.lucky_ticket')
                                // console.log(message.getBig(), 'data.getBig')
                                // console.log(message.getServerTime(), 'data.getServerTime')
                                this.dealInfo(message.getServerTime(), status, message.getTikTime(), message.getSid())
                                if (status === 1) {
                                    this.isPlay = true;
                                    this.roll();
                                }
                                if (status == 2) {
                                    this.bigTxt = message.getBig();
                                    this.winGift = message.getLuckyTicket();
                                    console.log( this.winGift , '2---winGift')
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
                var data = new Date();
               let time = (data.getMonth() + 1) + "/" + data.getDate()+'/' + data.getHours()+'/' + data.getMinutes()+'/' + data.getSeconds();
                console.log(event.data.state, time,'NET_STATE_CHANGE')
            }, this);
            //加入群聊
            this.tim.joinGroup({groupID: `${this.imRid}`, type: this.TIM.TYPES.GRP_AVCHATROOM}).then(res => {
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
                rid: this.rid,
                check_ticket: this.isAutoBuyTicket ? 2 : 1,
                ver:1
            }
            this.request.post("/v1/star/guess/re_buy_ticket", data).then((res) => {
                if (res.code == 200) {
                    res.data.list.forEach(v => {
                        this.$nextTick(e => {
                            this.betedInfo[v.ticket] = v.count;
                            this.moveArr.push(v.ticket);
                        })
                    })
                    this.betSid = this.currentSid;
                    this.conch = res.data.conch;
                } else if(res.code == 403102){
                    window.winOcx.openAuthentication && window.winOcx.openAuthentication();
                }  else if (res.code == 4001) { //抽奖券不足
                    this.isLock = false;
                    window.winOcx.tip('贝壳数量不足');
                    this.showBuy()
                }  else if (res.code == 400990) {//余额不足
                    this.isLock = false;
                    window.winOcx.tip('余额不足');
                    this.showRecharge()
                }else {
                    this.msg(res.message);
                }
            });

        },
        //刷新余额
        refreshBalance() {
            this.request.post("/v1/star/guess/conch_info").then((res) => {
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

            if(!this.isPlay){
                return
            }
            setTimeout(() => {
                if (this.isRollStop !== false && this.isRollStop == (this.current + 1)) {
                    this.isPlay = false
                    setTimeout(() => {
                        if (this.betedInfo[this.winGift] && this.betedInfo[this.winGift] > 0) {
                            this.rsTxt = this.betedInfo[this.winGift] * this.giftArr[this.winGift - 1].mul * 200
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
        agreeLaw() {
            this.isFirsatPlay = false;
            this.showLaw = false
        },
        lawClose() {
            this.showLaw = false
        },
        showBuy() {
            this.showBuyTicket = true
        },
        refreshTicket(num) {
            this.conch = num;
        },
        //充值提醒
        showRecharge() {
            this.showNeedRecharge = true;
        },
        closeRechargeTip() {
            this.showNeedRecharge = false;
        },
        toShowHistory() {
            this.showHistoryBox = true;
        },
    },
    watch: {},
    beforeDestroy() {
        console.log('beforeDestroy')
        this.imLoginOut();
    },
    computed: {},


}
</script>
<style lang="scss" scoped>
.guess-box {
    height: 1176px;
    background: url("~@/assets/guess/bg_3.png") no-repeat top center transparent;
    background-size: 100% 1126px;
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

    .btn-history{
        position: absolute;
        left: 30px;
        width: 44px;
        height: 44px;
        border-radius: 4px;
        background: url("~@/assets/guess/icon-history.png") no-repeat center ;
        background-size: 34px;
    }

    .balance-box {
        position: absolute;
        right: 18px;
        z-index: 1;

        .coin-box, .shell-box {
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

        .shell-box {
            background-image: url(~@/assets/guess/shell.png);
            position: relative;
            padding-right: 60px;
            margin-left: 20px;
            margin-right: 100px;
            button {
                width: 44px;
                height: 44px;
                background: url("~@/assets/guess/tianjia_icon@3x.png") no-repeat center;
                background-size: cover;
            }

        }

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

    .title {
        width: 700px;
        height: 180px;
        background: url("~@/assets/guess/biaoti_bg@3x.png") no-repeat center;
        background-size: cover;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 15px;
    }

}

.rolling-box {
    width: 750px;
    height: 750px;
    background: url("~@/assets/guess/bg_1@3x.png") no-repeat center;
    background-size: cover;
    position: absolute;
    top: 150px;
    overflow: hidden;
    z-index: 2;

    &:before {
        content: '';
        position: absolute;
        display: block;
        top: 50%;
        left: 50%;
        width: 750px;
        height: 750px;
        transform: translate(-50%, -50%);
        background: url("~@/assets/guess/bg_2@3x.png") no-repeat center;
        background-size: cover;
        animation: running 60s infinite linear;
    }

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
            background: #000;
            transform: translate(-50%, -50%);
        }

        li {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 176px;
            height: 126px;
            transform: translate(-50%, -50%) rotateZ(0) translateY(-250px);

            img {
                width: 120px;
                height: 120px;
                position: absolute;
                left: 50%;
                top: 0px;
                transform: translateX(-50%);
            }

            span {
                font-size: 25px;
                color: #fff;
                position: absolute;
                bottom: -10px;
                left: 50%;
                width: 100px;
                height: 40px;
                text-align: center;
                background: rgba(33, 14, 1, 0.8);
                border-radius: 20px;
                line-height: 40px;
                transform: translateX(-50%);
                display: flex;
                align-items: center;
                justify-content: center;
                vertical-align: middle;
            }

            &:nth-child(1) {
                img {
                    width: 115px;
                    height: 115px;
                    top: -15px;
                    //margin-left: 15px;
                }

                transform: translate(-50%, -50%) rotateZ(60deg) translateY(-250px) rotateZ(-60deg);
            }

            &:nth-child(2) {
                img {
                    width: 115px;
                    height: 115px;
                    margin-top: 5px;
                }

                transform: translate(-50%, -50%) rotateZ(120deg) translateY(-250px) rotateZ(-120deg);
            }

            &:nth-child(3) {
                img {

                }

                transform: translate(-50%, -50%) rotateZ(180deg) translateY(-250px) rotateZ(-180deg);
            }

            &:nth-child(4) {
                img {

                }

                transform: translate(-50%, -50%) rotateZ(240deg) translateY(-250px) rotateZ(-240deg);
            }

            &:nth-child(5) {
                img {
                }

                transform: translate(-50%, -50%) rotateZ(300deg) translateY(-250px) rotateZ(-300deg);
            }

            &:nth-child(6) {
                img {
                }

                transform: translate(-50%, -50%) rotateZ(360deg) translateY(-250px) rotateZ(0deg);
            }

            &:after {
                content: '';
                display: none;
                //display: block;
                width: 340px;
                position: absolute;
                left: 50%;
                top: 50%;
                z-index: -1;
                margin-top: -10px;
                transform: translate(-50%, -50%);
                height: 340px;
                background: url("~@/assets/guess/liwu_xuanzhong_bg@3x.png") no-repeat center;
                background-size: cover;
            }

            &.turn:after, &.active:after {
                display: block;
            }

            &.active:after {
                animation: shaking 1s infinite linear;
            }


        }

        .running-box {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 150px;
            transform: translate(-50%, -50%);
            margin-top: -20px;

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
    height: 172px;
    z-index: 1;
    background: #462D21;

    .chose-box {
        position: absolute;
        top: -145px;
        width: 100%;

        ul {
            display: flex;
            align-items: center;
            justify-content: space-around;

            li {
                width: 120px;
                height: 140px;
                position: relative;
                z-index: 1;

                &:before {
                    content: '';
                    display: block;
                    position: absolute;
                    left: 50%;
                    bottom: 0;
                    transform: translateX(-50%);
                    width: 196px;
                    height: 258px;
                    background: url("~@/assets/guess/beilv_weixuanzhong_bg@3x.png") no-repeat center bottom;
                    background-size: 196px 258px;
                    z-index: -10;
                }

                &.active:after {
                    content: '';
                    display: block;
                    position: absolute;
                    left: 50%;
                    bottom: 0;
                    transform: translateX(-50%);
                    width: 196px;
                    height: 258px;
                    background: url("~@/assets/guess/beilv_xuanze_bg@3x.png") no-repeat center bottom;
                    background-size: 196px 258px;
                    z-index: -9;
                }

                &.win:before {
                    background-image: url(~@/assets/guess/beilv_xuanzhong_bg@3x.png);
                }

                img {
                    height: 64px;
                    width: 64px;
                    position: absolute;
                    left: 50%;
                    top: -15px;
                    transform: translateX(-50%);
                }


                span {
                    position: absolute;
                    left: 50%;
                    font-size: 22px;
                    line-height: 20px;
                    top: 60px;
                    width: 100%;
                    text-align: center;
                    color: #fff;
                    transform: translateX(-50%);


                    &.get {
                        top: 100px;
                    }
                }

                &:nth-child(1) {
                    img {
                        top: -20px;
                    }
                }

                &:nth-child(2) {
                    img {
                        width: 58px;
                        height: 58px;
                        //transform: translateX(-50%) scale(0.8);
                        top: -5px;
                    }
                }

                &:nth-child(3) {
                    img {
                        top: -8px;
                    }
                }

                &:nth-child(4) {
                    img {
                        top: -13px;
                    }
                }

                &:nth-child(5) {
                    img {
                        width: 62px;
                        height: 62px;
                        top: -11px;
                    }
                }
            }
        }

    }

    .button-box {
        position: absolute;
        left: 0;
        top: 0;
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
                        background: url("~@/assets/guess/shell.png") no-repeat center;
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
            color: #fff;
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

        .shell-list {
            position: absolute;
            top: 50px;
            width: 30px;
            height: 30px;
            background: url("~@/assets/guess/shell.png") no-repeat center transparent;
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
