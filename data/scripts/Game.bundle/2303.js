Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./100.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./3.js");
var u = require("./276.js");
var d = require("./14.js");
var p = require("./720.js");
var h = require("./349.js");
var g = require("./382.js");
var C = createjs.Rectangle;
var _ = function (e) {
  function OptionsDialogOptionsItem(t, i) {
    var n = e.call(this, new (l.getDefinitionByName("CastleOptions_OptionItem"))(), i) || this;
    n.optionMCs = [];
    n.layout = new u.SimpleLayoutStrategyVertical();
    d.CastleComponent.textFieldManager.registerTextField(n._headerMC.txt_default, new c.TextVO(t), new s.InternalGGSTextFieldConfigVO(true));
    d.CastleComponent.textFieldManager.registerTextField(n._headerMC.mc_open.txt_selected, new c.TextVO(t), new s.InternalGGSTextFieldConfigVO(true));
    n.preExpand();
    return n;
  }
  n.__extends(OptionsDialogOptionsItem, e);
  OptionsDialogOptionsItem.prototype.addOption = function (e, t, i) {
    var n = new (l.getDefinitionByName("CastleOptions_OptionItemContent"))();
    var a = new p.ToggleSwitchButton(n.btn_toggle);
    a.setValue(t);
    a.changeSignal.add(i);
    d.CastleComponent.textFieldManager.registerTextField(n.txt_text, new c.TextVO(e), new s.InternalGGSTextFieldConfigVO(true)).verticalAlign = o.GGSVerticalAlign.MIDDLE;
    n.bg.gotoAndStop(this.optionMCs.length % 2 + 1);
    n.toggleButton = a;
    this.contentMC.addChild(n);
    this.optionMCs.push(new h.MovieClipLayoutable(n));
    var r = this.layout.apply(this.optionMCs, new C()).height;
    if (this.isExpanded) {
      this.contentMC.mask.height = r;
    }
  };
  OptionsDialogOptionsItem.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this.optionMCs.forEach(function (e) {
      return e.disp.toggleButton.changeSignal.removeAll();
    });
    this.optionMCs = [];
    a.MovieClipHelper.clearMovieClip(this.contentMC);
  };
  return OptionsDialogOptionsItem;
}(g.AOptionsDialogCollapsibleItem);
exports.OptionsDialogOptionsItem = _;
r.classImplementsInterfaces(_, "ICollectableRendererList", "ICollapsibleItem", "ILayoutable");