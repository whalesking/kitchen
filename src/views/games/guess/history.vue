<template>
    <div class="history-box">
        <div class="title"></div>
        <button class="btn-close" @click="back"></button>
        <div class="content-box">
            <ul class="rs-list">
                <li v-for="(item, index) in historyData" :class="`t-${item}`" :key="index">
                    <span class="index">{{ index + 1 }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { Toast } from "vant";
export default {
    props: {
        giftArr: {
            default: []
        }
    },
    data() {
        return {
            historyData: [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6,]
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
        back() {
            this.$emit('back')
        },
        getHistoryList() {
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
    height: 1312px;
    background: url("~@/assets/kitchen/rule-bg.png") no-repeat center bottom transparent;
    background-size: 100% 1168px;
    position: relative;

    * {
        font-family: PingFangSC-Medium, PingFang SC, "Helvetica Neue", Arial, sans-serif;
        font-weight: bold;
    }

    .title {
        position: absolute;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: url("~@/assets/kitchen/title-history.png") no-repeat center;
        background-size: contain;
        z-index: 10;
        width: 446.51px;
        height: 160px;
    }

    .btn-close {
        position: absolute;
        width: 72px;
        height: 72px;
        background: url("~@/assets/kitchen/btn-close.png") no-repeat center;
        background-size: contain;
        top: 56px;
        right: 38px;
    }

    .content-box {
        position: absolute;
        top: 290px;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: auto;
        padding: 32px 68px;

        .rs-list {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;

            li {
                width: 102px;
                height: 102px;
                border-radius: 50%;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                position: relative;
                flex-wrap: wrap;
                margin: 0 10px;
                margin-bottom: 45px;
                background: url("~@/assets/kitchen/icon-mini-1.png") no-repeat center;
                background-size: 102px 102px;

                @for $i from 1 through 6 {
                    &.t-#{$i} {
                        background: url("~@/assets/kitchen/icon-mini-#{$i}.png") no-repeat center;
                        background-size: 102px 102px;
                    }
                }

                .index {
                    position: absolute;
                    top: 0px;
                    left: 0;
                    width: 28px;
                    height: 28px;
                    box-shadow: inset 0px 2px 6px 0px #FFFFFF;
                    font-weight: 400;
                    font-size: 20px;
                    color: #FFFFFF;
                    z-index: 1;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
        }
    }


}
</style>
