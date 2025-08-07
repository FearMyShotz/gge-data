Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./5.js");
var a = require("./4.js");
var s = require("./681.js");
var r = function () {
  function ABGHelper() {}
  Object.defineProperty(ABGHelper, "abgEvent", {
    get: function () {
      return a.CastleModel.specialEventData.getActiveEventByEventId(o.EventConst.EVENTTYPE_ALLIANCE_BATTLEGROUND);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGHelper, "skinName", {
    get: function () {
      if (ABGHelper.abgEvent) {
        return ABGHelper.abgEvent.settingVO.skin;
      } else {
        return "";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGHelper, "isOnABGServer", {
    get: function () {
      return n.EnvGlobalsHandler.globals.isOnAllianceBattleGroundServer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGHelper, "isOnABGAndCollector", {
    get: function () {
      return ABGHelper.isOnABGServer && ABGHelper.isAllianceCollectorScoring;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGHelper, "isAllianceCollectorScoring", {
    get: function () {
      return !!ABGHelper.abgEvent && ABGHelper.abgEvent.settingVO.scoringSystemVO.scoring == s.AllianceBattleGroundScoringVO.SCORING_SYSTEM_ALLIANCE_COLLECTOR;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGHelper, "isOnABGAndTower", {
    get: function () {
      return ABGHelper.isOnABGServer && ABGHelper.isAllianceTowerScoring;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGHelper, "isAllianceTowerScoring", {
    get: function () {
      return !!ABGHelper.abgEvent && ABGHelper.abgEvent.settingVO.scoringSystemVO.scoring == s.AllianceBattleGroundScoringVO.SCORING_SYSTEM_ALLIANCE_TOWER;
    },
    enumerable: true,
    configurable: true
  });
  return ABGHelper;
}();
exports.ABGHelper = r;