Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./7.js");
exports.___baseEventTypeDefinition = i.Record({
  eventId: i.Literal(1016),
  count: i.Number.withConstraint(function (e) {
    return e >= 1 && e <= 50;
  }),
  playerId: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  rarenessResult: i.Number.withConstraint(function (e) {
    return e >= 1 && e <= 50;
  })
}).And(i.Partial({}));
exports.___completeEventTypeDefinition = i.Record({
  eventId: i.Literal(1016),
  count: i.Number.withConstraint(function (e) {
    return e >= 1 && e <= 50;
  }),
  playerId: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  rarenessResult: i.Number.withConstraint(function (e) {
    return e >= 1 && e <= 50;
  }),
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
exports.ID = 1016;