var a = 1;
function funcao() {
    console.log(a);
    var b = 3;
    if (true) {
        var c = 2;
        console.log(b);
    }
    console.log(c);
}
funcao();
