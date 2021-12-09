console.log(process.env.MONGO_URI);

module.exports = {
  mongoUri: process.env.MONGO_URI,
  secretOrKey: process.env.SECRET_OR_KEY
}