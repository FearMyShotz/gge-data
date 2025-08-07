Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./31.js");
var s = require("./19.js");
var r = require("./551.js");
var l = createjs.Point;
var c = function (e) {
  function LeftRightEyeCatcherPPDDExternal(t, i, n = null, o = null) {
    var a = e.call(this, t, "PivatePrimeDayDynamicDialog_BottomEyeCatcher_" + i) || this;
    a.txtValues = n;
    a.currency = o;
    if (a.isLoaded) {
      a.onDisplayObjectClipIsLoaded(null);
    }
    return a;
  }
  n.__extends(LeftRightEyeCatcherPPDDExternal, e);
  LeftRightEyeCatcherPPDDExternal.prototype.onDisplayObjectClipIsLoaded = function (e = null) {
    if (this.clipDisp) {
      if (this.txtValues) {
        for (var t = 0; t < this.txtValues.length; t++) {
          var i = this.clipDisp["txt_value_" + (t + 1)];
          if (i) {
            o.GoodgameTextFieldManager.getInstance().registerTextField(i, this.txtValues[t]).autoFitToBounds = true;
          }
        }
      }
      if (this.currency) {
        var n = this.clipDisp.mc_currency;
        if (n) {
          var r = new a.CollectableRenderClips(n);
          r.addIconMc(n);
          var c = new s.CollectableRenderOptions(s.CollectableRenderOptions.ICON, new l(37, 32));
          u.CollectableRenderHelper.displaySingleItem(r, new this.currency.dataClass(), c);
        }
      }
    }
  };
  return LeftRightEyeCatcherPPDDExternal;
}(r.PPDDExternalPart);
exports.LeftRightEyeCatcherPPDDExternal = c;
var u = require("./25.js");