Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./6.js");
var r = require("./57.js");
var l = require("./13.js");
var c = require("./4.js");
var u = require("./610.js");
var d = require("./40.js");
var p = require("./42.js");
var h = require("./8.js");
var g = function (e) {
  function RelicUpgradeDialogStatus(t) {
    var i = this;
    i._currentEquipType = RelicUpgradeDialogStatus.EQUIP_TYPE_EQUIPMENT;
    i._onEquipTypeChanged = new r.Signal();
    i._currentRelevantTypes = [];
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).init();
    return i;
  }
  n.__extends(RelicUpgradeDialogStatus, e);
  RelicUpgradeDialogStatus.prototype.init = function () {
    for (var e = 0; e < RelicUpgradeDialogStatus.EQUIP_TYPES.length; ++e) {
      h.ButtonHelper.initBasicButton(this.getEquipTypeMcByIndex(e).mc_check);
    }
    _.CastleComponent.textFieldManager.registerTextField(this.disp.txt_levelTitle, new a.TextVO(l.TextHelper.toUpperCaseLocaSafeTextId("dialog_relicEnchanter_info_equipmentLevel"))).autoFitToBounds = true;
    this.disp.mc_levelIcon.toolTipText = "dialog_relicEnchanter_info_equipmentLevel_tooltip";
  };
  RelicUpgradeDialogStatus.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this.setEquipType(RelicUpgradeDialogStatus.EQUIP_TYPE_EQUIPMENT, false);
  };
  RelicUpgradeDialogStatus.prototype.updateWithNewVO = function (e, t) {
    var i = this._relicVO != e || !this._relicVO && !e;
    this._relicVO = e;
    this._lordID = t;
    if (i) {
      this.updateEquipTypeSelectors();
    }
    this.updateLevel();
    h.ButtonHelper.enableButton(this.disp.btn_sell, !!e);
    this.disp.btn_sell.toolTipText = e ? "selectEquipment" : "selectEquipmentSell";
  };
  RelicUpgradeDialogStatus.prototype.updateEquipTypeSelectors = function () {
    this._currentRelevantTypes = this.getRelevantEquipTypes();
    for (var e = 0; e < RelicUpgradeDialogStatus.EQUIP_TYPES.length; ++e) {
      var t = e < this._currentRelevantTypes.length ? this._currentRelevantTypes[e] : "";
      var i = this.getEquipTypeMcByIndex(e);
      var n = s.int(RelicUpgradeDialogStatus.EQUIP_TYPES.indexOf(t));
      i.visible = t != "";
      i.mc_icon.gotoAndStop(n + 1);
      if (n >= 0) {
        i.mc_icon.toolTipText = RelicUpgradeDialogStatus.EQUIP_TYPE_TOOLTIPS[n][this._currentRelevantTypes.length > 1 ? 1 : 0];
      }
    }
    this.getEquipTypeMcByIndex(0).mc_check.visible = this._currentRelevantTypes.length > 1;
    this.setEquipType(this._currentRelevantTypes.length > 0 ? this._currentRelevantTypes[0] : RelicUpgradeDialogStatus.EQUIP_TYPE_EQUIPMENT, false);
    var o = this._currentRelevantTypes.length > 1 ? "dialog_relicEnchanter_info_selectEquipment" : "dialog_relicEnchanter_info_upgradeSelected";
    var r = _.CastleComponent.textFieldManager.registerTextField(this.disp.txt_typeTitle, new a.TextVO(l.TextHelper.toUpperCaseLocaSafeTextId(o)));
    r.verticalAlign = p.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    r.autoFitToBounds = true;
    r.visible = this._currentRelevantTypes.length > 0;
  };
  RelicUpgradeDialogStatus.prototype.updateLevel = function () {
    var e = this.getLevel();
    if (e < 0) {
      _.CastleComponent.textFieldManager.registerTextField(this.disp.txt_level, new a.TextVO("-")).autoFitToBounds = true;
    } else {
      _.CastleComponent.textFieldManager.registerTextField(this.disp.txt_level, new a.TextVO(l.TextHelper.toUpperCaseLocaSafeTextId("value_proportional_value", [e, c.CastleModel.equipData.relicXml.maxRelicEnchanterLevel]))).autoFitToBounds = true;
    }
  };
  RelicUpgradeDialogStatus.prototype.setEquipType = function (e, t = true) {
    this._currentEquipType = e;
    this.updateEquipTypeVisuals();
    this.updateLevel();
    if (t) {
      this._onEquipTypeChanged.dispatch();
    }
  };
  RelicUpgradeDialogStatus.prototype.updateEquipTypeVisuals = function () {
    for (var e = 0; e < RelicUpgradeDialogStatus.EQUIP_TYPES.length; ++e) {
      this.getEquipTypeMcByIndex(e).mc_check.gotoAndStop(this._currentEquipType == RelicUpgradeDialogStatus.EQUIP_TYPES[e] ? 2 : 1);
    }
  };
  RelicUpgradeDialogStatus.prototype.getRelevantEquipTypes = function () {
    var e = [];
    if (this._relicVO && this._relicVO.vo) {
      if (this._relicVO.type == C.CollectableItemRelicVO.TYPE_EQUIPMENT) {
        e.push(RelicUpgradeDialogStatus.EQUIP_TYPE_EQUIPMENT);
        if (this._relicVO.vo.gemVO) {
          e.push(RelicUpgradeDialogStatus.EQUIP_TYPE_GEM);
        }
      } else if (this._relicVO.type == C.CollectableItemRelicVO.TYPE_GEM) {
        e.push(RelicUpgradeDialogStatus.EQUIP_TYPE_GEM);
      }
    }
    return e;
  };
  RelicUpgradeDialogStatus.prototype.getEquipTypeMcByIndex = function (e) {
    return this.disp.getChildByName("mc_typeSelection" + e);
  };
  RelicUpgradeDialogStatus.prototype.getEquipTypeMc = function (e) {
    return this.disp.getChildByName("mc_typeSelection" + RelicUpgradeDialogStatus.EQUIP_TYPES.indexOf(e));
  };
  RelicUpgradeDialogStatus.prototype.getLevel = function () {
    if (this._relicVO) {
      if (this._currentEquipType == RelicUpgradeDialogStatus.EQUIP_TYPE_GEM && this._relicVO.type == C.CollectableItemRelicVO.TYPE_EQUIPMENT && this._relicVO.vo.gemVO) {
        return s.int(this._relicVO.vo.gemVO.enchantmentLevel);
      } else {
        return this._relicVO.getEnchantmentLevel();
      }
    } else {
      return -1;
    }
  };
  RelicUpgradeDialogStatus.prototype.onClick = function (t) {
    if (h.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      if (t.target == this.disp.btn_sell) {
        var i = f.CastleEquipmentSellDialog;
        if (this._relicVO.vo instanceof b.BasicEquipmentVO) {
          if (this._relicVO.vo.gemVO) {
            i = D.CastleSellEmbeddedEquipmentDialog;
          }
        }
        m.CastleDialogHandler.getInstance().registerDialogs(i, new O.CastleEquipmentSellDialogProperties(this._relicVO.vo, this.bindFunction(this.confirmSellCallback), null));
      }
      for (var n = 0; n < RelicUpgradeDialogStatus.EQUIP_TYPES.length; ++n) {
        if (t.target == this.getEquipTypeMcByIndex(n).mc_check) {
          this.setEquipType(this._currentRelevantTypes[n]);
        }
      }
    }
  };
  RelicUpgradeDialogStatus.prototype.confirmSellCallback = function () {
    if (this._relicVO.vo instanceof u.RelicGemVO) {
      c.CastleModel.gemData.sell(this._relicVO.vo);
    } else {
      c.CastleModel.equipData.sell(this._relicVO.vo, this._lordID, -1);
    }
    c.CastleModel.smartfoxClient.sendCommandVO(new E.C2SGetGemInventory());
    c.CastleModel.smartfoxClient.sendCommandVO(new y.C2SGetEquipmentInventory());
  };
  Object.defineProperty(RelicUpgradeDialogStatus.prototype, "currentEquipType", {
    get: function () {
      return this._currentEquipType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicUpgradeDialogStatus.prototype, "onEquipTypeChanged", {
    get: function () {
      return this._onEquipTypeChanged;
    },
    enumerable: true,
    configurable: true
  });
  RelicUpgradeDialogStatus.EQUIP_TYPE_EQUIPMENT = "equipment";
  RelicUpgradeDialogStatus.EQUIP_TYPE_GEM = "gem";
  RelicUpgradeDialogStatus.EQUIP_TYPES = [RelicUpgradeDialogStatus.EQUIP_TYPE_EQUIPMENT, RelicUpgradeDialogStatus.EQUIP_TYPE_GEM];
  RelicUpgradeDialogStatus.EQUIP_TYPE_TOOLTIPS = [["equipment", "dialog_relicEnchanter_info_selectEquipment_item_tooltip"], ["gem_name", "dialog_relicEnchanter_info_selectEquipment_gem_tooltip"]];
  return RelicUpgradeDialogStatus;
}(d.CastleItemRenderer);
exports.RelicUpgradeDialogStatus = g;
o.classImplementsInterfaces(g, "ICollectableRendererList");
var C = require("./289.js");
var _ = require("./14.js");
var m = require("./9.js");
var f = require("./594.js");
var O = require("./722.js");
var E = require("./600.js");
var y = require("./516.js");
var b = require("./198.js");
var D = require("./908.js");