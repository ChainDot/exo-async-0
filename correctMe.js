const fsPromises = require("fs/promises");

const correctMe = async () => {
  try {
    let txt1 = await fsPromises.readFile("hello.txt", "utf-8");
    console.log(txt1);
  } catch (e) {
    console.log(e.message);
  }
  console.log;
};

correctMe();
