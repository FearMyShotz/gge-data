Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = function (e) {
  function CollectableRendererCostTextfield() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableRendererCostTextfield, e);
  CollectableRendererCostTextfield.prototype.reset = function () {
    if (this.clips.textfield) {
      l.CastleComponent.textFieldManager.registerTextField(this.clips.textfield, new s.TextVO(""), new o.InternalGGSTextFieldConfigVO(true));
    }
  };
  CollectableRendererCostTextfield.prototype.update = function () {
    if (this.clips.textfield) {
      this.itemVE.costTextfieldUpdate();
    }
  };
  CollectableRendererCostTextfield.prototype.setText = function (e) {
    l.CastleComponent.textFieldManager.registerTextField(this.clips.textfield, new s.TextVO(e), new o.InternalGGSTextFieldConfigVO(true));
  };
  CollectableRendererCostTextfield.prototype.setTextColor = function (e) {
    var t = l.CastleComponent.textFieldManager.getTextField(this.clips.textfield);
    if (t) {
      t.color = e;
    }
  };
  return CollectableRendererCostTextfield;
}(require("./242.js").ACollectableRenderComponent);
exports.CollectableRendererCostTextfield = r;
var l = require("./14.js");
a.classImplementsInterfaces(r, "ICollectableRendererList");