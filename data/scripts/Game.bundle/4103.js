Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./80.js");
var s = require("./4.js");
var r = require("./798.js");
var l = require("./1031.js");
var c = require("./89.js");
var u = function (e) {
  function CraftingPanelButton(t) {
    var i = e.call(this) || this;
    i._objectType = t;
    return i;
  }
  n.__extends(CraftingPanelButton, e);
  CraftingPanelButton.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
  };
  CraftingPanelButton.prototype.removeEventListener = function () {
    e.prototype.removeEventListener.call(this);
  };
  Object.defineProperty(CraftingPanelButton.prototype, "iconClass", {
    get: function () {
      switch (this._objectType) {
        case a.IsoObjectEnum.REFINERY:
          return Library.CastleInterfaceElements.Btn_Refinery;
        case a.IsoObjectEnum.TOOLSMITH:
          return Library.CastleInterfaceElements.Btn_Toolsmith;
        case a.IsoObjectEnum.DRAGONHOARD:
          return Library.CastleInterfaceElements.Btn_DragonHoard;
      }
      return null;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.APanelButton.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CraftingPanelButton.prototype.isButtonVisible = function () {
    return !!s.CastleModel.areaData.activeArea && s.CastleModel.areaData.activeArea.isMyArea && d.CastleComponent.layoutManager.currentState == p.CastleLayoutManager.STATE_ISO && s.CastleModel.areaData.activeIsoData.objects.provider.hasFunctionalBuildingByType(this._objectType);
  };
  CraftingPanelButton.prototype.getButtonTooltip = function () {
    return s.CastleModel.areaData.activeIsoData.objects.provider.getFunctionalBuildingByType(this._objectType).getNameString();
  };
  CraftingPanelButton.prototype.onButtonClicked = function () {
    var e = s.CastleModel.areaData.activeIsoData.objects.provider.getFunctionalBuildingByType(this._objectType);
    if (e) {
      d.CastleComponent.dialogHandler.registerDefaultDialogs(r.CastleRefineryToolsmithDialog, new l.CastleRefineryToolsmithDialogProperties(e.craftingQueueId));
    }
  };
  return CraftingPanelButton;
}(c.APanelButton);
exports.CraftingPanelButton = u;
var d = require("./14.js");
var p = require("./17.js");
o.classImplementsInterfaces(u, "ICollectableRendererList");