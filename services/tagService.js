const Service = require('./Service');
const Tag = require('../models/Tag');
const tagNamesByCategory = require('../utils/tags');
const findTagNameCategory = require('../utils/tags/findTagNameCategory');

class TagService extends Service {
  constructor(model) {
    super(model);
    this.get = this.getAllTagNamesWrapper(this.get);
  }

  getAllTagNamesWrapper = get => async (query) => {
    const { namesByCategory } = query;
    let selection = { _id: 'namesByCategory' };

    if (!namesByCategory)
      return await get(query);

    if (Array.isArray(namesByCategory))
      namesByCategory.forEach(category => {
        if (tagNamesByCategory[category])
          selection[category] = tagNamesByCategory[category];
      });
    else if (namesByCategory === 'all')
      selection = { ...selection, ...tagNamesByCategory };
    else
      if (tagNamesByCategory[namesByCategory])
        selection[namesByCategory] = tagNamesByCategory[namesByCategory];
    return {
      status: 200,
      data: [selection]
    };
  }

  create = async (data) => {
    let doc;
    if (data.names) {
      const tagNames = data.names.split(',');
      doc = await this.model.insertMany(tagNames.map(name => {
        const category = findTagNameCategory(name);
        return { 
          name, 
          it: data.it, 
          modelType: data.modelType, 
          category 
        }
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