Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./58.js");
var u = require("./794.js");
var d = require("./15.js");
var p = require("./4.js");
var h = require("./68.js");
var g = require("./1569.js");
var C = function (e) {
  function UnitBuildListItem(t) {
    var i = e.call(this, t) || this;
    i.itemSize = 64;
    i.itemSpace = 5;
    i.itemSlotSize = i.itemSize + i.itemSpace;
    if (t.boostMarker) {
      t.boostMarker.visible = false;
    }
    if (t.allianceHelpMarker) {
      t.allianceHelpMarker.visible = false;
    }
    return i;
  }
  n.__extends(UnitBuildListItem, e);
  UnitBuildListItem.prototype.setIcons = function () {
    this.unitPackageListItemMC.icon_Lock.visible = this.isLocked;
    this.unitPackageListItemMC.content.visible = !this.isLocked && !this.isFree;
    this.unitPackageListItemMC.icon_wait.visible = !this.isLocked && !this.isFree && !this.slotVO.isCurrentlyRecruiting && !!this.unitPackageSlotVO.unitVO;
    this.enableIcons = this.isAvailable;
    this.unitPackageListItemMC.rentedFrame.visible = false;
    this.unitPackageListItemMC.vipFrame.visible = false;
    if (!this._slotVO.isAlwaysUnlocked && !this._slotVO.isLocked) {
      if (this.unitPackageSlotVO && this.unitPackageSlotVO.isVIP) {
        this.unitPackageListItemMC.vipFrame.visible = true;
      } else {
        this.unitPackageListItemMC.rentedFrame.visible = true;
      }
    }
    if (this.unitPackageSlotVO) {
      this.textFieldManager.registerTextField(this.unitPackageListItemMC.content.infoAmount.txt_value, new r.LocalizedNumberVO(this.unitPackageSlotVO.amount), new s.InternalGGSTextFieldConfigVO(true));
      if (this.unitPackageListItemMC.boostMarker) {
        var e = l.int(this.unitPackageSlotVO.numOfBoost);
        this.unitPackageListItemMC.boostMarker.visible = e > 0;
        this.unitPackageListItemMC.boostMarker.boost_txt.text = "x" + Math.pow(2, e);
      }
      if (this.unitPackageListItemMC.allianceHelpMarker) {
        this.unitPackageListItemMC.allianceHelpMarker.visible = false;
        if (this.unitPackageSlotVO.receivedAllianceHelp) {
          this.unitPackageListItemMC.allianceHelpMarker.visible = true;
        }
      }
    }
  };
  Object.defineProperty(UnitBuildListItem.prototype, "isAvailable", {
    get: function () {
      return Object.getOwnPropertyDescriptor(g.BasicBuildListItem.prototype, "isAvailable").get.call(this) && p.CastleModel.userData.hasLevelFor(c.ClientConstLevelRestrictions.MIN_LEVEL_UNLOCK_RECRUIT_SLOT);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.BasicBuildListItem.prototype, "isAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  UnitBuildListItem.prototype.initItem = function () {
    if (this.hasItem) {
      m.WodPicHelper.setCorrectUnitBackgroundPic(this.unitPackageSlotVO.unitVO, this.unitPackageListItemMC.mc_bg, Library.CastleInterfaceElements.recruitListItemBackground, Library.CastleInterfaceElements.recruitListItemBackground_Berimond);
      m.WodPicHelper.addUnitPic(p.CastleModel.wodData.voSubList(_.CastleWodData.TYPE_UNIT).get(this.unitPackageSlotVO.wodId), this.unitPackageListItemMC.content.mc_container, this.targetMcSize, this.targetMcSize, p.CastleModel.userData.playerCrest.colorsTwo[0], p.CastleModel.userData.playerCrest.colorsTwo[1], 20, null);
      this.unitPackageListItemMC.vipFrame.statusInfo.visible = false;
      this.unitPackageListItemMC.rentedFrame.statusInfo.visible = false;
    } else {
      this.unitPackageListItemMC.rentedFrame.statusInfo.visible = true;
      this.unitPackageListItemMC.vipFrame.statusInfo.visible = true;
    }
    this.unitPackageSlotVO.addEventListener(u.CastleSlotVOEvent.SLOT_UPDATE, this.bindFunction(this.onUpdateSlot));
    this.refreshData();
  };
  Object.defineProperty(UnitBuildListItem.prototype, "enableIcons", {
    set: function (e) {
      var t = new o.ColorMatrix();
      t.desaturate();
      var i = e ? null : [t.filter];
      if (this.unitPackageListItemMC.content.visible) {
        this._disp.useFilters(h.BitmapFilterHelper.NO_FILTER);
      } else {
        this._disp.useFilters(i);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitBuildListItem.prototype, "hasItem", {
    get: function () {
      return this.unitPackageSlotVO.wodId > 0;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.BasicBuildListItem.prototype, "hasItem").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  UnitBuildListItem.prototype.onUpdateSlot = function (e) {
    this.refreshData();
  };
  UnitBuildListItem.prototype.refreshData = function () {
    this.textFieldManager.registerTextField(this.unitPackageListItemMC.content.infoAmount.txt_value, new r.LocalizedNumberVO(this.unitPackageSlotVO.amount), new s.InternalGGSTextFieldConfigVO(true));
  };
  UnitBuildListItem.prototype.remove = function () {
    this.unitPackageSlotVO.removeEventListener(u.CastleSlotVOEvent.SLOT_UPDATE, this.bindFunction(this.onUpdateSlot));
  };
  Object.defineProperty(UnitBuildListItem.prototype, "controller", {
    get: function () {
      return d.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitBuildListItem.prototype, "unitPackageSlotVO", {
    get: function () {
      return this.slotVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitBuildListItem.prototype, "unitPackageListItemMC", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitBuildListItem.prototype, "textFieldManager", {
    get: function () {
      return a.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return UnitBuildListItem;
}(g.BasicBuildListItem);
exports.UnitBuildListItem = C;
var _ = require("./56.js");
var m = require("./63.js");