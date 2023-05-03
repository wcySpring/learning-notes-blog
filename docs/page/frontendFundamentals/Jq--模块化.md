>[success] # jq 细节
~~~
// 检测当前运行JS的环境是否支持window「Node环境下运行 g-->global/模块」
var g = typeof window !== "undefined" ? window : this;
var factory = function factory(window, noGlobal) {
    // webpack : window-->window   noGlobal-->true
    // 浏览器(webview): window-->window   noGlobal-->undefined
    "use strict";
    var version = "3.6.0",
        jQuery = function (selector, context) {
            return new jQuery.fn.init(selector, context);
        };
    // ......

    //=====================冲突处理
    // 场景
    //    <script src='zepto.js'></script>
    //        window.$=Zepto;
    //    <script src='jquery.js'></script>
    //        var _$=window.$;  // _$===Zepto
    //        jQuery.noConflict = function (deep) {}
    // 
    //        window.$=jQuery;
    // JQ抢了Zepto对$的使用权，此时需要转让使用权 let jj=$.noConflict()，后期 jj 代表的是就是JQ
    var _jQuery = window.jQuery,
        _$ = window.$;
    jQuery.noConflict = function (deep) {
        if (window.$ === jQuery) {
            window.$ = _$;
        }
        if (deep && window.jQuery === jQuery) {
            window.jQuery = _jQuery;
        }
        return jQuery;
    };

    //=====================导出API
    // 让其支持AMD模块规范
    if (typeof define === "function" && define.amd) {
        define("jquery", [], function () {
            return jQuery;
        });
    }
    // 如果直接在浏览器（webview）中基于 <script src='jquery.js'> 导入的JQ，我们在全局对象中暴露 “jQuery | $”
    if (typeof noGlobal === "undefined") {
        window.jQuery = window.$ = jQuery;
    }
    // 在webpack中运行，则基于module.exports=jQuery，让其支持CommonJS规范
    return jQuery;
};

(function (global, factory) {
    // 浏览器(webview & webpack):global-->window  
    // NODE环境:global-->global/模块
    "use strict";
    if (typeof module === "object" && typeof module.exports === "object") {
        // 当前环境支持CommonJS规范：NODE & webpack
        module.exports = global.document ?
            // global-->window  说明是运行在webpack环境中的
            factory(global, true) :
            // 说明在NODE环境下运行 “JQ不支持NODE环境下运行”
            function (w) {
                if (!w.document) {
                    throw new Error("jQuery requires a window with a document");
                }
                return factory(w);
            };
    } else {
        // 浏览器(webview)
        factory(global);
    }
})(g, factory);

~~~

