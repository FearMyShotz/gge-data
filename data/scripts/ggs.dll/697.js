Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./7.js");
exports.___baseEventTypeDefinition = i.Record({
  eventId: i.Literal(98),
  playerId: i.Number.withConstraint(function (e) {
    return e >= 1;
  }),
  timestamp: i.Number.withConstraint(function (e) {
    return e >= 1;
  }),
  facebook_connection_state: i.String.withConstraint(function (e) {
    return e.length <= 20;
  }),
  game_level: i.Number.withConstraint(function (e) {
    return e >= 0;
  })
}).And(i.Partial({
  user_external_id: i.String.withConstraint(function (e) {
    return e.length <= 100;
  }),
  facebook_business_token: i.String.withConstraint(function (e) {
    return e.length <= 100;
  })
}));
exports.___completeEventTypeDefinition = i.Record({
  eventId: i.Literal(98),
  playerId: i.Number.withConstraint(function (e) {
    return e >= 1;
  }),
  timestamp: i.Number.withConstraint(function (e) {
    return e >= 1;
  }),
  facebook_connection_state: i.String.withConstraint(function (e) {
    return e.length <= 20;
  }),
  game_level: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  gameId: i.Number.withConstraint(function (e) {
    return e >= 1 && e <= 100;
  }),
  networkId: i.Number.withConstraint(function (e) {
    return e >= 1 && e <= 200;
  }),
  instanceId: i.Number.withConstraint(function (e) {
    return e >= 1 && e <= 1000;
  })
}).And(i.Partial({
  user_external_id: i.String.withConstraint(function (e) {
    return e.length <= 100;
  }),
  facebook_business_token: i.String.withConstraint(function (e) {
    return e.length <= 100;
  })
}));
exports.validateEvent = function (e) {
  return exports.___completeEventTypeDefinition.validate(e);
};
exports.ID = 98;