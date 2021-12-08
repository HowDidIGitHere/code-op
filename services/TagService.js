const Service = require("./Service")

class TagService extends Service {
  constructor(model) {
    super(model);
  }

  async create(data) {
    try {
      if (data.names) {
        const names = data.names.split(' ');
        var docs = this.model.insertMany(names.map(name => {
          return { name, it: data.it, modelType: data.modelType }
        }));
      } else {
        var doc = await this.model.create(data);
      }

      if (doc)
        return {
          error: false,
          status: 201,
          ...(doc && { doc }),
          ...(docs ** { docs })
        };
    } catch (error) {
      console.log("error", error);
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