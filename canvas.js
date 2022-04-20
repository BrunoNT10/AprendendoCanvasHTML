var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

console.log(Math.floor(Math.random() * 10))

var c = canvas.getContext('2d');

function GerarAleatorio(){
    return Math.floor(Math.random() * 10)
}

function IdentificarRepeticao(posicao){
    
    for(var elementos in array){
        console.log('elementos', elementos)
        if (posicao == array[elementos]){
            posicao = GerarAleatorio()
        }
    }
    array.push(posicao)
}
var array = []
for(var i = 1; i<11; i++){

    var posicao = GerarAleatorio()

    repeticao = IdentificarRepeticao(posicao)

    console.log(array)
    console.log(posicao)
    c.fillStyle = 'rgb(255, 0, 0)';
    c.fillRect(canvas.width/posicao, canvas.width/posicao, canvas.height/posicao, canvas.height/posicao)
    c.strokeRect(canvas.width/posicao, canvas.width/posicao, canvas.height/posicao, canvas.height/posicao) ;
    c.stroke()

    c.beginPath();
    c.moveTo(50 + i*10, 500 + i*10);
    c.lineTo(300 + i*10, 100 + i*10);
    c.stroke();

}
for(i = 1; i<31; i++){
    c.beginPath();
    c.arc(400 + i*0.5, 400 + i*0.5, 60 + i*0.5, 0 + i*0.5, Math.PI * 2, false)
    c.strokeStyle = 'green';
    c.stroke()
}



