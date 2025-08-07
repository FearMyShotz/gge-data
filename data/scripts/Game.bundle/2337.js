Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./16.js");
var c = require("./4.js");
var u = require("./127.js");
var d = require("./928.js");
var p = require("./8.js");
var h = require("./35.js");
var g = require("./1315.js");
var C = require("./1316.js");
var _ = function (e) {
  function CastleCraftingDialogEquipment(t) {
    var i = this;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).itxt_value = i.textFieldManager.registerTextField(i.subLayerDisp.mc_price.txt_value, new s.LocalizedNumberVO(0));
    i.initBasicButtons([i.subLayerDisp.btn_craft]);
    i.textFieldManager.registerTextField(i.subLayerDisp.txt_desc, new r.LocalizedTextVO("dialog_equipmentCrafting_desc"));
    i.subLayerDisp.mc_price.mouseChildren = false;
    for (var n = 0; n < 6; n++) {
      i.subLayerDisp["slot" + n].mouseChildren = false;
    }
    i._craftingAnimation = new g.CastleCraftingAnimationEquipment(i.subLayerDisp.mc_animation, i);
    i._newItemAnimation = new C.CastleCraftingNewItemAnimation();
    return i;
  }
  n.__extends(CastleCraftingDialogEquipment, e);
  CastleCraftingDialogEquipment.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.resetVEs();
  };
  CastleCraftingDialogEquipment.prototype.resetVEs = function () {
    this.subLayerDisp.mc_price.toolTipText = "cash";
    this.subLayerDisp.btn_craft.toolTipText = "dialog_equipmentCrafting_cantCraft";
    p.ButtonHelper.enableButton(this.subLayerDisp.btn_craft, false);
    if (this.itxt_value.textContentVO) {
      this.itxt_value.textContentVO.numberValue = 0;
    }
    this.initSlots();
  };
  CastleCraftingDialogEquipment.prototype.initSlots = function () {
    this._allSlotsOnScreen = [];
    for (var e = 0; e < CastleCraftingDialogEquipment.SLOTS_ON_SCREEN; e++) {
      var t = this.subLayerDisp["slot" + e];
      t.actLikeButton = true;
      o.MovieClipHelper.clearMovieClip(t.mc_itemHolder);
      t.toolTipText = "dialog_equipment_craftEquipment_insertEquipment_tooltip";
      t.mc_bg.gotoAndStop(1);
      t.slotVO = new d.CastleEquipmentSlotVO(u.BasicEquippableVO.SLOT_TYPE_ALL);
      t.mc_lock.visible = false;
      t.mc_deco.gotoAndStop(e + 1);
      this._allSlotsOnScreen.push(t);
    }
    this.resultSlot.mc_lock.visible = false;
    this.resultSlot.toolTipText = "dialog_equipment_craftEquipment_middleSlotEmpty_tooltip";
    this.resultSlot.mc_deco.gotoAndStop(7);
    this.resultSlot.mc_bg.gotoAndStop(1);
    o.MovieClipHelper.clearMovieClip(this.subLayerDisp.mc_animation);
  };
  CastleCraftingDialogEquipment.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    if (this._clickHandler) {
      this._clickHandler.handleDialogMouseOver(t);
    }
  };
  Object.defineProperty(CastleCraftingDialogEquipment.prototype, "clickHandler", {
    set: function (e) {
      this._clickHandler = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCraftingDialogEquipment.prototype, "allSlotsOnScreen", {
    get: function () {
      return this._allSlotsOnScreen;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCraftingDialogEquipment.prototype, "resultSlot", {
    get: function () {
      return this.subLayerDisp.slot6;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCraftingDialogEquipment.prototype, "price", {
    set: function (e) {
      this.itxt_value.textContentVO.numberValue = e;
      this.itxt_value.color = c.CastleModel.currencyData.c1Amount < e ? l.ClientConstColor.FONT_INSUFFICIENT_COLOR : l.ClientConstColor.FONT_DEFAULT_COLOR;
    },
    enumerable: true,
    configurable: true
  });
  CastleCraftingDialogEquipment.prototype.startCraftAnimation = function (e, t, i) {
    this._craftingAnimation.doEQAnimation(e, t, i);
  };
  CastleCraftingDialogEquipment.prototype.clearCenterSlot = function () {
    this._craftingAnimation.clearCenterSlot();
  };
  CastleCraftingDialogEquipment.prototype.startNewItemAnimation = function (e, t) {
    this._newItemAnimation.playAnimation(e, t);
  };
  CastleCraftingDialogEquipment.__initialize_static_members = function () {
    CastleCraftingDialogEquipment.SLOTS_ON_SCREEN = 6;
  };
  return CastleCraftingDialogEquipment;
}(h.CastleDialogSubLayer);
exports.CastleCraftingDialogEquipment = _;
a.classImplementsInterfaces(_, "ICollectableRendererList", "ISublayer");
_.__initialize_static_members();