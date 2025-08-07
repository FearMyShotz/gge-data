Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./1775.js");
var d = require("./1098.js");
var p = require("./4.js");
var h = function (e) {
  function SeasonTravelGoodsMinuteSkipProperties(t, i) {
    var n = e.call(this) || this;
    n.treasureMapVO = t;
    n.seasonEventVO = i;
    return n;
  }
  n.__extends(SeasonTravelGoodsMinuteSkipProperties, e);
  SeasonTravelGoodsMinuteSkipProperties.prototype.getMinuteSkipCommand = function (e) {
    return new u.C2SMinuteSkipMapTransferVO(e, this.seasonEventVO.mapID, 2);
  };
  SeasonTravelGoodsMinuteSkipProperties.prototype.getFullSkipCommand = function () {
    return new d.C2STreasuremapSkipTransferVO(this.seasonEventVO.eventId, this.treasureMapVO.mapID, 2);
  };
  SeasonTravelGoodsMinuteSkipProperties.prototype.isSkipAppliable = function () {
    return !!this.treasureMapVO && this.treasureMapVO.remainingGoodsTransferTimeInSeconds > 0;
  };
  SeasonTravelGoodsMinuteSkipProperties.prototype.isFreeSkipActive = function () {
    return false;
  };
  SeasonTravelGoodsMinuteSkipProperties.prototype.isPrimeSaleActive = function () {
    return false;
  };
  SeasonTravelGoodsMinuteSkipProperties.prototype.getPrimeSaleDiscount = function () {
    return 0;
  };
  SeasonTravelGoodsMinuteSkipProperties.prototype.getNameText = function () {
    return new r.LocalizedTextVO("dialog_season_sendResources");
  };
  SeasonTravelGoodsMinuteSkipProperties.prototype.getAdditionalInfo = function () {
    return new l.TextVO(this.seasonEventVO.seasonNameString);
  };
  SeasonTravelGoodsMinuteSkipProperties.prototype.getIconFrame = function () {
    return c.int(g.CastleMinuteSkipDialog.ICONFRAME_RESOURCE_TRANSFER);
  };
  SeasonTravelGoodsMinuteSkipProperties.prototype.getIconToolTipText = function () {
    return "dialog_season_sendResources";
  };
  SeasonTravelGoodsMinuteSkipProperties.prototype.displayPicture = function (e) {
    var t = new Library.CastleInterfaceElements_Icons.Icon_ChangeWorld();
    t.gotoAndStop(this.changeWorldIconFrame);
    return e.addChild(t);
  };
  SeasonTravelGoodsMinuteSkipProperties.prototype.getTotalTime = function () {
    return this.treasureMapVO.travelTime;
  };
  SeasonTravelGoodsMinuteSkipProperties.prototype.getRemainingTime = function () {
    return this.treasureMapVO.remainingGoodsTransferTimeInSeconds;
  };
  SeasonTravelGoodsMinuteSkipProperties.prototype.getSkipCost = function () {
    return c.int(p.CastleModel.costsData.getFinalCostsC2(this.treasureMapVO.skipCostC2));
  };
  Object.defineProperty(SeasonTravelGoodsMinuteSkipProperties.prototype, "changeWorldIconFrame", {
    get: function () {
      switch (this.seasonEventVO.eventId) {
        case s.EventConst.EVENTTYPE_CRUSADE_THORNKING:
          return 5;
        case s.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN:
          return 7;
        case s.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD:
          return 9;
      }
      return 1;
    },
    enumerable: true,
    configurable: true
  });
  SeasonTravelGoodsMinuteSkipProperties.prototype.getRemainingTimeUntilFreeSkip = function () {
    return 0;
  };
  SeasonTravelGoodsMinuteSkipProperties.prototype.getRemainingPrimeSaleTime = function () {
    return 0;
  };
  return SeasonTravelGoodsMinuteSkipProperties;
}(o.BasicProperties);
exports.SeasonTravelGoodsMinuteSkipProperties = h;
var g = require("./208.js");
a.classImplementsInterfaces(h, "IMinuteSkipProperties");