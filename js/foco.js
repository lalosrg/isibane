let btn_switch = document.querySelector('.btn_switch');
let foco = document.querySelector('#foco');
let audio = document.querySelector('#audio');
btn_switch.onclick = function(){
    foco.classList.toggle('on');
    audio.play();
}

