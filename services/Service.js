// Npm modules
const mongoose = require('mongoose');

// Local modules

class Service {
  constructor(model) {
    this.model = model;
  }

  get = async (query) => {
    let { fields, skip, limit, sort, groupBy, fieldSets } = query; 

    fields = fields ? fields.join(' ') : '-__v';
    skip = skip ? Number(skip) : 0;
    limit = limit ? Number(limit) : 100;
    sort = sort ? sort.join(' ') : '-createdAt';

    delete query.fields;
    delete query.skip;
    delete query.limit;
    delete query.sort;

    if (groupBy) {
      var docs = await this.model
        .aggregate()
        .group(createAggregation({ 
          groupBy, 
          fieldSets 
        }));
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
      status: 200,
      data: docs,
      total
    };
  }

  getSingle = async (id) => {
    const doc = await this.model.findOne({ _id: id });
    
    return {
      status: 200,
      doc
    };
  }

  create = async (data) => {
    const doc = await this.model.create(data);
    if (doc)
    return {
      status: 201,
      doc
    };
  }

  update = async (id, data) => {
    let doc = await this.model.findByIdAndUpdate(id, data, { new: true });
    return {
      status: 202,
      doc
    };
  }

  delete = async (id) => {
    let doc = await this.model.findByIdAndDelete(id);
    if (!doc)
      return {
        status: 404,
        message: "doc not found"
      };

    return {
      deleted: true,
      status: 202,
      doc
    };
  }
}

function createAggregation({ groupBy, fieldSets }) {
  return {
    _id: parseGroupBy(groupBy),
    ...parseFieldSets(fieldSets)
  }
}

function parseGroupBy(groupBy) {
  if (Array.isArray(groupBy))
    return groupBy.reduce((acc, field) => { 
      acc[field] = `$${field}`; 
      return acc; 
    }, {});
  return `$${groupBy}`;
}

function parseFieldSets(fieldSets) {
  if (Array.isArray(fieldSets))
    return fieldSets.reduce((acc, field) => { 
      acc[`${field}s`] = { '$addToSet': `$${field}` }; 
      return acc; 
    }, {});
  return fieldSets ? {[`${fieldSets}s`]: { '$addToSet': `$${fieldSets}` }} : {};
}

module.exports = Service;
