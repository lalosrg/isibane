let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let mountains_front = document.getElementById('mountains_front');
let city = document.getElementById('city');




window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    city.style.marginTop = value * 0.3 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
})

window.addEventListener('scroll', function (){
    var header = document.querySelector('header');
    header.classList.toggle('abajo',this.window.scrollY>0);
})




