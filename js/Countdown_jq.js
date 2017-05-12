$(document).ready(function () {
    
    timing();
    var timer= setInterval("timing()",1000);

})
 function  timing() {
     var currentTime= new Date();
     var endTime= new Date("2017/5/20 00:00:00");
     var seconds= (endTime.getTime() - currentTime.getTime())/1000;
     var d=Math.floor(seconds/(60*60*24));
     var h=Math.floor(seconds/60/60%24);
     var m=Math.floor(seconds/60%60);
     var s=Math.floor(seconds%60);
     if(seconds>0)
     {
         switchDigit('.days',d);
         switchDigit('.hours',h);
         switchDigit('.minutes',m);
         switchDigit('.seconds',s);
     }
     else {
         $('.container').html("抢购已经结束！");
         clearInterval(timer);
     }
 }

//提取重复代码 封装出来一个函数，切换数字的同时添加动画效果
function switchDigit(time,number) {

    //创建一个新标签来代替旧的
    var replacement = $('<span>',{
        'class':'digit',
        css:{
            top:'-10px',
            opacity:0
        },
        html:number
    });

    var digit=$(time).find('.digit');
    if(digit.is(':animated')){
        return false;
    }

    if(digit.html()==number){
        return false;
    }

    digit.before(replacement)
        .animate({top:"10px",opacity:0},"fast",function () {
            digit.remove();
        });

    replacement
        .delay(100)
        .animate({top:0,opacity:1},"fast");
}
