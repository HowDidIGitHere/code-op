const Service = require("./Service")

class TagService extends Service {
  constructor(model) {
    super(model);
  }

  async create(data) {
    try {
      let doc;
      if (data.names) {
        doc = this.model.insertMany()
      } else {
        const doc = await this.model.create(data);
      }
      if (doc)
        return {
          error: false,
          status: 201,
          doc
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