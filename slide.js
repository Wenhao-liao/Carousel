window.onload = function(){
    $(`.images>img:nth-child(1)`).addClass('current');
    $(`.images>img:nth-child(2)`).addClass('enter');
    $(`.images>img:nth-child(3)`).addClass('enter');
    $(`.images>img:nth-child(4)`).addClass('enter');
    let n = 1;
    setInterval(() => {
        $(`.images>img:nth-child(${x(n)})`).removeClass('current').addClass('leave')
        .one('transitionend',(e) => {
            $(e.currentTarget).removeClass('leave').addClass('enter')
        });
        $(`.images>img:nth-child(${x(n+1)})`).removeClass('enter').addClass('current');
        n += 1
    }, 3000);
    //处理使得n永远是1，2，3，4
    function x(n){
        if(n>4){         
            n = n%4;
            if(n === 0){
                n = 4
            }
        }
        return n
    }
  
}