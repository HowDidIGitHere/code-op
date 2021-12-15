module.exports = (app) => {
  // Might as well keep in
    // Convert query array values to array object
  app.use(function(req, res, next) {
    for (let key in req.query)
      if (/\w+,\w*/.test(req.query[key]))
        req.query[key] = req.query[key].split(',');
    next();
  });
  
  return app;
}