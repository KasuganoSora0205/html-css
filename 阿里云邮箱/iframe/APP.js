var app1 = document.querySelector('.app1');
var app2 = document.querySelector('.app2');
addEvent(app1,'mouseenter',handle);
function handle(){
        moveStart(app1, {'opacity':0}, function(){
            app1.style.display = 'none';
            app2.style.display = 'inline-block';
            moveStart(app2,{'opacity':100},null);
        })
}
addEvent(app2,'mouseout',handle2);
function handle2(){
    moveStart(app2,{'opacity':0},function(){
        app2.style.display = 'none';
        app1.style.display = 'inline-block';
        moveStart(app1,{'opacity':100},null);
    })
}
