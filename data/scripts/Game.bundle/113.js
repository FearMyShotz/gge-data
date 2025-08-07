Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./377.js");
var u = require("./112.js");
var d = createjs.Point;
var p = function (e) {
  function CastleRecruitInfoDialog() {
    return e.call(this, CastleRecruitInfoDialog.NAME) || this;
  }
  n.__extends(CastleRecruitInfoDialog, e);
  CastleRecruitInfoDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this._subLayer ||= new Map();
    this._subLayer.set(CastleRecruitInfoDialog.CAT_UNIT, new _.CastleRecruitInfoDialogUnit(this.dialogDisp.cat_unit));
    this._subLayer.set(CastleRecruitInfoDialog.CAT_TOOL, new C.CastleRecruitInfoDialogTool(this.dialogDisp.cat_tool));
    this._subLayer.set(CastleRecruitInfoDialog.CAT_UNKNOWN, new m.CastleRecruitInfoDialogUnknown(this.dialogDisp.cat_unknown));
    this.initBasicButtons([this.dialogDisp.btn_close]);
    this.dialogDisp.mc_toolCategory.mouseChildren = false;
  };
  CastleRecruitInfoDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    h.WodPicHelper.setCorrectUnitBackgroundPic(this.infoProperties.unitVo, this.dialogDisp.mc_unit.mc_bg, Library.CastleInterfaceElements.unitRecruitBackground, Library.CastleInterfaceElements.unitRecruitBackground_Berimond);
    if (this.infoProperties.crestVO) {
      h.WodPicHelper.addUnitPicToContainer(this.infoProperties.unitVo, this.dialogDisp.mc_unit, CastleRecruitInfoDialog.PIC_MAX_WIDTH, CastleRecruitInfoDialog.PIC_MAX_HEIGHT, CastleRecruitInfoDialog.PIC_MAX_WIDTH, CastleRecruitInfoDialog.PIC_MAX_HEIGHT, this.infoProperties.crestVO.backgroundColor1, this.infoProperties.crestVO.backgroundColor2, 40, new d(0, -0), true, c.WodPicHelperUnitFramePerfectCallbackWrapper.callback(this.infoProperties.unitVo, CastleRecruitInfoDialog.PIC_MAX_WIDTH, CastleRecruitInfoDialog.PIC_MAX_HEIGHT));
    } else {
      h.WodPicHelper.addPlayerUnitPicToContainer(this.infoProperties.unitVo, this.dialogDisp.mc_unit, CastleRecruitInfoDialog.PIC_MAX_WIDTH, CastleRecruitInfoDialog.PIC_MAX_HEIGHT, CastleRecruitInfoDialog.PIC_MAX_WIDTH, CastleRecruitInfoDialog.PIC_MAX_HEIGHT, 40, new d(0, 0), true, c.WodPicHelperUnitFramePerfectCallbackWrapper.callback(this.infoProperties.unitVo, CastleRecruitInfoDialog.PIC_MAX_WIDTH, CastleRecruitInfoDialog.PIC_MAX_HEIGHT), this.dialogDisp.mc_unit.mc_level);
    }
    var i = new r.LocalizedTextVO(this.infoProperties.unitVo.getNameString()).compose().replace("\n", "");
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new l.TextVO(i)).autoFitToBounds = true;
    if (s.instanceOfClass(this.infoProperties.unitVo, "UnknownUnitVO")) {
      this.changeCategory(CastleRecruitInfoDialog.CAT_UNKNOWN);
    } else if (s.instanceOfClass(this.infoProperties.unitVo, "SoldierUnitVO")) {
      this.changeCategory(CastleRecruitInfoDialog.CAT_UNIT);
    } else if (s.instanceOfClass(this.infoProperties.unitVo, "ToolUnitVO")) {
      this.changeCategory(CastleRecruitInfoDialog.CAT_TOOL);
    }
    var n = this.infoProperties.unitVo.toolCategory != "";
    this.dialogDisp.mc_toolCategory.visible = n;
    if (n) {
      this.dialogDisp.mc_toolCategory.gotoAndStop(g.FightDialogAutoFillComponent.getOptionsTooltipIconFrame(this.infoProperties.unitVo.toolCategory));
      this.dialogDisp.mc_toolCategory.toolTipText = "toolType_" + this.infoProperties.unitVo.toolCategory;
    }
  };
  CastleRecruitInfoDialog.prototype.changeCategory = function (t) {
    if (this._currentCategory != t) {
      e.prototype.changeCategory.call(this, t);
    }
    this.showSublayer(this._subLayer.get(this._currentCategory), [this.infoProperties.unitVo]);
  };
  CastleRecruitInfoDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  CastleRecruitInfoDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this);
    o.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_unit.mc_level);
    if (this.itxt_copy && s.instanceOfClass(this.itxt_copy.textStrategy, "GGSTextFieldTLFStrategy")) {
      this.itxt_copy.textStrategy.deactivate();
    }
  };
  Object.defineProperty(CastleRecruitInfoDialog.prototype, "infoProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleRecruitInfoDialog.__initialize_static_members = function () {
    CastleRecruitInfoDialog.NAME = "CastleRecruitInfoEx";
    CastleRecruitInfoDialog.CAT_UNIT = "CAT_UNIT";
    CastleRecruitInfoDialog.CAT_TOOL = "CAT_TOOL";
    CastleRecruitInfoDialog.CAT_UNKNOWN = "CAT_UNKNOWN";
    CastleRecruitInfoDialog.PIC_MAX_WIDTH = 90;
    CastleRecruitInfoDialog.PIC_MAX_HEIGHT = 112;
  };
  CastleRecruitInfoDialog.NAME = "CastleRecruitInfoEx_G";
  CastleRecruitInfoDialog.CAT_UNIT = "CAT_UNIT";
  CastleRecruitInfoDialog.CAT_TOOL = "CAT_TOOL";
  CastleRecruitInfoDialog.CAT_UNKNOWN = "CAT_UNKNOWN";
  CastleRecruitInfoDialog.PIC_MAX_WIDTH = 90;
  CastleRecruitInfoDialog.PIC_MAX_HEIGHT = 112;
  return CastleRecruitInfoDialog;
}(u.CastleExternalSubLayerDialog);
exports.CastleRecruitInfoDialog = p;
var h = require("./63.js");
var g = require("./1246.js");
var C = require("./2176.js");
var _ = require("./2177.js");
var m = require("./2178.js");
a.classImplementsInterfaces(p, "ICollectableRendererList");