const axios = require("axios");

function getBookWithPromises() {
  axios
    .get("http://localhost:5000/title/Things_Fall_Apart")
    .then((response) => {
      console.log("Book", response.data);
    })
    .catch((err) => {
      console.error("Error fetching books:", err.message);
    });
}

getBookWithPromises()
