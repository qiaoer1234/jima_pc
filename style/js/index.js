layui.define(['layer', 'jquery', 'element'], function (exports) {
    var layer = layui.layer,
        $ = layui.jquery,
        element = layui.element;

    // tab 切换
    initTab = function ($navs, $conts, curClsName) {
        $navs.click(function () {
            if ($(this).hasClass(curClsName)) {
                return false
            }
            $navs.removeClass(curClsName)
            $(this).addClass(curClsName)
            var _i = $navs.index($(this))
            $conts.removeClass(curClsName)
            $conts.eq(_i).addClass(curClsName)
        })
    }



// 手机号验证
    function checkPhone(phone) {
        if (!(/^1[3456789]\d{9}$/.test(phone))) {
            return false;
        }
        return true;
    }


    


    exports('index', {});
});