//轮播图
;(function () {
    var oUl = document.querySelector('.BGImage'),
        oLi = document.querySelectorAll(".BGImage>li"),
        left = document.querySelector(".left"),
        right = document.querySelector('.right'),
        width = parseInt(getStyle(oLi[0], 'width')),
        direction = 1,
        dstop = true,
        timer = null;
    addEvent(right, 'click', function () {
        autoMove();
    })
    addEvent(left, 'click', function () {
        direction = -1;
        autoMove();
    })
    function autoMove() {
        clearInterval(timer);
        if (dstop) {
            dstop = false;
            if (direction == 1) {
                moveStart(oUl, {'left':parseInt(getStyle(oUl, 'left')) - width}, function () {
                    if (parseInt(getStyle(oUl, 'left')) == -4608) {
                        oUl.style.left = "0px";
                    }
                    dstop = true;
                    timer = setInterval(autoMove, 2000);
                });
            } else {
                if (parseInt(getStyle(oUl, 'left')) == 0) {
                    oUl.style.left = "-4608px";
                }
                moveStart(oUl, {'left':parseInt(getStyle(oUl, 'left')) + width}, function () {
                    dstop = true;
                    timer = setInterval(autoMove, 2000);
                    direction = 1;
                })
            }
        }
    }
    timer = setInterval(autoMove, 2000);
})()


//手机
;(function () {
    var phone = document.querySelector('.phone'),
        phoneClient = document.querySelector('.phone-client');
    addEvent(phone, 'mouseenter', handle1);
    addEvent(phone, 'mouseleave', handle2);
    function handle1() {
        phoneClient.style.display = "block";
    }
    function handle2() {
        phoneClient.style.display = "none";
    }
})()

//登录框
;(function () {
    var login1 = document.querySelector('.lg1'),
        login2 = document.querySelector('.lg2'),
        ddLogin = document.querySelector('.dingding-login'),
        emailLogin = document.querySelector('.email-login'),
        sq = document.querySelector('.sq'),
        app = document.querySelector('#app'),
        key = true,
        app1 = document.querySelector('.app1'),
        app2 = document.querySelector('.app2');
    //鼠标移入钉钉帐号登录
    function handle1() {
        ddLogin.children[1].style.borderBottom = "3px solid #36a7f4";
        emailLogin.style.borderBottom = "1px solid #e7e8e8";
        login2.style.display = "block";
        login1.style.display = 'none';
        sq.style.display = 'none';
        app.style.display = 'none'; 
        addEvent(emailLogin, 'mouseenter', handle2);
        key = true;
    }
    addEvent(ddLogin, 'mouseenter', handle1);
    //鼠标移入邮箱账号登录
    function handle2() {
        emailLogin.style.borderBottom = "3px solid #36a7f4";
        ddLogin.children[1].style.borderBottom = "1px solid #e7e8e8";
        login2.style.display = 'none';
        login1.style.display = 'block';
        sq.style.display = 'block';
        sq.style.backgroundImage = "url(img/sq.png)";
    }
    addEvent(emailLogin, 'mouseenter', handle2);
    //点击右下角图标
    function handle3(){
        if(key){
            key = false;
            login1.style.display = 'none';
            app.style.display = 'block';
            sq.style.backgroundImage = "url(img/close.png)";
            removeEvent(emailLogin,'mouseenter',handle2);
        }else{
            sq.style.backgroundImage = "url(img/sq.png)";
            login1.style.display = 'block';
            app.style.display = 'none';
            addEvent(emailLogin, 'mouseenter', handle2);
            key = true;
        }
       
    }
    addEvent(sq, 'click', handle3);

})()


