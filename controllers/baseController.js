const { catchAsync } = require('../utils')

class Controller {
  constructor(service) {
    this.service = service;
  }

  get = catchAsync(async (req, res) => {

    // PROBABLY NEED TO REFACTOR
    let { collaborators } = req.query;
    let response;
    if (collaborators) {
      collaborators = collaborators.split(",")
      response = await this.service.get({ "_id": { $in:col } })
    } else {
      response = await this.service.get(req.query)
    }
    
    let { data } = response;
    let resObj = {};
    for (let i = 0; i < data.length; i++) {
      resObj[data[i]._id] = data[i];
    };
    return res.status(200).send(resObj)
  });

  getSingle = catchAsync(async (req, res) => {
    const { id } = req.params;
    let response = await this.service.getSingle(id);
    let { doc } = response;
    return res.status(response.statusCode).send(doc);
  });

  create = catchAsync(async (req, res) => {
    let response = await this.service.create(req.body);
    if (response.error) {
      return res.status(response.statusCode).send(response);
    }
    let { doc } = response;
    return res.status(201).send(doc);
  });

  update = catchAsync(async (req, res) => {
    const { id } = req.params;
    let response = await this.service.update(id, req.body);
    let { doc } = response;
    return res.status(response.statusCode).send(doc);
  });

  delete = catchAsync(async (req, res) => {
    const { id } = req.params;

    let response = await this.service.delete(id);
    return res.status(response.statusCode).send(response);
  });
}

module.exports = Controller;