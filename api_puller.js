const axios = require('axios');

function filterResponse(objects, query)
{
  results = [];
  keys = Object.keys(objects[0]);
  for(var i = 0; i < objects.length; i++) {
    found = false;
    for(var j = 0; j < keys.length; j++) {
      if(typeof objects[i][keys[j]] !== 'object' && objects[i][keys[j]].toLowerCase() == query.toLowerCase()) {
        found = true;
        break;
      }
    }

    if(found) {
      results.push(objects[i])
    }
  }
  return results;
}

exports.getFromAPI = function(endpoint, queryString) {
  return axios.get('https://ghibliapi.herokuapp.com/' +  endpoint)
  .then(function (response) {
    if(queryString) {
      filteredResponse = filterResponse(response.data, queryString);
    } else {
      filteredResponse = response.data;
    }
    return filteredResponse;
  })
  .catch(function (error) {
    console.log(error);
  })
}
