const img = document.getElementById('img')
const buttons = document.getElementById('buttons')
let colorIndex = 0;
let intervalId = null;

function light(evento){
    stopAutomatic()
   turnOn[evento.target.id]()

}

const turnOn = {
    'red': () => img.src = './img/vermelho.png',
    'yellow': () => img.src = './img/amarelo.png',
    'green': () => img.src = './img/verde.png',
    'automatic': () => intervalId = setInterval(changecolor, 1000)
}

function nextIndex(){
    if (colorIndex < 2){
        colorIndex++
    }else{
        colorIndex = 0
    }
}

const changecolor = () =>{
    const colors = ['red','yellow','green']
    const color = colors[colorIndex]
    turnOn[color]()
    nextIndex()
}

const stopAutomatic = () =>{
    clearInterval(intervalId)
}

buttons.addEventListener('click', light)