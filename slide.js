window.onload = function(){
    let n;
    initial();
    setInterval(() => {
        makeLeave(getImage(n))
        .one('transitionend',(e) => {
            makeEnter($(e.currentTarget))
        })
        makeCurrent(getImage(n+1));
        n += 1;
    },1000)
  

    function getImage(n){
        return $(`.images > img:nth-child(${x(n)})`)
    }
    function x(n){
        if(n>4){
            n = n%4;
            if(n === 0){
                n = 4;
            }
        }       // n = 1,2,3,4
        return n
    }

    function initial(){
        n = 1;
        $(`.images > img:nth-child(${n})`).addClass('current')
        .siblings().addClass('enter');
    }
    function makeLeave($node){
        return $node.removeClass('enter current').addClass('leave')
    }
    function makeEnter($node){
        return $node.removeClass('leave current').addClass('enter')
    }
    function makeCurrent($node){
        return $node.removeClass('leave enter').addClass('current')
    }
}