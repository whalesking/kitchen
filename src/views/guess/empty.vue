<template>
    <div class="msg" @click="msg">


    </div>
</template>
<script>

import {Icon, Toast} from "vant";

export default {
    props: {},
    data() {
        return {}
    },
    components: {
        [Toast.name]: Toast,
    },
    created() {
    },
    mounted() {
        this.msg();
    },
    methods: {
        msg() {
            Toast({
                duration: 3000,
                message: '礼物猜猜猜已更新，请退出软件重新进房!'
            });
        },
    },
    watch: {},
    computed: {},


}
</script>
<style lang="scss" scoped>
.msg{
    height: 1176px;
    background: url("~@/assets/guess/bg_3.png") no-repeat top center transparent;
    background-size: 100% 1126px;
    position: relative;
    overflow: hidden;
}
</style>
