alert("Before you start using this site, first you will need to crack the 4 digit secret pin. The secret pin is 9[1x1][2x4]2 FIGURE IT OUT (Don't start doing algebra 🫤). For those who know the F12 thing will find the pin easily");
function acceptPin(){
    class Pin{
        constructor(pin){
            this.pinInput = document.getElementById("pin").value;
            this.main = document.querySelector("main");
            this.access = document.querySelector(".access");
            this.pin = parseInt(pin);
        }
        enterPin(){
            if(this.pinInput.length == 0){
                alert("Please enter the 4 digit secret pin");
            }else if(this.pinInput < 0){
                alert("🤨! You must be mentally unstable i swear" );
            }else if(this.pinInput.length != 4){
                alert(this.pinInput +" IS NOT FOUR DIGITS YOU MONKEY");
            }else if(this.pinInput != this.pin){
                alert("ACCESS DENIED! " + this.pinInput + " is not the pin");
            }else{
                alert("ACCESS GRANTED! " + this.pinInput + " is the pin");
                this.main.style.display = "block";
                this.access.style.display = "none";
            }
        }
    }
    let p = new Pin(9182);
    p.enterPin();
}
function viewReleaseNotes(){
    class Notes{
        constructor(){
            this.note = document.querySelector(".notes");
            this.noteButton = document.getElementById("notebutton");
        }
        notes(){
            if(this.noteButton.innerHTML == "Click to view release notes"){
                this.noteButton.innerHTML = "Click to hide release notes";
                this.note.style.display = "block";
            }else{
                this.noteButton.innerHTML = "Click to view release notes";
                this.note.style.display = "none";
            }
        }
    }
    let n = new Notes();
    n.notes();
}
function calculateAge(){
    class Calculator{
        constructor(){
            this.option1 = document.getElementById("selection1").value;
            this.option2 = document.getElementById("selection2").value;
            this.name = document.getElementById("name").value;
            this.link = document.getElementById("linkk");
            this.button = document.querySelector(".user_info");
            this.para = document.querySelector(".paragrapgh");
            this.ageText = document.getElementById("age");
            this.user_name = document.querySelector(".user_name")
            this.span = document.querySelector(".span");
            this.age = "";
        }
        yourAge(){
            if(this.name.length == 0){
                this.age = "Please enter your name";
                this.ageText.style.color = "red";
            }else if(this.option1 < this.option2){
                this.age = this.name.toUpperCase() + "!!!!! that is just impossible＞︿＜";
                this.ageText.style.color = "red";
            }else if((this.option1 - this.option2) >= 100){
                this.age = (this.option1 - this.option2) + " YEARS OLD💀💀?? " + this.name.toUpperCase() + " are you.... IMMMOOORRRTTTTAAALLLLL!!!!"; 
                this.link.style.display = "block";
                this.button.style.display = "none";
                this.para.style.display = "block";
                this.user_name.style.display = "block"
                this.ageText.style.color = "rgb(255, 0, 0)";
                this.ageText.style.fontWeight = "bold";
            }else if((this.option1 - this.option2) >= 18){
                this.age = this.name.toUpperCase() + " you are " + (this.option1 - this.option2) + " years old"; 
                this.link.style.display = "block";
                this.button.style.display = "none";
                this.para.style.display = "block";
                this.user_name.style.display = "block"
                this.ageText.style.color = "rgb(148, 255, 148)";
            }else if((this.option1 - this.option1) < 18){
                this.age = this.name + " you are " + (this.option1 - this.option2) + " years old."
                this.link.style.display = "none";
                this.ageText.style.color = "rgb(148, 255, 148)";
            }
            this.ageText.innerHTML = this.age;
            this.user_name.innerHTML = "HI! MY NAME IS " + this.name.toUpperCase() + ". I CANNOT GET LAID BECAUSE NOBODY WANTS ME AND I'M HORNY AS FUCK. MASTURBATING TO PORN IS ALL I HAVE LEFT 🥺💔";
            this.span.innerHTML = this.name.toUpperCase();
            this.span.style.color = "rgb(148, 255, 148)";
        }
    }
    let calculator = new Calculator();
    calculator.yourAge();
}