function date(startDate, endDate, currency) {
  const apiURL = `http://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}&currency=${currency}`;

  axios
    .get(apiURL)
    .then((responseFromAPI) => {
      printTheChart(responseFromAPI.data);
    })
    .catch((err) => console.log("Error while getting the data: ", err));
}

function printTheChart(stockData) {
  console.log(stockData);

  const stockDates = Object.keys(stockData.bpi); //X axis
  const stockPrices = Object.values(stockData.bpi); // Y axis
  const maxPrice = Math.max(...stockPrices);
  document.getElementById("max-price").innerHTML = maxPrice;
  const minPrice = Math.min(...stockPrices);
  document.getElementById("min-price").innerHTML = minPrice;
  const currencyValue = document.getElementById("currency").value;
  document.querySelector("#currency1").innerHTML = currencyValue;
  document.querySelector("#currency2").innerHTML = currencyValue;

  const ctx = document.getElementById("myChart").getContext("2d");
  const chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: stockDates,
      datasets: [
        {
          label: "Bitcoin Price Index",
          backgroundColor: "blue",
          borderColor: "rgb(255, 99, 132)",
          data: stockPrices,
        },
      ],
    },
  });
}
