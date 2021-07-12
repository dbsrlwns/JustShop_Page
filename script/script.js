/* eslint-disable */

$(function (){
    
    /* GNB 메뉴 */
    $("#mainMenu").mouseover(function (){
        $(".subMenu").stop().slideDown(300);
    });
    
    $("#mainMenu").mouseout(function (){
        $(".subMenu").stop().slideUp(100);
    });
    
    
    /* 슬라이드 구현 */
    function fnSlide() {
        $("#shuttleFrame").animate(
            {"margin-top" : "-300px"},
            1000,
            function (){
                $("#shuttleFrame>a:first-child").insertAfter("#shuttleFrame>a:last-child");
                $("#shuttleFrame").css(
                    {"margin-top" : "0"}
                );
            }
        );   
    }
    setInterval(fnSlide, 4000);
    
    /* 멀티탭 구현 */
    $(".tabBtn").click(function (){
        $(".tabBtn").css({
            "background-color" : "#eee",
            "border-bottom" : "1px solid #aaa"
        });
        
        $(this).css({
            "background-color" : "#fff",
            "border-bottom" : "1px solid #fff"
        });
    });
    
    /* 탭 클릭하면 전환 */
    $(".tabBtn:nth-child(1)").click(function (){
        $("#galleryArea").css({
            "display" : "none"
        });
        $("#noticeArea").css({
            "display" : "block"
        });
    });
    
    $(".tabBtn:nth-child(2)").click(function (){
        $("#galleryArea").css({
            "display" : "block"
        });
        $("#noticeArea").css({
            "display" : "none"
        });
    });
    
    /* 팝업창 실행 */
    $(".selected").click(function (){
        $("#layerBG").css({
            "display" : "block"
        });
    });
    
    $("#closeBtn").click(function (){
        $("#layerBG").css({
            "display" : "none"
        });
    });
});