Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./15.js");
var c = require("./4.js");
var u = require("./324.js");
var d = require("./8.js");
var p = function (e) {
  function RingMenuButtonStore() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RingMenuButtonStore, e);
  RingMenuButtonStore.prototype.init = function (t, i, n) {
    e.prototype.init.call(this, t, i, n);
    this._disp = i.btn_store;
    this.updateButtonStatus();
  };
  RingMenuButtonStore.prototype.addEventListeners = function () {
    e.prototype.addEventListeners.call(this);
    l.CastleBasicController.getInstance().addEventListener(u.DecoStorageEvent.ON_INVENTORY_UPDATED, this.bindFunction(this.onDecoStorageUpdated));
  };
  RingMenuButtonStore.prototype.removeEventListeners = function () {
    l.CastleBasicController.getInstance().removeEventListener(u.DecoStorageEvent.ON_INVENTORY_UPDATED, this.bindFunction(this.onDecoStorageUpdated));
    e.prototype.removeEventListeners.call(this);
  };
  RingMenuButtonStore.prototype.updateButtonStatus = function () {
    var e = this.isButtonVisible();
    this._disp.visible = e;
    if (e) {
      var t = this.isButtonEnabled();
      d.ButtonHelper.enableButton(this._disp, t);
      this._disp.toolTipText = this.disableTextID;
    }
  };
  RingMenuButtonStore.prototype.getInfoText = function () {
    return s.Localize.text("store");
  };
  RingMenuButtonStore.prototype.isButtonVisible = function () {
    return !!this.targetBuilding && !!this.targetBuilding.buildingVO && this.targetBuilding.buildingVO.storeable && !this.isBuildingInProgress() && !this.targetBuilding.buildingVO.isDamaged && !o.EnvGlobalsHandler.globals.isCrossplay;
  };
  RingMenuButtonStore.prototype.isButtonEnabled = function () {
    if (this.targetBuilding.buildingVO) {
      if (this.targetBuilding.buildingVO.isDistrict) {
        var e = c.CastleModel.areaData.activeCommonInfo;
        var t = r.int(this.targetBuilding.buildingVO.districtTypeID);
        if (e && !e.isDistrictEmpty(t)) {
          this.disableTextID = "ringmenu_store_districtNotEmpty";
          return false;
        }
      } else if (this.targetBuilding.buildingVO.isUnique() && c.CastleModel.decoStorage.getMainStorage().isCapacityFull()) {
        this.disableTextID = "dialog_buildingsStorehouse_capacityFull_tooltip";
        return false;
      }
    }
    this.disableTextID = null;
    return true;
  };
  RingMenuButtonStore.prototype.onClick = function (e, t) {
    this.parent.hide();
    h.Iso.controller.server.storeBuildingToLocalInventory(this.targetBuilding.vo.objectId);
  };
  RingMenuButtonStore.prototype.onDecoStorageUpdated = function (e) {
    this.updateButtonStatus();
  };
  return RingMenuButtonStore;
}(require("./98.js").ARingMenuButton);
exports.RingMenuButtonStore = p;
var h = require("./33.js");
a.classImplementsInterfaces(p, "IRingMenuButton");