<template>
    <div class="shop-box">
        <loading :show="isLoading"></loading>
        <div class="header-line">
            <i class="back" @click="back"></i>
            商城
            <div class="balance-box">
                <i class="icon"></i>
                {{ conch }}
            </div>
        </div>
        <div class="content-box">
            <ul class="shop-list">
                <li v-for="item,index in shopList" @click="choseGift(item.gid)"
                    :class="`${chosedGift ==item.gid?'active':''}`"
                    :key="index">
                    <img :src="`https://file8.iusns.com/gift/${item.gid}_b`" alt="">
                    <p class="name">{{ item.gift_name }}</p>
                    <span class="price"><i class="icon"></i>×{{ item.conch_price }}</span>
                </li>
            </ul>
        </div>
        <div class="bottom-box">
            <div class="left-box">
                兑换数量：
                <div class="select-box" :class="`${showAll?'all':''}`" @click="showAll = !showAll">
                    <span class="chosed">{{ chosedNum }}</span>
                    <div class="option-list" :class="`${showAll?'all':''}`">
                        <ul>
                            <li v-for="item,index in options" :class="`${chosedNum==item?'active':''}`"
                                @click="choseNum(item)"
                                :key="index">
                                {{ item }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="right-box">
                <button @click="exchange">兑换</button>
            </div>
        </div>
    </div>
</template>
<script>
import loading from "../../../components/loading";
import {Toast} from "vant";
export default {
    props: {
        conch:{
            type:Number,
            default:0
        }
    },
    data() {
        return {
            options: [1, 10,100,1000, 10000],
            chosedNum: 1,
            chosedGift: '',
            showAll: false,
            isLoading: false,
            shopList: ''
        }
    },
    components: {
        [Toast.name]: Toast,
        loading
    },
    created() {
    },
    mounted() {
        this.isLoading = true;
        this.getShopList();
    },
    methods: {
        back() {
            this.$emit('back')
        },
        choseNum(n) {
            this.chosedNum = n;
        },
        choseGift(id) {
            this.chosedGift = id
        },
        getShopList() {
            this.request.get("/v1/hwd/guess/mall/skuList").then((res) => {
                this.isLoading = false;
                if (res.code == 200) {
                    this.shopList = res.data.list
                } else {
                    window.winOcx.tip(res.message);
                }
            });
        },
        //兑换
        exchange() {
            if(!this.chosedGift){
                Toast('请先选择要兑换的礼物！')
                return;
            }
            this.isLoading = true;
            let data = {
                gid: this.chosedGift,
                number: this.chosedNum
            }
            this.request.post("/v1/hwd/guess/mall/exchange", data).then((res) => {
                this.isLoading = false;
                if (res.code == 200) {
                    Toast('兑换成功，已发放至包裹~')
                    this.$emit('refreshBalance',res.data.conch)
                } else {
                    Toast(res.message);
                }
            });
        },


    },
    watch: {},
    computed: {},


}
</script>
<style lang="scss" scoped>
.shop-box {
    height: 1176px;
    background: #fff;
    * {
        font-family: PingFangSC-Medium, PingFang SC, "Helvetica Neue", Arial, sans-serif;
        font-weight: bold;
    }
    .header-line {
        height: 80px;
        background: #fff;
        text-align: center;
        font-size: 32px;
        color: #333333;
        letter-spacing: 0;
        position: relative;
        line-height: 80px;
        border-bottom: 1px solid #EEEEEE;

        .back {
            display: block;
            width: 32px;
            height: 32px;
            position: absolute;
            top: 50%;
            left: 32px;
            transform: translateY(-50%);
            background: url("../../../assets/guess/back.png") no-repeat center;
            background-size: cover;
        }

        .balance-box {
            position: absolute;
            right: 20px;
            top: 0;
            line-height: 80px;
            font-size: 24px;
            color: #333333;
            height: 80px;
            display: flex;
            align-items: center;

            .icon {
                width: 40px;
                height: 40px;
                display: inline-block;
                background: url("../../../assets/guess/shell.png") no-repeat center;
                background-size: cover;
                margin-right: 8px;

            }
        }
    }

    .content-box {
        position: absolute;
        top: 90px;
        left: 0;
        right: 0;
        bottom: 140px;
        overflow: auto;
        padding: 32px 30px;

        .shop-list {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            li {
                width: 210px;
                height: 252px;
                border-radius: 12px;
                display: flex;
                justify-content: center;
                position: relative;
                flex-wrap: wrap;
                margin-bottom: 32px;
                border: 2px solid #F5F5F5;

                img {
                    width: 150px;
                    height: 150px;
                    vertical-align: middle;
                    margin-top: 5px;
                }

                .name {
                    width: 100%;
                    font-size: 24px;
                    color: #FF2398;
                    text-align: center;
                }

                .price {
                    font-size: 20px;
                    color: #999999;
                    letter-spacing: 0;
                    text-align: center;

                    i.icon {
                        display: inline-block;
                        background: url("../../../assets/guess/shell.png") no-repeat center;
                        background-size: cover;
                        width: 20px;
                        height: 20px;
                    }
                }

                &.active {
                    border-color: #FF2398;
                }
            }
        }
    }

    .bottom-box {
        background: #F6F8F9;
        display: flex;
        align-items: center;
        position: absolute;
        bottom: 0;
        height: 142px;
        width: 100%;

        .left-box {
            font-size: 28px;
            color: #333333;
            letter-spacing: 0;
            text-align: center;
            margin-left: 30px;

            .select-box {
                width: 172px;
                height: 64px;
                border-radius: 8px;
                color: #fff;
                display: inline-block;
                position: relative;
                line-height: 64px;
                background: url("../../../assets/guess/common_icon_up_grey@3x.png") no-repeat 118px center rgba(0, 0, 0, 0.3);
                background-size: 40px;

                &.all {
                    border-radius: 0 0 8px 8px;
                    background-image: url(../../../assets/guess/common_icon_down_grey@3x.png);
                }

                .chosed {
                    padding-right: 40px;
                    box-sizing: border-box;
                }

                .option-list {
                    position: absolute;
                    left: 0;
                    bottom: 62px;
                    width: 100%;
                    border-radius: 8px 8px 0 0;
                    height: 0;
                    overflow: hidden;
                    transition: all 0.5s;
                    background: rgba(246, 248, 249, 0.3);

                    ul {
                        background: rgba(0, 0, 0, 0.3);
                    }

                    li {
                        height: 64px;
                        width: 100%;

                        &.active {
                            background: rgba(255, 255, 255, 0.4)
                        }
                    }

                    &.all {
                        height: 257px;
                        transition: all 0.5s;
                    }
                }

            }
        }

        .right-box {
            position: absolute;
            right: 40px;
            display: flex;
            align-items: center;
            height: 100%;
            button {
                width: 144px;
                height: 64px;
                background-image: linear-gradient(270deg, #FF962A 0%, #FF2398 100%);
                border-radius: 30px;
                font-size: 28px;
                color: #FFFFFF;
                letter-spacing: 0;
                text-align: center;
                line-height: 64px;
            }
        }
    }


}

</style>
