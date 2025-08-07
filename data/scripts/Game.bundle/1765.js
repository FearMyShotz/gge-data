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
var u = require("./663.js");
var d = require("./1716.js");
var p = require("./4.js");
var h = function (e) {
  function KingdomGoodsTravelMinuteSkipProperties(t) {
    var i = this;
    i.kingdomID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).kingdomID = t;
    return i;
  }
  n.__extends(KingdomGoodsTravelMinuteSkipProperties, e);
  Object.defineProperty(KingdomGoodsTravelMinuteSkipProperties.prototype, "transferVO", {
    get: function () {
      return p.CastleModel.kingdomData.getIncomingGoodsTransferByKingdomID(this.kingdomID);
    },
    enumerable: true,
    configurable: true
  });
  KingdomGoodsTravelMinuteSkipProperties.prototype.getMinuteSkipCommand = function (e) {
    return new d.C2SMinuteSkipKingdomTransferVO(e, this.transferVO.targetKingdomID, 2);
  };
  KingdomGoodsTravelMinuteSkipProperties.prototype.getFullSkipCommand = function () {
    return new u.C2SKingdomSkipTransferVO(this.transferVO.targetKingdomID, 2);
  };
  KingdomGoodsTravelMinuteSkipProperties.prototype.isSkipAppliable = function () {
    return !!this.transferVO && this.transferVO.remainingTimeInSeconds > 0;
  };
  KingdomGoodsTravelMinuteSkipProperties.prototype.isFreeSkipActive = function () {
    return false;
  };
  KingdomGoodsTravelMinuteSkipProperties.prototype.isPrimeSaleActive = function () {
    return false;
  };
  KingdomGoodsTravelMinuteSkipProperties.prototype.getPrimeSaleDiscount = function () {
    return 0;
  };
  KingdomGoodsTravelMinuteSkipProperties.prototype.getNameText = function () {
    return new r.LocalizedTextVO("dialog_season_sendResources");
  };
  KingdomGoodsTravelMinuteSkipProperties.prototype.getAdditionalInfo = function () {
    return new l.TextVO(this.kingdomVO.kingdomNameString);
  };
  KingdomGoodsTravelMinuteSkipProperties.prototype.getIconFrame = function () {
    return c.int(g.CastleMinuteSkipDialog.ICONFRAME_RESOURCE_TRANSFER);
  };
  KingdomGoodsTravelMinuteSkipProperties.prototype.getIconToolTipText = function () {
    return "dialog_season_sendResources";
  };
  KingdomGoodsTravelMinuteSkipProperties.prototype.displayPicture = function (e) {
    var t = new Library.CastleInterfaceElements_Icons.Icon_ChangeWorld();
    t.gotoAndStop(this.changeWorldIconFrame);
    return e.addChild(t);
  };
  KingdomGoodsTravelMinuteSkipProperties.prototype.getTotalTime = function () {
    return this.transferVO.totalTravelTimeInSeconds;
  };
  KingdomGoodsTravelMinuteSkipProperties.prototype.getRemainingTime = function () {
    return this.transferVO.remainingTimeInSeconds;
  };
  KingdomGoodsTravelMinuteSkipProperties.prototype.getSkipCost = function () {
    return c.int(p.CastleModel.costsData.getFinalCostsC2(this.kingdomVO.skipResourceTravelC2Cost));
  };
  Object.defineProperty(KingdomGoodsTravelMinuteSkipProperties.prototype, "kingdomVO", {
    get: function () {
      return p.CastleModel.kingdomData.getKingdomVOByID(this.transferVO.targetKingdomID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingdomGoodsTravelMinuteSkipProperties.prototype, "changeWorldIconFrame", {
    get: function () {
      if (this.kingdomVO.kID == s.WorldIsland.KINGDOM_ID) {
        return 8;
      } else {
        return this.kingdomVO.kID + 1;
      }
    },
    enumerable: true,
    configurable: true
  });
  KingdomGoodsTravelMinuteSkipProperties.prototype.getRemainingTimeUntilFreeSkip = function () {
    return 0;
  };
  KingdomGoodsTravelMinuteSkipProperties.prototype.getRemainingPrimeSaleTime = function () {
    return 0;
  };
  return KingdomGoodsTravelMinuteSkipProperties;
}(o.BasicProperties);
exports.KingdomGoodsTravelMinuteSkipProperties = h;
var g = require("./208.js");
a.classImplementsInterfaces(h, "IMinuteSkipProperties");