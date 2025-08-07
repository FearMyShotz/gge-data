Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function RadioButtonsGroup(t, i, n, o, a = 0) {
    return e.call(this, t, i, n, o, a) || this;
  }
  n.__extends(RadioButtonsGroup, e);
  RadioButtonsGroup.prototype.click = function (e) {
    if (this.isSelected(e)) {
      this.selectButton(e, false);
    } else {
      this.reset();
      this.selectButton(e, true);
    }
  };
  return RadioButtonsGroup;
}(require("./1802.js").AChooseGroup);
exports.RadioButtonsGroup = a;
o.classImplementsInterfaces(a, "ISurveyFormField");