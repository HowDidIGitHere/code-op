// Npm modules
const mongoose = require('mongoose');

// Local modules

class Service {
  constructor(model) {
    this.model = model;
  }

  get = async (query) => {
    console.log(query);
    let { fields, skip, limit, sort, groupBy, fieldSets } = query; 

    fields = fields ? fields.join(' ') : '-__v';
    skip = skip ? Number(skip) : 0;
    limit = limit ? Number(limit) : 10;
    sort = sort ? sort.join(' ') : '-createdAt';

    delete query.fields;
    delete query.skip;
    delete query.limit;
    delete query.sort;

    if (groupBy) {
      var docs = await this.model
        .aggregate()
        .group({
          _id: Array.isArray(groupBy) ? groupBy.reduce((acc, field) => { 
            acc[field] = `$${field}`; 
            return acc; 
          }, {}) : `$${groupBy}`,
          ...(fieldSets && Array.isArray(fieldSets) ? fieldSets.reduce((acc, field) => { 
              console.log('in reducer');
              acc[`${field}s`] = { $addToSet: `$${field}` }; 
              return acc; 
          }, {}) : { $addToSet: `$${fieldSets}` })
        });
        console.log(docs);
    } else {
      var docs = await this.model
        .find(query)
        .select(fields)
        .skip(skip)
        .limit(limit)
        .sort(sort)
    }
    const total = docs.length;

    return {
      error: false,
      statusCode: 200,
      data: docs,
      total
    };
  }

  getSingle = async (id) => {
    const doc = await this.model.findOne({ _id: id });
    
    return {
      error: false,
      statusCode: 200,
      doc
    };
  }

   create = async (data) => {
    const doc = await this.model.create(data);
    if (doc)
      return {
        error: false,
        status: 201,
        doc
      };
  }

  update = async (id, data) => {
    let doc = await this.model.findByIdAndUpdate(id, data, { new: true });
    return {
      error: false,
      statusCode: 202,
      doc
    };
  }

  delete = async (id) => {
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
  }
}

module.exports = Service;



















// EOF
