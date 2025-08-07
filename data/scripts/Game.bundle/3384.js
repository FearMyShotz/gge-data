Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./1.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./16.js");
var g = require("./39.js");
var C = require("./3385.js");
var _ = require("./15.js");
var m = require("./4.js");
var f = require("./8.js");
var O = require("./135.js");
var E = require("./1647.js");
var y = function (e) {
  function CastleCollectTaxElement(t) {
    var i = e.call(this, t) || this;
    t.mc_cost.mouseChildren = false;
    t.mc_cost.toolTipText = g.ClientConstTextIds.COSTS;
    t.mc_duration.mouseChildren = false;
    t.mc_duration.toolTipText = "dialog_moveOverview_waitTime";
    t.mc_reward.mouseChildren = false;
    t.mc_reward.toolTipText = "earning";
    t.btn_collect.mouseChildren = false;
    t.btn_collect.toolTipText = "alert_tax_stopCollectinng_title";
    f.ButtonHelper.initBasicButtons([t.btn_collect]);
    return i;
  }
  n.__extends(CastleCollectTaxElement, e);
  CastleCollectTaxElement.prototype.customFillItem = function () {
    f.ButtonHelper.enableButton(this.disp.btn_collect, true);
    if (this.elementVO.hasC2CostWithoutPremium) {
      this.disp.mc_cost.mc_costIcon.gotoAndStop(2);
      this.textfieldManager.registerTextField(this.disp.mc_cost.txt_cost, new d.LocalizedNumberVO(this.elementVO.c2Costs), new r.InternalGGSTextFieldConfigVO(true)).color = this.elementVO.c2Costs > m.CastleModel.currencyData.c2Amount ? h.ClientConstColor.FONT_INSUFFICIENT_COLOR : h.ClientConstColor.FONT_DEFAULT_COLOR;
      this.disp.btn_collect.gotoAndStop(2);
    } else {
      this.disp.mc_cost.mc_costIcon.gotoAndStop(1);
      this.textfieldManager.registerTextField(this.disp.mc_cost.txt_cost, new d.LocalizedNumberVO(this.elementVO.c1Costs), new r.InternalGGSTextFieldConfigVO(true)).color = this.elementVO.c1Costs > m.CastleModel.currencyData.c1Amount ? h.ClientConstColor.FONT_INSUFFICIENT_COLOR : h.ClientConstColor.FONT_DEFAULT_COLOR;
      this.disp.btn_collect.gotoAndStop(1);
    }
    this.textfieldManager.registerTextField(this.disp.mc_duration.txt_duration, new p.TextVO(this.elementVO.durationString), new r.InternalGGSTextFieldConfigVO(true));
    this.textfieldManager.registerTextField(this.disp.mc_reward.txt_reward, new d.LocalizedNumberVO(this.elementVO.reward), new r.InternalGGSTextFieldConfigVO(true));
  };
  CastleCollectTaxElement.prototype.onMouseClick = function (e) {
    if (this.isActive && e.target == this.disp.btn_collect) {
      this.onStartTaxCollection();
    }
  };
  CastleCollectTaxElement.prototype.onStartTaxCollection = function () {
    if (this.elementVO.c1Costs > m.CastleModel.currencyData.c1Amount) {
      CastleCollectTaxElement.dialogHandler.registerDefaultDialogs(T.CastleStandardOkDialog, new a.BasicStandardOkDialogProperties(u.Localize.text("generic_alert_watchout"), u.Localize.text("dialog_no_money_c1_copy")));
    } else if (this.elementVO.c2Costs > m.CastleModel.currencyData.c2Amount) {
      CastleCollectTaxElement.dialogHandler.registerDefaultDialogs(I.CastleNoMoneyC2Dialog, new O.CastleNoMoneyC2DialogProperties());
    } else {
      this.dispatchEvent(new E.CastleCollectTaxElementEvent(E.CastleCollectTaxElementEvent.START_TAX_COLLECTION));
      o.BasicController.getInstance().sendServerMessageVOAndWait(new C.C2SStartCollectTaxVO(this.elementVO.taxType));
    }
  };
  Object.defineProperty(CastleCollectTaxElement.prototype, "elementVO", {
    get: function () {
      return this._scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCollectTaxElement.prototype, "textfieldManager", {
    get: function () {
      return s.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCollectTaxElement.prototype, "layoutManager", {
    get: function () {
      return D.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCollectTaxElement.prototype, "controller", {
    get: function () {
      return _.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCollectTaxElement, "dialogHandler", {
    get: function () {
      return b.CastleDialogHandler.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleCollectTaxElement;
}(l.ScrollItem);
exports.CastleCollectTaxElement = y;
var b = require("./9.js");
var D = require("./17.js");
var I = require("./138.js");
var T = require("./38.js");
c.classImplementsInterfaces(y, "MovieClip");