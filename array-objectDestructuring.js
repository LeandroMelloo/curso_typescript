// array-0bjectDestructuring foi disponibilizada, a partir do ES6.
//--------------------exemplo: array-----------------------------//
var _a = [1, 2, 3], a = _a[0], b = _a[1], c = _a[2];
console.log(a, b, c);
//--------------------exemplo: objeto-----------------------------//
var pessoa = {
    nome: "Leandro",
    sobrenome: "Mello"
};
var nome, sobrenome;
(nome = pessoa.nome, sobrenome = pessoa.sobrenome);
console.log(nome, sobrenome);
