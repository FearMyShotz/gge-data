Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./5.js");
var u = require("./5.js");
var d = require("./5.js");
var p = require("./3.js");
var h = require("./3.js");
var g = require("./6.js");
var C = require("./662.js");
var _ = require("./1714.js");
var m = require("./4.js");
var f = function (e) {
  function KingdomUnitsTravelMinuteSkipProperties(t) {
    var i = this;
    i.kingdomID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).kingdomID = t;
    return i;
  }
  n.__extends(KingdomUnitsTravelMinuteSkipProperties, e);
  Object.defineProperty(KingdomUnitsTravelMinuteSkipProperties.prototype, "transferVO", {
    get: function () {
      return m.CastleModel.kingdomData.getIncomingUnitsTransferByKingdomID(this.kingdomID);
    },
    enumerable: true,
    configurable: true
  });
  KingdomUnitsTravelMinuteSkipProperties.prototype.getMinuteSkipCommand = function (e) {
    return new _.C2SMinuteSkipKingdomTransferVO(e, this.transferVO.targetKingdomID, 1);
  };
  KingdomUnitsTravelMinuteSkipProperties.prototype.getFullSkipCommand = function () {
    return new C.C2SKingdomSkipTransferVO(this.transferVO.targetKingdomID, 1);
  };
  KingdomUnitsTravelMinuteSkipProperties.prototype.isSkipAppliable = function () {
    return !!this.transferVO && this.transferVO.remainingTimeInSeconds > 0;
  };
  KingdomUnitsTravelMinuteSkipProperties.prototype.isFreeSkipActive = function () {
    return false;
  };
  KingdomUnitsTravelMinuteSkipProperties.prototype.isPrimeSaleActive = function () {
    return false;
  };
  KingdomUnitsTravelMinuteSkipProperties.prototype.getPrimeSaleDiscount = function () {
    return 0;
  };
  KingdomUnitsTravelMinuteSkipProperties.prototype.getNameText = function () {
    return new p.LocalizedTextVO("dialog_season_sendTroops");
  };
  KingdomUnitsTravelMinuteSkipProperties.prototype.getAdditionalInfo = function () {
    return new h.TextVO(this.kingdomVO.kingdomNameString);
  };
  KingdomUnitsTravelMinuteSkipProperties.prototype.getIconFrame = function () {
    return g.int(O.CastleMinuteSkipDialog.ICONFRAME_UNIT_TRANSFER);
  };
  KingdomUnitsTravelMinuteSkipProperties.prototype.getIconToolTipText = function () {
    return "dialog_season_sendTroops";
  };
  KingdomUnitsTravelMinuteSkipProperties.prototype.displayPicture = function (e) {
    var t = new Library.CastleInterfaceElements_Icons.Icon_ChangeWorld();
    t.gotoAndStop(this.changeWorldIconFrame);
    return e.addChild(t);
  };
  KingdomUnitsTravelMinuteSkipProperties.prototype.getTotalTime = function () {
    return this.transferVO.totalTravelTimeInSeconds;
  };
  KingdomUnitsTravelMinuteSkipProperties.prototype.getRemainingTime = function () {
    return this.transferVO.remainingTimeInSeconds;
  };
  KingdomUnitsTravelMinuteSkipProperties.prototype.getSkipCost = function () {
    return g.int(m.CastleModel.costsData.getFinalCostsC2(this.kingdomVO.skipUnitTravelC2Cost));
  };
  Object.defineProperty(KingdomUnitsTravelMinuteSkipProperties.prototype, "kingdomVO", {
    get: function () {
      return m.CastleModel.kingdomData.getKingdomVOByID(this.transferVO.targetKingdomID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingdomUnitsTravelMinuteSkipProperties.prototype, "changeWorldIconFrame", {
    get: function () {
      switch (this.kingdomID) {
        case r.WorldClassic.KINGDOM_ID:
          return 1;
        case l.WorldDessert.KINGDOM_ID:
          return 2;
        case c.WorldIce.KINGDOM_ID:
          return 3;
        case d.WorldVolcano.KINGDOM_ID:
          return 4;
        case u.WorldIsland.KINGDOM_ID:
          return 8;
        case s.FactionConst.KINGDOM_ID:
          return 6;
        default:
          return 1;
      }
    },
    enumerable: true,
    configurable: true
  });
  KingdomUnitsTravelMinuteSkipProperties.prototype.getRemainingTimeUntilFreeSkip = function () {
    return 0;
  };
  KingdomUnitsTravelMinuteSkipProperties.prototype.getRemainingPrimeSaleTime = function () {
    return 0;
  };
  return KingdomUnitsTravelMinuteSkipProperties;
}(o.BasicProperties);
exports.KingdomUnitsTravelMinuteSkipProperties = f;
var O = require("./208.js");
a.classImplementsInterfaces(f, "IMinuteSkipProperties");