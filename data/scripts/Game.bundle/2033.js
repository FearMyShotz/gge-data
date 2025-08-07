Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CollectableParserX2CEventPackages() {}
  CollectableParserX2CEventPackages.prototype.createCostList = function (e) {
    if (o.ClientConstCollectable.GROUP_LIST_GOODS[0] == null) {
      o.ClientConstCollectable.__initialize_static_members();
    }
    var t = new r.CollectableList();
    for (var i = 0, n = o.ClientConstCollectable.GROUP_LIST_GOODS; i < n.length; i++) {
      var l = n[i];
      if (l !== undefined) {
        var c = O.int(f.CastleXMLUtils.getIntAttribute("packagePrice" + s.CollectableHelper.getGoodsKeySuffix(l), e, 0));
        if (c > 0) {
          t.addItem(s.CollectableHelper.createVO(l, c));
        }
      }
    }
    t.addList(m.CollectableManager.parser.x2cList.createList(e, o.ClientConstCollectable.XML_PREFIX_COST));
    if (t.length <= 0) {
      t.addItem(s.CollectableHelper.createVO(a.CollectableEnum.C2, 0));
    }
    return t;
  };
  CollectableParserX2CEventPackages.prototype.createRewardList = function (e) {
    var t = new r.CollectableList();
    t.addList(m.CollectableManager.parser.x2cList.createList(e, o.ClientConstCollectable.XML_PREFIX_ADD), true);
    t.addList(m.CollectableManager.parser.x2cList.createList(e, o.ClientConstCollectable.XML_PREFIX_AMOUNT), true);
    t.addList(m.CollectableManager.parser.x2cList.createList(e, ""), true);
    for (var i in e) {
      switch (String(i)) {
        case "buildingID":
          t.addItem(new u.CollectableItemBuildingVO(parseInt(e.buildingID || ""), parseInt(e.buildingAmount || "1")));
          break;
        case "unitID":
          t.addItem(new _.CollectableItemUnitVO(parseInt(e.unitID || ""), parseInt(e.unitAmount || "")));
          break;
        case "lootBox":
          var n = String(e.lootBox).split("+");
          t.list[0].updateLootBoxVO(parseInt(n[0] || ""), parseInt(n[1] || ""));
          break;
        case "heroAmount":
          t.addItem(new p.CollectableItemHeroRandomVO(-parseInt(f.CastleXMLUtils.getValueOrDefault("specialHeroOfRarenessID", e, "0")), parseInt(f.CastleXMLUtils.getValueOrDefault("heroAmount", e, "0"))));
          break;
        case "constructionItemID":
          t.addItem(new d.CollectableItemConstructionItemVO(parseInt(f.CastleXMLUtils.getValueOrDefault("constructionItemID", e, "0")), parseInt(f.CastleXMLUtils.getValueOrDefault("constructionItemAmount", e, "0"))));
          break;
        case "plagueMonkCount":
          t.addItem(new C.CollectableItemPlagueDoctorVO(parseInt(e.plagueMonkCount || "")));
          break;
        case "packageIDs":
          var s = f.CastleXMLUtils.getValueOrDefault("packageIDs", e, "");
          for (var y = s != "" ? s.split(",") : [], b = 0; b < y.length; ++b) {
            var D = E.CastleModel.eventPackageData.getEventPackageByID(O.int(y[b]));
            if (D) {
              t.addList(D.rewards, true);
            }
          }
          break;
        case "equipmentAmount":
          var I = parseInt(f.CastleXMLUtils.getValueOrDefault("equipmentAmount", e, "0"));
          var T = parseInt(f.CastleXMLUtils.getValueOrDefault("specialEquipmentOfRarenessID", e, "0"));
          var v = f.CastleXMLUtils.getIntArrayFromString(f.CastleXMLUtils.getValueOrDefault("equipmentIDs", e, ""), ",");
          var S = f.CastleXMLUtils.getValueOrDefault("enchantedEquipmentIDs", e, "");
          if (v.length <= 0 && S.length <= 0) {
            if (T > 0) {
              t.addItem(new l.CollectableItemEquipmentRarenessVO(-T, I));
            } else {
              t.addItem(new h.CollectableItemRandomRewardVO(a.CollectableEnum.EQUIPMENT_RARENESS, I));
            }
          }
          break;
        case "gemAmount":
          var A = parseInt(f.CastleXMLUtils.getValueOrDefault("gemAmount", e, "0"));
          var L = parseInt(f.CastleXMLUtils.getValueOrDefault("specialGemOfLevelID", e, "0"));
          var P = f.CastleXMLUtils.getValueOrDefault("gemIDs", e, "");
          if ((P != "" ? P.split(",") : []).length <= 0) {
            if (L > 0) {
              t.addItem(new c.CollectableItemGemRandomVO(-L, A));
            } else {
              t.addItem(new h.CollectableItemRandomRewardVO(a.CollectableEnum.GEM_RANDOM, A));
            }
          }
          break;
        case "amountXP":
          var M = parseInt(e.amountXP || "");
          t.addItem(new g.CollectableItemXpVO(M));
      }
    }
    return t;
  };
  return CollectableParserX2CEventPackages;
}();
exports.CollectableParserX2CEventPackages = n;
var o = require("./86.js");
var a = require("./12.js");
var s = require("./45.js");
var r = require("./48.js");
var l = require("./687.js");
var c = require("./859.js");
var u = require("./291.js");
var d = require("./337.js");
var p = require("./1178.js");
var h = require("./1179.js");
var g = require("./1180.js");
var C = require("./860.js");
var _ = require("./411.js");
var m = require("./50.js");
var f = require("./22.js");
var O = require("./6.js");
var E = require("./4.js");