Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./7.js");
exports.___baseEventTypeDefinition = i.Record({
  eventId: i.Literal(1006),
  leaderPosX: i.Number.withConstraint(function (e) {
    return e >= -1 && e <= 10000;
  }),
  leaderPosY: i.Number.withConstraint(function (e) {
    return e >= -1 && e <= 10000;
  }),
  newAllianceId: i.Number.withConstraint(function (e) {
    return e >= -2;
  }),
  newAllianceRank: i.Number.withConstraint(function (e) {
    return e >= -1 && e <= 100;
  }),
  oldAllianceId: i.Number.withConstraint(function (e) {
    return e >= -2;
  }),
  oldAllianceRank: i.Number.withConstraint(function (e) {
    return e >= -1 && e <= 100;
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
  status: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 100;
  })
}).And(i.Partial({}));
exports.___completeEventTypeDefinition = i.Record({
  eventId: i.Literal(1006),
  leaderPosX: i.Number.withConstraint(function (e) {
    return e >= -1 && e <= 10000;
  }),
  leaderPosY: i.Number.withConstraint(function (e) {
    return e >= -1 && e <= 10000;
  }),
  newAllianceId: i.Number.withConstraint(function (e) {
    return e >= -2;
  }),
  newAllianceRank: i.Number.withConstraint(function (e) {
    return e >= -1 && e <= 100;
  }),
  oldAllianceId: i.Number.withConstraint(function (e) {
    return e >= -2;
  }),
  oldAllianceRank: i.Number.withConstraint(function (e) {
    return e >= -1 && e <= 100;
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
  status: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 100;
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
exports.ID = 1006;