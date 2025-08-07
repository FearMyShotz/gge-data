Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./5.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./6.js");
var c = require("./4.js");
var u = require("./494.js");
var d = require("./203.js");
var p = function () {
  function ClientConstSort() {}
  ClientConstSort.sortBySerialOrder = function (e, t, i) {
    var n = NaN;
    for (var o = 0; o < e.length; ++o) {
      if ((n = e[o](t, i)) != 0) {
        return n;
      }
    }
    return n;
  };
  ClientConstSort.sortByObjectId = function (e, t) {
    if (e.objectId > t.objectId) {
      return 1;
    } else if (e.objectId < t.objectId) {
      return -1;
    } else {
      return 0;
    }
  };
  ClientConstSort.sortByUnitAttackPower = function (e, t) {
    var i;
    var n = l.int(Math.max(e.meleeAttack, e.rangeAttack));
    var o = l.int(Math.max(t.meleeAttack, t.rangeAttack));
    if ((i = ClientConstSort._sortByValue(n, o)) != 0) {
      return i;
    } else {
      return l.int(ClientConstSort.sortByUnitSortOrder(e, t));
    }
  };
  ClientConstSort.sortByUnitDefencePower = function (e, t) {
    var i;
    var n = l.int(Math.max(e.meleeDefence, e.rangeDefence));
    var o = l.int(Math.max(t.meleeDefence, t.rangeDefence));
    if ((i = ClientConstSort._sortByValue(n, o)) != 0) {
      return i;
    } else {
      return l.int(ClientConstSort.sortByUnitSortOrder(e, t));
    }
  };
  ClientConstSort.sortByUnitPower = function (e, t) {
    var i;
    var n = l.int(Math.max(e.meleeAttack, e.rangeAttack, e.meleeDefence, e.rangeDefence));
    var o = l.int(Math.max(t.meleeAttack, t.rangeAttack, t.meleeDefence, t.rangeDefence));
    if ((i = ClientConstSort._sortByValue(n, o)) != 0) {
      return i;
    } else {
      return l.int(ClientConstSort.sortByUnitSortOrder(e, t));
    }
  };
  ClientConstSort._sortByValue = function (e, t) {
    if (e > t) {
      return -1;
    } else if (e < t) {
      return 1;
    } else {
      return 0;
    }
  };
  ClientConstSort.sortByBuildingLevelDescending = function (e, t) {
    var i = 0;
    if (e.buildingVO.level > t.buildingVO.level) {
      i = -1;
    }
    if (e.buildingVO.level < t.buildingVO.level) {
      i = 1;
    }
    return i;
  };
  ClientConstSort.sortByUnitSortOrder = function (e, t) {
    var i = 0;
    if ((i = l.int(ClientConstSort._unitSortOrderEffectIcon(e, t))) != 0) {
      return i;
    } else if ((i = l.int(ClientConstSort._unitSortOrderStronghold(e, t))) != 0) {
      return i;
    } else if (n.instanceOfClass(e, "ToolUnitVO") && !n.instanceOfClass(t, "ToolUnitVO")) {
      return 1;
    } else if (n.instanceOfClass(t, "ToolUnitVO") && !n.instanceOfClass(e, "ToolUnitVO")) {
      return -1;
    } else if (n.instanceOfClass(e, "ToolUnitVO")) {
      return l.int(ClientConstSort._unitSortOrderNormal(e, t));
    } else {
      return l.int(ClientConstSort._unitSortOrderInvert(e, t));
    }
  };
  ClientConstSort.sortByUnitSortOrderRecruit = function (e, t) {
    var i = 0;
    if ((i = l.int(ClientConstSort._unitSortOrderEffectIcon(e, t))) != 0) {
      return i;
    } else if ((i = l.int(ClientConstSort._unitSortOrderStronghold(e, t))) != 0) {
      return i;
    } else if ((i = l.int(ClientConstSort._unitSortOrderRecruit(e, t))) != 0) {
      return i;
    } else if (n.instanceOfClass(e, "ToolUnitVO")) {
      return l.int(ClientConstSort._unitSortOrderNormal(e, t));
    } else {
      return l.int(ClientConstSort._unitSortOrderInvert(e, t));
    }
  };
  ClientConstSort.sortByUnitSortOrderForLogUnitVO = function (e, t) {
    var i = c.CastleModel.wodData.createVObyWOD(e.wodID, C.CastleWodData.TYPE_UNIT);
    var n = c.CastleModel.wodData.createVObyWOD(t.wodID, C.CastleWodData.TYPE_UNIT);
    return l.int(ClientConstSort.sortByUnitSortOrder(i, n));
  };
  ClientConstSort.sortByBookmarks = function (e, t) {
    var i = 0;
    if ((i = l.int(ClientConstSort.sortByBookmarkType(e, t))) != 0) {
      return i;
    } else if ((i = l.int(ClientConstSort.sortByBookmarksAndKingdomID(e.worldmapObjectVO, t.worldmapObjectVO))) != 0) {
      return i;
    } else {
      return l.int(e.name.toLowerCase().localeCompare(t.name.toLowerCase()));
    }
  };
  ClientConstSort.sortByBookmarkType = function (e, t) {
    if (e.sortIndex > t.sortIndex) {
      return 1;
    } else if (e.sortIndex < t.sortIndex) {
      return -1;
    } else if (e.type == d.EWorldmapBookmarkType.ALLIANCE_ATTACK_ORDER && e.attackOrderDetails && t.attackOrderDetails) {
      if (e.attackOrderDetails.attackDate < t.attackOrderDetails.attackDate) {
        return -1;
      } else if (e.attackOrderDetails.attackDate > t.attackOrderDetails.attackDate) {
        return 1;
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  };
  ClientConstSort.sortDisplayObjectsByName = function (e, t) {
    return l.int(e.name.toLowerCase().localeCompare(t.name.toLowerCase()));
  };
  ClientConstSort.sortByMapObject = function (e, t) {
    if (e) {
      if (t) {
        if (n.instanceOfClass(e, "CastleMapobjectVO")) {
          return -1;
        } else if (n.instanceOfClass(t, "CastleMapobjectVO")) {
          return 1;
        } else {
          return 0;
        }
      } else {
        return -1;
      }
    } else {
      return 1;
    }
  };
  ClientConstSort.sortByFactionCamp = function (e, t) {
    var i = c.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_FACTION);
    var n = l.int(i ? i.mainCampID : -1);
    if (e) {
      if (t) {
        if (e.objectId == n) {
          return -1;
        } else if (t.objectId == n) {
          return 1;
        } else {
          return 0;
        }
      } else {
        return -1;
      }
    } else {
      return 1;
    }
  };
  ClientConstSort.sortByKingdomIdAndKingstowerAtEnd = function (e, t) {
    if (!e) {
      return 1;
    }
    if (!t) {
      return -1;
    }
    if (n.instanceOfClass(e, "KingstowerMapobjectVO")) {
      return 1;
    }
    if (n.instanceOfClass(t, "KingstowerMapobjectVO")) {
      return -1;
    }
    var i = c.CastleModel.kingdomData.getKingdomVOByID(e.kingdomID);
    var o = c.CastleModel.kingdomData.getKingdomVOByID(t.kingdomID);
    if (i && !o) {
      return -1;
    }
    if (!i && o) {
      return 1;
    }
    if (!i && !o) {
      return 0;
    }
    if (i.kID != s.FactionConst.KINGDOM_ID && o.kID != s.FactionConst.KINGDOM_ID) {
      if (i.minLevel < o.minLevel) {
        return -1;
      }
      if (i.minLevel > o.minLevel) {
        return 1;
      }
      if (n.instanceOfClass(e, "CastleMapobjectVO")) {
        return -1;
      }
      if (n.instanceOfClass(t, "CastleMapobjectVO")) {
        return 1;
      }
    }
    return 0;
  };
  ClientConstSort.sortByBookmarksAndKingdomID = function (e, t) {
    if (!e) {
      return 1;
    }
    if (!t) {
      return -1;
    }
    var i = c.CastleModel.kingdomData.getKingdomVOByID(e.kingdomID);
    var n = c.CastleModel.kingdomData.getKingdomVOByID(t.kingdomID);
    if (i.minLevel < n.minLevel) {
      return -1;
    } else if (i.minLevel > n.minLevel) {
      return 1;
    } else if (ClientConstSort.BOOKMARK_CASTLE_LIST_SORT_ORDER.indexOf(e.areaType) < ClientConstSort.BOOKMARK_CASTLE_LIST_SORT_ORDER.indexOf(t.areaType)) {
      return -1;
    } else if (ClientConstSort.BOOKMARK_CASTLE_LIST_SORT_ORDER.indexOf(e.areaType) > ClientConstSort.BOOKMARK_CASTLE_LIST_SORT_ORDER.indexOf(t.areaType)) {
      return 1;
    } else {
      return 0;
    }
  };
  ClientConstSort.sortByKingdomId = function (e, t) {
    if (!e) {
      return 1;
    }
    if (!t) {
      return -1;
    }
    var i = c.CastleModel.kingdomData.getKingdomVOByID(e.kingdomID);
    var o = c.CastleModel.kingdomData.getKingdomVOByID(t.kingdomID);
    if (i.minLevel < o.minLevel) {
      return -1;
    }
    if (i.minLevel > o.minLevel) {
      return 1;
    }
    if (ClientConstSort.RECRUIT_CASTLE_LIST_SORT_ORDER.indexOf(e.areaType) < ClientConstSort.RECRUIT_CASTLE_LIST_SORT_ORDER.indexOf(t.areaType)) {
      return -1;
    }
    if (ClientConstSort.RECRUIT_CASTLE_LIST_SORT_ORDER.indexOf(e.areaType) > ClientConstSort.RECRUIT_CASTLE_LIST_SORT_ORDER.indexOf(t.areaType)) {
      return 1;
    }
    if (n.instanceOfClass(e, "CastleMapobjectVO")) {
      return -1;
    }
    if (n.instanceOfClass(t, "CastleMapobjectVO")) {
      return 1;
    }
    if (n.instanceOfClass(e, "UpgradableLandmarkMapobjectVO") && n.instanceOfClass(t, "UpgradableLandmarkMapobjectVO")) {
      if (e.level > t.level) {
        return -1;
      }
      if (e.level < t.level) {
        return 1;
      }
    }
    return 0;
  };
  ClientConstSort.sortDetailedCastleVOByKingdomID = function (e, t) {
    if (!e) {
      return 1;
    }
    if (!t) {
      return -1;
    }
    var i = c.CastleModel.kingdomData.getKingdomVOByID(e.kingdomID);
    var n = c.CastleModel.kingdomData.getKingdomVOByID(t.kingdomID);
    if (i.minLevel < n.minLevel) {
      return -1;
    }
    if (i.minLevel > n.minLevel) {
      return 1;
    }
    var o = c.CastleModel.userData.getOwnCastle(e.areaID, e.kingdomID);
    var a = c.CastleModel.userData.getOwnCastle(t.areaID, t.kingdomID);
    if (o && a) {
      if (ClientConstSort.RECRUIT_CASTLE_LIST_SORT_ORDER.indexOf(o.areaType) < ClientConstSort.RECRUIT_CASTLE_LIST_SORT_ORDER.indexOf(a.areaType)) {
        return -1;
      }
      if (ClientConstSort.RECRUIT_CASTLE_LIST_SORT_ORDER.indexOf(o.areaType) > ClientConstSort.RECRUIT_CASTLE_LIST_SORT_ORDER.indexOf(a.areaType)) {
        return 1;
      }
    }
    return 0;
  };
  ClientConstSort.sortByDailyQuestID = function (e, t) {
    if (e.questID < t.questID) {
      return -1;
    } else if (e.questID > t.questID) {
      return 1;
    } else {
      return 0;
    }
  };
  ClientConstSort._unitSortOrderEffectIcon = function (e, t) {
    if (n.instanceOfClass(e, "EffectIconUnitVO") && !n.instanceOfClass(t, "EffectIconUnitVO")) {
      return -1;
    } else if (!n.instanceOfClass(e, "EffectIconUnitVO") && n.instanceOfClass(t, "EffectIconUnitVO")) {
      return 1;
    } else {
      return 0;
    }
  };
  ClientConstSort._unitSortOrderStronghold = function (e, t) {
    if (e && t) {
      if (!e.isStronghold && t.isStronghold) {
        return -1;
      } else if (e.isStronghold && !t.isStronghold) {
        return 1;
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  };
  ClientConstSort._unitSortOrderNormal = function (e, t) {
    if (e.sortOrder > t.sortOrder) {
      return 1;
    } else if (e.sortOrder < t.sortOrder) {
      return -1;
    } else {
      return 0;
    }
  };
  ClientConstSort._unitSortOrderInvert = function (e, t) {
    if (e.sortOrder > t.sortOrder) {
      return -1;
    } else if (e.sortOrder < t.sortOrder) {
      return 1;
    } else {
      return 0;
    }
  };
  ClientConstSort._unitSortOrderRecruit = function (e, t) {
    if (c.CastleModel.militaryData) {
      if (e.isAvailable && !t.isAvailable) {
        return -1;
      }
      if (!e.isAvailable && t.isAvailable) {
        return 1;
      }
      if (!e.isAvailable && !t.isAvailable) {
        if (e.buildingLevel > t.buildingLevel) {
          return 1;
        }
        if (e.buildingLevel < t.buildingLevel) {
          return -1;
        }
      }
    }
    return 0;
  };
  ClientConstSort.onSortEquipmentItems = function (e, t) {
    var i = e.enchantmentLevel >= o.EquipmentConst.getMaxEnchantmentLevel(e.visualRareID);
    var n = t.enchantmentLevel >= o.EquipmentConst.getMaxEnchantmentLevel(t.visualRareID);
    if (i != n) {
      if (i) {
        return 1;
      }
      if (n) {
        return -1;
      }
    }
    var a = ClientConstSort.getLordByItem(e);
    var s = ClientConstSort.getLordByItem(t);
    var r = !!a && !a.isAvailableForEquip;
    var l = !!s && !s.isAvailableForEquip;
    if (r != r) {
      if (r) {
        return 1;
      }
      if (l) {
        return -1;
      }
    }
    if (e.rareID != t.rareID) {
      if (e.rareID == 0) {
        return -1;
      }
      if (t.rareID == 0) {
        return 1;
      }
      if (e.rareID < t.rareID) {
        return 1;
      }
      if (e.rareID > t.rareID) {
        return -1;
      }
    }
    if (e.id < t.id) {
      return 1;
    } else if (e.id > t.id) {
      return -1;
    } else {
      return 0;
    }
  };
  ClientConstSort.sortByRarityAndEnchantment = function (e, t) {
    if (n.instanceOfClass(e, "RelicEquipmentVO") && !n.instanceOfClass(t, "RelicEquipmentVO")) {
      return -1;
    } else if (!n.instanceOfClass(e, "RelicEquipmentVO") && n.instanceOfClass(t, "RelicEquipmentVO")) {
      return 1;
    } else if (e.rareID == 0 || e.rareID == 10) {
      return -1;
    } else if (t.rareID == 0 || t.rareID == 10) {
      return 1;
    } else if (e.rareID > t.rareID) {
      return -1;
    } else if (e.rareID < t.rareID) {
      return 1;
    } else if (e.enchantmentLevel > t.enchantmentLevel) {
      return -1;
    } else if (e.enchantmentLevel < t.enchantmentLevel) {
      return 1;
    } else {
      return 0;
    }
  };
  ClientConstSort.getLordByItem = function (e) {
    var t = c.CastleModel.lordData.barons;
    var i = c.CastleModel.lordData.commanders;
    if (t != null) {
      for (var n = 0, o = t; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined && (a.helmetSlotVO.equipmentVO && a.helmetSlotVO.equipmentVO.id == e.id || a.armorSlotVO.equipmentVO && a.armorSlotVO.equipmentVO.id == e.id || a.artifactSlotVO.equipmentVO && a.artifactSlotVO.equipmentVO.id == e.id || a.weaponSlotVO.equipmentVO && a.weaponSlotVO.equipmentVO.id == e.id)) {
          return a;
        }
      }
    }
    if (i != null) {
      for (var s = 0, r = i; s < r.length; s++) {
        var l = r[s];
        if (l !== undefined && (l.helmetSlotVO.equipmentVO && l.helmetSlotVO.equipmentVO.id == e.id || l.armorSlotVO.equipmentVO && l.armorSlotVO.equipmentVO.id == e.id || l.artifactSlotVO.equipmentVO && l.artifactSlotVO.equipmentVO.id == e.id || l.weaponSlotVO.equipmentVO && l.weaponSlotVO.equipmentVO.id == e.id)) {
          return l;
        }
      }
    }
    return null;
  };
  ClientConstSort.sortGemsForCrafting = function (e, t) {
    if (n.instanceOfClass(e, "RelicGemVO") && !n.instanceOfClass(t, "RelicGemVO")) {
      return -1;
    }
    if (!n.instanceOfClass(e, "RelicGemVO") && n.instanceOfClass(t, "RelicGemVO")) {
      return 1;
    }
    if (n.instanceOfClass(e, "RelicGemVO") && n.instanceOfClass(t, "RelicGemVO")) {
      return l.int(e.relicInfoVO.relicTypeId - t.relicInfoVO.relicTypeId);
    }
    var i = e;
    var o = t;
    if (i.isUnique && !o.isUnique) {
      return -1;
    } else if (!i.isUnique && o.isUnique) {
      return 1;
    } else if (i.level > o.level) {
      return -1;
    } else if (i.level < o.level) {
      return 1;
    } else if (i.boni[0].effect.name < o.boni[0].effect.name) {
      return -1;
    } else if (i.boni[0].effect.name > o.boni[0].effect.name) {
      return 1;
    } else {
      return 0;
    }
  };
  ClientConstSort.sortByExpireTime = function (e, t) {
    if (e.expiredTimeStamp < t.expiredTimeStamp) {
      return -1;
    } else if (e.expiredTimeStamp > t.expiredTimeStamp) {
      return 1;
    } else {
      return 0;
    }
  };
  ClientConstSort.sortCollectablesC2First = function (e, t) {
    if (e.itemType == g.CollectableEnum.C2 && t.itemType != g.CollectableEnum.C2) {
      return -1;
    } else if (e.itemType != g.CollectableEnum.C2 && t.itemType == g.CollectableEnum.C2) {
      return 1;
    } else {
      return 0;
    }
  };
  ClientConstSort.sortVisualVOByWodId = function (e, t) {
    if (e.wodId < t.wodId) {
      return -1;
    } else if (e.wodId > t.wodId) {
      return 1;
    } else {
      return 0;
    }
  };
  ClientConstSort.sortForumTopicPostsByCreationDate = function (e = true) {
    return function (t, i) {
      if (t.postVO.creationTimestamp < i.postVO.creationTimestamp) {
        if (e) {
          return 1;
        } else {
          return -1;
        }
      } else if (t.postVO.creationTimestamp > i.postVO.creationTimestamp) {
        if (e) {
          return -1;
        } else {
          return 1;
        }
      } else {
        return 0;
      }
    };
  };
  ClientConstSort.sortInviteRewardsByLevel = function (e, t) {
    if (e.friendLevel < t.friendLevel) {
      return -1;
    } else if (e.friendLevel > t.friendLevel) {
      return 1;
    } else {
      return 0;
    }
  };
  ClientConstSort.sortInviteRewardsByFriendCount = function (e, t) {
    if (e.friendCount < t.friendCount) {
      return -1;
    } else if (e.friendCount > t.friendCount) {
      return 1;
    } else {
      return 0;
    }
  };
  ClientConstSort.sortByEventId = function () {
    var e = c.CastleModel.specialEventData.activeSeasonVO;
    var t = l.int(e ? e.mapID : -1);
    return function (e, i) {
      if (t != -1) {
        if (_.TMapHelper.isSeaQueenMap(t)) {
          if (i.eventID == a.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN) {
            return 1;
          } else {
            return -1;
          }
        }
        if (_.TMapHelper.isThornKingMap(t)) {
          if (i.eventID == a.EventConst.EVENTTYPE_CRUSADE_THORNKING) {
            return 1;
          } else {
            return -1;
          }
        }
        if (_.TMapHelper.isUnderworldMap(t)) {
          if (i.eventID == a.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD) {
            return 1;
          } else {
            return -1;
          }
        }
      }
      return i.eventID - e.eventID;
    };
  };
  ClientConstSort.sortByPriority = function (e, t) {
    return e - t;
  };
  ClientConstSort.sortByC2Reward = function (e, t) {
    return t.c2Reward - e.c2Reward;
  };
  ClientConstSort.sortByXpReward = function (e, t) {
    return t.xpReward - e.xpReward;
  };
  ClientConstSort.sortByQuestId = function (e, t) {
    return t.questID - e.questID;
  };
  ClientConstSort.sortByQuestSeriesNumber = function (e, t) {
    return e.questSeriesNumber - t.questSeriesNumber;
  };
  ClientConstSort.sortPackageListByHighlightOrder = function (e) {
    if (e && e.length > 0) {
      var t = e.length > 0 ? e[0] : null;
      var i = t;
      for (var n = 0; n < e.length; n++) {
        if (!t && e[n].highlightOrderLeft > 0 || t.highlightOrderLeft > e[n].highlightOrderLeft) {
          t = e[n];
        }
        if (!i && e[n].highlightOrderRight > 0 || i.highlightOrderRight > e[n].highlightOrderRight) {
          i = e[n];
        }
      }
      if (t === i && e.length > 1) {
        i = e[1];
      }
      e.splice(e.indexOf(t), 1);
      e.splice(e.indexOf(i), 1);
      if (i) {
        i.topPackage = true;
      }
      if (t) {
        t.topPackage = true;
      }
      if (t === i) {
        e.unshift(t);
      } else {
        e.unshift(t, i);
      }
    }
  };
  ClientConstSort.sortConstructionItems = function (e, t) {
    var i = e.constructionItemVO;
    var n = t.constructionItemVO;
    return l.int(i.compareTo(n));
  };
  ClientConstSort.objectiveOrder = function (e, t) {
    var i = e.isFailed - t.isFailed;
    return i || ((i = e.isCompleted - t.isCompleted) ? i : (i = e.isMainObjective - t.isMainObjective) ? i : (i = e.isChallengeObjective - t.isChallengeObjective) || e.questID - t.questID);
  };
  ClientConstSort.sortCombinedEventRewards = function (e, t) {
    var i = l.int(h.ClientConstCollectable.GROUP_LIST_COMBINED_EVENT_REWARDS.indexOf(e.itemType));
    var o = l.int(h.ClientConstCollectable.GROUP_LIST_COMBINED_EVENT_REWARDS.indexOf(t.itemType));
    if (e.itemType == g.CollectableEnum.UNITS && t.itemType == g.CollectableEnum.UNITS) {
      i += l.int(n.instanceOfClass(e.unitVO, "SoldierUnitVO") ? 1 : -1);
      o += l.int(n.instanceOfClass(t.unitVO, "SoldierUnitVO") ? 1 : -1);
    }
    if (n.instanceOfClass(e, "CollectableItemGenericCurrencyVO") && n.instanceOfClass(t, "CollectableItemGenericCurrencyVO")) {
      return ClientConstSort._sortByValue(e.xmlCurrencyVO.id, t.xmlCurrencyVO.id);
    } else {
      return ClientConstSort._sortByValue(i, o);
    }
  };
  ClientConstSort.sortByCurrencyId = function (e, t) {
    return e.id - t.id;
  };
  ClientConstSort.sortByXmlCurrencyId = function (e, t) {
    return e.id - t.id;
  };
  ClientConstSort.sortRelicBoni = function (e, t) {
    var i = u.XmlRelicEffectVO.EFFECT_TYPE_SORT_ORDER.indexOf(t.relicEffectVO.effectType) - u.XmlRelicEffectVO.EFFECT_TYPE_SORT_ORDER.indexOf(e.relicEffectVO.effectType);
    if (i != 0) {
      return i;
    } else {
      return t.relicEffectVO.id - e.relicEffectVO.id;
    }
  };
  ClientConstSort.sortByTempServerRewardPriority = function (e, t) {
    var i = [g.CollectableEnum.UNITS, g.CollectableEnum.GENERIC_CURRENCY, g.CollectableEnum.EQUIPMENT_RARENESS, g.CollectableEnum.EQUIPMENT_UNIQUE, g.CollectableEnum.EQUIPMENT_UNIQUE_ENCHANTED, g.CollectableEnum.RELIC_EQUIPMENT, g.CollectableEnum.BUILDING];
    var n = i.indexOf(e.itemType);
    return i.indexOf(t.itemType) - n;
  };
  ClientConstSort.__initialize_static_members = function () {
    ClientConstSort.RECRUIT_CASTLE_LIST_SORT_ORDER = [r.WorldConst.AREA_TYPE_CASTLE, r.WorldConst.AREA_TYPE_OUTPOST, r.WorldConst.AREA_TYPE_CAPITAL, r.WorldConst.AREA_TYPE_METROPOL, r.WorldConst.AREA_TYPE_KINGS_TOWER, r.WorldConst.AREA_TYPE_MONUMENT, r.WorldConst.AREA_TYPE_LABORATORY, r.WorldConst.AREA_TYPE_ALLIANCE_BATTLE_GROUND_TOWER];
    ClientConstSort.BOOKMARK_CASTLE_LIST_SORT_ORDER = [r.WorldConst.AREA_TYPE_CASTLE, r.WorldConst.AREA_TYPE_KINGDOM_CASTLE, r.WorldConst.AREA_TYPE_ALIEN_CAMP, r.WorldConst.AREA_TYPE_RED_ALIEN_CAMP, r.WorldConst.AREA_TYPE_OUTPOST, r.WorldConst.AREA_TYPE_CAPITAL, r.WorldConst.AREA_TYPE_METROPOL, r.WorldConst.AREA_TYPE_KINGS_TOWER, r.WorldConst.AREA_TYPE_MONUMENT, r.WorldConst.AREA_TYPE_LABORATORY, r.WorldConst.AREA_TYPE_VILLAGE, r.WorldConst.AREA_TYPE_ISLE_RESOURCE, r.WorldConst.AREA_TYPE_DUNGEON, r.WorldConst.AREA_TYPE_ISLE_DUNGEON, r.WorldConst.AREA_TYPE_BOSS_DUNGEON, r.WorldConst.AREA_TYPE_EVENT_DUNGEON, r.WorldConst.AREA_TYPE_FACTION_CAMP, r.WorldConst.AREA_TYPE_FACTION_CAPITAL, r.WorldConst.AREA_TYPE_FACTION_VILLAGE, r.WorldConst.AREA_TYPE_FACTION_TOWER];
  };
  return ClientConstSort;
}();
exports.ClientConstSort = p;
var h = require("./86.js");
var g = require("./12.js");
var C = require("./56.js");
var _ = require("./273.js");
p.__initialize_static_members();