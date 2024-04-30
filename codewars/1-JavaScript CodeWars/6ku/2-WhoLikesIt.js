//6ku WHO LIKES IT

//You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

//Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

let who = function(callback){
    //return callback() + "Likes this"
    callback()
    console.log( 'Likes this')
}

let likes = function(names) {
    if(!names.length) console.log("no one")
    if(names.length === 1) console.log(names[0])

    if(names.length < 4){
        for (let i = 0; i < names.length; i++) {
            if(i === names.length -1) console.log(`and ${names[i]}` )
            console.log(`${names[i]} and`)
        }
    }
}




who(likes([]))                               //"no one likes this"
console.log(who(likes(["Peter"])))                          //"Peter likes this"
console.log(who(likes(["Jacob", "Alex"])))                  //"Jacob and Alex like this"
console.log(who(likes(["Max", "John", "Mark"])))            //"Max, John and Mark like this"
console.log(who(likes(["Alex", "Jacob", "Mark", "Max"])))   //"Alex, Jacob and 2 others like this"
