Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./6.js");
var o = require("./28.js");
var a = require("./22.js");
var s = require("./12.js");
var r = require("./45.js");
var l = require("./155.js");
var c = require("./30.js");
var u = require("./4.js");
var d = require("./165.js");
var p = require("./52.js");
var h = require("./5.js");
var g = function () {
  function OfficersSchoolEffectVO() {
    this.id = 0;
    this.eventID = 0;
    this.effectID = 0;
    this.c1Cost = 0;
    this.c2Cost = 0;
    this.costKhanTablet = 0;
    this.costKhanMedal = 0;
    this.costSamuraiToken = 0;
    this.endTimestamp = NaN;
    this.wodIDs = [];
    this.isLockedAgainstRefresh = false;
    this.slotID = 0;
    this.durationInSeconds = NaN;
  }
  OfficersSchoolEffectVO.prototype.parseXml = function (e) {
    this.id = n.int(a.CastleXMLUtils.getIntAttribute("id", e, -1));
    this.effectID = n.int(a.CastleXMLUtils.getIntAttribute("effectID", e, -1));
    this.eventID = n.int(a.CastleXMLUtils.getIntAttribute("eventID", e, -1));
    this.c1Cost = n.int(a.CastleXMLUtils.getIntAttribute("c1Cost", e, -1));
    this.c2Cost = n.int(a.CastleXMLUtils.getIntAttribute("c2Cost", e, -1));
    this.costKhanTablet = n.int(a.CastleXMLUtils.getIntAttribute("costKhanTablet", e, -1));
    this.costKhanMedal = n.int(a.CastleXMLUtils.getIntAttribute("costKhanMedal", e, -1));
    this.costSamuraiToken = n.int(a.CastleXMLUtils.getIntAttribute("costSamuraiToken", e, -1));
    this.effectVO = u.CastleModel.effectsData.getEffectByID(this.effectID);
  };
  Object.defineProperty(OfficersSchoolEffectVO.prototype, "prolongDurationInHours", {
    get: function () {
      return h.TrainingConst.calculateProlongationDuration(this.durationInSeconds) * o.ClientConstTime.SEC_2_HOURES;
    },
    enumerable: true,
    configurable: true
  });
  OfficersSchoolEffectVO.prototype.getCost = function () {
    switch (this.slotID) {
      case 3:
        return r.CollectableHelper.createVO(s.CollectableEnum.C2, this.c2Cost);
      case 2:
        return this.getEventCostsAsCollectableVOByID();
      case 1:
        return r.CollectableHelper.createVO(s.CollectableEnum.C1, this.c1Cost);
    }
    return null;
  };
  OfficersSchoolEffectVO.prototype.getEventCostsAsCollectableVOByID = function () {
    var e = new l.CollectableItemGenericCurrencyVO(u.CastleModel.officerSchoolData.dailyCurrency);
    switch (e.id) {
      case p.ClientConstCurrency.ID_KHAN_MEDAL:
        e.amount = this.costKhanMedal;
        break;
      case p.ClientConstCurrency.ID_KHAN_TABLET:
        e.amount = this.costKhanTablet;
        break;
      case p.ClientConstCurrency.ID_SAMURAI_TOKEN:
        e.amount = this.costSamuraiToken;
    }
    return e;
  };
  OfficersSchoolEffectVO.prototype.setBonusVOByValueArray = function (e) {
    this.effectVO = u.CastleModel.effectsData.getEffectByID(e[0]);
    this.bonusVO = new d.BonusVO().parseFromValueArray(this.effectVO, e[1]);
    this.wodIDs = this.bonusVO.effectValue.getWodIds();
  };
  OfficersSchoolEffectVO.prototype.clone = function () {
    var e = new OfficersSchoolEffectVO();
    e.bonusVO = this.bonusVO;
    e.c1Cost = this.c1Cost;
    e.c2Cost = this.c2Cost;
    e.costKhanMedal = this.costKhanMedal;
    e.costKhanTablet = this.costKhanTablet;
    e.costSamuraiToken = this.costSamuraiToken;
    e.effectID = this.effectID;
    e.effectVO = this.effectVO;
    e.eventID = this.eventID;
    e.id = this.id;
    return e;
  };
  OfficersSchoolEffectVO.prototype.setActiveTime = function (e) {
    this.endTimestamp = c.CachedTimer.getCachedTimer() + e * o.ClientConstTime.SEC_2_MILLISEC;
  };
  Object.defineProperty(OfficersSchoolEffectVO.prototype, "remainingTimeInSeconds", {
    get: function () {
      return Math.max(0, (this.endTimestamp - c.CachedTimer.getCachedTimer()) * o.ClientConstTime.MILLISEC_2_SEC);
    },
    enumerable: true,
    configurable: true
  });
  return OfficersSchoolEffectVO;
}();
exports.OfficersSchoolEffectVO = g;