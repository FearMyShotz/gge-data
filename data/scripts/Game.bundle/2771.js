Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./5.js");
var s = require("./28.js");
var r = require("./30.js");
var l = function (e) {
  function CastleMercenaryMissionItemVO() {
    var t = e !== null && e.apply(this, arguments) || this;
    t.missionID = 0;
    t.duration = NaN;
    t.price = 0;
    t.quality = 0;
    t.state = 0;
    t.endTimeStamp = 0;
    return t;
  }
  n.__extends(CastleMercenaryMissionItemVO, e);
  CastleMercenaryMissionItemVO.prototype.fillFromParamObject = function (e) {
    this.missionID = e.ID;
    this.rewards = c.CollectableManager.parser.s2cParamList.createList(e.R);
    this.duration = e.D;
    this.price = e.P;
    this.quality = e.Q;
    this.state = e.S;
    if (e.RD) {
      this.endTimeStamp = r.CachedTimer.getCachedTimer() + e.RD * s.ClientConstTime.SEC_2_MILLISEC;
    }
  };
  Object.defineProperty(CastleMercenaryMissionItemVO.prototype, "remainingTime", {
    get: function () {
      return (this.endTimeStamp - r.CachedTimer.getCachedTimer()) / s.ClientConstTime.SEC_2_MILLISEC;
    },
    enumerable: true,
    configurable: true
  });
  CastleMercenaryMissionItemVO.prototype.getMissionTypeTextID = function () {
    switch (this.quality) {
      case CastleMercenaryMissionItemVO.RARITY_FREE:
        return "dialog_mission_free";
      case CastleMercenaryMissionItemVO.RARITY_COMMON:
        return "dialog_mission_common";
      case CastleMercenaryMissionItemVO.RARITY_RARE:
        return "dialog_mission_rare";
      case CastleMercenaryMissionItemVO.RARITY_EPIC:
        return "dialog_mission_epic";
      case CastleMercenaryMissionItemVO.RARITY_LEGENDARY:
        return "dialog_mission_legendary";
      default:
        return "";
    }
  };
  Object.defineProperty(CastleMercenaryMissionItemVO.prototype, "skipCost", {
    get: function () {
      return a.MercenaryConst.getSkipC2Cost(this.remainingTime);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMercenaryMissionItemVO.prototype, "missionProgress", {
    get: function () {
      return 1 - this.remainingTime / this.duration;
    },
    enumerable: true,
    configurable: true
  });
  CastleMercenaryMissionItemVO.prototype.isFreeMission = function () {
    return this.quality == CastleMercenaryMissionItemVO.RARITY_FREE;
  };
  CastleMercenaryMissionItemVO.__initialize_static_members = function () {
    CastleMercenaryMissionItemVO.RARITY_FREE = 0;
    CastleMercenaryMissionItemVO.RARITY_COMMON = 1;
    CastleMercenaryMissionItemVO.RARITY_RARE = 2;
    CastleMercenaryMissionItemVO.RARITY_EPIC = 3;
    CastleMercenaryMissionItemVO.RARITY_LEGENDARY = 4;
  };
  return CastleMercenaryMissionItemVO;
}(o.ScrollItemVO);
exports.CastleMercenaryMissionItemVO = l;
var c = require("./50.js");
l.__initialize_static_members();