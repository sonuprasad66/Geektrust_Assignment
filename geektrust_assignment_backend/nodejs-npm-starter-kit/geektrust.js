const fs = require("fs");
const { startResult } = require("./initial");
const filename = process.argv[2];

const InputLines = (inputLines) => {
  for (let i = 0; i < inputLines.length; i++) {
    inputLines[i] = inputLines[i].trim().split(" ");
  }
};

fs.readFile(filename, "utf8", (err, data) => {
  if (err) throw err;
  var inputLines = data.toString().split("\n");
  // Add your code here to process input commands

  let result = {
    CENTRAL: { total: 0, discount: 0, summery: {} },
    AIRPORT: { total: 0, discount: 0, summery: {} },
  };

  let cardObject = {};
  let f_trip = [];

  const rent_price = {
    ADULT: 200,
    SENIOR_CITIZEN: 100,
    KID: 50,
  };

  InputLines(inputLines);

  startResult(inputLines, cardObject, rent_price, result, f_trip);
});
