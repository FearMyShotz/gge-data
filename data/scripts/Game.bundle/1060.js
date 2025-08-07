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
var u = require("./1.js");
var d = require("./5.js");
var p = require("./3.js");
var h = require("./3.js");
var g = require("./3.js");
var C = require("./6.js");
var _ = require("./51.js");
var m = require("./4.js");
var f = require("./24.js");
var O = require("./8.js");
var E = function (e) {
  function CastleCollectTaxProgressDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleCollectTaxProgressDialog.NAME) || this;
  }
  n.__extends(CastleCollectTaxProgressDialog, e);
  CastleCollectTaxProgressDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.txtInfo ||= this.textFieldManager.registerTextField(this.dialogDisp.txtInfo, new h.LocalizedTextVO("collect_taxCollecting_description"));
    this.txtInfoPopulation ||= this.textFieldManager.registerTextField(this.dialogDisp.infoPopulation.txt_value, new g.TextVO(""));
    this.txtInfoBribeBonus ||= this.textFieldManager.registerTextField(this.dialogDisp.infoBribeBonus.txt_value, new h.LocalizedTextVO("-"));
    this.dialogDisp.infoPopulation.toolTipText = "population";
    this.dialogDisp.btn_bribe.toolTipText = "dialog_collecttax_btn_bribe";
    this.dialogDisp.progressBar.toolTipText = null;
    this.dialogDisp.infoBribeBonus.mouseChildren = false;
    this.dialogDisp.infoPopulation.mouseChildren = false;
  };
  CastleCollectTaxProgressDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    if (this.taxInfoVO.isCollecting && this.dialogDisp.btn_collect.enabled) {
      O.ButtonHelper.delayEnableButton(this.dialogDisp.btn_collect, true);
    }
  };
  CastleCollectTaxProgressDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    r.MovieClipHelper.clearMovieClip(this.dialogDisp.charHolder);
    var i = new f.CastleGoodgameExternalClip("CharTaxes", o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("CharTaxes"), null, 0, false, u.getDefinitionByName("QuestGiverBig_" + _.ClientConstCharacter.CHAR_ID_UNKNOWN));
    i.clipSizeComponent = new a.ClipSizeComponent(189, 213);
    this.dialogDisp.charHolder.addChild(i);
    O.ButtonHelper.enableButton(this.dialogDisp.btn_help, true);
  };
  CastleCollectTaxProgressDialog.prototype.onTaxDataUpdated = function (t = null) {
    this.txtInfoPopulation.textContentVO.stringValue = String(this.taxInfoVO.population);
    e.prototype.onTaxDataUpdated.call(this, t);
    if (this.taxInfoVO.isBoostedCollection || m.CastleModel.boostData.taxBribeVO.isActive) {
      this.dialogDisp.infoBribeBonus.toolTipText = l.TimeStringHelper.getTimeToString(m.CastleModel.boostData.taxBribeVO.remainingTimeInSeconds, l.TimeStringHelper.TWO_TIME_FORMAT, p.Localize.text);
      this.txtInfoBribeBonus.textContentVO.textId = s.GenericTextIds.VALUE_PERCENTAGE;
      this.txtInfoBribeBonus.textContentVO.textReplacements = [Math.round(d.BoosterConst.TAX_BRIBE_BOOST * 100)];
    } else {
      this.dialogDisp.infoBribeBonus.toolTipText = "dialog_collecttax_bribebonus";
      O.ButtonHelper.enableButton(this.dialogDisp.btn_bribe, this.isOutOfTutorial());
      this.txtInfoBribeBonus.textContentVO.textId = "-";
    }
    var i = C.int(m.CastleModel.boosterSaleData.getDiscount(d.BoosterConst.TAX));
    if (this.isOutOfTutorial() && i > 0) {
      this.dialogDisp.btn_bribe.mc_discount.visible = true;
      this.textFieldManager.registerTextField(this.dialogDisp.btn_bribe.mc_discount.txt_value, new h.LocalizedTextVO(s.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [i]));
    } else {
      this.dialogDisp.btn_bribe.mc_discount.visible = false;
    }
  };
  CastleCollectTaxProgressDialog.__initialize_static_members = function () {
    CastleCollectTaxProgressDialog.NAME = "CastleCollectTaxProgress";
  };
  return CastleCollectTaxProgressDialog;
}(require("./3383.js").CastleCollectTaxDialog);
exports.CastleCollectTaxProgressDialog = E;
c.classImplementsInterfaces(E, "ICollectableRendererList");
E.__initialize_static_members();