Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./6.js");
var r = require("./71.js");
var l = require("./4.js");
var c = require("./89.js");
var u = function (e) {
  function HunterPanelButton() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(HunterPanelButton, e);
  HunterPanelButton.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    h.CastleComponent.controller.addEventListener(r.AreaDataEvent.ON_HUNTER_BUILDING_DATA_SET, this.bindFunction(this.onHunterBuildingDataSet));
    this.listenOnXPChanged();
  };
  HunterPanelButton.prototype.removeEventListener = function () {
    h.CastleComponent.controller.removeEventListener(r.AreaDataEvent.ON_HUNTER_BUILDING_DATA_SET, this.bindFunction(this.onHunterBuildingDataSet));
    e.prototype.removeEventListener.call(this);
  };
  Object.defineProperty(HunterPanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Btn_ActionPanelHunter;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.APanelButton.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  HunterPanelButton.prototype.isButtonEnabled = function () {
    return (!l.CastleModel.areaData.activeArea || !!l.CastleModel.areaData.activeArea.isInAreaWithHunter) && h.CastleComponent.layoutManager.currentState == p.CastleLayoutManager.STATE_ISO && !l.CastleModel.hunterData.isHunterBuildingUnderConstruction && (l.CastleModel.hunterData.isHunterBuildingBuilt || l.CastleModel.hunterData.isAllowedToBuild);
  };
  HunterPanelButton.prototype.getButtonTooltip = function () {
    if (!l.CastleModel.areaData.activeArea || l.CastleModel.areaData.activeArea.isInAreaWithHunter && h.CastleComponent.layoutManager.currentState == p.CastleLayoutManager.STATE_ISO) {
      if (l.CastleModel.hunterData.isHunterBuildingBuilt) {
        return "dialog_hunter_title";
      } else if (l.CastleModel.hunterData.isHunterBuildingUnderConstruction) {
        return "hunter_teaser_info_build";
      } else if (l.CastleModel.hunterData.isAllowedToBuild) {
        return "hunter_teaser_info_ready";
      } else {
        return a.Localize.text("hunter_teaser_info", [l.CastleModel.hunterData.hunterBuildingVO.requiredLevel]);
      }
    } else {
      return "hunter_teaser_info_blocked";
    }
  };
  HunterPanelButton.prototype.onButtonClicked = function () {
    if (l.CastleModel.hunterData.isHunterBuildingBuilt) {
      h.CastleComponent.dialogHandler.registerDefaultDialogs(g.CastleHunterDialog);
    } else if (l.CastleModel.hunterData.isAllowedToBuild) {
      h.CastleComponent.layoutManager.hideAllIngameUIComponents();
      d.Iso.controller.viewUpdater.switchBuildModeInOwnCastle(true);
      var e = h.CastleComponent.layoutManager.getPanel(C.CastleDecoShopPanel);
      var t = l.CastleModel.hunterData.hunterBuildingVO;
      for (var i = _.CastleDecoShopItemArrayHelper.getBuildingsByCategory(t.shopCategory), n = 0; n < i.length; n++) {
        if (i[n].wodId == t.wodId) {
          e.changeCategory(t.shopCategory, s.int(n / C.CastleDecoShopPanel.ITEMS_PER_PAGE), true);
          e.highLightFilteredArrayIndex(n % C.CastleDecoShopPanel.ITEMS_PER_PAGE);
          break;
        }
      }
    }
  };
  HunterPanelButton.prototype.onHunterBuildingDataSet = function (e) {
    this.update();
  };
  return HunterPanelButton;
}(c.APanelButton);
exports.HunterPanelButton = u;
var d = require("./33.js");
var p = require("./17.js");
var h = require("./14.js");
var g = require("./1590.js");
var C = require("./260.js");
var _ = require("./626.js");
o.classImplementsInterfaces(u, "ICollectableRendererList");