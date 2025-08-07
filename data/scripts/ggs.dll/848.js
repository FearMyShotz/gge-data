Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./95.js");
var a = require("./15.js");
var s = require("./5.js");
var r = require("./4.js");
var o = require("./3.js");
var l = require("./2.js").getLogger("BasicGameData");
var u = function () {
  function BasicGameData() {}
  Object.defineProperty(BasicGameData.prototype, "eventId", {
    get: function () {
      return a.TrackingEventIds.IN_GAME_PERFORMANCE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicGameData.prototype, "gameId", {
    get: function () {
      return s.EnvGlobalsHandler.globals.gameId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicGameData.prototype, "networkId", {
    get: function () {
      return s.EnvGlobalsHandler.globals.networkId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicGameData.prototype, "instanceId", {
    get: function () {
      return r.BasicModel.instanceProxy.selectedInstanceVO.instanceId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicGameData.prototype, "playerId", {
    get: function () {
      return r.BasicModel.userData.playerID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicGameData.prototype, "sessionId", {
    get: function () {
      return Number(s.EnvGlobalsHandler.globals.sessionId);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicGameData.prototype, "sessionTime", {
    get: function () {
      return Math.floor(s.EnvGlobalsHandler.globals.sessionLength);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicGameData.prototype, "date", {
    get: function () {
      return new Date().getTime() / 1000;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicGameData.prototype, "level", {
    get: function () {
      return r.BasicModel.userData.userLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicGameData.prototype, "deviceId", {
    get: function () {
      return i.DeviceId.DESKTOP;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicGameData.prototype, "storeId", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicGameData.prototype, "memoryUsage", {
    get: function () {
      l.warn("memory usage not available");
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicGameData.prototype, "buildVersion", {
    get: function () {
      return Number(s.EnvGlobalsHandler.globals.versionInformation.versionNumberGame.replace(/\D/g, ""));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicGameData.prototype, "lang", {
    get: function () {
      return o.Capabilities.language;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicGameData.prototype, "connectionType", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  return BasicGameData;
}();
exports.BasicGameData = u;