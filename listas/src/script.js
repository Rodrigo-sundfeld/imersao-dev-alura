var listaFilmes = ["Free Guy", "Esquadrão Suicida", "Jungle Cruise"];

listaFilmes.push("O protetor 2");

listaFilmes.push("Os vingadores: Guerra Infinita");
listaFilmes.push("Homem de ferro 3");

for (var indice = 0; indice < listaFilmes.length; indice++) {
  document.write("<p>" + indice + "</p>");
  document.write("<p>" + listaFilmes[indice] + "</p>");
}
