export default function appInit(callback) {
    let time = window.winOcx.browser.ios ? 1000 : 0;
    setTimeout(() => {
        window.winOcx.getUserInfo && window.winOcx.getUserInfo(data => {
            sessionStorage.setItem("userInfo", JSON.stringify(data));
            callback && callback(data);
        });
    }, time);
    // let _data =  {"header":{"X-netmarket":"","X-pkg-channel":"50000","X-unique":"24bfdd8528def1d87d1d21fa8545528f","X-token":"zLIzdSd10O1lSpRc2rKUafa6OB1DFW3EanJbSDlkmD52n5udUf33okHh5lyrsUoec/DyNFdzQH0\u003d","X-vendor":"lahaina","X-ua":"Mozilla/5.0 (Linux; Android 11; PFJM10 Build/RKQ1.211119.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36","X-shumeiid":"BBbqgvPKCu4xkfkZWrEUJmmyDLhIM2FK1NpBghcFgZb1TICDCYfZOQ7zFIuy3YD8ROYvdlgEDild3Ka8J4SC78A\u003d\u003d","X-screen-px":"1080x2400","X-androidid":"d43372d1cf2ff8af","X-os":"1","X-appver":"1.1.9.1","X-networktype":"NETWORK_WIFI","X-msu":"50000","X-uid":"10000776","X-model":"PFJM10","X-deviceversion":"30","X-time":"16506215239649458","X-oaid":"3A62F8146F944F9281AFBD86F26DF4F5af1862a4dbb292ede153b5669c020dba","X-appid":"com.wondership.mt","X-sex":"1"},"nickName":"测试9432","notchScreen":1,"rid":-1,"status":200,"statusHeight":107,"token":"zLIzdSd10O1lSpRc2rKUafa6OB1DFW3EanJbSDlkmD52n5udUf33okHh5lyrsUoec/DyNFdzQH0\u003d","uid":10000776,"wealth":0}
    // callback && callback(_data);
}
