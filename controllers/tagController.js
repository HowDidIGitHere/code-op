const Controller = require("./baseController");
const TagService = require("../services/TagService");
const Tag = require("../models/Tag");

const tagService = new TagService(new Tag().getInstance());

class TagController extends Controller {
  constructor(service) {
    super(service);
  }
}

module.exports = new TagController(tagService);