Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = function (e) {
  function ResourcePanelToolTipTwoTextFields(t) {
    return e.call(this, t) || this;
  }
  n.__extends(ResourcePanelToolTipTwoTextFields, e);
  ResourcePanelToolTipTwoTextFields.prototype.createTextFields = function () {
    this._tf1 = this.textFieldManager.registerTextField(this._disp.tf_1, new a.LocalizedTextVO(""));
    this._tf2 = this.textFieldManager.registerTextField(this._disp.tf_2, new a.LocalizedTextVO(""));
    this._textFields.length = 0;
    this._textFields.push(this._tf1);
    this._textFields.push(this._tf2);
  };
  Object.defineProperty(ResourcePanelToolTipTwoTextFields.prototype, "tf1", {
    get: function () {
      if (this._tf1 == null || this._tf1.textContentVO == null) {
        this.createTextFields();
      }
      return this._tf1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourcePanelToolTipTwoTextFields.prototype, "tf2", {
    get: function () {
      if (this._tf2 == null || this._tf2.textContentVO == null) {
        this.createTextFields();
      }
      return this._tf2;
    },
    enumerable: true,
    configurable: true
  });
  return ResourcePanelToolTipTwoTextFields;
}(require("./1632.js").ResourcePanelToolTipComponent);
exports.ResourcePanelToolTipTwoTextFields = s;
o.classImplementsInterfaces(s, "Container");