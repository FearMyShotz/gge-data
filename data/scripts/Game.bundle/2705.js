Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./81.js");
var s = require("./14.js");
var r = require("./2.js");
var l = require("./46.js");
var c = require("./337.js");
var u = require("./25.js");
var d = require("./31.js");
var p = require("./19.js");
var h = createjs.Point;
var g = function (e) {
  function ConstructionItemExpiredDialogListItem() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ConstructionItemExpiredDialogListItem, e);
  ConstructionItemExpiredDialogListItem.prototype.initLoaded = function () {
    this._itxt_name = s.CastleComponent.textFieldManager.registerTextField(this.getItemMc().txt_name, new o.LocalizedTextVO());
    this._itxt_level = s.CastleComponent.textFieldManager.registerTextField(this.getItemMc().txt_level, new o.LocalizedTextVO("building_level"));
  };
  ConstructionItemExpiredDialogListItem.prototype.fill = function () {
    this._expiredVO = this.data;
    this._itxt_name.textContentVO.textId = this._expiredVO.buildingVO.getNameString();
    this._itxt_level.textContentVO.textReplacements = [this._expiredVO.buildingVO.level];
    this.drawIcon();
    this.drawCI();
  };
  ConstructionItemExpiredDialogListItem.prototype.drawIcon = function () {
    r.MovieClipHelper.clearMovieClip(this.getItemMc().mc_buildingIcon);
    var e = new Library.CastleInterfaceElements.BuildingGroundBg();
    r.MovieClipHelper.scaleToFit(e, 33, 33);
    this.getItemMc().mc_buildingIcon.addChild(e);
    var t = new (l.IsoHelper.view.createIsoObjectVEFromVO(this._expiredVO.buildingVO).buildingGroundIconClass)();
    r.MovieClipHelper.scaleToFit(t, 23.099999999999998, 23.099999999999998);
    this.getItemMc().mc_buildingIcon.addChild(t);
    this.getItemMc().mc_buildingIcon.mouseChildren = false;
  };
  ConstructionItemExpiredDialogListItem.prototype.drawCI = function () {
    var e = new d.CollectableRenderClips(this.getItemMc().mc_ci).addIconMc(this.getItemMc().mc_ci);
    var t = new p.CollectableRenderOptions(p.CollectableRenderOptions.SET_ICON, new h(40, 40));
    var i = new c.CollectableItemConstructionItemVO();
    i.constructionItemVO = this._expiredVO.constructionItemVO;
    u.CollectableRenderHelper.displaySingleItemComplete(this, e, i, t);
  };
  return ConstructionItemExpiredDialogListItem;
}(a.AInfiniteScrollListItem);
exports.ConstructionItemExpiredDialogListItem = g;