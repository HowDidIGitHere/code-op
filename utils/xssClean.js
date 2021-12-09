const { clean } = require('xss-clean/lib/xss');

module.exports = function xssClean({ allowlist }) {
  return function (req, res, next) {    
    const allowedReqData = getAllowedData(req, allowlist);
    if (req.body) req.body = (0, clean)(req.body);
    if (req.query) req.query = (0, clean)(req.query);
    if (req.params) req.params = (0, clean)(req.params);
    restoreAllowedData(req, allowedReqData);
    next();
  }
}

function getAllowedData(req, allowlist) {
  const { body, query, params } = allowlist;
  const allowedReqData = {
    body: {},
    query: {},
    params: {}
  };

  if (body)
    for (const field of body)
      allowedReqData.body[field] = req.body[field];
  if (query)
    for (const field of query)
      allowedReqData.query[field] = req.query[field];
  if (params)
    for (const field of params)
      allowedReqData.params[field] = req.params[field];

  return allowedReqData;
}

function restoreAllowedData(req, allowedReqData) {
  for (const reqDataField in allowedReqData)
    for (const field in allowedReqData[reqDataField])
      req[reqDataField][field] = allowedReqData[reqDataField][field];
}