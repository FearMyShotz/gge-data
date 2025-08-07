Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./7.js");
exports.___baseEventTypeDefinition = i.Record({
  eventId: i.Literal(142),
  account_hash: i.String.withConstraint(function (e) {
    return e.length <= 32;
  }),
  client_language_code: i.String,
  client_version: i.String.withConstraint(function (e) {
    return e.length <= 90;
  }),
  device_id: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 50;
  }),
  device_language_code: i.String,
  gamestate_count_session: i.Number.withConstraint(function (e) {
    return e >= 1;
  }),
  gamestate_name: i.String.withConstraint(function (e) {
    return e.length <= 60;
  }),
  platform_id: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 10;
  }),
  playerId: i.Number.withConstraint(function (e) {
    return e >= -1;
  }),
  session_count: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  session_length_ms: i.Number,
  session_type_name: i.String.withConstraint(function (e) {
    return e.length <= 30;
  }),
  is_html5: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 1;
  })
}).And(i.Partial({
  connection_type_name: i.String.withConstraint(function (e) {
    return e.length <= 20;
  }),
  client_timestamp: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  event_mapping_version: i.Number.withConstraint(function (e) {
    return e >= 1 && e <= 10;
  }),
  install_source_name: i.String.withConstraint(function (e) {
    return e.length <= 30;
  }),
  ip_long: i.Number,
  media_partner_id: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  referrer_name: i.String.withConstraint(function (e) {
    return e.length <= 100;
  }),
  website_id: i.Number.withConstraint(function (e) {
    return e >= 0;
  })
}));
exports.___completeEventTypeDefinition = i.Record({
  eventId: i.Literal(142),
  account_hash: i.String.withConstraint(function (e) {
    return e.length <= 32;
  }),
  client_language_code: i.String,
  client_version: i.String.withConstraint(function (e) {
    return e.length <= 90;
  }),
  device_id: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 50;
  }),
  device_language_code: i.String,
  gamestate_count_session: i.Number.withConstraint(function (e) {
    return e >= 1;
  }),
  gamestate_name: i.String.withConstraint(function (e) {
    return e.length <= 60;
  }),
  platform_id: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 10;
  }),
  playerId: i.Number.withConstraint(function (e) {
    return e >= -1;
  }),
  session_count: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  session_length_ms: i.Number,
  session_type_name: i.String.withConstraint(function (e) {
    return e.length <= 30;
  }),
  is_html5: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 1;
  })
}).And(i.Partial({
  connection_type_name: i.String.withConstraint(function (e) {
    return e.length <= 20;
  }),
  client_timestamp: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  event_mapping_version: i.Number.withConstraint(function (e) {
    return e >= 1 && e <= 10;
  }),
  install_source_name: i.String.withConstraint(function (e) {
    return e.length <= 30;
  }),
  ip_long: i.Number,
  media_partner_id: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  referrer_name: i.String.withConstraint(function (e) {
    return e.length <= 100;
  }),
  website_id: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  gameId: i.Number.withConstraint(function (e) {
    return e >= 1 && e <= 100;
  }),
  instanceId: i.Number.withConstraint(function (e) {
    return e >= -10 && e <= 1000;
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
exports.ID = 142;