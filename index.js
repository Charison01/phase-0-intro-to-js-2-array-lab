// Write your solution here!
const cats = ["Milo","Otis","Garfield"];
//Destructively append cats
function destructivelyAppendCat(name){
    cats.push(name);
}
//Destructively prepend cats
function destructivelyPrependCat(name){
    cats.unshift(name);
}
//Destructively remove last cats
function destructivelyRemoveLastCat(){
    cats.pop();
}
//Destructively remove first cats
function destructivelyRemoveFirstCat(){
    cats.shift();
}
//Nondestructive append cat
function appendCat(name){
    const newCats = [...cats];
    newCats.push(name);
    return newCats;
}
//Nondestructively prepend cat
function prependCat(name){
    const newCat = [...cats];
    newCat.unshift(name);
    return newCat;
}
//Nondestructively remove last cat
function removeLastCat(){
    const newsCats = [...cats];
    newsCats.pop();
    return newsCats;
}
//Nondestructively remove first cat
function removeFirstCat(){
    const newsCat = [...cats];
    newsCat.shift();
    return newsCat;
}