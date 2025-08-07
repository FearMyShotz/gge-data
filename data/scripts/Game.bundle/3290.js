Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./2.js");
var a = require("./12.js");
var s = require("./45.js");
var r = require("./46.js");
var l = require("./24.js");
var c = function () {
  function MaterialBagRenderHelper() {}
  MaterialBagRenderHelper.render = function (e, t = null, i = null, a = null) {
    var s = e.assetName;
    var r = n.BasicModel.basicLoaderData.getVersionedItemAssetUrl("CraftingMaterialBags");
    var c = [];
    c.push(new o.ClipColor("bag", e.color));
    var u = new l.CastleGoodgameExternalClip(s, r, c, 0, false);
    if (t) {
      t.addChild(u);
    }
    u.doWhenLoaded(function (t) {
      if (e.focused) {
        MaterialBagRenderHelper.addFocusedMaterial(e, u.currentshownDisplayObject, i);
      } else {
        i(t);
      }
    });
    return u;
  };
  MaterialBagRenderHelper.addFocusedMaterial = function (e, t, i = null) {
    if (e.focused) {
      var n = e.focusedMaterialContent.craftingMaterial;
      var o = s.CollectableHelper.createVE(s.CollectableHelper.createVO(a.CollectableEnum.GENERIC_CURRENCY, 0, n.id), null);
      var c = o.getAssetName();
      var u = new l.CastleGoodgameExternalClip(c, r.IsoHelper.view.getAssetFileURL(c), null, 0, false);
      o.destroy();
      t.mc_focus.scaleX = t.mc_focus.scaleY = 0.36;
      t.mc_focus.addChild(u);
      if (i) {
        u.doWhenLoaded(i);
      }
    }
  };
  return MaterialBagRenderHelper;
}();
exports.MaterialBagRenderHelper = c;