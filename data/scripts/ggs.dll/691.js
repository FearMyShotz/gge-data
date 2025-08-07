Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./7.js");
exports.___baseEventTypeDefinition = i.Record({
  eventId: i.Literal(67),
  playerId: i.Number.withConstraint(function (e) {
    return e >= 1;
  }),
  sessionId: i.Number.withConstraint(function (e) {
    return e >= 1;
  }),
  clickSourceId: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  event_mapping_version: i.Literal(2)
}).And(i.Partial({
  client_timestamp: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  storeId: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 50;
  }),
  deviceId: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 50;
  }),
  connectionType: i.String.withConstraint(function (e) {
    return e.length <= 10;
  })
}));
exports.___completeEventTypeDefinition = i.Record({
  eventId: i.Literal(67),
  playerId: i.Number.withConstraint(function (e) {
    return e >= 1;
  }),
  sessionId: i.Number.withConstraint(function (e) {
    return e >= 1;
  }),
  clickSourceId: i.Number.withConstraint(function (e) {
    return e >= 0;
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
  client_timestamp: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  storeId: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 50;
  }),
  deviceId: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 50;
  }),
  connectionType: i.String.withConstraint(function (e) {
    return e.length <= 10;
  }),
  zoneId: i.Number.withConstraint(function (e) {
    return e >= 0;
  })
}));
exports.validateEvent = function (e) {
  return exports.___completeEventTypeDefinition.validate(e);
};
exports.ID = 67;