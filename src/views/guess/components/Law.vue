<template>
    <div class="mask-box" @click="closeThis">
        <div class="law-box" @click.stop>
            <div class="zindex-box">
                <div class="title"></div>
                <div class="content-box">
                    <p>1.平台禁止未成年人参与本活动，禁止无民事行为能力或限制民事行为能力的成年人参与本活动。</p>
                    <p>
                        2.平台严禁任何形式的返现、返利、私下交易等诱导性行为。主播不得以任何方式诱导用户消费，用户亦应警惕此类行为，该等行为均属违规，由此产生的一切风险和损失由违规方自行承担。</p>
                    <p>
                        3.用户参与本活动所获奖励仅限于在平台内按照平台规则使用，不得用于其他任何用途，不得将奖励或权益反向兑换成现金、有价值的物品、金币等平台虚拟货币，也不可转让或交易，不得用于任何形式的盈利活动。</p>
                    <p>4.用户知悉并确认:
                        平台禁止并严厉打击任何形式的线下交易，一经发现将严厉处置，所有通过线下交易获得或销售的虚拟财产权益均违法、无效，由此造成的损失及责任均由违规用户自行承担。</p>
                    <p>5.平台严禁利用本活动进行任何违法行为，严禁利用平台实施违法犯罪活动，一经发现，平台有权向相应司法机关移交处理，如因此行为给平台造成损失，平台有权要求相关行为人
                        (包括但不限于主播、用户及/或相关第三人) 承担赔偿责任。</p>
                    <p>
                        6.用户在参与本活动时不得有任何违法行为，不得有任何违反平台协议、规则的行为。用户不得以任何不正当手段或舞弊方式(包括但不限于使用多个账号，使用非官方客户端，使用外挂、模拟器、插件等，利用系统bug、篡改活动数据等)参与活动。</p>
                    <p>
                        7.如果用户有任何违法行为和/或任何违反本规则的行为，平台有权采取禁止用户参与活动、中止服务、撤消活动资格、取消/追回用户已领取的奖励或同等价值金额、回收或清空违规账号中的虚拟财产、限制账号部分或全部功能，短期或无限期封禁/冻结账号等一种或多种措施，并保留追究用户相关责任的权利。涉嫌犯罪的，平台有权向相关司法机关移交处理。</p>
                    <p>
                        8.对于任何违反法律法规、本平台协议、规则的行为及不正当的行为，用户可及时通过平台官方渠道举报反馈，一经查证属实，平台将严厉处理，涉嫌违法犯罪的将移送司法机关处理。</p>
                    <p>9.本活动旨在提升用户直播间观看体验，请勿沉迷，如有任何疑问请联系{{ appName }}官方客服。</p>
                    <p>10.平台保留在法律允许范围内对上述规则解释的权利。</p>
                    <p>11.本活动与苹果公司（Apple Inc.）无关。</p>
                </div>
                <button @click="knowIt"></button>
                <span class="btn-close"></span>
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
        return {}
    },
    components: {},
    created() {
    },
    mounted() {
    },
    methods: {
        knowIt() {
            localStorage.setItem(`isFirstPlayGuess2026`, 2)
            this.$emit('agreeThis')
        },
        closeThis() {
            window.winOcx.closePage && window.winOcx.closePage();
            // this.$emit('closeThis')
        }
    },
    watch: {},
    computed: {},
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

    .law-box {
        position: absolute;
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        height: 759px;
        width: 590px;
        background: url(~@/assets/guess/dialog-bg.png) no-repeat center;
        background-size: 100% 100%;

        .title {
            position: absolute;
            width: 158px;
            left: 50%;
            transform: translateX(-50%);
            height: 43px;
            background: url(~@/assets/guess/title-law.png) no-repeat center;
            background-size: 100% 100%;
            top: 36px;
        }

        .zindex-box {
            position: absolute;
            top: 0px;
            bottom: 0px;
            left: 0;
            right: 0;
            z-index: 1;
        }

        .content-box {
            position: absolute;
            top: 110px;
            bottom: 110px;
            width: 506px;
            overflow-y: auto;
            margin: 0 auto;
            line-height: 40px;
            left: 50%;
            transform: translateX(-50%);

            .warn {
                font-weight: bold;
                text-decoration: underline;
            }

            .title {
                font-weight: bold;
                font-size: 23px;
                margin: 20px 0;
            }

            font-weight: 500;
            font-size: 24px;
            color: #FDE191;
            line-height: 40px;

            p {
                margin-bottom: 20px;
            }

            .center-tip {
                text-align: center;
                display: block;
                width: 100%;
                position: relative;
                margin-top: 20px;
                height: 100px;

                .text {
                    position: absolute;
                    left: 50%;
                    font-size: 22px;
                    font-weight: 500;
                    color: #580C00;
                    transform: translateX(-50%);
                    line-height: 50px !important;
                    height: 50px !important;

                    &:before, &:after {
                        content: "";
                        display: block;
                        position: absolute;
                        width: 80px;
                        height: 2px;
                        background: #580C00;
                        border-radius: 4px;
                        top: 50%;
                        transform: translateY(-50%);
                    }

                    &:before {
                        left: -100px;
                    }

                    &:after {
                        right: -100px;
                    }
                }

                &.top {
                    height: 50px;
                }

            }
        }

        button {
            width: 303px;
            height: 62px;
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: url(~@/assets/guess/btn-iagree.png) no-repeat center;
            background-size: cover;
        }

        .btn-close {
            width: 50px;
            height: 50px;
            background: transparent;
            position: absolute;
            top: 140px;
            right: 0px;
            transform: translateX(-50%);
        }

    }
}
</style>
