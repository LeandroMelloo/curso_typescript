//---------------------ES5 default parameters-----------------------//
function exemplo(a, b, c) {
    a = a === undefined ? 1 : a;
    b = b === undefined ? 1 : b;
    c = c === undefined ? 5 : c;

    console.log(a,b,c);
}

exemplo(1,2,5);

//----------------------ES6 default parameters----------------------//
function exemplo1(a = 1, b = 2, c = 3){
    console.log(a, b, c);
}

exemplo1(6)