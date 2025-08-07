Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = function (e) {
  function ResourcePanelToolTipSingleLineText(t) {
    return e.call(this, t) || this;
  }
  n.__extends(ResourcePanelToolTipSingleLineText, e);
  ResourcePanelToolTipSingleLineText.prototype.createTextFields = function () {
    this._tf = this.textFieldManager.registerTextField(this._disp.tf, new s.LocalizedTextVO(""), new o.InternalGGSTextFieldConfigVO(true));
    this._textFields.length = 0;
    this._textFields.push(this._tf);
  };
  Object.defineProperty(ResourcePanelToolTipSingleLineText.prototype, "tf", {
    get: function () {
      if (this._tf == null || this._tf.textContentVO == null) {
        this.createTextFields();
      }
      return this._tf;
    },
    enumerable: true,
    configurable: true
  });
  return ResourcePanelToolTipSingleLineText;
}(require("./1632.js").ResourcePanelToolTipComponent);
exports.ResourcePanelToolTipSingleLineText = r;
a.classImplementsInterfaces(r, "Container");