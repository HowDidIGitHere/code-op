const Controller = require("./baseController");
const tagService = require("../services/TagService");

class TagController extends Controller {
  constructor(service) {
    super(service);
  }
}

module.exports = new TagController(tagService);