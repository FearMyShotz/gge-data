Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.MouseEvent;
var o = function () {
  function CastleSendGoodsComponent(e, t, i = null, o = false) {
    this.tabIndex = 0;
    this._hideTabs = false;
    this._resourceSelectors = [];
    this.disp = e;
    this.callBack = i;
    this._sendGoodsInfo = t;
    this._hideTabs = o;
    e.addEventListener(n.CLICK, this.bindFunction(this.onClick));
    E.ButtonHelper.initBasicButton(e.btn_tabClassic);
    E.ButtonHelper.initBasicButton(e.btn_tabSpecial);
    E.ButtonHelper.initBasicButton(e.btn_tabMead);
    this.disp.btn_tabClassic.toolTipText = "normalResource";
    this.disp.btn_tabSpecial.toolTipText = "kingdomResource";
    this.disp.btn_tabMead.toolTipText = "meadResource";
    CastleSendGoodsComponent.resListClassic = [r.CastleResourceCollectorComponent.WOOD, r.CastleResourceCollectorComponent.STONE, r.CastleResourceCollectorComponent.FOOD];
    CastleSendGoodsComponent.resCollectableEnumsClassic = [a.CollectableEnum.WOOD, a.CollectableEnum.STONE, a.CollectableEnum.FOOD];
    CastleSendGoodsComponent.resListSpecial = [r.CastleResourceCollectorComponent.COAL, r.CastleResourceCollectorComponent.OIL, r.CastleResourceCollectorComponent.GLASS, r.CastleResourceCollectorComponent.IRON];
    CastleSendGoodsComponent.resCollectableEnumsSpecial = [a.CollectableEnum.COAL, a.CollectableEnum.OIL, a.CollectableEnum.GLASS, a.CollectableEnum.IRON];
    CastleSendGoodsComponent.resListMead = [r.CastleResourceCollectorComponent.HONEY, r.CastleResourceCollectorComponent.MEAD, r.CastleResourceCollectorComponent.BEEF];
    CastleSendGoodsComponent.resCollectableEnumsMead = [a.CollectableEnum.HONEY, a.CollectableEnum.MEAD, a.CollectableEnum.BEEF];
    CastleSendGoodsComponent._specialLevelRestrictions = [c.ClientConstLevelRestrictions.getResourceMinLevelByKingdomID(C.WorldIce.KINGDOM_ID), c.ClientConstLevelRestrictions.getResourceMinLevelByKingdomID(g.WorldDessert.KINGDOM_ID), c.ClientConstLevelRestrictions.getResourceMinLevelByKingdomID(_.WorldVolcano.KINGDOM_ID), c.ClientConstLevelRestrictions.getResourceMinLevelByKingdomID(p.WorldClassic.KINGDOM_ID)];
    CastleSendGoodsComponent.resLists = [CastleSendGoodsComponent.resListClassic, CastleSendGoodsComponent.resListSpecial, CastleSendGoodsComponent.resListMead];
    CastleSendGoodsComponent.resCollLists = [CastleSendGoodsComponent.resCollectableEnumsClassic, CastleSendGoodsComponent.resCollectableEnumsSpecial, CastleSendGoodsComponent.resCollectableEnumsMead];
    this.setTabVisibility();
    this.setCategory(0);
  }
  CastleSendGoodsComponent.prototype.setTabVisibility = function () {
    var e = O.CastleModel.userData.userLevel >= d.PlayerConst.LEVEL_CAP;
    var t = this._sendGoodsInfo.targetObject ? this._sendGoodsInfo.targetObject.ownerInfo.playerLevel : 0;
    var i = this._sendGoodsInfo.targetObject ? this._sendGoodsInfo.targetObject.ownerInfo.playerLegendLevel : O.CastleModel.userData.userLegendLevel;
    var n = !this._sendGoodsInfo.targetObject || t >= d.PlayerConst.LEVEL_CAP;
    var o = !this._hideTabs && !this.isBoosterArea && i >= O.CastleModel.areaData.activeStorage.minHoneyMeadLegendLevel;
    this.disp.btn_tabMead.visible = O.CastleModel.userData.isLegend && o;
    this.disp.btn_tabSpecial.visible = this.disp.btn_tabClassic.visible = O.CastleModel.userData.isLegend && (o || !this.isBoosterArea && !this._hideTabs && e && n);
    this.disp.mc_deco.gotoAndStop(this.disp.btn_tabSpecial.visible ? 1 : 2);
  };
  CastleSendGoodsComponent.prototype.initResourceCollectors = function () {
    var e = new Map();
    if (this._resourceSelectors != null) {
      for (var t = 0, i = this._resourceSelectors; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          e.set(CastleSendGoodsComponent.RES + n.type, n.selectionSlider.selectedIndex);
        }
      }
    }
    this.destroyOldSelectors();
    var o = CastleSendGoodsComponent.resLists[this.tabIndex];
    var a = CastleSendGoodsComponent.resCollLists[this.tabIndex];
    var s = m.int(this.isBoosterArea ? 2 : this.tabIndex == 1 ? o.length - CastleSendGoodsComponent.hiddenSpecialResources() : o.length);
    this.setVisibility(s);
    for (var c = 0; c < s; c++) {
      var d;
      var p = "cant_send_Resource";
      if (u.instanceOfClass(this._sendGoodsInfo, "CastleSendGoodsKingdomVO")) {
        var h = this._sendGoodsInfo;
        var g = m.int(h.targetResources.getItemByType(a[c]).amount);
        var C = m.int(h.storageSpace.getItemByType(a[c]).amount);
        d = new l.CastleRessourceCollectorSendToKingdomComponent(this.subDisp["mc_" + c], h.taxRate, g, C, this.subDisp["info_storage" + c], h.isSubscriptionBuffed);
        p = g >= C ? "dialog_kingdom_sendRes_targetStorageFull_tooltip" : "dialog_kingdom_sendRes_sourceStorageEmpty_tooltip";
      } else {
        d = new r.CastleResourceCollectorComponent(this.subDisp["mc_" + c]);
        if (this.getSendableAmountByType(a[c]) <= 0) {
          p = "dialog_kingdom_sendRes_sourceStorageEmpty_tooltip";
        }
      }
      this._resourceSelectors.push(d);
      d.initComponent(Math.min(this._sendGoodsInfo.marketCarriageCapacity, this.getSendableAmountByType(a[c])), o[c], 61 + c, p);
      this.subDisp["mc_" + c].mc_icon.mouseChildren = false;
      if (e.has(CastleSendGoodsComponent.RES + d.type)) {
        d.selectionSlider.setSelectedIndex(e.get(CastleSendGoodsComponent.RES + d.type));
        d.setAmountText();
      }
    }
    this.applySpecialLevelRestrictions();
    this.onSliderChanged();
    this.registerListeners();
    if (this.bindFunction(this.callBack)) {
      this.callBack();
    }
  };
  CastleSendGoodsComponent.prototype.getSendableAmountByType = function (e) {
    return m.int(this._sendGoodsInfo.availableResources.getItemByType(e).amount);
  };
  CastleSendGoodsComponent.hiddenSpecialResources = function () {
    var e = 0;
    for (var t = 0; t < CastleSendGoodsComponent.resListSpecial.length; t++) {
      if (O.CastleModel.userData.userLevel < CastleSendGoodsComponent._specialLevelRestrictions[t]) {
        e += 1;
      }
    }
    return e;
  };
  CastleSendGoodsComponent.prototype.onClick = function (e) {
    if (E.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.disp.btn_tabClassic:
          this.setCategory(0);
          break;
        case this.disp.btn_tabSpecial:
          this.setCategory(1);
          break;
        case this.disp.btn_tabMead:
          this.setCategory(2);
      }
    }
  };
  CastleSendGoodsComponent.prototype.applySpecialLevelRestrictions = function () {
    for (var e = 0; e < this._resourceSelectors.length; e++) {
      if (this.tabIndex == 1) {
        this._resourceSelectors[e].enableComponent(!this._sendGoodsInfo.targetObject || this._sendGoodsInfo.targetObject.ownerInfo.playerLevel >= CastleSendGoodsComponent._specialLevelRestrictions[e]);
      } else {
        this._resourceSelectors[e].enableComponent(true);
      }
    }
  };
  CastleSendGoodsComponent.prototype.destroyOldSelectors = function () {
    this.removeListeners();
    if (this._resourceSelectors != null) {
      for (var e = 0, t = this._resourceSelectors; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.destroy();
        }
      }
    }
    this._resourceSelectors = [];
  };
  CastleSendGoodsComponent.prototype.setCategory = function (e) {
    this.tabIndex = e;
    this.disp.btn_tabClassic.gotoAndStop(e == 0 ? 1 : 2);
    this.disp.btn_tabSpecial.gotoAndStop(e == 1 ? 1 : 2);
    this.disp.btn_tabMead.gotoAndStop(e == 2 ? 1 : 2);
    this.initResourceCollectors();
  };
  CastleSendGoodsComponent.prototype.setVisibility = function (e) {
    this.subDisp = this.disp["mc_selector_" + CastleSendGoodsComponent.NUMBERS[e - 1]];
    for (var t = 0; t < CastleSendGoodsComponent.NUMBERS.length; t++) {
      this.disp["mc_selector_" + CastleSendGoodsComponent.NUMBERS[t]].visible = t == e - 1;
    }
  };
  CastleSendGoodsComponent.prototype.registerListeners = function () {
    if (this._resourceSelectors != null) {
      for (var e = 0, t = this._resourceSelectors; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.selectionSlider.addEventListener(f.SliderEvent.VALUE_CHANGED, this.bindFunction(this.onSliderChanged));
        }
      }
    }
  };
  CastleSendGoodsComponent.prototype.removeListeners = function () {
    if (this._resourceSelectors != null) {
      for (var e = 0, t = this._resourceSelectors; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.selectionSlider.removeEventListener(f.SliderEvent.VALUE_CHANGED, this.bindFunction(this.onSliderChanged));
          i.resetValue();
        }
      }
    }
  };
  CastleSendGoodsComponent.prototype.onSliderChanged = function (e = null) {
    var t;
    var i = e ? e.target : null;
    var n = [];
    var o = 0;
    var a = 0;
    var s = 0;
    for (var r = 0, l = this._resourceSelectors; r < l.length; r++) {
      if (t = l[r]) {
        o += t.getSelectedAmount();
        if (i != t.selectionSlider) {
          n.push(t);
          s += t.selectionSlider.percentValue;
        }
      }
    }
    if ((a = o - this._sendGoodsInfo.marketCarriageCapacity) > 0) {
      o = 0;
      for (var c = 0; c < n.length; c++) {
        if (n[c]) {
          o += m.int(n[c].getSelectedAmount());
          n[c].selectionSlider.setSelectedIndex(n[c].selectionSlider.selectedIndex - Math.round(a / s * n[c].selectionSlider.percentValue), false);
        }
      }
      o = 0;
      s = 0;
      for (var u = 0, d = this._resourceSelectors; u < d.length; u++) {
        if (t = d[u]) {
          o += t.getSelectedAmount();
          if (i != t.selectionSlider) {
            n.push(t);
            s += t.selectionSlider.percentValue;
          }
        }
      }
      if ((a = o - this._sendGoodsInfo.marketCarriageCapacity) != 0) {
        for (var p = 0, h = this._resourceSelectors; p < h.length; p++) {
          if (t = h[p]) {
            o += t.getSelectedAmount();
            if (i != t.selectionSlider) {
              n.push(t);
              s += t.selectionSlider.percentValue;
            }
          }
        }
        n[0].selectionSlider.setSelectedIndex(n[0].selectionSlider.selectedIndex - a, false);
      }
    }
    if (this._resourceSelectors != null) {
      for (var g = 0, C = this._resourceSelectors; g < C.length; g++) {
        var _ = C[g];
        if (_ !== undefined) {
          _.setAmountText();
        }
      }
    }
    if (this.bindFunction(this.callBack)) {
      this.callBack();
    }
  };
  CastleSendGoodsComponent.prototype.rewardList = function () {
    var e = [];
    var t = CastleSendGoodsComponent.resCollLists[this.tabIndex];
    for (var i = 0; i < this._resourceSelectors.length; i++) {
      e.push(s.CollectableHelper.createVO(t[i], this._resourceSelectors[i].getSelectedAmount()));
    }
    return e;
  };
  CastleSendGoodsComponent.prototype.changeCastle = function (e) {
    this._sendGoodsInfo = e;
    this.initResourceCollectors();
    this.setCategory(0);
    this.setTabVisibility();
  };
  CastleSendGoodsComponent.prototype.getSelectedSum = function () {
    var e = 0;
    if (this._resourceSelectors != null) {
      for (var t = 0, i = this._resourceSelectors; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          e += n.getSelectedAmount();
        }
      }
    }
    return e;
  };
  Object.defineProperty(CastleSendGoodsComponent.prototype, "selectedIndices", {
    get: function () {
      var e = [];
      if (this._resourceSelectors != null) {
        for (var t = 0, i = this._resourceSelectors; t < i.length; t++) {
          var n = i[t];
          if (n !== undefined) {
            e.push(n.selectionSlider.selectedIndex);
          }
        }
      }
      return e;
    },
    set: function (e) {
      for (var t = 0; t < this._resourceSelectors.length; t++) {
        this._resourceSelectors[t].selectionSlider.setSelectedIndex(e[t]);
        this._resourceSelectors[t].setAmountText();
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleSendGoodsComponent.prototype.hide = function () {
    this.destroyOldSelectors();
    this.disp.removeEventListener(n.CLICK, this.bindFunction(this.onClick));
  };
  Object.defineProperty(CastleSendGoodsComponent.prototype, "isBoosterArea", {
    get: function () {
      return !!this._sendGoodsInfo.targetObject && (this._sendGoodsInfo.targetObject.areaType == h.WorldConst.AREA_TYPE_MONUMENT || this._sendGoodsInfo.targetObject.areaType == h.WorldConst.AREA_TYPE_LABORATORY);
    },
    enumerable: true,
    configurable: true
  });
  CastleSendGoodsComponent.__initialize_static_members = function () {
    CastleSendGoodsComponent.NUMBERS = ["single", "dual", "triple", "quad"];
    CastleSendGoodsComponent.RES = "RES";
    CastleSendGoodsComponent.resListClassic = [r.CastleResourceCollectorComponent.WOOD, r.CastleResourceCollectorComponent.STONE, r.CastleResourceCollectorComponent.FOOD];
    CastleSendGoodsComponent.resCollectableEnumsClassic = [a.CollectableEnum.WOOD, a.CollectableEnum.STONE, a.CollectableEnum.FOOD];
    CastleSendGoodsComponent.resListMead = [r.CastleResourceCollectorComponent.HONEY, r.CastleResourceCollectorComponent.MEAD, r.CastleResourceCollectorComponent.BEEF];
    CastleSendGoodsComponent.resCollectableEnumsMead = [a.CollectableEnum.HONEY, a.CollectableEnum.MEAD, a.CollectableEnum.BEEF];
    CastleSendGoodsComponent.resListSpecial = [r.CastleResourceCollectorComponent.COAL, r.CastleResourceCollectorComponent.OIL, r.CastleResourceCollectorComponent.GLASS, r.CastleResourceCollectorComponent.IRON];
    CastleSendGoodsComponent.resCollectableEnumsSpecial = [a.CollectableEnum.COAL, a.CollectableEnum.OIL, a.CollectableEnum.GLASS, a.CollectableEnum.IRON];
    CastleSendGoodsComponent._specialLevelRestrictions = [c.ClientConstLevelRestrictions.getResourceMinLevelByKingdomID(C.WorldIce.KINGDOM_ID), c.ClientConstLevelRestrictions.getResourceMinLevelByKingdomID(g.WorldDessert.KINGDOM_ID), c.ClientConstLevelRestrictions.getResourceMinLevelByKingdomID(_.WorldVolcano.KINGDOM_ID), c.ClientConstLevelRestrictions.getResourceMinLevelByKingdomID(p.WorldClassic.KINGDOM_ID)];
  };
  return CastleSendGoodsComponent;
}();
exports.CastleSendGoodsComponent = o;
var a = require("./12.js");
var s = require("./45.js");
var r = require("./319.js");
var l = require("./2392.js");
var c = require("./58.js");
var u = require("./1.js");
var d = require("./5.js");
var p = require("./5.js");
var h = require("./5.js");
var g = require("./5.js");
var C = require("./5.js");
var _ = require("./5.js");
var m = require("./6.js");
var f = require("./232.js");
var O = require("./4.js");
var E = require("./8.js");
o.__initialize_static_members();