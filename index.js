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

function appendCat(name){
    const newCats = [...cats];
    newCats.push(name);
    return newCats;
}

function prependCat(name){
    const newCat = [...cats];
    newCat.unshift(name);
    return newCat;
}

function removeLastCat(){
    const newsCats = [...cats];
    newsCats.pop();
    return newsCats;
}

function removeFirstCat(){
    const newsCat = [...cats];
    newsCat.shift();
    return newsCat;
}