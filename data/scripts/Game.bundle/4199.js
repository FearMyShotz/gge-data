Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./58.js");
var r = require("./39.js");
var l = require("./438.js");
var c = require("./390.js");
var u = require("./4.js");
var d = require("./439.js");
var p = function (e) {
  function ButtonTradeComponent(t) {
    return e.call(this, t) || this;
  }
  n.__extends(ButtonTradeComponent, e);
  ButtonTradeComponent.prototype.initAsRingmenuButton = function () {
    this._button.visible = this._worldMapObjectVO.canBeTraded;
    this._button.toolTipText = null;
    this._button.enableButton = true;
    if (this._worldMapObjectVO.isUnderConquerControl) {
      this._button.enableButton = false;
      this._button.toolTipText = "outpost_ringMenu_beingOccupied";
    } else if (a.instanceOfClass(this._worldMapObjectVO, "FactionInteractiveMapobjectVO") && u.CastleModel.userData.castleList.listWithoutOcupiedOrDestroyedFactionCamps.length == 0) {
      this._button.enableButton = false;
      this._button.toolTipText = "panel_action_castle_spectator";
    } else if (u.CastleModel.userData.userLevel < s.ClientConstLevelRestrictions.MIN_LEVEL_TRADE) {
      this._button.enableButton = false;
      this._button.toolTipText = {
        t: r.ClientConstTextIds.LEVEL_NEEDED,
        p: [s.ClientConstLevelRestrictions.MIN_LEVEL_TRADE]
      };
    }
  };
  Object.defineProperty(ButtonTradeComponent.prototype, "targetWMO", {
    set: function (e) {
      this._worldMapObjectVO = e;
    },
    enumerable: true,
    configurable: true
  });
  ButtonTradeComponent.prototype.onClick = function () {
    u.CastleModel.tradeData.addEventListener(c.CastleTradeDataEvent.GET_MARKET_INFOS, this.bindFunction(this.onGetMarketInfos));
    u.CastleModel.smartfoxClient.sendCommandVO(new l.C2SMarketInfoVO());
  };
  ButtonTradeComponent.prototype.onGetMarketInfos = function (e) {
    if (e.openDialog) {
      h.CastleDialogHandler.getInstance().registerDefaultDialogs(g.CastleSendGoodsDialog, new d.CastleSendGoodsDialogProperties(this._worldMapObjectVO, e.tradeInfoVO));
    }
    u.CastleModel.tradeData.removeEventListener(c.CastleTradeDataEvent.GET_MARKET_INFOS, this.bindFunction(this.onGetMarketInfos));
  };
  Object.defineProperty(ButtonTradeComponent.prototype, "infoTextId", {
    get: function () {
      return "ringmenu_trade_menu";
    },
    enumerable: true,
    configurable: true
  });
  return ButtonTradeComponent;
}(require("./150.js").ButtonBasicComponent);
exports.ButtonTradeComponent = p;
var h = require("./9.js");
var g = require("./440.js");
o.classImplementsInterfaces(p, "IWorldMapObjectRingmenuButtonComponent");