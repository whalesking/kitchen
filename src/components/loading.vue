<template>
    <div class="loading-box">
        <van-overlay :show="show">
            <div class="wrapper" @click.stop>
                <van-loading size="50"/>
            </div>
        </van-overlay>

    </div>
</template>
<script>
    import {Loading, Overlay} from 'vant';

    export default {
        props: {
            show:{
                type:Boolean,
                default:false
            }
        },
        components: {
            [Loading.name]: Loading,
            [Overlay.name]: Overlay,
        },
    }
</script>
<style lang="scss" scoped>
    .loading-box{
        position: absolute;
        z-index:999;
    }
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
</style>   