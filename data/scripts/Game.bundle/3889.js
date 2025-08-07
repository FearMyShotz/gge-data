Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function CheckboxesGroup(t, i, n, o, a = 0) {
    return e.call(this, t, i, n, o, a) || this;
  }
  n.__extends(CheckboxesGroup, e);
  CheckboxesGroup.prototype.click = function (e) {
    this.selectButton(e, !this.isSelected(e));
  };
  return CheckboxesGroup;
}(require("./1804.js").AChooseGroup);
exports.CheckboxesGroup = a;
o.classImplementsInterfaces(a, "ISurveyFormField");