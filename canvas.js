var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var auxX = Math.random()*500 + Math.random()*50
var auxY = Math.random()*150 + Math.random()*300

var x;
var ElementoIgual = false;

console.log(Math.floor(Math.random() * 10))

var c = canvas.getContext('2d');

function GerarAleatorio(){
    posicao = Math.floor(Math.random() * 10)
    return posicao
}

function GerarCorHexadecimal() {
    return '#' + parseInt((Math.random() * 0xFFF))
        .toString(16)
        .padStart(3,'0');
}


for(var i = 1; i<11; i++){

    var posicao=0;
    while(posicao == 0){
        posicao2 = GerarAleatorio()
        posicao3 = GerarAleatorio()
        posicao4 = GerarAleatorio()
        posicao5 = GerarAleatorio()
        posicao6 = GerarAleatorio()
        posicao = GerarAleatorio()

    }
    
    console.log(posicao)

    color = GerarCorHexadecimal()

    console.log(posicao2*posicao)
    c.fillStyle = color
    // c.fillRect((canvas.width/posicao) - (posicao2*posicao), (canvas.width/posicao) - (posicao2*posicao), (canvas.height/posicao)- 5*posicao, canvas.height/posicao - 5*posicao)
    c.fillRect(posicao*posicao2*posicao4 + posicao5*10, posicao*posicao2*posicao3 + posicao6*10, 40, 40)
    
    c.strokeRect(posicao*posicao2*posicao4 + posicao5*10, posicao*posicao2*posicao3 + posicao6*10, 40, 40) ;
    c.stroke()

    c.beginPath();
    c.moveTo(5*posicao + i*posicao2, 50*posicao3 + i*posicao4);
    c.lineTo(30*posicao + i*posicao4, 10*posicao + i*posicao5);
    // c.strokeStyle(color)
    c.stroke();

}
for(i = 1; i<31; i++){
    c.beginPath();
    c.arc(auxX, auxY*Math.random()*5, posicao2*5, 0, Math.PI * 2, false);
    c.strokeStyle = GerarCorHexadecimal;
    c.stroke();
}

/**
 * HTML5 Canvas Batman Logo Experiment - @the_mudassir guest post for @Design_By_Day
 * Mathematics obtained from http://www.wolframalpha.com/input/?i=batman+logo and manipulated by @the_mudassir.
 *
 */

/* get canvas context */
var canvas = document.getElementById( 'arkhamCity' );
var c = canvas.getContext( '2d' );

/* put origin center of canvas and flips y-axis */
c.transform( 1 , 0 , 0 , -1 , canvas.width * 0.5 , canvas.height * 0.5 ); // more info at https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/transform
c.save( ); // stores canvas state - importantly it saves the direction of y-axis increasing

/* mark the origin for reference */
c.fillStyle = 'red';
c.fillRect( -2 , -2 , 4 , 4 );

/* marks a simple axis */
c.beginPath( );
c.moveTo( canvas.width * -0.5, 0 );
c.lineTo( canvas.width * 0.5, 0 );
c.moveTo( 0, canvas.width * -0.5 );
c.lineTo( 0, canvas.width * 0.5 );
c.strokeStyle = '#F5F5F5';
c.stroke( );

/* draw author watermark text on canvas */
c.scale( 1, -1 ); // makes y-axis increasing downwards so text can be written upright
c.font = '15px Arial';
var authorName = '@Design_By_Day';
var authorNameMeasured = c.measureText( authorName );
c.fillStyle = '#10C4C4'; // design by day green
c.textBaseline = 'bottom'; // allows to be manpulated from bottom-left
c.fillText( authorName, ( authorNameMeasured.width * -0.5 ), ( canvas.height * 0.5 - 25 ) ); // positions author attribute
c.restore( ); // makes y-axis increasing upwards again

/* define the pencil properties */
var pencil = {
  'thickness': 1, // thickness of line
  'color': {
    'black': '#000000',
    'blue': 'blue',
    'pink': 'pink',
    'orange': 'orange',
    'green': '#58f721',
    'red': '#fb4b4b',
    'purple': '#c07eff'
  }
};

/* customise output */
a = 40; // bat-scale (batman logo scale) or known as arbitary constant in mathematics

