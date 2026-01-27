<template>
    <div class="mask-box">
        <div class="history-dialog-box dialog" @click.stop>
            <div class="zindex-box">
                <span class="btn-close" @click="closeThis"></span>
                <div class="title"></div>
                <div class="tab-box" :class="{'act':tabIndex==2}">
                    <span :class="{'act':tabIndex==1}" @click="changeTab(1)"></span>
                    <span :class="{'act':tabIndex==2}" @click="changeTab(2)"></span>
                </div>
                <!--                <div class="th" v-if="tabIndex==2">-->
                <!--                    <div class="time">时间</div>-->
                <!--                    <div class="type">类型</div>-->
                <!--                    <div class="name">获得奖品</div>-->
                <!--                </div>-->
                <div class="content-box">
                    <div class="list-box">
                        <ul>
                            <template v-if="tabIndex==1">
                                <template v-for="(item,index) in listData">
                                    <li :key="index">
                                        <div class="frame-box">
                                            <DressImg :item="{id:pay_dress[0].id,type:1}"></DressImg>
                                            <!--                                            <img :src="`https://r1.xunsns.com/frame/${pay_dress[0].id}`" alt="">-->
                                        </div>
                                        <div class="info-box">
                                            <div class="name">
                                                <template v-if="item.gid!=0">购买</template>
                                                {{ pay_dress[0].name }}*{{ item.minute }}分钟
                                            </div>
                                            <div class="mid">
                                                <div class="left-box">
                                                    花费 <i class="icon coin"></i>x<span>{{ item.consume }}</span>
                                                </div>
                                                <div class="right-box">
                                                    获赠 <i class="icon"></i>x<span>{{ item.ticket }}</span>
                                                </div>
                                            </div>
                                            <div class="time">{{ item.created_at }}</div>
                                        </div>
                                    </li>
                                </template>
                                <template v-if="listData.length<1">
                                    <li class="nodata">
                                        暂无数据
                                    </li>
                                </template>
                            </template>
                            <template v-else>
                                <template v-for="(item,index) in listData">
                                    <li class="win" :key="index">
                                        <div class="left-box">
                                            <div class="show-bog">
                                                <img :src="`https://r1.xunsns.com/gift_v2/${giftArr[item.lucky_ticket-1].id}_s`"  alt="">
                                            </div>
                                            <div class="info-box">
                                                <p>本轮结果为 '{{giftArr[item.lucky_ticket-1].name}}'</p>
                                                <span>恭喜您获得{{item.get_conch}}贝壳</span>
                                            </div>
                                        </div>
                                        <div class="right-box">
                                            <div class="tp">
                                                <i class="icon-rs" :class="`${item.is_win?'suc':'fail'}`"></i>
                                            </div>
                                            <div class="left"><span class="time">{{ item.created_at }}</span></div>
                                        </div>
                                    </li>
                                </template>
                                <template v-if="listData.length<1">
                                    <li class="nodata">
                                        暂无数据
                                    </li>
                                </template>
                            </template>
                        </ul>
                    </div>
                    <div class="tip">
                        仅显示最近50条记录…
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import DressImg from "../../../../components/DressImg.vue";

