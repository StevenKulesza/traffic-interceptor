const express = require('express');
const router = express.Router();
const url = require('url');
const config = require('../config');
const utils = require('../utils');

const parametersController = require('../controllers/parameters.controller')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Interceptor'
  });
});

router.get('/image', async (req, res, next) => {
  let queryParams = '';
  let parsedQueryParams = '';
  let paramModel = {};
  let imageResponse = ''
  const parsedUrl = url.parse(req.url);

  if (parsedUrl.query != null) {
    queryParams = url.parse(req.url).query;
    parsedQueryParams = JSON.parse('{"' +
      decodeURI(queryParams)
      .replace(/"/g, '\\"')
      .replace(/&/g, '","')
      .replace(/=/g, '":"') +
      '"}')


    // console.log('PARSED PARAMS: ', parsedQueryParams)
    // console.log('URL: ', config.prod.targetUrl + '?' + queryParams)

    // make get call to target
    imageResponse = await utils.getBase64(config.prod.targetUrl + '?' + queryParams);

    paramModel = {
      name: parsedQueryParams.at_property,
      incoming: parsedQueryParams,
      outgoing: {
        url: imageResponse.request.res.responseUrl
      }
    };

    parametersController.create_parameter_set(paramModel)

    res.set(imageResponse.headers)
    res.end(imageResponse.data, 'binary');
  } else {
    res.end(config.prod.targetUrl)
  }
});


module.exports = router;