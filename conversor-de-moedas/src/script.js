function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolar = parseFloat(valor);
  console.log("Valores em dólares => U$" + valorEmDolar);

  var valorConvertidoEmReal = valorEmDolar * 5;
  console.log("Valores em reais => R$" + valorConvertidoEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");

  var valorConvertidoEmReal =
    "O valor convertido em reais é R$" + valorConvertidoEmReal;
  elementoValorConvertido.innerHTML = valorConvertidoEmReal;
}
