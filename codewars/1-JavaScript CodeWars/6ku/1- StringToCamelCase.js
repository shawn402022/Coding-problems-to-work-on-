/*
(STRINGS)

CONVERT STRING TO CAMEL CASE
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"
*/


/* POYLA
-loop through  string
    -if an index in string is an underscore or a dash
        -then remove it
        - make the next index a capital letter

*/



function toCamelCase(str) {

    let array = str.split('')
    let newArr = []

    for (let i = 0; i < array.length; i++) {
        currentLetter = array[i]
        nextLetter = array[i + 1]
        if (currentLetter !== '_' && currentLetter !== '-' ) newArr.push(currentLetter)
        else{
            capLetter = nextLetter.toUpperCase();
            splicedArr = newArr.splice(i++, 1, capLetter)
        }
    }
    return newArr.join('')
}


console.log(toCamelCase("the_stealth_warrior"))
