var screenXvalue = document.querySelector('.screenX');
var screenyvalue = document.querySelector('.screeny');
var clientXvalue = document.querySelector('.clientX');
var clientYvalue = document.querySelector('.clientY');

console.dir(screenX);

document.addEventListener('mousemove', cordinate);

function cordinate() {
    var e = window.event;
    clientXvalue.innerHTML =  (1314-e.clientX);
    clientYvalue.innerHTML = (636-  e.clientY);
    screenXvalue.innerHTML = e.clientX;
    screenyvalue.innerHTML = e.clientY;
}