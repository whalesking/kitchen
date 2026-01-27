<template>
    <div class="scroll-list">
        <ul class="list" :class="{anim:animate}">
            <i class="icon"></i>
            <li v-show="listData.length" v-for="(item,index) in listData" :key="index">
                恭喜，<span class="name">{{item.nickname}}</span><span> 刚刚获得了</span><span class="gif">{{
                item.name}}*{{
                item.count}}</span>
            </li>
            <li class="no-data" v-show="!listData.length">暂无数据</li>
        </ul>
    </div>
</template>
<script>
    export default {
        props: {
            listData: {
                default: []
            },
            leastNum: {
                default: 1
            },
        },
        data() {
            return {
                queeList: '',
                timeKey: '',
                animate: false,//无线滚动
            }
        },
        components: {},
        created() {
//            this.queeList = this.listData
            this.timeKey = setInterval(this.scroll, 1100);
            this.$once('hook:beforeDestroy', () => {
                //定时器销毁
                clearInterval(this.timeKey)
            })
        },
        mounted() {
        },
        methods: {
            scroll() {
                if (this.listData.length < this.leastNum) {
                    return
                }
                this.animate = true;
                setTimeout(() => {
                    this.listData.push(this.listData[0]);
                    this.listData.shift();
                    this.animate = false;
                }, 500)
            },
        },


    }
</script>
<style lang="scss" scoped>
    .scroll-list {
        width: 633px;
        height: 50px;
        border-radius: 25px;
        background: rgba(0, 0, 0, .3);
        margin: 0px auto;
        box-sizing: border-box;
        overflow: hidden;
        position: relative;
        .list {
            .icon {
                position: absolute;
                left: 30px;
                display: inline-block;
                background: url("../../assets/Ferrule/dashi/horn.png") no-repeat center;
                -webkit-background-size: cover;
                background-size: cover;
                top: 12.5px;
                height: 25px;
                width: 24px;
                color: #fff;
            }
            li {
                height: 50px;
                padding: 0;
                margin: 0;
                overflow: hidden;
                text-indent: 80px;
                font-size: 24px;
                color: #fff;
                line-height: 55px;
                .name {
                    color: #FDDC00;
                }
                .gif {
                    color: #37F3FF;
                }
                &.no-data {
                    text-align: center;
                    text-indent: 0;
                }
            }
        }
        .anim {
            transition: all 0.5s;
            margin-top: -50px
        }
    }
</style>   