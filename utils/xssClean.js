const { clean } = require('xss-clean/lib/xss');

module.exports = function () {
  return function (req, res, next) {
    if (req.body) req.body = (0, clean)(req.body);
    if (req.query) req.query = (0, clean)(req.query);
    if (req.params) req.params = (0, clean)(req.params);

    next();
  };
};