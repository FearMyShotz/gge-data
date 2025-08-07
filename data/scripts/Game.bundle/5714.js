Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./6.js");
var r = require("./5715.js");
var l = require("./5716.js");
var c = require("./5717.js");
var u = require("./1945.js");
var d = require("./119.js");
var p = require("./50.js");
var h = require("./12.js");
var g = require("./80.js");
var C = require("./33.js");
var _ = require("./15.js");
var m = require("./54.js");
var f = require("./380.js");
var O = require("./4.js");
var E = require("./483.js");
var y = require("./198.js");
var b = require("./5718.js");
var D = require("./1798.js");
var I = require("./5719.js");
var T = require("./5727.js");
var v = function (e) {
  function CastleEquipmentData() {
    var t = this;
    t._equipmentXml = new T.EquipmentXml();
    t._relicXml = new I.RelicEquipmentXml();
    t._playerInventorySpace = 0;
    t._playerTotalInventorySpace = 0;
    t._favoriteEquipmentIdsList = [];
    t._favoriteGemsIdsList = [];
    t._favoriteRelicGemsIdsList = [];
    t._isEquipRunning = false;
    t._hasNewRelics = false;
    t._newRelicEquipmentsList = [];
    t._newRelicGemsList = [];
    t._hasRelicEnchanter = false;
    t._showEquipmentIds = false;
    t._relicFragmentBoost = 0;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this).reset();
    return t;
  }
  n.__extends(CastleEquipmentData, e);
  CastleEquipmentData.prototype.reset = function () {
    this._playerInventory = [];
    this._dragInventory = [];
    this._craftingInventory = [];
    this._playerInventorySpace = 0;
    this._playerTotalInventorySpace = 0;
    this._hasRelicEnchanter = false;
    this._relicFragmentBoost = 0;
  };
  CastleEquipmentData.prototype.parseXml = function (e) {
    this._configXML = e;
    this._configXML = e;
    this._equipmentXml.parseXml(e);
    this._relicXml.parseXml(e);
    this.initUniqueItemsAndSets();
  };
  CastleEquipmentData.prototype.parse_GEI = function (e) {
    if (e) {
      this._playerInventory = [];
      for (var t = 0, i = e.I; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          var o = E.CastleEquipmentFactory.createEquipmentVO(n);
          if (!(this._dragInventory.length > 0) || this._dragInventory[0].id != o.id) {
            this._playerInventory.push(o);
          }
        }
      }
      this._playerInventorySpace = s.int(O.CastleModel.equipData.playerTotalInventorySpace - this._playerInventory.length - this._dragInventory.length);
      _.CastleBasicController.getInstance().dispatchEvent(new d.CastleEquipmentEvent(d.CastleEquipmentEvent.INVENTORY_SPACE_LEFT));
      _.CastleBasicController.getInstance().dispatchEvent(new d.CastleEquipmentEvent(d.CastleEquipmentEvent.INVENTORY_UPDATED));
    }
  };
  CastleEquipmentData.prototype.parse_CEQ = function (e) {
    if (e) {
      var t = E.CastleEquipmentFactory.createEquipmentVO(e.E);
      this._playerInventory.push(t);
      this.clearCraftingInventory(null);
      _.CastleBasicController.getInstance().dispatchEvent(new d.CastleEquipmentEvent(d.CastleEquipmentEvent.EQUIPMENT_CRAFTED, [t]));
    }
  };
  CastleEquipmentData.prototype.parse_FRC = function (e) {
    if (e) {
      var t = E.CastleEquipmentFactory.createEquipmentVO(e.E);
      this._playerInventory.push(t);
      _.CastleBasicController.getInstance().dispatchEvent(new d.CastleEquipmentEvent(d.CastleEquipmentEvent.FORGE_CRAFT_EXECUTED, [t]));
    }
  };
  CastleEquipmentData.prototype.parse_ESL = function (e) {
    if (e) {
      this._playerInventorySpace = parseInt(e.E);
      this._playerTotalInventorySpace = parseInt(e.TE);
      _.CastleBasicController.getInstance().dispatchEvent(new d.CastleEquipmentEvent(d.CastleEquipmentEvent.INVENTORY_SPACE_LEFT));
    }
  };
  CastleEquipmentData.prototype.parse_EEQ = function () {
    this._isEquipRunning = false;
    _.CastleBasicController.getInstance().dispatchEvent(new d.CastleEquipmentEvent(d.CastleEquipmentEvent.EQUIP_SUCCESSFUL));
  };
  CastleEquipmentData.prototype.error_EEQ = function (e) {
    this._isEquipRunning = false;
    _.CastleBasicController.getInstance().dispatchEvent(new d.CastleEquipmentEvent(d.CastleEquipmentEvent.EQUIP_FAILED));
  };
  CastleEquipmentData.prototype.parse_MSP = function (e) {
    if (e.R) {
      var t = p.CollectableManager.parser.s2cParamList.createList(e.R).getFilteredListByTypes([h.CollectableEnum.EQUIPMENT_RARENESS, h.CollectableEnum.EQUIPMENT_UNIQUE]);
      if (t.length > 0) {
        for (var i = 0; i < t.length; i++) {
          this._playerInventory.push(t.getItemByIndex(i).equipmentVO);
        }
        _.CastleBasicController.getInstance().dispatchEvent(new d.CastleEquipmentEvent(d.CastleEquipmentEvent.INVENTORY_UPDATED));
      }
    }
  };
  CastleEquipmentData.prototype.parseNRF = function (e) {
    this._hasNewRelics = e.NR == 1;
    _.CastleBasicController.getInstance().dispatchEvent(new d.CastleEquipmentEvent(d.CastleEquipmentEvent.OVERALL_NEW_RELICS_UPDATED));
  };
  CastleEquipmentData.prototype.parseGNR = function (e) {
    this.clearNewEquipmentLists();
    if (e.E) {
      for (var t = 0, i = e.E; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          this._newRelicEquipmentsList.push(n);
        }
      }
    }
    if (e.RGEM) {
      for (var o = 0, a = e.RGEM; o < a.length; o++) {
        n = a[o];
        this._newRelicGemsList.push(n);
      }
    }
    _.CastleBasicController.getInstance().dispatchEvent(new d.CastleEquipmentEvent(d.CastleEquipmentEvent.NEW_RELICS_UPDATED));
  };
  CastleEquipmentData.prototype.isEquipableNew = function (e) {
    if (S.instanceOfClass(e, "RelicEquipmentVO")) {
      return this._newRelicEquipmentsList.indexOf(e.id) >= 0;
    } else {
      return !!S.instanceOfClass(e, "RelicGemVO") && this._newRelicGemsList.indexOf(e.id) >= 0;
    }
  };
  CastleEquipmentData.prototype.hasLordAndSlotNewRelics = function (e, t, i) {
    var n;
    if (i === undefined) {
      i = false;
    }
    if (i) {
      for (var o = 0, a = O.CastleModel.gemData.relicGemsInventory; o < a.length; o++) {
        if ((n = a[o]).lordType == e && this.isEquipableNew(n)) {
          return true;
        }
      }
    } else {
      for (var s = 0, r = this._playerInventory; s < r.length; s++) {
        if ((n = r[s]).lordType == e && n.slotTypeId == t && this.isEquipableNew(n)) {
          return true;
        }
      }
    }
    return false;
  };
  CastleEquipmentData.prototype.hasLordTypeNewRelic = function (e) {
    var t;
    for (var i = 0, n = this._playerInventory; i < n.length; i++) {
      if ((t = n[i]).lordTypeId == e && this.isEquipableNew(t)) {
        return true;
      }
    }
    for (var o = 0, a = O.CastleModel.gemData.relicGemsInventory; o < a.length; o++) {
      if ((t = a[o]).lordTypeId == e && this.isEquipableNew(t)) {
        return true;
      }
    }
    return false;
  };
  CastleEquipmentData.prototype.clearNewEquipmentLists = function () {
    this._newRelicEquipmentsList = [];
    this._newRelicGemsList = [];
  };
  CastleEquipmentData.prototype.resetOverallNewEquipmentMark = function () {
    this._hasNewRelics = false;
    _.CastleBasicController.getInstance().dispatchEvent(new d.CastleEquipmentEvent(d.CastleEquipmentEvent.OVERALL_NEW_RELICS_UPDATED));
  };
  CastleEquipmentData.prototype.initUniqueItemsAndSets = function () {
    this._uniqueItems = new Map();
    this._uniqueItems.set(-a.EquipmentConst.RARENESS_COMMON, new b.RandomEquipmentVO(a.EquipmentConst.RARENESS_COMMON));
    this._uniqueItems.set(-a.EquipmentConst.RARENESS_RARE, new b.RandomEquipmentVO(a.EquipmentConst.RARENESS_RARE));
    this._uniqueItems.set(-a.EquipmentConst.RARENESS_EPIC, new b.RandomEquipmentVO(a.EquipmentConst.RARENESS_EPIC));
    this._uniqueItems.set(-a.EquipmentConst.RARENESS_LEGENDARY, new b.RandomEquipmentVO(a.EquipmentConst.RARENESS_LEGENDARY));
    this._uniqueItems.set(-a.EquipmentConst.RARENESS_HERO_EPIC, new D.RandomHeroVO(a.EquipmentConst.RARENESS_HERO_EPIC));
    this._uniqueItems.set(-a.EquipmentConst.RARENESS_HERO_LEGENDARY, new D.RandomHeroVO(a.EquipmentConst.RARENESS_HERO_LEGENDARY));
    this._uniqueItems.set(-a.EquipmentConst.RARENESS_HERO_COMMON, new D.RandomHeroVO(a.EquipmentConst.RARENESS_HERO_COMMON));
    this._uniqueItems.set(-a.EquipmentConst.RARENESS_HERO_RARE, new D.RandomHeroVO(a.EquipmentConst.RARENESS_HERO_RARE));
    var e = this._configXML.equipments;
    if (e != null) {
      for (var t = 0, i = e; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          var o = this.createBasicEquipmentVOFromXML(n);
          this._uniqueItems.set(o.uniqueID, o);
        }
      }
    }
  };
  CastleEquipmentData.prototype.craftEquipment = function (e) {
    var t = [];
    if (this._craftingInventory != null) {
      for (var i = 0, n = this._craftingInventory; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          t.push(o.id);
        }
      }
    }
    O.CastleModel.smartfoxClient.sendCommandVO(new r.C2SCraftEquipmentVO(t, e));
  };
  CastleEquipmentData.prototype.sell = function (e, t, i) {
    if (e) {
      O.CastleModel.smartfoxClient.sendCommandVO(new c.C2SSellEquipmentVO(e.id, t, i));
    }
  };
  CastleEquipmentData.prototype.startDrag = function (e, t) {
    switch (t.locationType) {
      case f.EquipableDragLocationVO.TYPE_CRAFTING:
        this.moveItem(e, this._craftingInventory, this._dragInventory);
        break;
      case f.EquipableDragLocationVO.TYPE_SLOT:
        this.moveItem(e, null, this._dragInventory);
        if (t.lordID != -1) {
          this._isEquipRunning = true;
          O.CastleModel.smartfoxClient.sendCommandVO(new l.C2SEquipEquipmentVO(e.id, t.lordID, false));
          if (e.isSkinItem()) {
            O.CastleModel.smartfoxClient.sendCommandVO(new u.C2SGetCastleListVO(O.CastleModel.userData.playerID));
          }
        }
        break;
      case f.EquipableDragLocationVO.TYPE_INVENTORY:
        this.moveItem(e, this._playerInventory, this._dragInventory);
    }
  };
  CastleEquipmentData.prototype.stopDrag = function (e, t, i) {
    switch (i.locationType) {
      case f.EquipableDragLocationVO.TYPE_CRAFTING:
        this.moveItem(e, this._dragInventory, this._craftingInventory);
        break;
      case f.EquipableDragLocationVO.TYPE_SLOT:
        if (O.CastleModel.lordData.getLordByID(i.lordID)) {
          if (t != i) {
            O.CastleModel.smartfoxClient.sendCommandVO(new l.C2SEquipEquipmentVO(e.id, i.lordID, true));
            if (e.isSkinItem()) {
              O.CastleModel.smartfoxClient.sendCommandVO(new u.C2SGetCastleListVO(O.CastleModel.userData.playerID));
            }
          }
          O.CastleModel.lordData.getLordByID(i.lordID).setEquipment(e);
          this.moveItem(e, this._dragInventory, null);
        } else {
          this.moveItem(e, this._dragInventory, this._playerInventory);
        }
        break;
      case f.EquipableDragLocationVO.TYPE_INVENTORY:
        this.moveItem(e, this._dragInventory, this._playerInventory);
        break;
      case f.EquipableDragLocationVO.TYPE_SELL_SLOT:
        this.moveItem(e, this._dragInventory, null);
    }
  };
  CastleEquipmentData.prototype.returnCraftingToInventory = function () {
    this.clearCraftingInventory(this._playerInventory);
  };
  CastleEquipmentData.prototype.clearCraftingInventory = function (e) {
    if (e && this._craftingInventory != null) {
      for (var t = 0, i = this._craftingInventory; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          e.push(n);
        }
      }
    }
    this._craftingInventory = [];
  };
  CastleEquipmentData.prototype.moveItem = function (e, t, i) {
    if (t) {
      var n = s.int(t.indexOf(e));
      if (n > -1) {
        if (i) {
          i.push(t.splice(n, 1)[0]);
        } else {
          t.splice(n, 1);
        }
      }
    } else {
      i.push(e);
    }
  };
  CastleEquipmentData.prototype.createBasicEquipmentVOFromXML = function (e) {
    var t = [0, parseInt(e.slotID || "")];
    var i = E.CastleEquipmentFactory.createEquipmentVO(t);
    i.parseXML(e);
    if (i.setID > 0) {
      this.equipmentXml.getEquipmentSet(i.setID).addItem(i);
    }
    return i;
  };
  CastleEquipmentData.prototype.getEquipmentByUniqueID = function (e, t = false) {
    if (t) {
      var i = this.getEquipmentByUniqueIDFromXML(e);
      if (i) {
        return i;
      }
    }
    if (!this._uniqueItems) {
      this.initUniqueItemsAndSets();
    }
    if (this._uniqueItems.get(e)) {
      return this._uniqueItems.get(e);
    } else {
      return this.getEquipmentByUniqueIDFromXML(e);
    }
  };
  CastleEquipmentData.prototype.getEquipmentByUniqueIDFromXML = function (e) {
    var t = this._configXML.equipments;
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          if (e == parseInt(o.equipmentID || "")) {
            return this.createBasicEquipmentVOFromXML(o);
          }
        }
      }
    }
    return null;
  };
  CastleEquipmentData.prototype.getRareStringFromRareID = function (e) {
    switch (e) {
      case a.EquipmentConst.RARENESS_COMMON:
        return y.BasicEquipmentVO.RARITY_COMMON;
      case a.EquipmentConst.RARENESS_RARE:
        return y.BasicEquipmentVO.RARITY_RARE;
      case a.EquipmentConst.RARENESS_EPIC:
        return y.BasicEquipmentVO.RARITY_EPIC;
      case a.EquipmentConst.RARENESS_LEGENDARY:
        return y.BasicEquipmentVO.RARITY_LEGENDARY;
      default:
        return y.BasicEquipmentVO.RARITY_UNIQUE;
    }
  };
  Object.defineProperty(CastleEquipmentData.prototype, "isInventoryFull", {
    get: function () {
      return this._playerInventorySpace <= 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipmentData.prototype, "filledInventorySpace", {
    get: function () {
      return this._playerTotalInventorySpace - this._playerInventorySpace;
    },
    enumerable: true,
    configurable: true
  });
  CastleEquipmentData.prototype.getUniqueHerosByAlienString = function (e) {
    var t = [];
    if (this._uniqueItems != null) {
      for (var i = 0, n = Array.from(this._uniqueItems.keys()); i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && S.instanceOfClass(this._uniqueItems.get(o), "CastleHeroVO") && this._uniqueItems.get(o).alienString == e) {
          t.push(this._uniqueItems.get(o));
        }
      }
    }
    return t;
  };
  Object.defineProperty(CastleEquipmentData.prototype, "relicXml", {
    get: function () {
      return this._relicXml;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipmentData.prototype, "equipmentXml", {
    get: function () {
      return this._equipmentXml;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipmentData.prototype, "uniqueItems", {
    get: function () {
      return this._uniqueItems;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipmentData.prototype, "playerInventory", {
    get: function () {
      return this._playerInventory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipmentData.prototype, "craftingInventory", {
    get: function () {
      return this._craftingInventory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipmentData.prototype, "dragInventory", {
    get: function () {
      return this._dragInventory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipmentData.prototype, "favoriteEquipmentIdsList", {
    get: function () {
      return this._favoriteEquipmentIdsList;
    },
    set: function (e) {
      this._favoriteEquipmentIdsList = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipmentData.prototype, "favoriteGemsIdsList", {
    get: function () {
      return this._favoriteGemsIdsList;
    },
    set: function (e) {
      this._favoriteGemsIdsList = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipmentData.prototype, "favoriteRelicGemsIdsList", {
    get: function () {
      return this._favoriteRelicGemsIdsList;
    },
    set: function (e) {
      this._favoriteRelicGemsIdsList = e;
    },
    enumerable: true,
    configurable: true
  });
  CastleEquipmentData.prototype.isEQFav = function (e) {
    return this._favoriteEquipmentIdsList.indexOf(e) >= 0;
  };
  CastleEquipmentData.prototype.isGemFav = function (e, t) {
    if (t) {
      return this._favoriteRelicGemsIdsList.indexOf(e) >= 0;
    } else {
      return this._favoriteGemsIdsList.indexOf(e) >= 0;
    }
  };
  CastleEquipmentData.prototype.handleGemInserted = function (e) {
    if (S.instanceOfClass(e, "CastleGemVO")) {
      var t = false;
      var i = undefined;
      for (var n = 0; n < O.CastleModel.gemData.playerInventory.length; n++) {
        i = O.CastleModel.gemData.playerInventory[n];
        if (e.id == i.id && i.isFavorite) {
          t = true;
          break;
        }
      }
      if (!t) {
        this._favoriteGemsIdsList.splice(this._favoriteGemsIdsList.indexOf(e.id, 0), 1);
      }
    } else if (S.instanceOfClass(e, "RelicGemVO")) {
      this.favoriteRelicGemsIdsList.splice(this._favoriteRelicGemsIdsList.indexOf(e.id, 0), 1);
    }
  };
  Object.defineProperty(CastleEquipmentData.prototype, "isEquiqInProgress", {
    get: function () {
      return this._isEquipRunning;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipmentData.prototype, "inventorySpace", {
    get: function () {
      return this._playerInventorySpace;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipmentData.prototype, "playerTotalInventorySpace", {
    get: function () {
      return this._playerTotalInventorySpace;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipmentData.prototype, "hasNewRelics", {
    get: function () {
      return this._hasNewRelics;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipmentData.prototype, "newRelicEquipmentsList", {
    get: function () {
      return this._newRelicEquipmentsList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipmentData.prototype, "newRelicGemsList", {
    get: function () {
      return this._newRelicGemsList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipmentData.prototype, "showEquipmentIds", {
    get: function () {
      return this._showEquipmentIds;
    },
    set: function (e) {
      this._showEquipmentIds = e;
    },
    enumerable: true,
    configurable: true
  });
  CastleEquipmentData.prototype.setRelicEnchanterBuildingData = function (e) {
    if (e) {
      this._hasRelicEnchanter = !!e && e.objectType == g.IsoObjectEnum.RELIC_ENCHANTER && e.buildingState.isFunctionally;
      if (C.Iso.data.areaData.isMyHomeCastle) {
        this._relicFragmentBoost = e.relicFragmentBoost;
      }
    }
  };
  Object.defineProperty(CastleEquipmentData.prototype, "relicFragmentBoost", {
    get: function () {
      return this._relicFragmentBoost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipmentData.prototype, "hasRelicEnchanter", {
    get: function () {
      return this._hasRelicEnchanter;
    },
    enumerable: true,
    configurable: true
  });
  return CastleEquipmentData;
}(m.CastleBasicData);
exports.CastleEquipmentData = v;
o.classImplementsInterfaces(v, "IUpdatable", "ICastleBasicData");
var S = require("./1.js");