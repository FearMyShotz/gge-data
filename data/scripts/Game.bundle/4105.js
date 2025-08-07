Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./58.js");
var r = require("./39.js");
var l = require("./118.js");
var c = require("./233.js");
var u = require("./179.js");
var d = require("./32.js");
var p = require("./15.js");
var h = require("./4.js");
var g = require("./89.js");
var C = createjs.Point;
var _ = function (e) {
  function EquipmentPanelButton() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(EquipmentPanelButton, e);
  EquipmentPanelButton.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    m.CastleComponent.controller.addEventListener(l.CastleEquipmentEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onInventorySpaceUpdate));
    m.CastleComponent.controller.addEventListener(c.CastleGemEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onInventorySpaceUpdate));
    m.CastleComponent.controller.addEventListener(l.CastleEquipmentEvent.OVERALL_NEW_RELICS_UPDATED, this.bindFunction(this.onNewRelicsUpdated));
    h.CastleModel.generalsData.addEventListener(u.GeneralsEvent.GENERALS_HUB_UPDATED, this.bindFunction(this.onHubUpdated));
    h.CastleModel.generalsData.addEventListener(u.GeneralsEvent.GENERALS_HUB_REWARDS, this.bindFunction(this.onHubUpdated));
    p.CastleBasicController.getInstance().addEventListener(d.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrenciesUpdated));
    this.listenOnXPChanged();
  };
  EquipmentPanelButton.prototype.removeEventListener = function () {
    m.CastleComponent.controller.removeEventListener(l.CastleEquipmentEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onInventorySpaceUpdate));
    m.CastleComponent.controller.removeEventListener(c.CastleGemEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onInventorySpaceUpdate));
    m.CastleComponent.controller.removeEventListener(l.CastleEquipmentEvent.OVERALL_NEW_RELICS_UPDATED, this.bindFunction(this.onNewRelicsUpdated));
    h.CastleModel.generalsData.removeEventListener(u.GeneralsEvent.GENERALS_HUB_UPDATED, this.bindFunction(this.onHubUpdated));
    h.CastleModel.generalsData.removeEventListener(u.GeneralsEvent.GENERALS_HUB_REWARDS, this.bindFunction(this.onHubUpdated));
    p.CastleBasicController.getInstance().removeEventListener(d.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onCurrenciesUpdated));
    e.prototype.removeEventListener.call(this);
  };
  EquipmentPanelButton.prototype.updateOnVisible = function () {
    this.setHighlight(g.APanelButton.HIGHLIGHT_TYPE_RED, h.CastleModel.equipData.isInventoryFull || h.CastleModel.gemData.isInventoryFull);
    var e = h.CastleModel.generalsData.getTotalAmountOfAvailableDraws() > 0;
    this.setMark(h.CastleModel.equipData.hasNewRelics || e && !this.isSubMenuExpanded);
  };
  EquipmentPanelButton.prototype.expandSubMenu = function (t, i = true) {
    e.prototype.expandSubMenu.call(this, t, i);
    this.update();
  };
  Object.defineProperty(EquipmentPanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Btn_Equipment;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.APanelButton.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  EquipmentPanelButton.prototype.isButtonEnabled = function () {
    return h.CastleModel.userData.hasLevelFor(s.ClientConstLevelRestrictions.MIN_LEVEL_EQUIPMENT);
  };
  EquipmentPanelButton.prototype.getButtonTooltip = function () {
    if (this.isButtonEnabled()) {
      return "panel_multiinfo_equipment";
    } else {
      return a.Localize.text(r.ClientConstTextIds.LEVEL_NEEDED, [s.ClientConstLevelRestrictions.MIN_LEVEL_EQUIPMENT]);
    }
  };
  Object.defineProperty(EquipmentPanelButton.prototype, "iconDimension", {
    get: function () {
      return new C(40, 40);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.APanelButton.prototype, "iconDimension").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  EquipmentPanelButton.prototype.onButtonClicked = function () {
    m.CastleComponent.dialogHandler.registerDefaultDialogs(f.CastleEquipmentDialog);
  };
  EquipmentPanelButton.prototype.onNewRelicsUpdated = function (e) {
    this.update();
  };
  EquipmentPanelButton.prototype.onInventorySpaceUpdate = function (e = null) {
    this.update();
  };
  EquipmentPanelButton.prototype.onHubUpdated = function (e) {
    this.update();
  };
  EquipmentPanelButton.prototype.onCurrenciesUpdated = function (e) {
    this.update();
  };
  return EquipmentPanelButton;
}(g.APanelButton);
exports.EquipmentPanelButton = _;
var m = require("./14.js");
var f = require("./246.js");
o.classImplementsInterfaces(_, "ICollectableRendererList");