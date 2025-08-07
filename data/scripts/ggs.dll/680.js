Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./7.js");
exports.___baseEventTypeDefinition = i.Record({
  eventId: i.Literal(1036),
  areaId: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  playerId: i.Number,
  starveHome: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  starveMove: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  unitId: i.Number.withConstraint(function (e) {
    return e >= -1;
  })
}).And(i.Partial({}));
exports.___completeEventTypeDefinition = i.Record({
  eventId: i.Literal(1036),
  areaId: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  playerId: i.Number,
  starveHome: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  starveMove: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  unitId: i.Number.withConstraint(function (e) {
    return e >= -1;
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
  zoneId: i.Number
}));
exports.validateEvent = function (e) {
  return exports.___completeEventTypeDefinition.validate(e);
};
exports.ID = 1036;