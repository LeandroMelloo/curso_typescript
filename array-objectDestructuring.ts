// array-0bjectDestructuring foi disponibilizada, a partir do ES6.

//--------------------exemplo: array-----------------------------//

let [a, b, c] = [1, 2, 3];

console.log(a, b, c);

//--------------------exemplo: objeto-----------------------------//

let pessoa = {
    nome: "Leandro",
    sobrenome: "Mello"
};

let nome, sobrenome;

({nome, sobrenome} = pessoa);

console.log(nome, sobrenome);