/**
 * Description: Scope Chain
 * 
 * Lexical environment
 *      1. Script itself is lexical environment
 *      2. Function
 *      3. Block 
 */

let a = 3;

function x(){
    let b = 5, d = 8;
    console.log(a);
    function y(){//Inner function
        let c = 7;
        console.log(b);
        function z(){
            console.log(c);
            console.log(d);
        }
        z();
    }
    y();
}

x();