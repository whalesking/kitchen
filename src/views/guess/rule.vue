<template>
    <div class="rule-box">
        <div class="header-line">
            <i class="back" @click="back"></i>
            玩法介绍
        </div>
        <div class="content-box">
            <p class="title">概述</p>
            <p>1、礼物猜猜猜活动是{{appName}}（下称“平台”）提供的一项娱乐趣味性限时活动,旨在提升用户直播间观看体验，仅供娱乐交流使用。任何用户和主播均不得利用本活动实施任何违法犯罪的行为和/或用于任何违法犯罪活动。</p>
            <p>2、本规则是{{appName}}《用户协议》、《用户管理规范》的有效组成部分，具有同等法律效力。本规则未提及的部分，适用{{appName}}《用户协议》、《用户管理规范》及平台其他协议、规则。</p>
            <p>3、参与本活动前，用户必须详细阅读本规则及相关条款。一旦参与本活动，即视为用户已阅读、理解并同意本规则的全部内容，并保证严格遵守本规则。</p>
            <p>4、特别提醒：平台禁止未成年人参与本活动，请参与本活动的用户合法、合规、诚信、适度参与、理性消费。</p>
            <p>活动为短期活动，平台将不定时下线活动，敬请留意。</p>

            <p class="title">活动介绍</p>
            <p>1.每种礼物选择一次需要消耗200贝壳。</p>
            <p>2.礼物猜猜猜活动中，购买个性装扮《头号玩家》头像框可获赠贝壳道具，通过消耗贝壳即可参与活动。</p>
            <p>注：《头号玩家》头像框最大有效期时长为365天，满足后重复购买将不再叠加有效期。</p>
            <p>3.可选择多种礼物，每轮每种礼物最多可选择99次。每轮最多可选择200次。</p>
            <p>4.活动页倒计时结束后自动停止选择并开始生成结果，系统按照指定概率选出本轮礼物。</p>
            <p>5.如用户选择了本轮系统选出的礼物，则获得贝壳数=200*礼物倍数*该礼物所选次数。</p>
            <p>6.如用户未选择本轮系统选出的礼物，则获得贝壳数=本轮所有礼物选择次数之和*2。</p>
            <p>7.用户可在贝壳商城中兑换礼物，装扮，贵族等道具。</p>
            <p>8.为防止沉迷，单用户单日最多可通过购买装扮的方式获增贝壳2000000个，单日满足活动限额后您将无法继续购买《头号玩家》装扮。</p>
            <p>9.用户在体验《礼物猜猜猜》活动过程中,平台不收取任何手续费,也不以任何形式参与该活动。</p>
            <p @click="showDetail = !showDetail">10.点击显示活动概率 <i :class="`icon ${showDetail?'up':'down'}`"></i></p>
            <template v-if="showDetail">
                <div class="area">
                    <p class="title">不同礼物出现的概率如下：</p>
                    <table>
                        <tr>
                            <th>礼物</th>
                            <th>礼物倍数</th>
                            <th>概率</th>
                        </tr>
                        <tr><td>臻爱永恒</td><td>30</td><td>3.40%</td></tr>
                        <tr><td>珍爱花海</td><td>20</td><td>5.00%</td></tr>
                        <tr><td>怦然心动</td><td>16</td><td>6.15%</td></tr>
                        <tr><td>香吻</td><td>8</td><td>12.25%</td></tr>
                        <tr><td>一见钟情</td><td>4</td><td>24.20%</td></tr>
                        <tr><td>掌声</td><td>2</td><td>49.00%</td></tr>
                    </table>
                </div>
            </template>
            <p  class="title">法律声明:</p>
            <p>1、礼物猜猜猜活动仅供娱乐，用户所获奖励仅限于在本平台内使用，不可反向兑换成现金或有价值的商品。您承诺不使用本功能进行任何违反法律及本平台规则、规范的活动。</p>
            <p>2、禁止将所获奖励进行线下交易，对豆商(币商)收购等第三方行为本平台将进行严厉打击，用户的任何第三方线下交易行为需自行承担不利后果。</p>
            <p>3、禁止以任何不正当手段及舞弊行为参与活动，一经发现，平台有权取消发放对应奖励，已发放的奖励有权追回。</p>
            <p>4、本平台保留在法律规定的范围内对本活动解释的权利。</p>
            <p>5、参与次数达到每日上限后，将无法参与。</p>
            <p>6、活动禁止未成年人参与。</p>
            <p>7、为防止用户信息泄露及保证用户财产安全，提醒用户消费时保管好账号、密码、短信验证码等登录操作凭证。</p>
            <p>8、礼物猜猜猜活动为用户自愿参与，请合理消费并理性看待活动结果，如用户已确认参与，不得要求平台返还支出并要求退费、赔偿。</p>
            <p>9、本活动为短期活动，不定时下线，敬请留意。</p>
            <p>（注：参与礼物猜猜猜不会增加用户的财富值）</p>
            <div class="center-tip">
                <p class="text">适度参与 理性娱乐</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        appName: String,
    },
    data() {
        return {
            showDetail:false
        }
    },
    components: {},
    created() {
    },
    mounted() {
    },
    methods: {
        back(){
            this.$emit('back')
        }
    },
    watch: {},
    computed: {},


}
</script>
<style lang="scss" scoped>
.rule-box{
    height: 1176px;
    background: url("~@/assets/guess/bg_3.png") no-repeat center transparent;
    background-size: cover;
    * {
        font-family: PingFangSC-Medium, PingFang SC, "Helvetica Neue", Arial, sans-serif;
        font-weight: bold;
    }
    .header-line{
        height: 80px;
        background: rgba(11,1,29,0.4);
        text-align: center;
        font-size: 32px;
        color: #FFFFFF;
        letter-spacing: 0;
        position: relative;
        line-height: 80px;
        .back{
            display: block;
            width: 32px;
            height: 32px;
            position: absolute;
            top: 50%;
            left: 32px;
            transform: translateY(-50%) rotateZ(-90deg);
            background: url("~@/assets/guess/common_icon_up_grey@3x.png") no-repeat center;
            background-size: cover;
        }
    }
    .content-box{
        position: absolute;
        top: 90px;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: auto;
        padding:32px  48px;
        p{
            font-size: 24px;
            color: #FFFFFF;
            letter-spacing: 0;
            text-align: left;
            line-height: 44px;
            margin-bottom: 20px;
            i.icon{
                width: 20px;
                height: 20px;
                display: inline-block;
                background: url("~@/assets/guess/common_icon_down_grey@3x.png") no-repeat center;
                background-size: cover;
                &.up{
                    background-image: url(~@/assets/guess/common_icon_up_grey@3x.png);
                }
            }

            &.title{
                font-size: 28px;
                font-weight: bold;
                line-height: 60px;
            }
        }
        .area{
            p{
                text-indent: 4em;
                &.title{
                    text-indent: 25px;
                }
            }
            table {
                width: 596px;
                margin: 0 auto;
                border-collapse: collapse;
                position: relative;
                z-index: 1;
                margin-bottom: 20px;
                td,th {
                    font-size: 24px;
                    font-weight: 500;
                    color: #FFFFFF;
                    line-height: 40px;
                    height: 70px;
                    text-align: center;
                    background: transparent;
                    border: 1.4px solid #fff;
                }
                th{
                    font-size: 25px;
                    background: rgba(255,255,255,0.2);
                }

            }
        }

        .center-tip{
            text-align: center;
            display: block;
            width: 100%;
            position: relative;
            margin-top: 20px;
            .text{
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                line-height: 50px!important;
                height: 50px!important;
                &:before,&:after{
                    content: "";
                    display: block;
                    position: absolute;
                    width: 80px;
                    height: 2px;
                    background: #fff;
                    border-radius: 4px;
                    top: 50%;
                    transform: translateY(-50%);
                }
                &:before{
                    left: -100px;
                }
                &:after{
                    right: -100px;
                }
            }

        }
    }


}

</style>
