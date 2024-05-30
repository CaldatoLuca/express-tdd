const fs = require("fs");

class Model {
  constructor(jsonFileName) {
    this.jsonFileName = jsonFileName;
  }

  read() {
    const data = fs.readFileSync(this.jsonFileName);
    return JSON.parse(data);
  }

  add(item) {
    const data = this.read();
    data.push(item);
    return data;
  }
}

module.exports = Model;
