Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./7.js");
exports.___baseEventTypeDefinition = i.Record({
  eventId: i.Literal(30),
  distributorId: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  versionDate: i.Number.withConstraint(function (e) {
    return e >= 1230764400;
  }),
  websiteId: i.String,
  accountHash: i.String.withConstraint(function (e) {
    return e.length <= 32;
  }),
  referrer: i.String.withConstraint(function (e) {
    return e.length <= 255;
  }),
  event_mapping_version: i.Literal(2)
}).And(i.Partial({
  event_mapping_version: i.Number.withConstraint(function (e) {
    return e >= 1 && e <= 10;
  }),
  sub_partner_id: i.Number.withConstraint(function (e) {
    return e >= 0;
  })
}));
exports.___completeEventTypeDefinition = i.Record({
  eventId: i.Literal(30),
  distributorId: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  versionDate: i.Number.withConstraint(function (e) {
    return e >= 1230764400;
  }),
  websiteId: i.String,
  accountHash: i.String.withConstraint(function (e) {
    return e.length <= 32;
  }),
  referrer: i.String.withConstraint(function (e) {
    return e.length <= 255;
  }),
  event_mapping_version: i.Literal(2),
  gameId: i.Number.withConstraint(function (e) {
    return e >= 1 && e <= 100;
  }),
  networkId: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 1000;
  }),
  lang: i.String.withConstraint(function (e) {
    return e.length <= 5;
  })
}).And(i.Partial({
  event_mapping_version: i.Number.withConstraint(function (e) {
    return e >= 1 && e <= 10;
  }),
  sub_partner_id: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  zoneId: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 1000;
  })
}));
exports.validateEvent = function (e) {
  return exports.___completeEventTypeDefinition.validate(e);
};
exports.ID = 30;