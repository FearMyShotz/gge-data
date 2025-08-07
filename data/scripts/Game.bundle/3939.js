Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./6.js");
var p = require("./51.js");
var h = require("./31.js");
var g = require("./19.js");
var C = require("./4.js");
var _ = require("./372.js");
var m = createjs.Point;
var f = function (e) {
  function CastlePrimeSaleSeasonPassDialog() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastlePrimeSaleSeasonPassDialog, e);
  CastlePrimeSaleSeasonPassDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    o.BasicModel.smartfoxClient.sendCommandVO(new I.C2SGetSeasonPassPriceInfoEventVO());
    T.CastleBasicController.getInstance().addEventListener(v.SeasonLeagueEvent.ON_PASS_PRICES_UPDATED, this.bindFunction(this.onUpdateInfo));
    var i = this.getSaleEventVO();
    if (i) {
      this.onUpdateInfo();
      this.textFieldManager.registerTextField(this.dialogDisp.txt_name, new l.LocalizedTextVO("dialog_seasonLeague_infoSection_seasonPass_header"));
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new l.LocalizedTextVO("dialog_primeday_primesale_kingdomsLeague_seasonPass_description"));
      this.textFieldManager.registerTextField(this.dialogDisp.mc_limited_offer.txt_limited_offer, new l.LocalizedTextVO("dialog_primeday_primesale_saveCosts", [i.discount]));
      this.textFieldManager.registerTextField(this.dialogDisp.btn_ok.txt_buy, new l.LocalizedTextVO("dialog_questInfo_showMe"));
      var n = this.dialogDisp.mc_percentOff;
      n.visible = true;
      this.textFieldManager.registerTextField(n.txt_percentOff, new l.LocalizedTextVO(a.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [i.discount]));
      var s = new O.CollectableItemSeasonLeagueSeasonPassVO();
      var r = this.dialogDisp.mc_package_container.mc_package;
      this.dialogDisp.mc_package_container.visible = true;
      this.dialogDisp.mc_package_container.mc_quantity.visible = false;
      this.textFieldManager.registerTextField(this.dialogDisp.mc_package_container.txt_name, new l.LocalizedTextVO(s.getNameTextId())).verticalAlign = o.GGSVerticalAlign.MIDDLE;
      E.CollectableRenderHelper.displaySingleItemComplete(this, new h.CollectableRenderClips(r).addInfoBtn(r.parent.btn_info), new O.CollectableItemSeasonLeagueSeasonPassVO(), new g.CollectableRenderOptions(g.CollectableRenderOptions.SET_BASIC, new m(80, 80)));
    }
  };
  CastlePrimeSaleSeasonPassDialog.prototype.onUpdateInfo = function (e = null) {
    var t = this.getSaleEventVO();
    if (t) {
      var i = d.int(C.CastleModel.seasonLeagueData.getCurrentSeasonPassCostWithSale());
      var n = d.int(i / (1 - t.discount / 100));
      var o = (i - n) * -1;
      this.dialogDisp.mc_old_costs.mouseChildren = false;
      this.dialogDisp.mc_old_costs.toolTipText = u.Localize.text(_.CastleAbstractPrimeSaleDialog.SAVE_COSTS, [t.discount]);
      this.textFieldManager.registerTextField(this.dialogDisp.mc_old_costs.txt_value, new c.LocalizedNumberVO(n));
      this.dialogDisp.mc_costs.mouseChildren = false;
      this.dialogDisp.mc_costs.toolTipText = _.CastleAbstractPrimeSaleDialog.SPECIAL_PRICE;
      this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.txt_value, new c.LocalizedNumberVO(i));
      this.dialogDisp.mc_limited_offer.gotoAndStop(2);
      this.textFieldManager.registerTextField(this.dialogDisp.mc_limited_offer.txt_limited_offer, new l.LocalizedTextVO("dialog_privateOffer_whaleChest_rubySave", [o]));
    }
  };
  CastlePrimeSaleSeasonPassDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    T.CastleBasicController.getInstance().removeEventListener(v.SeasonLeagueEvent.ON_PASS_PRICES_UPDATED, this.bindFunction(this.onUpdateInfo));
  };
  CastlePrimeSaleSeasonPassDialog.prototype.getSaleEventVO = function () {
    return C.CastleModel.specialEventData.getActiveEventByEventId(r.EventConst.EVENTTYPE_PRIME_SALES_KINGDOM_LEAGUE_PASS);
  };
  CastlePrimeSaleSeasonPassDialog.prototype.getRemainingTime = function () {
    var e = this.getSaleEventVO();
    return d.int(e ? e.remainingEventTimeInSeconds : 0);
  };
  CastlePrimeSaleSeasonPassDialog.prototype.isOffer = function () {
    return true;
  };
  CastlePrimeSaleSeasonPassDialog.prototype.isEvent = function () {
    return true;
  };
  CastlePrimeSaleSeasonPassDialog.prototype.getCharacterName = function () {
    return p.ClientConstCharacter.CHARACTER_FULL_SIZE_ASSET_SWEET_PRINCESS;
  };
  CastlePrimeSaleSeasonPassDialog.prototype.onOkButton = function () {
    this.hide();
    y.CastleExternalDialog.dialogHandler.registerDefaultDialogs(b.SeasonLeagueBuyPassesDialog, new D.SeasonLeagueBuyPassesDialogProperties());
  };
  CastlePrimeSaleSeasonPassDialog.prototype.onRemoveSpecialEvent = function (e) {
    if (e.specialEventVO.eventId == r.EventConst.EVENTTYPE_PRIME_SALES_KINGDOM_LEAGUE_PASS) {
      this.hide();
    }
  };
  CastlePrimeSaleSeasonPassDialog.NAME = "CastlePrimeSaleBoosterDialog";
  return CastlePrimeSaleSeasonPassDialog;
}(_.CastleAbstractPrimeSaleDialog);
exports.CastlePrimeSaleSeasonPassDialog = f;
var O = require("./649.js");
var E = require("./25.js");
var y = require("./11.js");
var b = require("./808.js");
var D = require("./1069.js");
var I = require("./1063.js");
var T = require("./15.js");
var v = require("./174.js");
s.classImplementsInterfaces(f, "ICollectableRendererList");