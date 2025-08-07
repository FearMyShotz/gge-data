Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./4.js");
var c = require("./944.js");
var u = createjs.Point;
var d = function (e) {
  function CastleCastleCrestComponent(t) {
    return e.call(this, t) || this;
  }
  n.__extends(CastleCastleCrestComponent, e);
  CastleCastleCrestComponent.prototype.initComponent = function (e = null, t = null) {
    if (e == null) {
      e = l.CastleModel.otherPlayerData.getOwnInfoVO().crest;
    }
    if (t == null) {
      t = l.CastleModel.areaData.activeAreaInfo;
    }
    p.CrestHelper.setCrestGraphics(this.dialogDisp.mc_crest0, e);
    a.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_castleIcon);
    this.dialogDisp.mc_castleIcon.addChild(h.WorldmapObjectIconHelper.drawMapObjectIcon(t, new u(85, 120), true, false, false));
    this.txtCastleNameIBasicGGSTextField = c.CastleUIComponent.textFieldManager.registerTextField(this.dialogDisp.txt_castleName, new r.TextVO(t.areaNameString), new o.InternalGGSTextFieldConfigVO(true));
  };
  CastleCastleCrestComponent.prototype.hide = function () {
    e.prototype.hide.call(this);
    if (this.txtCastleNameIBasicGGSTextField) {
      this.txtCastleNameIBasicGGSTextField.clearText();
      this.txtCastleNameIBasicGGSTextField = null;
    }
  };
  Object.defineProperty(CastleCastleCrestComponent.prototype, "dialogDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  return CastleCastleCrestComponent;
}(c.CastleUIComponent);
exports.CastleCastleCrestComponent = d;
var p = require("./61.js");
var h = require("./70.js");
s.classImplementsInterfaces(d, "ICollectableRendererList");