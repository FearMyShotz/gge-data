Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./7.js");
exports.___baseEventTypeDefinition = i.Record({
  eventId: i.Literal(41),
  accountHash: i.String.withConstraint(function (e) {
    return e.length <= 30;
  }),
  clientTimeZone: i.Number.withConstraint(function (e) {
    return e >= -200 && e <= 200;
  }),
  deviceId: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 50;
  }),
  websiteId: i.String,
  storeId: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 50;
  }),
  clientCountryCode: i.String.withConstraint(function (e) {
    return e.length <= 10;
  }),
  browserLang: i.String.withConstraint(function (e) {
    return e.length <= 15;
  }),
  event_mapping_version: i.Literal(2)
}).And(i.Partial({
  partnerId: i.Number,
  creative: i.Number,
  placement: i.String.withConstraint(function (e) {
    return e.length <= 100;
  }),
  keyword: i.String.withConstraint(function (e) {
    return e.length <= 150;
  }),
  googleNetwork: i.String.withConstraint(function (e) {
    return e.length <= 1;
  }),
  lp: i.Number,
  cid: i.String.withConstraint(function (e) {
    return e.length <= 25;
  }),
  tid: i.String.withConstraint(function (e) {
    return e.length <= 25;
  }),
  aid: i.Number,
  camp: i.Number,
  adgr: i.Number,
  matchtype: i.String.withConstraint(function (e) {
    return e.length <= 1;
  }),
  referrer: i.String.withConstraint(function (e) {
    return e.length <= 100;
  }),
  geoIpRequestTime: i.Number,
  countryDetectionFactor: i.Number
}));
exports.___completeEventTypeDefinition = i.Record({
  eventId: i.Literal(41),
  accountHash: i.String.withConstraint(function (e) {
    return e.length <= 30;
  }),
  clientTimeZone: i.Number.withConstraint(function (e) {
    return e >= -200 && e <= 200;
  }),
  deviceId: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 50;
  }),
  websiteId: i.String,
  storeId: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 50;
  }),
  clientCountryCode: i.String.withConstraint(function (e) {
    return e.length <= 10;
  }),
  browserLang: i.String.withConstraint(function (e) {
    return e.length <= 15;
  }),
  event_mapping_version: i.Literal(2),
  gameId: i.Number.withConstraint(function (e) {
    return e >= 1 && e <= 100;
  }),
  networkId: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 1000;
  }),
  instanceId: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 1000;
  }),
  lang: i.String.withConstraint(function (e) {
    return e.length <= 5;
  })
}).And(i.Partial({
  partnerId: i.Number,
  creative: i.Number,
  placement: i.String.withConstraint(function (e) {
    return e.length <= 100;
  }),
  keyword: i.String.withConstraint(function (e) {
    return e.length <= 150;
  }),
  googleNetwork: i.String.withConstraint(function (e) {
    return e.length <= 1;
  }),
  lp: i.Number,
  cid: i.String.withConstraint(function (e) {
    return e.length <= 25;
  }),
  tid: i.String.withConstraint(function (e) {
    return e.length <= 25;
  }),
  aid: i.Number,
  camp: i.Number,
  adgr: i.Number,
  matchtype: i.String.withConstraint(function (e) {
    return e.length <= 1;
  }),
  referrer: i.String.withConstraint(function (e) {
    return e.length <= 100;
  }),
  geoIpRequestTime: i.Number,
  countryDetectionFactor: i.Number,
  zoneId: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 1000;
  })
}));
exports.validateEvent = function (e) {
  return exports.___completeEventTypeDefinition.validate(e);
};
exports.ID = 41;