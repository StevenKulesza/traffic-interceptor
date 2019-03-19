const express = require('express');
const router = express.Router();
const url = require('url');
const config = require('../config');
const utils = require('../utils');

const parametersController = require('../controllers/parameters.controller')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Interceptor' });
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
        .replace(/=/g, '":"') 
      + '"}')
      
      paramModel = {
        name: parsedQueryParams.at_property,
        parameters: parsedQueryParams
      };

      parametersController.create_parameter_set(paramModel)

      // console.log('PARSED PARAMS: ', parsedQueryParams)
      // console.log('URL: ', config.prod.targetUrl + '?' + queryParams)

      // make get call to target
      imageResponse = await utils.getBase64(config.prod.targetUrl + '?' + queryParams);

      res.end(imageResponse, 'binary');
  } else {
      console.log('no params');
      res.end(config.prod.targetUrl)
  }
  });


module.exports = router;