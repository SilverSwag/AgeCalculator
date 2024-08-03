alert("⚠️WARNING⚠️:This site is very explicit. Any persons under the age of 18 is not allowed to be on this site.")
const option1 = document.getElementById("selection1")
const option2 = document.getElementById("selection2")
const name = document.getElementById("name")
const linkk = document.getElementById("linkk")
function calculateAge(){
    let age = name.value + ", your age is " + (option1.value - option2.value) + " years."
    if(name.value == ""){
        age = "Enter your name first you bitch"
    } else if (option1.value < option2.value){
        age = name.value + " you cannot be born in the future fucking idiot"
    } else if ((option1.value - option2.value) >= 18){
        age += " You are an adult, feel free to watch other people having sex."
        linkk.style.display = "block" 
    } else if ((option1.value - option2.value) < 18){
        age += " You are still a little baby so no sex shows for you tiny one."
        linkk.style.display = "none"
    }
    document.getElementById("age").innerHTML = age 
}