Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./5.js");
var a = require("./4.js");
var s = require("./13.js");
var r = function () {
  function TempServerHelper() {}
  Object.defineProperty(TempServerHelper, "tmpServerEvent", {
    get: function () {
      return a.CastleModel.specialEventData.getActiveEventByEventId(o.EventConst.EVENTTYPE_TEMPSERVER);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TempServerHelper, "skinName", {
    get: function () {
      if (TempServerHelper.tmpServerEvent) {
        return TempServerHelper.tmpServerEvent.settingVO.skin;
      } else {
        return "";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TempServerHelper, "isOnTempServer", {
    get: function () {
      return n.EnvGlobalsHandler.globals.isOnTemporaryServer;
    },
    enumerable: true,
    configurable: true
  });
  TempServerHelper.checkTextIDForABGText = function (e) {
    if (TempServerHelper.isOnTempServer) {
      return s.TextHelper.getExistingTextID(e + "_" + TempServerHelper.skinName, e);
    } else {
      return e;
    }
  };
  TempServerHelper.getAssetFrame = function () {
    if (TempServerHelper.tmpServerEvent) {
      if (TempServerHelper.tmpServerEvent.isCrossPlay && TempServerHelper.tmpServerEvent.settingVO.isCastleTransportationOnly) {
        return 5;
      }
      if (TempServerHelper.tmpServerEvent.isCrossPlay && TempServerHelper.tmpServerEvent.isRankSwapScoring) {
        return 4;
      }
      if (TempServerHelper.tmpServerEvent.isCrossPlay && TempServerHelper.tmpServerEvent.isCollectorScoring) {
        return 3;
      }
      if (TempServerHelper.tmpServerEvent.settingVO.isCastleTransportationOnly) {
        return 2;
      }
    }
    return 1;
  };
  return TempServerHelper;
}();
exports.TempServerHelper = r;