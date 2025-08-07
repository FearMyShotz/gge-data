Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./85.js");
var l = require("./40.js");
var c = createjs.MovieClip;
var u = function (e) {
  function CastleRerollAlienChanceDialogListItem(t) {
    var i = e.call(this, new c()) || this;
    i._rerollChance = t;
    i.init();
    return i;
  }
  n.__extends(CastleRerollAlienChanceDialogListItem, e);
  CastleRerollAlienChanceDialogListItem.prototype.init = function () {
    this._clip = new o.GoodgameDisplayObjectClipExternal(CastleRerollAlienChanceDialogListItem.ASSET_NAME, d.IsoHelper.view.getAssetFileURL(CastleRerollAlienChanceDialogListItem.ASSET_FILE_NAME));
    this.disp.addChild(this._clip);
    this.update();
  };
  CastleRerollAlienChanceDialogListItem.prototype.destroy = function () {
    this._clip = null;
    e.prototype.destroy.call(this);
  };
  CastleRerollAlienChanceDialogListItem.prototype.update = function () {
    var e = this.getItemMc();
    p.CastleComponent.textFieldManager.registerTextField(e.txt_troop, new s.LocalizedTextVO("value_nominal_add", [this._rerollChance.amountUnits]));
    p.CastleComponent.textFieldManager.registerTextField(e.txt_chance, new r.CastleLocalizedNumberVO(this._rerollChance.chance, {
      fractionalDigits: 3,
      trailingZeroes: true
    }));
  };
  CastleRerollAlienChanceDialogListItem.prototype.getItemMc = function () {
    return this._clip.currentshownDisplayObject;
  };
  CastleRerollAlienChanceDialogListItem.ASSET_NAME = "AlienChanceScrollItem";
  CastleRerollAlienChanceDialogListItem.ASSET_FILE_NAME = "CastleRerollAlienChances";
  return CastleRerollAlienChanceDialogListItem;
}(l.CastleItemRenderer);
exports.CastleRerollAlienChanceDialogListItem = u;
var d = require("./46.js");
var p = require("./14.js");
a.classImplementsInterfaces(u, "ICollectableRendererList");