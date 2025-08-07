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
  function SeasonTravelUnitsMinuteSkipProperties(t, i) {
    var n = e.call(this) || this;
    n.treasureMapVO = t;
    n.seasonEventVO = i;
    return n;
  }
  n.__extends(SeasonTravelUnitsMinuteSkipProperties, e);
  SeasonTravelUnitsMinuteSkipProperties.prototype.getMinuteSkipCommand = function (e) {
    return new u.C2SMinuteSkipMapTransferVO(e, this.seasonEventVO.mapID, 1);
  };
  SeasonTravelUnitsMinuteSkipProperties.prototype.getFullSkipCommand = function () {
    return new d.C2STreasuremapSkipTransferVO(this.seasonEventVO.eventId, this.treasureMapVO.mapID, 1);
  };
  SeasonTravelUnitsMinuteSkipProperties.prototype.isSkipAppliable = function () {
    return !!this.treasureMapVO && this.treasureMapVO.remainingTroopsTransferTimeInSeconds > 0;
  };
  SeasonTravelUnitsMinuteSkipProperties.prototype.isFreeSkipActive = function () {
    return false;
  };
  SeasonTravelUnitsMinuteSkipProperties.prototype.isPrimeSaleActive = function () {
    return false;
  };
  SeasonTravelUnitsMinuteSkipProperties.prototype.getPrimeSaleDiscount = function () {
    return 0;
  };
  SeasonTravelUnitsMinuteSkipProperties.prototype.getNameText = function () {
    return new r.LocalizedTextVO("dialog_season_sendTroops");
  };
  SeasonTravelUnitsMinuteSkipProperties.prototype.getAdditionalInfo = function () {
    return new l.TextVO(this.seasonEventVO.seasonNameString);
  };
  SeasonTravelUnitsMinuteSkipProperties.prototype.getIconFrame = function () {
    return c.int(g.CastleMinuteSkipDialog.ICONFRAME_UNIT_TRANSFER);
  };
  SeasonTravelUnitsMinuteSkipProperties.prototype.getIconToolTipText = function () {
    return "dialog_season_sendTroops";
  };
  SeasonTravelUnitsMinuteSkipProperties.prototype.displayPicture = function (e) {
    var t = new Library.CastleInterfaceElements_Icons.Icon_ChangeWorld();
    t.gotoAndStop(this.changeWorldIconFrame);
    return e.addChild(t);
  };
  SeasonTravelUnitsMinuteSkipProperties.prototype.getTotalTime = function () {
    return this.treasureMapVO.travelTime;
  };
  SeasonTravelUnitsMinuteSkipProperties.prototype.getRemainingTime = function () {
    return this.treasureMapVO.remainingTroopsTransferTimeInSeconds;
  };
  SeasonTravelUnitsMinuteSkipProperties.prototype.getSkipCost = function () {
    return c.int(p.CastleModel.costsData.getFinalCostsC2(this.treasureMapVO.skipCostC2));
  };
  Object.defineProperty(SeasonTravelUnitsMinuteSkipProperties.prototype, "changeWorldIconFrame", {
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
  SeasonTravelUnitsMinuteSkipProperties.prototype.getRemainingTimeUntilFreeSkip = function () {
    return 0;
  };
  SeasonTravelUnitsMinuteSkipProperties.prototype.getRemainingPrimeSaleTime = function () {
    return 0;
  };
  return SeasonTravelUnitsMinuteSkipProperties;
}(o.BasicProperties);
exports.SeasonTravelUnitsMinuteSkipProperties = h;
var g = require("./208.js");
a.classImplementsInterfaces(h, "IMinuteSkipProperties");