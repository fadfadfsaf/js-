$(function () {
    $.ajax({
        url: "http://www.qhdlink-student.top/student/coach.php",
        type: "post",
        dataType: "json",
        data: "",
        success: function (data) {
            console.log(data);
        }
})
})