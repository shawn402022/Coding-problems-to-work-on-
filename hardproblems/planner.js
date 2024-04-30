// practicing  with objects.. especially objects with  muliplle keys

const itemsWithinBudget = (cost, things) => {
    let newObj = {}
    let newArray = []

    for(let product in things) {
        //console.log(items[product])
        key = things[product]
        newVal = Object.values(key)
        newObj[newVal[0]] = newVal[1]
        //console.log(newObj)



    }
    for(let gadgets in newObj) {
        price = newObj[gadgets]
        if( price < cost){
            newArray.push(gadgets)

        }
    }
    console.log(newArray)
}


things = [
    {item: clothing, cost: 400},
    {item: car, cost: 3000},
    {item: computer, cost: 200},
    {item: TouchEvent, cost: 1000}

]
