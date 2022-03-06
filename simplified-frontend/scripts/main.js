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

}


//----------functions for Graphs page

//ploting graph using chart.js
var ctx = document.getElementById("Chart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [1, 2, 3, 4, 5, 6],
        
        datasets: [{
            label: 'Temperature of Solution',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor:'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                // Include a dollar sign in the ticks
                callback: function(value, index, ticks) {
                    return value + "°C";}
                }
            }
        }
    }
});


// function for the select stirrer buttons - allows you swtich between stirrers
const selectBtns = document.querySelectorAll(".selectBtn");

selectBtns.forEach((selectBtn) => {
    selectBtn.addEventListener("click", () => {
        
        removeClasses(selectBtn);
        
    });
});

function removeClasses(target) {
    selectBtns.forEach((selectBtn) => {
        if(selectBtn == target) { 
            selectBtn.classList.add("active"); 
        }
        else { 
            selectBtn.classList.remove("active");
            clearMeasurements();//clears measurement options
        }
    });
}

//function to clear measurement options when stirrer changed
function clearMeasurements(){
    measureBtns.forEach((measureBtn) => {
        measureBtn.classList.remove("active");
    })
}

//function for measuremnet buttons - allows you to select and unselect
const measureBtns = document.querySelectorAll(".measureBtn");

measureBtns.forEach((measureBtn) => {
    measureBtn.addEventListener("click", () => {
    measureBtn.classList.toggle("active");
    });
});

