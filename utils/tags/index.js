const fs = require('fs');

const tags = {
  platform: fs.readFileSync(__dirname + '/platformTags.csv', 'utf8').split(/[,\n]/),
  position: fs.readFileSync(__dirname + '/positionTags.csv', 'utf8').split(/[,\n]/),
  software: fs.readFileSync(__dirname + '/softwareTags.csv', 'utf8').split(/[,\n]/)
}

module.exports = tags;
