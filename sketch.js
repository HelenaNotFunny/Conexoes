/*Coisas para ainda serem feitas:
  Transformar os botões em uma função só
  Transformar a altura e largura do botão de volta em um variável
  Usar apenas a função mouse clicked
*/

// Criação de variáveis relacionadas a posição dos botões
var tela = 1

var largura_botao = 180
var altura_botao = 70

var largura_tecla = 180
var altura_tecla = 100

var yMenu = 475
var xMenu1 = 378
var xMenu2 = 593 //35 entre os retângulos
var xMenu3 = 808

var larguraLetra = 40

var vidas = 5

var Tela_Largura = window.innerWidth, Tela_Altura = window.innerHeight; 

//Carregação de fotos e logos
function preload() {
  logo = loadImage('assets/puzzle.png');
  fontVT323 = loadFont('assets/VT323-Regular.ttf');
  fontPixelify = loadFont('assets/PixelifySans.ttf');
  conexao_rosa = loadImage('assets/crosa.png');
  instruçoes = loadImage('assets/instrucoes.png')
  creditos = loadImage('assets/creditos.png')
  eu = loadImage('assets/me.png')
  wyna_liu =loadImage('assets/wynaliu.png')
  full_heart = loadImage('assets/full_heart2.png')
  empty_heart = loadImage('assets/empty_heart2.png')
}

// As cores utilizadas
var rosa = '#EA2E8F'
var rosa_escuro = '#990752'
var rosa_claro = '#F1E4F0'

<<<<<<< Updated upstream
/*Criação do espaço utilizado - 1366 e 643 são os tamanhos da minha janela*/
=======
// Jogo Fácil
Facil = ['Catapimbas', 'Carambola', 'Cruzes', 'Credo', "Francês", "Cacetinho", "Carioquinha", 'Sal', 'Manga', 'Saia', 'Meia', 'Bota', 'Pão de Açúcar', 'Mermão', 'Samba', 'Dom Pedro II']
Medio = ['Do', 'Re', 'Mi', 'Fa', ' ']
Dificil = []

//Criação do espaço utilizado - 1366, 643
>>>>>>> Stashed changes
function setup() {
  createCanvas(Tela_Largura, Tela_Altura); 
  Facil_Misturado = shuffle(Facil)
}

// Botão de como funciona
function Botao1(numero, texto){
  if(mouseX>xMenu1 && mouseX<xMenu1+largura_botao && mouseY>yMenu && mouseY<yMenu+altura_botao){
    stroke(0)
    fill(rosa_escuro)
    rect(xMenu1, yMenu, largura_botao, altura_botao, 25);
  }
  else{
    stroke(0)
    fill(rosa)
    rect(xMenu1, yMenu, largura_botao, altura_botao, 25);
  }
  fill(0)
  noStroke()
  text(texto, xMenu1+90, yMenu+45)
}

// Botão de jogar
function Botao2(numero, texto){
  if(mouseX>xMenu2 && mouseX<xMenu2+largura_botao && mouseY>yMenu && mouseY<yMenu+altura_botao){
    stroke(0)
    fill(rosa_escuro)
    rect(xMenu2, yMenu, largura_botao, altura_botao, 25);
  }
  else{
    stroke(0)
    fill(rosa)
    rect(xMenu2, yMenu, largura_botao, altura_botao, 25);
  }
  noStroke()
  fill(0)
  text(texto, xMenu2+90, yMenu+45)
}

// Botão de créditos
function Botao3(numero, texto){
  if(mouseX>xMenu3 && mouseX<xMenu3+largura_botao && mouseY>yMenu && mouseY<yMenu+altura_botao){
    stroke(0)
    fill(rosa_escuro)
    rect(xMenu3, yMenu, largura_botao, altura_botao, 25);
  }
  else{
    stroke(0)
    fill(rosa)
    rect(xMenu3, yMenu, largura_botao, altura_botao, 25);
  }

  fill(0)
  noStroke()
  text(texto, xMenu3+90, yMenu+45)
}

