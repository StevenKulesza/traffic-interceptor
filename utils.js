const axios = require('axios');

exports.getBase64 = function(url) {
    return axios
        .get(url, {
            responseType: 'arraybuffer'
        })
        .then(response => response.data)
}