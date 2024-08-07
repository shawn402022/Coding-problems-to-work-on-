/**
 * 6KYU
 * array.diff
 *
 * DESCRIPTION:
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order
arrayDiff([1,2],[1]) == [2]

If a value is present in b, all of its occurrences must be removed from the other
arrayDiff([1,2,2,2,3],[2]) == [1,3]
 */


function arrayDiff(a, b) {
    let stack = [b.shift()];
    while(stack.length){
        let deq = stack.shift();
        a.forEach(number => {
            if(deq === number){
                a.splice(a.indexOf(number), 1);
            }
        });
        if(b.length) stack.push(b.shift())

    }
    return a

}
console.log(arrayDiff([15,11,-16,6,11,-5,-5,-16,8,15,-19],[15,11,-16,6])) //[-5, -5, 8, -19]
console.log(arrayDiff([18,15,18,16,5,-1,18,-3],[18,15,18,16,5])) // [-1,-3]
console.log(arrayDiff([9,-7,-4],[9])) // [-7,-4]
console.log(arrayDiff([6,-10],[6])) // [-10]
console.log(arrayDiff([14,-6,-10,-12,4,3,3],[14,-6])) // [-10,-12,4,3,3]

console.log(arrayDiff([1,2],[1])) // [2]
console.log(arrayDiff([1, 2, 2, 2, 3], [2])) // [1,3]
console.log(arrayDiff([1,2,2],[2])) // [1]
console.log(arrayDiff([1,2,3],[1,2])) // [3]






/**
 * first solution
 * function arrayDiff(a,b){
    //create copy of the a array so that the length does not change while looping
    let aCopy = a.slice()
    //create counter to keep track of b elements
    let bCounter = b.length;
    //create while  loop.
    while(bCounter !== 0){
        for (let i = 0; i < aCopy.length; i++) {
            //remove elements an a that are equal to element in b
            debugger
            if (aCopy[i] === b[bCounter-1]) {
                debugger
                if(aCopy[0] === b[0]){
                    a.splice(1 -1, 1)
                } else {
                    a.splice(aCopy[i] -1, 1)
                }
            }
        }
        debugger
        bCounter--
    }
    // return a
    return a
}
 *
 */
