Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleDecoShopItemArrayHelper() {}
  CastleDecoShopItemArrayHelper.getBuildingsByCategory = function (e) {
    var t = [];
    var i = e.toLowerCase();
    if (!c.CastleModel.decoShop[e.toLowerCase()]) {
      return t;
    }
    var n = 0;
    var a = [];
    var u = [];
    var d = [];
    for (var p = 0, h = c.CastleModel.decoShop[i]; p < h.length; p++) {
      var g = h[p];
      if (g !== undefined) {
        var C = c.CastleModel.userData.userLevel == 0;
        var _ = g.level == 0;
        if ((!C && !_ || C && _) && g.isAvailableInAreaTypeAndKingdomId(c.CastleModel.areaData.activeAreaInfo.areaType, c.CastleModel.areaData.activeAreaInfo.kingdomID) && (CastleDecoShopItemArrayHelper.layoutManager.isInTreasureCamp || !g.isOnlyAvailableByMapIds()) && (!CastleDecoShopItemArrayHelper.layoutManager.isInTreasureCamp || g.isOnlyAvailableInEvent() || CastleDecoShopItemArrayHelper.isShopVOActiveBySeason(g)) && (!(g.sceatSkillLocked > 0) || c.CastleModel.legendSkillData.hasLegendTemple())) {
          if (e == s.ClientConstCastle.CATEGORY_DEFENCE) {
            if (r.instanceOfClass(g, "CastlewallDefenceVO")) {
              if (g.level > o.Iso.data.objects.defences.currentWallLevel) {
                a.push(g);
              }
            } else if (r.instanceOfClass(g, "BasicMoatVO") && CastleDecoShopItemArrayHelper.isMoatVisible(g)) {
              a.push(g);
            }
          } else {
            if (!g.canBeBuildByResourceFields()) {
              continue;
            }
            if (o.Iso.data.objects.provider.hasMaxAmountOfObjectsByType(g)) {
              d.push(g);
            } else {
              if (c.CastleModel.areaData.activeArea.slum) {
                n = l.int(c.CastleModel.areaData.activeArea.slum.slumLevel);
              }
              if (g.slumLevelNeeded > 0) {
                if (n != -1) {
                  if (g.slumLevelNeeded > n) {
                    u.push(g);
                  } else {
                    a.push(g);
                  }
                }
              } else {
                a.push(g);
              }
            }
          }
        }
      }
    }
    if (e == s.ClientConstCastle.CATEGORY_DEFENCE) {
      d.sort(CastleDecoShopItemArrayHelper.defaultSortOrderBuilding);
      a.sort(CastleDecoShopItemArrayHelper.sortOrderDefence);
    } else {
      a.sort(CastleDecoShopItemArrayHelper.defaultSortOrderBuilding);
    }
    u.sort(CastleDecoShopItemArrayHelper.defaultSortOrderBuilding);
    return t = (t = a.concat(u)).concat(d);
  };
  CastleDecoShopItemArrayHelper.defaultSortOrderBuilding = function (e, t) {
    var i = e.sortOrder - t.sortOrder;
    if (i != 0) {
      return i;
    }
    var n = e.requiredLegendLevel - t.requiredLegendLevel;
    if (n != 0) {
      return n;
    } else {
      return e.requiredLevel - t.requiredLevel;
    }
  };
  CastleDecoShopItemArrayHelper.sortOrderDefence = function (e, t) {
    var i = 0;
    if ((i = e.group.toLowerCase() < t.group.toLowerCase() ? -1 : e.group.toLowerCase() > t.group.toLowerCase() ? 1 : 0) != 0) {
      return i;
    } else {
      return CastleDecoShopItemArrayHelper.defaultSortOrderBuilding(e, t);
    }
  };
  CastleDecoShopItemArrayHelper.isShopVOActiveBySeason = function (e) {
    return !!c.CastleModel.specialEventData.activeSeasonVO && !!c.CastleModel.specialEventData.activeSeasonVO.treasureMapVO && e.isAvailableByMapId(c.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.mapID);
  };
  CastleDecoShopItemArrayHelper.isMoatVisible = function (e) {
    var t = o.Iso.data.objects.defences.moat;
    if (t) {
      var i = r.instanceOfClass(t, "PremiumMoatVO") || r.instanceOfClass(t, "FactionPMoatMoatVO");
      if (r.instanceOfClass(e, "PremiumMoatVO") || r.instanceOfClass(e, "FactionPMoatMoatVO")) {
        if (i) {
          return e.level > t.level && e.isMoatAvailableByBuildOrder;
        } else {
          return !!r.instanceOfClass(e, "FactionPMoatMoatVO") || e.isMoatAvailableByBuildOrder;
        }
      } else {
        return !i && e.level > t.level && e.isMoatAvailableByBuildOrder;
      }
    }
    return e.isMoatAvailableByBuildOrder;
  };
  Object.defineProperty(CastleDecoShopItemArrayHelper, "layoutManager", {
    get: function () {
      return a.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleDecoShopItemArrayHelper;
}();
exports.CastleDecoShopItemArrayHelper = n;
var o = require("./33.js");
var a = require("./17.js");
var s = require("./18.js");
var r = require("./1.js");
var l = require("./6.js");
var c = require("./4.js");