Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function ToolEffectView(e, t, i, n) {
    this._effectIndex = 0;
    this._iconWidth = 0;
    this._iconHeight = 0;
    this._disp = e;
    this._effectIndex = t;
    this._iconWidth = i;
    this._iconHeight = n;
    this._textField = a.GoodgameTextFieldManager.getInstance().registerTextField(e.txt_value, new s.TextVO(""));
    this._textField.autoFitToBounds = true;
    e.mouseChildren = false;
  }
  ToolEffectView.prototype.update = function (e, t = 1) {
    if (e != null && this._effectIndex < e.effectTypes.length) {
      o.WodPicHelper.addToolEffectIcon(e, this._disp.mc_icon, this._iconWidth, this._iconHeight, this._effectIndex);
      this._disp.toolTipText = e.getTooltipString(t, this._effectIndex);
      if (this._textField.model) {
        this._textField.textContentVO = e.getBonusString(this._effectIndex);
      }
      this.show();
    } else {
      this.hide();
    }
  };
  ToolEffectView.prototype.show = function () {
    this._disp.visible = true;
    this._disp.doCache();
  };
  ToolEffectView.prototype.hide = function () {
    this._disp.visible = false;
  };
  return ToolEffectView;
}();
exports.ToolEffectView = n;
var o = require("./63.js");
var a = require("./2.js");
var s = require("./3.js");