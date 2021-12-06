// Npm modules
const mongoose = require('mongoose');

// Local modules
const {
  bindFunctions,
  ModelProbe,
} = require('./../utils');

class Service {
  constructor(model) {
    this.model = model;
    this.modelProbe = new ModelProbe(model);
    bindFunctions(this); // Bind functions for inheritance
  }

  async get(query) {
    let { fields, skip, limit, sort } = query; 
    let data = {};

    fields = fields ? fields.split(','.join(' ')) : '-__v';
    skip = skip ? Number(skip) : 0;
    limit = limit ? Number(limit) : 10;
    sort = sort ? sort.split(',').join(' ') : '-createdAt';

    delete query.fields;
    delete query.skip;
    delete query.limit;
    delete query.sort;

    // If _id specified, convert to ObjectId (this will result in one doc returned)
    if (query._id) {
      try {
        query._id = new mongoose.mongo.ObjectId(query._id);
      } catch (error) {
        console.log("Not able to generate mongoose id with content", query._id);
      }
    }

    try {
      const docs = await this.model
        .find(query)
        .select(fields)
        .skip(skip)
        .limit(limit)
        .sort(sort);
      const total = await this.model.count();

      // Save docs to data with appropriate name
      if(total > 1)
        data[this.modelProbe.modelNamePlural()] = docs;
      else
        data[this.modelProbe.modelNameSingular()] = docs;

      return {
        error: false,
        statusCode: 200,
        data,
        total
      };
    } catch (errors) {
      return {
        error: true,
        statusCode: 500,
        errors
      };
    }
  }

  async insert(data) {
    try {
      const doc = await this.model.create(data);
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

  async update(id, data) {
    try {
      let doc = await this.model.findByIdAndUpdate(id, data, { new: true });
      return {
        error: false,
        statusCode: 202,
        doc
      };
    } catch (error) {
      return {
        error: error || true,
        statusCode: 500
      };
    }
  }

  async delete(id) {
    try {
      let doc = await this.model.findByIdAndDelete(id);
      if (!doc)
        return {
          error: true,
          statusCode: 404,
          message: "doc not found"
        };

      return {
        error: false,
        deleted: true,
        statusCode: 202,
        doc
      };
    } catch (error) {
      return {
        error: error || true,
        statusCode: 500
      };
    }
  }
}

module.exports = Service;



















// EOF
