$(function () {
    //接口1：二级导航

    $.ajax({
        url: "http://mock.shtodream.cn/mock/5e78a45cb9b0d45a938f5d39/list",
        dataType: "json",
        type: "get",
        success: function (obj) {
            
            // console.log(obj);
            var str = "";
            $.each(obj.data, function (i, v) {
                // console.log(v);
                str += "<li>" + v.firstNav;
                if (v.secondNav) {
                    str += "<ul>"
                    $.each(v.secondNav, function (ii, vv) {
                        // console.log(vv);
                        str += "<li><a>" + vv.name + "</a></li>";
                    })
                    str += "</ul>";
                }
                str += "</li>";
            })
            $("#link").html($(str));

            //????????????????
            $("ul#link>li").on("mouseenter", function () {
                $(this).children("ul").show(200);
            });
            $("#link>li").on("mouseleave", function () {
                $(this).children("ul").hide(200);
            });
        }
    })


    // 二级菜单效果
    // 对脚本添加的元素触发不了
    //为什么必须放在success中？？？？？
    



})


