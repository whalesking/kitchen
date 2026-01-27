(function (window) {

    var winOcx = window.winOcx || {};

    /**
     * 判断是否为微信浏览器
     */
    winOcx.isWeiXin = function () {
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            return true;
        } else {
            return false;
        }
    };

    /**
     * 判断移动端浏览器信息(主流浏览器)
     */
    winOcx.version = function () {

        var MostBrowser = [
            'UCBROWSER',//UC浏览器
            'MQQBROWSER',//QQ浏览器
            '360',//360浏览器
            'LIEBAO',//猎豹浏览器
            'HAO123',//hao123 浏览器
            'SOGOU',//搜狗浏览器
            'BAIDUBROWSER',//baidu浏览器
            'OUPENG',//欧朋浏览器
            'MXBROWSER',//遨游浏览器
            'SAMSUNGSM',//三星
            'MB2345BROWSER',//2345浏览器
            'CHROME',//谷歌浏览器--不支持M3U8
            'FIREFOX',//火狐firefox--不支持M3U8
            'XIAOMI',//小米
            'HUAWEI'//华为
        ];

        var brow = navigator.userAgent;
        var str = brow.toLocaleUpperCase();//转大写
        var state = {
            brow: false,
            states: false
        };

        for (var i = 0; i < MostBrowser.length; i++) {
            if (str.indexOf(MostBrowser[i]) > -1) {
                state.brow = MostBrowser[i];
                state.states = true;
                break;
            }
        }
        return state;
    }();

    /**
     * 判断移动端平台信息
     */
    winOcx.browser = function () {
        var u = navigator.userAgent,
            app = navigator.appVersion,
            str = 'AppleWebKit',
            leng = u.indexOf(str),
            clean = u.substring(leng + str.length, leng + str.length + 1);
        var versions = '';
        if (clean == '/') {
            versions = u.substring(leng + str.length + 1, leng + str.length + 1 + 6);
        } else {
            versions = u.substring(leng + str.length, leng + str.length + 6);
        }
        return { //移动终端浏览器版本信息
            mobile: u.indexOf('Mobile') > -1,
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android
            iPhone: u.indexOf('iPhone') > -1, //iPhone
            iPad: u.indexOf('iPad') > -1, //iPad
            UC: u.indexOf('UCBrowser') > -1,
            version: versions
        }
    }();

    /**
     * 调试模式 == 获取url参数
     */
    winOcx.console = false;

    winOcx.getUrlOptions = function (url) {
        var newUrl = url ? url : window.location.href;
        var add = newUrl.indexOf('?'), el = {};
        if (add == -1) return el;
        newUrl = newUrl.substring(add + 1, newUrl.length);
        var urlEle = function (_url) {
            if (_url != undefined) {
                var _add = _url.indexOf('=');
                if (_add == -1) return el;
                var
                    _endAdd = (_url.indexOf('&') == -1) ? _url.length : _url.indexOf('&'),
                    key = _url.substring(0, _add),
                    val = _url.substring(_add + 1, _endAdd),
                    _subStr = _url.substring(_endAdd + 1, _url.length);
                el[key] = val;
                if (_subStr.length != 0) {
                    urlEle(_subStr);
                }
            }
            return el;
        };
        return urlEle(url);
    }();

    if (winOcx.getUrlOptions.console) {
        winOcx.console = true;
    }


    /**
     * 本webview跳转页面
     */
    winOcx.loadPage = function (url) {
        url = url ? url : window.location.href;
        if (winOcx.browser.ios) {
            winOcx.loadWebview(url);
        } else {
            window.location = url;
        }
    };

    winOcx.initMobile = function () {

        if (winOcx.isWeiXin()) {
            return false;
        }

        if (winOcx.browser.ios) {
            var sendMsgIos = function (callback) {
                if (window.WebViewJavascriptBridge) {
                    return callback(window.WebViewJavascriptBridge);
                }
                if (window.WVJBCallbacks) {
                    return window.WVJBCallbacks.push(callback);
                }
                window.WVJBCallbacks = [callback];
                var WVJBIframe = document.createElement('iframe');
                WVJBIframe.style.display = 'none';
                WVJBIframe.src = 'https://__bridge_loaded__';
                document.documentElement.appendChild(WVJBIframe);
                setTimeout(function () {
                    document.documentElement.removeChild(WVJBIframe)
                }, 0);
            }

            sendMsgIos(function (iuapp) {

                var initIosFun = function (funName, sendData, callback) {
                    var data = null;
                    funName = funName ? funName : 'getUserInfo';
                    sendData = sendData ? sendData : '';
                    iuapp.callHandler(funName, sendData, function (data) {
                        if (!callback) return;
                        if (funName == 'getUserInfo') {
                            var UserInfo = eval('(' + data + ')');
                            callback(UserInfo);
                        } else {
                            callback(data);
                        }
                    });
                }


                /**
                 * 获取用户数据
                 */
                winOcx.getUserInfo = function (callback) {
                    initIosFun('getUserInfo', '', (data) => {
                        window.localStorage.setItem('userInfo', JSON.stringify(data));
                        callback(data)
                    });
                }

                /**
                 * 直播间活动弹层背景透明
                 * 配合 html,body{background:rgba(0,0,0,0);}
                 */
                winOcx.resetBackground = function () {
                    initIosFun('resetBackground');
                }
                /*
                网页背景设为透明
                 */
                winOcx.resetTransparentBg = function () {
                    initIosFun('resetTransparentBg');
                }

                /**
                 * 直播间活动弹层关闭
                 */
                winOcx.closePage = function () {
                    initIosFun('closePage');
                }

                /**
                 * 调用手机端提示'字符串'
                 */
                winOcx.awardWord = function (txt) {
                    txt = txt ? txt : '';
                    initIosFun('awardWord', {msg: txt});
                }

                /**
                 * 调用手机端提示'字符串'
                 */
                 winOcx.tip = function (txt) {
                    txt = txt ? txt : '';
                    initIosFun('showAlert', {msg: txt});
                }

                /**
                 * 人脸识别
                 * @param {参数} data
                 * @param {回调} callback
                 */
                winOcx.openFaceDetection = function (data, callback) {
                    initIosFun('openFaceDetection', data)
                    iuapp.registerHandler('faceDetectionResult', function (data) {
                        callback(data)
                    });
                }

                /**
                 * 图片上传
                 * @param {服务端保存图片目录名} imgPath
                 * @param {回调函数} callback
                 */
                winOcx.uploadImg = function (callback) {
                    initIosFun('uploadImg');
                    iuapp.registerHandler('upLoadImgResult', function (data) {
                        callback(data)
                    });
                }
                /**
                 * 视频房间封面上传
                 * @param {服务端保存图片目录名} imgPath
                 * @param {回调函数} callback
                 */
                winOcx.uploadCover = function (callback,msg) {
                    initIosFun('uploadCover',msg);
                    iuapp.registerHandler('upLoadImgResult', function (data) {
                        callback(data)
                    });
                }
                /**
                 * 设置title
                 */
                winOcx.setNavTitle = function (str) {
                    initIosFun('setNavTitle', str);
                }
                /**
                 * 跳转直播间或用户页
                 * data {
                 *      state = 1 rid  跳转直播间
                 *      state!=1 uid 用户页
                 * }
                 */
                winOcx.headClick = function (data) {
                    initIosFun('headClick', data);
                }

                /**
                 * 新开页打开页面(直播间内活动详情)
                 *
                 */
                winOcx.pushWebview = function (url) {
                    if (!url) return;
                    initIosFun('pushWebview', url);
                }
                /**
                 * 返回登录页
                 *
                 */
                winOcx.returnLogin = function () {
                    initIosFun('returnLogin');
                }
                /**
                 * 打开好友列表
                 *
                 */
                winOcx.openFrendsPage = function (data) {
                    initIosFun('openFrendsPage', data);
                }
                /**
                 * 打开充值页面
                 *
                 */
                winOcx.openPayPage = function (data) {
                    initIosFun('openPayPage', data);
                }
                /**
                 * 打开动态广场
                 *
                 */
                winOcx.goDynamicPage = function (data) {
                    initIosFun('goDynamicPage', data);
                }

                /**
                 * 调用客户端发送口令
                 *
                 */
                winOcx.awardWord = function (str) {
                    initIosFun('awardWord', str);
                }

                //跳转任意聊天室
                winOcx.jumpAnyRoom = function (str) {
                    initIosFun('jumpAnyRoom', str);
                }


                //打开签到窗口
                winOcx.openSignDialog = function (str) {
                    initIosFun('openSignDialog', str);
                }

                /**
                 * 分享活动
                 * * data = {
                    "url":"",
                    "image":"",
                    "title":"",
                    "content":"",
                    "type":0 所有分享渠道都显示 1 只显示个别
                }
                 *
                 */
                winOcx.shareDialog = function (data) {
                    initIosFun('jsShowShareDialog', data);
                }
            });

        } else if (winOcx.browser.android) {

            /**
             * 获取用户数据
             *String token;
             *String nickName;
             *int status; 200/4001(登录/未登录)
             *int uid ;
             *int rid ;是主播返回房间号否则返回-1
             *String wealth;
             *String credit;
             *String roomID;当前进入的房间
             *String imei;
             *int os; 1 安卓 2 ios
             *ncode,ncodeTime 服务端验证用
             */
            winOcx.getUserInfo = function (callback) {
                if (!window.iuapp) return false;
                var data = window.iuapp.getUserInfo();

                var UserInfo = eval('(' + data + ')');
                window.localStorage.setItem('userInfo', data);
                if (UserInfo.status == 200) {
                    winOcx.getAuthcodeAndTime(function (ncodeStr) {
                        UserInfo.ncode = ncodeStr[0];
                        UserInfo.ncodeTime = ncodeStr[1];
                        callback(UserInfo);
                    })
                } else {
                    UserInfo.ncode = 0;
                    UserInfo.ncodeTime = 0;
                    callback(UserInfo);
                }
            }

            /**
             * 登录验证，移动端返回字符串
             * key:time
             */
            winOcx.getAuthcodeAndTime = function (callback) {
                if (!window.iuapp) return false;
                callback(window.iuapp.getAuthcodeAndTime().split(':'));
            }

            /**
             * 获取头部信息
             */
            winOcx.getHttpHeader = function () {
                if (!window.iuapp) return false;
                return window.iuapp.getHttpHeader();
            }


            /**
             *
             * @param {提示字符串} txt
             * @param {是否带有按钮} isButton
             */
            winOcx.tip = function (txt, isButton) {
                if (!window.iuapp) return false;
                if (isButton) {
                    window.iuapp.jsShowDialog(txt);
                } else {
                    window.iuapp.jsShowToast(txt);
                }
            }
            /**
             * 直播间活动弹层背景
             * 配合 html,body{background:rgba(0,0,0,0);}
             */
            winOcx.resetBackground = function () {
                if (!window.iuapp) return false;
                window.iuapp.resetBackground();
            }
            winOcx.awardWord = function (data) {
                if (!window.iuapp) return false;
                window.iuapp.awardWord(data);
            }



            /**
             * 图片上传
             * @param {服务端保存图片目录名} imgPath
             * @param {回调函数} callback
             */
            winOcx.uploadImg = function (callback) {
                if (!window.iuapp) return false;
                window.upLoadImgResult = function (url) {
                    callback(url)
                }

                window.iuapp.uploadImg();
            }
            /**
             * 视频房间封面上传
             * @param {服务端保存图片目录名} imgPath
             * @param {回调函数} callback
             */
            winOcx.uploadCover = function (callback,msg,b) {
                if (!window.iuapp) return false;
                window.upLoadImgResult = function (url) {
                    callback(url)
                }
                if(b){
                    console.log(1)
                    window.iuapp.uploadCover(msg);
                }else{
                    console.log(2)
                    window.iuapp.uploadCover();
                }
            }

            /**
             * 人脸识别
             * @param {参数} data
             * @param {回调} callback
             */
            winOcx.openFaceDetection = function (data, callback) {
                if (!window.iuapp) return false;
                window.faceDetectionResult = function (data) {
                    callback(data)
                }
                window.iuapp.openFaceDetection(data.realname, data.id_no);
            }

            /**
             * 修该活动标题
             * @param {活动标题} title
             */
            winOcx.setNavTitle = function (title) {
                if (!window.iuapp) return false;
                window.iuapp.setNavTitle(title);
            }
            // 跳转到动态页
            winOcx.goDynamicEditor = function () {
                if (!window.iuapp) return false;
                window.iuapp.goDynamicEditor();
            }
              // 跳转到动态广场
            winOcx.goDynamicPage = function () {
                if (!window.iuapp) return false;
                window.iuapp.goDynamicPage();
            }

            /**
             *
             * @returns 关闭活动页面
             */
            winOcx.closePage = function () {
                if (!window.iuapp) return false;
                window.iuapp.closePage();
            }
            // 关闭活动页面打开礼物栏
            winOcx.showGiftDialog = function () {
                if (!window.iuapp) return false;
                window.iuapp.showGiftDialog()();
            }
            /*
            网页背景设为透明
             */
            winOcx.resetTransparentBg = function () {
                if (!window.iuapp) return false;
                window.iuapp.resetTransparentBg();
            }
            /**
             * 跳转直播间或用户页
             * data {
                 *      state = 1 rid  跳转直播间
                 *      state!=1 uid 用户页
                 * }
             */
            winOcx.headClick = function (data) {
                if (!window.iuapp) return false;
                window.iuapp.headClick(data);
            }
            /**
             *  游戏跳转直播间
             * @param rid 房间号
             * @param state
             * @returns {boolean}
             */
            winOcx.jumpRoom = function (rid, state) {
                if (!window.iuapp) return false;
                window.iuapp.jumpRoom(rid, state);
            }

            /**
             * 新开页打开页面(直播间内活动详情)
             *
             */
            winOcx.pushWebview = function (url) {
                if (!window.iuapp) return false;
                window.iuapp.pushWebview(url);
            }
            /**
             * 返回登录页
             *
             */
            winOcx.returnLogin = function () {
                if (!window.iuapp) return false;
                window.iuapp.returnLogin();
            }
            /**
             * 打开好友列表
             *
             */
            winOcx.openFrendsPage = function (data) {
                if (!window.iuapp) return false;
                window.iuapp.openFrendsPage(data);
            }
            /**
             * 打开充值页面
             *
             */
            winOcx.openPayPage = function (data) {
                if (!window.iuapp) return false;
                window.iuapp.openPayPage(data);
            }

            /**
             * 调用客户端发送口令
             *
             */
            winOcx.awardWord = function (str) {
                if (!window.iuapp) return false;
                window.iuapp.awardWord(str);
            }
            //跳转任意聊天室
            winOcx.jumpAnyRoom = function (str) {
                if (!window.iuapp) return false;
                window.iuapp.jumpAnyRoom(str);
            }
            //打开签到窗口
            winOcx.openSignDialog = function (str) {
                if (!window.iuapp) return false;
                window.iuapp.openSignDialog(str);
            }

            /**
             * 分享活动
             * * data = {
                    "url":"",
                    "image":"",
                    "title":"",
                    "content":"",
                    "type":0  所有分享渠道都显示 1 只显示个别
                }
             *
             */
            winOcx.shareDialog = function (data) {
                if (!window.iuapp) return false;
                window.iuapp.jsShowShareDialog(data);
            }
        }

        return true;
    }();

    window.winOcx = winOcx;

})(window);


