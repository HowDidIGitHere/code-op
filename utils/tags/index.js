const fs = require('fs');

const tags = {
  skillTags: fs.readFileSync(__dirname + '/platformTags.csv', 'utf8').split(','),
  languageTags: fs.readFileSync(__dirname + '/positionTags.csv', 'utf8').split(','),
  softwareTag: fs.readFileSync(__dirname + '/softwareTags.csv', 'utf8').split(',')
}

console.log(tags);

module.exports = tags;
