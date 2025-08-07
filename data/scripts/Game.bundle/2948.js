Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./796.js");
var c = require("./85.js");
var u = require("./4.js");
var d = require("./1568.js");
var p = createjs.Point;
var h = function (e) {
  function UnitReviveListItem(t) {
    return e.call(this, t) || this;
  }
  n.__extends(UnitReviveListItem, e);
  UnitReviveListItem.prototype.setIcons = function () {
    this.unitPackageReviveListItemMC.icon_Lock.visible = this.isLocked;
    this.unitPackageReviveListItemMC.red_overlay.visible = !this.isLocked && !this.isFree;
    this.unitPackageReviveListItemMC.red_underlay.visible = !this.isLocked && !this.isFree;
    this.unitPackageReviveListItemMC.infoAmount.visible = !this.isLocked && !this.isFree && this.unitPackageSlotVO && this.unitPackageSlotVO.unitVO.level <= 0;
    this.unitPackageReviveListItemMC.infoAmount_mead.visible = !this.isLocked && !this.isFree && this.unitPackageSlotVO && this.unitPackageSlotVO.unitVO.level > 0;
    this.unitPackageReviveListItemMC.progressBar.visible = !this.isLocked && !this.isFree && this.showProgressbar;
    this.unitPackageReviveListItemMC.icon_wait.visible = !this.isLocked && !this.isFirst && !this.isFree;
    this.unitPackageReviveListItemMC.icon_unlocked.visible = !this.isLocked && this.isFree;
    if (this.unitPackageSlotVO) {
      this.textFieldManager.registerTextField(this.unitPackageReviveListItemMC.infoAmount.txt_value, new c.CastleLocalizedNumberVO(this.unitPackageSlotVO.amount, {
        compactThreshold: 10000,
        compactFractionalDigits: 0
      }, 0), new a.InternalGGSTextFieldConfigVO(true));
      this.textFieldManager.registerTextField(this.unitPackageReviveListItemMC.infoAmount_mead.txt_value, new c.CastleLocalizedNumberVO(this.unitPackageSlotVO.amount, {
        compactThreshold: 10000,
        compactFractionalDigits: 0
      }, 0), new a.InternalGGSTextFieldConfigVO(true));
      if (this.unitPackageSlotVO.unitReadyInPercent) {
        this.textFieldManager.registerTextField(this.unitPackageReviveListItemMC.progressBar.txt_percent, new s.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [r.int(this.unitPackageSlotVO.unitReadyInPercent * 100)]), new a.InternalGGSTextFieldConfigVO(true));
      }
    }
  };
  UnitReviveListItem.prototype.initItem = function () {
    if (this.hasItem) {
      C.WodPicHelper.addUnitPic(u.CastleModel.wodData.voSubList(g.CastleWodData.TYPE_UNIT).get(this.unitPackageSlotVO.wodId), this.unitPackageReviveListItemMC.mc_unitContainer, this.targetMcSize, this.targetMcSize, u.CastleModel.userData.playerCrest.colorsTwo[0], u.CastleModel.userData.playerCrest.colorsTwo[1], 20, new p(0, 10));
    }
    this.unitPackageSlotVO.addEventListener(l.CastleSlotVOEvent.SLOT_UPDATE, this.bindFunction(this.onUpdateSlot_0));
    this.refreshData();
  };
  UnitReviveListItem.prototype.refreshData = function () {
    this.textFieldManager.registerTextField(this.unitPackageReviveListItemMC.infoAmount.txt_value, new c.CastleLocalizedNumberVO(this.unitPackageSlotVO.amount, {
      compactThreshold: 10000,
      compactFractionalDigits: 0
    }, 0), new a.InternalGGSTextFieldConfigVO(true));
    this.textFieldManager.registerTextField(this.unitPackageReviveListItemMC.infoAmount_mead.txt_value, new c.CastleLocalizedNumberVO(this.unitPackageSlotVO.amount, {
      compactThreshold: 10000,
      compactFractionalDigits: 0
    }, 0), new a.InternalGGSTextFieldConfigVO(true));
    if (this.showProgressbar) {
      this.textFieldManager.registerTextField(this.unitPackageReviveListItemMC.progressBar.txt_percent, new s.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [r.int(this.unitPackageSlotVO.healingReadyInPercent * 100)]), new a.InternalGGSTextFieldConfigVO(true));
      this.unitPackageReviveListItemMC.progressBar.mc_bar.scaleX = this.unitPackageSlotVO.healingReadyInPercent;
    }
    this.unitPackageReviveListItemMC.progressBar.visible = !this.isLocked && !this.isFree && this.showProgressbar;
  };
  Object.defineProperty(UnitReviveListItem.prototype, "enableIcons", {
    get: function () {
      return Object.getOwnPropertyDescriptor(d.UnitBuildListItem.prototype, "enableIcons").get.call(this);
    },
    set: function (e) {},
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitReviveListItem.prototype, "hasItem", {
    get: function () {
      return this.unitPackageSlotVO.wodId > 0;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.UnitBuildListItem.prototype, "hasItem").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  UnitReviveListItem.prototype.onUpdateSlot_0 = function (e) {
    this.refreshData();
  };
  Object.defineProperty(UnitReviveListItem.prototype, "unitPackageReviveListItemMC", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  UnitReviveListItem.prototype.remove = function () {
    e.prototype.remove.call(this);
    this.unitPackageSlotVO.removeEventListener(l.CastleSlotVOEvent.SLOT_UPDATE, this.bindFunction(this.onUpdateSlot_0));
  };
  return UnitReviveListItem;
}(d.UnitBuildListItem);
exports.UnitReviveListItem = h;
var g = require("./56.js");
var C = require("./63.js");