function arraySubtract(a,b){
    let bPointer = 0
    let aPointer = 0
    for(let i = 0; i < b.length; i++){
        while(aPointer < a.length){
            if(a[aPointer] !== b[bPointer]){
                aPointer++
            }
            if(a[aPointer] === b[bPointer]){
                a.splice(aPointer,1)
            }

        }
        bPointer++
    }

    return a
}

console.log(arraySubtract([15,15,18,15,15,15,18,15,15],[15])) //[18,18]
console.log(arraySubtract([15,14,18,17,15,15,18,15,15],[15, 17])) //[14,18,18]
