Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./7.js");
exports.___baseEventTypeDefinition = i.Record({
  eventId: i.Literal(1004),
  allianceId1: i.Number.withConstraint(function (e) {
    return e >= 1;
  }),
  allianceId2: i.Number.withConstraint(function (e) {
    return e >= 1;
  }),
  newDiplomacy: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 10;
  }),
  oldDiplomacy: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 10;
  })
}).And(i.Partial({}));
exports.___completeEventTypeDefinition = i.Record({
  eventId: i.Literal(1004),
  allianceId1: i.Number.withConstraint(function (e) {
    return e >= 1;
  }),
  allianceId2: i.Number.withConstraint(function (e) {
    return e >= 1;
  }),
  newDiplomacy: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 10;
  }),
  oldDiplomacy: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 10;
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
exports.ID = 1004;