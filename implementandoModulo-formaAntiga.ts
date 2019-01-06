// implementandoModulo-formaAntiga
(function (global){
    var somar = function(a, b) {
        return a + b;
    }

    var subtrair = function(a, b) {
        return a - b;
    }

    var operacoes = {
        som: function(a, b) {
            return somar(a, b);
        },

        sub: function(a, b) {
            return subtrair(a, b);
        }
    }

    global.operacoes = operacoes;

})(global)

console.log(operacoes.som(1,1));
console.log(operacoes.sub(100,10));

//-------------------------------módulo commons.js------------------------------//
/*var adicao = function(a, b){
    return a + b;
}

var subtracao = function(a, b){
    return a - b;
}

var operacao = function(a, b){
    sum: function(x, y) {
        return adicao(x, y);
    },

    subt: function(x, y){
        return subtracao(x, y);
    }
}

exports.calculadora = operacao;

var calculadora = require('./calculadora');*/

