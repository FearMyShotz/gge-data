Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./7.js");
exports.___baseEventTypeDefinition = i.Record({
  eventId: i.Literal(90),
  playerId: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  type: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  browserString: i.String.withConstraint(function (e) {
    return e.length <= 255;
  }),
  start: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 16777215;
  }),
  redirect: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 16777215;
  }),
  appCache: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 16777215;
  }),
  dnsTime: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 16777215;
  }),
  tcp: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 16777215;
  }),
  requestTime: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 16777215;
  }),
  responseTime: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 16777215;
  }),
  processing: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 16777215;
  }),
  load: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 16777215;
  }),
  domContentLoad: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 16777215;
  }),
  domInteractive: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 16777215;
  })
}).And(i.Partial({
  customHash: i.String.withConstraint(function (e) {
    return e.length <= 32;
  }),
  country: i.String.withConstraint(function (e) {
    return e.length <= 2;
  }),
  subType: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  caseId: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  testId: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  embeddedLoad: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 16777215;
  }),
  visualCompleteness: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 16777215;
  }),
  clickToLoaded: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 16777215;
  })
}));
exports.___completeEventTypeDefinition = i.Record({
  eventId: i.Literal(90),
  playerId: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  type: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  browserString: i.String.withConstraint(function (e) {
    return e.length <= 255;
  }),
  start: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 16777215;
  }),
  redirect: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 16777215;
  }),
  appCache: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 16777215;
  }),
  dnsTime: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 16777215;
  }),
  tcp: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 16777215;
  }),
  requestTime: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 16777215;
  }),
  responseTime: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 16777215;
  }),
  processing: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 16777215;
  }),
  load: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 16777215;
  }),
  domContentLoad: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 16777215;
  }),
  domInteractive: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 16777215;
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
  customHash: i.String.withConstraint(function (e) {
    return e.length <= 32;
  }),
  country: i.String.withConstraint(function (e) {
    return e.length <= 2;
  }),
  subType: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  caseId: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  testId: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  embeddedLoad: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 16777215;
  }),
  visualCompleteness: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 16777215;
  }),
  clickToLoaded: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 16777215;
  }),
  zoneId: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 1000;
  })
}));
exports.validateEvent = function (e) {
  return exports.___completeEventTypeDefinition.validate(e);
};
exports.ID = 90;