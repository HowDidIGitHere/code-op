// For use with routers/middleware only
module.exports = callback => {
  return (req, res, next) => {
    callback(req, res, next).catch(errors => {
      console.log('errors caught');
      next(errors)
    });
  };
};