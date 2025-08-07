Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./1.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./2245.js");
var p = require("./4.js");
var h = require("./127.js");
var g = require("./24.js");
var C = require("./41.js");
var _ = require("./46.js");
var m = createjs.Point;
var f = createjs.MovieClip;
var O = function () {
  function CastleGemRenderer() {}
  CastleGemRenderer.renderAsset = function (e, t = null, i = null, n = false) {
    if (l.instanceOfClass(e, "RandomGemVO")) {
      return CastleGemRenderer.renderRandomGem(e, t, i);
    } else if (l.instanceOfClass(e, "RelicGemVO")) {
      return CastleGemRenderer.renderRelicGem(e, t, i, n);
    } else if (e.isUnique) {
      return CastleGemRenderer.renderUniqueGem(e, t, i);
    } else {
      return CastleGemRenderer.renderSpecificGem(e, t, i);
    }
  };
  CastleGemRenderer.renderRelicGem = function (e, t = null, i = null, o = false, s = false) {
    var r = new f();
    r.name = "eq";
    var c = CastleGemRenderer.loadRelicGem(e, t);
    if (c.isLoaded) {
      CastleGemRenderer.removeBroken(c);
    } else {
      c.clipLoaded.addOnce(CastleGemRenderer.removeBroken);
    }
    var u = i || new m(CastleGemRenderer.DEFAULT_GEM_SIZE, CastleGemRenderer.DEFAULT_GEM_SIZE);
    c.doWhenLoaded(C.CastleMovieClipHelper.getScaleAndCacheWithAntiAliasingOnLoaded(u.x, u.y));
    if (t) {
      c.doWhenLoaded(t);
    }
    var d = u.x / CastleGemRenderer.DEFAULT_GEM_SIZE;
    var h = u.y / CastleGemRenderer.DEFAULT_GEM_SIZE;
    r.addChild(c.asDisplayObject());
    var O = new g.CastleGoodgameExternalClip("Equipment_BG_Relic", _.IsoHelper.view.getAssetFileURL("Equipment_BG_Relic"), null, 0, false);
    O.clipSizeComponent = new a.ClipSizeComponent(u.x + Math.round(d * 6), u.y + Math.round(h * 6));
    r.addChild(O.asDisplayObject());
    if (e.enchantmentLevel >= p.CastleModel.equipData.relicXml.maxRelicEnchanterLevel) {
      var E = new g.CastleGoodgameExternalClip("Equipment_EnchantingSparkle", _.IsoHelper.view.getAssetFileURL("Equipment_EnchantingSparkle"), null, 24, true);
      r.addChild(E.asDisplayObject());
      E.clipSizeComponent = new a.ClipSizeComponent(u.x - 5, u.y - 5);
    }
    if (o) {
      var y = new g.CastleGoodgameExternalClip("Equipment_NewIcon", _.IsoHelper.view.getAssetFileURL("Equipment_NewIcon"));
      y.clipSizeComponent = new a.ClipSizeComponent(u.x, u.y);
      y.name = "newClip";
      r.addChild(y.asDisplayObject());
    }
    if (s && p.CastleModel.equipData.isGemFav(e.id, l.instanceOfClass(e, "RelicGemVO"))) {
      var b = new g.CastleGoodgameExternalClip("Equipment_FavStar", n.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Equipment_FavStar"));
      r.addChild(b.asDisplayObject());
      b.clipSizeComponent = new a.ClipSizeComponent(u.x + Math.round(d * 9), u.y + Math.round(d * 9));
    }
    return r;
  };
  CastleGemRenderer.renderUniqueGem = function (e, t = null, i = null) {
    var o = CastleGemRenderer.loadUniqueGem(e, t);
    if (o.isLoaded) {
      CastleGemRenderer.removeBroken(o);
    } else {
      o.clipLoaded.addOnce(CastleGemRenderer.removeBroken);
    }
    var s = i || new m(CastleGemRenderer.DEFAULT_GEM_SIZE, CastleGemRenderer.DEFAULT_GEM_SIZE);
    o.doWhenLoaded(C.CastleMovieClipHelper.getScaleAndCacheWithAntiAliasingOnLoaded(s.x, s.y));
    if (t) {
      o.doWhenLoaded(t);
    }
    var r = new f();
    var l = s.x / CastleGemRenderer.DEFAULT_GEM_SIZE;
    var c = s.y / CastleGemRenderer.DEFAULT_GEM_SIZE;
    var u = new g.CastleGoodgameExternalClip("Equipment_BG", n.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Equipment_BG"), null, 0, false);
    u.clipSizeComponent = new a.ClipSizeComponent(s.x + Math.round(l * 2), s.y + Math.round(c * 2));
    r.addChild(u.asDisplayObject());
    r.addChild(o.asDisplayObject());
    var d = new g.CastleGoodgameExternalClip("Equipment_BG_Unique", n.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Equipment_BG_Unique"), null, 0, false);
    d.clipSizeComponent = new a.ClipSizeComponent(s.x + Math.round(l * 6), s.y + Math.round(c * 6));
    r.addChild(d.asDisplayObject());
    if (e.hasStar) {
      var p;
      var h = s.x + l * 0.7;
      var _ = s.y + c * 3.5;
      (p = new g.CastleGoodgameExternalClip("Equipment_StarLevel", n.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Equipment_StarLevel"))).clipSizeComponent = new a.ClipSizeComponent(h, _);
      r.addChild(p.asDisplayObject());
      p.doWhenLoaded(CastleGemRenderer.fillStarClip(p, e));
    }
    return r;
  };
  CastleGemRenderer.fillStarClip = function (e, t) {
    return function (i) {
      e.currentshownDisplayObject.mc_star.gotoAndStop(t.starRarity + 1);
      s.GoodgameTextFieldManager.getInstance().registerTextField(e.currentshownDisplayObject.mc_star.txt_level, new u.TextVO(t.starLevel.toString()), new r.InternalGGSTextFieldConfigVO(true));
    };
  };
  CastleGemRenderer.renderRandomGem = function (e, t = null, i = null) {
    var o = CastleGemRenderer.loadRandomAsset(e, t);
    if (o.isLoaded) {
      CastleGemRenderer.addLevel(e, o)(o);
    } else {
      o.clipLoaded.addOnce(CastleGemRenderer.addLevel(e, o));
    }
    var s = i || new m(CastleGemRenderer.DEFAULT_GEM_SIZE, CastleGemRenderer.DEFAULT_GEM_SIZE);
    o.doWhenLoaded(C.CastleMovieClipHelper.getScaleAndCacheWithAntiAliasingOnLoaded(s.x, s.y));
    if (t) {
      o.doWhenLoaded(t);
    }
    var r = new f();
    var l = s.x / CastleGemRenderer.DEFAULT_GEM_SIZE;
    var c = s.y / CastleGemRenderer.DEFAULT_GEM_SIZE;
    var u = new g.CastleGoodgameExternalClip("Equipment_BG", n.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Equipment_BG"), null, 0, false);
    u.clipSizeComponent = new a.ClipSizeComponent(s.x + Math.round(l * 2), s.y + Math.round(c * 2));
    r.addChild(u.asDisplayObject());
    r.addChild(o.asDisplayObject());
    var d = new g.CastleGoodgameExternalClip("Equipment_BG_Gem", n.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Equipment_BG_Gem"), null, 0, false);
    d.clipSizeComponent = new a.ClipSizeComponent(s.x + Math.round(l * 6), s.y + Math.round(c * 6));
    r.addChild(d.asDisplayObject());
    return r;
  };
  CastleGemRenderer.renderSpecificGem = function (e, t = null, i = null) {
    var o = CastleGemRenderer.loadAsset(e, t);
    if (o.isLoaded) {
      if (e.lordType == h.BasicEquippableVO.LORD_TYPE_COMMANDER) {
        CastleGemRenderer.removeBorder(o);
      }
      CastleGemRenderer.removeBroken(o);
      CastleGemRenderer.removeSimple(o);
    } else {
      o.clipLoaded.addOnce(CastleGemRenderer.removeBroken);
      o.clipLoaded.addOnce(CastleGemRenderer.removeSimple);
      if (e.lordType == h.BasicEquippableVO.LORD_TYPE_COMMANDER) {
        o.clipLoaded.addOnce(CastleGemRenderer.removeBorder);
      }
    }
    var s = i || new m(CastleGemRenderer.DEFAULT_GEM_SIZE, CastleGemRenderer.DEFAULT_GEM_SIZE);
    o.doWhenLoaded(C.CastleMovieClipHelper.getScaleAndCacheWithAntiAliasingOnLoaded(s.x, s.y));
    if (t) {
      o.doWhenLoaded(t);
    }
    var r = new f();
    var l = s.x / CastleGemRenderer.DEFAULT_GEM_SIZE;
    var c = s.y / CastleGemRenderer.DEFAULT_GEM_SIZE;
    var u = new g.CastleGoodgameExternalClip("Equipment_BG", n.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Equipment_BG"), null, 0, false);
    u.clipSizeComponent = new a.ClipSizeComponent(s.x + Math.round(l * 2), s.y + Math.round(c * 2));
    r.addChild(u.asDisplayObject());
    r.addChild(o.asDisplayObject());
    var d = new g.CastleGoodgameExternalClip("Equipment_BG_Gem", n.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Equipment_BG_Gem"), null, 0, false);
    d.clipSizeComponent = new a.ClipSizeComponent(s.x + Math.round(l * 6), s.y + Math.round(c * 6));
    r.addChild(d.asDisplayObject());
    return r;
  };
  CastleGemRenderer.renderAssetBroken = function (e, t, i) {
    var n;
    if (t === undefined) {
      t = null;
    }
    if (i === undefined) {
      i = null;
    }
    if (l.instanceOfClass(e, "RelicGemVO")) {
      n = CastleGemRenderer.loadRelicGem(e, t);
    } else if (l.instanceOfClass(e, "CastleGemVO")) {
      var o = e;
      n = o.isUnique ? CastleGemRenderer.loadUniqueGem(o, t) : CastleGemRenderer.loadAsset(o, t);
    }
    if (n.isLoaded) {
      CastleGemRenderer.removeBorder(n);
      CastleGemRenderer.removeSimple(n);
    } else {
      n.clipLoaded.addOnce(CastleGemRenderer.removeBorder);
      n.clipLoaded.addOnce(CastleGemRenderer.removeSimple);
    }
    var a = i || new m(CastleGemRenderer.DEFAULT_GEM_SIZE, CastleGemRenderer.DEFAULT_GEM_SIZE);
    n.doWhenLoaded(C.CastleMovieClipHelper.getScaleAndCacheWithAntiAliasingOnLoaded(a.x, a.y));
    if (t) {
      n.doWhenLoaded(t);
    }
    var s = new f();
    s.addChild(n.asDisplayObject());
    return s;
  };
  CastleGemRenderer.renderAssetForSocket = function (e, t) {
    var i;
    if (t === undefined) {
      t = null;
    }
    if (l.instanceOfClass(e, "RelicGemVO")) {
      i = CastleGemRenderer.loadRelicGem(e, t);
    } else if (l.instanceOfClass(e, "CastleGemVO")) {
      var n = e;
      i = n.isUnique ? CastleGemRenderer.loadUniqueGem(n, t) : CastleGemRenderer.loadAsset(n, t);
    }
    if (i.isLoaded) {
      CastleGemRenderer.removeBorder(i);
      CastleGemRenderer.removeHD(i);
      CastleGemRenderer.removeBackground(i);
      CastleGemRenderer.removeBroken(i);
    } else {
      i.clipLoaded.addOnce(CastleGemRenderer.removeBorder);
      i.clipLoaded.addOnce(CastleGemRenderer.removeHD);
      i.clipLoaded.addOnce(CastleGemRenderer.removeBackground);
      i.clipLoaded.addOnce(CastleGemRenderer.removeBroken);
    }
    i.doWhenLoaded(C.CastleMovieClipHelper.getScaleAndCacheWithAntiAliasingOnLoaded(18, 18));
    if (t) {
      i.doWhenLoaded(t);
    }
    var o = new f();
    o.addChild(i.asDisplayObject());
    return o;
  };
  CastleGemRenderer.loadAsset = function (e, t = null) {
    var i = [];
    i.push(new o.ClipColor("cc", CastleGemRenderer.gemColor(e.boni[0].effect.effectID)));
    return new g.CastleGoodgameExternalClip(CastleGemRenderer.assetName(e.level), CastleGemRenderer.filePath, i, 0, false);
  };
  CastleGemRenderer.loadRandomAsset = function (e, t = null) {
    return new g.CastleGoodgameExternalClip(CastleGemRenderer.assetName(0), CastleGemRenderer.filePath, null, 0, false);
  };
  CastleGemRenderer.loadUniqueGem = function (e, t = null) {
    var i = "Item_Gem_Unique_" + e.reuseAssetOfGemID;
    return new g.CastleGoodgameExternalClip(i, n.BasicModel.basicLoaderData.getVersionedItemAssetUrl(i), null, 0, false);
  };
  CastleGemRenderer.loadRelicGem = function (e, t = null) {
    var i = e.getAssetClipName();
    return new g.CastleGoodgameExternalClip(i, _.IsoHelper.view.getAssetFileURL(i));
  };
  CastleGemRenderer.removeHD = function (e) {
    var t = e.currentshownDisplayObject;
    if (t.mc_shape_hd) {
      t.mc_shape_hd.visible = false;
    }
  };
  CastleGemRenderer.removeSimple = function (e) {
    var t = e.currentshownDisplayObject;
    if (t.mc_shape_simple) {
      t.mc_shape_simple.visible = false;
    }
  };
  CastleGemRenderer.removeBackground = function (e) {
    var t = e.currentshownDisplayObject;
    if (t.mc_background) {
      t.mc_background.visible = false;
    }
  };
  CastleGemRenderer.removeBorder = function (e) {
    var t = e.currentshownDisplayObject;
    if (t.mc_border) {
      t.mc_border.visible = false;
    }
  };
  CastleGemRenderer.removeBroken = function (e) {
    var t = e.currentshownDisplayObject;
    if (t.mc_broken) {
      t.mc_broken.visible = false;
    }
  };
  CastleGemRenderer.gemColor = function (e) {
    var t = [];
    t.push(d.ClientConstGem.GEM_COLOR_MAPPING[e]);
    return t;
  };
  CastleGemRenderer.addLevel = function (e, t) {
    return function callBack(i) {
      var n = t.currentshownDisplayObject;
      s.GoodgameTextFieldManager.getInstance().registerTextField(n.txt_level, new c.NumberVO(e.level), new r.InternalGGSTextFieldConfigVO(true));
    };
  };
  CastleGemRenderer.assetName = function (e) {
    return "Item_Gem_Lv" + e;
  };
  Object.defineProperty(CastleGemRenderer, "filePath", {
    get: function () {
      return n.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Equipment_Gems");
    },
    enumerable: true,
    configurable: true
  });
  CastleGemRenderer.DEFAULT_GEM_SIZE = 55;
  return CastleGemRenderer;
}();
exports.CastleGemRenderer = O;