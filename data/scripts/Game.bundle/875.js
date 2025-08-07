Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./4.js");
var l = require("./14.js");
var c = function (e) {
  function CastleStonewallBackgroundComponent(t) {
    var i = e.call(this) || this;
    i.bgMc = t;
    return i;
  }
  n.__extends(CastleStonewallBackgroundComponent, e);
  CastleStonewallBackgroundComponent.prototype.update = function () {
    this.bgMc.btn_help.toolTipText = "generic_help";
    this.bgMc.crest1.mouseChildren = false;
    this.bgMc.crest2.mouseChildren = false;
    u.CrestHelper.setCrestGraphics(this.bgMc.crest1, r.CastleModel.userData.playerCrest, null, true);
    u.CrestHelper.setCrestGraphics(this.bgMc.crest2, r.CastleModel.userData.playerCrest, null, true);
  };
  CastleStonewallBackgroundComponent.prototype.setCrestsVisibility = function (e) {
    this.bgMc.crest1.visible = e;
    this.bgMc.crest2.visible = e;
  };
  CastleStonewallBackgroundComponent.prototype.setHelpButtonVisibility = function (e) {
    this.bgMc.btn_help.visible = e;
  };
  CastleStonewallBackgroundComponent.prototype.setTitleText = function (e) {
    l.CastleComponent.textFieldManager.registerTextField(this.bgMc.txt_title, new s.TextVO(e)).autoFitToBounds = true;
  };
  CastleStonewallBackgroundComponent.prototype.setTitleByTextId = function (e) {
    l.CastleComponent.textFieldManager.registerTextField(this.bgMc.txt_title, new a.LocalizedTextVO(e)).autoFitToBounds = true;
  };
  return CastleStonewallBackgroundComponent;
}(l.CastleComponent);
exports.CastleStonewallBackgroundComponent = c;
var u = require("./61.js");
o.classImplementsInterfaces(c, "ICollectableRendererList");