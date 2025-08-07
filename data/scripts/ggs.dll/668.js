Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./7.js");
exports.___baseEventTypeDefinition = i.Record({
  eventId: i.Literal(1021),
  bluePlayerCampCount: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  bluePlayerCount: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  blueSpectatorCount: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  blueVillageCount: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  destroyedBlueTowers: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  destroyedRedTowers: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  destroyerOfBlueCap: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  destroyerOfRedCap: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  eventEndTimestamp: i.Number.withConstraint(function (e) {
    return e >= -1;
  }),
  lmsBlueStartDate: i.Number.withConstraint(function (e) {
    return e >= -1;
  }),
  lmsRedStartDate: i.Number.withConstraint(function (e) {
    return e >= -1;
  }),
  redPlayerCampCount: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  redPlayerCount: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  redSpectatorCount: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  redVillageCount: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  winningFaction: i.Number.withConstraint(function (e) {
    return e >= -1 && e <= 1;
  })
}).And(i.Partial({}));
exports.___completeEventTypeDefinition = i.Record({
  eventId: i.Literal(1021),
  bluePlayerCampCount: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  bluePlayerCount: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  blueSpectatorCount: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  blueVillageCount: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  destroyedBlueTowers: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  destroyedRedTowers: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  destroyerOfBlueCap: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  destroyerOfRedCap: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  eventEndTimestamp: i.Number.withConstraint(function (e) {
    return e >= -1;
  }),
  lmsBlueStartDate: i.Number.withConstraint(function (e) {
    return e >= -1;
  }),
  lmsRedStartDate: i.Number.withConstraint(function (e) {
    return e >= -1;
  }),
  redPlayerCampCount: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  redPlayerCount: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  redSpectatorCount: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  redVillageCount: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  winningFaction: i.Number.withConstraint(function (e) {
    return e >= -1 && e <= 1;
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
exports.ID = 1021;