Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./512.js");
var s = require("./11.js");
var r = require("./13.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./8.js");
var d = require("./20.js");
var p = require("./4.js");
var h = require("./123.js");
var g = require("./479.js");
var C = require("./567.js");
var _ = require("./9.js");
var m = require("./246.js");
var f = function (e) {
  function CastleEquipmentInventoryFullDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleEquipmentInventoryFullDialog.NAME) || this;
  }
  n.__extends(CastleEquipmentInventoryFullDialog, e);
  CastleEquipmentInventoryFullDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    u.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_eq_dialog], d.ClickFeedbackButtonHover);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new l.TextVO(r.TextHelper.toUpperCaseLocaSafeTextId("dialog_bundlePackage_inventoryFull_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_eq_dialog.txt_value, new l.TextVO(r.TextHelper.toUpperCaseLocaSafeTextId("dialog_equipment_title")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new c.LocalizedTextVO("dialog_bundlePackage_inventoryFull_desc"));
    var i = CastleEquipmentInventoryFullDialog.getAmountOverMax(this.dialogProperties.packageVO, true);
    var n = CastleEquipmentInventoryFullDialog.getAmountOverMax(this.dialogProperties.packageVO, false);
    if (i == 0) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_eq, new c.LocalizedTextVO("dialog_inventorySpace_equipment_sufficient_desc"));
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_eq, new c.LocalizedTextVO("dialog_inventorySpace_equipment_insufficient_desc", [i]));
    }
    if (n == 0) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_gem, new c.LocalizedTextVO("dialog_inventorySpace_gem_sufficient_desc"));
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_gem, new c.LocalizedTextVO("dialog_inventorySpace_gem_insufficient_desc", [n]));
    }
    this.dialogDisp.mc_eq_yes.visible = i == 0;
    this.dialogDisp.mc_eq_no.visible = i > 0;
    this.dialogDisp.mc_gem_yes.visible = n == 0;
    this.dialogDisp.mc_gem_no.visible = n > 0;
  };
  CastleEquipmentInventoryFullDialog.prototype.onClick = function (t) {
    if (u.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_eq_dialog:
          _.CastleDialogHandler.getInstance().registerDialogs(m.CastleEquipmentDialog);
          this.hide();
      }
    }
  };
  CastleEquipmentInventoryFullDialog.getAmountOverMax = function (e, t) {
    var i = p.CastleModel.equipData.playerTotalInventorySpace - p.CastleModel.equipData.filledInventorySpace;
    var n = p.CastleModel.gemData.playerTotalInventorySpace - p.CastleModel.gemData.filledInventorySpace;
    var o = t ? i : n;
    var a = CastleEquipmentInventoryFullDialog.getPackageAmount(e, t);
    if (o >= a) {
      return 0;
    } else {
      return Math.abs(o - a);
    }
  };
  CastleEquipmentInventoryFullDialog.getPackageAmount = function (e, t) {
    var i = 0;
    var n = 0;
    if (e.packageType == h.ClientConstPackages.PACKAGE_TYPE_BUNDLE) {
      for (var o = 0; o < e.bundlePackageIds.length; o++) {
        var a = p.CastleModel.eventPackageData.getEventPackageByID(e.bundlePackageIds[o]);
        if (a) {
          if (t && a.firstReward instanceof g.ACollectableItemEquipmentVO) {
            n++;
          }
          if (!t && a.firstReward instanceof C.ACollectableItemGemVO) {
            i++;
          }
        }
      }
    } else {
      if (t && e.firstReward instanceof g.ACollectableItemEquipmentVO) {
        n++;
      }
      if (!t && e.firstReward instanceof C.ACollectableItemGemVO) {
        i++;
      }
    }
    if (t) {
      return n;
    } else {
      return i;
    }
  };
  Object.defineProperty(CastleEquipmentInventoryFullDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipmentInventoryFullDialog.prototype, "textMaxChars", {
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.BasicRenameDialog.prototype, "textMaxChars").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipmentInventoryFullDialog.prototype, "defaultName", {
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.BasicRenameDialog.prototype, "defaultName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleEquipmentInventoryFullDialog.__initialize_static_members = function () {
    CastleEquipmentInventoryFullDialog.NAME = "EquipmentInventoryFull";
  };
  return CastleEquipmentInventoryFullDialog;
}(s.CastleExternalDialog);
exports.CastleEquipmentInventoryFullDialog = f;
o.classImplementsInterfaces(f, "ICollectableRendererList");
f.__initialize_static_members();