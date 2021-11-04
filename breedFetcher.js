const breed = process.argv.splice(2);
const url = `https://api.thecatapi.com/v1/breeds/search/?q=${breed}`;

const request = require("request");
request(url, (error, response, body) => {
  if (error) {
    console.log("error:", error);
  }
  // console.log('statusCode:', response && response.statusCode);
  // console.log(typeof body);
  // console.log('body:', body);
  const data = JSON.parse(body);
  let description = data[0]
    ? data[0].description
    : `Requested breed could not be found.`;
  // console.log(data);
  // console.log(typeof data);
  console.log(description);
});
