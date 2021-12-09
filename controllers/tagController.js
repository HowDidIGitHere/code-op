const Controller = require("./baseController");
const tagService = require("../services/tagService");

class TagController extends Controller {
  constructor(service) {
    super(service);
  }
}

module.exports = new TagController(tagService);