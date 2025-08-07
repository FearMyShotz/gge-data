Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./153.js");
var a = require("./4.js");
var s = require("./53.js");
var r = require("./137.js");
var l = require("./13.js");
var c = function () {
  function SpecialServerHelper() {}
  Object.defineProperty(SpecialServerHelper, "isOnSpecialServer", {
    get: function () {
      return s.ABGHelper.isOnABGServer || r.TempServerHelper.isOnTempServer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SpecialServerHelper, "eventIsRunning", {
    get: function () {
      if (s.ABGHelper.isOnABGServer) {
        return !!s.ABGHelper.abgEvent;
      } else {
        return !!r.TempServerHelper.isOnTempServer && !!r.TempServerHelper.tmpServerEvent;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SpecialServerHelper, "useSkin", {
    get: function () {
      return SpecialServerHelper.isOnSpecialServer && !!SpecialServerHelper.skinName && SpecialServerHelper.skinName != "" && a.CastleModel.kingdomData.activeKingdomID == o.KingdomEnum.CLASSIC.id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SpecialServerHelper, "skinName", {
    get: function () {
      if (s.ABGHelper.isOnABGServer) {
        return s.ABGHelper.skinName;
      } else if (r.TempServerHelper.isOnTempServer) {
        return r.TempServerHelper.skinName;
      } else {
        return "";
      }
    },
    enumerable: true,
    configurable: true
  });
  SpecialServerHelper.checkTextIDForSkinText = function (e) {
    if (SpecialServerHelper.useSkin) {
      return l.TextHelper.getExistingTextID(e + "_" + SpecialServerHelper.skinName, e);
    } else {
      return e;
    }
  };
  Object.defineProperty(SpecialServerHelper, "isOnKeyLoginToNormalLoginServer", {
    get: function () {
      return n.EnvGlobalsHandler.globals.networkId == n.GoodgamePartners.NETWORK_NASZAKLASA || n.EnvGlobalsHandler.globals.networkId == n.GoodgamePartners.NETWORK_KRALOYUN || n.EnvGlobalsHandler.globals.networkId == n.GoodgamePartners.NETWORK_SPIELAFFE || n.EnvGlobalsHandler.globals.networkId == 80;
    },
    enumerable: true,
    configurable: true
  });
  SpecialServerHelper.isCrossplay = function () {
    return n.EnvGlobalsHandler.globals.isCrossplay;
  };
  SpecialServerHelper.SKIN_MAYA = "Maya";
  return SpecialServerHelper;
}();
exports.SpecialServerHelper = c;