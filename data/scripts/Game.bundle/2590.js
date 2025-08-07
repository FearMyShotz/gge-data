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
var u = require("./39.js");
var d = require("./2591.js");
var p = require("./4.js");
var h = require("./11.js");
var g = createjs.MovieClip;
var C = createjs.Point;
var _ = function (e) {
  function CastleBuyPremiumFlagDialog() {
    return e.call(this, CastleBuyPremiumFlagDialog.ASSETNAME) || this;
  }
  n.__extends(CastleBuyPremiumFlagDialog, e);
  CastleBuyPremiumFlagDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.dialogDisp.mc_iconBG.visible = false;
    this.dialogDisp.mc_rebuyDiscount.visible = false;
    this.dialogDisp.info_costs.x = this.dialogDisp.info_time.x;
    this.dialogDisp.info_bonus.visible = false;
    this.dialogDisp.info_time.visible = false;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new l.LocalizedTextVO("dialog_buyFlag_copy"));
    this.textFieldManager.registerTextField(this.dialogDisp.info_costs.txt_title, new l.LocalizedTextVO("costs"));
    this.itxt_value = this.textFieldManager.registerTextField(this.dialogDisp.info_costs.txt_value, new r.LocalizedNumberVO(0));
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_cancle]);
  };
  CastleBuyPremiumFlagDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.initDelayedButtons([this.dialogDisp.btn_ok]);
    this.addIconPic();
    var i = c.int(p.CastleModel.costsData.getFinalCostsC2(s.PlayerConst.PREMIUM_FLAG_COST_C2));
    this.itxt_value.textContentVO.numberValue = i;
    O.CostHelper.setCostC2TextFieldColor(this.itxt_value, i);
    this.dialogDisp.info_costs.toolTipText = u.ClientConstTextIds.C2;
    this.dialogDisp.info_costs.mc_discount.visible = p.CastleModel.boosterSaleData.hideDiscount();
  };
  CastleBuyPremiumFlagDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_ok:
        p.CastleModel.smartfoxClient.sendCommandVO(new d.C2SBuyPremiumFlagVO());
        this.hide();
        break;
      case this.dialogDisp.btn_cancle:
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  CastleBuyPremiumFlagDialog.prototype.addIconPic = function () {
    o.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_CharHolder);
    this.pic = new g();
    var e = new f.CastleMapobjectVO();
    e.gateLevel = 3;
    e.towerLevel = 3;
    e.wallLevel = 2;
    e.keepLevel = 3;
    var t = new m.WorldMapOwnerInfoVO();
    t.crest = p.CastleModel.otherPlayerData.getOwnInfoVO().crest;
    t.hasPremiumFlag = true;
    e.ownerInfo = t;
    this.pic.addChild(E.WorldmapObjectIconHelper.drawMapObjectIcon(e, new C(150, 150), true, true, false, "", null, false, true));
    this.dialogDisp.mc_CharHolder.addChild(this.pic);
  };
  CastleBuyPremiumFlagDialog.NAME = "CastleBuyPremiumFlagDialog";
  CastleBuyPremiumFlagDialog.ASSETNAME = "CastleBuyResourceBoostExt";
  return CastleBuyPremiumFlagDialog;
}(h.CastleExternalDialog);
exports.CastleBuyPremiumFlagDialog = _;
var m = require("./316.js");
var f = require("./502.js");
var O = require("./66.js");
var E = require("./70.js");
a.classImplementsInterfaces(_, "ICollectableRendererList");