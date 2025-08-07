Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./1.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./3.js");
var g = require("./3.js");
var C = function (e) {
  function CastleAgeGateCheckFailedDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleAgeGateCheckFailedDialog.NAME) || this;
  }
  n.__extends(CastleAgeGateCheckFailedDialog, e);
  CastleAgeGateCheckFailedDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new g.LocalizedTextVO(""));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new g.LocalizedTextVO("error_age_underage"));
    var i = "[url=https://www.goodgamestudios.com/terms_en.html]" + h.Localize.text("agb.dataprivacy") + "[/url]";
    i += " | ";
    i += "[url=https://www.goodgamestudios.com/terms_en]" + h.Localize.text("impressum") + "[/url]";
    i += " | ";
    i += "[url=https://support.goodgamestudios.com/?g=12]" + h.Localize.text("support") + "[/url]";
    i += " | ";
    i += "[url=https://en.board.goodgamestudios.com/empire]" + h.Localize.text("forum") + "[/url]";
    var n = h.Localize.text("copyright");
    n += "[url=https://www.goodgamestudios.com]" + h.Localize.text("generic_ggs") + "[/url]";
    n += " " + h.Localize.text("generic_register_all_rights_reserved");
    this.buildLinkText(this.dialogDisp.txt_copy3, i);
    this.buildLinkText(this.dialogDisp.txt_copy2, n);
  };
  CastleAgeGateCheckFailedDialog.prototype.buildLinkText = function (e, t) {
    var i = e.defaultTextFormat.color;
    e.wordWrap = true;
    e.defaultTextFormat.align = o.GGSTextAlign.LEFT;
    var n = new p.HTMLTextCustomVO();
    n.addLocalizedTextVO(new g.LocalizedTextVO(t));
    var s = new u.HTMLLinkFormatVO(i, a.GGSTextDecoration.UNDERLINE);
    var r = new u.HTMLLinkFormatVO(i, a.GGSTextDecoration.UNDERLINE);
    var l = new u.HTMLLinkFormatVO(7033400, a.GGSTextDecoration.NONE);
    n.linkFormats = new d.HTMLLinkFormatsVO(s, r, l);
    this.textFieldManager.registerTextField(e, n).htmlLinkClick.add(this.bindFunction(this.callBackFunction));
  };
  CastleAgeGateCheckFailedDialog.prototype.callBackFunction = function (e, t) {
    try {
      var i = new r.URLRequest(t);
      c.navigateToURL(i, "goodgamestudios");
    } catch (e) {
      s.error("cant navigate to url");
    }
  };
  CastleAgeGateCheckFailedDialog.__initialize_static_members = function () {
    CastleAgeGateCheckFailedDialog.NAME = "CastleAgeGateCheckFailed";
  };
  return CastleAgeGateCheckFailedDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleAgeGateCheckFailedDialog = C;
l.classImplementsInterfaces(C, "ICollectableRendererList");
C.__initialize_static_members();