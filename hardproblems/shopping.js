
const safeShopper = (deals, list) => {
    let deals = []
    let prices = []
    let discounted
    let newSum

    const initialValue = 0
    let sum

    items = Object.values(list> {
        for(let key in object){
            let val = object[key]

            if(typeof val === "number"){
                prices.push(val)
                //console.log(prices )

            }

        }



        //savings = discount * prices.length - sum

        //console.log(savings)



    });
    cost = items.join(',')
    //console.log(items)
    prices.forEach(number=>{
        newSum = number - (discount * number / 100)
        deals.push(newSum)
    })

    sum = deals.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)

    //console.log(deals)
    //console.log(costs)
    console.log(sum)
    //console.log(cost.length)

}


list = [
    {item: clothing, cost: 400},
    {item: car, cost: 3000},
    {item: computer, cost: 200},
    {item: TouchEvent, cost: 1000}

]