// Tela de menu
function TelaMenu(){
  background(rosa_claro); 
    textAlign(CENTER)
    textSize(40)
    image(conexao_rosa, 353.5, 70, 658.66, 168);

    strokeWeight(4);
    Botao1(2, "Instruções");
    Botao2(3, "Jogar");
    Botao3(4, "Créditos");
   
}

// Padrão das telas de instrução e créditos
function Fundo(){
  noFill()
  background(rosa);
  textSize(35)
  BotaoVoltar(1)
  fill(rosa_claro)
  textAlign(LEFT)
  rect(250, 75, 863, 500, 25)
}

// Tela de instruções
function TelaInstruçoes(){
  Fundo()
  image(instruçoes, 451.1, 80, 460.8, 97.2);
  fill(0)
  noStroke()
  text('* Ache grupos de 4 itens que tenham uma conexão em comum' +'\n' + 
  '* Selecione os 4 itens e aperte em enviar' + '\n' + 
  '* Ache os grupos sem fazer 5 erros' + '\n'+
  '* Cada enigma tem apenas uma solução correta!', 300, 225, 750, 300)
}

// Botões do jogo
function TeclaJogo(x, y, texto){
  stroke(0)
  fill(rosa_claro)
  rect(x, y, largura_tecla, altura_tecla, 25);
  fill(0)
  noStroke()
  text(texto, x+90, y+58)
}

// Tela do jogo
function TelaJogo(){
  noFill()
  background(rosa);
  fill(rosa_claro)
  BotaoVoltar()
  textSize(30)
  contador_linha = 0
  yTecla = 55
  // Teclas
  for(i=0; i<16; i++){
    TeclaJogo(300.5 + 195*contador_linha, yTecla, Facil_Misturado[i])
    contador_linha++
    if(contador_linha > 3){
      contador_linha = 0
      yTecla = yTecla + 115
    }
  }
  // Vidas
  for(i=0; i<vidas; i++){
    image(full_heart, 583 + 40*i, 515);
  }
}

// Tela de créditos
function TelaCreditos(){
  Fundo()
  image(creditos, 476.1, 80, 410.8, 97.2);
  image(eu, 300, 200, 65, 65)
  image(wyna_liu, 300, 290, 65, 65)
  fill(0)
  noStroke()
  text('Maria Helena Leocádio - Desenvolvedora', 400, 240)
  text('Wyna Liu - Criadora do jogo original', 400, 330)

}

//Criação do botão de voltar
function BotaoVoltar(){
  textAlign(CENTER)
  noFill()
  textSize(35)
  stroke(0)
  fill(rosa_claro)
  rect(30, 30, 45, 45, 10);
  fill(rosa)
  if(mouseX>30 && mouseX<75 && mouseY>30 && mouseY<75){
    fill(rosa_escuro)
  }
  stroke(0)
  text('<=', 52, 62)
}

//Função que desenha as funções anteriores
function draw() {
  textFont(fontVT323)
  textAlign(CENTER)
  strokeWeight(4);
  //Tela de menu
  if(tela == 1){
    TelaMenu();
  }
  //Tela das instruções
  if(tela == 2){
   TelaInstruçoes()
  } 
  //Tela da escolha de dificuldades
  if(tela == 3){
    TelaJogo()
  }
  //Tela dos créditos
  if(tela == 4){
    TelaCreditos()
  }
}

function mouseClicked(){
  // Botão de voltar
  if(mouseX>30 && mouseX<75 && mouseY>30 && mouseY<75){
    if(tela == 2 || tela == 3 || tela == 4){
      tela = 1
    } else if(tela == 5){
      tela = 3
    }
  }
  // Botões de telas
  if(mouseY>yMenu && mouseY<yMenu+altura_botao){
    if(tela == 1){
      if(mouseX>xMenu1 && mouseX<xMenu1+largura_botao){
        tela = 2
      }
      if(mouseX>xMenu2 && mouseX<xMenu2+largura_botao){
        tela = 3
      }
      if(mouseX>xMenu3 && mouseX<xMenu3+largura_botao){
        tela = 4
      }
    }
  }
}