var graph = {
  'step': 0.5, // decrease step value to get greater points plotted but will cause browser lag due to increase in number of calculations 0.1 gives best result
  plot: function( curveObject ) {
      /* equation is drawn via an interation method - same concept as plotting known coordinates on a graph */
      c.beginPath( );
      c.lineWidth = pencil.thickness;
      c.strokeStyle = curveObject.pencilColor; // allows stroke to have a custom color
      for( var i = curveObject.lowerLimit ; i <= curveObject.upperLimit ; i += this.step  ) {

        switch( curveObject.inequalityFor ) {

          case 'x_axis':
            c.lineTo( i , curveObject.func( i ) ); // i is the x-coordinate as y = f(x)
            break;

          case 'y_axis':
            c.lineTo( curveObject.func( i ) , i ); // i is the y-coordinate as x = f(y)
            break;

          default:
            console.log( 'Curve object is missing inequalityFor property or has a value other than x_axis and y_axis' );

        };
          c.stroke( );
    };
  },
  clear: function( ) {
    /* clears the canvas if needed */
      c.clearRect( canvas.width * -0.5 , canvas.height * -0.5 , canvas.width , canvas.height );
  }
};

/* I was thinking about creating new objects to acheive the same result more efficiently and minifying code */

var curve_1 = {
  'inequalityFor': 'y_axis',
  func: function( y ) {
    return - 7 * ( Math.sqrt( Math.pow( a , 2 ) - ( Math.pow( y , 2 ) / 9 ) ) );
  },
  'lowerLimit': -1 * ( ( 3 * Math.sqrt( 33 ) ) / 7 ) * a,
  'upperLimit': 0,
  'pencilColor': pencil.color.black
};

var curve_2 = {
  'inequalityFor': 'y_axis',
  func: function( y ) {
    return 7 * ( Math.sqrt( Math.pow( a , 2 ) - ( Math.pow( y , 2 ) / 9 ) ) );
  },
  'lowerLimit': -1 * ( ( 3 * Math.sqrt( 33 ) ) / 7 ) * a,
  'upperLimit': 0,
  'pencilColor': pencil.color.black
};

var curve_3 = {
  'inequalityFor': 'x_axis',
  func: function( x ) {
    return a * ( -( ( ( 3 * Math.sqrt( 33 ) ) - 7 ) * Math.pow( x , 2 ) ) / ( 112 * Math.pow( a , 2 ) ) + ( Math.abs( x / a ) / 2) + ( Math.sqrt( 1 - ( Math.pow( ( Math.abs( Math.abs( x / a ) - 2 ) - 1 ) , 2 ) ) ) ) - 3 );
  },
  'lowerLimit': -4 * a,
  'upperLimit': 4 * a,
  'pencilColor': pencil.color.blackk
};

var curve_4 = {
  'inequalityFor': 'y_axis',
  func: function( y ) {
    return 7 * ( Math.sqrt( Math.pow( a , 2 ) - ( Math.pow( y , 2 ) / 9 ) ) );
  },
  'lowerLimit': 0,
  'upperLimit': ( ( 6 * Math.sqrt( 10 ) ) / 7 ) * a,
  'pencilColor': pencil.color.black
};

var curve_5 = {
  'inequalityFor': 'y_axis',
  func: function( y ) {
    return - 7 * ( Math.sqrt( Math.pow( a , 2 ) - ( Math.pow( y , 2 ) / 9 ) ) );
  },
  'lowerLimit': 0,
  'upperLimit': ( ( 6 * Math.sqrt( 10 ) ) / 7 ) * a,
  'pencilColor': pencil.color.black
};

var curve_6 = {
  'inequalityFor': 'x_axis',
  func: function( x ) {
    return a * ( 9 - 8 * ( Math.abs( x / a ) ) );
  },
  'lowerLimit': 0.75 * a,
  'upperLimit': a,
  'pencilColor': pencil.color.black
};

var curve_7 = {
  'inequalityFor': 'x_axis',
  func: function( x ) {
    return a * ( 9 - 8 * ( Math.abs( x / a ) ) );
  },
  'lowerLimit': -a,
  'upperLimit': -0.75 * a,
  'pencilColor': pencil.color.black
};

var curve_8 = {
  'inequalityFor': 'x_axis',
  func: function( x ) {
    return 3 * a * ( Math.abs( x / a ) + 0.25 );
  },
  'lowerLimit': 0.5 * a,
  'upperLimit': 0.75 * a,
  'pencilColor': pencil.color.black};

