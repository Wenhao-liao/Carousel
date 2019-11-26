//封装的思路是重复多的完成某一功能的代码放到一块，封装成一个函数
window.onload = function(){
    let buttons = $('button');
    let n = 0;                      //当前active的button下标
    let timerId;                    //定时器的ID
    console.log(buttons);
    //点击跳转到该画面，并且Button高亮
    for(let i=0;i<buttons.length;i++){
        $(buttons[i]).on('click',function(){
            n = i;                                  //用n记录当前第几个，让下一次轮播的时候可以跟上
            $(container).css({
                transform:`translateX(` + i*(-350) +`px)`
            })
            $(buttons[i]).addClass('active')
            .siblings('.active').removeClass('active')
        })
    }
    //触发第一次click，使其位移（第一次位移为0）和变红
    $(buttons[n % 4]).trigger('click')            //这个n%4很关键，让它通过n++可以做到循环轮播
    autoPlay();

    //鼠标浮进去暂停
    $('#window').on('mouseenter',function(){
        console.log('mouseenter')
        window.clearInterval(timerId)               //通过清除定时器来取消自动轮播
    })
    //鼠标浮出来继续自动轮播
    $('#window').on('mouseleave',function(){
        autoPlay()
    })
    
    //自动播放
    function autoPlay(){
        timerId = setInterval(function(){
            n += 1;
            let index = n % 4;  
            $(buttons[index]).trigger('click')
        },1500)
    }
}

