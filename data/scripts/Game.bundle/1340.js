Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./4.js");
var p = require("./939.js");
var h = function (e) {
  function ButtonGiftComponent(t) {
    var i = this;
    i._targetPlayerID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this)._targetPlayerID = -1;
    return i;
  }
  n.__extends(ButtonGiftComponent, e);
  Object.defineProperty(ButtonGiftComponent.prototype, "targetWMO", {
    set: function (e) {
      this._worldMapObjectVO = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ButtonGiftComponent.prototype, "targetPlayerID", {
    set: function (e) {
      this._targetPlayerID = e;
    },
    enumerable: true,
    configurable: true
  });
  ButtonGiftComponent.prototype.initAsRingmenuButton = function () {
    this.initButton();
  };
  ButtonGiftComponent.prototype.initAsPlayerInfoButton = function () {
    this.initButton();
  };
  ButtonGiftComponent.prototype.initButton = function () {
    var e = d.CastleModel.playerGiftData.playerGifts.length > 0;
    var t = d.CastleModel.specialEventData.isEventActive(s.EventConst.EVENTTYPE_GIFT_TRADER);
    var i = this._targetPlayerID == d.CastleModel.userData.playerID;
    var n = d.CastleModel.playerGiftData.sendablePackageAmount <= 0;
    var o = true;
    if (this._worldMapObjectVO) {
      o = !this._worldMapObjectVO.isOwnMapobject && a.instanceOfClass(this._worldMapObjectVO, "CastleMapobjectVO") && this._worldMapObjectVO.kingdomID == l.WorldClassic.KINGDOM_ID;
    }
    this._button.disp.visible = o && !i && (e || t);
    this._button.enableButton = true;
    if (e) {
      this._button.disp.toolTipText = n ? c.Localize.text("giftTrader_giftLimit", [r.PackageConst.MAX_PLAYER_GIFT_PER_DAY]) : "dialog_sendGift_tooltip";
    } else {
      this._button.enableButton = false;
      this._button.disp.toolTipText = "ringmenu_noGifts_tooltip";
    }
  };
  ButtonGiftComponent.prototype.onClick = function () {
    var e = u.int(this._targetPlayerID > -1 ? this._targetPlayerID : this._worldMapObjectVO.ownerInfo.playerID);
    g.CastleDialogHandler.getInstance().registerDefaultDialogs(C.CastlePlayerGiftSelectionDialog, new p.CastlePlayerGiftSelectionProperties(e));
  };
  Object.defineProperty(ButtonGiftComponent.prototype, "infoTextId", {
    get: function () {
      return "ringmenu_gift";
    },
    enumerable: true,
    configurable: true
  });
  return ButtonGiftComponent;
}(require("./150.js").ButtonBasicComponent);
exports.ButtonGiftComponent = h;
var g = require("./9.js");
var C = require("./940.js");
o.classImplementsInterfaces(h, "IWorldMapObjectRingmenuButtonComponent");