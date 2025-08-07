Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./46.js");
var c = require("./14.js");
var u = require("./40.js");
var d = createjs.MovieClip;
var p = function (e) {
  function TempServerWelcomeDialogListItem(t) {
    var i = this;
    i.MIN_HEIGHT = 100;
    i.TOP_BOTTOM_MARGIN = 9;
    i._id = "";
    CONSTRUCTOR_HACK;
    (i = e.call(this, new d()) || this)._id = t;
    i.init();
    return i;
  }
  n.__extends(TempServerWelcomeDialogListItem, e);
  TempServerWelcomeDialogListItem.prototype.init = function () {
    this._clip = new o.GoodgameDisplayObjectClipExternal(TempServerWelcomeDialogListItem.ASSET_NAME, l.IsoHelper.view.getAssetFileURL(TempServerWelcomeDialogListItem.ASSET_FILE_NAME));
    this.disp.addChild(this._clip);
    this.update();
  };
  TempServerWelcomeDialogListItem.prototype.destroy = function () {
    this._clip = null;
    e.prototype.destroy.call(this);
  };
  TempServerWelcomeDialogListItem.prototype.update = function () {
    var e = this.getItemMc();
    var t = c.CastleComponent.textFieldManager.registerTextField(e.txt_text, new r.LocalizedTextVO("dialog_tempServer_welcomePopup_content_" + this._id));
    t.height = t.textHeight + 3;
    e.mc_bg.scaleY = Math.max(this.MIN_HEIGHT, t.textHeight + this.TOP_BOTTOM_MARGIN * 2) / this.MIN_HEIGHT;
    this.addImage();
  };
  TempServerWelcomeDialogListItem.prototype.addImage = function () {
    a.MovieClipHelper.clearMovieClip(this.getItemMc().mc_icon);
    this.getItemMc().mc_icon.addChild(new o.GoodgameDisplayObjectClipExternal("TempServerWelcomeImage_" + this._id, l.IsoHelper.view.getAssetFileURL(TempServerWelcomeDialogListItem.ASSET_FILE_NAME)));
  };
  TempServerWelcomeDialogListItem.prototype.getItemMc = function () {
    return this._clip.currentshownDisplayObject;
  };
  TempServerWelcomeDialogListItem.ASSET_NAME = "CastleTempServerWelcomeListItem";
  TempServerWelcomeDialogListItem.ASSET_FILE_NAME = "CastleTempServerWelcome";
  return TempServerWelcomeDialogListItem;
}(u.CastleItemRenderer);
exports.TempServerWelcomeDialogListItem = p;
s.classImplementsInterfaces(p, "ICollectableRendererList");