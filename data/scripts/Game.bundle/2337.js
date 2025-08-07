Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./16.js");
var u = require("./4.js");
var d = require("./8.js");
var p = require("./34.js");
var h = require("./1315.js");
var g = require("./2338.js");
var C = require("./1316.js");
var _ = function (e) {
  function CastleCraftingDialogGem(t) {
    var i = this;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).initBasicButtons([i.subLayerDisp.btn_craft, i.subLayerDisp.btn_craftRubies]);
    i._newItemAnimation = new C.CastleCraftingNewItemAnimation();
    i.textFieldManager.registerTextField(i.subLayerDisp.txt_desc, new l.LocalizedTextVO("dialog_gems_craftGems_description"));
    i.itxt_upgradeChance = i.textFieldManager.registerTextField(i.subLayerDisp.mc_upgradeChance.txt_chance, new l.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [0]));
    i.itxt_upgradeResult = i.textFieldManager.registerTextField(i.subLayerDisp.mc_resultInfo.txt_result, new l.LocalizedTextVO(""));
    i.itxt_price = i.textFieldManager.registerTextField(i.subLayerDisp.mc_price.txt_value, new r.LocalizedNumberVO(0));
    i.subLayerDisp.mc_price.toolTipText = "cash";
    i.subLayerDisp.mc_upgradeChance.toolTipText = "dialog_gems_craftGems_gemUpgradeChance_tooltip";
    i.subLayerDisp.mc_resultInfo.mouseChildren = false;
    i.initComponents();
    return i;
  }
  n.__extends(CastleCraftingDialogGem, e);
  CastleCraftingDialogGem.prototype.initComponents = function () {
    this.cacheSlots();
    this.subLayerDisp.mc_price.mouseChildren = false;
    this.subLayerDisp.mc_upgradeChance.mouseChildren = false;
    this.subLayerDisp.mc_resultInfo.mouseChildren = false;
  };
  CastleCraftingDialogGem.prototype.cacheSlots = function () {
    this._allSlotsOnScreen = [];
    this._allConnectionBarMCs = [];
    for (var e = 0; e < CastleCraftingDialogGem.SLOTS_ON_SCREEN; e++) {
      var t = this.subLayerDisp["slot" + e];
      t.mouseChildren = false;
      t.slotId = e;
      this._allSlotsOnScreen.push(t);
      var i = this.subLayerDisp["mc_connectionBar" + e];
      if (i) {
        this._allConnectionBarMCs.push(i);
      }
    }
  };
  CastleCraftingDialogGem.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.resetVEs();
  };
  CastleCraftingDialogGem.prototype.resetVEs = function () {
    this.setCraftButton(false, "dialog_gems_craftGems_gemSlotsMissing_tooltip");
    this.setCraftRubyButton(false, "dialog_gems_craftGems_gemSlotsMissing_tooltip");
    this.resetCostsAndChance(false);
    this.initSlots();
  };
  CastleCraftingDialogGem.prototype.resetCostsAndChance = function (e) {
    this.upgradePrice = 0;
    this.setUpgradeChance(0, c.ClientConstColor.FONT_DEFAULT_COLOR);
    if (e) {
      this.setUpgradeResult("", c.ClientConstColor.FONT_DEFAULT_COLOR);
    }
  };
  CastleCraftingDialogGem.prototype.initSlots = function () {
    if (this._allSlotsOnScreen != null) {
      for (var e = 0, t = this._allSlotsOnScreen; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.actLikeButton = true;
          a.MovieClipHelper.clearMovieClip(i.mc_itemHolder);
          i.mc_itemHolder.scaleX = i.mc_itemHolder.scaleY = 1.1;
          i.mc_bg.gotoAndStop(1);
          i.mc_lock.visible = false;
        }
      }
    }
  };
  CastleCraftingDialogGem.prototype.hide = function () {
    e.prototype.hide.call(this);
  };
  CastleCraftingDialogGem.prototype.setCraftButton = function (e, t) {
    d.ButtonHelper.enableButton(this.subLayerDisp.btn_craft, e);
    this.subLayerDisp.btn_craft.toolTipText = t;
  };
  CastleCraftingDialogGem.prototype.setCraftRubyButton = function (e, t) {
    d.ButtonHelper.enableButton(this.subLayerDisp.btn_craftRubies, e);
    this.subLayerDisp.btn_craftRubies.toolTipText = t;
  };
  Object.defineProperty(CastleCraftingDialogGem.prototype, "allSlotsOnScreen", {
    get: function () {
      return this._allSlotsOnScreen;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCraftingDialogGem.prototype, "resultSlot", {
    get: function () {
      return this._allSlotsOnScreen[CastleCraftingDialogGem.SLOTS_ON_SCREEN - 1];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCraftingDialogGem.prototype, "upgradePrice", {
    set: function (e) {
      this.itxt_price.textContentVO.numberValue = e;
      this.itxt_price.color = u.CastleModel.currencyData.c1Amount < e ? c.ClientConstColor.FONT_INSUFFICIENT_COLOR : c.ClientConstColor.FONT_DEFAULT_COLOR;
    },
    enumerable: true,
    configurable: true
  });
  CastleCraftingDialogGem.prototype.setUpgradeChance = function (e, t) {
    this.itxt_upgradeChance.textContentVO.textReplacements = [e];
    this.itxt_upgradeChance.color = t;
  };
  CastleCraftingDialogGem.prototype.setUpgradeResult = function (e, t) {
    if (this.itxt_upgradeResult.textContentVO && this.itxt_upgradeResult.textContentVO) {
      this.itxt_upgradeResult.textContentVO.textId = e;
      this.itxt_upgradeResult.color = t;
    }
  };
  CastleCraftingDialogGem.prototype.playFailAnimation = function (e) {
    g.CastleCraftingGemFailedAnimation.playAnimation(this._allSlotsOnScreen, e);
  };
  CastleCraftingDialogGem.prototype.playSuccessAnimation = function (e) {
    this._craftingAnimationEquip = new h.CastleCraftingAnimationEquipment(this.subLayerDisp.mc_animation, this);
    this._craftingAnimationEquip.doGemAnimation(e, this._allSlotsOnScreen, null);
  };
  CastleCraftingDialogGem.prototype.clearAnimationFinishedCallbacks = function () {
    g.CastleCraftingGemFailedAnimation.callBack = null;
    if (this._craftingAnimationEquip) {
      this._craftingAnimationEquip.clearCallBacks();
    }
  };
  Object.defineProperty(CastleCraftingDialogGem.prototype, "allConnectionBarMCs", {
    get: function () {
      return this._allConnectionBarMCs;
    },
    enumerable: true,
    configurable: true
  });
  CastleCraftingDialogGem.prototype.startNewItemAnimation = function (e, t) {
    this._newItemAnimation.playAnimation(e, t);
  };
  CastleCraftingDialogGem.__initialize_static_members = function () {
    CastleCraftingDialogGem.SLOTS_ON_SCREEN = 7;
  };
  return CastleCraftingDialogGem;
}(p.CastleDialogSubLayer);
exports.CastleCraftingDialogGem = _;
s.classImplementsInterfaces(_, "ICollectableRendererList", "ISublayer");
_.__initialize_static_members();