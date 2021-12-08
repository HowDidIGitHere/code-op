const Service = require("./Service")

class TagService extends Service {
  constructor(model) {
    super(model);
  }

  async create(data) {
    try {
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
        error: false,
        status: 201,
        doc,
      };
    } catch (error) {
      return {
        error: true,
        statusCode: 500,
        message: error.errmsg || "Not able to create doc",
        errors: error.errors
      };
    }
  }
}

module.exports = TagService;