Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./3.js");
var c = require("./5.js");
var u = require("./57.js");
var d = require("./24.js");
var p = createjs.MovieClip;
var h = createjs.Point;
var g = createjs.Shape;
var C = function () {
  function EquipmentIconHelper() {}
  EquipmentIconHelper.isFavorite = function (e) {
    if (y.instanceOfClass(e, "BasicEquipmentVO") || y.instanceOfClass(e, "RelicEquipmentVO")) {
      return I.CastleModel.equipData.isEQFav(e.id);
    } else {
      return I.CastleModel.equipData.isGemFav(e.id, !y.instanceOfClass(e, "CastleGemVO"));
    }
  };
  EquipmentIconHelper.addEquipmentIcon = function (e, t, i, n, o = null, l = true, u = false, h = false, g = true, C = false) {
    if (!e) {
      console.warn("EquipmentVO is null");
      return new p();
    }
    var _ = e && e.hasStar ? 0.7 : 0;
    var m = e && e.hasStar ? 3.5 : 0;
    var f = (i = n = Math.min(i, n)) / 55;
    var O = n / 55;
    var v = new p();
    v.mouseChildren = true;
    v.name = "eq";
    if (t) {
      if (l) {
        r.MovieClipHelper.clearMovieClip(t);
      }
      t.addChild(v);
    }
    if (!(e instanceof T.RandomHeroVO)) {
      var S = new d.CastleGoodgameExternalClip("Equipment_BG", a.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Equipment_BG"), null, 0, false);
      S.mouseEnabled = false;
      v.addChild(S.asDisplayObject());
      S.clipSizeComponent = new s.ClipSizeComponent(i + Math.round(f * 2), n + Math.round(O * 2));
    }
    var A;
    var L;
    var P;
    var M;
    var R = i + _ * f;
    var V = n + m * O;
    try {
      A = new d.CastleGoodgameExternalClip(e.visClassName, e.getFilePath(), null, 0, false);
    } catch (t) {
      if (e) {
        console.error("Could not Found File: \"" + e.visClassName + "\" in \"" + e.getFilePath());
      } else {
        console.error("vo is null");
      }
    }
    v.addChild(A.asDisplayObject());
    A.mouseEnabled = false;
    v.equipmentIcon = A;
    A.doWhenLoaded(D.CastleMovieClipHelper.getScaleAndCacheWithAntiAliasingOnLoaded(i, n));
    if (!(e instanceof b.RelicEquipmentVO) && e.enchantmentLevel >= c.EquipmentConst.getMaxEnchantmentLevel(e.visualRareID) || e instanceof b.RelicEquipmentVO && e.enchantmentLevel >= I.CastleModel.equipData.relicXml.maxRelicEnchanterLevel) {
      L = new d.CastleGoodgameExternalClip("Equipment_EnchantingSparkle", a.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Equipment_EnchantingSparkle"), null, g ? 24 : 0, g);
      v.addChild(L.asDisplayObject());
      L.clipSizeComponent = new s.ClipSizeComponent(i, n);
      L.mouseEnabled = false;
    }
    if (!e.isPermanent) {
      P = new d.CastleGoodgameExternalClip("Equipment_TemporaryIconBottomLeft", a.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Equipment_TemporaryIconBottomLeft"));
      v.addChild(P.asDisplayObject());
      P.clipSizeComponent = new s.ClipSizeComponent(i, n);
      P.mouseEnabled = false;
    }
    if (e.hasStar) {
      M = new d.CastleGoodgameExternalClip("Equipment_StarLevel", a.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Equipment_StarLevel"));
      v.addChild(M.asDisplayObject());
      M.clipSizeComponent = new s.ClipSizeComponent(R, V);
      M.doWhenLoaded(EquipmentIconHelper.fillStarClip(M, e));
      M.mouseEnabled = false;
    }
    if (!y.instanceOfClass(e, "RandomEquipmentVO") && !(e instanceof T.RandomHeroVO)) {
      var x = new d.CastleGoodgameExternalClip("Equipment_BG_" + e.rarity, a.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Equipment_BG_" + e.rarity), null, 0, false);
      v.addChild(x.asDisplayObject());
      x.clipSizeComponent = new s.ClipSizeComponent(i + Math.round(f * 6), n + Math.round(O * 6));
      x.mouseEnabled = false;
    }
    if (h) {
      var w = new d.CastleGoodgameExternalClip("Equipment_NewIcon", a.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Equipment_NewIcon"));
      v.addChild(w.asDisplayObject());
      w.name = "newClip";
      w.clipSizeComponent = new s.ClipSizeComponent(i + Math.round(f * 9), n + Math.round(f * 9));
    }
    if (C && I.CastleModel.equipData.isEQFav(e.id)) {
      var B = new d.CastleGoodgameExternalClip("Equipment_FavStar", a.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Equipment_FavStar"));
      v.addChild(B.asDisplayObject());
      B.clipSizeComponent = new s.ClipSizeComponent(i + Math.round(f * 9), n + Math.round(f * 9));
    }
    if (t instanceof p) {
      t.toolTipText = EquipmentIconHelper.getToolTipByEquipmentVO(e);
    }
    if (e.gemVO) {
      var F = new E.EquipmentGemSocket(e, u);
      F.mouseEnabled = true;
      if (t) {
        t.addChild(F);
      } else {
        v.addChild(F);
      }
      if (t instanceof p) {
        t.gemSocket = F;
      }
    }
    if (o) {
      if (A.isLoaded) {
        o(A);
      } else {
        A.clipLoaded.addOnce(o);
      }
    }
    return v;
  };
  EquipmentIconHelper.addEquipmentIconHitBG = function (e, t, i, n = false) {
    var o = e.getChildAt(0);
    if (!(o instanceof g) || o.name != "EquipmentIconHitBG") {
      var a = new g();
      a.graphics.beginFill(n ? "#ff0000" : "#ffffff").drawRect(0, 0, t, i);
      a.alpha = n ? 1 : 0.01;
      a.cache(0, 0, t, i);
      a.x = -t / 2;
      a.y = -i / 2;
      a.name = "EquipmentIconHitBG";
      e.addChildAt(a, 0);
    }
  };
  EquipmentIconHelper.updateEquipmentIconCache = function (e, t, i, n) {
    var o = e.equipmentIcon;
    if (o) {
      D.CastleMovieClipHelper.scaleWithAntiAliasing(o, t, i, n);
    }
  };
  EquipmentIconHelper.fillStarClip = function (e, t) {
    return function (i) {
      e.currentshownDisplayObject.mc_star.gotoAndStop(t.starRarity + 1);
      n.GoodgameTextFieldManager.getInstance().registerTextField(e.currentshownDisplayObject.mc_star.txt_level, new l.NumberVO(t.starLevel), new o.InternalGGSTextFieldConfigVO(true));
    };
  };
  EquipmentIconHelper.addGem = function (e, t) {
    return function (i) {
      e.currentshownDisplayObject.mc_empty.addChild(O.CastleGemRenderer.renderAssetForSocket(t.gemVO, EquipmentIconHelper.resizeGemClip));
    };
  };
  EquipmentIconHelper.resizeGemClip = function (e = null) {
    e.clipSizeComponent = new s.ClipSizeComponent(18, 18);
  };
  EquipmentIconHelper.getToolTipByEquipmentVO = function (e) {
    if (y.instanceOfClass(e, "RandomEquipmentVO") || y.instanceOfClass(e, "RandomHeroVO")) {
      return e.nameString;
    } else {
      return null;
    }
  };
  EquipmentIconHelper.getLordIcon = function (e, t, i = -1, n = null) {
    if (!e) {
      return new p();
    }
    var o;
    o = new d.CastleGoodgameExternalClip(e.getVisClassName(), a.BasicModel.basicLoaderData.getVersionedItemAssetUrl(e.getVisAsset()), null, 0, false);
    var s = new p();
    if (i > 0) {
      o.doWhenLoaded(D.CastleMovieClipHelper.getScaleAndCacheWithAntiAliasingOnLoaded(i, i, 1));
      if (n) {
        o.doWhenLoaded(n);
      }
    }
    s.addChild(o.asDisplayObject());
    if (t) {
      r.MovieClipHelper.clearMovieClip(t);
      t.addChild(s);
    }
    return s;
  };
  EquipmentIconHelper.addLordFeather = function (e, t, i = 1) {
    if (e.id == c.TravelConst.COMMANDER_PREMIUM) {
      var n;
      (n = I.CastleModel.vipData.remainingPremiumCommanders > 0 ? new Library.CastleInterfaceElements_Icons.Icon_VipPoints() : new Library.CastleInterfaceElements_Icons.Icon_C2()).scaleX = n.scaleY = i * 1.2;
      t.addChild(n);
    } else {
      var o = e.getFeatherClassName();
      if (!o || o == "") {
        return;
      }
      var s = new d.CastleGoodgameExternalClip(o, a.BasicModel.basicLoaderData.getVersionedItemAssetUrl(e.getFeatherAsset()), null, 0, false).asDisplayObject();
      s.scaleX = s.scaleY = i;
      t.addChild(s);
    }
  };
  EquipmentIconHelper.addLordIcon = function (e, t, i, n = -1, o = null, r = false) {
    if (t.warning && t.warning.parent) {
      t.warning.parent.removeChild(t.warning);
    }
    if (!e) {
      if (o) {
        return new o();
      } else {
        return new p();
      }
    }
    var l = o ? new o() : new p();
    var c = 0;
    if (e.isHero) {
      var u = n > 0 ? n : i;
      var g = u * 1.05;
      var C = new d.CastleGoodgameExternalClip("Equipment_BG_" + _.BasicEquipmentVO.parseRarityID(e.rareID), a.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Equipment_BG_" + _.BasicEquipmentVO.parseRarityID(e.rareID)), null, 0, false);
      C.clipSizeComponent = new s.ClipSizeComponent(g, g);
      l.addChild(EquipmentIconHelper.getLordIcon(e, null, u, function () {
        if (t.parent.cacheCanvas) {
          t.parent.updateCache();
        }
      }));
      l.addChild(C);
      l.mouseChildren = false;
      if (t) {
        t.addChild(l);
      }
    } else {
      c = i;
      l = EquipmentIconHelper.getLordIcon(e, t, c);
    }
    if (!e.everyEquipmentSlotIsUsed && e.canUseEquipmentWarningIcon && r && (!e.isBaron || !y.instanceOfClass(e, "BaronVO") || !e.isDummyBaron)) {
      var m;
      var f = i + i / 55 * 14;
      var O = new p();
      m = new d.CastleGoodgameExternalClip("Equipment_LordNotFullEquippedWarning", a.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Equipment_LordNotFullEquippedWarning"));
      O.addChild(m.asDisplayObject());
      m.clipSizeComponent = new s.ClipSizeComponent(f, f);
      if (e.isBaron) {
        O.toolTipText = "dialog_tempEquipment_castellan_missingEquipment_tooltip";
      } else {
        O.toolTipText = "dialog_tempEquipment_commander_missingEquipment_tooltip";
      }
      O.mouseChildren = false;
      l.addChild(O);
      if (t) {
        for (var E = t; E.mouseChildren == 0 || E.parent && E.parent.mouseChildren == 0 || E.parent.parent && E.parent.parent.mouseChildren == 0;) {
          E = E.parent;
        }
        var b = E.globalToLocal(O.localToGlobal(new h()));
        O.x = b.x;
        O.y = b.y;
        E.addChild(O);
        t.warning = O;
      }
    }
    return l;
  };
  EquipmentIconHelper.onClipSizeChanged = function (e) {
    var t = e.asDisplayObject();
    if (e.clipSizeComponent) {
      t.x = e.clipSizeComponent.offsetX;
      t.y = e.clipSizeComponent.offsetY;
    }
  };
  EquipmentIconHelper.hideEquipmentToolTip = function () {
    EquipmentIconHelper.equipToolTip.disp.visible = false;
  };
  EquipmentIconHelper.hideRelicEquipmentToolTip = function () {
    EquipmentIconHelper.relicEquipToolTip.disp.visible = false;
  };
  EquipmentIconHelper.showToolTip = function (e, t, i = null, n = true, o = false) {
    if (y.instanceOfClass(t, "RandomEquipmentVO") || y.instanceOfClass(t, "RandomHeroVO") || y.instanceOfClass(t, "RandomGemVO")) {
      e.toolTipText = t.nameString;
    } else {
      if (y.instanceOfClass(t, "RelicEquipmentVO") || y.instanceOfClass(t, "RelicGemVO")) {
        EquipmentIconHelper.showRelicToolTip(e, t);
      } else {
        EquipmentIconHelper.hideRelicEquipmentToolTip();
        EquipmentIconHelper.equipToolTip.initToolTip(t, e, i, n, o);
        EquipmentIconHelper.equipToolTip.disp.visible = true;
      }
      EquipmentIconHelper.onShow.dispatch();
    }
  };
  EquipmentIconHelper.showRelicToolTip = function (e, t) {
    EquipmentIconHelper.hideEquipmentToolTip();
    EquipmentIconHelper.relicEquipToolTip.initToolTip(t, e);
    EquipmentIconHelper.relicEquipToolTip.disp.visible = true;
    EquipmentIconHelper.onShow.dispatch();
  };
  Object.defineProperty(EquipmentIconHelper, "equipToolTip", {
    get: function () {
      this._equipToolTip ||= new m.CastleEquipmentToolTip();
      return this._equipToolTip;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentIconHelper, "relicEquipToolTip", {
    get: function () {
      this._relicEquipToolTip ||= new f.RelicEquipmentToolTip();
      return this._relicEquipToolTip;
    },
    enumerable: true,
    configurable: true
  });
  EquipmentIconHelper.FRAME_UNIQUE = 5;
  EquipmentIconHelper.onShow = new u.Signal();
  return EquipmentIconHelper;
}();
exports.EquipmentIconHelper = C;
var _ = require("./198.js");
var m = require("./1991.js");
var f = require("./3875.js");
var O = require("./248.js");
var E = require("./3876.js");
var y = require("./1.js");
var b = require("./684.js");
var D = require("./41.js");
var I = require("./4.js");
var T = require("./1798.js");