export default {
    props: {
        pay_dress: Array,
        giftArr:{
            default:[]
        }
    },
    data() {
        return {
            tabIndex: 1,
            listData: []
        }
    },
    components: {DressImg},
    created() {
    },
    mounted() {
        this.getList();
    },
    methods: {
        changeTab(t) {
            this.tabIndex = t;
            this.listData = []
            this.getList();
        },
        closeThis() {
            this.$emit('closeThis')
        },
        getList() {
            let data = {
                page: 1
            }
            this.request
                    .post(this.tabIndex == 1 ? '/v1/star/guess/get_conch_get_log' : '/v1/star/guess/get_schedule_log', data)
                    .then((res) => {
                        if (res.code == 200) {
                            this.listData = res.data.list;
                        } else {
                            window.winOcx.tip(res.message);
                        }
                    });
        }
    },
    watch: {},
    computed: {},
    filters: {
        timesShow(v) {
            let _obj = {
                '1': '6',
                '10': '57',
                '50': '270',
            }
            return _obj[v];
        },
        boxShow(v) {
            let _obj = {
                '1': '星光礼遇',
                '2': '星途探索',
                '3': '星河臻选',
            }
            return _obj[v];
        }
    }


}
</script>
<style lang="scss" scoped>
.mask-box {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 9999;
    background: rgba(0, 0, 0, 0.5);

    .dialog {
        position: absolute;
        transform: translate(-50%, -50%) scale(0.9);
        left: 50%;
        top: 50%;
        height: 810px;
        width: 581px;
        background: url(~@/assets/shopBox/dialog-bg.png) no-repeat center;
        background-size: 100% 100%;

    }

    .history-dialog-box {
        box-sizing: border-box;
        @extend .dialog;
        position: relative;
        height: 759px;
        width: 590px;
        background: url(~@/assets/guess/dialog-bg.png) no-repeat center;
        background-size: 100% 100%;

        .btn-close {
            width: 50px;
            height: 50px;
            background: url(~@/assets/shopBox/btn-close.png) no-repeat center;
            background-size: cover;
            position: absolute;
            left: 50%;
            bottom: -70px;
            transform: translateX(-50%);
        }

        .title {
            width: 160px;
            height: 42px;
            margin: 0 auto;
            margin-top: 40px;
            background: url(~@/assets/guess/title-history.png) no-repeat center;
            background-size: 100% 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 500;
            font-size: 22px;
            color: #413836;
            line-height: 30px;
            text-align: center;
        }

        .zindex-box {
            position: absolute;
            top: 0px;
            bottom: 0px;
            right: 0;
            left: 0;
            z-index: 1;
        }


        .content-box {
            position: absolute;
            top: 90px;
            bottom: 10px;
            left: 0px;
            right: 0px;
        }


        .th {
            width: 577px;
            height: 51px;
            font-weight: bold;
            font-size: 24px;
            color: #ECECEC;
            text-align: center;
            line-height: 36px;
            display: flex;
            align-items: center;
            position: absolute;
            top: 70px;
            left: 50%;
            z-index: 3;
            transform: translateX(-50%);

            .time {
                width: 210px;
            }

            .type {
                width: 160px;
            }

            .name {
                flex: 1;
            }
        }


        .tab-box {
            width: 510px;
            height: 56px;
            margin: 0 auto;
            display: flex;
            position: absolute;
            z-index: 2;
            justify-content: center;
            align-items: center;
            top: 110px;
            left: 50%;
            transform: translateX(-50%);

            span {
                width: 233px;
                height: 56px;
                background: transparent;
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                margin: 0 10px;
                background: url(~@/assets/guess/history-tab-1.png) no-repeat center;
                background-size: cover;

                &.act {
                    background: url(~@/assets/guess/history-tab-1-c.png) no-repeat center;
                    background-size: cover;
                }

                &:nth-child(2) {
                    background-image: url(~@/assets/guess/history-tab-2.png);

                    &.act {
                        background-image: url(~@/assets/guess/history-tab-2-c.png);
                    }
                }
            }
        }

        .list-box {
            position: absolute;
            overflow-y: auto;
            bottom: 75px;
            top: 100px;
            width: 100%;
            padding-top: 10px;

            li {
                font-size: 17px;
                font-weight: 500;
                color: #fff;
                text-align: center;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                margin: 0 auto;
                margin-bottom: 20px;
                width: 518px;
                height: 148px;
                background: url(~@/assets/guess/history-item.png) no-repeat center;
                background-size: cover;

                .frame-box {
                    margin-left: 15px;
                    margin-right: 14px;
                    width: 90px;
                    height: 90px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 10px;


                    img, /deep/ .dress-img-box {
                        width: 60px;
                        height: 60px;
                    }
                }

                .info-box {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;
                    padding-left: 0px;

                    .name {
                        font-weight: 600;
                        font-size: 22px;
                        line-height: 40px;
                        color: #FDE191;
                    }

                    .icon {
                        width: 30px;
                        height: 22px;
                        background: url("~@/assets/guess/shell.png") no-repeat center;
                        background-size: auto 100%;
                        display: inline-block;

                        &.coin {
                            background-image: url(~@/assets/common/icon_coin.png);
                        }
                    }

                    .mid, .time {
                        height: 27px;
                        font-weight: 400;
                        font-size: 22px;
                        color: #FDE191;

                        span {
                            color: #FDE191;
                        }
                    }

                    .mid {
                        display: flex;
                        justify-content: space-between;
                        .left-box{
                            margin-right: 10px;
                        }
                    }

                    .time {
                        font-weight: 400;
                        font-size: 20px;
                        color: #FDE191;
                        line-height: 30px;
                    }
                }

                &.win {
                    position: relative;
                    overflow: visible;
                    margin: 30px auto 50px;
                    display: flex;
                    align-items: center;


                    .left-box{
                        flex: 1;
                        display: flex;
                        align-items: center;


                        .show-bog{
                            margin-left: 15px;
                            margin-right: 14px;
                            width: 90px;
                            height: 90px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            background: rgba(255,255,255,0.4);
                            border-radius: 10px;
                            img{
                                width: 60px;
                                height: 60px;
                            }
                        }
                        .info-box{
                            p{
                                font-weight: 500;
                                font-size: 24px;
                                color: #FDE191;
                                line-height: 38px;
                                text-align: center;
                            }
                            span{
                                font-size: 18px;
                                margin-top: 10px;
                                color: #FDE191;
                            }
                        }
                    }

                    .right-box{
                        width:140px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        padding-top: 0px;
                        .icon-rs{
                            width: 41px;
                            height: 22px;
                            display: block;
                            background: url(~@/assets/guess/txt-fail.png) no-repeat center;
                            background-size: cover;
                            margin-bottom: 10px;
                            &.suc{
                                background-image: url(~@/assets/guess/txt-suc.png);
                            }
                        }

                    }




                    .info {
                        flex: 1;
                        justify-content: space-between;
                        box-sizing: border-box;
                        position: relative;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        color: #fff;

                        i {
                            font-size: 20px;
                            color: #fff;
                        }

                        .left {
                            margin: 20px 0;
                        }

                        .icon {
                            width: 30px;
                            height: 22px;
                            background: url("~@/assets/guess/shell.png") no-repeat center;
                            background-size: auto 100%;
                            display: inline-block;

                            &.coin {
                                background-image: url(~@/assets/common/icon_coin.png);
                            }
                        }

                        .time {
                            font-size: 20px;
                            color: #fff;
                        }
                    }
                }


                &.nodata {
                    border: none;
                    position: absolute;
                    font-size: 32px;
                    background: transparent;
                    text-align: center;
                    color: #fff;
                    justify-content: center;
                    width: 100%;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                }
            }
        }

        .tip {
            position: absolute;
            bottom: 40px;
            width: 100%;
            text-align: center;
            height: 20px;
            font-weight: 400;
            line-height: 44px;
            font-size: 24px;
            color: #fff;
        }
    }

}
</style>
