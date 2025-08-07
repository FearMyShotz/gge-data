Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./4.js");
var u = require("./728.js");
var d = function () {
  function FillCraftingGemStrategy() {}
  FillCraftingGemStrategy.prototype.fillCraftingSlots = function (e, t, i) {
    this.resultSlot = t;
    var n = [];
    var a = i.filteredInventory;
    var r = l.int(s.GemConst.MAX_GEM_LEVEL);
    for (var c = 0; c < e.length; c++) {
      if (e[c].gemVO) {
        if (e[c].gemVO.level < r) {
          r = l.int(e[c].gemVO.level);
        }
      } else {
        n.push(e[c]);
      }
    }
    if (t.gemVO) {
      r = l.int(t.gemVO.level);
      this.fillByResultSlot(n, a, r);
    } else {
      n.reverse();
      if (o.instanceOfClass(a[a.length - 1], "CastleGemVO") && r == s.GemConst.MAX_GEM_LEVEL) {
        r = l.int(a.length > 0 ? Math.min(a[a.length - 1].level, s.GemConst.MAX_GEM_LEVEL - 1) : s.GemConst.MIN_GEM_LEVEL);
      }
      this.fillByCraftingSlots(n, a, r);
    }
  };
  FillCraftingGemStrategy.prototype.fillByResultSlot = function (e, t, i) {
    if (!this.tryFillingWithLevelRange(e, t, i, s.GemConst.MAX_GEM_LEVEL)) {
      this.showError();
    }
  };
  FillCraftingGemStrategy.prototype.fillByCraftingSlots = function (e, t, i) {
    if (!this.tryFillingWithLevelRange(e, t, i, s.GemConst.MAX_GEM_LEVEL)) {
      if (i > s.GemConst.MIN_GEM_LEVEL) {
        this.fillByCraftingSlots(e, t, i - 1);
      } else {
        this.showError();
      }
    }
  };
  FillCraftingGemStrategy.prototype.tryFillingWithLevelRange = function (e, t, i, n) {
    var o = t.filter(this.getFilterByLevel(i, n));
    o.sort(this.bindFunction(this.sortByUpgradability));
    if (o.length >= e.length) {
      for (var a = 0; a < e.length; a++) {
        var s = o[o.length - (a + 1)];
        if (e[a] == this.resultSlot && (s.level > i || !s.isUpgradable)) {
          return false;
        }
        this.fillSlot(e[a], s);
      }
      return true;
    }
    return false;
  };
  FillCraftingGemStrategy.prototype.sortByUpgradability = function (e, t) {
    if (e.level != t.level) {
      return t.level - e.level;
    } else if (e.isUpgradable && !t.isUpgradable) {
      return 1;
    } else if (!e.isUpgradable && t.isUpgradable) {
      return -1;
    } else {
      return 0;
    }
  };
  FillCraftingGemStrategy.prototype.getFilterByLevel = function (e, t) {
    return function (i) {
      var n = [];
      for (var o = 1; o < arguments.length; o++) {
        n[o - 1] = arguments[o];
      }
      var a = i instanceof u.CastleGemVO ? i : null;
      return a && a.level >= e && a.level <= t && !a.isUnique && !a.isFavorite;
    };
  };
  FillCraftingGemStrategy.prototype.fillSlot = function (e, t) {
    e.gemVO = t;
    e.mc_itemHolder.addChild(g.CastleGemRenderer.renderAsset(t, null, null, true));
    e.mc_itemHolder.scaleX = e.mc_itemHolder.scaleY = 1.1;
    if (e == this.resultSlot) {
      c.CastleModel.gemData.moveItem(t, c.CastleModel.gemData.playerInventory, c.CastleModel.gemData.craftingCenterInventory);
    } else {
      c.CastleModel.gemData.moveItem(t, c.CastleModel.gemData.playerInventory, c.CastleModel.gemData.craftingInventory);
    }
  };
  FillCraftingGemStrategy.prototype.showError = function () {
    p.CastleDialogHandler.getInstance().registerDefaultDialogs(h.CastleStandardOkDialog, new n.BasicStandardOkDialogProperties(r.Localize.text("generic_alert_information"), r.Localize.text("dialog_gemCrafting_autofillError")));
  };
  return FillCraftingGemStrategy;
}();
exports.FillCraftingGemStrategy = d;
var p = require("./9.js");
var h = require("./38.js");
var g = require("./248.js");
a.classImplementsInterfaces(d, "IFillCraftingStrategy");