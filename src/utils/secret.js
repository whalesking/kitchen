import md5 from "js-md5";
export default function getSecretKey(userInfo,t){
    let signStr = "iusnstuiqokbvtta1$X";
    let os = userInfo['header']['X-os'];
    let imei = userInfo['header']['X-imei'] || "";
    let token = userInfo['header']['X-token'];
    let last = parseInt(t.substr(t.length-1,1))+5;
    let str = signStr+token+imei+os+t;
    let md5str = md5(str);
    let leftstr = md5str.substr(0,last);
    let rightstr= md5str.substr(md5str.length-last);
    let astr = leftstr+rightstr;
    return md5(astr);
}