import axios from "axios"
import qs from "qs"
import md5 from "js-md5";
import getkey from './secret'

axios.defaults.timeout = 10000;
if (process.env.NODE_ENV == "production") {
    axios.defaults.baseURL = "/api/"
    // axios.defaults.baseURL = "http://h5.iusns.com/api/"
} else if (process.env.NODE_ENV == "test") {
    axios.defaults.baseURL = "http://h5.iusns.com/api/"
} else {
    axios.defaults.baseURL = ""
}
// console.log(process.env.NODE_ENV);
// console.log( axios.defaults.baseURL,' axios.defaults.baseURL');
// axios.defaults.baseURL = process.env.NODE_ENV == "production" ? process.env.HTTP_URL : '';
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

const headerKey = [
    'X-unique',
    'X-imei',
    'X-os',
    'X-time',
    'X-token',
    'X-appid',
]
// 请求拦截器
axios.interceptors.request.use(
    config => {
        let userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
        // let userInfo = {
        //     "header": {
        //         "X-netmarket": "",
        //         "X-pkg-channel": "50000",
        //         "X-unique": "24bfdd8528def1d87d1d21fa8545528f",
        //         "X-token": "zLIzdSd10O1lSpRc2rKUafa6OB1DFW3EanJbSDlkmD52n5udUf33okHh5lyrsUoec/DyNFdzQH0\u003d",
        //         "X-vendor": "lahaina",
        //         "X-ua": "Mozilla/5.0 (Linux; Android 11; PFJM10 Build/RKQ1.211119.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36",
        //         "X-shumeiid": "BBbqgvPKCu4xkfkZWrEUJmmyDLhIM2FK1NpBghcFgZb1TICDCYfZOQ7zFIuy3YD8ROYvdlgEDild3Ka8J4SC78A\u003d\u003d",
        //         "X-screen-px": "1080x2400",
        //         "X-androidid": "d43372d1cf2ff8af",
        //         "X-os": "1",
        //         "X-appver": "1.1.9.1",
        //         "X-networktype": "NETWORK_WIFI",
        //         "X-msu": "50000",
        //         "X-uid": "10000776",
        //         "X-model": "PFJM10",
        //         "X-deviceversion": "30",
        //         "X-time": "16506215239649458",
        //         "X-oaid": "3A62F8146F944F9281AFBD86F26DF4F5af1862a4dbb292ede153b5669c020dba",
        //         "X-appid": "com.wondership.mt",
        //         "X-sex": "1"
        //     },
        //     "nickName": "测试9432",
        //     "notchScreen": 1,
        //     "rid": -1,
        //     "status": 200,
        //     "statusHeight": 107,
        //     "token": "zLIzdSd10O1lSpRc2rKUafa6OB1DFW3EanJbSDlkmD52n5udUf33okHh5lyrsUoec/DyNFdzQH0\u003d",
        //     "uid": 10000776,
        //     "wealth": 0
        // }

        if (!userInfo) {
            userInfo = {
                header: {
                    'X-imei': '',
                    'X-os': sessionStorage.getItem("isPc") || '4',
                    'X-token': sessionStorage.getItem("token") || '',
                }
            };

        }
        let t = (new Date().getTime().toString()) + Math.floor(Math.random() * 1000);
        let newmd5str = getkey(userInfo, t);
        headerKey.map(key => {
            if (key == 'X-unique') {
                config.headers['X-unique'] = newmd5str;
            } else if (key == 'X-time') {
                config.headers['X-time'] = t;
            } else {
                config.headers[key] = userInfo['header'][key] || "";
            }
        })
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

// 响应拦截器
axios.interceptors.response.use(
    response => {
        return response.data;
    },
    function (error) {
        return Promise.reject(error);
    }
);

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(response => {
            resolve(response);
        }).catch(err => {
            reject(err)
        })
    })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, qs.stringify(data)).then(response => {
            resolve(response);
        }, err => {
            reject(err)
        })
    })
}

export default {
    get,
    post
};



