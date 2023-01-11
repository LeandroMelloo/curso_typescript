const pessoas = [
    {
        name: "Maria",
        idade: 18,
        peso: 50,
    },
    {
        name: "Ana",
        idade: 20,
        peso: 48,
    },
    {
        name: "Fernanda",
        idade: 30,
        peso: 60,
    },
    {
        name: "Nathalia",
        idade: 25,
        peso: 61,
    },
    {
        name: "Izabel",
        idade: 21,
        peso: 55,
    },
    {
        name: "Laura",
        idade: 18,
        peso: 40,
    },
    {
        name: "Rose",
        idade: 30,
        peso: 50,
    },
]

const idadeOrdenada = pessoas.sort(function (a, b) {
    if (a.idade < b.idade) {
        return -1;
    } else {
        return true;
    }
});
console.log(pessoas);