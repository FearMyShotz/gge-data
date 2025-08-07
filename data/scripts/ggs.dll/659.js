Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./7.js");
exports.___baseEventTypeDefinition = i.Record({
  eventId: i.Literal(1010),
  oldPosX: i.Number.withConstraint(function (e) {
    return e >= -1 && e <= 10000;
  }),
  oldPosY: i.Number.withConstraint(function (e) {
    return e >= -1 && e <= 10000;
  }),
  playerId: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  posX: i.Number.withConstraint(function (e) {
    return e >= -1 && e <= 10000;
  }),
  posY: i.Number.withConstraint(function (e) {
    return e >= -1 && e <= 10000;
  })
}).And(i.Partial({
  currency2: i.Number
}));
exports.___completeEventTypeDefinition = i.Record({
  eventId: i.Literal(1010),
  oldPosX: i.Number.withConstraint(function (e) {
    return e >= -1 && e <= 10000;
  }),
  oldPosY: i.Number.withConstraint(function (e) {
    return e >= -1 && e <= 10000;
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
  gameId: i.Number.withConstraint(function (e) {
    return e >= 1 && e <= 100;
  })
}).And(i.Partial({
  currency2: i.Number,
  instanceId: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 1000;
  }),
  networkId: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 1000;
  }),
  zoneId: i.Number.withConstraint(function (e) {
    return e >= -1 && e <= 1000;
  })
}));
exports.validateEvent = function (e) {
  return exports.___completeEventTypeDefinition.validate(e);
};
exports.ID = 1010;