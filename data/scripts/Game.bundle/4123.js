Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./58.js");
var s = require("./39.js");
var r = require("./183.js");
var l = require("./4.js");
var c = require("./197.js");
var u = require("./89.js");
var d = function (e) {
  function TreasureMapPanelButton() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(TreasureMapPanelButton, e);
  TreasureMapPanelButton.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    l.CastleModel.treasureMapData.addEventListener(r.CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED, this.bindFunction(this.onTreasureMapDataUpdated));
    this.listenOnXPChanged();
  };
  TreasureMapPanelButton.prototype.removeEventListener = function () {
    l.CastleModel.treasureMapData.removeEventListener(r.CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED, this.bindFunction(this.onTreasureMapDataUpdated));
    e.prototype.removeEventListener.call(this);
  };
  TreasureMapPanelButton.prototype.updateOnVisible = function () {
    this.setHighlight(u.APanelButton.HIGHLIGHT_TYPE_YELLOW, l.CastleModel.treasureHuntData.treasureHuntMapVO && l.CastleModel.treasureHuntData.hasMapsAvailable && l.CastleModel.treasureHuntData.treasureHuntMapVO.hasAllPieces);
  };
  Object.defineProperty(TreasureMapPanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Btn_TreasureMap;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.APanelButton.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  TreasureMapPanelButton.prototype.isButtonEnabled = function () {
    return l.CastleModel.userData.userLevel >= a.ClientConstLevelRestrictions.MIN_LEVEL_ADVENTURE_MAP;
  };
  TreasureMapPanelButton.prototype.isButtonVisible = function () {
    return h.CastleComponent.layoutManager.currentState == p.CastleLayoutManager.STATE_KINGDOMMAP || l.CastleModel.kingdomData.activeKingdomID == 0;
  };
  TreasureMapPanelButton.prototype.getButtonTooltip = function () {
    if (this.isButtonEnabled()) {
      return "panel_action_treasureMap";
    } else if (l.CastleModel.userData.hasLevelFor(a.ClientConstLevelRestrictions.MIN_LEVEL_ADVENTURE_MAP)) {
      return "dialog_treasureMap_comingsoon";
    } else {
      return s.ClientConstTextIds.LEVEL_NEEDED + c.CastleToolTipManager.ID_PARAM_SEPERATOR + a.ClientConstLevelRestrictions.MIN_LEVEL_ADVENTURE_MAP;
    }
  };
  TreasureMapPanelButton.prototype.onButtonClicked = function () {
    if (l.CastleModel.treasureHuntData.hasMapsAvailable) {
      h.CastleComponent.dialogHandler.registerDefaultDialogs(g.CastleTreasureMapDialog);
    } else {
      h.CastleComponent.dialogHandler.registerDefaultDialogs(C.CastleTreasureMapNoNewMapDialog);
    }
  };
  TreasureMapPanelButton.prototype.onTreasureMapDataUpdated = function (e) {
    this.update();
  };
  return TreasureMapPanelButton;
}(u.APanelButton);
exports.TreasureMapPanelButton = d;
var p = require("./17.js");
var h = require("./14.js");
var g = require("./1329.js");
var C = require("./4124.js");
o.classImplementsInterfaces(d, "ICollectableRendererList");