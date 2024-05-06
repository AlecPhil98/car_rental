"use strict"

/*
    - Basic Car Rental is $29.99 per day
    - There is a 30% surcharge if you are under 25
    - Option costs
        - Electric Toll Tag $3.95
        - GPS $2.95
        - Roadside Assistance $2.95
    - Data to display
        - Car rental cost
        - Options cost
        - under 25 surcharge cost
        - Total due
*/

window.onload = function(){
    let rentalForm = document.querySelector("#rentalForm");

    rentalForm.addEventListener("submit", calcCarRentalFees)

}


function calcCarRentalFees(event) {
    //keep the form from submittng and refreshing the page
    event.preventDefault();

    // lets get the form form the event and assign to a variable
    let theForm = event.target
    console.log(theForm)

    let totalCarRentalPrice = 29.99 * Number(theForm.numDays.value);

    alert("hello form calCarRentalFees");
    //handle the option cost 
    let optionsCost = 0;
    if (theForm.tollTag.checked) {

        optionsCost += 3.95;
    }


    if (theForm.gps.checked) {

        optionsCost += 2.95;
    }

    if (theForm.rsa.checked) {

        optionsCost += 2.95;
    }

    //handle the sub charge under 25 
    let ageSurgeCharge = 0;
    if (theForm.under25.value === "yes") {

        ageSurgeCharge = totalCarRentalPrice * (30 / 100)
    }

    //add all the thiungs to gwet the total 
    let totalDue = totalCarRentalPrice + optionsCost + ageSurgeCharge;

    let message = `

    <div>Car Rental Cost: ${totalCarRentalPrice.toFixed(2)} </div>
    <div>Car Option Cost: ${optionsCost.toFixed(2)} </div>
    <div> Under 25 subcharge: ${ageSurgeCharge.toFixed(2)} </div>
    <div class="mt5">Total Due: ${totalDue.toFixed(2)} </div>
    `
    
    //put the message on the screen 
    document.querySelector("#results").innerHTML = message
}

