const axios = require("axios");
const fsPromises = require("fs/promises");
const input = process.argv[2];

const wget = async () => {
  try {
    const api = await axios.get(input);
    await fsPromises.writeFile("index.html", api.data);
    console.log(api.headers);
  } catch (e) {
    console.log(e.message);
  }
};

wget();
