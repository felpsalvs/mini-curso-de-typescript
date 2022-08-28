"use strict";
//boolean (true or false) ex: função que retorna true ou false
let isDone;
isDone = false;
// string ('foo' or "foo")
let nam;
nam = 'foo';
// number (int or float, hex, binary) ex: 0xf00d, 0b1010, 0o744
let num;
num = 1;
// array (type[])
let list;
list = [1, 2, 3];
let list2;
list2 = [1, 2, 3];
// tuple
let x;
x = ['foo', 1];
// enum
var Color;
(function (Color) {
    Color["white"] = "#fff";
    Color["black"] = "#000";
    Color["red"] = "#f00";
    Color["green"] = "#0f0";
    Color["blue"] = "#00f";
})(Color || (Color = {}));
// any (qualquer coisa) NÃO É RECOMENDADO
let notSure;
notSure = 1;
// void (vazio) ex: função que não retorna nada
function warnUser() {
    console.log('This is my warning message');
}
// never (nunca) ex: função que lança exceção ou nunca retorna
function error(message) {
    throw new Error(message);
}
// object (qualquer coisa que não seja number, string, boolean, bigint, symbol, null ou undefined)
let cart;
cart = {
    key: 'fi'
};
// Type Inference typescript infere o tipo da variável
let message = 'mensagem definida';
message = 'string nova';
