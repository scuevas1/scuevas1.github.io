//this will get references to key DOM elements from the HTMLconst locationSelect = document.getElementById('locationSelect');
const getDataBtn = document.getElementById('getDataBtn');
const resultsContainer = document.getElementById('resultsContainer');
const errorMsg = document.getElementById('errorMsg');

//adding an event listener to the button so we grab the data when it's clicked
getDataBtn.addEventListener('click', async () => {
    const locationValue = locationSelect.value;
});  