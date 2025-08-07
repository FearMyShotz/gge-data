Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./7.js");
exports.___baseEventTypeDefinition = i.Record({
  eventId: i.Literal(97),
  sender_game_id: i.Number.withConstraint(function (e) {
    return e >= 1 && e <= 100;
  }),
  sender_network_id: i.Number.withConstraint(function (e) {
    return e >= 1 && e <= 1000;
  }),
  sender_instance_id: i.Number.withConstraint(function (e) {
    return e >= 1 && e <= 1000;
  }),
  sender_player_id: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  action: i.String.withConstraint(function (e) {
    return e.length <= 20;
  })
}).And(i.Partial({
  receiver_game_id: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 100;
  }),
  receiver_network_id: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 1000;
  }),
  receiver_instance_id: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 1000;
  }),
  receiver_player_id: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  refer_method: i.String.withConstraint(function (e) {
    return e.length <= 20;
  }),
  trigger: i.String.withConstraint(function (e) {
    return e.length <= 20;
  }),
  external_inviter_id: i.String.withConstraint(function (e) {
    return e.length <= 50;
  }),
  external_invited_id: i.String.withConstraint(function (e) {
    return e.length <= 50;
  }),
  sender_level: i.Number.withConstraint(function (e) {
    return e >= 0;
  })
}));
exports.___completeEventTypeDefinition = i.Record({
  eventId: i.Literal(97),
  sender_game_id: i.Number.withConstraint(function (e) {
    return e >= 1 && e <= 100;
  }),
  sender_network_id: i.Number.withConstraint(function (e) {
    return e >= 1 && e <= 1000;
  }),
  sender_instance_id: i.Number.withConstraint(function (e) {
    return e >= 1 && e <= 1000;
  }),
  sender_player_id: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  action: i.String.withConstraint(function (e) {
    return e.length <= 20;
  })
}).And(i.Partial({
  receiver_game_id: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 100;
  }),
  receiver_network_id: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 1000;
  }),
  receiver_instance_id: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 1000;
  }),
  receiver_player_id: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  refer_method: i.String.withConstraint(function (e) {
    return e.length <= 20;
  }),
  trigger: i.String.withConstraint(function (e) {
    return e.length <= 20;
  }),
  external_inviter_id: i.String.withConstraint(function (e) {
    return e.length <= 50;
  }),
  external_invited_id: i.String.withConstraint(function (e) {
    return e.length <= 50;
  }),
  sender_level: i.Number.withConstraint(function (e) {
    return e >= 0;
  })
}));
exports.validateEvent = function (e) {
  return exports.___completeEventTypeDefinition.validate(e);
};
exports.ID = 97;