function letVar() {
    console.log(a);//ReferenceError since a is declared using let and block scope.
    let a = 100;
}

function letVar2() {
    a = 110;
    console.log(a);
}

function constVar() {
    console.log(b);
    const b = 10;
}

export function AExportFunction() {
    console.log('in AExportFunction');
}

export default function DefaultExportFunction() {
    console.log('in DefaultExportFunction');
}
//letVar1();//ReferenceError since a is declared using let and block scope.

// letVar2();//110
// console.log(a)//110

//constVar();

// console.log(d);
// let d = 2;


// foo(); // 1
// var foo;
// function foo() {
//     console.log( 1 );
// }
// foo = function() {
// console.log( 2 );
// };

(
    function bar() {
        console.log('bar');
    })()
