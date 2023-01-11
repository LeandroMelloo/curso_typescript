class NomeDaClasse {

    private atribut: number;
    public atribut2: boolean;
    protected atribut3: object;

    constructor(parametros: boolean){
        this.atribut2 = parametros;
    }

    imprimir(message: string): void {
        if(this.atribut2) {
            console.log(message);
        }
    }
}

const novo = new NomeDaClasse(true);

novo.imprimir('Hello, world!!!');

export default NomeDaClasse;