document.addEventListener("DOMContentLoaded", () => {
    // this grabs the form and all the inputs inside of it
    const billInput = document.getElementById("billTotal");
    const tipSlider = document.getElementById("tipSlider");
    const tipPercentage = document.getElementById("tipPercentage");
    const tipAmount = document.getElementById("tipAmount");
    const totalWithTipAndTax = document.getElementById("totalWithTipAndTax");

    //this function updates everything when the user types or moves the slider
    function updateValues() {
        //this grabs the number from the bill input
        const bill = parseFloat(billInput.value);
        const tip = parseFloat(tipSlider.value);

        //this checks if it is a real number and not a negative one
        if (isNaN(bill) || bill < 0) {
            tipPercentage.value = "";
            tipAmount.value = "";
            totalWithTipAndTax.value = "";
            return;
        }

        //once we know that the number is real we move on
        //now we update the tip percent box
        tipPercentage.value=`${tip}%`;

        //adding in the calculation of the tip amount
        const calculatedTip = bill * (tip / 100);
    }

});