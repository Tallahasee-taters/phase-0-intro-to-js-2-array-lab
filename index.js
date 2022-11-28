const cats = ["Milo", "Otis", "Garfield"];
// const destructivelyAppendCat = ["Ralph"];
function destructivelyAppendCat(name){
    (cats.push(name))
}
function destructivelyPrependCat(name){
    (cats.unshift(name))
}
function destructivelyRemoveLastCat(name){
    (cats.pop(name))
}
function destructivelyRemoveFirstCat(name){
    (cats.shift(name))
}
function appendCat(name){
    // (cats.slice(...name, cats))
   return [...cats, name] 
//    const catsCopy = cats.slice()
    // catsCopy.push(name) <== option 2 to get similar result
    // return catsCopy
}
function prependCat(name){
    return [name, ...cats]
}
function removeLastCat(name){
   return cats.slice(0, -1)
}
function removeFirstCat(name){
    return cats.slice(1)
}