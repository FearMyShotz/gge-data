Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./58.js");
var s = require("./39.js");
var r = require("./53.js");
var l = require("./4.js");
var c = require("./197.js");
var u = require("./89.js");
var d = function (e) {
  function KingdomMapPanelButton() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(KingdomMapPanelButton, e);
  KingdomMapPanelButton.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    this.listenOnXPChanged();
  };
  KingdomMapPanelButton.prototype.updateOnVisible = function () {
    this.setMark(!!l.CastleModel.kingdomData.getKingdomThatIsReadyForUnlock());
  };
  KingdomMapPanelButton.prototype.isButtonEnabled = function () {
    return h.CastleComponent.layoutManager.currentState != p.CastleLayoutManager.STATE_KINGDOMMAP && l.CastleModel.userData.hasLevelFor(a.ClientConstLevelRestrictions.MIN_LEVEL_MAP_OF_KINGDOMS);
  };
  KingdomMapPanelButton.prototype.isButtonVisible = function () {
    return !r.ABGHelper.isOnABGServer;
  };
  KingdomMapPanelButton.prototype.getButtonTooltip = function () {
    if (this.isButtonEnabled() || h.CastleComponent.layoutManager.currentState == p.CastleLayoutManager.STATE_KINGDOMMAP) {
      return "kingdom_map";
    } else {
      return s.ClientConstTextIds.LEVEL_NEEDED + c.CastleToolTipManager.ID_PARAM_SEPERATOR + a.ClientConstLevelRestrictions.MIN_LEVEL_MAP_OF_KINGDOMS;
    }
  };
  Object.defineProperty(KingdomMapPanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Btn_kingdomMap_Relicus;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.APanelButton.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  KingdomMapPanelButton.prototype.onButtonClicked = function () {
    h.CastleComponent.layoutManager.state = p.CastleLayoutManager.STATE_KINGDOMMAP;
  };
  return KingdomMapPanelButton;
}(u.APanelButton);
exports.KingdomMapPanelButton = d;
var p = require("./17.js");
var h = require("./14.js");
o.classImplementsInterfaces(d, "ICollectableRendererList");