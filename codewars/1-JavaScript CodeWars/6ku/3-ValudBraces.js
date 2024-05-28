/**
 * 6kyu
 * VALID BRACES
 *
 * Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.

Examples
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
 */

function validBraces(braces){

    let midPoint = braces.length / 2;
    let curly = '{}'
    let bracket = '[]'
    let paren = '()'
    if(braces.length % 2 === 0) {
        if(braces[midPoint -1] === curly[0] && braces[midPoint] === curly[1]) return true
        if(braces[midPoint -1] === bracket[0] && braces[midPoint] === bracket[1]) return true
        if(braces[midPoint -1] === paren[0] && braces[midPoint] === paren[1]) return true
        if(braces[midPoint -1] === curly[0] && braces[braces.length -1] === curly[1]) return true
        if(braces[midPoint -1] === bracket[0] && braces[braces.length -1] === bracket[1]) return true



    } return false;
}

console.log(validBraces("({})[({})]")) //  True

console.log(validBraces("()))")) //  False
console.log(validBraces("(){}[]"))   //  True
console.log(validBraces("([{}])"))   //  True
console.log(validBraces("(}"))       //  False
console.log(validBraces("[(])"))     //  False
console.log(validBraces("[({})](]")) //  False
