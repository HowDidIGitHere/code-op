const fs = require('fs');

const tags = {
  platform: fs.readFileSync(__dirname + '/platformTags.csv', 'utf8').split(','),
  position: fs.readFileSync(__dirname + '/positionTags.csv', 'utf8').split(','),
  software: fs.readFileSync(__dirname + '/softwareTags.csv', 'utf8').split(',')
}

module.exports = tags;
