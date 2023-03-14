
// let num = 5
// let secondNum = 15;

// while(num<10){
//     let secondNum = 5
//     console.log("in scope", secondNum)
//     console.log(num)
//     num++;
// }
// console.log(secondNum)






// console.log(document.getElementById("one"))

// console.log(document.getElementsByClassName("heading"))

// console.log(document.getElementsByName("gender"))

// const button = document.getElementById("btn")
// const box = document.getElementsByTagName("div")

// const button = document.querySelector("#btn")
// const boxes = document.querySelectorAll("div")


// button.onclick = function(){
//     // for(let i = 0; i<box.length; i++){
//     //     box[i].style.backgroundColor = "blue"
//     //     console.log(box[i])
//     // }

//     boxes.style.backgroundColor = "blue"

// }

// const str = document.querySelector("[data-type ='string'")


// console.log(str)

// str.classList.


// const box = document.querySelector(".box")
// const btn = document.querySelector("button")

// btn.onclick = function(){
//     if(box.classList.contains("red")){
//         box.classList.remove("red")
//         box.classList.add("blue")
//     }else{
//         box.classList.remove("blue")
//         box.classList.add("red")
//     }
// }

const btn = document.querySelector("button")
const div = document.querySelector("div")

btn.onclick = function(){
    let newHeading = document.createElement("h1")
    newHeading.innerText = "Hello, BP207!"
    newHeading.onclick= function(){
        newHeading.style.color = "red"
    }
    newHeading.classList.add("heading-style")
    div.append(newHeading)
    console.log(newHeading)
}



