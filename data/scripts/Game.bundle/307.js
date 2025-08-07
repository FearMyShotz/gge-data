Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.MovieClip;
var o = createjs.Point;
var a = function () {
  function DecoBuildingToolTipManager() {}
  Object.defineProperty(DecoBuildingToolTipManager, "iconTime", {
    get: function () {
      DecoBuildingToolTipManager._iconTime ||= new Library.CastleInterfaceElements_Icons.Icon_Time();
      return DecoBuildingToolTipManager._iconTime;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecoBuildingToolTipManager, "iconMight", {
    get: function () {
      DecoBuildingToolTipManager._iconMight ||= new Library.CastleInterfaceElements.Icon_Might_starOnly();
      return DecoBuildingToolTipManager._iconMight;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecoBuildingToolTipManager, "iconPublicOrder", {
    get: function () {
      DecoBuildingToolTipManager._iconPublicOrder ||= new Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big();
      return DecoBuildingToolTipManager._iconPublicOrder;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecoBuildingToolTipManager, "iconMorale", {
    get: function () {
      DecoBuildingToolTipManager._iconMorale ||= new Library.CastleInterfaceElements.Icon_Morality();
      return DecoBuildingToolTipManager._iconMorale;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecoBuildingToolTipManager, "iconFusionLevel", {
    get: function () {
      DecoBuildingToolTipManager._iconFusionLevel ||= new Library.CastleInterfaceElements_Icons.Icon_Fusion_Level();
      return DecoBuildingToolTipManager._iconFusionLevel;
    },
    enumerable: true,
    configurable: true
  });
  DecoBuildingToolTipManager.showToolTip = function (e, t, i = 0, n = 0) {
    var o = DecoBuildingToolTipManager.numShownItems(t) > 4 ? DecoBuildingToolTipManager.clipNameTwoRows : DecoBuildingToolTipManager.clipNameOneRow;
    if (!DecoBuildingToolTipManager._clip || !DecoBuildingToolTipManager._clip.isLoaded || DecoBuildingToolTipManager.loadedClipName != o) {
      if (!DecoBuildingToolTipManager._clip || DecoBuildingToolTipManager.loadedClipName != o) {
        DecoBuildingToolTipManager._clip = new C.CastleGoodgameExternalClip(o, s.BasicModel.basicLoaderData.getVersionedItemAssetUrl(DecoBuildingToolTipManager.assetName));
      }
      DecoBuildingToolTipManager.loadedClipName = o;
      DecoBuildingToolTipManager._clip.doWhenLoaded(function () {
        DecoBuildingToolTipManager.showToolTip(e, t, i, n);
      });
      return;
    }
    l.MovieClipHelper.clearMovieClip(DecoBuildingToolTipManager.mc);
    DecoBuildingToolTipManager.mc.addChild(DecoBuildingToolTipManager._clip.currentshownDisplayObject);
    if (t) {
      DecoBuildingToolTipManager.disp.visible = true;
      DecoBuildingToolTipManager.textFieldManager.registerTextField(DecoBuildingToolTipManager.disp.txt_name, new p.LocalizedTextVO(t.getNameString())).autoFitToBounds = true;
      DecoBuildingToolTipManager.textFieldManager.registerTextField(DecoBuildingToolTipManager.disp.txt_copy, new p.LocalizedTextVO(t.getShortInfoString())).autoFitToBounds = true;
      var a = t;
      var r = a && a.fusionInfoVO;
      DecoBuildingToolTipManager.disp.icon_fusion_target.visible = r && a.fusionInfoVO.isFusionTarget;
      DecoBuildingToolTipManager.disp.icon_fusion_source.visible = r && a.fusionInfoVO.isFusionSource;
      DecoBuildingToolTipManager.disp.icon_unique_deco.visible = r && a.isUnique();
      DecoBuildingToolTipManager.disp.icon_effect.visible = u.instanceOfClass(t, "DecoBuildingVO") && t.allShowableBuildingEffects && t.allShowableBuildingEffects.length > 0;
      DecoBuildingToolTipManager.disp.mc_relic.visible = t.isRelicBuilding;
      var c = 0;
      if (DecoBuildingToolTipManager.isShowingFusionLevel(t)) {
        DecoBuildingToolTipManager.handleFusionLevel(DecoBuildingToolTipManager.disp["i" + c], t);
        c++;
      }
      if (DecoBuildingToolTipManager.isShowingMoralePublicOrder(t)) {
        DecoBuildingToolTipManager.handleMoralePublicOrder(DecoBuildingToolTipManager.disp["i" + c], t);
        c++;
      }
      if (DecoBuildingToolTipManager.isShowingMight(t)) {
        DecoBuildingToolTipManager.handleMightValue(DecoBuildingToolTipManager.disp["i" + c], t);
        c++;
      }
      if (DecoBuildingToolTipManager.isShowingBuildingTime(t)) {
        DecoBuildingToolTipManager.handleBuildingTime(DecoBuildingToolTipManager.disp["i" + c], t);
        c++;
      }
      t.allShowableBuildingEffects.forEach(function (e) {
        var t = e.effect.effectType.type.simpleEffectIconClass;
        DecoBuildingToolTipManager.handleEffect(DecoBuildingToolTipManager.disp["i" + c], t, new p.LocalizedTextVO(e.effect.effectType.type.simpleValueTextID, e.effectValue.textReplacements));
        c++;
      });
      for (; c < 8; c++) {
        if (DecoBuildingToolTipManager.disp["i" + c]) {
          DecoBuildingToolTipManager.disp["i" + c].visible = false;
        }
      }
      DecoBuildingToolTipManager.positionDisp(e, i, n);
    }
  };
  DecoBuildingToolTipManager.handleEffect = function (e, t, i) {
    l.MovieClipHelper.replaceMovieClip(e.icon_placeholder, t);
    if (e.icon_placeholder.getChildAt(0)) {
      l.MovieClipHelper.scaleToFit(e.icon_placeholder.getChildAt(0), DecoBuildingToolTipManager.MAX_ICON_HEIGHT, DecoBuildingToolTipManager.MAX_ICON_HEIGHT);
    }
    DecoBuildingToolTipManager.textFieldManager.registerTextField(e.txt_text, i);
    e.visible = true;
  };
  DecoBuildingToolTipManager.handleBuildingTime = function (e, t) {
    var i = t.getEstimatedBuildDuration();
    l.MovieClipHelper.clearMovieClip(e.icon_placeholder);
    if (DecoBuildingToolTipManager.iconTime.height > DecoBuildingToolTipManager.MAX_ICON_HEIGHT || DecoBuildingToolTipManager.iconTime.height < DecoBuildingToolTipManager.MAX_ICON_HEIGHT - 2) {
      DecoBuildingToolTipManager.iconTime.scaleX = DecoBuildingToolTipManager.iconTime.scaleY = DecoBuildingToolTipManager.MAX_ICON_HEIGHT / DecoBuildingToolTipManager.iconTime.height;
    }
    e.icon_placeholder.addChild(DecoBuildingToolTipManager.iconTime);
    DecoBuildingToolTipManager.textFieldManager.registerTextField(e.txt_text, new h.TextVO(c.TimeStringHelper.getShortTimeStringBySeconds(i)));
    e.visible = true;
  };
  DecoBuildingToolTipManager.isShowingBuildingTime = function (e) {
    return e.getEstimatedBuildDuration() > 0 && e.shopCategory != _.ClientConstCastle.CATEGORY_NOT_IN_SHOP && !m.CastleModel.decoStorage.getCurrentStorage().isDecoInStorage(e);
  };
  DecoBuildingToolTipManager.handleMightValue = function (e, t) {
    var i = g.int(u.instanceOfClass(t, "AEffectBuildingVO") ? t.mightValue : 0);
    l.MovieClipHelper.clearMovieClip(e.icon_placeholder);
    l.MovieClipHelper.scaleToFit(DecoBuildingToolTipManager.iconMight, DecoBuildingToolTipManager.MAX_ICON_HEIGHT, DecoBuildingToolTipManager.MAX_ICON_HEIGHT);
    e.icon_placeholder.addChild(DecoBuildingToolTipManager.iconMight);
    DecoBuildingToolTipManager.textFieldManager.registerTextField(e.txt_text, new d.LocalizedNumberVO(i));
    e.visible = true;
  };
  DecoBuildingToolTipManager.isShowingMight = function (e) {
    return g.int(u.instanceOfClass(e, "AEffectBuildingVO") ? e.mightValue : 0) > 0;
  };
  DecoBuildingToolTipManager.handleMoralePublicOrder = function (e, t) {
    var i = g.int(u.instanceOfClass(t, "AEffectBuildingVO") ? t.morality : 0);
    var n = g.int(u.instanceOfClass(t, "AEffectBuildingVO") ? t.decoPoints : 0);
    l.MovieClipHelper.clearMovieClip(e.icon_placeholder);
    var o = i != 0 ? DecoBuildingToolTipManager.iconMorale : DecoBuildingToolTipManager.iconPublicOrder;
    if (o.height > DecoBuildingToolTipManager.MAX_ICON_HEIGHT || o.height < DecoBuildingToolTipManager.MAX_ICON_HEIGHT - 2) {
      o.scaleX = o.scaleY = DecoBuildingToolTipManager.MAX_ICON_HEIGHT / o.height;
    }
    e.icon_placeholder.addChild(o);
    DecoBuildingToolTipManager.textFieldManager.registerTextField(e.txt_text, new d.LocalizedNumberVO(i != 0 ? i : n));
    e.visible = true;
  };
  DecoBuildingToolTipManager.isShowingMoralePublicOrder = function (e) {
    var t = g.int(u.instanceOfClass(e, "AEffectBuildingVO") ? e.morality : 0);
    var i = g.int(u.instanceOfClass(e, "AEffectBuildingVO") ? e.decoPoints : 0);
    return t != 0 || i != 0;
  };
  DecoBuildingToolTipManager.handleFusionLevel = function (e, t) {
    var i = t;
    l.MovieClipHelper.clearMovieClip(e.icon_placeholder);
    if (DecoBuildingToolTipManager.iconFusionLevel.height > DecoBuildingToolTipManager.MAX_ICON_HEIGHT || DecoBuildingToolTipManager.iconFusionLevel.height < DecoBuildingToolTipManager.MAX_ICON_HEIGHT - 2) {
      DecoBuildingToolTipManager.iconFusionLevel.scaleX = DecoBuildingToolTipManager.iconFusionLevel.scaleY = DecoBuildingToolTipManager.MAX_ICON_HEIGHT / DecoBuildingToolTipManager.iconFusionLevel.height;
    }
    e.icon_placeholder.addChild(DecoBuildingToolTipManager.iconFusionLevel);
    var n = g.int(i.fusionInfoVO.getCurrentLevel());
    DecoBuildingToolTipManager.textFieldManager.registerTextField(e.txt_text, new d.LocalizedNumberVO(n));
    e.visible = true;
  };
  DecoBuildingToolTipManager.isShowingFusionLevel = function (e) {
    var t = e;
    return e && u.instanceOfClass(t, "ADecoBuildingVO") && t.isFusionRelevant() && (t.fusionInfoVO.isFusionSource || t.fusionInfoVO.isFusionTarget);
  };
  DecoBuildingToolTipManager.numShownItems = function (e) {
    var t = 0;
    if (DecoBuildingToolTipManager.isShowingBuildingTime(e)) {
      t++;
    }
    if (DecoBuildingToolTipManager.isShowingFusionLevel(e)) {
      t++;
    }
    if (DecoBuildingToolTipManager.isShowingMoralePublicOrder(e)) {
      t++;
    }
    if (DecoBuildingToolTipManager.isShowingMight(e)) {
      t++;
    }
    return t += e.allShowableBuildingEffects ? e.allShowableBuildingEffects.length : 0;
  };
  DecoBuildingToolTipManager.positionDisp = function (e, t = 0, i = 0) {
    var n = e.localToGlobal(new o(0, 0));
    var a = g.int(n.x + t);
    var s = g.int(Math.max(DecoBuildingToolTipManager.disp.height, n.y) - e.height / 2 + i);
    if (s - DecoBuildingToolTipManager.disp.height < 0) {
      s = g.int(Math.max(DecoBuildingToolTipManager.disp.height, n.y) + e.height / 2 - i + DecoBuildingToolTipManager.disp.height);
      if (u.MobileHelper.isScreenTooSmall() && u.MobileHelper.isLandscape()) {
        var r = DecoBuildingToolTipManager.disp.stage.stageHeight - s;
        if (r < 0) {
          s += r;
        }
      }
      DecoBuildingToolTipManager.disp.arrow_down.visible = false;
      DecoBuildingToolTipManager.disp.arrow_up.visible = true;
    } else {
      DecoBuildingToolTipManager.disp.arrow_down.visible = true;
      DecoBuildingToolTipManager.disp.arrow_up.visible = false;
    }
    if (a - DecoBuildingToolTipManager.disp.width / 2 < 0) {
      a = g.int(a - (a - DecoBuildingToolTipManager.disp.width / 2));
    }
    DecoBuildingToolTipManager.disp.x = a;
    DecoBuildingToolTipManager.disp.y = s;
    DecoBuildingToolTipManager.disp.mouseChildren = false;
    DecoBuildingToolTipManager.initDisp.visible = true;
    DecoBuildingToolTipManager.disp.visible = true;
  };
  Object.defineProperty(DecoBuildingToolTipManager, "disp", {
    get: function () {
      if (DecoBuildingToolTipManager._clip && DecoBuildingToolTipManager._clip.currentshownDisplayObject) {
        return DecoBuildingToolTipManager._clip.currentshownDisplayObject;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecoBuildingToolTipManager, "initDisp", {
    get: function () {
      DecoBuildingToolTipManager.mc ||= new n();
      return DecoBuildingToolTipManager.mc;
    },
    enumerable: true,
    configurable: true
  });
  DecoBuildingToolTipManager.hideToolTip = function () {
    if (DecoBuildingToolTipManager.disp) {
      DecoBuildingToolTipManager.disp.visible = false;
    }
    if (DecoBuildingToolTipManager.initDisp) {
      DecoBuildingToolTipManager.initDisp.visible = false;
    }
  };
  Object.defineProperty(DecoBuildingToolTipManager, "textFieldManager", {
    get: function () {
      return r.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  DecoBuildingToolTipManager.assetName = "CastleBuildingToolTip1";
  DecoBuildingToolTipManager.clipNameOneRow = "CastleBuildingToolTip_OneRow";
  DecoBuildingToolTipManager.clipNameTwoRows = "CastleBuildingToolTip_TwoRows";
  DecoBuildingToolTipManager.MAX_ICON_HEIGHT = 30;
  DecoBuildingToolTipManager.loadedClipName = "";
  return DecoBuildingToolTipManager;
}();
exports.DecoBuildingToolTipManager = a;
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./2.js");
var u = require("./1.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./3.js");
var g = require("./6.js");
var C = require("./24.js");
var _ = require("./18.js");
var m = require("./4.js");