module.exports = callback => {
  return (req, res, nex) => {
    callback(req, res, next).catch(next);
  };
};