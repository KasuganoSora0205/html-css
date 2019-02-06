function moveStart(elem, target, callback) {
    clearInterval(elem.timer);
    var speed,
        key,
        iCur;
    elem.timer = setInterval(function () {
        key = true;
        for(var prop in target){
            if(prop == 'opacity'){
                iCur = parseFloat(getStyle(elem, 'opacity'))*100;
            }else{
                iCur = parseInt(getStyle(elem, prop));
            }
            speed = (target[prop] - iCur) / 7;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if(prop == 'opacity'){
                elem.style.opacity = (iCur + speed) / 100 ;
            }else{
                elem.style[prop] = iCur + speed + 'px';
            }
            if (target[prop] != iCur) {
                key = false;
            }
            if (key) {
                clearInterval(elem.timer);
                callback&&callback();
            }
        }
    }, 25)
}

//兼容
function addEvent(elem, type, handle) {
    if (elem.addEventListener) {
        elem.addEventListener(type, handle, false);
    } else if (elem.attachEvent) {
        elem.attachEvent('on' + type, function () {
            handle.call(elem);
        });
    } else {
        elem[on + 'click'] = handle;
    }
}

function getStyle(elem, prop) {
    if (window.getComputedStyle) {
        return getComputedStyle(elem, null)[prop];
    } else {
        return elem.currentStyle[prop];
    }
}

function removeEvent(elem,type,handle){
    if(window.removeEventListener){
    elem.removeEventListener(type,handle,false);
    }else if(window.detachEvent){
        elem.detachEvent('on' + type, function(){
            handle.call(elem);
        })
    }else{
        elem[on + 'click'] = null;
    }
}
