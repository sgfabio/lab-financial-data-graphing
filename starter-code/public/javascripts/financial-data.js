
function getBitCoinPrices() {
    axios
    .get('http://api.coindesk.com/v1/bpi/historical/close.json')
    .then(responseFromAPI => {
    console.log("Response from API is: ", responseFromAPI.data.bpi);
    printChart(responseFromAPI.data.bpi)
    })
    .catch(err => {
    console.log("Error is: ", err);
    });
}


getBitCoinPrices()

function printChart(stockData) {
    const days = Object.keys(stockData);              // Pega valores do Eixo X
    const closingPrices  = Object.values(stockData);  // Pega valores do Eixo Y

    let ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: days,
            datasets: [{
                label: 'Closing quotes',
                data: closingPrices,
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });


}

