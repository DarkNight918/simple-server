const https = require("https");

// Function to make the request
function makeRequest() {
  const url = "https://ramble-uktg.onrender.com"; // Replace with your URL

  https
    .get(url, (response) => {
      let data = "";

      // A chunk of data has been received
      response.on("data", (chunk) => {
        data += chunk;
      });

      // The whole response has been received
      response.on("end", () => {
        console.log(data); // Print the response data
      });
    })
    .on("error", (error) => {
      console.error(`Error making request: ${error.message}`);
    });
}

// Make the initial request
makeRequest();

// Set interval to make request every 1 minute (60 seconds)
setInterval(makeRequest, 60 * 1000);
