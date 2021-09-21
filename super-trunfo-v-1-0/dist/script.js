var carta1 = {
  nome: "Wolverine",
  atributos: {
    ataque: 9,
    defesa: 9,
    magia: 5
  }
};

var carta2 = {
  nome: "Magneto",
  atributos: {
    ataque: 10,
    defesa: 10,
    magia: 10
  }
};

var carta3 = {
  nome: "Homer Simpson",
  atributos: {
    ataque: 11,
    defesa: 11,
    magia: 11
  }
};

var carta4 = {
  nome: "Hulk",
  atributos: {
    ataque: 20,
    defesa: 20,
    magia: 0
  }
};

var cartas = [carta1, carta2, carta3, carta4];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 3);   cartaMaquina = cartas[numeroCartaMaquina];
   
  var numeroCartaJogador = parseInt(Math.random() * 3);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 3);
  }
    
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);
  
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  
  exibirOpcoes();
}

function exibirOpcoes () {
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = "";
  
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='"
      + atributo + "'>" + atributo;
  }
  opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado () {
  var radioAtributos = document.getElementsByName("atributo");
  
  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar () {
  var atributoSelecionado = obtemAtributoSelecionado();
  var elementoResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
  
  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML = "VOCÊ VENCEU!!!"
  } else if (valorCartaMaquina > valorCartaJogador) {
    elementoResultado.innerHTML = "VOCÊ PERDEU!!!"
  } else {
    elementoResultado.innerHTML = "EMPATOU!!!"
  }
  
  console.log(cartaMaquina);
}