const { totalAmount, p_details } = require("./logic");

const tripStart = (e, cardObject, rent_price, total, f_trip) => {
  if (cardObject[e[1]] >= rent_price[e[2]]) {
    startNotPrice(e, cardObject, rent_price, total, f_trip);
  } else {
    startPrice(e, cardObject, rent_price, total, f_trip);
  }
};

const startPrice = (e, cardObject, rent_price, total, f_trip) => {
  const recharge = rent_price[e[2]] - cardObject[e[1]];
  const tax = recharge * 0.02;
  totalAmount(e, total, rent_price[e[2]], tax);
  p_details(e, total);
  cardObject[e[1]] = 0;
  f_trip.push(e[1]);
};

const startNotPrice = (e, cardObject, rent_price, total, f_trip) => {
  totalAmount(e, total, rent_price[e[2]]);
  p_details(e, total);
  cardObject[e[1]] = cardObject[e[1]] - rent_price[e[2]];
  f_trip.push(e[1]);
};

module.exports = {
  tripStart,
};
