Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./4.js");
var r = require("./89.js");
var l = function (e) {
  function FactionCampsPanelButton() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(FactionCampsPanelButton, e);
  Object.defineProperty(FactionCampsPanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Btn_FactionCamps;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.APanelButton.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  FactionCampsPanelButton.prototype.isButtonEnabled = function () {
    return s.CastleModel.kingdomData.activeKingdomID == a.FactionConst.KINGDOM_ID;
  };
  FactionCampsPanelButton.prototype.getButtonTooltip = function () {
    return "panel_action_campoverview";
  };
  FactionCampsPanelButton.prototype.isButtonVisible = function () {
    return u.CastleComponent.layoutManager.currentState != c.CastleLayoutManager.STATE_KINGDOMMAP && s.CastleModel.kingdomData.activeKingdomID == a.FactionConst.KINGDOM_ID;
  };
  FactionCampsPanelButton.prototype.onButtonClicked = function () {
    u.CastleComponent.dialogHandler.registerDefaultDialogs(d.CastleListCampsOverviewDialog);
  };
  return FactionCampsPanelButton;
}(r.APanelButton);
exports.FactionCampsPanelButton = l;
var c = require("./17.js");
var u = require("./14.js");
var d = require("./4107.js");
o.classImplementsInterfaces(l, "ICollectableRendererList");