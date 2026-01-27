<template>
    <div class="mask-box">
        <div class="recharge-box dialog">
            <div class="content-box">
                <p>金币不足，是否前去充值？</p>
                <div class="btn-box">
                    <button class="cancel" @click="closeThis"></button>
                    <button class="confirm" @click="toRecharge"></button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {},
    data() {
        return {}
    },
    components: {},
    created() {
    },
    mounted() {
    },
    methods: {
        closeThis() {
            this.$emit('closeThis')
        },
        toRecharge() {
            window.winOcx.openPayPage && window.winOcx.openPayPage();
            this.closeThis()
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

    .dialog {
        position: absolute;
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;
        width: 602px;
        height: 304px;
        background-image: url(~@/assets/white/2024/bg_hdqyf_normal.png);
        background-size: 100% 100%;

    }

    .recharge-box {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 590px;
        height: 307px;
        overflow: hidden;
        background: url(~@/assets/guess/dialog-bg.png) no-repeat -5px center;
        background-size: 600px 110%;
        border-radius: 30px;
        border: 5px solid #A67031;


        .content-box {
            position: absolute;
            top: 0px;
            bottom: 0px;
            left: 0;
            right: 0;
            z-index: 1;
        }

        p {
            font-size: 29px;
            text-align: center;
            font-weight: 500;
            color: #CA7C41;
            line-height: 44px;
            margin: 70px 0 50px;

        }

        .btn-box {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            margin-top: 40px;

            button {
                width: 212px;
                height: 62px;
                background: url(~@/assets/guess/btn-cancel.png) no-repeat center;
                background-size: cover;
                font-size: 26px;
                color: #fff;
                font-weight: bold;

                &.confirm {
                    font-size: 25px;
                    font-weight: 500;
                    color: #FFFFFF;
                    margin-left: 14px;
                    background: url(~@/assets/guess/btn-confirm.png) no-repeat center;
                    background-size: cover;
                }
            }
        }
    }

}
</style>
