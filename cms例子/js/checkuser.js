$(function () {
    if (localStorage.getItem("linkname")) {
        $("#admin").html("恭喜" + localStorage.getItem("linkname") + "支付宝到账100万")
    } else {
        alert("请登录");
        location.href = "login.html";
    }
    $("#btn").click(function () {
        localStorage.clear();
        window.opener = null;
        window.open(" ", "_self").close();
    })
})