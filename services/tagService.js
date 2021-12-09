const Service = require('./Service');
const Tag = require('../models/Tag');

class TagService extends Service {
  constructor(model) {
    super(model);
  }

  async create(data) {
    console.log(data);
    let doc;
    if (data.names) {
      docs = {}
      // const names = data.names.split(',');
      // doc = await this.model.insertMany(names.map(name => {
      //   return { name, it: data.it, modelType: data.modelType }
      // }));
    } else {
      doc = await this.model.create(data);
    }

    return {
      error: false,
      status: 201,
      doc,
    };
  }
}

module.exports = new TagService(Tag);