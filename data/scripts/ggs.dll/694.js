Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./7.js");
exports.___baseEventTypeDefinition = i.Record({
  eventId: i.Literal(93),
  playerId: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  accountHash: i.String.withConstraint(function (e) {
    return e.length <= 32;
  }),
  customHash: i.String.withConstraint(function (e) {
    return e.length <= 32;
  }),
  testId: i.Number.withConstraint(function (e) {
    return e >= -1;
  }),
  caseId: i.Number.withConstraint(function (e) {
    return e >= -1;
  }),
  countryCode: i.String.withConstraint(function (e) {
    return e.length <= 2;
  }),
  journeyStep: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  userAgent: i.String.withConstraint(function (e) {
    return e.length <= 250;
  }),
  source: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  auto: i.String.withConstraint(function (e) {
    return /$false|true^/.test(e);
  }),
  milliseconds: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  recurringUser: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  w: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  pid: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  creative: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  placement: i.String.withConstraint(function (e) {
    return e.length <= 255;
  }),
  keyword: i.String.withConstraint(function (e) {
    return e.length <= 255;
  }),
  network: i.String.withConstraint(function (e) {
    return e.length <= 2;
  }),
  cid: i.String.withConstraint(function (e) {
    return e.length <= 255;
  }),
  tid: i.String.withConstraint(function (e) {
    return e.length <= 255;
  }),
  aid: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  camp: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  adgr: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  matchtype: i.String.withConstraint(function (e) {
    return e.length <= 1;
  }),
  gid: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  gclid: i.String.withConstraint(function (e) {
    return e.length <= 100;
  }),
  yclid: i.String.withConstraint(function (e) {
    return e.length <= 20;
  }),
  nid: i.Number.withConstraint(function (e) {
    return e >= 0;
  })
}).And(i.Partial({
  crna: i.String.withConstraint(function (e) {
    return e.length <= 100;
  }),
  registration_type_id: i.Number.withConstraint(function (e) {
    return e >= 1 && e <= 10;
  }),
  referrer: i.String.withConstraint(function (e) {
    return e.length <= 255;
  }),
  tracking_link: i.String.withConstraint(function (e) {
    return e.length <= 2048;
  })
}));
exports.___completeEventTypeDefinition = i.Record({
  eventId: i.Literal(93),
  playerId: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  accountHash: i.String.withConstraint(function (e) {
    return e.length <= 32;
  }),
  customHash: i.String.withConstraint(function (e) {
    return e.length <= 32;
  }),
  testId: i.Number.withConstraint(function (e) {
    return e >= -1;
  }),
  caseId: i.Number.withConstraint(function (e) {
    return e >= -1;
  }),
  countryCode: i.String.withConstraint(function (e) {
    return e.length <= 2;
  }),
  journeyStep: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  userAgent: i.String.withConstraint(function (e) {
    return e.length <= 250;
  }),
  source: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  auto: i.String.withConstraint(function (e) {
    return /$false|true^/.test(e);
  }),
  milliseconds: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  recurringUser: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  w: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  pid: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  creative: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  placement: i.String.withConstraint(function (e) {
    return e.length <= 255;
  }),
  keyword: i.String.withConstraint(function (e) {
    return e.length <= 255;
  }),
  network: i.String.withConstraint(function (e) {
    return e.length <= 2;
  }),
  cid: i.String.withConstraint(function (e) {
    return e.length <= 255;
  }),
  tid: i.String.withConstraint(function (e) {
    return e.length <= 255;
  }),
  aid: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  camp: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  adgr: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  matchtype: i.String.withConstraint(function (e) {
    return e.length <= 1;
  }),
  gid: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  gclid: i.String.withConstraint(function (e) {
    return e.length <= 100;
  }),
  yclid: i.String.withConstraint(function (e) {
    return e.length <= 20;
  }),
  nid: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  gameId: i.Number.withConstraint(function (e) {
    return e >= 1 && e <= 100;
  }),
  networkId: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 1000;
  }),
  instanceId: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 1000;
  })
}).And(i.Partial({
  crna: i.String.withConstraint(function (e) {
    return e.length <= 100;
  }),
  registration_type_id: i.Number.withConstraint(function (e) {
    return e >= 1 && e <= 10;
  }),
  referrer: i.String.withConstraint(function (e) {
    return e.length <= 255;
  }),
  tracking_link: i.String.withConstraint(function (e) {
    return e.length <= 2048;
  }),
  zoneId: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 1000;
  })
}));
exports.validateEvent = function (e) {
  return exports.___completeEventTypeDefinition.validate(e);
};
exports.ID = 93;