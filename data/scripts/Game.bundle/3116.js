Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./4.js");
var c = function (e) {
  function CastleListDetailOverviewSublayerEconomy(t) {
    var i = e.call(this, t) || this;
    i.offset = 0;
    i.maxItems = 7;
    i.itemList.scrollItemClass = u.CastleListDetailOverviewItemEconomy;
    i.subLayerDisp.icon_wood.toolTipText = "wood";
    i.subLayerDisp.icon_stone.toolTipText = "stone";
    i.subLayerDisp.icon_food.toolTipText = "food";
    i.subLayerDisp.icon_coal.toolTipText = "coal";
    i.subLayerDisp.icon_oil.toolTipText = "oliveoil";
    i.subLayerDisp.icon_glass.toolTipText = "glass";
    i.subLayerDisp.icon_iron.toolTipText = "iron";
    i.subLayerDisp.icon_honey.toolTipText = "honey";
    i.subLayerDisp.icon_mead.toolTipText = "mead";
    i.subLayerDisp.icon_beef.toolTipText = "beef";
    i.updateIcons();
    i.initBasicButtons([i.subLayerDisp.btn_left, i.subLayerDisp.btn_right]);
    return i;
  }
  n.__extends(CastleListDetailOverviewSublayerEconomy, e);
  CastleListDetailOverviewSublayerEconomy.prototype.updateIcons = function () {
    var e = l.CastleModel.userData.isLegend;
    this.icons = [this.subLayerDisp.icon_wood, this.subLayerDisp.icon_stone, this.subLayerDisp.icon_food];
    if (e || l.CastleModel.kingdomData.isKingdomUnlocked(s.WorldIce.KINGDOM_ID)) {
      this.icons.push(this.subLayerDisp.icon_coal);
    }
    if (e || l.CastleModel.kingdomData.isKingdomUnlocked(a.WorldDessert.KINGDOM_ID)) {
      this.icons.push(this.subLayerDisp.icon_oil);
    }
    if (e || l.CastleModel.kingdomData.isKingdomUnlocked(r.WorldVolcano.KINGDOM_ID)) {
      this.icons.push(this.subLayerDisp.icon_glass);
    }
    if (e) {
      this.icons.push(this.subLayerDisp.icon_iron);
    }
    if (e || l.CastleModel.userData.userLegendLevel >= l.CastleModel.areaData.activeStorage.minHoneyMeadLegendLevel) {
      this.icons.push(this.subLayerDisp.icon_honey);
    }
    if (e || l.CastleModel.userData.userLegendLevel >= l.CastleModel.areaData.activeStorage.minHoneyMeadLegendLevel) {
      this.icons.push(this.subLayerDisp.icon_mead);
    }
    if (e || l.CastleModel.userData.userLegendLevel >= l.CastleModel.areaData.activeStorage.minBeefLegendLevel) {
      this.icons.push(this.subLayerDisp.icon_beef);
    }
  };
  CastleListDetailOverviewSublayerEconomy.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.updateIcons();
    var i = l.CastleModel.userData.isLegend;
    this.subLayerDisp.icon_coal.visible = i || l.CastleModel.kingdomData.isKingdomUnlocked(s.WorldIce.KINGDOM_ID);
    this.subLayerDisp.icon_oil.visible = i || l.CastleModel.kingdomData.isKingdomUnlocked(a.WorldDessert.KINGDOM_ID);
    this.subLayerDisp.icon_glass.visible = i || l.CastleModel.kingdomData.isKingdomUnlocked(r.WorldVolcano.KINGDOM_ID);
    this.subLayerDisp.icon_honey.visible = i || l.CastleModel.userData.userLegendLevel >= l.CastleModel.areaData.activeStorage.minHoneyMeadLegendLevel;
    this.subLayerDisp.icon_mead.visible = i || l.CastleModel.userData.userLegendLevel >= l.CastleModel.areaData.activeStorage.minHoneyMeadLegendLevel;
    this.subLayerDisp.icon_beef.visible = i || l.CastleModel.userData.userLegendLevel >= l.CastleModel.areaData.activeStorage.minBeefLegendLevel;
    this.subLayerDisp.icon_iron.visible = i;
    this.subLayerDisp.icon_food.gotoAndStop(l.CastleModel.userData.foodFrozen ? 2 : 1);
    this.subLayerDisp.icon_mead.gotoAndStop(l.CastleModel.userData.foodFrozen ? 2 : 1);
    this.subLayerDisp.icon_beef.gotoAndStop(l.CastleModel.userData.foodFrozen ? 2 : 1);
    this.subLayerDisp.icon_food.toolTipText = l.CastleModel.userData.foodFrozen ? "food_frozen" : "food";
    this.subLayerDisp.icon_mead.toolTipText = l.CastleModel.userData.foodFrozen ? "mead_frozen" : "mead";
    this.subLayerDisp.icon_beef.toolTipText = l.CastleModel.userData.foodFrozen ? "beef_frozen" : "beef";
    this.updateOffsets(0);
  };
  CastleListDetailOverviewSublayerEconomy.prototype.onClick = function (e) {
    if (d.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.subLayerDisp.btn_left:
          this.updateOffsets(-1);
          break;
        case this.subLayerDisp.btn_right:
          this.updateOffsets(1);
      }
    }
  };
  CastleListDetailOverviewSublayerEconomy.prototype.updateOffsets = function (e) {
    this.offset += e;
    for (var t = 0; t < this.icons.length; t++) {
      this.icons[t].x -= e * 65;
      this.icons[t].visible = t - this.offset >= 0 && t - this.offset < this.maxItems;
    }
    d.ButtonHelper.enableButton(this.subLayerDisp.btn_left, this.offset > 0);
    d.ButtonHelper.enableButton(this.subLayerDisp.btn_right, this.offset < this.icons.length - this.maxItems);
    for (var i = 0; i < this.itemList.voList.length; i++) {
      if (i < this.itemList.veList.length && this.itemList.veList[i] !== undefined && this.itemList.veList[i]) {
        this.itemList.veList[i].setOffSet(this.offset);
      }
    }
  };
  CastleListDetailOverviewSublayerEconomy.prototype.fillList = function (t) {
    e.prototype.fillList.call(this, t);
    this.updateOffsets(0);
  };
  return CastleListDetailOverviewSublayerEconomy;
}(require("./1040.js").CastleListDetailOverviewSublayer);
exports.CastleListDetailOverviewSublayerEconomy = c;
var u = require("./3118.js");
var d = require("./8.js");
o.classImplementsInterfaces(c, "ICollectableRendererList", "ISublayer");