document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("lab-financial-data-graphing JS imported successfully!");
  },
  false
);

const startDateElement = document.querySelector("input[name=startDate]");
const endDateElement = document.querySelector("input[name=endDate]");
const currencyElement = document.querySelector("#currency");

function dateChange() {
  const startDate = startDateElement.value;
  const endDate = endDateElement.value;
  const currency = currencyElement.value;

  if (startDate && endDate && currency) {
    console.log(startDate, endDate, currency);
    date(startDate, endDate, currency);
  } else console.log(`Select start, end date and currency!`);
}

startDateElement.addEventListener("change", (event) => {
  dateChange();
});

endDateElement.addEventListener("change", (event) => {
  dateChange();
});

currencyElement.addEventListener("change", (event) => {
  dateChange();
});
