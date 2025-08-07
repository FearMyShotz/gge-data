Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./583.js");
var s = require("./8.js");
var r = createjs.MouseEvent;
var l = createjs.ColorFilter;
var c = function (e) {
  function AllianceCrestCreation_Color_ItemVE(t) {
    var i = this;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).colorVO = t;
    i.disp = new (o.getDefinitionByName("AllianceCrestCreation_Color_Item"))();
    i.addChild(i.disp);
    i.addEventListener(r.CLICK, i.bindFunction(i.onClick));
    s.ButtonHelper.initBasicButton(i, 1.2);
    i.updateDisp();
    return i;
  }
  n.__extends(AllianceCrestCreation_Color_ItemVE, e);
  AllianceCrestCreation_Color_ItemVE.prototype.updateDisp = function () {
    var e = new o.ColorTransform();
    e.color = this.colorVO.color;
    this.disp.mc_color.useFilters([new l(e.redMultiplier, e.greenMultiplier, e.blueMultiplier, e.alphaMultiplier, e.redOffset, e.greenOffset, e.blueOffset, e.alphaOffset)]);
  };
  AllianceCrestCreation_Color_ItemVE.prototype.onClick = function (e) {
    this.onClickCallback(this.colorVO);
  };
  AllianceCrestCreation_Color_ItemVE.prototype.destroy = function () {
    this.removeEventListener(r.CLICK, this.bindFunction(this.onClick));
  };
  AllianceCrestCreation_Color_ItemVE.prototype.addOnClick = function (e) {
    this.onClickCallback = e;
  };
  return AllianceCrestCreation_Color_ItemVE;
}(a.CastleMovieClip);
exports.AllianceCrestCreation_Color_ItemVE = c;
o.classImplementsInterfaces(c, "MovieClip");