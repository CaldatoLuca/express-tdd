const fs = require("fs");
class Model {
  constructor(jsonFileName) {
    this.jsonFileName = jsonFileName;
  }

  read() {
    return fs.readFileSync(this.jsonFileName);
  }
}

module.exports = Model;
