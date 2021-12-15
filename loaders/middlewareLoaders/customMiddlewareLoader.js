const xss = require("../../utils/xssClean");

module.exports = (app) => {
  // Sanitize data against XSS
  app.use(xss({ 
    allowlist: { body: ['content'] }
  }));

  // Convert query array values to array object
  app.use(function(req, res, next) {
    for (let key in req.query)
      if (/\w+,\w*/.test(req.query[key]))
        req.query[key] = req.query[key].split(',');
    next();
  });
  
  return app;
}