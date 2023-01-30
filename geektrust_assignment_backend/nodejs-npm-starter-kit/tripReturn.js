const { totalAmount, totalDiscount, p_details } = require("./logic");

const tripReturn = (e, cardObject, rent_price, total, f_trip) => {
  if (cardObject[e[1]] >= rent_price[e[2]] / 2) {
    returnNotPrice(e, cardObject, rent_price, total, f_trip);
  } else {
    returnPrice(e, cardObject, rent_price, total, f_trip);
  }
};

const returnPrice = (e, cardObject, rent_price, total, f_trip) => {
  const recharge = rent_price[e[2]] / 2 - cardObject[e[1]];
  const tax = recharge * 0.02;
  totalAmount(e, total, rent_price[e[2]] / 2, tax);
  totalDiscount(e, total, rent_price);
  p_details(e, total);
  cardObject[e[1]] = 0;
  f_trip.splice(f_trip.indexOf(e[1]), 1);
};

const returnNotPrice = (e, cardObject, rent_price, total, f_trip) => {
  totalAmount(e, total, rent_price[e[2]] / 2);
  totalDiscount(e, total, rent_price);
  p_details(e, total);
  cardObject[e[1]] = cardObject[e[1]] - rent_price[e[2]] / 2;
  f_trip.splice(f_trip.indexOf(e[1]), 1);
};

module.exports = {
  tripReturn,
};
