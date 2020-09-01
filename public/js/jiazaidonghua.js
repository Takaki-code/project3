function getScrollTop() {
    var scroll_top = 0;
    scroll_top = document.documentElement.scrollTop;
    var zhihui = document.getElementById('zhihui');
    var smart = document.getElementById('smart');
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
    var more = document.getElementById('more');
    var chanpinlei1 = document.getElementById('chanpinlei1');
    var chanpinlei2 = document.getElementById('chanpinlei2');
    var chanpinlei3 = document.getElementById('chanpinlei3');
    var chanpinlei4 = document.getElementById('chanpinlei4');
    var dongtai = document.getElementById('dongtai');
    var lat = document.getElementById('lat');
    var all2 = document.getElementById('all2');
    var zuixin = document.getElementById('zuixin');
    var newscont1 = document.getElementById('newscont1');
    var newscont2 = document.getElementById('newscont2');
    var newscont3 = document.getElementById('newscont3');
    var more2 = document.getElementById('more2');
    var anli = document.getElementById('anli');
    var succ = document.getElementById('succ');
    var anlicont1 = document.getElementById('anlicont1');
    var anlicont2 = document.getElementById('anlicont2');
    var anlicont3 = document.getElementById('anlicont3');
    var anlicont4 = document.getElementById('anlicont4');
    var anlicont5 = document.getElementById('anlicont5');
    var anlicont6 = document.getElementById('anlicont6');
    var anlicont0 = document.getElementById('anlicont0');
    var hezuo = document.getElementById('hezuo');
    var part = document.getElementById('part');
    var hezuologo1 = document.getElementById('hezuologo1');
    var hezuologo2 = document.getElementById('hezuologo2');
    var hezuologo3 = document.getElementById('hezuologo3');
    var hezuologo4 = document.getElementById('hezuologo4');
    var hezuologo5 = document.getElementById('hezuologo5');
    // console.log(scroll_top);
    // 智慧产品
    if(scroll_top > 240){
        zhihui.style['top'] = "0";
        zhihui.style['opacity'] = "1";
    }
    if(scroll_top > 240){
        smart.style['top'] = "0";
        smart.style['opacity'] = "1";
    }
    // // 智慧产品4个头部块
    if(scroll_top > 300){
        all.style['top'] = "0";
        all.style['opacity'] = "1";
    }
    if(scroll_top > 300){
        // dengju.style.transitionProperty="top,opacity";
        dengju.style['top'] = "0";
        dengju.style['opacity'] = "1";
    }
    if(scroll_top > 300){
        // wenkong.style.transitionProperty="top,opacity";
        wenkong.style['top'] = "0";
        wenkong.style['opacity'] = "1";
    }
    if(scroll_top > 300){
        // jiating.style.transitionProperty="top,opacity";
        jiating.style['top'] = "0";
        jiating.style['opacity'] = "1";
    }
    // 产品图片6块
    if(scroll_top > 400){
        chanpin1.style['top'] = "0";
        chanpin1.style['opacity'] = "1";
    }
    if(scroll_top > 400){
        chanpin2.style['top'] = "0";
        chanpin2.style['opacity'] = "1";
    }
    if(scroll_top > 400){
        chanpin3.style['top'] = "0";
        chanpin3.style['opacity'] = "1";
    }
    if(scroll_top > 690){
        chanpin4.style['top'] = "0";
        chanpin4.style['opacity'] = "1";
    }
    if(scroll_top > 690){
        chanpin5.style['top'] = "0";
        chanpin5.style['opacity'] = "1";
    }
    if(scroll_top > 690){
        chanpin6.style['top'] = "0";
        chanpin6.style['opacity'] = "1";
    }
    // more
    if(scroll_top > 1000){
        more.style['top'] = "0";
        more.style['opacity'] = "1";
    }  
    // 产品类别
    if(scroll_top > 1590){
        chanpinlei1.style['top'] = "0";
        chanpinlei1.style['opacity'] = "1";
    }   
    if(scroll_top > 1800){
        chanpinlei2.style['top'] = "0";
        chanpinlei2.style['opacity'] = "1";
    }    
    if(scroll_top > 1590){
        chanpinlei3.style['top'] = "0";
        chanpinlei3.style['opacity'] = "1";
    } 
    if(scroll_top > 1800){
        chanpinlei4.style['top'] = "0";
        chanpinlei4.style['opacity'] = "1";
    }
    // 动态
    if(scroll_top > 2000){
        dongtai.style['top'] = "0";
        dongtai.style['opacity'] = "1";
    }
    if(scroll_top > 2000){
        lat.style['top'] = "0";
        lat.style['opacity'] = "1";
    }
    if(scroll_top > 2200){
        all2.style['top'] = "0";
        all2.style['opacity'] = "1";
    }
    if(scroll_top > 2200){
        zuixin.style['top'] = "0";
        zuixin.style['opacity'] = "1";
    }
    // 新闻内容3块
    if(scroll_top > 2500){
        newscont1.style['top'] = "0";
        newscont1.style['opacity'] = "1";
    }
    if(scroll_top > 2500){
        newscont2.style['top'] = "0";
        newscont2.style['opacity'] = "1";
    }
    if(scroll_top > 2500){
        newscont3.style['top'] = "0";
        newscont3.style['opacity'] = "1";
    }
    // 更多2
    if(scroll_top > 3000){
        more2.style['top'] = "0";
        more2.style['opacity'] = "1";
    }
    // 案例
    if(scroll_top > 3400){
        anli.style['top'] = "0";
        anli.style['opacity'] = "1";
    }
    if(scroll_top > 3400){
        succ.style['top'] = "0";
        succ.style['opacity'] = "1";
    }
    if(scroll_top > 3600){
        anlicont0.style['top'] = "0";
        anlicont0.style['opacity'] = "1";
    }
    if(scroll_top > 3600){
        anlicont1.style['top'] = "0";
        anlicont1.style['opacity'] = "1";
    }
    if(scroll_top > 3600){
        anlicont2.style['top'] = "0";
        anlicont2.style['opacity'] = "1";
    }
    if(scroll_top > 3600){
        anlicont3.style['top'] = "0";
        anlicont3.style['opacity'] = "1";
    }
    if(scroll_top > 3800){
        anlicont4.style['top'] = "0";
        anlicont4.style['opacity'] = "1";
    }
    if(scroll_top > 3800){
        anlicont5.style['top'] = "0";
        anlicont5.style['opacity'] = "1";
    }
    if(scroll_top > 3800){
        anlicont6.style['top'] = "0";
        anlicont6.style['opacity'] = "1";
    }
    // 合作
    if(scroll_top > 4200){
        hezuo.style['top'] = "0";
        hezuo.style['opacity'] = "1";
    }
    if(scroll_top > 4200){
        part.style['top'] = "0";
        part.style['opacity'] = "1";
    }
    if(scroll_top > 4400){
        hezuologo1.style['top'] = "0";
        hezuologo1.style['opacity'] = "1";
    }
    if(scroll_top > 4400){
        hezuologo2.style['top'] = "0";
        hezuologo2.style['opacity'] = "1";
    }
    if(scroll_top > 4400){
        hezuologo3.style['top'] = "0";
        hezuologo3.style['opacity'] = "1";
    }
    if(scroll_top > 4400){
        hezuologo4.style['top'] = "0";
        hezuologo4.style['opacity'] = "1";
    }
    if(scroll_top > 4400){
        hezuologo5.style['top'] = "0";
        hezuologo5.style['opacity'] = "1";
    }


}

