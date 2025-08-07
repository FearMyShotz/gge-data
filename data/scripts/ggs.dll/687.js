Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./7.js");
exports.___baseEventTypeDefinition = i.Record({
  eventId: i.Literal(25),
  playerId: i.Number.withConstraint(function (e) {
    return e >= 1;
  }),
  setLanguage: i.String.withConstraint(function (e) {
    return e.length <= 2;
  }),
  playerLanguage: i.String.withConstraint(function (e) {
    return e.length <= 5;
  }),
  event_mapping_version: i.Literal(2)
}).And(i.Partial({
  email: i.String.withConstraint(function (e) {
    return e.length <= 255;
  })
}));
exports.___completeEventTypeDefinition = i.Record({
  eventId: i.Literal(25),
  playerId: i.Number.withConstraint(function (e) {
    return e >= 1;
  }),
  setLanguage: i.String.withConstraint(function (e) {
    return e.length <= 2;
  }),
  playerLanguage: i.String.withConstraint(function (e) {
    return e.length <= 5;
  }),
  event_mapping_version: i.Literal(2),
  gameId: i.Number.withConstraint(function (e) {
    return e >= 1 && e <= 100;
  }),
  networkId: i.Number.withConstraint(function (e) {
    return e >= 1 && e <= 1000;
  }),
  instanceId: i.Number.withConstraint(function (e) {
    return e >= 1 && e <= 1000;
  })
}).And(i.Partial({
  email: i.String.withConstraint(function (e) {
    return e.length <= 255;
  }),
  zoneId: i.Number.withConstraint(function (e) {
    return e >= 0;
  })
}));
exports.validateEvent = function (e) {
  return exports.___completeEventTypeDefinition.validate(e);
};
exports.ID = 25;