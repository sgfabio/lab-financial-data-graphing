
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

funtion printChart(stockData) {
    const days = Object.keys(stockData);              // Eixo X
    const closingPrices  = Object.values(stockData);  // Eixo Y



}



var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: dailyData,
        datasets: [{
            label: 'Closing quotes',
            data: [12, 19, 3, 5, 2, 3],
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