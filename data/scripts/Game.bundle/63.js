Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./100.js");
var u = require("./1.js");
var d = require("./1.js");
var p = require("./1.js");
var h = require("./1.js");
var g = require("./5.js");
var C = require("./118.js");
var _ = require("./6.js");
var m = require("./18.js");
var f = require("./4.js");
var O = require("./1170.js");
var E = require("./24.js");
var y = require("./187.js");
var b = require("./41.js");
C.getLogger("WodPicHelper");
var D = function () {
  function WodPicHelper() {}
  WodPicHelper.setCorrectUnitBackgroundPic = function (e, t, i, n) {
    if (t && e) {
      r.MovieClipHelper.clearMovieClip(t);
      if (t) {
        if (e.isAuxiliary) {
          if (n != null) {
            t.addChildAt(new n(), 0);
          }
        } else if (i != null) {
          t.addChildAt(new i(), 0);
        }
      } else {
        l.debug("ERROR!!! WodPicHelper.setCorrectUnitBackgroundPic has recieved a Background MovieClip that is null");
      }
    }
  };
  WodPicHelper.addWodPic = function (e, t, i, n, l = "", c = true, u = null, d = -1) {
    if (!e || !t) {
      return null;
    }
    if (c) {
      r.MovieClipHelper.clearMovieClip(t);
    }
    if (d == -1) {
      d = _.int(f.CastleModel.kingdomData.activeKingdomID);
    }
    var C = f.CastleModel.userData.playerCrest;
    if (d == g.FactionConst.KINGDOM_ID && f.CastleModel.areaData.activeArea) {
      C = I.CrestHelper.getPlayerOrFactionCrest(f.CastleModel.areaData.activeOwnerInfo);
    }
    var b = C.colorsTwo;
    if (h.instanceOfClass(e, "ABasicBuildingVO") && e.usesColorFourCrest) {
      b = C.colorsFour;
    } else if (h.instanceOfClass(e, "AllianceDecoBuildingVO")) {
      b = y.CastleAllianceCrestHelper.getMyAllianceCrestBackgroundColorAsVector();
    }
    var D;
    var T = [];
    T.push(new o.ClipColor("flag", b));
    var v;
    var S = p.getDefinitionByNameFromLibrary("LoadingAnimation");
    var A = e.getShopIconName(l);
    if (m.ClientConstCastle.USE_BITMAP_CLIPS) {
      var L = s.GoodgameBitmapEngine.clipFactory.getExternalClipSource(A, e.getShopIconURL(l), T);
      var P = s.GoodgameBitmapEngine.clipFactory.getClipSource(S);
      var M = new O.CastleGoodgameBitmapClipExternal(L, 0, false, P);
      D = M;
      t.addChild(D.asDisplayObject());
      if (L.isLoaded) {
        WodPicHelper.clipBitmapLoaded(M);
      } else {
        M.clipLoaded.addOnce(WodPicHelper.clipBitmapLoaded);
      }
    } else {
      D = v = new E.CastleGoodgameExternalClip(A, e.getShopIconURL(l), T, 0, false, S, false, 1, true, true);
      t.addChild(D.asDisplayObject());
      if (v.isLoaded) {
        WodPicHelper.getOnClipLoaded(i, n, t)(v);
      } else {
        var R = new a.ClipSizeComponent(i, n);
        R.clipSizeChanged.add(WodPicHelper.onClipSizeChanged);
        D.clipSizeComponent = R;
        v.clipLoaded.addOnce(WodPicHelper.getOnClipLoaded(i, n, t));
      }
    }
    if (u && v) {
      if (v.isLoaded) {
        u(v);
      } else {
        v.clipLoaded.addOnce(u);
      }
    }
    var V = D.currentshownDisplayObject;
    if (V && V.art) {
      V.art.gotoAndStop(d + 1);
    }
    return D.asDisplayObject();
  };
  WodPicHelper.onClipSizeChanged = function (e) {
    var t = e.asDisplayObject();
    if (e.clipSizeComponent != null) {
      t.x = e.clipSizeComponent.offsetX;
      t.y = e.clipSizeComponent.offsetY;
    }
  };
  WodPicHelper.clipLoaded = function (e) {
    if (e.clipSizeComponent) {
      var t = e.asDisplayObject();
      t.x = e.clipSizeComponent.offsetX;
      t.y = e.clipSizeComponent.offsetY;
    }
  };
  WodPicHelper.clipBitmapLoaded = function (e) {
    if (e.clipSizeComponent) {
      var t = e.asDisplayObject();
      t.x = e.clipSizeComponent.offsetX;
      t.y = e.clipSizeComponent.offsetY;
    }
  };
  WodPicHelper.addPlayerUnitPic = function (e, t, i, n, o = true, a = true, s = null) {
    return WodPicHelper.addUnitPic(e, t, i, n, f.CastleModel.userData.playerCrest.colorsTwo[0], f.CastleModel.userData.playerCrest.colorsTwo[1], 30, null, o, a, true, s);
  };
  WodPicHelper.addUnitPic = function (e, t, i, s, l, c, u = 30, d = null, g = true, C = true, m = true, f = null, O = null, y = true) {
    var b = p.getDefinitionByNameFromLibrary("LoadingAnimation");
    var D = e.getVisualClassName();
    var I = [];
    var T = [];
    T.push(l);
    T.push(c);
    I.push(new o.ClipColor("", T));
    var v = new E.CastleGoodgameExternalClip(D, e.getShopIconURL(""), I, 0, false, g ? b : null, false, 1, true, true);
    if (t) {
      if (C) {
        r.MovieClipHelper.clearMovieClip(t);
      }
      t.addChild(v.asDisplayObject());
    }
    if (m && h.instanceOfClass(e, "ToolUnitVO")) {
      s = _.int(s * 0.8);
      i = _.int(i * 0.8);
    }
    if (v.isLoaded) {
      WodPicHelper.getOnClipLoaded(i, s, t)(v);
    } else {
      var S = new a.ClipSizeComponent(i, s);
      S.clipSizeChanged.add(WodPicHelper.onClipSizeChanged);
      v.clipSizeComponent = S;
      v.clipLoaded.addOnce(WodPicHelper.getOnClipLoaded(i, s, t));
    }
    var A = null;
    if (O) {
      r.MovieClipHelper.clearMovieClip(O);
    }
    if (y && e.level > 0) {
      (A = new E.CastleGoodgameExternalClip("Colleactable_LevelIndicator_Unit", n.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Colleactable_LevelIndicator_Unit"))).recycleAsset = false;
      if (O) {
        O.addChild(A);
        O.visible = true;
      } else if (t) {
        t.addChild(A);
      }
      if (A.isLoaded) {
        WodPicHelper.getOnLevelClipLoaded(u, u, e.level)(A);
      } else {
        A.doWhenLoaded(WodPicHelper.getOnLevelClipLoaded(u, u, e.level));
      }
    }
    if (f) {
      if (v.isLoaded) {
        f(v);
      } else {
        v.clipLoaded.addOnce(f);
      }
    }
    if (A && !O) {
      var L = h.instanceOfClass(e, "ToolUnitVO");
      if (v.isLoaded) {
        WodPicHelper.getOnClipLoadedLevelOffset(A, d, i, s, L)(v);
      } else {
        v.doWhenLoaded(WodPicHelper.getOnClipLoadedLevelOffset(A, d, i, s, L));
      }
    }
    return v.asDisplayObject();
  };
  WodPicHelper.addSmallUnitPicToContainer = function (e, t, i, n, o = true, a, s = null, r = null, l = null) {
    return WodPicHelper.addUnitPicToContainer(e, t, WodPicHelper.SMALL_UNIT_WIDTH, WodPicHelper.SMALL_UNIT_HEIGHT, WodPicHelper.SMALL_UNIT_WIDTH, WodPicHelper.SMALL_UNIT_HEIGHT, i, n, a, s, o, r, l);
  };
  WodPicHelper.addUnitPicToContainer = function (e, t, i, n, o, a, s, l, c, u = null, d = true, p = null, g = null) {
    if (h.instanceOfClass(e, "EffectIconUnitVO")) {
      if (g) {
        r.MovieClipHelper.clearMovieClip(g);
      }
      return WodPicHelper.addEffectPic(e, t, i, n, o, a, s, l, d, p);
    } else if (h.instanceOfClass(e, "SoldierUnitVO") || h.instanceOfClass(e, "UnknownUnitVO") && e.type != "Tools") {
      return WodPicHelper.addUnitPic(e, t.mc_tool ? t.mc_tool : t, o, a, s, l, c, u, true, d, false, p, g);
    } else {
      return WodPicHelper.addUnitPic(e, t.mc_tool ? t.mc_tool : t, i, n, s, l, c, u, true, d, false, p, g);
    }
  };
  WodPicHelper.addSmallPlayerUnitPicToContainer = function (e, t, i, n = null, o = true, a = null) {
    var s = f.CastleModel.userData.playerCrest.colorsTwo;
    return WodPicHelper.addSmallUnitPicToContainer(e, t, s[0], s[1], o, i, n, a);
  };
  WodPicHelper.addPlayerUnitPicToContainer = function (e, t, i, n, o, a, s, r = null, l = true, c = null, u = null) {
    var d = f.CastleModel.userData.playerCrest.colorsTwo;
    return WodPicHelper.addUnitPicToContainer(e, t, i, n, o, a, d[0], d[1], s, r, l, c, u);
  };
  WodPicHelper.addIcon = function (e, t, i, n) {
    var o = new e();
    o.scaleX = o.scaleY = WodPicHelper.getScaleFactor(o, i, n);
    t.addChild(o);
  };
  WodPicHelper.addSoldierAttackEffectIcon = function (e, t, i, n) {
    var o;
    r.MovieClipHelper.clearMovieClip(t);
    var a = e;
    if (h.instanceOfClass(e, "SoldierUnitVO")) {
      if (a.meleeAttack > a.rangeAttack) {
        o = Library.CastleInterfaceElements_Icons.Icon_UnitCombatPowerMelee;
      } else if (a.meleeAttack < a.rangeAttack) {
        o = Library.CastleInterfaceElements_Icons.Icon_UnitCombatPowerRange;
      }
    }
    WodPicHelper.addIcon(o, t, i, n);
  };
  WodPicHelper.addToolEffectIcon = function (e, t, i, n, o) {
    var a;
    if (o === undefined) {
      o = 0;
    }
    r.MovieClipHelper.clearMovieClip(t);
    if (h.instanceOfClass(e, "ToolUnitVO")) {
      var s = e;
      var l = s.effectTypes;
      if (l.length) {
        a = l[o].iconClass;
      } else if (s.numberofDolls > 0) {
        a = Library.CastleInterfaceElements.Icon_Units_Big;
      } else if (s.unitSpeed > 0) {
        a = Library.CastleInterfaceElements_Icons.Icon_TravelTime;
      }
    } else if (h.instanceOfClass(e, "BasicUnitVO")) {
      a = Library.CastleInterfaceElements_Icons.Icon_Units;
    }
    WodPicHelper.addIcon(a, t, i, n);
  };
  WodPicHelper.getScaleFactor = function (e, t, i) {
    var n = e.getBounds(null);
    var o = t / n.width;
    if (n.height * o > i) {
      o = i / n.height;
    }
    return parseFloat(o.toFixed(2));
  };
  WodPicHelper.addEffectPic = function (e, t, i, n, o, a, s, l, c = true, u = null) {
    var p = new (d.getDefinitionByName(e.getVisualClassName()))();
    p.gotoAndStop(1);
    if (c) {
      if (t.mc_unit) {
        r.MovieClipHelper.clearMovieClip(t.mc_unit);
      }
      r.MovieClipHelper.clearMovieClip(t.mc_tool ? t.mc_tool : t);
    }
    p.scaleX = p.scaleY = WodPicHelper.getScaleFactor(p, i, n);
    (t.mc_tool ? t.mc_tool : t).addChild(p);
    WodPicHelper.colorWodPic(p, s, l);
    if (u) {
      u(p);
    }
    return p;
  };
  WodPicHelper.colorWodPic = function (e, t, i) {
    var n = new u.ColorTransform();
    n.color = t;
    if (e.c1) {
      e.c1.useFilters([new createjs.ColorFilter(n.redMultiplier, n.greenMultiplier, n.blueMultiplier, n.alphaMultiplier, n.redOffset, n.greenOffset, n.blueOffset, n.alphaOffset)]);
    }
    n.color = i;
    if (e.c2) {
      e.c2.useFilters([new createjs.ColorFilter(n.redMultiplier, n.greenMultiplier, n.blueMultiplier, n.alphaMultiplier, n.redOffset, n.greenOffset, n.blueOffset, n.alphaOffset)]);
    }
  };
  WodPicHelper.getOnClipLoadedLevelOffset = function (e, t, i, n, o = false) {
    return function (a) {
      b.CastleMovieClipHelper.uncacheSafe(a);
      var s = a.getBounds();
      var r = WodPicHelper.getScaleFactor(a, i, n);
      if (!a.cacheCanvas) {
        a.doCache();
      }
      if (o) {
        e.x = a.x + (s.x + e.width / 2) * r;
        e.y = a.y + (s.y + e.height / 3) * r;
      } else {
        e.x += ((t ? -s.width / 2 + t.x : -s.width / 2) + 5) * r;
        e.y += ((t ? -s.height / 2 + t.y : -s.height / 2) + 5) * r;
      }
    };
  };
  WodPicHelper.getOnLevelClipLoaded = function (e, t, i) {
    return function (o) {
      n.GoodgameTextFieldManager.getInstance().registerTextField(o.currentshownDisplayObject.txt_value, new T.CastleLocalizedNumberVO(i), new c.InternalGGSTextFieldConfigVO(true));
      o.scaleX = o.scaleY = 1;
      var a = WodPicHelper.getScaleFactor(o, e, t);
      b.CastleMovieClipHelper.scaleAndCacheWithAntiAliasing(o, a);
    };
  };
  WodPicHelper.getOnClipLoaded = function (e, t, i = null) {
    return function (i) {
      i.clipSizeComponent = null;
      i.scaleX = i.scaleY = 1;
      var n = WodPicHelper.getScaleFactor(i, e, t);
      if (n >= 0.95) {
        n = 1;
      }
      var o = i.getBounds();
      var a = -(o.width * n / 2 + o.left * n);
      var s = -(o.height * n / 2 + o.top * n);
      b.CastleMovieClipHelper.scaleAndCacheWithAntiAliasing(i, n);
      i.x = a;
      i.y = s;
    };
  };
  WodPicHelper.__initialize_static_members = function () {
    WodPicHelper.SMALL_UNIT_WIDTH = 40;
    WodPicHelper.SMALL_UNIT_HEIGHT = 40;
  };
  return WodPicHelper;
}();
exports.WodPicHelper = D;
var I = require("./61.js");
var T = require("./85.js");
D.__initialize_static_members();