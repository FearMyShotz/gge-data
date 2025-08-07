Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./3.js");
var c = function (e) {
  function TooltipDisplayLite(t) {
    var i = this;
    i._displayText = new s.TextField();
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this)._textLoca = t == null ? new l.LocalizedTextVO("noText") : t;
    return i;
  }
  n.__extends(TooltipDisplayLite, e);
  Object.defineProperty(TooltipDisplayLite.prototype, "displayTextMC", {
    get: function () {
      this._displayTextMC ||= new (a.getDefinitionByName("Empty_ToolTextfield"))();
      return this._displayTextMC;
    },
    enumerable: true,
    configurable: true
  });
  TooltipDisplayLite.prototype.show = function (e = 10) {
    this.x += e;
    this.parent.parent.setChildIndex(this.parent, this.parent.parent.numChildren - 1);
    o.GoodgameTextFieldManager.getInstance().registerTextField(this.displayTextMC.toolText, this._textLoca).autoFitToBounds = true;
    this.addChild(this.displayTextMC);
  };
  TooltipDisplayLite.prototype.hide = function () {
    if (this.children && this.children.length > 0 && this.contains(this.displayTextMC)) {
      this.x = 0;
      this.removeChild(this.displayTextMC);
    }
  };
  TooltipDisplayLite.prototype.destroy = function () {
    this.hide();
    this._textLoca = null;
  };
  TooltipDisplayLite.__initialize_static_members = function () {
    TooltipDisplayLite.ADDED_WIDTH = 50;
    TooltipDisplayLite.TEXT_SIZE_DIFF = 10;
    TooltipDisplayLite.MIN_WIDTH = 90;
  };
  return TooltipDisplayLite;
}(require("./583.js").CastleMovieClip);
exports.TooltipDisplayLite = c;
r.classImplementsInterfaces(c, "MovieClip");
c.__initialize_static_members();