Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./7.js");
exports.___baseEventTypeDefinition = i.Record({
  eventId: i.Literal(8),
  partnerId: i.Number,
  creative: i.Number,
  lp: i.Number,
  aid: i.Number,
  accountHash: i.String.withConstraint(function (e) {
    return e.length <= 256;
  }),
  event_mapping_version: i.Literal(2)
}).And(i.Partial({
  client_timestamp: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  referrer: i.String.withConstraint(function (e) {
    return e.length <= 256;
  }),
  placement: i.String.withConstraint(function (e) {
    return e.length <= 100;
  }),
  keyword: i.String.withConstraint(function (e) {
    return e.length <= 150;
  }),
  network: i.String.withConstraint(function (e) {
    return e.length <= 1;
  }),
  cid: i.String.withConstraint(function (e) {
    return e.length <= 25;
  }),
  tid: i.String.withConstraint(function (e) {
    return e.length <= 25;
  }),
  camp: i.Number,
  adgr: i.Number,
  matchtype: i.String.withConstraint(function (e) {
    return e.length <= 1;
  }),
  journeyHash: i.Number
}));
exports.___completeEventTypeDefinition = i.Record({
  eventId: i.Literal(8),
  partnerId: i.Number,
  creative: i.Number,
  lp: i.Number,
  aid: i.Number,
  accountHash: i.String.withConstraint(function (e) {
    return e.length <= 256;
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
  client_timestamp: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  referrer: i.String.withConstraint(function (e) {
    return e.length <= 256;
  }),
  placement: i.String.withConstraint(function (e) {
    return e.length <= 100;
  }),
  keyword: i.String.withConstraint(function (e) {
    return e.length <= 150;
  }),
  network: i.String.withConstraint(function (e) {
    return e.length <= 1;
  }),
  cid: i.String.withConstraint(function (e) {
    return e.length <= 25;
  }),
  tid: i.String.withConstraint(function (e) {
    return e.length <= 25;
  }),
  camp: i.Number,
  adgr: i.Number,
  matchtype: i.String.withConstraint(function (e) {
    return e.length <= 1;
  }),
  journeyHash: i.Number,
  zoneId: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 1000;
  })
}));
exports.validateEvent = function (e) {
  return exports.___completeEventTypeDefinition.validate(e);
};
exports.ID = 8;