// let cor = new Array();

let mochila=[],mochila1 = [],mochila2 = [], pos;


mochila1.push("Faca");
mochila1.push("Corda");
mochila1.push("Pederneira");
mochila1.push("Chave");
mochila1.push("Lanterna");
mochila1.push("Pedra");
mochila1.push("Mouse");

mochila2.push("Arame");
mochila2.push("Luvas");
mochila2.push("Joelheira");
mochila2.push("Meias");
mochila2.push("Moeda");
mochila2.push("Canivete");

mochila1.pop();

mochila = mochila1.concat(mochila2);

document.write(mochila[0] +"<br>");
document.write(mochila[1] + "<br>");
document.write(mochila[2] + "<br>");
document.write(mochila[3] + "<br>");
document.write(mochila[4] + "<br>");
document.write(mochila[5] + "<br>");
document.write(mochila[6] + "<br>");
document.write(mochila[7] + "<br>");
document.write(mochila[8] + "<br>");
document.write(mochila[9] + "<br>");
document.write(mochila[10] + "<br>");
document.write(mochila[11] + "<br>");

document.write("tamanho da mochila 1: " + mochila1.length +"<br>");
document.write(" tamanho da mochila 2: " + mochila2.length +"<br>");
document.write(" tamanho total das mochilas :" + mochila.length);
