const express = require('express');
const cors = require('cors');
const api = require('./api_puller')
const app = express();

const port = 8081;
const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200
};

app.use(cors());

app.get("/", (req, res) => {
  queryString = req.query.textFilter;
  endpoint = req.query.searchType;
  console.log(req.query);
  if (!endpoint) {
    res.send("No search type selected");
  } else {
    api.getFromAPI(endpoint, queryString)
      .then(function (data) {
        res.send(data);
      })
      .catch(function (err) {
        res.send(err);
      });
  }
});

app.listen(port, () => {
  console.log(`DBMenos backend listning at http://localhost:${port}`);
});
