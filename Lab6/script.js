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

    try {
        //this will grab sunrise/sunset data for today and tomorrow
        const todayData = await fetchData(lat, lng, 'today');
        const tomorrowData = await fetchData(lat, lng, 'tomorrow');
    
        //then it will display the results using a helper function
        displayResults(todayData, 'Today');
        displayResults(tomorrowData, 'Tomorrow');
      } catch (err) {
        //if something goes wrong it will show an error message
        errorMsg.textContent = 'Failed to load data. Please try again.';
        console.error(err);
    }
});  

//this function makes a request to the API and returns the results
async function fetchData(lat, lng, date) {
    const res = await fetch(`https://api.sunrisesunset.io/json?lat=${lat}&lng=${lng}&date=${date}`);
    const data = await res.json();
  
    //if the API doesn't return a correct response it will throw an error message
    if (!res.ok || data.status !== 'OK') throw new Error('API Error');
  
    return data.results;
}

// This function builds a card with the returned data and adds it to the page
function displayResults(data, label) {
    const card = document.createElement('div');
    card.className = 'result-card';
  
    // Create the card's inner HTML using the API data
    card.innerHTML = `
      <h3>${label}'s Data</h3>
      <p><strong>Sunrise:</strong> ${data.sunrise}</p>
      <p><strong>Sunset:</strong> ${data.sunset}</p>
      <p><strong>Dawn:</strong> ${data.dawn}</p>
      <p><strong>Dusk:</strong> ${data.dusk}</p>
      <p><strong>Day Length:</strong> ${data.day_length}</p>
      <p><strong>Solar Noon:</strong> ${data.solar_noon}</p>
      <p><strong>Time Zone:</strong> ${data.timezone}</p>
    `;
  
    // Append the card to the results container
    resultsContainer.appendChild(card);
}