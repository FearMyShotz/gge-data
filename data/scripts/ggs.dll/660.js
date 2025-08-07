Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./7.js");
exports.___baseEventTypeDefinition = i.Record({
  eventId: i.Literal(1013),
  areaId: i.Number,
  areaType: i.Number.withConstraint(function (e) {
    return e >= -1 && e <= 1000;
  }),
  attackerAllianceId: i.Number.withConstraint(function (e) {
    return e >= -2;
  }),
  attackerId: i.Number,
  battleLogId: i.Number.withConstraint(function (e) {
    return e >= 1;
  }),
  castleOwnerId: i.Number,
  defenderAllianceId: i.Number.withConstraint(function (e) {
    return e >= -2;
  }),
  mapId: i.Number.withConstraint(function (e) {
    return e >= -1 && e <= 1000;
  }),
  outcome: i.String.withConstraint(function (e) {
    return e.length <= 40;
  })
}).And(i.Partial({
  attackerLevel: i.Number.withConstraint(function (e) {
    return e >= -1 && e <= 10000;
  }),
  defenderLevel: i.Number.withConstraint(function (e) {
    return e >= -1 && e <= 10000;
  })
}));
exports.___completeEventTypeDefinition = i.Record({
  eventId: i.Literal(1013),
  areaId: i.Number,
  areaType: i.Number.withConstraint(function (e) {
    return e >= -1 && e <= 1000;
  }),
  attackerAllianceId: i.Number.withConstraint(function (e) {
    return e >= -2;
  }),
  attackerId: i.Number,
  battleLogId: i.Number.withConstraint(function (e) {
    return e >= 1;
  }),
  castleOwnerId: i.Number,
  defenderAllianceId: i.Number.withConstraint(function (e) {
    return e >= -2;
  }),
  mapId: i.Number.withConstraint(function (e) {
    return e >= -1 && e <= 1000;
  }),
  outcome: i.String.withConstraint(function (e) {
    return e.length <= 40;
  }),
  gameId: i.Number.withConstraint(function (e) {
    return e >= 1 && e <= 100;
  }),
  zoneId: i.Number.withConstraint(function (e) {
    return e >= 1 && e <= 1000;
  })
}).And(i.Partial({
  attackerLevel: i.Number.withConstraint(function (e) {
    return e >= -1 && e <= 10000;
  }),
  defenderLevel: i.Number.withConstraint(function (e) {
    return e >= -1 && e <= 10000;
  })
}));
exports.validateEvent = function (e) {
  return exports.___completeEventTypeDefinition.validate(e);
};
exports.ID = 1013;