// Criação de variáveis relacionadas a posição dos botões
var tela = 1
var largura = 200
var altura = 75
var xMenu1 = 350
var xMenu2 = 583 //33 entre os retângulos
var xMenu3 = 816
var yMenu = 475

//Carregação da foto da logo
let logo;
function preload() {
  logo = loadImage('assets/logo1.png');
}

/*Criação do espaço utilizado - 1366 e 643 são os tamanhos da minha janela 
obtido por tentativa e erro, pois quando eu usava windowHeight e width não funcionava*/
function setup() {
  createCanvas(1366, 643);
}

//Criação de tudo que vai na tela
function draw() {
  textStyle(NORMAL)
  //Tela de menu
  if(tela == 1){
    background('#7EADE2');
    textAlign(CENTER)
    textSize(35)
    image(logo, 483, 80);
    
    //Retângulo de como funciona
    if(mouseX>xMenu1 && mouseX<xMenu1+largura && mouseY>yMenu && mouseY<yMenu+altura){
      noStroke()
      fill('#3F92F0')
      rect(xMenu1, yMenu, largura, altura, 40);

    }
    else{
      stroke(0)
      fill('#A4C8F1')
      rect(xMenu1, yMenu, largura, altura, 40);
    }
    fill(0)
    noStroke()
    text('Instruções', xMenu1+100, yMenu+50)

    //Retângulo de jogar
    if(mouseX>xMenu2 && mouseX<xMenu2+largura && mouseY>yMenu && mouseY<yMenu+altura){
      noStroke()
      fill('#3F92F0')
      rect(xMenu2, yMenu, largura, altura, 40);
      if(mouseIsPressed){
        tela = 3
      }
    }
    else{
      stroke(0)
      fill('#A4C8F1')
      rect(xMenu2, yMenu, largura, altura, 40);
    }
    
    fill(0)
    noStroke()
    text('Jogar', xMenu2+100, yMenu+50)

    //Retângulo de créditos
    if(mouseX>xMenu3 && mouseX<xMenu3+largura && mouseY>yMenu && mouseY<yMenu+altura){
      noStroke()
      fill('#3F92F0')
      rect(xMenu3, yMenu, largura, altura, 40);
      if(mouseIsPressed){
        tela = 4
      }
    }
    else{
      stroke(0)
      fill('#A4C8F1')
      rect(xMenu3, yMenu, largura, altura, 40);
    }

    fill(0)
    noStroke()
    text('Créditos', xMenu3+100, yMenu+50)
    
  
  }
  //Tela das instruções
  if(tela == 2){
    background('#3FE2F0');
    textAlign(CENTER)
    textSize(35)

  }
  //Tela do JOGO
  if(tela == 3){
    background('#9DF03F');
    textAlign(CENTER)
    textSize(45)
    text('Vai demorar um pouco :(', 665, 300)

  }
  //Tela dos créditos
  if(tela == 4){
    background('#F03F9C');
    textAlign(CENTER)
    textSize(35)

  }
}

function mouseClicked() {
  if(mouseX>xMenu1 && mouseX<xMenu1+largura && mouseY>yMenu && mouseY<yMenu+altura){
    tela = 2
  }
}