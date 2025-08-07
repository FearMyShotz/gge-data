Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./8.js");
var s = require("./551.js");
var r = createjs.MouseEvent;
var l = function (e) {
  function SkinBotPPDDExternal(t, i, n = null, o = null) {
    var a = e.call(this, t, "PivatePrimeDayDynamicDialog_BG_Skin_Bot_" + i + "_Z") || this;
    a.txtValues = n;
    a.closeFunction = o;
    if (a.isLoaded) {
      a.onDisplayObjectClipIsLoaded(null);
    }
    return a;
  }
  n.__extends(SkinBotPPDDExternal, e);
  SkinBotPPDDExternal.prototype.onDisplayObjectClipIsLoaded = function (e = null) {
    this.clipDisp.addEventListener(r.CLICK, this.bindFunction(this.onClick));
    a.ButtonHelper.initBasicButton(this.btn_close);
    if (this.txtValues) {
      if (this.clipDisp.txt_title && this.txtValues[0]) {
        o.GoodgameTextFieldManager.getInstance().registerTextField(this.clipDisp.txt_title, this.txtValues[0]);
      }
      if (this.clipDisp.txt_copy && this.txtValues[1]) {
        o.GoodgameTextFieldManager.getInstance().registerTextField(this.clipDisp.txt_copy, this.txtValues[1]);
      }
    }
  };
  SkinBotPPDDExternal.prototype.onClick = function (e) {
    if (e.target == this.btn_close) {
      this.clipDisp.removeEventListener(r.CLICK, this.bindFunction(this.onClick));
      this.closeFunction();
    }
  };
  Object.defineProperty(SkinBotPPDDExternal.prototype, "btn_close", {
    get: function () {
      if (this.isLoaded) {
        return this.clipDisp.btn_close;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  return SkinBotPPDDExternal;
}(s.PPDDExternalPart);
exports.SkinBotPPDDExternal = l;