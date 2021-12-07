const Validator = require("validator");
const validText = require("./valid-text");

const validateProjectCreateInput = data => {
  let errors = {};

  data.title = validText(data.title) ? data.title : "";
  data.description = validText(data.description) ? data.description : "";
  data.github = validText(data.github) ? data.github : "";

  if (Validator.isEmpty(data.title)) {
    errors.title = "Title is required";
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = "Description is required";
  }

  if (!Validator.isLength(data.description, { min: 100, max: 200 })) {
    errors.description = "Description length must be between  and  characters";
  }

  if (Validator.isURL(data.github)) {
    errors.title = "Github link must be a proper url";
  }
};

module.exports = {
  validateProjectCreateInput,
  validateProjectUpdateInput
};