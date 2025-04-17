document.addEventListener("DOMContentLoaded", () => {
    // this grabs the form and all the inputs inside of it
    const billInput = document.getElementById("billTotal");
    const tipSlider = document.getElementById("tipSlider");
    const tipPercentage = document.getElementById("tipPercentage");
    const totalWithTax = document.getElementById("totalWithTax");
    const currencySelect = document.getElementById("currency");
    const convertedTip = document.getElementById("convertedTip");
    const convertedTotal = document.getElementById("convertedTotal");
    const billError = document.getElementById("billError");

    //the conversion rates
    const INR_RATE = 85;
    const EUR_RATE = 0.95;

    //this function updates everything when the user types or moves the slider
    function updateValues() {
        //this grabs the number from the bill input
        const bill = parseFloat(billInput.value);
        const tip = parseFloat(tipSlider.value);

        //this checks if it is a real number and not a negative one
        if (isNaN(bill) || bill < 0) {
            billError.textContent = "Please enter a number greater than or equal to 0.";
            tipPercentage.value = "";
            totalWithTax.value = "";
            convertedTip.value = "";
            convertedTotal.value = "";
            return;
        } else {
            billError.textContent = "";
        }

        //once we know that the number is real we move on
        //now we update the tip percent box
        tipPercentage.value=`${tip}%`;

        //adding in the calculation of the tip amount
        const calculatedTip = bill * (tip / 100);

        //adding in the calculation of the 11% tax
        const tax = bill * 0.11;

        //adding the bill and tax amount
        const totalWithTaxs = bill + tax;

        //this is the final calculation of the bill with the tip and taxes included
        const totalWithTipAndTax = totalWithTaxs + calculatedTip;

        //this will show the results of the final total with 2 decimals
        totalWithTax.value = totalWithTaxs.toFixed(2);

        //updating the converted fields
        updateCurrencyConversion(calculatedTip, totalWithTipAndTax);    
    }

    //the function that handles converting the tip and total when the currency is changed
    function updateCurrencyConversion(tipAmount, totalAmount) {
        const currency = currencySelect.value;
        let convertedTipText = "";
        let convertedTotalText = "";
      
        if (currency === "inr") {
          convertedTipText = `₹ ${(tipAmount * INR_RATE).toFixed(2)}`;
          convertedTotalText = `₹ ${(totalAmount * INR_RATE).toFixed(2)}`;
        } else if (currency === "eur") {
          convertedTipText = `€ ${(tipAmount * EUR_RATE).toFixed(2)}`;
          convertedTotalText = `€ ${(totalAmount * EUR_RATE).toFixed(2)}`;
        } else {
          convertedTipText = "";
          convertedTotalText = "";
        }
      
        convertedTip.value = convertedTipText;
        convertedTotal.value = convertedTotalText;
      }
//now every time the user types or moves the slider, this updates stuff
billInput.addEventListener("input", updateValues);
tipSlider.addEventListener("input", updateValues);
currencySelect.addEventListener("change", updateValues);
});