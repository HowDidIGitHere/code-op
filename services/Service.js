// Npm modules
const mongoose = require('mongoose');

// Local modules

class Service {
  constructor(model) {
    this.model = model;
    this.get = this.get.bind(this);
    this.getSingle = this.getSingle.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async get(query) {
    console.log(query)
    let { fields, skip, limit, sort, group } = query; 

    fields = fields ? fields.join(' ') : '-__v';
    skip = skip ? Number(skip) : 0;
    limit = limit ? Number(limit) : 10;
    sort = sort ? sort.join(' ') : '-createdAt';

    delete query.fields;
    delete query.skip;
    delete query.limit;
    delete query.sort;

    try {
      // if (group) {
      //   var docs = await this.model
      //     .aggregate()
      //     .group(group && {[group.field]: group.value})
      // } else {
      // }
      const docs = await this.model
        .find(query)
        .select(fields)
        .skip(skip)
        .limit(limit)
        .sort(sort)
      const total = docs.length;

      return {
        error: false,
        statusCode: 200,
        data: docs,
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

  async getSingle(id) {
    try {
      const doc = await this.model.findOne({ _id: id });
      
      return {
        error: false,
        statusCode: 200,
        doc
      };
    } catch (errors) {
      console.log("error", errors);
      return {
        error: true,
        statusCode: 500,
        errors
      }
    }
  }

  async create(data) {
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
