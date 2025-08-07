Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./7.js");
exports.___baseEventTypeDefinition = i.Record({
  eventId: i.Literal(94),
  playerId: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  sessionId: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  sessionTime: i.Number,
  inGameState: i.String.withConstraint(function (e) {
    return e.length <= 64;
  }),
  level: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 256;
  }),
  minFps: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 256;
  }),
  maxFps: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 256;
  }),
  fps: i.Always,
  measurementDuration: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 65535;
  }),
  deviceId: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 50;
  }),
  animations: i.String.withConstraint(function (e) {
    return e.length <= 64;
  }),
  storeId: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 50;
  }),
  connectionType: i.String.withConstraint(function (e) {
    return e.length <= 10;
  }),
  memoryUsage: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 65536;
  }),
  buildVersion: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 4294967295;
  })
}).And(i.Partial({
  deviceType: i.String.withConstraint(function (e) {
    return e.length <= 255;
  })
}));
exports.___completeEventTypeDefinition = i.Record({
  eventId: i.Literal(94),
  playerId: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  sessionId: i.Number.withConstraint(function (e) {
    return e >= 0;
  }),
  sessionTime: i.Number,
  inGameState: i.String.withConstraint(function (e) {
    return e.length <= 64;
  }),
  level: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 256;
  }),
  minFps: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 256;
  }),
  maxFps: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 256;
  }),
  fps: i.Always,
  measurementDuration: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 65535;
  }),
  deviceId: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 50;
  }),
  animations: i.String.withConstraint(function (e) {
    return e.length <= 64;
  }),
  storeId: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 50;
  }),
  connectionType: i.String.withConstraint(function (e) {
    return e.length <= 10;
  }),
  memoryUsage: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 65536;
  }),
  buildVersion: i.Number.withConstraint(function (e) {
    return e >= 0 && e <= 4294967295;
  }),
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
  }),
  accountId: i.String.withConstraint(function (e) {
    return e.length <= 30;
  })
}).And(i.Partial({
  deviceType: i.String.withConstraint(function (e) {
    return e.length <= 255;
  }),
  zoneId: i.Number.withConstraint(function (e) {
    return e >= 0;
  })
}));
exports.validateEvent = function (e) {
  return exports.___completeEventTypeDefinition.validate(e);
};
exports.ID = 94;