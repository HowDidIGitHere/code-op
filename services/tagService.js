const Service = require('./Service');
const Tag = require('../models/Tag');
const tagNames = require('../utils/tags');

class TagService extends Service {
  constructor(model) {
    super(model);
    this.get = this.getAllTagNamesWrapper(this.get);
  }

  getAllTagNamesWrapper = get => async (query) => {
    const { categories } = query;
    let selection = { _id: 'tags' };

    if (!categories)
      return await get(query);

    if (Array.isArray(categories))
      categories.forEach(category => {
        if (tagNames[category])
          selection[category] = tagNames[category];
      });
    else if (categories === 'all')
      selection = { ...selection, ...tagNames };
    console.log(selection);
    return {
      status: 200,
      data: [selection]
    };
  }

  create = async (data) => {
    let doc;
    if (data.names) {
      const names = data.names.split(',');
      doc = await this.model.insertMany(names.map(name => {
        return { name, it: data.it, modelType: data.modelType }
      }));
    } else {
      doc = await this.model.create(data);
    }

    return {
      status: 201,
      doc
    };
  }
}

module.exports = new TagService(Tag);