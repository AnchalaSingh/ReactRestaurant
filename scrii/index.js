/**
 * const pTag = document.querySelector("div.container > div > p")

// pTag.innerText = "<b> I am from </b> UttarPradesh "

pTag.innerHtml= "<b> I am from </b> UttarPradesh "
**/
// create a square using js with rectangle 200px width and height with 250 px with red colour
// step1: Create div using document create element
// step2: change the CSS property
// step3: Append this div into the DOMException(existing)
/**
const card1 = document.createElement("div")      //dom = method

card1.style.width = "200px"                    //stype is a attribute
card1.style.height = "250px"
card1.style.backgroundcolor = "red"

card1.setAttribute("id", "card1")

card1.classList.add("card")

card1.classList.remove(card)  //to remove thedesire card

const card2 = document.createElement("div")      //dom = method

card2.style.width = "200px"
card2.style.height = "250px"
card2.style.backgroundcolor = "blue"

card2.setAttribute("id", "card2")

card2.classList.add("card")

const container = document.querySelector(".container")

container.style.display = "flex"

container.appendChild(card1)
container.appendChild(card2)

card1.addEventListener("mouseenter", ()=>{
    card1.style.backgroundColor = "green"
   // console.log("Mouse is entered in div1")
})

card1.addEventListener("mouselravr", ()=>{    //events difined
    card2.style.backgroundColor = "red"
   // console.log("Mouse is leaved from div1")
})

card2.addEventListener('click', ()=>{
    card2.style.backgroundColor = "yellow"
})
**/
/**
const URL = "https:makemytrip-backend-w2d2.onrender.com/cities";

const cityContainerDiv = document.querySelector
const result = fetch(URL)

result.then((res)=>{   //console.log
    return res.json() //rseolve
}).then((data)=>{

   // console.log(data, "Test2")
   data.forEach()
})

const createCard = (cityData, index)=>{
    const{id, city, decription, image} = city
    const card = document.createElement("div");
    card.innerHYML =
    <img class="city_img" src="${image}" alt="${city}"/>

    <div class="city_info"></div>
    
    //'copy the cart code from site. And change the src=${image} and alt = ${city} and change city_name... = ${city} and then  city_no_of_places = ${description} '

    cityContainerDiv =

}
**/
// const config = { backendEndpoint: "https://makemytrip-backend-w2d2.onrender.com" };
// export default config;

/*
var n = 2;      //all code can be called global function(global execution created)
function calcSquare(num){
    var ans = num * num;
    return ans

}
var squareOfTwo = calcSquare(2)
var squareOfFour = calcSquare(4)
console.log(squareOfTwo)
console.log(squareOfFour)
*/
/*
console.log(studentname)
console.log(ans)

var studentname = "Anchala"
console.log(greet)

var ans = greet(studentname)

// function greet(name){
//     console.log("Hellio, I am", name)
// }

// var greet = (name)=>{
//     console.log("Hellio, I am", name)
// }

var greet = function(name){
    console.log("Hellio, I am", name)
}

console.log(studentname)
console.log(ans)
*/

// console.log(studentName)
// var studentName = "Anchala"


//console.log(studentName)
// let studentName;      //
// console.log(studentName)
// studentName = "Anchala"
// console.log(studentName)

/*
console.log("start")

setTimeout(()=>{
    console.log("setTimeout callback is called")
}, 2000)

fetch("https://makemytrip-backend-w2d2.onrender.com/cities").then((res)=>{
    console.log("fetch cb is called")
})

document.getElementById()

const startTime = new Date().getTime()

const duration = 10 * 1000

while((new Date().getTime() - startTime) < duration){
    //wait
}

console.log("while is completed")

console.log("end")
*/

/*
var count = 8;
function a(){
    var count = 5     // var(come before let) and let 
    function b(){
      //  var count = 6
        console.log(count)
    }
    count = 8
    return b
}

const x = a()
x()
*/
/*
function a(){
   var count = 8   //if use var then cant able to access 8 outside the funvtion
 function b(){
    console.log(count)
 }
b()
}
a()
*/
/*
if(true){
    // var count = 0   //can be access by another because if is not a function.
    let count = 0   //block restriction
}

if(true){
    console.log(count)
}
*/
/*
function a (){
    if(true){
        var count = 0
    }
    //count = 8

    return ()=>{
        console.log(count)
    }
}
const x = a()
x()
*/

console.log("start")

const result = nonBlocking()

result.then((data)=>{
    console.log(data)
})
function nonBlocking(){

}

console.log("end")


