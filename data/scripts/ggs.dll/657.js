Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./7.js");
exports.___baseEventTypeDefinition = i.Record({
  eventId: i.Literal(1008),
  kingdomId: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 1000;
  }),
  playerId: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  posX: i.Number.withConstraint(function (e) {
    return e >= -1 && e <= 10000;
  }),
  posY: i.Number.withConstraint(function (e) {
    return e >= -1 && e <= 10000;
  }),
  reset: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 1;
  })
}).And(i.Partial({
  level: i.Number.withConstraint(function (e) {
    return e >= -1 && e <= 10000;
  })
}));
exports.___completeEventTypeDefinition = i.Record({
  eventId: i.Literal(1008),
  kingdomId: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 1000;
  }),
  playerId: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  posX: i.Number.withConstraint(function (e) {
    return e >= -1 && e <= 10000;
  }),
  posY: i.Number.withConstraint(function (e) {
    return e >= -1 && e <= 10000;
  }),
  reset: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 1;
  }),
  gameId: i.Number.withConstraint(function (e) {
    return e >= 1 && e <= 100;
  })
}).And(i.Partial({
  level: i.Number.withConstraint(function (e) {
    return e >= -1 && e <= 10000;
  }),
  instanceId: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 1000;
  }),
  networkId: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 1000;
  }),
  zoneId: i.Number
}));
exports.validateEvent = function (e) {
  return exports.___completeEventTypeDefinition.validate(e);
};
exports.ID = 1008;