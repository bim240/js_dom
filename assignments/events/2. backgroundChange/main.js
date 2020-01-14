var btn = document.querySelector('.btn');
btn.addEventListener('click', colorchange);
function colorchange(){
    var color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    document.body.style.backgroundColor = color;

}