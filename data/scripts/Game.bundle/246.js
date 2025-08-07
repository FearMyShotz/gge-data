Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./58.js");
var s = require("./4.js");
var r = require("./127.js");
var l = require("./8.js");
var c = require("./11.js");
var u = require("./5.js");
var d = require("./716.js");
var p = require("./926.js");
var h = require("./9.js");
var g = require("./3.js");
var C = require("./353.js");
var _ = require("./2340.js");
var m = function (e) {
  function CastleEquipmentDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleEquipmentDialog.NAME) || this;
  }
  n.__extends(CastleEquipmentDialog, e);
  CastleEquipmentDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    var i = [this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_tab_general, this.dialogDisp.btn_tab_baron, this.dialogDisp.btn_tab_crafting];
    this.initBasicButtons(i);
    this.dialogDisp.btn_tab_general.toolTipText = "equipment_itemType_general";
    this.dialogDisp.btn_tab_baron.toolTipText = "equipment_itemType_baron";
    this.dialogDisp.btn_tab_crafting.toolTipText = "dialog_equipmentCrafting_title";
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.equipmentScreen = new d.CastleEquipmentSublayer(this.dialogDisp.component_equipment);
    this.craftingScreen = new p.CastleCraftingSublayer(this.dialogDisp.component_crafting);
  };
  CastleEquipmentDialog.prototype.showLoaded = function (t) {
    var i;
    if (t === undefined) {
      t = null;
    }
    e.prototype.showLoaded.call(this);
    C.CastleEquipmentFavoritesMicroservice.Instance.getFavoriteEquipmentSignal.dispatch();
    this.equipmentScreen.applyProperties(this.dialogProperties);
    this.craftingScreen.hide();
    l.ButtonHelper.enableButton(this.dialogDisp.btn_help, s.CastleModel.userData.hasLevelFor(a.ClientConstLevelRestrictions.MIN_LEVEL_EQUIPMENT));
    l.ButtonHelper.enableButton(this.dialogDisp.btn_tab_baron, this.isOutOfTutorial());
    l.ButtonHelper.enableButton(this.dialogDisp.btn_tab_crafting, this.isOutOfTutorial());
    s.CastleModel.smartfoxClient.sendCommandVO(new _.C2SGetNewRelicsEventVO());
    this.equipmentScreen.inventoryUpdatedSignal.add(this.bindFunction(this.onInventoryUpdated));
    this.equipmentScreen.gemTabSwitchedSignal.add(this.bindFunction(this.onGemTabSwitched));
    this.equipmentScreen.show(r.BasicEquippableVO.LORD_TYPE_COMMANDER);
    if (this.dialogProperties && this.dialogProperties.tabState == CastleEquipmentDialog.CRAFTING) {
      this.tabState = CastleEquipmentDialog.CRAFTING;
      this.craftingScreen.show(null);
      this.equipmentScreen.dialogDisp.visible = false;
      this.switchTab(CastleEquipmentDialog.CRAFTING);
      this.tabState = CastleEquipmentDialog.CRAFTING;
    } else {
      if (this.properties && this.dialogProperties.selectedLordID >= 0) {
        i = s.CastleModel.lordData.getLordByID(this.dialogProperties.selectedLordID);
      }
      if (i && i.isBaron) {
        this.switchTab(CastleEquipmentDialog.CASTELLAN);
        this.tabState = CastleEquipmentDialog.CASTELLAN;
      } else {
        this.switchTab(CastleEquipmentDialog.COMMANDER);
        this.tabState = CastleEquipmentDialog.COMMANDER;
      }
    }
  };
  CastleEquipmentDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_tab_general:
        this.tabState = CastleEquipmentDialog.COMMANDER;
        if (this.equipmentScreen.lastLordType != r.BasicEquippableVO.LORD_TYPE_COMMANDER) {
          C.CastleEquipmentFavoritesMicroservice.Instance.putFavoriteEquipmentSignal.dispatch();
          this.craftingScreen.hide();
          this.equipmentScreen.dialogDisp.visible = true;
          this.equipmentScreen.show(r.BasicEquippableVO.LORD_TYPE_COMMANDER);
          this.equipmentScreen.setLordCategory(r.BasicEquippableVO.LORD_TYPE_COMMANDER, true);
          this.equipmentScreen.lastLordType = r.BasicEquippableVO.LORD_TYPE_COMMANDER;
          this.switchTab(CastleEquipmentDialog.COMMANDER);
        }
        break;
      case this.dialogDisp.btn_tab_baron:
        this.tabState = CastleEquipmentDialog.CASTELLAN;
        if (this.equipmentScreen.lastLordType != r.BasicEquippableVO.LORD_TYPE_BARON) {
          C.CastleEquipmentFavoritesMicroservice.Instance.putFavoriteEquipmentSignal.dispatch();
          this.craftingScreen.hide();
          this.equipmentScreen.dialogDisp.visible = true;
          this.equipmentScreen.show(r.BasicEquippableVO.LORD_TYPE_BARON);
          this.equipmentScreen.setLordCategory(r.BasicEquippableVO.LORD_TYPE_BARON, true);
          this.equipmentScreen.lastLordType = r.BasicEquippableVO.LORD_TYPE_BARON;
          this.switchTab(CastleEquipmentDialog.CASTELLAN);
        }
        break;
      case this.dialogDisp.btn_tab_crafting:
        if (this.tabState != CastleEquipmentDialog.CRAFTING) {
          this.tabState = CastleEquipmentDialog.CRAFTING;
          C.CastleEquipmentFavoritesMicroservice.Instance.putFavoriteEquipmentSignal.dispatch();
          this.equipmentScreen.removeEventListener();
          this.craftingScreen.show(null);
          this.equipmentScreen.dialogDisp.visible = false;
          this.equipmentScreen.clearFavoriteOptions();
          this.switchTab(CastleEquipmentDialog.CRAFTING);
          this.equipmentScreen.lastLordType = null;
        }
        break;
      case this.dialogDisp.btn_help:
        var i = this.getHelpTextId();
        h.CastleDialogHandler.getInstance().showHelper("", g.Localize.text(i));
        break;
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  CastleEquipmentDialog.prototype.getHelpTextId = function () {
    var e = "help_equipment";
    switch (this.tabState) {
      case CastleEquipmentDialog.CASTELLAN:
        e = "help_equipment";
        break;
      case CastleEquipmentDialog.CRAFTING:
        e = "help_equipmentCrafting";
        break;
      case CastleEquipmentDialog.GEMS:
        e = "help_insertGems";
    }
    return e;
  };
  CastleEquipmentDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    C.CastleEquipmentFavoritesMicroservice.Instance.putFavoriteEquipmentSignal.dispatch();
    this.equipmentScreen.hide();
    this.equipmentScreen.clearFavoriteOptions();
    this.craftingScreen.hide();
    this.equipmentScreen.inventoryUpdatedSignal.remove(this.bindFunction(this.onInventoryUpdated));
    this.equipmentScreen.gemTabSwitchedSignal.remove(this.bindFunction(this.onGemTabSwitched));
  };
  CastleEquipmentDialog.prototype.onGemTabSwitched = function () {
    this.tabState = CastleEquipmentDialog.GEMS;
  };
  CastleEquipmentDialog.prototype.switchTab = function (e) {
    this.dialogDisp.btn_tab_general.gotoAndStop(2);
    this.dialogDisp.btn_tab_baron.gotoAndStop(2);
    this.dialogDisp.btn_tab_crafting.gotoAndStop(2);
    this.dialogDisp.btn_tab_general.gotoAndStop(e == CastleEquipmentDialog.COMMANDER ? 1 : 2);
    this.dialogDisp.btn_tab_baron.gotoAndStop(e == CastleEquipmentDialog.CASTELLAN ? 1 : 2);
    this.dialogDisp.btn_tab_crafting.gotoAndStop(e == CastleEquipmentDialog.CRAFTING ? 1 : 2);
  };
  CastleEquipmentDialog.prototype.onInventoryUpdated = function () {
    this.dialogDisp.btn_tab_general.mc_new.visible = s.CastleModel.equipData.hasLordTypeNewRelic(u.EquipmentConst.COMMANDER_WEARER_ID);
    this.dialogDisp.btn_tab_baron.mc_new.visible = s.CastleModel.equipData.hasLordTypeNewRelic(u.EquipmentConst.BARON_WEARER_ID);
  };
  Object.defineProperty(CastleEquipmentDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleEquipmentDialog.NAME = "CastleEquipment_Generals2";
  CastleEquipmentDialog.MAX_WIDTH = 53;
  CastleEquipmentDialog.MAX_HEIGHT = 53;
  CastleEquipmentDialog.CASTELLAN = "castellan";
  CastleEquipmentDialog.COMMANDER = "commander";
  CastleEquipmentDialog.CRAFTING = "crafting";
  CastleEquipmentDialog.GEMS = "gems";
  return CastleEquipmentDialog;
}(c.CastleExternalDialog);
exports.CastleEquipmentDialog = m;
o.classImplementsInterfaces(m, "ICollectableRendererList");