Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./2721.js");
var u = require("./1472.js");
var d = require("./4.js");
var p = function (e) {
  function ResearchMinuteSkipProperties() {
    return e.call(this) || this;
  }
  n.__extends(ResearchMinuteSkipProperties, e);
  ResearchMinuteSkipProperties.prototype.getMinuteSkipCommand = function (e) {
    return new c.C2SMinuteSkipResearchVO(e);
  };
  ResearchMinuteSkipProperties.prototype.getFullSkipCommand = function () {
    return new u.C2SResearchFinishInstantVO();
  };
  ResearchMinuteSkipProperties.prototype.isSkipAppliable = function () {
    return d.CastleModel.researchData.isSomeResearchActive;
  };
  ResearchMinuteSkipProperties.prototype.isFreeSkipActive = function () {
    return false;
  };
  ResearchMinuteSkipProperties.prototype.isPrimeSaleActive = function () {
    return false;
  };
  ResearchMinuteSkipProperties.prototype.getPrimeSaleDiscount = function () {
    return 0;
  };
  ResearchMinuteSkipProperties.prototype.getNameText = function () {
    return new r.LocalizedTextVO(ResearchMinuteSkipProperties.researchVO.fullNameText);
  };
  ResearchMinuteSkipProperties.prototype.getAdditionalInfo = function () {
    return new r.LocalizedTextVO("building_level", [ResearchMinuteSkipProperties.researchVO.level]);
  };
  ResearchMinuteSkipProperties.prototype.getIconFrame = function () {
    return l.int(g.CastleMinuteSkipDialog.ICONFRAME_RESEARCH);
  };
  ResearchMinuteSkipProperties.prototype.getIconToolTipText = function () {
    return "research";
  };
  ResearchMinuteSkipProperties.prototype.displayPicture = function (e) {
    h.ResearchIconHelper.addResearchIcon(ResearchMinuteSkipProperties.researchVO.groupVO, e);
    return e;
  };
  ResearchMinuteSkipProperties.prototype.getTotalTime = function () {
    return ResearchMinuteSkipProperties.researchVO.researchDuration;
  };
  ResearchMinuteSkipProperties.prototype.getRemainingTime = function () {
    return d.CastleModel.researchData.remainingResearchTimeInSeconds();
  };
  ResearchMinuteSkipProperties.prototype.getSkipCost = function () {
    return l.int(s.ResearchConst.getFastCompleteCostC2(d.CastleModel.researchData.remainingResearchTimeInSeconds(), d.CastleModel.userData.userLevel));
  };
  Object.defineProperty(ResearchMinuteSkipProperties, "researchVO", {
    get: function () {
      return d.CastleModel.researchData.currentResearchVO;
    },
    enumerable: true,
    configurable: true
  });
  ResearchMinuteSkipProperties.prototype.getRemainingTimeUntilFreeSkip = function () {
    return 0;
  };
  ResearchMinuteSkipProperties.prototype.getRemainingPrimeSaleTime = function () {
    return 0;
  };
  return ResearchMinuteSkipProperties;
}(o.BasicProperties);
exports.ResearchMinuteSkipProperties = p;
var h = require("./631.js");
var g = require("./208.js");
a.classImplementsInterfaces(p, "IMinuteSkipProperties");