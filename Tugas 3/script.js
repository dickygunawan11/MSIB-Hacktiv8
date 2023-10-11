async function getData() {
  const countryInput = document.getElementById('countryInput').value;
  const apiUrl = `https://covid-193.p.rapidapi.com/statistics?country=${countryInput}`;

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
        'X-RapidAPI-Key': 'bf265751f0mshf188a931c79a7a9p1913dfjsn2d45af5a6520'
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }

    const data = await response.json();
    displayData(data.response[0]);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function displayData(data) {
  const activeCases = document.getElementById('activeCases');
  const recoveredCases = document.getElementById('recoveredCases');
  const totalDeaths = document.getElementById('totalDeaths');
  const newCases = document.getElementById('newCases');
  const totalTests = document.getElementById('totalTests');
  const totalCases = document.getElementById('totalCases');
  const countryNameElement = document.getElementById('countryName');

  const countryInput = document.getElementById('countryInput').value;
  countryNameElement.innerText = countryInput;

  activeCases.innerText =  + data.cases.active;
  recoveredCases.innerText = + data.cases.recovered;
  totalDeaths.innerText =  + data.deaths.total;
  newCases.innerText =  + data.cases.new;
  totalTests.innerText = + data.tests.total;
  totalCases.innerText = + data.cases.total;
}

