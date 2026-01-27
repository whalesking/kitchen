<template>
    <div id="app">
        <router-view/>
    </div>
</template>
<script>
    export default {
        name: 'App',
        components: {}
    }
</script>

<style>
    * {
        margin: 0px;
        padding: 0px;
        font-style: normal;
        -webkit-overflow-scrolling: touch;
    }
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
    .clearfix:after {
        content: " ";
        display: block;
        clear: both;
        height: 0;
    }
    .clearfix {
        zoom: 1;
    }
    button{
        outline: none;
        border:none;
    }
</style>
