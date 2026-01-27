<template>
    <div class="mask">
        <div class="buy-box" @click.stop>
            <span class="btn-close" @click="closeThis"></span>
            <div class="top-tip"></div>
            <div class="chose-list">
                <ul>
                    <template v-for="(item,index) in pay_dress">
                        <li class="item" :class="`${chosed==item.give_ticket?'active':''}`"
                            @click="choseThis(item.give_ticket,item)" :key="index">
                            <div class="img-box">
                                <!--                                <img :src="require('@/assets/moon/carnival/buy/buy-frame.png')" alt="">-->
                                <DressImg :item="{id:item.id,type:1}"></DressImg>
                            </div>
                            <div class="info-box">
                                <p>{{ item.name }}</p>
                                <p class="time">{{ item.minute }}分钟</p>
                                <p class="price">{{ item.consumer }}金币</p>
                            </div>
                            <div class="right-box">
                                <span class="send">可获赠</span>
                                <div class="top">
                                    <img :src="require('@/assets/guess/shell.png')" alt="">
                                    <span>x <i>{{ item.give_ticket }}</i></span>
                                </div>
                            </div>
                        </li>
                    </template>
                </ul>
            </div>
            <div class="check-box" @click="checkToggle">
                贝壳不足时自动补给
                <i class="icon" :class="checkThis?'active':''"></i>
            </div>

            <div class="btn-box">
                <button class="cancel" @click="closeThis"></button>
                <button class="confirm" @click="confirmBuy">
                    <span>({{ chosedInfo.consumer || 0 }}金币)</span></button>
            </div>
            <div class="bottom-tip">贝壳仅可在活动期间使用，活动结束后将失效并清空请在购买后尽快使用。</div>

        </div>
        <div class="mask confirm-mask" @click.stop v-if="showConfirm">
            <div class="check-tip-confirm">
                <div class="content-box">
                    <div class="title"></div>
                    <p>若勾选【贝壳不足时自动补给】，在您贝壳数量不足当次消耗时，系统将自动匹配并购买所需贝壳数量</p>
                    <div class="view">
                        后续您可通过点击<i class="switch"></i>开/关自动补给
                    </div>
                    <div class="btn-box">
                        <button class="cancel" @click="showConfirm=false"></button>
                        <button class="confirm" @click="confirmCheck"></button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import DressImg from "@/components/DressImg.vue";

