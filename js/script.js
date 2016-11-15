$(document).ready(function(){
    //animate scroll when user click nav menu item
    $("nav ul.list-inline").find("a").on("click",animateScroll);
    
    //animate portofolio items when user entered mouse and leave
    $(".img").mouseenter(function(){
        $(this).addClass("hover"); 
    });
                
    $(".img").mouseleave(function(){
        $(this).removeClass("hover");
    });
    
    
    
    //back to top of the page
    $(".back-to-top").on("click",function(e){
       e.preventDefault();
        
        
        
        $("body").animate({scrollTop:0},2000);
        return false;
    });
    
 });

function animateScroll(){
    var href = $(this).attr("href"); 
    var anchor = $(href).offset();
    $("body").animate({scrollTop : anchor.top},2000);
    return false;
}

//function backToTop(){
//    var offset = 250;
//    var duration = 300;
//    $(window).scroll(function(){
//        if($(this).offset() > offset);
//        {
//            $(".back-to-top").fadeIn(duration);
//        }else{
//            $("back-to-top").fadeOut(duration);
//        }
//    });
//    
//    $(".back-to-top").click(function(e){
//        e.preventDefault();
//        
//        $(body).animate({scrollTop:0},duration);
//        return false;
//    });
//};