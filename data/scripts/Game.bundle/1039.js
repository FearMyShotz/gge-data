Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./1597.js");
var l = require("./217.js");
var c = require("./139.js");
var u = require("./218.js");
var d = require("./32.js");
var p = require("./71.js");
var h = require("./4.js");
var g = require("./8.js");
var C = function (e) {
  function CastleListDetailOverviewDialog() {
    return e.call(this, CastleListDetailOverviewDialog.NAME) || this;
  }
  n.__extends(CastleListDetailOverviewDialog, e);
  CastleListDetailOverviewDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.dialogDisp.tickEnabled = false;
    this._subLayer = new Map();
    this._subLayer.set(CastleListDetailOverviewDialog.CAT_ECONOMY, new f.CastleListDetailOverviewSublayerEconomy(this.dialogDisp.mc_sublayer_economy));
    this._subLayer.set(CastleListDetailOverviewDialog.CAT_MILITARY, new O.CastleListDetailOverviewSublayerMilitary(this.dialogDisp.mc_sublayer_military));
    this._subLayer.set(CastleListDetailOverviewDialog.CAT_MISC, new E.CastleListDetailOverviewSublayerMisc(this.dialogDisp.mc_sublayer_misc));
    this._subLayer.set(CastleListDetailOverviewDialog.CAT_CURRENCY, new m.CastleListDetailOverviewSublayerCurrency(this.dialogDisp.mc_sublayer_currency));
    this.dialogDisp.tab_economy.toolTipText = "dialog_listOverview_tabResource_tt";
    this.dialogDisp.tab_military.toolTipText = "dialog_listOverview_tabMlitary_tt";
    this.dialogDisp.tab_misc.toolTipText = "dialog_listOverview_tabMisc_tt";
    this.dialogDisp.tab_currency.toolTipText = "dialog_listOverview_tabCurrency_tt";
    g.ButtonHelper.initTwoStateButtons([this.dialogDisp.tab_economy, this.dialogDisp.tab_military, this.dialogDisp.tab_misc, this.dialogDisp.tab_currency]);
    g.ButtonHelper.initBasicButtons([this.dialogDisp.btn_close]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.LocalizedTextVO("dialog_listOverview_title"));
  };
  CastleListDetailOverviewDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    _.CrestHelper.setCrestGraphics(this.dialogDisp.mc_playerCrest1, h.CastleModel.userData.playerCrest, null, true);
    _.CrestHelper.setCrestGraphics(this.dialogDisp.mc_playerCrest2, h.CastleModel.userData.playerCrest, null, true);
    this.controller.addEventListener(u.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onDataUpdated));
    this.controller.addEventListener(d.CastleUserDataEvent.CHANGE_CASTLELIST, this.bindFunction(this.onDataUpdated));
    this.controller.addEventListener(d.CastleUserDataEvent.CHANGE_KINGSTOWERLIST, this.bindFunction(this.onDataUpdated));
    this.controller.addEventListener(d.CastleUserDataEvent.CHANGE_MONUMENTLIST, this.bindFunction(this.onDataUpdated));
    this.controller.addEventListener(d.CastleUserDataEvent.CHANGE_LABORATORYLIST, this.bindFunction(this.onDataUpdated));
    this.controller.addEventListener(d.CastleUserDataEvent.CHANGE_VILLAGELIST, this.bindFunction(this.onDataUpdated));
    this.controller.addEventListener(p.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onChangeRessources));
    this.controller.addEventListener(c.CastleArmyDataEvent.NEW_MOVEMENT, this.bindFunction(this.onNewMovement));
    this.controller.addEventListener(d.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onSpecialCurrencyChange));
    this.controller.addEventListener(d.CastleUserDataEvent.DOWNTIME_STATUS_UPDATED, this.bindFunction(this.onDataUpdated));
    this.lockDialog();
    this.getData();
  };
  CastleListDetailOverviewDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this.controller.removeEventListener(u.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onDataUpdated));
    this.controller.removeEventListener(d.CastleUserDataEvent.CHANGE_CASTLELIST, this.bindFunction(this.onDataUpdated));
    this.controller.removeEventListener(d.CastleUserDataEvent.CHANGE_KINGSTOWERLIST, this.bindFunction(this.onDataUpdated));
    this.controller.removeEventListener(d.CastleUserDataEvent.CHANGE_MONUMENTLIST, this.bindFunction(this.onDataUpdated));
    this.controller.removeEventListener(d.CastleUserDataEvent.CHANGE_LABORATORYLIST, this.bindFunction(this.onDataUpdated));
    this.controller.removeEventListener(d.CastleUserDataEvent.CHANGE_VILLAGELIST, this.bindFunction(this.onDataUpdated));
    this.controller.removeEventListener(p.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onChangeRessources));
    this.controller.removeEventListener(c.CastleArmyDataEvent.NEW_MOVEMENT, this.bindFunction(this.onNewMovement));
    this.controller.removeEventListener(d.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onSpecialCurrencyChange));
    this.controller.removeEventListener(d.CastleUserDataEvent.DOWNTIME_STATUS_UPDATED, this.bindFunction(this.onDataUpdated));
  };
  CastleListDetailOverviewDialog.prototype.onDataUpdated = function (e = null) {
    this.unLockDialog();
    if (this._currentSublayer) {
      if (this._currentSublayer != this._subLayer.get(CastleListDetailOverviewDialog.CAT_MISC)) {
        this.showSublayer(this._currentSublayer, [false]);
      }
    } else {
      this.changeCategory(CastleListDetailOverviewDialog.CAT_ECONOMY);
    }
  };
  CastleListDetailOverviewDialog.prototype.onChangeRessources = function (e) {
    if (!this.isLocked && this._currentSublayer && this._currentSublayer != this._subLayer.get(CastleListDetailOverviewDialog.CAT_MISC)) {
      this.showSublayer(this._currentSublayer, [false]);
    }
  };
  CastleListDetailOverviewDialog.prototype.onNewMovement = function (e) {
    if (e.mapmovementVO.movementOwnerInfo.playerID == h.CastleModel.userData.playerID && this._currentSublayer != this._subLayer.get(CastleListDetailOverviewDialog.CAT_MISC)) {
      this.getData();
    }
  };
  CastleListDetailOverviewDialog.prototype.onSpecialCurrencyChange = function (e) {
    if (!this.isLocked && this._currentSublayer && this._currentSublayer == this._subLayer.get(CastleListDetailOverviewDialog.CAT_MISC)) {
      this.showSublayer(this._currentSublayer, [false]);
    }
  };
  CastleListDetailOverviewDialog.prototype.getData = function () {
    h.CastleModel.smartfoxClient.sendCommandVO(new l.C2SGetDetailedCastleListVO());
    if (h.CastleModel.kingdomData.isKingdomUnlocked(a.WorldIsland.KINGDOM_ID)) {
      h.CastleModel.smartfoxClient.sendCommandVO(new r.C2SGetAquaPoints());
    }
  };
  CastleListDetailOverviewDialog.prototype.onClick = function (e) {
    switch (e.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.tab_economy:
        this.changeCategory(CastleListDetailOverviewDialog.CAT_ECONOMY);
        break;
      case this.dialogDisp.tab_military:
        this.changeCategory(CastleListDetailOverviewDialog.CAT_MILITARY);
        break;
      case this.dialogDisp.tab_misc:
        this.changeCategory(CastleListDetailOverviewDialog.CAT_MISC);
        break;
      case this.dialogDisp.tab_currency:
        this.changeCategory(CastleListDetailOverviewDialog.CAT_CURRENCY);
    }
  };
  CastleListDetailOverviewDialog.prototype.changeCategory = function (t) {
    if (!this.isLocked) {
      if (this._currentCategory == t) {
        return;
      }
      e.prototype.changeCategory.call(this, t);
      this.showSublayer(this._subLayer.get(this._currentCategory), [true]);
      g.ButtonHelper.setButtonSelected(this.dialogDisp.tab_economy, this._currentCategory == CastleListDetailOverviewDialog.CAT_ECONOMY);
      g.ButtonHelper.setButtonSelected(this.dialogDisp.tab_military, this._currentCategory == CastleListDetailOverviewDialog.CAT_MILITARY);
      g.ButtonHelper.setButtonSelected(this.dialogDisp.tab_misc, this._currentCategory == CastleListDetailOverviewDialog.CAT_MISC);
      g.ButtonHelper.setButtonSelected(this.dialogDisp.tab_currency, this._currentCategory == CastleListDetailOverviewDialog.CAT_CURRENCY);
    }
  };
  CastleListDetailOverviewDialog.NAME = "CastleListDetailOverview2";
  CastleListDetailOverviewDialog.CAT_ECONOMY = "CAT_ECONOMY";
  CastleListDetailOverviewDialog.CAT_MILITARY = "CAT_MILITARY";
  CastleListDetailOverviewDialog.CAT_MISC = "CAT_MISC";
  CastleListDetailOverviewDialog.CAT_CURRENCY = "CAT_CURRENCY";
  return CastleListDetailOverviewDialog;
}(require("./114.js").CastleExternalSubLayerDialog);
exports.CastleListDetailOverviewDialog = C;
var _ = require("./61.js");
var m = require("./3113.js");
var f = require("./3116.js");
var O = require("./1601.js");
var E = require("./3125.js");
o.classImplementsInterfaces(C, "ICollectableRendererList");