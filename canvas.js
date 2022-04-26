var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var x;
var ElementoIgual = false;

console.log(Math.floor(Math.random() * 10))

var c = canvas.getContext('2d');

function GerarAleatorio(){
    posicao = Math.floor(Math.random() * 10)
    return posicao
}

for(var i = 1; i<11; i++){

    var posicao=0;
    while(posicao == 0){
        posicao = GerarAleatorio()
    }
        if(i==1){
        c.fillStyle = 'rgb(255, 0, 0)';
    }
    else if(i==2){
        c.fillStyle = 'rgb(0, 255, 0)';

    }
    else if(i==3){
        c.fillStyle = 'rgb(0, 0, 255)';

    }
    else if(i==4){
        c.fillStyle = 'rgb(0, 255, 255)';

    }
    else if(i==5){
        c.fillStyle = 'rgb(255, 255, 0)';

    }
    else if(i==6){
        c.fillStyle = 'rgb(255, 255, 255)';

    }
    else if(i==7){
        c.fillStyle = 'rgb(0, 0, 0)';

    }
    else if(i==8){
        c.fillStyle = 'rgb(0, 100, 0)';

    }
    else if(i==9){
        c.fillStyle = 'rgb(100, 100, 0)';

    }
    else if(i==10){
        c.fillStyle = 'rgb(0, 100, 100)';

    }
    
    c.fillRect(canvas.width /posicao, canvas.width/posicao, canvas.height/posicao, canvas.height/posicao)
    c.strokeRect(canvas.width/posicao, canvas.width/posicao, canvas.height/posicao, canvas.height/posicao) ;
    c.stroke()

    c.beginPath();
    c.moveTo(5*posicao + i*posicao, 50*posicao + i*posicao);
    c.lineTo(30*posicao + i*posicao, 10*posicao + i*posicao);
    c.stroke();

}
for(i = 1; i<31; i++){
    c.beginPath();
    c.arc(400 + i*0.5, 400 + i*0.5, 60 + i*0.5, 0 + i*0.5, Math.PI * 2, false)
    c.strokeStyle = 'green';
    c.stroke()
}



