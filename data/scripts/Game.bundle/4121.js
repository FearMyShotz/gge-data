Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./192.js");
var c = require("./4.js");
var u = require("./89.js");
var d = function (e) {
  function ResourceVillagesPanelButton() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ResourceVillagesPanelButton, e);
  ResourceVillagesPanelButton.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    c.CastleModel.kingdomData.addEventListener(l.CastleKingdomEvent.KINGDOMDATA_ARRIVED, this.bindFunction(this.onKingdomUpdates));
  };
  ResourceVillagesPanelButton.prototype.removeEventListener = function () {
    c.CastleModel.kingdomData.removeEventListener(l.CastleKingdomEvent.KINGDOMDATA_ARRIVED, this.bindFunction(this.onKingdomUpdates));
    e.prototype.removeEventListener.call(this);
  };
  Object.defineProperty(ResourceVillagesPanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Btn_village;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.APanelButton.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  ResourceVillagesPanelButton.prototype.getButtonTooltip = function () {
    if (this.isButtonEnabled()) {
      return "dialog_villageListOverview_title";
    } else {
      return "dialog_privateResourceVillages_noWarehouse_info";
    }
  };
  ResourceVillagesPanelButton.prototype.isButtonVisible = function () {
    return h.CastleComponent.layoutManager.currentState != p.CastleLayoutManager.STATE_KINGDOMMAP && (c.CastleModel.kingdomData.activeKingdomID == a.WorldDessert.KINGDOM_ID || c.CastleModel.kingdomData.activeKingdomID == s.WorldIce.KINGDOM_ID || c.CastleModel.kingdomData.activeKingdomID == r.WorldVolcano.KINGDOM_ID);
  };
  ResourceVillagesPanelButton.prototype.isButtonEnabled = function () {
    return (c.CastleModel.kingdomData.activeKingdomID == a.WorldDessert.KINGDOM_ID || c.CastleModel.kingdomData.activeKingdomID == s.WorldIce.KINGDOM_ID || c.CastleModel.kingdomData.activeKingdomID == r.WorldVolcano.KINGDOM_ID) && c.CastleModel.kingdomData.activeKingdomVO.hasContor;
  };
  ResourceVillagesPanelButton.prototype.onButtonClicked = function () {
    h.CastleComponent.dialogHandler.registerDefaultDialogs(g.CastleResourceVillageOverviewDialog);
  };
  ResourceVillagesPanelButton.prototype.onKingdomUpdates = function (e) {
    this.update();
  };
  return ResourceVillagesPanelButton;
}(u.APanelButton);
exports.ResourceVillagesPanelButton = d;
var p = require("./17.js");
var h = require("./14.js");
var g = require("./1523.js");
o.classImplementsInterfaces(d, "ICollectableRendererList");