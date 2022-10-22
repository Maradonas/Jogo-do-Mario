/**Seletor css */

const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const score = document.querySelector('.score');

let count = 0;


/**Adiciona jump na classe do mario */

const jump = () => {
    mario.classList.add('jump');

    /**Tempo para tirar e poder acionar o jump dnv na classe */
    setTimeout(() => {
        mario.classList.remove('jump');

    }, 500);

}

/**Verificar se perdeu ou nao o jogo */
const loop = setInterval(() => {
    count++;
    score.textContent = "SCORE:  "+count;
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && marioPosition<80) {
        morte = true;
        pipe.style.animation = 'none';

        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.src="game-over.png";
        mario.style.width = '75px';
        mario.style.marginLeft = '50px'
    
        
        clearInterval(loop);
        count = 0;
        if (morte==true){
            
         alert(`Game Over Seu score foi : ${count}` )
        }
       
    }
}, 10)

    

/**Evento de pular quando qualquer tecla for apertada */

document.addEventListener('keydown', jump);

