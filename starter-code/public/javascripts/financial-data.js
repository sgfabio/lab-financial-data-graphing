
function getBitCoinPrices() {
    axios
    .get('http://api.coindesk.com/v1/bpi/historical/close.json')
    .then(responseFromAPI => {
    console.log("Response from API is: ", responseFromAPI.data);
    })
    .catch(err => {
    console.log("Error is: ", err);
    });
}


getBitCoinPrices()
  