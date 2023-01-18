const fs = require("fs");

const filename = process.argv[2];

fs.readFile(filename, "utf8", (err, data) => {
  if (err) throw err;
  var inputLines = data.toString().split("\n");

  for (let i = 0; i < inputLines.length; i++) {
    inputLines[i] = inputLines[i].trim().split(" ");
  }

  let cardObject = {};

  let result = {
    CENTRAL: { total: 0, discount: 0, summery: {} },
    AIRPORT: { total: 0, discount: 0, summery: {} },
  };

  let f_trip = [];

  inputLines.forEach((elem) => {
    if (elem[0] == "BALANCE") {
      cardObject[elem[1]] = elem[2];
    } else if (elem[0] == "CHECK_IN") {
      // function for the ADULT

      if (elem[2] == "ADULT") {
        if (f_trip.indexOf(elem[1]) != -1) {
          if (cardObject[elem[1]] >= 100) {
            result[elem[3]]["total"] = result[elem[3]]["total"] + 100;
            result[elem[3]]["discount"] = result[elem[3]]["discount"] + 100;

            result[elem[3]]["summery"][elem[2]] == undefined
              ? (result[elem[3]]["summery"][elem[2]] = 1)
              : result[elem[3]]["summery"][elem[2]]++;

            cardObject[elem[1]] = cardObject[elem[1]] - 100;
            f_trip.splice(f_trip.indexOf(elem[1]), 1);
          } else {
            let amount = 100 - cardObject[elem[1]];
            let tax = amount * 0.02;

            result[elem[3]]["total"] = result[elem[3]]["total"] + 100 + tax;
            result[elem[3]]["discount"] = result[elem[3]]["discount"] + 100;

            result[elem[3]]["summery"][elem[2]] == undefined
              ? (result[elem[3]]["summery"][elem[2]] = 1)
              : result[elem[3]]["summery"][elem[2]]++;

            cardObject[elem[1]] = 0;
            f_trip.splice(f_trip.indexOf(elem[1]), 1);
          }
        } else {
          if (cardObject[elem[1]] >= 200) {
            result[elem[3]]["total"] = result[elem[3]]["total"] + 200;

            result[elem[3]]["summery"][elem[2]] == undefined
              ? (result[elem[3]]["summery"][elem[2]] = 1)
              : result[elem[3]]["summery"][elem[2]]++;

            cardObject[elem[1]] = cardObject[elem[1]] - 200;
            f_trip.push(elem[1]);
          } else {
            let amount = 200 - cardObject[elem[1]];
            let tax = amount * 0.02;

            result[elem[3]]["total"] = result[elem[3]]["total"] + 200 + tax;

            result[elem[3]]["summery"][elem[2]] == undefined
              ? (result[elem[3]]["summery"][elem[2]] = 1)
              : result[elem[3]]["summery"][elem[2]]++;

            cardObject[elem[1]] = 0;
            f_trip.push(elem[1]);
          }
        }
      }

      // function for the SENIOR_CITIZEN
      else if (elem[2] == "SENIOR_CITIZEN") {
        if (f_trip.indexOf(elem[1]) != -1) {
          if (cardObject[elem[1]] >= 50) {
            result[elem[3]]["total"] = result[elem[3]]["total"] + 50;
            result[elem[3]]["discount"] = result[elem[3]]["discount"] + 50;

            result[elem[3]]["summery"][elem[2]] == undefined
              ? (result[elem[3]]["summery"][elem[2]] = 1)
              : result[elem[3]]["summery"][elem[2]]++;

            cardObject[elem[1]] = cardObject[elem[1]] - 50;
            f_trip.splice(f_trip.indexOf(elem[1]), 1);
          } else {
            let amount = 50 - cardObject[elem[1]];
            let tax = amount * 0.02;

            result[elem[3]]["total"] = result[elem[3]]["total"] + 50 + tax;
            result[elem[3]]["discount"] = result[elem[3]]["discount"] + 50;

            result[elem[3]]["summery"][elem[2]] == undefined
              ? (result[elem[3]]["summery"][elem[2]] = 1)
              : result[elem[3]]["summery"][elem[2]]++;

            cardObject[elem[1]] = 0;
            f_trip.splice(f_trip.indexOf(elem[1]), 1);
          }
        } else {
          if (cardObject[elem[1]] >= 100) {
            result[elem[3]]["total"] = result[elem[3]]["total"] + 100;

            result[elem[3]]["summery"][elem[2]] == undefined
              ? (result[elem[3]]["summery"][elem[2]] = 1)
              : result[elem[3]]["summery"][elem[2]]++;

            cardObject[elem[1]] = cardObject[elem[1]] - 100;
            f_trip.push(elem[1]);
          } else {
            let amount = 100 - cardObject[elem[1]];
            let tax = amount * 0.02;

            result[elem[3]]["total"] = result[elem[3]]["total"] + 100 + tax;

            result[elem[3]]["summery"][elem[2]] == undefined
              ? (result[elem[3]]["summery"][elem[2]] = 1)
              : result[elem[3]]["summery"][elem[2]]++;

            cardObject[elem[1]] = 0;
            f_trip.push(elem[1]);
          }
        }
      }

      // function for the KID
      else if (elem[2] == "KID") {
        if (f_trip.indexOf(elem[1]) != -1) {
          if (cardObject[elem[1]] >= 25) {
            result[elem[3]]["total"] = result[elem[3]]["total"] + 25;
            result[elem[3]]["discount"] = result[elem[3]]["discount"] + 25;

            result[elem[3]]["summery"][elem[2]] == undefined
              ? (result[elem[3]]["summery"][elem[2]] = 1)
              : result[elem[3]]["summery"][elem[2]]++;

            cardObject[elem[1]] = cardObject[elem[1]] - 25;
            f_trip.splice(f_trip.indexOf(elem[1]), 1);
          } else {
            let amount = 25 - cardObject[elem[1]];
            let tax = amount * 0.02;

            result[elem[3]]["total"] = result[elem[3]]["total"] + 25 + tax;
            result[elem[3]]["discount"] = result[elem[3]]["discount"] + 25;

            result[elem[3]]["summery"][elem[2]] == undefined
              ? (result[elem[3]]["summery"][elem[2]] = 1)
              : result[elem[3]]["summery"][elem[2]]++;

            cardObject[elem[1]] = 0;
            f_trip.splice(f_trip.indexOf(elem[1]), 1);
          }
        } else {
          if (cardObject[elem[1]] >= 50) {
            result[elem[3]]["total"] = result[elem[3]]["total"] + 50;

            result[elem[3]]["summery"][elem[2]] == undefined
              ? (result[elem[3]]["summery"][elem[2]] = 1)
              : result[elem[3]]["summery"][elem[2]]++;

            cardObject[elem[1]] = cardObject[elem[1]] - 50;
            f_trip.push(elem[1]);
          } else {
            let amount = 50 - cardObject[elem[1]];
            let tax = amount * 0.02;

            result[elem[3]]["total"] = result[elem[3]]["total"] + 50 + tax;

            result[elem[3]]["summery"][elem[2]] == undefined
              ? (result[elem[3]]["summery"][elem[2]] = 1)
              : result[elem[3]]["summery"][elem[2]]++;

            cardObject[elem[1]] = 0;
            f_trip.push(elem[1]);
          }
        }
      }
    } else if ("PRINT_SUMMARY") {
      for (let x in result) {
        console.log("TOTAL_COLLECTION", x, result[x].total, result[x].discount);
        console.log("PASSENGER_TYPE_SUMMARY");

        let arr = Object.entries(result[x]["summery"]);
        arr.sort((a, b) => {
          if (a[1] > b[1]) {
            return -1;
          } else if (a[1] < b[1]) {
            return 1;
          } else {
            if (a[0] < b[0]) {
              return -1;
            } else {
              return 1;
            }
          }
        });

        for (let i = 0; i < arr.length; i++) {
          console.log(arr[i][0], arr[i][1]);
        }
      }
    }
  });
});
