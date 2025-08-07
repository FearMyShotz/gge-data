Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./7.js");
exports.___baseEventTypeDefinition = i.Record({
  eventId: i.Literal(1028),
  gameEventId: i.Number.withConstraint(function (e) {
    return e >= -1;
  }),
  playerId: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  subTypeId: i.Number.withConstraint(function (e) {
    return e >= -1;
  })
}).And(i.Partial({
  grantedRewards: i.Number.withConstraint(function (e) {
    return e >= -1;
  }),
  finishTime: i.Number
}));
exports.___completeEventTypeDefinition = i.Record({
  eventId: i.Literal(1028),
  gameEventId: i.Number.withConstraint(function (e) {
    return e >= -1;
  }),
  playerId: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  subTypeId: i.Number.withConstraint(function (e) {
    return e >= -1;
  }),
  gameId: i.Number.withConstraint(function (e) {
    return e >= 1 && e <= 100;
  })
}).And(i.Partial({
  grantedRewards: i.Number.withConstraint(function (e) {
    return e >= -1;
  }),
  finishTime: i.Number,
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
exports.ID = 1028;