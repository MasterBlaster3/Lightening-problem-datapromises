//data to be fetched
const dataSourceURL =
  "https://gist.githubusercontent.com/brendalong/ab2424b0069ed0dd56b01951462a109d/raw/716c0776c45adea089644cffa7eadab139f9f47c/womensday.json";

const dataSourceURL2 = "https://type.fit/api/quotes";
// fetches the data
const getData = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((dataResponse) => {
      console.log(dataResponse);
      return dataResponse;
    });
};

// pass both source jsons as objects in an array, and then take the two lengths of each array element and add them together
Promise.all([getData(dataSourceURL), getData(dataSourceURL2)]).then((dataArr) => {
  let sum = dataArr[0].length + dataArr[1].length;
  console.log(sum);
})