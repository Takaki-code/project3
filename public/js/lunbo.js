function right(){
    // 定义盒子
    var bannermax = document.getElementById("bannermax");
    // 获取盒子当前left值，indexOf获取left值'px'下标;
    var left_num = bannermax.style.left.indexOf('px');
    // 获取盒子当前left值，通过substring获取left值截取到px前面的值，再用Number变更为数值类型;
    var left_val = Number(bannermax.style.left.substring(0,left_num));
    // 使当前盒子的值减去单个轮播体宽度的值，得到盒子向左移动一个轮播体的数值;
    left_val = left_val -1920;
    // 判断有没有过度属性，没有就加上
    if(bannermax.style.transition !== "all 0.3s linear"){
        bannermax.style.transition = "all 0.3s linear";
    }
    // 给盒子的left值定义为减去单个轮播体宽度的值后的数值，加上单位，实现向左滑动;
    bannermax.style.left = left_val + 'px';
    // console.log(left_val);
    // 判断当前轮播的位置，当轮播到最后一张时，跳转回第一张
    if(left_val == -5760){
        // 设置延迟，等上一个过度效果结束后，去除过度属性，并跳回第一张
        setTimeout(function(){
        bannermax.style.left = "-1920px";
        // 去除过度属性
        bannermax.style.transition = "none";
        },300)
        
    }

    var bannermin = document.getElementById("bannermin");
    var left_num2 = bannermin.style.left.indexOf('px');
    var left_val2 = Number(bannermin.style.left.substring(0,left_num2));
    left_val2 = left_val2 -340;
    if(bannermin.style.transition !== "all 0.3s linear"){
        bannermin.style.transition = "all 0.3s linear";
    }
    bannermin.style.left = left_val2 + 'px';
    // console.log(left_val2);
    if(left_val2 == -1020){
        setTimeout(function(){
        bannermin.style.left = "-340px";
        // 去除过度属性
        bannermin.style.transition = "none";
        },300)
    }

    var lunbop1_1 = document.getElementById("lunbop1-1");
    var lunbop1_2 = document.getElementById("lunbop1-2");
    var lunbop2_1 = document.getElementById("lunbop2-1");
    var lunbop2_2 = document.getElementById("lunbop2-2");
    if(lunbop1_1.style.opacity == '' || lunbop1_1.style.opacity == '1' ){
        lunbop1_1.style.opacity = "0";
        lunbop1_1.style.top = "30px";
        lunbop2_1.style.opacity = "1";
        lunbop2_1.style.top = "0";

        lunbop1_2.style.opacity = "0";
        lunbop1_2.style.top = "30px";
        lunbop2_2.style.opacity = "1";
        lunbop2_2.style.top = "0";
    }else{
        lunbop1_1.style.opacity = "1";
        lunbop1_1.style.top = "0";
        lunbop2_1.style.opacity = "0";
        lunbop2_1.style.top = "30px";

        lunbop1_2.style.opacity = "1";
        lunbop1_2.style.top = "0";
        lunbop2_2.style.opacity = "0";
        lunbop2_2.style.top = "30px";
    }
    
}

function left(){
    var bannermax = document.getElementById("bannermax");
    var left_num = bannermax.style.left.indexOf('px');
    var left_val = Number(bannermax.style.left.substring(0,left_num));
    // 使当前盒子的值加上单个轮播体宽度的值，得到盒子向右移动一个轮播体的数值;
    left_val = left_val +1920;
    if(bannermax.style.transition !== "all 0.3s linear"){
        bannermax.style.transition = "all 0.3s linear";
    }
    bannermax.style.left = left_val + 'px';
    // console.log(left_val);
    // 判断当前轮播的位置，当轮播到第一张时，跳转回第二张
    if(left_val == 0){
        setTimeout(function(){
        bannermax.style.left = "-3840px";
        bannermax.style.transition = "none";
        },300)
    }

    var bannermin = document.getElementById("bannermin");
    var left_num2 = bannermin.style.left.indexOf('px');
    var left_val2 = Number(bannermin.style.left.substring(0,left_num2));
    left_val2 = left_val2 +340;
    if(bannermin.style.transition !== "all 0.3s linear"){
        bannermin.style.transition = "all 0.3s linear";
    }
    bannermin.style.left = left_val2 + 'px';
    // console.log(left_val2);
    if(left_val2 == 0){
        setTimeout(function(){
        bannermin.style.left = "-680px";
        // 去除过度属性
        bannermin.style.transition = "none";
        },300)
    }
    var lunbop1_1 = document.getElementById("lunbop1-1");
    var lunbop1_2 = document.getElementById("lunbop1-2");
    var lunbop2_1 = document.getElementById("lunbop2-1");
    var lunbop2_2 = document.getElementById("lunbop2-2");
    if(lunbop1_1.style.opacity == '' || lunbop1_1.style.opacity == '1' ){
        lunbop1_1.style.opacity = "0";
        lunbop1_1.style.top = "30px";
        lunbop2_1.style.opacity = "1";
        lunbop2_1.style.top = "0";

        lunbop1_2.style.opacity = "0";
        lunbop1_2.style.top = "30px";
        lunbop2_2.style.opacity = "1";
        lunbop2_2.style.top = "0";
    }else{
        lunbop1_1.style.opacity = "1";
        lunbop1_1.style.top = "0";
        lunbop2_1.style.opacity = "0";
        lunbop2_1.style.top = "30px";

        lunbop1_2.style.opacity = "1";
        lunbop1_2.style.top = "0";
        lunbop2_2.style.opacity = "0";
        lunbop2_2.style.top = "30px";
    }
}

function auto() {
    setInterval(right, 5000);
}

