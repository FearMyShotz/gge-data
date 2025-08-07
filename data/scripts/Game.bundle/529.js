Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.Container;
var o = function () {
  function ConstructionItemRenderer() {}
  ConstructionItemRenderer.render = function (e, t = null, i = null) {
    return ConstructionItemRenderer.loadAsset(e, false, true, t, i);
  };
  ConstructionItemRenderer.renderBroken = function (e, t = null, i = null) {
    return ConstructionItemRenderer.loadAsset(e, true, true, t, i);
  };
  ConstructionItemRenderer.renderWithoutBuildingIcon = function (e, t = null, i = null) {
    return ConstructionItemRenderer.loadAsset(e, false, false, t, i);
  };
  ConstructionItemRenderer.renderBlueprint = function (e, t, i = null) {
    try {
      var n = t.currentshownDisplayObject;
      n.mouseChildren = false;
      var o = a.ConstructionItemsHelper.getBestUnlockedCI(e) || e.constructionItem;
      n.colorChange.gotoAndStop(o.rarity + 1);
      r.GoodgameTextFieldManager.getInstance().registerTextField(n.banner.text, new d.LocalizedTextVO("dialog_ci_craft_new"), new l.InternalGGSTextFieldConfigVO(true));
      n.banner.visible = false;
      n.glow.visible = false;
      ConstructionItemRenderer.addBuildingIcon(e.constructionItem, n.mc_buildingIconContainer);
      ConstructionItemRenderer.addEffectIcon(e.constructionItem, n.mc_effectIconContainer, i);
    } catch (e) {
      u.debug(e.stack);
      t.visible = false;
    }
  };
  ConstructionItemRenderer.loadAsset = function (e, t, i, o = null, a) {
    var r = s.BasicModel.basicLoaderData.getVersionedItemAssetUrl(ConstructionItemRenderer.ASSET_NAME);
    var l = new h.CastleGoodgameExternalClip(ConstructionItemRenderer.ASSET_NAME, r);
    var c = a || new n();
    c.addChild(l);
    l.doWhenLoaded(function (n) {
      ConstructionItemRenderer.configureItem(e, n.currentshownDisplayObject, t, i, o);
    });
    return c;
  };
  ConstructionItemRenderer.configureItem = function (e, t, i = false, n = false, o = null) {
    if (!i) {
      t.removeChild(t.mc_broken);
    }
    t.mc_level.visible = !e.isAppearanceItem || e.isTemporary;
    if (e.isTemporary) {
      t.mc_level.gotoAndStop(2);
      t.mc_level.txt_level.visible = false;
    } else {
      t.mc_level.gotoAndStop(1);
      t.mc_level.txt_level.visible = true;
      r.GoodgameTextFieldManager.getInstance().registerTextField(t.mc_level.txt_level, new p.NumberVO(e.level), new l.InternalGGSTextFieldConfigVO(true));
    }
    if (n) {
      ConstructionItemRenderer.addBuildingIcon(e, t.mc_buildingIconContainer);
    } else {
      t.removeChild(t.mc_buildingIconContainer);
    }
    t.mc_effects.gotoAndStop(e.effectsAmount);
    t.mc_background.gotoAndStop(e.slotType + 1);
    t.mc_background.mc_color.gotoAndStop(e.rarity + 1);
    ConstructionItemRenderer.addEffectIcon(e, t.mc_effectIconContainer, o);
  };
  ConstructionItemRenderer.addEffectIcon = function (e, t, i = null) {
    var n = s.BasicModel.basicLoaderData.getVersionedItemAssetUrl(e.visClassName);
    var o = new h.CastleGoodgameExternalClip(e.visClassName, n);
    if (t.effectIcon) {
      t.removeChild(t.effectIcon);
    }
    var a = t.width;
    var r = t.height;
    t.addChild(o);
    t.effectIcon = o;
    o.doWhenLoaded(g.CastleMovieClipHelper.getScaleAndCacheWithAntiAliasingOnLoaded(a, r));
    if (i) {
      o.doWhenLoaded(i);
    }
  };
  ConstructionItemRenderer.addBuildingIcon = function (e, t) {
    if (e.buildingIconClass) {
      var i = t.width;
      var n = t.height;
      var o = new Library.CastleInterfaceElements.BuildingGroundBg();
      c.MovieClipHelper.centerMovieClip(o, i, n);
      t.addChild(o);
      var a = new e.buildingIconClass();
      c.MovieClipHelper.centerMovieClip(a, i * 0.8, n * 0.8);
      t.addChild(a);
    }
  };
  ConstructionItemRenderer.__initialize_static_members = function () {
    ConstructionItemRenderer.ASSET_NAME = "ConstructionItem_Sep24";
    ConstructionItemRenderer.EFFECT_ICON_SIZE = 24;
  };
  return ConstructionItemRenderer;
}();
exports.ConstructionItemRenderer = o;
var a = require("./239.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./2.js");
var u = require("./2.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./24.js");
var g = require("./41.js");
o.__initialize_static_members();