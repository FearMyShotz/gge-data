Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./436.js");
var u = require("./24.js");
var d = function () {
  function CastlePrivateResourceVillageRenderHelper() {}
  CastlePrivateResourceVillageRenderHelper.renderVillage = function (e, t, i = 36, o = 30) {
    var a = n.BasicModel.basicLoaderData.getVersionedItemAssetUrl("PrivateResourceVillage");
    var r = new u.CastleGoodgameExternalClip("PrivateResourceVillage", a, null, 0, false);
    s.MovieClipHelper.clearMovieClip(t);
    t.addChild(r);
    r.doWhenLoaded(function (t) {
      t.currentshownDisplayObject.gotoAndStop(e + 1);
      h.CastleMovieClipHelper.scaleWithAntiAliasing(t, i, o);
    });
    return r;
  };
  CastlePrivateResourceVillageRenderHelper.fillResourceBonus = function (e, t, i, n = 36, a = 30) {
    CastlePrivateResourceVillageRenderHelper.textFieldManager.registerTextField(e.txt_resourceBonus, new l.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE_ADD, [i]));
    s.MovieClipHelper.clearMovieClip(e.mc_iconHolder);
    p.WodPicHelper.addIcon(CastlePrivateResourceVillageRenderHelper.getProductivityIconClass(t), e.mc_iconHolder, n, a);
    e.mouseChildren = false;
    e.toolTipText = CastlePrivateResourceVillageRenderHelper.getBonusToolTip(t);
  };
  CastlePrivateResourceVillageRenderHelper.getBonusToolTip = function (e) {
    return c.ClientConstKingdom.getVillageTypeName(e).toLowerCase() + "Bonus";
  };
  CastlePrivateResourceVillageRenderHelper.getProductivityIconClass = function (e) {
    switch (e) {
      case r.WorldConst.VILLAGE_TYPE_WOOD:
        return Library.CastleInterfaceElements_Icons.Icon_BoostPerHourWood;
      case r.WorldConst.VILLAGE_TYPE_STONE:
        return Library.CastleInterfaceElements_Icons.Icon_BoostPerHourStone;
      case r.WorldConst.VILLAGE_TYPE_FOOD:
        return Library.CastleInterfaceElements_Icons.Icon_BoostPerHourFood;
      case r.WorldConst.VILLAGE_TYPE_COAL:
        return Library.CastleInterfaceElements_Icons.Icon_BoostPerHourCoal;
      case r.WorldConst.VILLAGE_TYPE_OIL:
        return Library.CastleInterfaceElements_Icons.Icon_BoostPerHourOliveoil;
      case r.WorldConst.VILLAGE_TYPE_GLASS:
        return Library.CastleInterfaceElements_Icons.Icon_BoostPerHourGlass;
      case r.WorldConst.VILLAGE_TYPE_IRON:
        return Library.CastleInterfaceElements_Icons.Icon_BoostPerHourIron;
      default:
        return Library.CastleInterfaceElements_Icons.Icon_BoostPerHourWood;
    }
  };
  Object.defineProperty(CastlePrivateResourceVillageRenderHelper, "textFieldManager", {
    get: function () {
      return a.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastlePrivateResourceVillageRenderHelper;
}();
exports.CastlePrivateResourceVillageRenderHelper = d;
var p = require("./63.js");
var h = require("./41.js");