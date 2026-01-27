<template>
    <div className="test-box">
        <!--<div class="input-box">-->
        <!--<label>appid:</label><input type="text" v-model="appid">-->
        <!--<label>channel:</label><input type="text" v-model="channel">-->
        <!--<label>token:</label><input type="text" v-model="token">-->
        <!--<label>userId:</label><input type="text" v-model="userId">-->
        <!--</div>-->

        <!--<button @click="join">加入</button>-->
        <!--<button @click="leave">离开</button>-->
        <!--<div id="remote-playerlist"></div>-->
        跳转地址：<input type="text" v-model="jumpUrl">
        <button @click="jump">跳转</button>
    </div>
</template>
<script>
export default {
    props: {},
    data() {
        return {
            client: '',
            appid: '',
            channel: '',
            token: '',
            userId: '',
            uid: '',
            role: 'audience',
            audienceLatency: 2,
            img1: '',
            img2: "",
            jumpUrl: 'http://'
        }
    },
    components: {},
    created() {
    },
    mounted() {
        this.jumpUrl = localStorage.getItem('testUrl') || this.jumpUrl;
    },
    methods: {
        jump() {
            localStorage.setItem('testUrl', this.jumpUrl);
            window.location.href = this.jumpUrl;
        }

    },
    watch: {},
    computed: {},
}
</script>
<style lang="scss" scoped>
.test-box {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
}

input {
    height: 70px;
    width: 600px;
    font-size: 28px;
}

button {
    width: 540px;
    margin-top: 20px;
    height: 100px;
    //background: url("../assets/cancellation/sqqy_bg_chengbtn_disabled-c.png") no-repeat center;
    -webkit-background-size: cover;
    background-size: cover;
    font-size: 28px;
    font-weight: 400;
    color: #191922;
    margin-bottom: 20px;
}

img {
    height: 200px;
}
</style>
