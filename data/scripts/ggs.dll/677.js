Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./7.js");
exports.___baseEventTypeDefinition = i.Record({
  eventId: i.Literal(1032),
  amount: i.Number.withConstraint(function (e) {
    return e >= 1;
  }),
  packageId: i.Number.withConstraint(function (e) {
    return e >= 1;
  }),
  playerId: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  receiverPlayerId: i.Number.withConstraint(function (e) {
    return e >= 0;
  })
}).And(i.Partial({}));
exports.___completeEventTypeDefinition = i.Record({
  eventId: i.Literal(1032),
  amount: i.Number.withConstraint(function (e) {
    return e >= 1;
  }),
  packageId: i.Number.withConstraint(function (e) {
    return e >= 1;
  }),
  playerId: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  receiverPlayerId: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  gameId: i.Number.withConstraint(function (e) {
    return e >= 1 && e <= 100;
  })
}).And(i.Partial({
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
exports.ID = 1032;