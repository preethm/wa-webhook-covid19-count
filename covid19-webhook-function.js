function main(params) {

    if(!params) { return { error : "Please provide a valid action for the Cloud Function." } }

      if(!params.stateCode) { return { error : "Please provide a valid state code."} }

      else {
        const stateCode = params.stateCode;

        var request = require('request-promise');

        var options = {
            'method': 'GET',
            'url': 'https://covidtracking.com/api/states?state=' + stateCode,
            'headers': { },
            'body': { },
                json: true
            }

        return request(options).then(function (body) {
            return {message: body}
        }).catch(function (err) {
            console.log(err)
        });
      }

}
