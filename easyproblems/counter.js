



function letterCounter(sentence) {
    let wordObj = {}
    let splitStr = sentence.split('')

    splitStr.forEach(letter => {
        if(wordObj[letter] === undefined){
            wordObj[letter] = 1
        } else {
            wordObj[letter] = wordObj[letter] + 1
        }

    })


    return wordObj
}dfc


phrase = "  dont ever forget that you worked very hard to learn this stuff"

console.log(letterCounter(phrase))
