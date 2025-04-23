//this will get references to key DOM elements from the HTMLconst locationSelect = document.getElementById('locationSelect');
const getDataBtn = document.getElementById('getDataBtn');
const resultsContainer = document.getElementById('resultsContainer');
const errorMsg = document.getElementById('errorMsg');

//adding an event listener to the button so we grab the data when it's clicked
getDataBtn.addEventListener('click', async () => {
    const locationValue = locationSelect.value;
    errorMsg.textContent = '';
    resultsContainer.innerHTML = '';

    //if no location is selected, this will show an error and stop
    if (!locationValue) {
        errorMsg.textContent = 'Please select a location.';
        return;
    }

    //this will split the selected location's lat and long values
    const [lat, lng] = locationValue.split(',');
});  