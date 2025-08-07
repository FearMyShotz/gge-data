Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./7.js");
exports.___baseEventTypeDefinition = i.Record({
  eventId: i.Literal(1007),
  playerId: i.Number,
  reason: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 1000;
  })
}).And(i.Partial({
  currency1: i.Number,
  currency2: i.Number,
  wood: i.Number,
  stone: i.Number,
  coal: i.Number,
  oil: i.Number,
  glass: i.Number,
  aquamarine: i.Number,
  iron: i.Number,
  capitalCoins: i.Number,
  allianceId: i.Number.withConstraint(function (e) {
    return e >= -1;
  }),
  otherAllianceId: i.Number.withConstraint(function (e) {
    return e >= -1;
  })
}));
exports.___completeEventTypeDefinition = i.Record({
  eventId: i.Literal(1007),
  playerId: i.Number,
  reason: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 1000;
  }),
  gameId: i.Number.withConstraint(function (e) {
    return e >= 1 && e <= 100;
  })
}).And(i.Partial({
  currency1: i.Number,
  currency2: i.Number,
  wood: i.Number,
  stone: i.Number,
  coal: i.Number,
  oil: i.Number,
  glass: i.Number,
  aquamarine: i.Number,
  iron: i.Number,
  capitalCoins: i.Number,
  allianceId: i.Number.withConstraint(function (e) {
    return e >= -1;
  }),
  otherAllianceId: i.Number.withConstraint(function (e) {
    return e >= -1;
  }),
  networkId: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 1000;
  }),
  instanceId: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 1000;
  }),
  zoneId: i.Number.withConstraint(function (e) {
    return e >= -1 && e <= 1000;
  })
}));
exports.validateEvent = function (e) {
  return exports.___completeEventTypeDefinition.validate(e);
};
exports.ID = 1007;