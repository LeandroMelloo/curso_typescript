"use strict";
exports.__esModule = true;
var NomeDaClasse = /** @class */ (function () {
    function NomeDaClasse(parametros) {
        this.atribut2 = parametros;
    }
    NomeDaClasse.prototype.imprimir = function (message) {
        if (this.atribut2) {
            console.log(message);
        }
    };
    return NomeDaClasse;
}());
var novo = new NomeDaClasse(true);
novo.imprimir('Hello, world!!!');
exports["default"] = NomeDaClasse;
