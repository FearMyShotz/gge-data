Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./16.js");
var d = function (e) {
  function DarkDialogLinkComponent(t, i, n) {
    return e.call(this, t, i, n) || this;
  }
  n.__extends(DarkDialogLinkComponent, e);
  DarkDialogLinkComponent.prototype.build = function () {
    var e = this._disp.txt_desc.defaultTextFormat.color;
    var t = new l.HTMLTextCustomVO();
    t.addLocalizedTextVO(new c.LocalizedTextVO(this._textId));
    var i = new s.HTMLLinkFormatVO(e, o.GGSTextDecoration.UNDERLINE);
    var n = new s.HTMLLinkFormatVO(e, o.GGSTextDecoration.UNDERLINE);
    var d = new s.HTMLLinkFormatVO(u.ClientConstColor.DARK_LINK_COLOR, o.GGSTextDecoration.UNDERLINE);
    t.linkFormats = new r.HTMLLinkFormatsVO(i, n, d);
    this._txtLabel = a.GoodgameTextFieldManager.getInstance().registerTextField(this._disp.txt_desc, t);
    this._txtLabel.htmlLinkClick.add(this.bindFunction(this.onClick));
  };
  return DarkDialogLinkComponent;
}(require("./381.js").LinkComponent);
exports.DarkDialogLinkComponent = d;