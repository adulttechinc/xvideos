const base = require('../../base');
const parseResponse = require('./parseResponse');
const axios = require('axios');

const PATH = '/best';

const best = async ({ year, month, page = 1 } = {}) => {
  if (!year) year = new Date().getFullYear();
  year = String(year);

  if (!month) month = new Date().getMonth() + 1; // Date.getMonth is zero based
  month = String(month).padStart(2, '0');

  const url = `${base.BASE_URL}${PATH}/${year}-${month}${((page < 1 || page > Number.MAX_SAFE_INTEGER) ? '' : '/' + page)}`;
  
  return parseResponse(page, await axios({
  	method: 'get',
  	url: url
  }));
};

module.exports = best;
