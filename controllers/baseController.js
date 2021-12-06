class Controller {
  constructor(service) {
    this.service = service;
  }

  get = async (req, res) => {
    return res.status(200).send(await this.service.get(req.query));
  };

  getSingle = async (req, res) => {
    const { id } = req.params;

    let response = await this.service.getSingle(id);
    return res.status(response.statusCode).send(response);
  };

  create = async (req, res) => {
    let response = await this.service.create(req.body);
    if (response.error) {
      return res.status(response.statusCode).send(response);
    }
    return res.status(201).send(response);
  };

  update = async (req, res) => {
    const { id } = req.params;

    let response = await this.service.update(id, req.body);
    return res.status(response.statusCode).send(response);
  };

  delete = async (req, res) => {
    const { id } = req.params;

    let response = await this.service.delete(id);
    return res.status(response.statusCode).send(response);
  };
}