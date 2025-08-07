Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./4.js");
var l = require("./43.js");
var c = require("./9.js");
var u = require("./24.js");
var d = require("./17.js");
var p = require("./41.js");
var h = require("./154.js");
var g = require("./201.js");
var C = require("./902.js");
var _ = createjs.Point;
var m = function () {
  function GeneralsHelper() {}
  GeneralsHelper.updateStarLevel = function (e, t, i = "mc_star") {
    var n = 1;
    for (var o = e[i + n]; o;) {
      o.visible = t.maxStarLevel >= n;
      o.toolTipText = "dialog_generals_generalStarRating_tooltip";
      o.mc_filled.visible = t.currentStarLevel >= n || t.currentStarLevel > GeneralsHelper.MAX_STAR_MCS * 2 - t.currentStarLevel;
      o.mc_filled2.visible = t.currentStarLevel >= n + GeneralsHelper.MAX_STAR_MCS;
      o.mc_empty.visible = !o.mc_filled.visible;
      o = e[i + ++n];
    }
  };
  GeneralsHelper.showLordMainEffects = function (e, t, i = null, n = false, r = true, l = "mc_lordEffect") {
    i = i || new _(30, 30);
    t = t.filter(function (e) {
      return !!e.effect.effectType.type.simpleEffectIconClass;
    }).sort(GeneralsHelper.sortLordMainEffects);
    var c = 1;
    for (var u = e[l + c]; u;) {
      o.MovieClipHelper.clearMovieClip(u.mc_iconHolder);
      var d = t.length >= c ? t[c - 1] : null;
      if (d) {
        var h = new d.effect.effectType.type.simpleEffectIconClass();
        u.mc_iconHolder.addChild(h);
        u.mouseChildren = false;
        u.visible = true;
        p.CastleMovieClipHelper.scaleWithAntiAliasing(h, i.x, i.y, 1);
        var g = a.castAs(d, "ILordEffectText");
        if (g) {
          var C = n ? "dialog_generals_castellan_effectHighlight_tooltip" : "dialog_generals_commander_effectHighlight_tooltip";
          var m = s.Localize.text(C, [g.lordEffectText()]);
          if (r) {
            u.toolTipText = m;
          } else {
            u.data = m;
          }
        }
        u.doCache();
      } else {
        u.visible = false;
      }
      u = e[l + ++c];
    }
  };
  GeneralsHelper.sortLordMainEffects = function (e, t) {
    if (e.maxValueStrength == Number.MAX_VALUE || t.maxValueStrength == Number.MAX_VALUE) {
      if (t.effectValue.strength != e.effectValue.strength) {
        return t.effectValue.strength - e.effectValue.strength;
      }
    } else {
      var i = Math.min(1, e.effectValue.strength / e.maxValueStrength);
      var n = Math.min(1, t.effectValue.strength / t.maxValueStrength);
      if (n != i) {
        return n - i;
      }
    }
    return t.effect.effectID - e.effect.effectID;
  };
  GeneralsHelper.getGeneralClip = function (e, t, i = -1) {
    var n = "General_" + e + (t ? "_Animated" : "_Static");
    if (t) {
      i *= i < 0 ? -0.5 : 0.5;
    }
    if (e <= 0) {
      return null;
    }
    var a = e >= 123 ? 30 : 24;
    var s = new u.CastleGoodgameExternalClip(n, o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(n), null, a);
    if (i > 0) {
      s.doWhenLoaded(function (e) {
        e.scaleX = e.scaleY = i;
        o.MovieClipHelper.playAllMovies(e.currentshownDisplayObject);
      });
    } else {
      s.doWhenLoaded(function (e) {
        o.MovieClipHelper.playAllMovies(e.currentshownDisplayObject);
      });
    }
    return s;
  };
  GeneralsHelper.getGeneralsBackground = function (e, t = false, i = 1, n = null, a = true) {
    var s = "GeneralsBackground_";
    if (e <= 0) {
      s = a ? "GeneralsBackground_Generic_BW_Empty" : "GeneralsBackground_Generic_BW";
    } else {
      s += e;
      if (t) {
        s += "_BW";
      }
    }
    var r = new u.CastleGoodgameExternalClip(s, o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(s));
    if (n) {
      r.doWhenLoaded(n);
    }
    r.doWhenLoaded(function (e) {
      e.scaleX = e.scaleY = i;
      if (n) {
        n();
      }
    });
    return r;
  };
  GeneralsHelper.getGeneralAbilityClip = function (e, t, i, n, a) {
    var s = this;
    if (i === undefined) {
      i = -1;
    }
    if (n === undefined) {
      n = true;
    }
    if (a === undefined) {
      a = false;
    }
    var r = "GeneralsAbilityGroup_" + e;
    if (e <= 0) {
      r = "GeneralsAbilityGroup_Empty";
    }
    var l = new u.CastleGoodgameExternalClip(r, o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(r));
    l.recycleAsset = false;
    l.doWhenLoaded(function (o) {
      if (o.currentshownDisplayObject.height != t) {
        o.currentshownDisplayObject.scaleX = o.currentshownDisplayObject.scaleY = t / o.currentshownDisplayObject.height;
      }
      if (e > 0) {
        if (a) {
          o.currentshownDisplayObject.useFilters(s.createNeutralColorMatrixFilter());
        } else if (n) {
          o.currentshownDisplayObject.useFilters(s.createAttackColorMatrixFilter());
        } else {
          o.currentshownDisplayObject.useFilters(s.createDefenceColorMatrixFilter());
        }
      }
      o.mouseChildren = false;
      o.toolTipText = s.getLocalizedTitleForAbility(e);
      if (i > 0) {
        o.toolTipText += "\n" + s.getLocalizedCopyForAbility(i, n);
      }
    });
    return l;
  };
  GeneralsHelper.createAttackColorMatrixFilter = function () {
    var e = new o.ColorMatrix();
    e.fill(12402485);
    var t = new o.ColorMatrix();
    t.blend(e, 0.3);
    return [t.filter];
  };
  GeneralsHelper.createDefenceColorMatrixFilter = function () {
    var e = new o.ColorMatrix();
    e.fill(3042977);
    var t = new o.ColorMatrix();
    t.blend(e, 0.3);
    return [t.filter];
  };
  GeneralsHelper.createNeutralColorMatrixFilter = function () {
    var e = new o.ColorMatrix();
    e.fill(10367133);
    var t = new o.ColorMatrix();
    t.blend(e, 0.3);
    return [t.filter];
  };
  GeneralsHelper.showGeneralsHubDialog = function () {
    var e = this;
    this.showLoading();
    o.loadAssets(["Characters", "Hub_Backgrounds1", "Hub_Backgrounds2", "Misc", "Rewards_Animation"], o.AssetLoadingFlowType.PARALLEL).then(function (t) {
      e.hideLoading();
      c.CastleDialogHandler.getInstance().registerDefaultDialogs(C.GeneralsHubDialog);
    }).catch(function (e) {
      return n.warn("failed to load general hub assets", e);
    });
  };
  GeneralsHelper.showLoading = function () {
    c.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(h.CastleExternalPreloaderDialog, new g.CastleExternalPreloaderDialogProperties(null), l.CastleDialogConsts.DIALOG_TYPE_PRELOADER);
  };
  GeneralsHelper.hideLoading = function () {
    d.CastleLayoutManager.getInstance().hideDialog(h.CastleExternalPreloaderDialog);
  };
  GeneralsHelper.getLocalizedTitleForAbility = function (e) {
    if (r.CastleModel.generalsData.getAbilityGroupByID(e)) {
      return s.Localize.text("generals_abilities_name_" + e);
    } else {
      return s.Localize.text("dialog_generals_abilityDialog_noAbilityselected");
    }
  };
  GeneralsHelper.getLocalizedCopyForAbility = function (e, t, i = GeneralsHelper.ABILITY_TEXT_DEFAULT, n = null) {
    var o = r.CastleModel.generalsData.getAbilityByID(e);
    if (!o) {
      return s.Localize.text("dialog_generals_abilityDialog_noEffects");
    }
    var a;
    var l = t ? o.abilityAttackEffect : o.abilityDefenseEffect;
    if (!l) {
      return s.Localize.text(t ? "dialog_generals_skillTree_skillTooltip_noOffenseSkill" : "dialog_generals_skillTree_skillTooltip_noDefenseSkill");
    }
    a = i == GeneralsHelper.ABILITY_TEXT_SHORT_LEVELING ? "generals_abilities_desc_short_leveling_" + (t ? "attack" : "defense") + "_" + o.abilityGroupID : i == GeneralsHelper.ABILITY_TEXT_SHORT_VALUE ? "generals_abilities_desc_short_value_" + (t ? "attack" : "defense") + "_" + o.abilityGroupID : i == GeneralsHelper.ABILITY_TEXT_SHORT ? "generals_abilities_desc_short_" + (t ? "attack" : "defense") + "_" + o.abilityGroupID : "generals_abilities_desc_" + (t ? "attack" : "defense") + "_" + o.abilityGroupID;
    var c = (n || l.getEffect(0).effectValue).getContextTextReplacements(a);
    if (o.triggerPerWave > 0) {
      c.push(o.triggerPerWave);
    }
    return s.Localize.text(a, c);
  };
  GeneralsHelper.getLocalizedGeneralAbilitySummary = function (e, t, i = false) {
    var n = "";
    if (!e) {
      return n;
    }
    for (var o = e.selectedAbilities, a = 0; a < o.length; a++) {
      var s = o[a][0];
      var r = o[a][1];
      if ((!t || !(e.generalXmlVO.attackSlots.indexOf(s) < 0)) && (!!t || !(e.generalXmlVO.defenseSlots.indexOf(s) < 0))) {
        n += this.getLocalizedCopyForAbility(r, t, GeneralsHelper.ABILITY_TEXT_DEFAULT) + "\n";
      }
    }
    return n;
  };
  GeneralsHelper.MAX_STAR_MCS = 5;
  GeneralsHelper.ABILITY_TEXT_DEFAULT = 0;
  GeneralsHelper.ABILITY_TEXT_SHORT = 1;
  GeneralsHelper.ABILITY_TEXT_SHORT_VALUE = 2;
  GeneralsHelper.ABILITY_TEXT_SHORT_LEVELING = 3;
  return GeneralsHelper;
}();
exports.GeneralsHelper = m;