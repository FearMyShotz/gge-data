Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.Point;
var o = function () {
  function CastleFusionCompareToolTip() {}
  CastleFusionCompareToolTip.showToolTip = function (e, t, i, n, o = 0, r = 0) {
    if (!CastleFusionCompareToolTip._clip || !CastleFusionCompareToolTip._clip.isLoaded) {
      CastleFusionCompareToolTip._clip ||= new h.CastleGoodgameExternalClip(CastleFusionCompareToolTip.assetName, a.BasicModel.basicLoaderData.getVersionedItemAssetUrl(CastleFusionCompareToolTip.assetName));
      CastleFusionCompareToolTip._clip.doWhenLoaded(function () {
        CastleFusionCompareToolTip.showToolTip(e, t, i, n, o, r);
      });
      return;
    }
    if (t && i && n && n.xmlCurrencyVO && n.xmlCurrencyVO.tier != 0) {
      CastleFusionCompareToolTip.textFieldManager.registerTextField(CastleFusionCompareToolTip.disp.txt_copy0, new u.LocalizedTextVO("fusionXP")).autoFitToBounds = true;
      CastleFusionCompareToolTip.textFieldManager.registerTextField(CastleFusionCompareToolTip.disp.txt_copy1, new u.LocalizedTextVO("bonusFusionXPChance")).autoFitToBounds = true;
      CastleFusionCompareToolTip.textFieldManager.registerTextField(CastleFusionCompareToolTip.disp.txt_copy2, new u.LocalizedTextVO("bonusFusionXPChance_chance")).autoFitToBounds = true;
      CastleFusionCompareToolTip.textFieldManager.registerTextField(CastleFusionCompareToolTip.disp.txt_copy3, new u.LocalizedTextVO("bonusFusionXPChance_boost")).autoFitToBounds = true;
      CastleFusionCompareToolTip.textFieldManager.registerTextField(CastleFusionCompareToolTip.disp.txt_copy4, new u.LocalizedTextVO("bonusFusionXP")).autoFitToBounds = true;
      CastleFusionCompareToolTip.textFieldManager.registerTextField(CastleFusionCompareToolTip.disp.txt_copy5, new u.LocalizedTextVO("bonusFusionXPTotal")).autoFitToBounds = true;
      CastleFusionCompareToolTip.textFieldManager.registerTextField(CastleFusionCompareToolTip.disp.txt_copy6, new u.LocalizedTextVO("dialog_decoForge_fusionBreakdown_desc")).autoFitToBounds = true;
      var p;
      var g = d.int(l.FusionConst.getFusionXPFromSource(t.getCurrentLevel(), i.getCurrentLevel()));
      var C = d.int(l.FusionConst.getBonusFusionXPChance(CastleFusionCompareToolTip.baseBonusFusionXPChance, t.getCurrentLevel(), i.getCurrentLevel(), n.xmlCurrencyVO.tier, CastleFusionCompareToolTip.getMinimumCatalystTier(i.getCurrentLevel())));
      var _ = d.int(l.FusionConst.getBonusFusionXPChance(CastleFusionCompareToolTip.baseBonusFusionXPChance, t.getCurrentLevel(), i.getCurrentLevel(), n.xmlCurrencyVO.tier, CastleFusionCompareToolTip.getMinimumCatalystTier(i.getCurrentLevel())) + CastleFusionCompareToolTip.premiumBonusFusionXPChance);
      var m = d.int(Math.min(C, 100));
      var f = C - m;
      var O = _ - 100;
      var E = d.int(l.FusionConst.getBonusFusionXPWithForgeMax(t.getCurrentLevel(), i.getCurrentLevel(), CastleFusionCompareToolTip.forgeLevel));
      var y = d.int(E + l.FusionConst.getBonusFusionXPBoost(E, C, 0));
      var b = d.int(E + l.FusionConst.getBonusFusionXPBoost(E, C, CastleFusionCompareToolTip.premiumBonusFusionXPChance));
      if (C < 100) {
        var D = g;
        var I = D + y;
        p = c.Localize.text(s.GenericTextIds.VALUE_NOMINAL_ADD, [D]) + "\n" + c.Localize.text("or") + "\n" + c.Localize.text(s.GenericTextIds.VALUE_NOMINAL_ADD, [I]);
      } else {
        p = c.Localize.text(s.GenericTextIds.VALUE_NOMINAL_ADD, [g + y]);
      }
      CastleFusionCompareToolTip.textFieldManager.registerTextField(CastleFusionCompareToolTip.disp.txt_norm0, new u.LocalizedTextVO("fusionNormal")).autoFitToBounds = true;
      CastleFusionCompareToolTip.textFieldManager.registerTextField(CastleFusionCompareToolTip.disp.txt_norm1, new u.LocalizedTextVO(s.GenericTextIds.VALUE_NOMINAL_ADD, [g]));
      CastleFusionCompareToolTip.textFieldManager.registerTextField(CastleFusionCompareToolTip.disp.txt_norm2, new u.LocalizedTextVO(s.GenericTextIds.VALUE_PERCENTAGE, [C]));
      CastleFusionCompareToolTip.textFieldManager.registerTextField(CastleFusionCompareToolTip.disp.txt_norm3, new u.LocalizedTextVO(s.GenericTextIds.VALUE_PERCENTAGE, [m]));
      CastleFusionCompareToolTip.textFieldManager.registerTextField(CastleFusionCompareToolTip.disp.txt_norm4, new u.LocalizedTextVO(s.GenericTextIds.VALUE_PERCENTAGE, [f]));
      CastleFusionCompareToolTip.textFieldManager.registerTextField(CastleFusionCompareToolTip.disp.txt_norm5, new u.LocalizedTextVO(s.GenericTextIds.VALUE_NOMINAL_ADD, [y]));
      CastleFusionCompareToolTip.textFieldManager.registerTextField(CastleFusionCompareToolTip.disp.txt_norm6, new u.LocalizedTextVO(p));
      CastleFusionCompareToolTip.textFieldManager.registerTextField(CastleFusionCompareToolTip.disp.txt_prem0, new u.LocalizedTextVO("fusionPremium")).autoFitToBounds = true;
      CastleFusionCompareToolTip.textFieldManager.registerTextField(CastleFusionCompareToolTip.disp.txt_prem1, new u.LocalizedTextVO(s.GenericTextIds.VALUE_NOMINAL_ADD, [g]));
      CastleFusionCompareToolTip.textFieldManager.registerTextField(CastleFusionCompareToolTip.disp.txt_prem2, new u.LocalizedTextVO(s.GenericTextIds.VALUE_PERCENTAGE, [_]));
      CastleFusionCompareToolTip.textFieldManager.registerTextField(CastleFusionCompareToolTip.disp.txt_prem3, new u.LocalizedTextVO(s.GenericTextIds.VALUE_PERCENTAGE, [100]));
      CastleFusionCompareToolTip.textFieldManager.registerTextField(CastleFusionCompareToolTip.disp.txt_prem4, new u.LocalizedTextVO(s.GenericTextIds.VALUE_PERCENTAGE, [O]));
      CastleFusionCompareToolTip.textFieldManager.registerTextField(CastleFusionCompareToolTip.disp.txt_prem5, new u.LocalizedTextVO(s.GenericTextIds.VALUE_NOMINAL_ADD, [b]));
      CastleFusionCompareToolTip.textFieldManager.registerTextField(CastleFusionCompareToolTip.disp.txt_prem6, new u.LocalizedTextVO(s.GenericTextIds.VALUE_NOMINAL_ADD, [g + b]));
      CastleFusionCompareToolTip.positionDisp(e, o, r);
    }
  };
  CastleFusionCompareToolTip.getMinimumCatalystTier = function (e) {
    return d.int(p.CastleModel.fusionForgeData.xml.getMinimumCatalystTier(l.FusionConst.DECORATION_FORGE_ID, e));
  };
  Object.defineProperty(CastleFusionCompareToolTip, "baseBonusFusionXPChance", {
    get: function () {
      return p.CastleModel.fusionForgeData.xml.getFusionSystem(l.FusionConst.DECORATION_FORGE_ID).baseBonusFusionXPChance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFusionCompareToolTip, "premiumBonusFusionXPChance", {
    get: function () {
      return p.CastleModel.fusionForgeData.xml.getFusionSystem(l.FusionConst.DECORATION_FORGE_ID).premiumBonusFusionXPChance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFusionCompareToolTip, "forgeLevel", {
    get: function () {
      return p.CastleModel.fusionForgeData.getForge(l.FusionConst.DECORATION_FORGE_ID).level;
    },
    enumerable: true,
    configurable: true
  });
  CastleFusionCompareToolTip.positionDisp = function (e, t = 0, i = 0) {
    var o = e.localToGlobal(new n(0, 0));
    var a = d.int(o.x + t);
    var s = d.int(Math.max(CastleFusionCompareToolTip.disp.height, o.y) - e.height / 2 + i);
    if (s - CastleFusionCompareToolTip.disp.height < 0) {
      s = d.int(Math.max(CastleFusionCompareToolTip.disp.height, o.y) + e.height / 2 - i + CastleFusionCompareToolTip.disp.height);
    }
    CastleFusionCompareToolTip.disp.x = a;
    CastleFusionCompareToolTip.disp.y = s;
    CastleFusionCompareToolTip.disp.mouseChildren = false;
    CastleFusionCompareToolTip.initDisp.visible = true;
    CastleFusionCompareToolTip.disp.visible = true;
  };
  Object.defineProperty(CastleFusionCompareToolTip, "disp", {
    get: function () {
      if (CastleFusionCompareToolTip._clip && CastleFusionCompareToolTip._clip.currentshownDisplayObject) {
        return CastleFusionCompareToolTip._clip.currentshownDisplayObject;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFusionCompareToolTip, "initDisp", {
    get: function () {
      CastleFusionCompareToolTip._clip ||= new h.CastleGoodgameExternalClip(CastleFusionCompareToolTip.assetName, a.BasicModel.basicLoaderData.getVersionedItemAssetUrl(CastleFusionCompareToolTip.assetName));
      return CastleFusionCompareToolTip._clip;
    },
    enumerable: true,
    configurable: true
  });
  CastleFusionCompareToolTip.hideToolTip = function () {
    if (CastleFusionCompareToolTip.disp) {
      CastleFusionCompareToolTip.disp.visible = false;
    }
    if (CastleFusionCompareToolTip.initDisp) {
      CastleFusionCompareToolTip.initDisp.visible = false;
    }
  };
  Object.defineProperty(CastleFusionCompareToolTip, "textFieldManager", {
    get: function () {
      return r.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastleFusionCompareToolTip.__initialize_static_members = function () {
    CastleFusionCompareToolTip.assetName = "FusionCompareTooltip";
  };
  return CastleFusionCompareToolTip;
}();
exports.CastleFusionCompareToolTip = o;
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./5.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./6.js");
var p = require("./4.js");
var h = require("./24.js");
o.__initialize_static_members();