export default {
    props: {
        pay_dress: Array,
        ticket: Number,
        rid: String,
    },
    data() {
        return {
            arr: [1, 10, 50],
            chosed: '',
            chosedInfo: '',
            checkThis: false,
            showConfirm: false,
        }
    },
    components: {DressImg},
    created() {
    },
    mounted() {
        let tip = localStorage.getItem(`autoBuyThisGuess`)
        console.log(tip, 'autoBuyThisGuess')
        if (tip == 2) {
            this.checkThis = true;
            console.log(this.checkThis, '---')
        }
    },
    methods: {
        choseThis(n, obj) {
            this.chosed = n;
            this.chosedInfo = obj;
        },
        closeThis() {
            if (!this.checkThis) {
                localStorage.setItem(`autoBuyThisGuess`, 1);
            } else {
                localStorage.setItem(`autoBuyThisGuess`, 2);
            }
            this.$emit('closeThis', this.checkThis)
        },
        checkToggle() {
            if (this.checkThis) {
                this.checkThis = false;
                localStorage.setItem(`autoBuyThisGuess`, 1);
            } else {
                this.showConfirm = true;
            }
        },
        confirmCheck() {
            this.showConfirm = false;
            this.checkThis = true;
            localStorage.setItem(`autoBuyThisGuess`, 2);
        },
        confirmBuy() {
            if (!this.chosed) {
                window.winOcx.tip(`请选择购买的数量！`);
                return
            }
            let data = {
                pay_id: this.chosedInfo.pay_id,
                ver:1,
                rid:this.rid,
            }
            this.request.post("/v1/star/guess/pay_ticket", data).then((res) => {
                if (res.code == 200) {
                    window.winOcx.tip(`购买成功，赠送您${this.chosedInfo.give_ticket}贝壳`);
                    this.$emit('refresh', res.data.user_conch)
                    this.closeThis();
                } else {
                    window.winOcx.tip(res.message);
                }
            });
        }
    },
    watch: {},
    computed: {},


}
</script>
<style lang="scss" scoped>
.mask {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 9999;
    background: rgba(0, 0, 0, 0.5);

    .dialog {
        position: absolute;
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;
        height: 865px;
        width: 581px;
        background: url(~@/assets/shopBox/dialog-buy-bg.png) no-repeat center;
        background-size:cover;
    }

    .buy-box {
        @extend .dialog;
        height: 759px;
        width: 590px;
        background: url(~@/assets/guess/dialog-bg.png) no-repeat center;
        background-size: 100% 100%;

        .top-tip {
            width: 438px;
            height: 42px;
            margin: 0 auto;
            margin-top: 40px;
            background: url(~@/assets/guess/buy-tip.png) no-repeat center;
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

        .chose-list {
            margin-top: 50px;
            position: relative;
            z-index: 2;

            .item {
                width: 518px;
                height: 106px;
                display: flex;
                margin: 0 auto;
                align-items: center;
                margin-bottom: 17px;
                justify-content: flex-start;
                background: url("~@/assets/guess/buy-item-bg.png") no-repeat center;
                background-size: 100% 100%;
                position: relative;
                border-radius: 13px;
                border: 2px solid #684022;
                box-sizing: border-box;

                &:after {
                    content: '';
                    width: 36px;
                    position: absolute;
                    height: 36px;
                    background: url("~@/assets/ufo/checked.png") no-repeat center;
                    background-size: 100%;
                    top: -2px;
                    right: -14px;
                    z-index: 10;
                    display: none;
                }

                .img-box {
                    width: 90px;
                    height: 90px;
                    margin-left: 24px;
                    margin-right: 24px;
                    display: flex;

                    align-items: center;
                    justify-content: center;
                    position: relative;


                    img, /deep/ .dress-img-box {
                        width: 80px;
                        height: 80px;
                    }
                }

                .info-box {
                    flex: 1;

                    p {
                        font-weight: 600;
                        font-size: 24px;
                        color: #FDE191;

                        &.time, &.price {
                            height: 22px;
                            font-weight: 400;
                            font-size: 20px;
                            color: #FDE191;
                        }

                        &.price {
                            margin-top: 5px;
                            color: #FDE191;
                        }
                    }

                }

                .right-box {
                    height: 140px;
                    display: flex;
                    width: 130px;
                    box-sizing: border-box;
                    align-items: flex-end;
                    justify-content: center;
                    flex-direction: column;
                    position: relative;
                    padding-top: 0px;
                    margin-left: 20px;

                    .top {
                        display: flex;
                        align-items: center;
                        position: relative;
                        font-weight: bold;
                        font-size: 30px;
                        margin-top: 5px;
                        margin-right: 15px;
                        padding-right: 5px;
                        line-height: 20px;
                        color: #fff;

                        img {
                            width: 26px;
                            height: 26px;
                            margin-right: 5px;
                            position: relative;
                            z-index: 1;
                        }

                        span {
                            position: relative;
                            z-index: 1;
                            font-size: 24px;
                            line-height: 32px;
                            display: flex;
                            align-items: center;

                            i {
                                font-size: 30px;
                                font-weight: bold;
                            }
                        }

                    }

                    .send {
                        width: 100%;
                        font-weight: 500;
                        font-size: 20px;
                        text-indent: 15px;
                        color: #FDE191;
                        text-align: center;
                    }

                }

                &.active {
                    border-radius: 10px;
                    border: 2px solid #FDE191;
                    box-sizing: border-box;
                    &:after {
                        display: block;
                    }
                }
            }
        }

        .check-box {
            height: 36px;
            display: flex;
            align-items: center;
            margin: 0 auto;
            justify-content: center;
            margin-top: 20px;
            margin-bottom: 15px;
            font-weight: 400;
            font-size: 22px;
            color: #CA7C41;
            position: relative;
            z-index: 1;

            .icon {
                width: 54px;
                height: 26px;
                position: relative;
                margin-left: 10px;
                background: url(~@/assets/guess/switch-off.png) no-repeat center;
                background-size: cover;

                &.active {
                    background-image: url(~@/assets/guess/switch-on.png);
                }
            }

        }

        .btn-box {
            display: flex;
            align-items: center;
            position: relative;
            z-index: 1;
            justify-content: center;

            button {
                width: 212px;
                height: 62px;
                background: url(~@/assets/guess/btn-cancel.png) no-repeat center;
                background-size: cover;

                &.confirm {
                    margin-left: 20px;
                    position: relative;
                    background-image: url(~@/assets/guess/btn-confirm-buy.png);
                    font-size: 24px;
                    font-weight: bold;
                    color: #FFFFFF;
                    display: flex;
                    //flex-direction: column;
                    justify-content: center;
                    align-items: center;

                    span {
                        font-weight: 400;
                        font-size: 18px;
                        left: 0;
                        position: absolute;
                        bottom: -30px;
                        width: 100%;
                        text-align: center;
                        color: #fff;
                    }
                }
            }
        }

        .bottom-tip {
            margin: 32px auto 16px;
            width: 500px;
            font-weight: 400;
            font-size: 20px;
            color: #CA7C41;
            line-height: 30px;
            text-align: center;
            position: relative;
            z-index: 1;
        }

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
    }

    .confirm-mask {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 99999;
        background: rgba(0, 0, 0, 0.5);
    }

    .check-tip-confirm {
        @extend .dialog;
        background-image: url(~@/assets/guess/dialog-min-bg.png);
        background-size: 100% 100%;
        height: 437px;

        .content-box {
            position: absolute;
            top: 40px;
            bottom: 0px;
            left: 0;
            right: 0;
            z-index: 1;
        }

        p {
            line-height: 44px;
            margin: 0 auto;
            margin-top: 30px;
            width: 500px;
            font-weight: 500;
            font-size: 24px;
            color: #CA7C41;
            text-align: center;
        }

        .view {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            font-weight: 400;
            font-size: 20px;
            color: #CA7C41;
            line-height: 36px;
            margin-top: 40px;

            .switch {
                width: 54px;
                height: 26px;
                position: relative;
                margin: 0 5px;
                background: url(~@/assets/ufo/switch-off.png) no-repeat center;
                background-size: cover;
            }
        }

        .btn-box {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 140px;

            button {
                width: 212px;
                height: 62px;
                background: url(~@/assets/guess/btn-cancel.png) no-repeat center;
                background-size: cover;

                &.confirm {
                    margin-left: 24px;
                    background: url(~@/assets/guess/btn-confirm-open.png) no-repeat center;
                    background-size: cover;
                }
            }
        }
    }

}
</style>
