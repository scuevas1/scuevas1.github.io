document.addEventListener("DOMContentLoaded", () => {
    // this grabs the form and all the inputs inside of it
    const billInput = document.getElementById("billTotal");
    const tipSlider = document.getElementById("tipSlider");
    const totalWithTax = document.getElementById("totalWithTax");
    const currencySelect = document.getElementById("currency");
    const convertedTip = document.getElementById("convertedTip");
    const convertedTotal = document.getElementById("convertedTotal");

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
            tipPercentage.value = "";
            totalWithTax.value = "";
            convertedTip.value = "";
            convertedTotal.value = "";
            return;
        }

        //once we know that the number is real we move on
        //now we update the tip percent box
        tipPercentage.value=`${tip}%`;

        //adding in the calculation of the tip amount
        const calculatedTip = bill * (tip / 100);

        //adding in the calculation of the 11% tax
        const tax = bill * 0.11;

        //adding the bill and tax amount
        const totalTaxed = bill + tax;

        //this is the final calculation of the bill with the tip and taxes included
        const finalTotal = bill + calculatedTip + tax;

        //this will show the results of the final total with 2 decimals
        tipAmount.value = calculatedTip.toFixed(2);
        totalWithTax.value = totalTaxed.toFixed(2);
        totalWithTipAndTax.value = finalTotal.toFixed(2);

        //updating the converted fields
        updateCurrencyConversion(tipAmount, totalFinal);
    }

    //the function that handles converting the tip and total when the currency is changed
    function updateCurrencyConversion(tipAmount, totalFinal) {
        const selected = currencySelect.value;
        let convertedTipValue = "";
        let convertedTotalValue = "";

        if (selected === "inr") {
            convertedTipValue = `₹ ${(tipAmount * INR_RATE).toFixed(2)}`;
            convertedTotalValue = `₹ ${(totalFinal * INR_RATE).toFixed(2)}`;
          } else if (selected === "eur") {
            convertedTipValue = `€ ${(tipAmount * EUR_RATE).toFixed(2)}`;
            convertedTotalValue = `€ ${(totalFinal * EUR_RATE).toFixed(2)}`;
          } else {
            convertedTipValue = `$ ${tipAmount.toFixed(2)}`;
            convertedTotalValue = `$ ${totalFinal.toFixed(2)}`;
          }
        convertedTip.value = convertedTipValue;
        convertedTotal.value = convertedTotalValue;
    }

    //now every time the user types or moves the slider, this updates stuff
    billInput.addEventListener("input", updateValues);
    tipSlider.addEventListener("input", updateValues);
    currencySelect.addEventListener("change", () => {
        const bill = parseFloat(billInput.value);
        const tip = parseFloat(tipSlider.value);

        if (!isNaN(bill) && bill >= 0) {
            const tipAmount = bill * (tip / 100);
            const taxAmount = bill * 0.11;
            const totalFinal = bill + taxAmount + tipAmount;

            updateCurrencyConversion(tipAmount, totalFinal);
        }
    })

});