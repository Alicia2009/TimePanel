window.onload =function () {
    currentTime();
    setInterval("currentTime()",1000);
    countdown();
    countdown2(); 
}

//计算当前时间
function currentTime() {
    var currentTime= new Date();
    var year=currentTime.getFullYear();
    var month=currentTime.getMonth()+1;
    var date=currentTime.getDate();
    var day=currentTime.getDay();
    day ="星期"+"日一二三四五六".charAt(day);

    var hour=currentTime.getHours();
    var minutes= currentTime.getMinutes();
    var seconds=currentTime.getSeconds();
    hour = hour<10?'0'+hour:hour;
    minutes = minutes<10?'0'+minutes:minutes;
    seconds = seconds<10?'0'+seconds:seconds;
    document.getElementById("current").innerHTML= year+'年'+month+'月'+date+'日'+day+' '+hour+':'+minutes+':'+seconds;
}
//天数倒计时
function countdown() {
    var currentTime= new Date();
    var endTime= new Date("2017/6/6");
    var leftTime= (endTime.getTime() - currentTime.getTime())/(1000*60*60*24);
    leftTime =Math.ceil(leftTime);
    document.getElementById("countdown").innerHTML= leftTime+'天';
}

//抢购倒计时
function countdown2() {
    var currentTime= new Date();
    var endTime= new Date("2017/6/20 00:00:00");
    var seconds= (endTime.getTime() - currentTime.getTime())/1000;
    var d=Math.floor(seconds/(60*60*24));
    var h=Math.floor(seconds/60/60%24);
    var m=Math.floor(seconds/60%60);
    var s=Math.floor(seconds%60);
    if(seconds>0)
    {
        document.getElementById("leftTime").innerHTML= d+'天'+h+'小时'+m+'分'+s+'秒';
        setTimeout("countdown2()",1000);
    }
    else {
        document.getElementById("leftTime").innerHTML="抢购已经结束！"
    }
}
