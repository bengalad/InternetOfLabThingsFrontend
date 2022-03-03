/*window.onload = function Tester() {
    alert("Hi")
    var name = prompt("What is your name?")
    alert("Hey there, "+name)
}
*/

//for measuremnet buttons
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    });
});

//for the menu tab buttons
const tabBtns = document.querySelectorAll(".tabBtn");

tabBtns.forEach((tabBtn) => {
    tabBtn.addEventListener("click", () => {
        
        removeClasses(tabBtn);
        
    });
});

function removeClasses(target) {
    tabBtns.forEach((tabBtn) => {
        if(tabBtn == target) { 
            tabBtn.classList.add("active"); 
        }
        else { 
            tabBtn.classList.remove("active"); 
        }
    });
}

//const checks = document.getElementsByClassName("checkmark");
//array = console.log(checks);

//let displaySetting = document.getElementsByClassName("tabBtn").style.display;



/*
function displaybutton(){
    let x = document.getElementsByClassName("one").style.display;
    console.log("testing");
    x2 = console.log(x);
    x = "block"
    if (x.display == 'none') {
        x.display = 'block';
        console.log("works");
      } else {
        x.display = 'none';
        console.log("does something")
      }
}
*/

//let idList = ";"
//document.getElementById('textbox1').value = idList;


//for enabling/disabling tab menu buttons using checkbox
function EnableDisableButton(cb, id) {

  if (cb.checked == 1) {
    
    /*idList = idList + id + ";"
    console.log(idList);*/
    //document.getElementById('textbox1').value = idList;
    document.getElementById(id).disabled = false;
  }
  else{
    document.getElementById(id).disabled = true;
    document.getElementById(id).classList.remove("active"); 
  }

}

function connect(){

}