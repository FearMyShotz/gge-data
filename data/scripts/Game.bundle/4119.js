Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./4.js");
var r = require("./89.js");
var l = function (e) {
  function ResourceIslandsPanelButton() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ResourceIslandsPanelButton, e);
  Object.defineProperty(ResourceIslandsPanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Btn_ResorceIslands;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.APanelButton.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  ResourceIslandsPanelButton.prototype.isButtonEnabled = function () {
    return s.CastleModel.kingdomData.activeKingdomID == a.WorldIsland.KINGDOM_ID;
  };
  ResourceIslandsPanelButton.prototype.getButtonTooltip = function () {
    return "dialog_islandListOverview_title";
  };
  ResourceIslandsPanelButton.prototype.isButtonVisible = function () {
    return u.CastleComponent.layoutManager.currentState != c.CastleLayoutManager.STATE_KINGDOMMAP && s.CastleModel.kingdomData.activeKingdomID == a.WorldIsland.KINGDOM_ID;
  };
  ResourceIslandsPanelButton.prototype.onButtonClicked = function () {
    u.CastleComponent.dialogHandler.registerDefaultDialogs(d.CastleListVillagesOverviewDialog);
  };
  return ResourceIslandsPanelButton;
}(r.APanelButton);
exports.ResourceIslandsPanelButton = l;
var c = require("./17.js");
var u = require("./14.js");
var d = require("./4120.js");
o.classImplementsInterfaces(l, "ICollectableRendererList");