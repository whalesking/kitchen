<template>
    <div class="history-box">
        <div class="header-line">
            <i class="back" @click="back"></i>
            直播间近30轮结果
        </div>
        <div class="content-box">
            <ul class="rs-list">
                <li v-for="item,index in historyData" :key="index">
                    <span class="index">{{index+1}}</span>
                    <img :src="`https://file8.iusns.com/gift/${giftArr[item.lucky_ticket-1].id}_b`"  alt="">
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import {Toast} from "vant";
export default {
    props: {
        giftArr:{
            default:[]
        }
    },
    data() {
        return {
            historyData:''
        }
    },
    components: {
        [Toast.name]: Toast
    },
    created() {
    },
    mounted() {
        this.getHistoryList();
    },
    methods: {
        back(){
            this.$emit('back')
        },
        getHistoryList(){
            this.request.get("/v1/hwd/guess/getLuckyTicketHis").then((res) => {
                if (res.code == 200) {
                    this.historyData = res.data.list;
                } else {
                    Toast(res.message);
                }
            });
        }
    },
    watch: {},
    computed: {},


}
</script>
<style lang="scss" scoped>
.history-box {
    height: 1176px;
    background: url("../../../assets/guess/bg_3.png") no-repeat center transparent;
    background-size: cover;
    * {
        font-family: PingFangSC-Medium, PingFang SC, "Helvetica Neue", Arial, sans-serif;
        font-weight: bold;
    }
    .header-line {
        height: 80px;
        background: rgba(11, 1, 29, 0.4);
        text-align: center;
        font-size: 32px;
        color: #FFFFFF;
        letter-spacing: 0;
        position: relative;
        line-height: 80px;

        .back {
            display: block;
            width: 32px;
            height: 32px;
            position: absolute;
            top: 50%;
            left: 32px;
            transform: translateY(-50%) rotateZ(-90deg);
            background: url("../../../assets/guess/common_icon_up_grey@3x.png") no-repeat center;
            background-size: cover;
        }
    }

    .content-box {
        position: absolute;
        top: 90px;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: auto;
        padding: 32px 48px;

        .rs-list{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            li{
                width: 112px;
                height: 112px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                margin-bottom: 32px;
                border: 1px solid rgba(216,216,216,0.3);
                img{
                    width: 88px;
                    height: 88px;
                }
                .index{
                    position: absolute;
                    top: -20px;
                    right: 0;
                    width: 48px;
                    height: 48px;
                    display: block;
                    border-radius: 50%;
                    text-align: center;
                    color: #fff;
                    font-size: 28px;
                    line-height: 48px;
                    background: #93633E;
                    border: 1px solid #FFE3BC;
                }
            }
        }
    }


}

</style>
