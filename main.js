let son = prompt("son kiriting")

if(son % 5 === 0 && son % 3 === 0){
    console.log("fizzbuzz") 
} else if(son % 3 === 0){
    console.log("fizz")
} else if(son % 5 === 0){
    console.log("buzz")
} else {
    console.log(son)
}