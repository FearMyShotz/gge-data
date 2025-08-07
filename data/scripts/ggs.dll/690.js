Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./7.js");
exports.___baseEventTypeDefinition = i.Record({
  eventId: i.Literal(58),
  playerId: i.Number.withConstraint(function (e) {
    return e >= -1;
  }),
  level: i.Number.withConstraint(function (e) {
    return e >= -1;
  }),
  dlr: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  deviceId: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 50;
  }),
  storeId: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 50;
  }),
  connectionType: i.String.withConstraint(function (e) {
    return e.length <= 10;
  }),
  event_mapping_version: i.Literal(2)
}).And(i.Partial({
  fps: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  maxFps: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  memoryUsage: i.Number.withConstraint(function (e) {
    return e >= 0;
  })
}));
exports.___completeEventTypeDefinition = i.Record({
  eventId: i.Literal(58),
  playerId: i.Number.withConstraint(function (e) {
    return e >= -1;
  }),
  level: i.Number.withConstraint(function (e) {
    return e >= -1;
  }),
  dlr: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  deviceId: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 50;
  }),
  storeId: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 50;
  }),
  connectionType: i.String.withConstraint(function (e) {
    return e.length <= 10;
  }),
  event_mapping_version: i.Literal(2),
  gameId: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 100;
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
  fps: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  maxFps: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  memoryUsage: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  zoneId: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 1000;
  })
}));
exports.validateEvent = function (e) {
  return exports.___completeEventTypeDefinition.validate(e);
};
exports.ID = 58;