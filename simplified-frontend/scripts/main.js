//----------functions for Active Devices Page

//function for enabling/disabling tab menu buttons using checkbox
function EnableDisableButton(cb, id) {

  if (cb.checked == 1) {
    document.getElementById(id).disabled = false;
  }
  else{
    document.getElementById(id).disabled = true;
    document.getElementById(id).classList.remove("active"); 
  }
}

// function for the menu tab buttons - allows you swtich between stirrers
// function needed as :focus attritubute in css unselects the tab when anything clicked
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


//function for measuremnet buttons - allows you to select and unselect
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    });
});


//function to send stirrer configurations 
function connect(){
    let stirrer = document.getElementsByClassName("active")[0].id;
    //console.log(stirrer);

    let samplingRate = document.getElementById("time").value;
    //console.log(samplingRate);

    let rawSensors = document.getElementsByClassName("btn active");
    let resquestedSensor = [];
    for(let i = 0; i < rawSensors.length; i++){
        resquestedSensor.push(rawSensors[i].innerText);
    }
    //console.log(resquestedSensor);
}

//function to disconnect from stirrer
function disconnect(){
    document.getElementById("time").value = null; //clears sampling input field

    btns.forEach((btn) => {
        btn.classList.remove("active"); //clears selected sensors
    });

}

