var hotel = parseFloat(prompt("Quanto é a diária no hotel?"));
var transporte = parseFloat(prompt("Quanto você pretende gastar em transporte em um dia?"));
var comida = parseFloat(prompt("Quanto você pretende gastar em refeições em um dia?"));
var tempo = parseFloat(prompt("Quantos dias você passará fora?"));
var total;

total = tempo*(comida+transporte+hotel);

document.write("Será preciso no mínimo R$"+total+",00");