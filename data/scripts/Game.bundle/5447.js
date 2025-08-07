Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./11.js");
var a = require("./3.js");
var s = require("./2.js");
var r = require("./6.js");
var l = require("./8.js");
var c = require("./82.js");
var u = require("./47.js");
var d = require("./59.js");
var p = require("./55.js");
var h = require("./13.js");
var g = require("./4.js");
var C = require("./20.js");
var _ = function (e) {
  function CastleStormIslandsTitleLostDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleStormIslandsTitleLostDialog.NAME) || this;
  }
  n.__extends(CastleStormIslandsTitleLostDialog, e);
  CastleStormIslandsTitleLostDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.TextVO(h.TextHelper.toUpperCaseLocaSafeTextId("dialog_island_stormTitle_titleLost_header"))).autoFitToBounds = true;
    var i = g.CastleModel.titleData.getTitleByTitleID(this.dialogProperties.messageVO.titleID);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_storm_island_title, new a.TextVO(h.TextHelper.toUpperCaseLocaSafeTextId(i.textID))).autoFitToBounds = true;
    l.ButtonHelper.initButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close], C.ClickFeedbackButtonHover);
    this.dialogDisp.btn_close.toolTipText = "generic_btn_close";
    this._textScrollComponent = new c.ModernSliderScrollComponent(new u.SimpleScrollVO(this.dialogDisp.mc_list.mc_descSlider.btn_minus, this.dialogDisp.mc_list.mc_descSlider.btn_plus, null, null, this.dialogDisp.mc_list.mc_descSlider.mc_sliderLine, this.dialogDisp.mc_list.mc_descSlider.btn_slider, [this.dialogDisp.mc_slider], [this.dialogDisp.mc_list.txt_copy, this.dialogDisp.mouse_area]), new d.DynamicSizeScrollStrategyVertical(true, 0), true);
  };
  CastleStormIslandsTitleLostDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    var i = this.dialogProperties.messageVO.isWinningAlliance ? "dialog_island_stormTitle_titleLost_titleLossPlayer_desc" : "dialog_island_stormTitle_titleLost_desc";
    this._txtDesc = this.textFieldManager.registerTextField(this.dialogDisp.mc_list.txt_copy, new a.LocalizedTextVO(i));
    this._textScrollComponent.strategy.visibleValue = p.ClientConstUtils.isTlfMode ? this._txtDesc.height : this._txtDesc.numLines;
    var n = r.int(p.ClientConstUtils.isTlfMode ? 20 : 1);
    this._textScrollComponent.init(1, this._txtDesc.maxScrollV, n, n);
    this._textScrollComponent.setVisibility(this._txtDesc.maxScrollV > 1);
    this._textScrollComponent.show();
    this._textScrollComponent.onScrollSignal.add(this.bindFunction(this.onDescriptionScroll));
    this.dialogDisp.icon_title.visible = !this.dialogProperties.isStormLord;
    this.dialogDisp.icon_storm_lord.visible = this.dialogProperties.isStormLord;
  };
  CastleStormIslandsTitleLostDialog.prototype.onDescriptionScroll = function () {
    this._txtDesc.scrollV = s.MathBase.clamp(this._textScrollComponent.currentValue, 1, this._txtDesc.maxScrollV);
  };
  CastleStormIslandsTitleLostDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this._textScrollComponent.onScrollSignal.remove(this.bindFunction(this.onDescriptionScroll));
    this._textScrollComponent.hide();
  };
  CastleStormIslandsTitleLostDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_ok:
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  Object.defineProperty(CastleStormIslandsTitleLostDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleStormIslandsTitleLostDialog.__initialize_static_members = function () {
    CastleStormIslandsTitleLostDialog.NAME = "CastleStormIslandsTitleLost";
  };
  return CastleStormIslandsTitleLostDialog;
}(o.CastleExternalDialog);
exports.CastleStormIslandsTitleLostDialog = _;
_.__initialize_static_members();