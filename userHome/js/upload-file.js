
$(function () {
    $(".upload-file-display-item li").click(function () {
        // find方法寻找当前元素的后代元素
        if($(this).find("ul").is(':hidden')){
            // toggle方法在显示和隐藏状态之间切换，括号内是速率
            $(this).find("ul").toggle(500);
        }else{
            $(this).find("ul").toggle(500);
        }
    });
});