Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./7.js");
exports.___baseEventTypeDefinition = i.Record({
  eventId: i.Literal(1029),
  deltaPoints: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  deltaTime: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  maxReachedLevel: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  newEndTime: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  newPoints: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  playerId: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  sourceId: i.Number
}).And(i.Partial({}));
exports.___completeEventTypeDefinition = i.Record({
  eventId: i.Literal(1029),
  deltaPoints: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  deltaTime: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  maxReachedLevel: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  newEndTime: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  newPoints: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  playerId: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  sourceId: i.Number,
  gameId: i.Number.withConstraint(function (e) {
    return e >= 1 && e <= 100;
  }),
  instanceId: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 1000;
  }),
  networkId: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 1000;
  })
}).And(i.Partial({
  zoneId: i.Number.withConstraint(function (e) {
    return e >= -1 && e <= 1000;
  })
}));
exports.validateEvent = function (e) {
  return exports.___completeEventTypeDefinition.validate(e);
};
exports.ID = 1029;