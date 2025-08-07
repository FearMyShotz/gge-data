Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./3.js");
var s = require("./189.js");
var r = require("./8.js");
var l = require("./82.js");
var c = require("./47.js");
var u = require("./9.js");
var d = require("./40.js");
var p = require("./4.js");
var h = require("./20.js");
var g = require("./1.js");
var C = require("./6.js");
var _ = function (e) {
  function ToolsLimitComponent(t, i) {
    var n = e.call(this, t) || this;
    n._currentSliderValue = 0;
    n._currentSliderValue = i;
    n.init();
    return n;
  }
  n.__extends(ToolsLimitComponent, e);
  ToolsLimitComponent.prototype.init = function () {
    r.ButtonHelper.initButtons([this.disp.btn_help, this.disp.mc_toolLimitSlider.btn_minus, this.disp.mc_toolLimitSlider.btn_plus, this.disp.mc_toolLimitSlider.btn_slider, this.disp.mc_toolLimitSlider.btn_max], h.ClickFeedbackButtonHover);
    o.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_tool_support, new a.LocalizedTextVO("dialog_defence_toolTriggerLimit_header"));
    var e = new s.SimpleScrollStrategyHorizontal(true);
    this._scrollComponent = new l.ModernSliderScrollComponent(new c.SimpleScrollVO().initByParent(this.disp.mc_toolLimitSlider).addMouseWheelElements([this.disp.mc_toolLimitSlider]).addSliderLine(this.disp.mc_toolLimitSlider.mc_sliderLine), e, true);
    this._scrollComponent.init(0, ToolsLimitComponent.TOOLS_LIMIT_MAX);
    this._scrollComponent.scrollToValue(this._currentSliderValue);
    this.disp.mc_toolLimitSlider.txt_text.type = g.TextFieldType.INPUT;
    this._itxt_limit = o.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.mc_toolLimitSlider.txt_text, new a.LocalizedNumberVO(this._currentSliderValue));
    this._itxt_limit.textAlign = o.GGSTextAlign.CENTER;
    this._itxt_limit.restrict = "0-9";
  };
  ToolsLimitComponent.prototype.onTextLimitChanged = function (e) {
    var t = C.int(e.target.text);
    if (t > ToolsLimitComponent.TOOLS_LIMIT_MAX) {
      t = ToolsLimitComponent.TOOLS_LIMIT_MAX;
    }
    this.updateSlider(t);
  };
  ToolsLimitComponent.prototype.onFocusInLimitText = function (e) {
    this._itxt_limit.clearText();
  };
  ToolsLimitComponent.prototype.onFocusOutLimitText = function (e) {
    this._itxt_limit.textContentVO.numberValue = this._currentSliderValue;
  };
  ToolsLimitComponent.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this._scrollComponent.show();
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScrollValueChange));
    this._itxt_limit.change.add(this.bindFunction(this.onTextLimitChanged));
    this._itxt_limit.focusIn.add(this.bindFunction(this.onFocusInLimitText));
    this._itxt_limit.focusOut.add(this.bindFunction(this.onFocusOutLimitText));
    this._scrollComponent.scrollToValue(this._currentSliderValue);
  };
  ToolsLimitComponent.prototype.updateSlider = function (e) {
    this._currentSliderValue = e;
    p.CastleModel.defenceData.minAttackUnitsToConsumeTools = e;
    this._scrollComponent.scrollToValue(this._currentSliderValue);
    this._isSliderChanged = true;
  };
  ToolsLimitComponent.prototype.onScrollValueChange = function () {
    this._currentSliderValue = this._scrollComponent.currentValue;
    p.CastleModel.defenceData.minAttackUnitsToConsumeTools = this._currentSliderValue;
    this._itxt_limit.textContentVO.numberValue = this._currentSliderValue;
    this.disp.mc_toolLimitSlider.mc_sliderLineFill.width = Math.abs(this.disp.mc_toolLimitSlider.btn_slider.x - this.disp.mc_toolLimitSlider.mc_sliderLine.x);
  };
  ToolsLimitComponent.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (t.target == this.disp.btn_help) {
      u.CastleDialogHandler.getInstance().showHelper("dialog_defence_toolTriggerLimit_header", a.Localize.text("help_defence_toolTriggerLimit"));
    }
  };
  Object.defineProperty(ToolsLimitComponent.prototype, "isSliderChanged", {
    get: function () {
      return this._isSliderChanged;
    },
    enumerable: true,
    configurable: true
  });
  ToolsLimitComponent.prototype.onHide = function () {
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScrollValueChange));
    this._itxt_limit.change.remove(this.bindFunction(this.onTextLimitChanged));
    this._itxt_limit.focusIn.remove(this.bindFunction(this.onFocusInLimitText));
    this._itxt_limit.focusOut.remove(this.bindFunction(this.onFocusOutLimitText));
    this._scrollComponent.hide();
    e.prototype.onHide.call(this);
  };
  ToolsLimitComponent.TOOLS_LIMIT_MAX = 2000;
  return ToolsLimitComponent;
}(d.CastleItemRenderer);
exports.ToolsLimitComponent = _;