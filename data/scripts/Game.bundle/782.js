Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./18.js");
var u = require("./16.js");
var d = require("./58.js");
var p = require("./4.js");
var h = require("./97.js");
var g = require("./35.js");
var C = require("./1014.js");
var _ = function (e) {
  function BarracksBuildingVO() {
    var t = this;
    t._stackSize = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(BarracksBuildingVO, e);
  BarracksBuildingVO.prototype.parseXmlNode = function (t) {
    e.prototype.parseXmlNode.call(this, t);
    this._stackSize = l.int(t.stackSize || "");
  };
  Object.defineProperty(BarracksBuildingVO.prototype, "unitCategory", {
    get: function () {
      return c.ClientConstCastle.UNIT_CATEGORY_SOLDIERS;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(C.AUnitProductionBuildingVO.prototype, "unitCategory").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BarracksBuildingVO.prototype, "isProductive", {
    get: function () {
      return m.RecruitmentHelper.isRecruitingUnits();
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(C.AUnitProductionBuildingVO.prototype, "isProductive").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BarracksBuildingVO.prototype, "recruitCategory", {
    get: function () {
      return c.ClientConstCastle.UNIT_CATEGORY_SOLDIERS;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(C.AUnitProductionBuildingVO.prototype, "recruitCategory").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  BarracksBuildingVO.prototype.createInfoPanelItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_RecruitmentBoost, "recruitspeed", new r.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE_ADD, [this.recruitSpeedBoost]), this.getInfoItemTextColor(h.CastleEffectEnum.RECRUITSPEEDBOOST), true);
    var t = l.int(this.stackSize + p.CastleModel.areaData.activeConstructionItems.getConstructionItemEffectValue(h.CastleEffectEnum.STACKSIZE));
    var i = p.CastleModel.subscriptionData.isEffectTypeActive(g.EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_SLOT_BONUS);
    if (i) {
      t += l.int(p.CastleModel.subscriptionData.getEffectValue(g.EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_SLOT_BONUS));
    }
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Max_Recruitment_Amount, "dialog_barracks_slotCapacity_tooltip", new s.LocalizedNumberVO(t), this.getInfoItemTextColor(h.CastleEffectEnum.STACKSIZE), true, i);
    var n = l.int(p.CastleModel.boostData.instructorVO.isActive ? p.CastleModel.boostData.instructorVO.bonusValue : 0);
    e.addInfoItem(Library.CastleInterfaceElements.Icon_Productivity, "dialog_recuit_recruitSpeed_feastActive", new r.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [p.CastleModel.militaryData.getBuildingProductionSpeed(this.name) + n]), this.getInfoItemTextColor(h.CastleEffectEnum.RECRUITSPEEDBOOST));
    if (this.decoPoints > 0) {
      e.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new s.LocalizedNumberVO(this.decoPoints), this.getInfoItemTextColor(h.CastleEffectEnum.DECOPOINTS), true);
    }
  };
  BarracksBuildingVO.prototype.createInfoDialogItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_RecruitmentBoost, "recruitspeed", new r.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE_ADD, [this.recruitSpeedBoost]), this.getInfoItemTextColor(h.CastleEffectEnum.RECRUITSPEEDBOOST), true);
    var t;
    t = l.int(this.stackSize);
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Max_Recruitment_Amount, "dialog_barracks_slotCapacity_tooltip", new s.LocalizedNumberVO(t), u.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  Object.defineProperty(BarracksBuildingVO.prototype, "stackSize", {
    get: function () {
      if (p.CastleModel.userData.level < d.ClientConstLevelRestrictions.TUTORIAL_END) {
        return 5;
      } else {
        return this._stackSize;
      }
    },
    enumerable: true,
    configurable: true
  });
  return BarracksBuildingVO;
}(C.AUnitProductionBuildingVO);
exports.BarracksBuildingVO = _;
var m = require("./628.js");
a.classImplementsInterfaces(_, "IShopVO", "ICostVO", "IInventoryVO");