var curve_9 = {
  'inequalityFor': 'x_axis',
  func: function( x ) {
    return 3 * a * ( Math.abs( x / a ) + 0.25 );
  },
  'lowerLimit': -0.75 * a,
  'upperLimit': -0.5 * a,
  'pencilColor': pencil.color.black};

var curve_10 = {
  'inequalityFor': 'x_axis',
  func: function( x ) {
    return 2.25 * a;
  },
  'lowerLimit': -0.5 * a,
  'upperLimit': 0.5 * a,
  'pencilColor': pencil.color.black
};

var curve_11 = {
  'inequalityFor': 'x_axis',
  func: function( x ) {
    return a * ( ( Math.abs( x / a ) / -2 ) - ( ( 3 * Math.sqrt( 10 ) / 7 ) * ( Math.sqrt( 4 - Math.pow( ( Math.abs( x / a ) - 1 ) , 2 ) ) ) )  + ( 6 * Math.sqrt( 10 ) / 7 ) + 1.5 );
  },
  'lowerLimit': a,
  'upperLimit': 3 * a,
  'pencilColor': pencil.color.black
};

var curve_12 = {
  'inequalityFor': 'x_axis',
  func: function( x ) {
    return a * ( ( Math.abs( x / a ) / -2 ) - ( ( 3 * Math.sqrt( 10 ) / 7 ) * ( Math.sqrt( 4 - Math.pow( ( Math.abs( x / a ) - 1 ) , 2 ) ) ) )  + ( 6 * Math.sqrt( 10 ) / 7 ) + 1.5 );
  },
  'lowerLimit': -3 * a,
  'upperLimit': -a,
  'pencilColor': pencil.color.black
};

function drawBatLogo( curveArray ) {
  /* call draw method of graph object to outpout curves on canvas */
  for( var i = 0; i < curveArray.length; i++ ) {
    graph.plot( curveArray[i] );
  };
};

drawBatLogo( [curve_1, curve_2, curve_3, curve_4, curve_5, curve_6, curve_7, curve_8, curve_9, curve_10, curve_11, curve_12] );

function drawCoracao() {
    
    c.beginPath();
    c.moveTo(10 + 75,10 + 40);
    c.bezierCurveTo(10 + 75,10 + 37,10 + 70,10 + 25,10 + 50,10 + 25);
    c.bezierCurveTo(10 + 20,10 + 25,10 + 20,10 + 62.5,10 + 20,10 + 62.5);
    c.bezierCurveTo(10 + 20,10 + 80,10 + 40,10 + 102,10 + 75,10 + 120);
    c.bezierCurveTo(10 + 110,10 + 102,10 + 130,10 + 80,10 + 130,10 + 62.5);
    c.bezierCurveTo(10 + 130,10 + 62.5,10 + 130,10 + 25,10 + 100,10 + 25);
    c.bezierCurveTo(10 + 85,10 + 25,10 + 75,10 + 37,10 + 75,10 + 40);
    c.fill();
}

// function draw() {
//     c.fillRect(0,0,150,150);
//     c.translate(75,75);
//     // Create a circular clipping path
//     c.beginPath();
//     c.arc(0,0,60,0,Math.PI*2,true);
//     c.clip();
//     // draw background
//     var lingrad = c.createLinearGradient(0,-75,0,75);
//     lingrad.addColorStop(0, '#232256');
//     lingrad.addColorStop(1, '#143778');
//     c.fillStyle = lingrad;
//     c.fillRect(-75,-75,150,150);
//     // draw stars
//     for (var j=1;j<50;j++){
//       c.save();
//       c.fillStyle = '#fff';
//       c.translate(75-Math.floor(Math.random()*150),
//                     75-Math.floor(Math.random()*150));
//       drawStar(c,Math.floor(Math.random()*4)+2);
//       c.restore();
//     }
//   }
//   function drawStar(c,r){
//     c.save();
//     c.beginPath()
//     c.moveTo(r,0);
//     for (var i=0;i<9;i++){
//       c.rotate(Math.PI/5);
//       if(i%2 == 0) {
//         c.lineTo((r/0.525731)*0.200811,0);
//       } else {
//         c.lineTo(r,0);
//       }
//     }
//     c.closePath();
//     c.fill();
//     c.restore();
//   }

// draw()
drawCoracao()