/**
 * Description: Scope Chain
 *              In JavaScript, the scope chain refers to the hierarchical order in which 
 *              the runtime looks up variables and functions in the current execution context.
 * 
 * Lexical environment
 *      1. Script itself is lexical environment
 *      2. Function
 *      3. Block 
 */

let a = 3;

function x(){
    let b = 5, d = 8;
    console.log( {a} );
    function y(){//Inner function
        let c = 7;
        console.log( {b} );
        function z(){
            console.log( {c} );
            console.log( {d} );
        }
        z();
    }
    y();
}

x();