//6ku WHO LIKES IT

//You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

//Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

let who = function(){
    //return callback() + "Likes this"
    return ' likes this'
}

let likes = function(names, cb) {
    if(!names.length) console.log("no one" + cb())
    if(names.length === 1) console.log(names[0] + cb())

    if(names.length < 4){
        for (let i = 0; i < names.length; i++) {
            if(i === names.length -1) console.log(`and ${names[i]}` + cb() )
            console.log(`${names[i]} and` + cb())
        }
    }
}




console.log(likes([], who))                              //"no one likes this"
console.log(likes(["Peter"], who))                          //"Peter likes this"
console.log(likes(["Jacob", "Alex"],who))                  //"Jacob and Alex like this"
console.log(likes(["Max", "John", "Mark"],who))          //"Max, John and Mark like this"
//console.log(likes(["Alex", "Jacob", "Mark", "Max"],who))   //"Alex, Jacob and 2 others like this"
