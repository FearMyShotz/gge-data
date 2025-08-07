Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./5.js");
var s = require("./6.js");
var r = require("./5734.js");
var l = require("./5735.js");
var c = require("./5736.js");
var u = require("./5737.js");
var d = require("./233.js");
var p = require("./15.js");
var h = require("./72.js");
var g = require("./380.js");
var C = require("./4.js");
var _ = require("./610.js");
var m = require("./1312.js");
var f = require("./728.js");
var O = require("./5738.js");
var E = require("./5739.js");
var y = function (e) {
  function CastleGemData() {
    var t = e.call(this) || this;
    t._numberOfGemColors = 0;
    t._playerInventory = [];
    t._extractOldGem = false;
    t._playerInventorySpace = 0;
    t._playerTotalInventorySpace = 0;
    t._relicGemsInventory = [];
    t._relicGemsInventorySpace = 0;
    t._playerInventorySpace = 0;
    t._relicGemsInventorySpace = 0;
    t._playerTotalInventorySpace = 0;
    return t;
  }
  n.__extends(CastleGemData, e);
  CastleGemData.prototype.parseXML = function (e) {
    this.parseGemLevels(e);
    this.parseGems(e);
    this.parseGemColors(e);
    this.createRandomGems();
  };
  CastleGemData.prototype.parseGemColors = function (e) {
    this._gemColors = new Map();
    this._numberOfGemColors = 0;
    var t = e.gemColors;
    if (t) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          var a = new O.GemColorVO();
          a.parseXml(o);
          this._gemColors.set(a.id, a);
          this._numberOfGemColors++;
        }
      }
    }
  };
  CastleGemData.prototype.createRandomGems = function () {
    for (var e = s.int(a.GemConst.MIN_GEM_LEVEL); e <= a.GemConst.MAX_GEM_LEVEL; e++) {
      var t = this.getLevelInfo(e);
      var i = new E.RandomGemVO(t);
      this.gems.set(-i.level, i);
    }
  };
  CastleGemData.prototype.parseGemLevels = function (e) {
    this.levelInfos = new Map();
    this.levelInfos.set(0, new m.CastleGemLevelInfoVO());
    var t;
    var i = e.gemlevels;
    if (i != null) {
      for (var n = 0, o = i; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          (t = new m.CastleGemLevelInfoVO()).parseXML(a);
          this.levelInfos.set(t.levelID, t);
        }
      }
    }
  };
  CastleGemData.prototype.parseGems = function (e) {
    this.gems = new Map();
    var t;
    var i = e.gems;
    if (i != null) {
      for (var n = 0, o = i; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          t = new f.CastleGemVO(a);
          this.gems.set(t.id, t);
          if (t.isUnique && t.setID > 0) {
            t.setVO.addItem(t);
          }
        }
      }
    }
  };
  CastleGemData.prototype.parse_GEC = function (e) {
    this.updateInventory(e);
    this.notifyOnInvetoryChange();
  };
  CastleGemData.prototype.parseGGM = function (e) {
    this._playerInventory = [];
    this._craftingInventory = [];
    this._craftingCenterInventory = [];
    this._dragInventory = [];
    this._relicGemsInventory = [];
    this._relicGemsDragInventory = [];
    this.updateInventory(e.GEM);
    this.updateRelicInventory(e.RGEM);
    this.notifyOnInvetoryChange();
  };
  CastleGemData.prototype.parse_FRC = function (e) {
    if (e) {
      var t;
      if (e.RGEM) {
        var i = new _.RelicGemVO();
        i.parseServerObject(e.RGEM);
        this._relicGemsInventory.push(i);
        t = i;
      } else if (e.GEM) {
        t = this.getGemVO(s.int(e.GEM));
        this._playerInventory.push(t);
      }
      this.controller.dispatchEvent(new d.CastleGemEvent(d.CastleGemEvent.ALLIANCE_FORGE_GEMCRAFT_EXECUTED, [t]));
    }
  };
  CastleGemData.prototype.updateInventory = function (e) {
    var t;
    var i = 0;
    var n = 0;
    var o = 0;
    var a = 0;
    for (var r = 0; r < e.length; r++) {
      i = s.int(e[r][0]);
      n = s.int(e[r][1]);
      t = this.getGemVO(i);
      if (n > 0) {
        for (a = 0; a < n; a++) {
          this._playerInventory.push(t);
        }
      } else if (n < 0 && (o = s.int(this._playerInventory.indexOf(t))) > -1) {
        this._playerInventory.splice(o, -n);
      }
    }
    this.updateInventorySpace();
  };
  CastleGemData.prototype.getGemVO = function (e) {
    if (o.DictionaryUtil.containsKey(this.gems, e)) {
      return this.gems.get(e);
    } else {
      return null;
    }
  };
  CastleGemData.prototype.getLevelInfo = function (e) {
    if (o.DictionaryUtil.containsKey(this.levelInfos, e)) {
      return this.levelInfos.get(e);
    } else {
      return null;
    }
  };
  Object.defineProperty(CastleGemData.prototype, "playerInventory", {
    get: function () {
      return this._playerInventory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemData.prototype, "craftingInventory", {
    get: function () {
      return this._craftingInventory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemData.prototype, "craftingCenterInventory", {
    get: function () {
      return this._craftingCenterInventory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemData.prototype, "dragInventory", {
    get: function () {
      return this._dragInventory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemData.prototype, "centerGem", {
    get: function () {
      if (this._craftingCenterInventory.length > 0) {
        return this._craftingCenterInventory[0];
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleGemData.prototype.bindGem = function (e, t, i, n) {
    if (t) {
      this._boundGem = e;
      this._targetEquipment = t;
      this._extractOldGem = n;
      C.CastleModel.smartfoxClient.sendCommandVO(new r.C2SBindGem(e.id, t.id, i, n, b.instanceOfClass(e, "RelicGemVO")));
    }
  };
  CastleGemData.prototype.gemBoundToEquipmentSuccess = function () {
    if (this._targetEquipment) {
      if (this._extractOldGem && this._targetEquipment.gemVO) {
        if (b.instanceOfClass(this._targetEquipment.gemVO, "RelicGemVO")) {
          this.relicGemsInventory.push(this._targetEquipment.gemVO);
        } else {
          this._playerInventory.push(this._targetEquipment.gemVO);
        }
      }
      this._targetEquipment.gemVO = this._boundGem;
      this.notifyOnInvetoryChange();
    }
  };
  Object.defineProperty(CastleGemData.prototype, "isInventoryFull", {
    get: function () {
      return this._playerInventorySpace <= 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemData.prototype, "inventorySpace", {
    get: function () {
      return this._playerInventorySpace;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemData.prototype, "playerTotalInventorySpace", {
    get: function () {
      return this._playerTotalInventorySpace;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemData.prototype, "filledInventorySpace", {
    get: function () {
      return this._playerTotalInventorySpace - this._playerInventorySpace;
    },
    enumerable: true,
    configurable: true
  });
  CastleGemData.prototype.parse_CGE = function (e) {
    if (e.S == 1) {
      if (!this._craftingCenterInventory[0]) {
        return;
      }
      var t = this.getGemVO(this._craftingCenterInventory[0].upgradeId);
      this._playerInventory.push(t);
      this.clearCraftingInventory(true, null);
      this.dispatchEvent(new d.CastleGemEvent(d.CastleGemEvent.GEM_CRAFTING_SUCCESS, [t]));
    } else {
      this.clearCraftingInventory(false, null);
      this.dispatchEvent(new d.CastleGemEvent(d.CastleGemEvent.GEM_CRAFTING_FAILURE, null));
    }
  };
  CastleGemData.prototype.notifyOnInvetoryChange = function () {
    this.dispatchEvent(new d.CastleGemEvent(d.CastleGemEvent.GEM_INVENTORY_UPDATE, this._playerInventory));
  };
  CastleGemData.prototype.craftGem = function (e) {
    if (this._craftingCenterInventory[0]) {
      C.CastleModel.smartfoxClient.sendCommandVO(new l.C2SCraftGemVO(this._craftingCenterInventory[0].id, this.extractGemIDs(this._craftingInventory), e));
    }
  };
  CastleGemData.prototype.cgeError = function () {
    this.dispatchEvent(new d.CastleGemEvent(d.CastleGemEvent.GEM_CRAFTING_SERVER_ERROR, null));
  };
  CastleGemData.prototype.extractGemIDs = function (e) {
    var t = [];
    if (e != null) {
      for (var i = 0, n = e; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          t.push(o.id);
        }
      }
    }
    return t;
  };
  CastleGemData.prototype.sell = function (e, t = -1) {
    C.CastleModel.smartfoxClient.sendCommandVO(new u.C2SSellGemVO(e.id, b.instanceOfClass(e, "RelicGemVO"), t));
  };
  CastleGemData.prototype.extractGem = function (e, t) {
    if (e) {
      this._targetEquipment = e;
      C.CastleModel.smartfoxClient.sendCommandVO(new c.C2SExtractGemVO(e.id, t));
    }
  };
  CastleGemData.prototype.gemExtractionSuccess = function () {
    if (this._targetEquipment) {
      if (b.instanceOfClass(this._targetEquipment.gemVO, "RelicGemVO")) {
        this._relicGemsInventory.push(this._targetEquipment.gemVO);
      } else {
        this._playerInventory.push(this._targetEquipment.gemVO);
      }
      this._targetEquipment.gemVO = null;
      this.updateInventorySpace();
      this.notifyOnInvetoryChange();
    }
  };
  CastleGemData.prototype.parse_SGE = function () {
    this.dispatchEvent(new d.CastleGemEvent(d.CastleGemEvent.GEM_SOLD, [this._gemToSell]));
  };
  CastleGemData.prototype.startDrag = function (e, t) {
    switch (t.locationType) {
      case g.EquipableDragLocationVO.TYPE_CRAFTING:
        this.moveItem(e, this._craftingInventory, this._dragInventory);
        break;
      case g.EquipableDragLocationVO.TYPE_CRAFTING_CENTER:
        this.moveItem(e, this._craftingCenterInventory, this._dragInventory);
        break;
      case g.EquipableDragLocationVO.TYPE_INVENTORY:
        this.moveItem(e, this._playerInventory, this._dragInventory);
    }
  };
  CastleGemData.prototype.stopDrag = function (e, t, i) {
    switch (i.locationType) {
      case g.EquipableDragLocationVO.TYPE_CRAFTING:
        this.moveItem(e, this._dragInventory, this._craftingInventory);
        break;
      case g.EquipableDragLocationVO.TYPE_CRAFTING_CENTER:
        this.moveItem(e, this._dragInventory, this._craftingCenterInventory);
        break;
      case g.EquipableDragLocationVO.TYPE_SLOT:
        this.moveItem(e, this._dragInventory, null);
        break;
      case g.EquipableDragLocationVO.TYPE_INVENTORY:
        this.moveItem(e, this._dragInventory, this._playerInventory);
        break;
      case g.EquipableDragLocationVO.TYPE_SELL_SLOT:
        this.moveItem(e, this._dragInventory, null);
    }
  };
  CastleGemData.prototype.returnCraftingToInventory = function () {
    this.clearCraftingInventory(true, this._playerInventory);
  };
  CastleGemData.prototype.clearCraftingInventory = function (e, t) {
    if (t) {
      if (this._craftingInventory != null) {
        for (var i = 0, n = this._craftingInventory; i < n.length; i++) {
          var o = n[i];
          if (o !== undefined) {
            t.push(o);
          }
        }
      }
      if (e && this._craftingCenterInventory != null) {
        for (var a = 0, s = this._craftingCenterInventory; a < s.length; a++) {
          var r = s[a];
          if (r !== undefined) {
            t.push(r);
          }
        }
      }
    }
    if (e) {
      this._craftingCenterInventory = [];
    }
    this._craftingInventory = [];
  };
  CastleGemData.prototype.moveItem = function (e, t, i) {
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
  CastleGemData.prototype.parse_ESL = function (e) {
    if (e) {
      this._playerInventorySpace = s.int(e.G);
      this._playerTotalInventorySpace = s.int(e.TG);
      this.updateInventorySpace();
    }
  };
  Object.defineProperty(CastleGemData.prototype, "controller", {
    get: function () {
      return p.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemData.prototype, "gemColors", {
    get: function () {
      return this._gemColors;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemData.prototype, "numberOfGemColors", {
    get: function () {
      return this._numberOfGemColors;
    },
    enumerable: true,
    configurable: true
  });
  CastleGemData.prototype.updateInventorySpace = function () {
    this._playerInventorySpace = s.int(C.CastleModel.gemData.playerTotalInventorySpace - this._playerInventory.length - this._relicGemsInventory.length);
    this.controller.dispatchEvent(new d.CastleGemEvent(d.CastleGemEvent.INVENTORY_SPACE_LEFT));
  };
  Object.defineProperty(CastleGemData.prototype, "relicGemsInventory", {
    get: function () {
      return this._relicGemsInventory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemData.prototype, "relicDragInventory", {
    get: function () {
      return this._relicGemsDragInventory;
    },
    enumerable: true,
    configurable: true
  });
  CastleGemData.prototype.getRelicGem = function (e) {
    if (this.relicGemsInventory != null) {
      for (var t = 0, i = this.relicGemsInventory; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.id == e) {
          return n;
        }
      }
    }
    return null;
  };
  CastleGemData.prototype.updateRelicInventory = function (e) {
    if (e) {
      if (e != null) {
        for (var t = 0, i = e; t < i.length; t++) {
          var n = i[t];
          if (n !== undefined) {
            var o = new _.RelicGemVO();
            o.parseServerObject(n);
            this._relicGemsInventory.push(o);
          }
        }
      }
      this.updateInventorySpace();
    }
  };
  CastleGemData.prototype.startRelicDrag = function (e, t) {
    this.moveRelicItem(e, this._relicGemsInventory, this._relicGemsDragInventory);
  };
  CastleGemData.prototype.stopRelicDrag = function (e, t, i) {
    switch (i.locationType) {
      case g.EquipableDragLocationVO.TYPE_SLOT:
        this.moveRelicItem(e, this._relicGemsDragInventory, null);
        break;
      case g.EquipableDragLocationVO.TYPE_INVENTORY:
        this.moveRelicItem(e, this._relicGemsDragInventory, this._relicGemsInventory);
        break;
      case g.EquipableDragLocationVO.TYPE_SELL_SLOT:
        this.moveRelicItem(e, this._relicGemsDragInventory, null);
    }
  };
  CastleGemData.prototype.moveRelicItem = function (e, t, i) {
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
  return CastleGemData;
}(h.CastleEventDispatcher);
exports.CastleGemData = y;
var b = require("./1.js");