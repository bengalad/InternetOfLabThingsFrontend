//for the menu tab buttons - allows you swtich between stirrers
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


//for measuremnet buttons - allows you to select and unselect
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    });
});


//for enabling/disabling tab menu buttons using checkbox
function EnableDisableButton(cb, id) {

  if (cb.checked == 1) {
    document.getElementById(id).disabled = false;
  }
  else{
    document.getElementById(id).disabled = true;
    document.getElementById(id).classList.remove("active"); 
  }
}

//function to send stirrer configurations 
function connect(){

}