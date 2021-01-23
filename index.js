const express = require('express');
const api = require('./api_puller')
const app = express();
const port = 8081;

app.get("/films", (req, res) => {
  queryString = req.query.textfilter;
  api.getFromAPI('films', queryString)
    .then(function (data) {
      res.send(data);
    })
    .catch(function (err) {
      res.send(err);
    });
});

app.get("/people", (req, res) => {
  queryString = req.query.textfilter;
  api.getFromAPI('people', queryString)
    .then(function (data) {
      res.send(data);
    })
    .catch(function (err) {
      res.send(err);
    });
});

app.get("/locations", (req, res) => {
  queryString = req.query.textfilter;
  api.getFromAPI('locations', queryString)
    .then(function (data) {
      res.send(data);
    })
    .catch(function (err) {
      res.send(err);
    });
});

app.get("/species", (req, res) => {
  queryString = req.query.textfilter;
  api.getFromAPi('species', queryString)
    .then(function (data) {
      res.send(data);
    })
    .catch(function (err) {
      res.send(err);
    });
});

app.get("/vehicles", (req, res) => {
  queryString = req.query.textfilter;
  api.getFromAPi('vehicles', queryString)
    .then(function (data) {
      res.send(data);
    })
    .catch(function (err) {
      res.send(err);
    });
});

app.listen(port, () => {
  console.log(`DBMenos backend listning at http://localhost:${port}`);
});
