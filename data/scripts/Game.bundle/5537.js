Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./39.js");
var c = require("./4.js");
var u = require("./8.js");
var d = require("./11.js");
var p = require("./120.js");
var h = function (e) {
  function CastleFactionThankYouPackageDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleFactionThankYouPackageDialog.NAME) || this;
  }
  n.__extends(CastleFactionThankYouPackageDialog, e);
  CastleFactionThankYouPackageDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    u.ButtonHelper.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_info1, this.dialogDisp.btn_info2]);
  };
  CastleFactionThankYouPackageDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.itxt_copy = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new r.LocalizedTextVO(this.dialogProperties.copyText));
    this.itxt_amount0 = this.textFieldManager.registerTextField(this.dialogDisp.txt_amount0, new r.LocalizedTextVO(o.GenericTextIds.VALUE_MULTIPLIED, [this.dialogProperties.c2]));
    this.itxt_amount1 = this.textFieldManager.registerTextField(this.dialogDisp.txt_amount1, new r.LocalizedTextVO(o.GenericTextIds.VALUE_MULTIPLIED, [this.dialogProperties.units[0][1]]));
    this.itxt_amount2 = this.textFieldManager.registerTextField(this.dialogDisp.txt_amount2, new r.LocalizedTextVO(o.GenericTextIds.VALUE_MULTIPLIED, [this.dialogProperties.units[1][1]]));
    this.dialogDisp.mc_c2.toolTipText = l.ClientConstTextIds.C2;
    this.dialogDisp.mc_food.toolTipText = l.ClientConstTextIds.FOOD;
    if (this.dialogProperties.isC2) {
      this.dialogDisp.mc_c2.visible = true;
      this.dialogDisp.mc_food.visible = false;
    } else {
      this.dialogDisp.mc_c2.visible = false;
      this.dialogDisp.mc_food.visible = true;
    }
    a.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_unit0);
    a.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_unit1);
    this.dialogDisp.mc_unit0.mouseChildren = false;
    this.dialogDisp.mc_unit1.mouseChildren = false;
    var i = c.CastleModel.wodData.voSubList(g.CastleWodData.TYPE_UNIT).get(this.dialogProperties.units[0][0]);
    var n = c.CastleModel.wodData.voSubList(g.CastleWodData.TYPE_UNIT).get(this.dialogProperties.units[1][0]);
    C.WodPicHelper.addUnitPic(i, this.dialogDisp.mc_unit0, 110, 110, 0, 0);
    C.WodPicHelper.addUnitPic(n, this.dialogDisp.mc_unit1, 110, 110, 0, 0);
    this.dialogDisp.mc_unit0.toolTipText = i.getNameString();
    this.dialogDisp.mc_unit1.toolTipText = n.getNameString();
  };
  CastleFactionThankYouPackageDialog.prototype.onClick = function (e) {
    switch (e.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
        break;
      case this.dialogDisp.btn_info1:
        d.CastleExternalDialog.dialogHandler.registerDefaultDialogs(_.CastleRecruitInfoDialog, new p.CastleRecruitInfoDialogProperties(c.CastleModel.wodData.voSubList(g.CastleWodData.TYPE_UNIT).get(this.dialogProperties.units[0][0])));
        break;
      case this.dialogDisp.btn_info2:
        d.CastleExternalDialog.dialogHandler.registerDefaultDialogs(_.CastleRecruitInfoDialog, new p.CastleRecruitInfoDialogProperties(c.CastleModel.wodData.voSubList(g.CastleWodData.TYPE_UNIT).get(this.dialogProperties.units[1][0])));
    }
  };
  Object.defineProperty(CastleFactionThankYouPackageDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleFactionThankYouPackageDialog.__initialize_static_members = function () {
    CastleFactionThankYouPackageDialog.NAME = "CastleFactionThankyouPackageExt";
  };
  return CastleFactionThankYouPackageDialog;
}(d.CastleExternalDialog);
exports.CastleFactionThankYouPackageDialog = h;
var g = require("./56.js");
var C = require("./63.js");
var _ = require("./115.js");
s.classImplementsInterfaces(h, "ICollectableRendererList");
h.__initialize_static_members();