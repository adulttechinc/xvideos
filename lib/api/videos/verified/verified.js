const base = require('../../base');
const parseResponse = require('./parseResponse');
const axios = require('axios');

const PATH = '/verified/videos';

const verified = async ({ page = 1 } = {}) => {
  const url = base.BASE_URL + ((page < 1 || page > Number.MAX_SAFE_INTEGER) ? '' : PATH + '/' + page);
  return parseResponse(page, await axios({
  	method: 'get',
  	url: url
  }));
};

module.exports = verified;
