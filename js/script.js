// Sons do Jogo
const audio = new Audio('./sound/tema_mario.mp3');
audio.addEventListener('canplaythrough', () => {
    audio.play();
})

const audioBatida = new Audio('./sound/batida.mp3');
audioBatida.addEventListener('canplaythrough', () => {
    audioBatida.pause();
})

//Funções do Jogo

const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const reload = document.querySelector('.reload');
const buttonReload = document.getElementById('loadPage');

const jump = () => {

     
    console.log(mario); 
    mario.classList.add('jump');   
   

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const reloadPage = () => {
    window.location.reload();
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');



    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`; 

        mario.style.animation = 'none';
        mario.style.button = `${marioPosition}px`; 

        mario.src = './images/game-over.png';
        mario.style.width = '75px'; 
        mario.style.marginLeft = '50px';

        audio.pause();

        audioBatida.play();

        reload.style.display = 'block';

        buttonReload.addEventListener('click', reloadPage);

        clearInterval(loop); 
    }else{
        reload.style.display = 'none';
    } 

},10);


document.addEventListener('keydown', jump);
