Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./7.js");
exports.___baseEventTypeDefinition = i.Record({
  eventId: i.Literal(18),
  playerId: i.Number.withConstraint(function (e) {
    return e >= 1;
  }),
  hasBeenGuest: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 1;
  }),
  timezone: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 255;
  }),
  event_mapping_version: i.Literal(2)
}).And(i.Partial({
  distributorId: i.Number,
  partnerId: i.Number,
  creative: i.Number,
  accountHash: i.String,
  lp: i.Number,
  aid: i.Number,
  email: i.String,
  referrer: i.String,
  placement: i.String,
  keyword: i.String,
  googleNetwork: i.String,
  cid: i.String,
  tid: i.String,
  camp: i.Number,
  adgr: i.Number,
  matchtype: i.String.withConstraint(function (e) {
    return e.length <= 1;
  }),
  name: i.String
}));
exports.___completeEventTypeDefinition = i.Record({
  eventId: i.Literal(18),
  playerId: i.Number.withConstraint(function (e) {
    return e >= 1;
  }),
  hasBeenGuest: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 1;
  }),
  timezone: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 255;
  }),
  event_mapping_version: i.Literal(2),
  gameId: i.Number.withConstraint(function (e) {
    return e >= 1 && e <= 100;
  }),
  networkId: i.Number.withConstraint(function (e) {
    return e >= 1 && e <= 1000;
  }),
  instanceId: i.Number.withConstraint(function (e) {
    return e >= 1 && e <= 1000;
  })
}).And(i.Partial({
  distributorId: i.Number,
  partnerId: i.Number,
  creative: i.Number,
  accountHash: i.String,
  lp: i.Number,
  aid: i.Number,
  email: i.String,
  referrer: i.String,
  placement: i.String,
  keyword: i.String,
  googleNetwork: i.String,
  cid: i.String,
  tid: i.String,
  camp: i.Number,
  adgr: i.Number,
  matchtype: i.String.withConstraint(function (e) {
    return e.length <= 1;
  }),
  name: i.String,
  zoneId: i.Number,
  lang: i.String
}));
exports.validateEvent = function (e) {
  return exports.___completeEventTypeDefinition.validate(e);
};
exports.ID = 18;