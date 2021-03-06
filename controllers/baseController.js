const { catchAsync } = require('../utils')

class Controller {
  constructor(service) {
    this.service = service;
  }

  get = catchAsync(async (req, res) => {
    let response = await this.service.get(req.query)
    let { data } = response;
    let resObj = {};
    for (let i = 0; i < data.length; i++) {
      resObj[data[i]._id] = data[i];
    };
    return res.status(response.status).send(resObj)
  });

  getSingle = catchAsync(async (req, res) => {
    const { id } = req.params;
    let response = await this.service.getSingle(id);
    let { doc } = response;
    return res.status(response.status).send(doc);
  });

  create = catchAsync(async (req, res) => {
    let response = await this.service.create(req.body);
    let { doc } = response;
    return res.status(201).send(doc);
  });

  update = catchAsync(async (req, res) => {
    const { id } = req.params;
    let response = await this.service.update(id, req.body);
    let { doc } = response;
    return res.status(response.status).send(doc);
  });

  delete = catchAsync(async (req, res) => {
    const { id } = req.params;

    let response = await this.service.delete(id);
    return res.status(response.status).send(response);
  });
}

module.exports = Controller;