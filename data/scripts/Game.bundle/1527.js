Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./5.js");
var u = require("./5.js");
var d = require("./5.js");
var p = require("./5.js");
var h = require("./5.js");
var g = require("./5.js");
var C = require("./3.js");
var _ = require("./3.js");
var m = require("./6.js");
var f = require("./57.js");
var O = require("./436.js");
var E = require("./37.js");
var y = require("./192.js");
var b = require("./32.js");
var D = require("./4.js");
var I = require("./52.js");
var T = require("./40.js");
var v = require("./2803.js");
var S = require("./8.js");
var A = function (e) {
  function ResourceVillageFilterComponent(t) {
    var i = this;
    i._currentKingdomID = 0;
    i._currentVillageType = 0;
    i._villageTypeChangeSignal = new f.Signal();
    i._kingdomChangeSignal = new f.Signal();
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).kingdomCrestComponent = t.mc_kingdomCrest;
    i.kingdomSelectorComponent = new V.CastleSelectorComponent(t.mc_castleSelector, 7, "", 1, 20, 25, v.ComboboxItemRendererCastleListVillages, 5);
    i.itxt_villageCount = R.CastleComponent.textFieldManager.registerTextField(t.mc_villageCount.txt_villageCount, new _.LocalizedTextVO(a.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [0, 0]));
    i.itxt_tokensCount = R.CastleComponent.textFieldManager.registerTextField(t.mc_tokensCount.txt_tokensCount, new C.LocalizedNumberVO(0));
    i._villageTypeTabs = [];
    t.mc_tokensCount.toolTipText = "currency_name_ResourceVillageToken";
    t.mc_villageCount.mouseChildren = false;
    t.mc_tokensCount.mouseChildren = false;
    t.mc_kingdomCrest.mouseChildren = false;
    for (var n = 0; n < ResourceVillageFilterComponent.VILLAGE_TYPES.length; n++) {
      var o = t[ResourceVillageFilterComponent.TAB_NAME + n];
      if (o) {
        i._villageTypeTabs.push(o);
        S.ButtonHelper.initBasicButton(o);
      }
    }
    return i;
  }
  n.__extends(ResourceVillageFilterComponent, e);
  ResourceVillageFilterComponent.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    var t = [];
    for (var i = 0, n = Array.from(D.CastleModel.kingdomData.kingdomVOs.values()); i < n.length; i++) {
      var o = n[i];
      if (o !== undefined) {
        if (!o.hasAccessToPrivateResourceVillages()) {
          t.push(o.kID);
        }
      }
    }
    var a = this.getComboboxEnableData();
    this.kingdomSelectorComponent.initComponent(D.CastleModel.otherPlayerData.getOwnInfoVO(), D.CastleModel.userData.castleList, D.CastleModel.userData.castleList.getMainCastleByKingdomID(this._currentKingdomID), t, -1, a[0], a[1], [d.WorldConst.AREA_TYPE_CASTLE, d.WorldConst.AREA_TYPE_KINGDOM_CASTLE]);
    this.kingdomSelectorComponent.show();
    this.setCurrentKingdom(D.CastleModel.kingdomData.activeKingdomID);
    this.setVillageType(this._availableVillageTypes[0]);
    this.updateVillageTokens();
    this.updateKingdomCrest();
    this.kingdomSelectorComponent.changeSelectedCastle(D.CastleModel.areaData.activeAreaInfo);
    this.kingdomSelectorComponent.castleList.disp.addEventListener(l.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onSelectCastle));
    R.CastleComponent.controller.addEventListener(b.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onSpecialCurrencyUpdate));
    D.CastleModel.kingdomData.addEventListener(y.CastleKingdomEvent.KINGDOM_VILLAGELIST_ARRIVED, this.bindFunction(this.onVillageListUpdate));
    R.CastleComponent.controller.addEventListener(E.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onCastleChanged));
  };
  ResourceVillageFilterComponent.prototype.getComboboxEnableData = function () {
    var e = D.CastleModel.userData.castleList.list;
    var t = [];
    var i = [];
    if (e != null) {
      for (var n = 0, o = e; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          if (D.CastleModel.kingdomData.getKingdomVOByID(a.kingdomID).hasContor) {
            t.push(true);
            i.push(null);
          } else {
            t.push(false);
            i.push("dialog_privateResourceVillages_noWarehouse_info");
          }
        }
      }
    }
    return [t, i];
  };
  ResourceVillageFilterComponent.prototype.onHide = function () {
    e.prototype.onHide.call(this);
    this.kingdomSelectorComponent.hide();
    this.kingdomSelectorComponent.castleList.disp.removeEventListener(l.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onSelectCastle));
    R.CastleComponent.controller.removeEventListener(b.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onSpecialCurrencyUpdate));
    R.CastleComponent.controller.removeEventListener(E.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onCastleChanged));
    D.CastleModel.kingdomData.removeEventListener(y.CastleKingdomEvent.KINGDOM_VILLAGELIST_ARRIVED, this.bindFunction(this.onVillageListUpdate));
  };
  ResourceVillageFilterComponent.prototype.onVillageListUpdate = function (e) {
    this.updateVillageCount();
  };
  ResourceVillageFilterComponent.prototype.onSelectCastle = function (e) {
    var t = this.kingdomSelectorComponent.castleList.selectedData;
    r.CommandController.instance.executeCommand(M.IngameClientCommands.JOIN_AREA_AND_SAVE_POSITION_COMMAND, t);
    R.CastleComponent.layoutManager.dialogCastleSwitch = true;
  };
  ResourceVillageFilterComponent.prototype.onCastleChanged = function (e) {
    this.kingdomSelectorComponent.castleList.disp.removeEventListener(l.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onSelectCastle));
    this.kingdomSelectorComponent.changeSelectedCastle(this.kingdomSelectorComponent.getCastleByKingdom(D.CastleModel.kingdomData.activeKingdomID));
    this.kingdomSelectorComponent.castleList.disp.addEventListener(l.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onSelectCastle));
    var t = m.int(this.kingdomSelectorComponent.castleList.selectedData.kingdomID);
    this.setCurrentKingdom(t);
    this.updateVillageCount();
  };
  ResourceVillageFilterComponent.prototype.onSpecialCurrencyUpdate = function (e) {
    this.updateVillageTokens();
    this._villageTypeChangeSignal.dispatch();
  };
  ResourceVillageFilterComponent.prototype.updateTabs = function () {
    for (var e = 0; e < this._villageTypeTabs.length; e++) {
      var t = this._villageTypeTabs[e];
      if (e < this._availableVillageTypes.length) {
        t.visible = true;
        t.toolTipText = ResourceVillageFilterComponent.TAB_TOOLTIPS[ResourceVillageFilterComponent.VILLAGE_TYPES.indexOf(this._availableVillageTypes[e])];
        t.mc_icon.gotoAndStop(ResourceVillageFilterComponent.VILLAGE_TYPES.indexOf(this._availableVillageTypes[e]) + 1);
        t.gotoAndStop(this._currentVillageType == this._availableVillageTypes[e] ? 2 : 1);
        t.mc_icon.x = this._currentVillageType == this._availableVillageTypes[e] ? ResourceVillageFilterComponent.TAB_SELECTED_ICON_X : 0;
      } else {
        t.visible = false;
      }
    }
    if (this._availableVillageTypes.indexOf(this._currentVillageType) == -1) {
      this.setVillageType(this._availableVillageTypes[0]);
    }
  };
  ResourceVillageFilterComponent.prototype.updateVillageCount = function () {
    var e = m.int(D.CastleModel.userData.villageList.getCountByRessourceType(this._currentKingdomID, this.currentTypeName));
    this.disp.mc_villageCount.toolTipText = "dialog_privateResourceVillages_villageCounter_" + O.ClientConstKingdom.getVillageTypeName(this._currentVillageType).toLowerCase() + "_tt";
    var t = m.int(D.CastleModel.kingdomData.getKingdomVOByID(this._currentKingdomID).getVillageCapByType(this._currentVillageType));
    this.itxt_villageCount.textContentVO.textReplacements = [e, t];
    if (this.disp.mc_villageCount.mc_villageHolder) {
      s.MovieClipHelper.clearMovieClip(this.disp.mc_villageCount.mc_villageHolder);
      x.CastlePrivateResourceVillageRenderHelper.renderVillage(this._currentVillageType, this.disp.mc_villageCount.mc_villageHolder, 44.45, 33.65);
    }
  };
  ResourceVillageFilterComponent.prototype.updateVillageTokens = function () {
    this.itxt_tokensCount.textContentVO.numberValue = w.CostHelper.getAvailableGoods(new L.CollectableTypeVO().initByCollectable(new P.CollectableItemGenericCurrencyVO(I.ClientConstCurrency.ID_RESOURCE_VILLAGE_TOKEN)));
  };
  ResourceVillageFilterComponent.prototype.updateKingdomCrest = function () {
    this.kingdomCrestComponent.gotoAndStop(this._currentKingdomID + 1);
    this.kingdomCrestComponent.toolTipText = this.getKingdomCrestTooltip(this._currentKingdomID);
  };
  ResourceVillageFilterComponent.prototype.getKingdomCrestTooltip = function (e) {
    switch (e) {
      case u.WorldIce.KINGDOM_ID:
        return "kingdomName_Icecream";
      case g.WorldDessert.KINGDOM_ID:
        return "kingdomName_Dessert";
      case p.WorldVolcano.KINGDOM_ID:
        return "kingdomName_Volcano";
      case c.WorldIsland.KINGDOM_ID:
        return "kingdomName_Eiland";
      case h.FactionConst.KINGDOM_ID:
        return "kingdomName_Faction";
    }
    return "kingdomName_Classic";
  };
  ResourceVillageFilterComponent.prototype.setVillageType = function (e) {
    this._currentVillageType = e;
    this.updateTabs();
    this.updateVillageCount();
    this._villageTypeChangeSignal.dispatch();
  };
  ResourceVillageFilterComponent.prototype.setCurrentKingdom = function (e) {
    this._currentKingdomID = e;
    this._availableVillageTypes = this.getAvailableVillageTypesByKingdomID(D.CastleModel.kingdomData.activeKingdomID);
    this.updateTabs();
    this.updateVillageCount();
    this.updateKingdomCrest();
    this._kingdomChangeSignal.dispatch();
  };
  ResourceVillageFilterComponent.prototype.onClick = function (e) {
    if (S.ButtonHelper.isButtonEnabled(e.target)) {
      var t = m.int(this._villageTypeTabs.indexOf(e.target));
      if (t > -1) {
        this.setVillageType(this._availableVillageTypes[t]);
      }
    }
  };
  ResourceVillageFilterComponent.prototype.getAvailableVillageTypesByKingdomID = function (e) {
    var t = [];
    if (ResourceVillageFilterComponent.VILLAGE_TYPES != null) {
      for (var i = 0, n = ResourceVillageFilterComponent.VILLAGE_TYPES; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && D.CastleModel.kingdomData.getKingdomVOByID(e).isVillageTypeAvailable(o)) {
          t.push(o);
        }
      }
    }
    return t;
  };
  Object.defineProperty(ResourceVillageFilterComponent.prototype, "currentTypeName", {
    get: function () {
      return O.ClientConstKingdom.getVillageTypeName(this._currentVillageType);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceVillageFilterComponent.prototype, "currentKingdomID", {
    get: function () {
      return this._currentKingdomID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceVillageFilterComponent.prototype, "currentVillageType", {
    get: function () {
      return this._currentVillageType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceVillageFilterComponent.prototype, "villageTypeChangeSignal", {
    get: function () {
      return this._villageTypeChangeSignal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceVillageFilterComponent.prototype, "kingdomChangeSignal", {
    get: function () {
      return this._kingdomChangeSignal;
    },
    enumerable: true,
    configurable: true
  });
  ResourceVillageFilterComponent.VILLAGE_TYPES = [d.WorldConst.VILLAGE_TYPE_WOOD, d.WorldConst.VILLAGE_TYPE_STONE, d.WorldConst.VILLAGE_TYPE_FOOD, d.WorldConst.VILLAGE_TYPE_COAL, d.WorldConst.VILLAGE_TYPE_OIL, d.WorldConst.VILLAGE_TYPE_GLASS, d.WorldConst.VILLAGE_TYPE_IRON];
  ResourceVillageFilterComponent.TAB_TOOLTIPS = ["dialog_privateResourceVillages_tab_wood_tt", "dialog_privateResourceVillages_tab_stone_tt", "dialog_privateResourceVillages_tab_food_tt", "dialog_privateResourceVillages_tab_coal_tt", "dialog_privateResourceVillages_tab_oil_tt", "dialog_privateResourceVillages_tab_glass_tt", "dialog_privateResourceVillages_tab_iron_tt"];
  ResourceVillageFilterComponent.TAB_NAME = "tab_";
  ResourceVillageFilterComponent.TAB_SELECTED_ICON_X = 5;
  return ResourceVillageFilterComponent;
}(T.CastleItemRenderer);
exports.ResourceVillageFilterComponent = A;
o.classImplementsInterfaces(A, "ICollectableRendererList");
var L = require("./74.js");
var P = require("./155.js");
var M = require("./29.js");
var R = require("./14.js");
var V = require("./321.js");
var x = require("./535.js");
var w = require("./66.js");