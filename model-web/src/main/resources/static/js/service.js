

var Service = function (url, type, headers, dataType) {
    this.url = url;
    this.method = type || "post";
    this.headers = headers || {'Content-Type': 'application/json'};
    this.dataType = dataType || "json";
};

Service.prototype = {
    /**发送json*/
    sendData: function (params, successHandler, errorHandler) {
        // this.url = common.url.service + this.url;
        // var defaultParams = common.getDefaultParams();
        // $.extend(defaultParams, params);
        var defaultParams = JSON.stringify(params); // 这里需要转成后台能识别的 Json string
        $.getJSON({
            url: this.url,
            method: this.method,
            headers: this.headers,
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            data: defaultParams,
            beforeSend : function(XMLHttpRequest) {
                $('#prompt').show();
            },
            success: function (result) {
                $('#prompt').hide();
                var code = result.resultCode;
                try {

                        var data = result.data;
                            data = data;

                        if (successHandler && typeof(successHandler) === 'function') {
                            successHandler(data);
                        }

                } catch (e) {
                    console.error(e);
                }
            },
            error : function(XMLHttpRequest, textStatus, errorThrown) {
                var sessionstatus=XMLHttpRequest.getResponseHeader("session-status");
                if(sessionstatus=="timeout"){
                    //如果超时就处理 ，指定要跳转的页面

                }
                $('#prompt').hide();
            }
        });
    },
    get: function (successHandler, errorHandler) {
        this.method = "GET";
        this.headers = {'Content-Type': "application/x-www-form-urlencoded"};
        this.dataType = "text";
        $.ajax({
            url: common.url.service + this.url,
            type: this.method,
            headers: this.headers,
            method: this.method,
            dataType: this.dataType,
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (result) {
                if (successHandler && typeof(successHandler) === 'function') {
                    successHandler(result);
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                if (errorHandler && typeof(errorHandler) === 'function') {
                    errorHandler();
                } else {
                    var sessionstatus=XMLHttpRequest.getResponseHeader("session-status");
                    if(sessionstatus=="timeout"){
                        //如果超时就处理 ，指定要跳转的页面

                    }else{

                    }

                }
            }
        });
    },
    post: function (params, successHandler, errorHandler) {
        this.method = "POST";
        this.headers = {'Content-Type': "application/x-www-form-urlencoded"};
        $.ajax({
            url: common.url.service + this.url,
            type: this.method,
            headers: this.headers,
            dataType: this.dataType,
            data: params,
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (result) {
                if (successHandler && typeof(successHandler) === 'function') {
                    successHandler(result);
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                if (errorHandler && typeof(errorHandler) === 'function') {
                    errorHandler();
                } else {
                    var sessionstatus=XMLHttpRequest.getResponseHeader("session-status");
                    if(sessionstatus=="timeout"){
                        //如果超时就处理 ，指定要跳转的页面

                    }else{

                    }

                }
            }
        });
    }
};
