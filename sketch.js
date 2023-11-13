// Criação de variáveis relacionadas a posição dos botões
var tela = 1
var largura_botao = 180
var altura_botao = 70
var xMenu1 = 378
var xMenu2 = 593 //35 entre os retângulos
var xMenu3 = 808
var yMenu = 475
var larguraLetra = 40

//Carregação de fotos e logos
function preload() {
  logo = loadImage('assets/puzzle.png');
  fontVT323 = loadFont('assets/VT323-Regular.ttf');
  fontPixelify = loadFont('assets/PixelifySans.ttf');
  // Letras rosa
  conexao_rosa = loadImage('assets/crosa.png');
  conexao_roxo = loadImage('assets/croxo.png');
  conexao_azul = loadImage('assets/cazul.png');
  conexao_verde = loadImage('assets/cverde.png');
  instruçoes = loadImage('assets/instrucoes.png')
  creditos = loadImage('assets/creditos.png')
}

// As cores utilizadas
var rosa = '#EA2E8F'
var rosa_escuro = '#990752'
var rosa_claro = '#F1E4F0'

/*Criação do espaço utilizado - 1366 e 643 são os tamanhos da minha janela 
obtido por tentativa e erro, pois quando eu usava windowHeight e width não funcionava*/
function setup() {
  createCanvas(1363, 633); 
}

// Botão de como funciona
function BotaoFuncionamento(){
  if(mouseX>xMenu1 && mouseX<xMenu1+largura_botao && mouseY>yMenu && mouseY<yMenu+altura_botao){
    stroke(0)
    fill(rosa_escuro)
    rect(xMenu1, yMenu, largura_botao, altura_botao, 25);
    if(mouseIsPressed){
      tela = 2
    }
  }
  else{
    stroke(0)
    fill(rosa)
    rect(xMenu1, yMenu, largura_botao, altura_botao, 25);
  }
  fill(0)
  noStroke()
  text('Instruções', xMenu1+90, yMenu+45)
}

// Botão de jogar
function BotaoJogar(){
  if(mouseX>xMenu2 && mouseX<xMenu2+largura_botao && mouseY>yMenu && mouseY<yMenu+altura_botao){
    stroke(0)
    fill(rosa_escuro)
    rect(xMenu2, yMenu, largura_botao, altura_botao, 25);
    if(mouseIsPressed){
      tela = 3
    }
  }
  else{
    stroke(0)
    fill(rosa)
    rect(xMenu2, yMenu, largura_botao, altura_botao, 25);
  }
  noStroke()
  fill(0)
  text('Jogar', xMenu2+90, yMenu+45)
}

// Botão de créditos
function BotaoCreditos(){
  if(mouseX>xMenu3 && mouseX<xMenu3+largura_botao && mouseY>yMenu && mouseY<yMenu+altura_botao){
    stroke(0)
    fill(rosa_escuro)
    rect(xMenu3, yMenu, largura_botao, altura_botao, 25);
    if(mouseIsPressed){
      tela = 4
    }
  }
  else{
    stroke(0)
    fill(rosa)
    rect(xMenu3, yMenu, largura_botao, altura_botao, 25);
  }

  fill(0)
  noStroke()
  text('Créditos', xMenu3+90, yMenu+45)
}

// Função da tela de menu
function TelaMenu(){
  background(rosa_claro); 
    textAlign(CENTER)
    textSize(40)
    image(conexao_rosa, 353.5, 70, 658.66, 168);

    strokeWeight(4);
    BotaoFuncionamento();
    BotaoJogar();
    BotaoCreditos();
   
}

function TelaInstruçoes(){
  background(rosa);
  textSize(35)
  BotaoVoltar()
  fill(rosa_claro)
  rect(250, 75, 863, 483, 25)
  image(instruçoes, 451.1, 80, 460.8, 97.2);
}

// Função da tela de créditos
function TelaCreditos(){
  background(rosa);
  textSize(35)
  BotaoVoltar()
  fill(rosa_claro)
  rect(250, 75, 863, 483, 25)
  image(creditos, 476.1, 80, 410.8, 97.2);


}


//Criação do botão de voltar
function BotaoVoltar(){
  textSize(35)
  stroke(0)
  rect(30, 30, 45, 45, 10);
  fill(rosa)
  if(mouseX>30 && mouseX<75 && mouseY>30 && mouseY<75){
    fill(rosa_escuro)
    if(mouseIsPressed){
      tela = 1
    }
  }
  stroke(0)
  text('<=', 52, 62)
}

//Função que desenha as funções anteriores
function draw() {
  textFont(fontVT323)
  textAlign(CENTER)
  //Tela de menu
  if(tela == 1){
    TelaMenu();
  }
  //Tela das instruções
  if(tela == 2){
   TelaInstruçoes()
  } 
  //Tela do JOGO
  if(tela == 3){
    background('#9DF03F');
    textSize(35)
    BotaoVoltar()

  }
  //Tela dos créditos
  if(tela == 4){
    TelaCreditos()
  }
}


