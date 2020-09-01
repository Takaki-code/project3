function getScrollTop() {
    var scroll_top = 0;
    scroll_top = document.documentElement.scrollTop;
    var all = document.getElementById('all');
    var dengju = document.getElementById('dengju');
    var wenkong = document.getElementById('wenkong');
    var jiating = document.getElementById('jiating');
    var chanpin1 = document.getElementById('chanpin1');
    var chanpin2 = document.getElementById('chanpin2');
    var chanpin3 = document.getElementById('chanpin3');
    var chanpin4 = document.getElementById('chanpin4');
    var chanpin5 = document.getElementById('chanpin5');
    var chanpin6 = document.getElementById('chanpin6');
    var chanpin7 = document.getElementById('chanpin7');
    
    // // 智慧产品4个头部块
    if(scroll_top >= 0){
        all.style['top'] = "0";
        all.style['opacity'] = "1";
    }
    if(scroll_top >= 0){
        // dengju.style.transitionProperty="top,opacity";
        dengju.style['top'] = "0";
        dengju.style['opacity'] = "1";
    }
    if(scroll_top >= 0){
        // wenkong.style.transitionProperty="top,opacity";
        wenkong.style['top'] = "0";
        wenkong.style['opacity'] = "1";
    }
    if(scroll_top >= 0){
        // jiating.style.transitionProperty="top,opacity";
        jiating.style['top'] = "0";
        jiating.style['opacity'] = "1";
    }
    // 产品图片6块
    if(scroll_top >= 0){
        chanpin1.style['top'] = "0";
        chanpin1.style['opacity'] = "1";
    }
    if(scroll_top >= 0){
        chanpin2.style['top'] = "0";
        chanpin2.style['opacity'] = "1";
    }
    if(scroll_top >= 0){
        chanpin3.style['top'] = "0";
        chanpin3.style['opacity'] = "1";
    }
    if(scroll_top >= 0){
        chanpin4.style['top'] = "0";
        chanpin4.style['opacity'] = "1";
    }
    if(scroll_top >= 0){
        chanpin5.style['top'] = "0";
        chanpin5.style['opacity'] = "1";
    }
    if(scroll_top >= 0){
        chanpin6.style['top'] = "0";
        chanpin6.style['opacity'] = "1";
    }
    if(scroll_top >= 400){
        chanpin7.style['top'] = "0";
        chanpin7.style['opacity'] = "1";
    }
}