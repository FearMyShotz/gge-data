Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./7.js");
exports.___baseEventTypeDefinition = i.Record({
  eventId: i.Literal(2),
  playerId: i.Number,
  conTime: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  roundTime: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  downloadrate: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  bluebox: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 1;
  }),
  delay: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  clientTimeZone: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 100;
  }),
  accountHash: i.String,
  event_mapping_version: i.Literal(2)
}).And(i.Partial({
  client_timestamp: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  deviceId: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 50;
  }),
  storeId: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 50;
  }),
  connectionType: i.String.withConstraint(function (e) {
    return e.length <= 10;
  }),
  referrer: i.String.withConstraint(function (e) {
    return e.length <= 100;
  }),
  partner_id: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  creative_id: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  placement: i.String.withConstraint(function (e) {
    return e.length <= 255;
  }),
  keyword: i.String.withConstraint(function (e) {
    return e.length <= 255;
  }),
  network: i.String.withConstraint(function (e) {
    return e.length <= 1;
  }),
  landing_page: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  channel_id: i.String.withConstraint(function (e) {
    return e.length <= 255;
  }),
  traffic_source_id: i.String.withConstraint(function (e) {
    return e.length <= 255;
  }),
  campaign_key: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  adgroup_key: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  advertiser_id: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  match_type: i.String.withConstraint(function (e) {
    return e.length <= 1;
  }),
  is_ip_v6: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 1;
  })
}));
exports.___completeEventTypeDefinition = i.Record({
  eventId: i.Literal(2),
  playerId: i.Number,
  conTime: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  roundTime: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  downloadrate: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  bluebox: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 1;
  }),
  delay: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  clientTimeZone: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 100;
  }),
  accountHash: i.String,
  event_mapping_version: i.Literal(2),
  gameId: i.Number.withConstraint(function (e) {
    return e >= 1 && e <= 100;
  }),
  networkId: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 1000;
  }),
  instanceId: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 1000;
  }),
  lang: i.String.withConstraint(function (e) {
    return e.length <= 5;
  })
}).And(i.Partial({
  client_timestamp: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  deviceId: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 50;
  }),
  storeId: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 50;
  }),
  connectionType: i.String.withConstraint(function (e) {
    return e.length <= 10;
  }),
  referrer: i.String.withConstraint(function (e) {
    return e.length <= 100;
  }),
  partner_id: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  creative_id: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  placement: i.String.withConstraint(function (e) {
    return e.length <= 255;
  }),
  keyword: i.String.withConstraint(function (e) {
    return e.length <= 255;
  }),
  network: i.String.withConstraint(function (e) {
    return e.length <= 1;
  }),
  landing_page: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  channel_id: i.String.withConstraint(function (e) {
    return e.length <= 255;
  }),
  traffic_source_id: i.String.withConstraint(function (e) {
    return e.length <= 255;
  }),
  campaign_key: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  adgroup_key: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  advertiser_id: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  match_type: i.String.withConstraint(function (e) {
    return e.length <= 1;
  }),
  is_ip_v6: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 1;
  }),
  zoneId: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 1000;
  })
}));
exports.validateEvent = function (e) {
  return exports.___completeEventTypeDefinition.validate(e);
};
exports.ID = 2;