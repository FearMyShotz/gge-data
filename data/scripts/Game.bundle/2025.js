Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = function (e) {
  function CollectableRendererTextfield() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableRendererTextfield, e);
  CollectableRendererTextfield.prototype.reset = function () {
    this.setText("");
  };
  CollectableRendererTextfield.prototype.update = function () {
    if (this.clips.textfield) {
      if (this.renderer.options.textfield.forceRender) {
        this.itemVE.textfieldSetTextAsNumber(this.itemVO.amount);
      } else {
        this.itemVE.textfieldUpdate();
      }
      this.clips.textfield.visible = this.itemVE.textfieldBackgroundVisible() || this.renderer.options.textfield.forceRender;
    }
  };
  CollectableRendererTextfield.prototype.setVisibility = function (e) {
    if (this.clips.textfield) {
      this.clips.textfield.visible = e;
    }
  };
  CollectableRendererTextfield.prototype.setText = function (e) {
    if (this.clips.textfield) {
      var t = r.CastleComponent.textFieldManager.getTextField(this.clips.textfield);
      if (t && t.textContentVO) {
        t.textContentVO.stringValue = "";
      } else {
        var i = r.CastleComponent.textFieldManager.registerTextField(this.clips.textfield, new a.TextVO(""), new l.InternalGGSTextFieldConfigVO(true));
        if (this.renderer.options.textfield.verticalAlign != "") {
          i.verticalAlign = this.renderer.options.textfield.verticalAlign;
        }
        i.autoFitToBounds = this.renderer.options.textfield.useAutoFitToBounds;
      }
    }
  };
  return CollectableRendererTextfield;
}(require("./242.js").ACollectableRenderComponent);
exports.CollectableRendererTextfield = s;
var r = require("./14.js");
var l = require("./2.js");
o.classImplementsInterfaces(s, "ICollectableRendererList");