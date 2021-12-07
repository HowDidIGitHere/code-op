class Controller {
  constructor(service) {
    this.service = service;
    this.get = this.get.bind(this);
    this.getSingle = this.getSingle.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async get(req, res) {
    return res.status(200).send(await this.service.get(req.query));
  };

  async getSingle(req, res) {
    const { id } = req.params;

    let response = await this.service.getSingle(id);
    return res.status(response.statusCode).send(response);
  };

  async create(req, res) {
    let response = await this.service.create(req.body);
    if (response.error) {
      return res.status(response.statusCode).send(response);
    }
    return res.status(201).send(response);
  };

  async update(req, res) {
    const { id } = req.params;

    let response = await this.service.update(id, req.body);
    return res.status(response.statusCode).send(response);
  };

  async delete(req, res) {
    const { id } = req.params;

    let response = await this.service.delete(id);
    return res.status(response.statusCode).send(response);
  };
}

module.exports = Controller;