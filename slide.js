window.onload = function(){
    setTimeout(() => {
        $('.images>img:nth-child(1)').css({
            transform:'translateX(-100%)'
        })
        $('.images>img:nth-child(2)').css({
            transform:'translateX(-100%)'
        })
        //在图片一的动画结束之后触发一次
        $('.images>img:nth-child(1)').one('transitionend',function(e){
            $(e.currentTarget).addClass('right').css({
                transform:'none'
            })
        })
    }, 3000);

    setTimeout(() => {
        $('.images>img:nth-child(2)').css({
            transform:'translateX(-200%)'
        })
        $('.images>img:nth-child(3)').css({
            transform:'translateX(-100%)'
        })
        $('.images>img:nth-child(2)').one('transitionend',function(e){
            $(e.currentTarget).addClass('right').css({
                transform:'none'
            })
        })
    }, 6000);

    setTimeout(() => {
        $('.images>img:nth-child(3)').css({
            transform:'translateX(-200%)'
        })
        $('.images>img:nth-child(4)').css({
            transform:'translateX(-100%)'
        })
        $('.images>img:nth-child(3)').one('transitionend',function(e){
            $(e.currentTarget).addClass('right').css({
                transform:'none'
            })
        })
    }, 9000);

    setTimeout(() => {
        $('.images>img:nth-child(4)').css({
            transform:'translateX(-200%)'
        })
        $('.images>img:nth-child(1)').css({
            transform:'translateX(-100%)'
        })
        $('.images>img:nth-child(4)').one('transitionend',function(e){
            $(e.currentTarget).addClass('right').css({
                transform:'none'
            })
        })
    }, 12000);
}