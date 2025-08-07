Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./8.js");
var r = function (e) {
  function SubscriptionDialogInfoPageCancel(t) {
    return e.call(this, t) || this;
  }
  n.__extends(SubscriptionDialogInfoPageCancel, e);
  SubscriptionDialogInfoPageCancel.prototype.init = function () {
    e.prototype.init.call(this);
    l.CastleComponent.textFieldManager.registerTextField(this.disp.btn_cancel.txt_text, new a.LocalizedTextVO("-"));
  };
  SubscriptionDialogInfoPageCancel.prototype.onClick = function (t) {
    if (s.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.disp.btn_cancel:
      }
    }
  };
  return SubscriptionDialogInfoPageCancel;
}(require("./750.js").InfoCatalogPageScrollText);
exports.SubscriptionDialogInfoPageCancel = r;
var l = require("./14.js");
o.classImplementsInterfaces(r, "ICollectableRendererList");