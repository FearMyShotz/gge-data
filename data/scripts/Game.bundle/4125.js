Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./71.js");
var s = require("./4.js");
var r = require("./89.js");
var l = function (e) {
  function BreweryPanelButton() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(BreweryPanelButton, e);
  BreweryPanelButton.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    c.CastleComponent.controller.addEventListener(a.AreaDataEvent.ON_BREWERY_BUILDING_DATA_SET, this.bindFunction(this.onBreweryBuildingDataSet));
  };
  BreweryPanelButton.prototype.removeEventListener = function () {
    e.prototype.removeEventListener.call(this);
    c.CastleComponent.controller.removeEventListener(a.AreaDataEvent.ON_BREWERY_BUILDING_DATA_SET, this.bindFunction(this.onBreweryBuildingDataSet));
  };
  BreweryPanelButton.prototype.onBreweryBuildingDataSet = function (e) {
    this.update();
  };
  Object.defineProperty(BreweryPanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Icon_Mead;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.APanelButton.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  BreweryPanelButton.prototype.isButtonVisible = function () {
    return c.CastleComponent.layoutManager.currentState == d.CastleLayoutManager.STATE_ISO && !!s.CastleModel.areaData.activeArea.isMyArea && !s.CastleModel.breweryData.isBreweryBuildingUnderConstruction && s.CastleModel.breweryData.isBreweryBuildingBuilt;
  };
  BreweryPanelButton.prototype.getButtonTooltip = function () {
    return "dialog_relicBrewery_header";
  };
  BreweryPanelButton.prototype.onButtonClicked = function () {
    c.CastleComponent.dialogHandler.registerDefaultDialogs(u.CastleBreweryDialog);
  };
  return BreweryPanelButton;
}(r.APanelButton);
exports.BreweryPanelButton = l;
var c = require("./14.js");
var u = require("./1023.js");
var d = require("./17.js");
o.classImplementsInterfaces(l, "ICollectableRendererList");