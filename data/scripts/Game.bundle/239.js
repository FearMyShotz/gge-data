Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.Point;
var o = function () {
  function ConstructionItemsHelper() {}
  Object.defineProperty(ConstructionItemsHelper, "hasConstructorBuilding", {
    get: function () {
      return !!g.Iso.data && g.Iso.data.objects.provider.hasFunctionalBuildingByType(h.IsoObjectEnum.CONSTRUCTOR);
    },
    enumerable: true,
    configurable: true
  });
  ConstructionItemsHelper.hasConstructorForSlot = function (e) {
    var t = 0;
    if (ConstructionItemsHelper.hasConstructorBuilding) {
      t = l.int(g.Iso.data.objects.provider.getObjectByType(h.IsoObjectEnum.CONSTRUCTOR).level);
    }
    return t >= ConstructionItemsHelper.getMinimumConstructorLevelForSlot(e);
  };
  ConstructionItemsHelper.getMinimumConstructorLevelForSlot = function (e) {
    if (e.slotType == s.ConstructionItemConst.SECONDARY_SLOT_TYPE && e.index == 1) {
      return 2;
    } else {
      return 1;
    }
  };
  ConstructionItemsHelper.handleSlotClickLocked = function (e) {
    if (ConstructionItemsHelper.hasConstructorBuilding) {
      if (!ConstructionItemsHelper.hasConstructorForSlot(e)) {
        var t = l.int(g.Iso.data.objects.provider.getObjectByType(h.IsoObjectEnum.CONSTRUCTOR).objectId);
        var i = g.Iso.renderer.objects.provider.getObjectById(t);
        if (!a.instanceOfClass(i, "BasicMoatVE") && !a.instanceOfClass(i, "PremiumMoatVE")) {
          g.Iso.renderer.camera.scrollToGridPos(i.vo.pos);
        }
        ConstructionItemsHelper.layoutManager.hideAllDialogs();
        g.Iso.renderer.mouse.changeSelectedTarget(i);
      }
    } else {
      g.Iso.controller.viewUpdater.switchBuildModeInOwnCastle(true);
      var n = C.CastleModel.wodData.getBuildingVOById(c.ClientConstCastle.CONSTRUCTOR_BUILDING_WOD_LEVEL1);
      ConstructionItemsHelper.layoutManager.getPanel(y.CastleDecoShopPanel).centerAndHighlightBuildingInShop(n);
    }
  };
  ConstructionItemsHelper.getSlotNameTextId = function (e) {
    if (e == _.ConstructionItemData.ALL_SLOTS) {
      return "dialog_ci_assign_inventory_tab_all";
    } else {
      return ConstructionItemsHelper.getBaseNameTextId(e) + "Slot";
    }
  };
  ConstructionItemsHelper.getBaseNameTextId = function (e) {
    switch (e) {
      case s.ConstructionItemConst.APPEARANCE_SLOT_TYPE:
        return "ci_appearance";
      case s.ConstructionItemConst.PRIMARY_SLOT_TYPE:
        return "ci_primary";
      case s.ConstructionItemConst.SECONDARY_SLOT_TYPE:
        return "ci_secondary";
    }
    return null;
  };
  Object.defineProperty(ConstructionItemsHelper, "layoutManager", {
    get: function () {
      return O.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  ConstructionItemsHelper.getCategoryName = function (e) {
    switch (e) {
      case c.ClientConstCastle.BUILDINGGROUND_TYPE_CIVIL:
        return r.Localize.text("dialog_ci_filter01_civil");
      case c.ClientConstCastle.BUILDINGGROUND_TYPE_MILITARY:
        return r.Localize.text("dialog_ci_filter01_military");
      case c.ClientConstCastle.BUILDINGGROUND_TYPE_DEFENCE:
        return r.Localize.text("dialog_ci_filter01_battlement");
      default:
        return r.Localize.text("dialog_ci_filter01_all");
    }
  };
  ConstructionItemsHelper.fillMaterialInventory = function (e) {
    var t = new p.CollectableList();
    for (var i = 0, n = C.CastleModel.currencyData.getXmlCurrenciesByIdRange(C.CastleModel.currencyData.getCurrencyRangeByID(m.ClientConstCurrency.ID_RANGE_CRAFTING_MATERIAL)); i < n.length; i++) {
      var o = n[i];
      t.addItem(d.CollectableHelper.createVO(u.CollectableEnum.GENERIC_CURRENCY, C.CastleModel.currencyData.getAmountById(o.id), o.id));
    }
    return ConstructionItemsHelper.fillMaterialList(e, t);
  };
  ConstructionItemsHelper.fillMaterialCosts = function (e, t) {
    return ConstructionItemsHelper.fillMaterialList(e, t.materialsNeeded, false, 2);
  };
  ConstructionItemsHelper.fillDisassembledMaterials = function (e, t, i = 1) {
    var n = t.disassembleMaterials.clone();
    for (var o = 0, a = n.list; o < a.length; o++) {
      var s = a[o];
      if (s !== undefined) {
        s.amount = Math.ceil(s.amount * i);
      }
    }
    return ConstructionItemsHelper.fillMaterialList(e, n);
  };
  ConstructionItemsHelper.fillMaterialList = function (e, t, i = true, o = 3) {
    var a = new E.CastleScrollableResourceListComponent(e, i ? Library.CastleInterfaceElements.CraftingMaterial_Item_Grey : Library.CastleInterfaceElements.CraftingMaterial_Item, t, o, 6 / o);
    var s = 29.5;
    var r = 2.8;
    if (!i) {
      s = 26.9;
      r = 10;
    }
    a.iconDimension = new n(s, s);
    a.padding = r;
    a.initialize();
    return a;
  };
  ConstructionItemsHelper.isRecipeUnlocked = function (e) {
    return !!e && (!!e.unlockedByDefault || C.CastleModel.researchData.getResearchEffectValue(f.EffectTypeEnum.EFFECT_TYPE_ENABLE_CONSTRUCTIONITEM_RECIPE_ID).rawValues.indexOf(e.id) > -1);
  };
  ConstructionItemsHelper.findResearchForRecipe = function (e) {
    if (!e) {
      return null;
    }
    for (var t = 0, i = Array.from(C.CastleModel.researchData.researchVOs.values()); t < i.length; t++) {
      var n = i[t];
      if (n !== undefined) {
        var o = a.castAs(n.getEffectValueByType(f.EffectTypeEnum.EFFECT_TYPE_ENABLE_CONSTRUCTIONITEM_RECIPE_ID), "EffectValueIdList");
        if (o && o.hasID(e.id)) {
          return n;
        }
      }
    }
    return null;
  };
  ConstructionItemsHelper.getBestUnlockedCI = function (e) {
    var t;
    var i = C.CastleModel.researchData.getResearchEffectValue(f.EffectTypeEnum.EFFECT_TYPE_ENABLE_CONSTRUCTIONITEM_RECIPE_ID);
    for (var n = 0, o = e.recipes; n < o.length; n++) {
      var a = o[n];
      if (a !== undefined) {
        if (!a.unlockedByDefault && !(i.rawValues.indexOf(a.id) > -1)) {
          break;
        }
        t = a;
      }
    }
    if (t) {
      return t.constructionItem;
    } else {
      return null;
    }
  };
  return ConstructionItemsHelper;
}();
exports.ConstructionItemsHelper = o;
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./18.js");
var u = require("./12.js");
var d = require("./45.js");
var p = require("./48.js");
var h = require("./80.js");
var g = require("./34.js");
var C = require("./4.js");
var _ = require("./624.js");
var m = require("./52.js");
var f = require("./33.js");
var O = require("./17.js");
var E = require("./2626.js");
var y = require("./260.js");