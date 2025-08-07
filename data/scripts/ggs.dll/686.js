Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./7.js");
exports.___baseEventTypeDefinition = i.Record({
  eventId: i.Literal(20),
  playerId: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  customHash: i.String.withConstraint(function (e) {
    return e.length <= 30;
  }),
  testId: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 65535;
  }),
  caseId: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 16777215;
  }),
  accountHash: i.String.withConstraint(function (e) {
    return e.length <= 30;
  }),
  errorCode: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 2;
  }),
  partnerId: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 65535;
  }),
  event_mapping_version: i.Literal(2)
}).And(i.Partial({
  registration_type_id: i.Number.withConstraint(function (e) {
    return e >= 1 && e <= 10;
  }),
  crna: i.String.withConstraint(function (e) {
    return e.length <= 100;
  }),
  countryCode: i.String.withConstraint(function (e) {
    return e.length <= 2;
  }),
  useragent: i.String
}));
exports.___completeEventTypeDefinition = i.Record({
  eventId: i.Literal(20),
  playerId: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  customHash: i.String.withConstraint(function (e) {
    return e.length <= 30;
  }),
  testId: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 65535;
  }),
  caseId: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 16777215;
  }),
  accountHash: i.String.withConstraint(function (e) {
    return e.length <= 30;
  }),
  errorCode: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 2;
  }),
  partnerId: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 65535;
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
  })
}).And(i.Partial({
  registration_type_id: i.Number.withConstraint(function (e) {
    return e >= 1 && e <= 10;
  }),
  crna: i.String.withConstraint(function (e) {
    return e.length <= 100;
  }),
  countryCode: i.String.withConstraint(function (e) {
    return e.length <= 2;
  }),
  useragent: i.String,
  zoneId: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 1000;
  })
}));
exports.validateEvent = function (e) {
  return exports.___completeEventTypeDefinition.validate(e);
};
exports.ID = 20;