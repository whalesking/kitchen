<template>
    <div class="rule-box">
        <div class="title"></div>
        <button class="btn-close" @click="back"></button>
        <div class="content-box">
            <p>1.每种礼物选择一次需要消耗200金币/贝壳（普通用户身份金币及金豆都可以进行消耗）。</p>
            <p>2.如用户的贝壳数量足够参与本次游戏，则优先使用贝壳参与。</p>
            <p>3.可选择多种礼物，每轮每种礼物最多可选择99次。每轮最多可选择200次。</p>
            <p>4.活动页倒计时结束后自动停止选择并开始生成结果，系统按照指定概率选出本轮礼物。</p>
            <p>5.如用户选择了本轮系统选出的礼物，则获得贝壳数=200*礼物倍数*该礼物所选次数。</p>
            <p>6.如用户未选择本轮系统选出的礼物，则获得贝壳数=本轮所有礼物选择次数之和*2。</p>
            <p>7.用户可在贝壳商城中兑换各种稀有礼物。</p>
            <p>8.该活动所获得任何奖励均与苹果公司无关，苹果公司既不作为赞助商也不以任何形式参与。</p>
            <p @click="showDetail = !showDetail">9.点击显示游戏概率 <i :class="`icon ${showDetail?'up':'down'}`"></i>
            </p>
            <template v-if="showDetail">
                <div class="area">
                    <p class="title">不同礼物出现的概率如下：</p>
                    <table>
                        <tr>
                            <th>礼物</th>
                            <th>礼物倍数</th>
                            <th>概率</th>
                        </tr>
                        <tr>
                            <td>不止心动</td>
                            <td>30</td>
                            <td>3.40%</td>
                        </tr>
                        <tr>
                            <td>为爱心动</td>
                            <td>20</td>
                            <td>5.00%</td>
                        </tr>
                        <tr>
                            <td>怦然心动</td>
                            <td>16</td>
                            <td>6.15%</td>
                        </tr>
                        <tr>
                            <td>香吻</td>
                            <td>8</td>
                            <td>12.25%</td>
                        </tr>
                        <tr>
                            <td>一见钟情</td>
                            <td>4</td>
                            <td>24.20%</td>
                        </tr>
                        <tr>
                            <td>掌声</td>
                            <td>2</td>
                            <td>49.00%</td>
                        </tr>
                    </table>
                </div>
            </template>
            <p>法律声明:</p>
            <p>
                礼物猜猜猜活动仅供娱乐，用户所获奖励仅限于在本平台内使用，不可反向兑换成现金或有价值的商品。您承诺不使用本功能进行任何违反法律及本平台规则、规范的活动。</p>
            <p>
                禁止将所获奖励进行线下交易，对豆商(币商)收购等第三方行为本平台将进行严厉打击，用户的任何第三方线下交易行为需自行承担不利后果。</p>
            <p>禁止以任何不正当手段及舞弊行为参与活动，一经发现，平台有权取消发放对应奖励，已发放的奖励有权追回。</p>
            <p>（注：参与礼物猜猜猜不会增加用户的财富值）</p>
        </div>
    </div>
</template>
<script>
export default {
    props: {},
    data() {
        return {
            showDetail: false
        }
    },
    components: {},
    created() {
    },
    mounted() {
    },
    methods: {
        back() {
            this.$emit('back')
        }
    },
    watch: {},
    computed: {},


}
</script>
<style lang="scss" scoped>
.rule-box {
    //height: 1188px;
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
        background: url("~@/assets/kitchen/title-rule.png") no-repeat center;
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
        padding: 32px 48px;

        p {
            width: 580px;
            font-weight: 400;
            margin: 0 auto;
            font-size: 32px;
            color: #4D2406;
            line-height: 43px;
            margin-bottom: 20px;

        }

    }


}

</style>
