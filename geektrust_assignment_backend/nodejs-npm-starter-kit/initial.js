const { tripReturn } = require("./tripReturn");
const { tripStart } = require("./tripStart");

const defaultResult = (e, cardObject, rent_price, result, f_trip) => {
  if (f_trip.indexOf(e[1]) != -1) {
    tripReturn(e, cardObject, rent_price, result, f_trip);
  } else {
    tripStart(e, cardObject, rent_price, result, f_trip);
  }
};

const startResult = (inputLines, cardObject, rent_price, result, f_trip) => {
  inputLines.forEach((e) => {
    if (e[0] == "BALANCE") {
      cardObject[e[1]] = e[2];
    } else if (e[0] == "CHECK_IN") {
      defaultResult(e, cardObject, rent_price, result, f_trip);
    } else if (e[0] == "PRINT_SUMMARY") {
      printResult(result);
    }
  });
};

const printResult = (total) => {
  for (let key in total) {
    let sortable = total[key]["summery"];
    let entries = Object.entries(sortable);
    let sorted = entries.sort((a, b) => {
      if (a[1] > b[1]) return -1;
      else if (a[1] < b[1]) return 1;
      else {
        if (a[0] > b[0]) return 1;
        else if (a[0] < b[0]) return -1;
      }
    });
    console.log(
      "TOTAL_COLLECTION",
      key,
      total[key]["total"],
      total[key]["discount"]
    );
    console.log("PASSENGER_TYPE_SUMMARY");
    sorted.forEach((e) => {
      console.log(e[0], e[1]);
    });
  }
};

module.exports = {
  startResult,
  printResult,
};
