Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./6.js");
var c = require("./39.js");
var u = require("./26.js");
var d = require("./4.js");
var p = require("./130.js");
var h = function (e) {
  function RingMenuButtonUpgradeBuilding() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RingMenuButtonUpgradeBuilding, e);
  RingMenuButtonUpgradeBuilding.prototype.init = function (t, i, n) {
    var a = !!this.disp && this.disp.visible;
    e.prototype.init.call(this, t, i, n);
    this._disp = i.btn_upgradeBuilding;
    this._disp.gotoAndStop(1);
    if (n.buildingVO && n.buildingVO.isDamaged) {
      this._disp.enableButton = false;
      this._disp.toolTipText = "ringmenu_building_isDamaged";
    } else if (n.buildingVO && !n.buildingVO.hasUserLevelAndEffectsForUpgrade()) {
      this._disp.enableButton = false;
      var l = o.castAs(n.buildingVO.getUpgradeVO(), "ABasicBuildingVO");
      if (l) {
        this._disp.enableButton = false;
        if (l.sceatSkillLocked > 0 && !l.isAvailableByEffect) {
          var u = d.CastleModel.legendSkillData.getSceatSkillByID(l.sceatSkillLocked);
          this._disp.toolTipText = {
            t: "needLegendTemple_skill",
            p: [u.nameTextID, u.level]
          };
        } else {
          this._disp.toolTipText = {
            t: l.requiredLegendLevel > 1 ? c.ClientConstTextIds.LEGEND_LEVEL_NEEDED : c.ClientConstTextIds.LEVEL_NEEDED,
            p: [l.requiredLegendLevel > 1 ? l.requiredLegendLevel : l.requiredLevel]
          };
        }
      }
    } else if ((s.instanceOfClass(n, "BasicGateVE") || s.instanceOfClass(n, "GuardTowerVE") || s.instanceOfClass(n, "FactionGateGateVE") || s.instanceOfClass(n, "FactionLookoutTowerVE")) && n.buildingVO.level >= d.CastleModel.areaData.activeIsoData.objects.defences.currentWallLevel) {
      this._disp.enableButton = false;
      this._disp.toolTipText = "needWallUpgrade";
    } else if (n.buildingVO && n.buildingVO.isConstructionExpertRequiredForUpgrade && !d.CastleModel.specialEventData.getActiveEventByEventId(r.EventConst.EVENTTYPE_CONSTRUCTION_EXPERT)) {
      this._disp.enableButton = false;
      this._disp.toolTipText = "ringmenu_architectNeeded";
    } else if (n.buildingVO) {
      this._disp.toolTipText = {
        t: n.buildingVO.getUpgradeInfoString(),
        p: []
      };
      var p = false;
      for (var h = 0, C = _.BuildingCostHelper.getUpgradeCostList(n.buildingVO).list; h < C.length; h++) {
        var m = C[h];
        if (m !== undefined) {
          var f = g.ClientConstCollectable.GROUP_LIST_RESOURCES.indexOf(m.itemType) >= 0;
          var O = d.CastleModel.areaData.getActiveStorageItem(m.itemType);
          if (f && m.amount > O.amount && m.amount > O.maxAmount) {
            p = true;
          }
        }
      }
      this.handlePrimeSale();
      if (s.instanceOfClass(n, "RubyWishingWellFixedPositionBuildingVE") && !a) {
        this._disp.delayEnableButton(true);
      } else if (p) {
        this._disp.enableButton = false;
        this._disp.toolTipText = "dialog_storageFull";
      } else {
        this._disp.enableButton = true;
      }
    }
    this._disp.visible = n.buildingVO && n.buildingVO.hasUpgrade && !this.isBuildingInProgress() && !n.buildingVO.isDamaged;
  };
  RingMenuButtonUpgradeBuilding.prototype.handlePrimeSale = function () {
    if (this.targetBuilding && d.CastleModel.primeSaleData.getBestDiscountPrimeSaleComponentByShopVO(this.targetBuilding.buildingVO, true)) {
      this._disp.gotoAndStop(2);
      this._disp.toolTipText = "dialog_primeday_primesale_noise";
    } else if (this.targetBuilding) {
      this._disp.gotoAndStop(1);
      this._disp.toolTipText = {
        t: this.targetBuilding.buildingVO.getUpgradeInfoString(),
        p: []
      };
    }
  };
  RingMenuButtonUpgradeBuilding.prototype.getAction = function () {
    return l.int(m.RingMenuBuilding.ACTION_UPGRADE);
  };
  RingMenuButtonUpgradeBuilding.prototype.removeEventListeners = function () {
    d.CastleModel.specialEventData.removeEventListener(u.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEventEvent));
    d.CastleModel.privateOfferData.removeEventListener(p.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
  };
  RingMenuButtonUpgradeBuilding.prototype.addEventListeners = function () {
    d.CastleModel.specialEventData.addEventListener(u.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEventEvent));
    d.CastleModel.privateOfferData.addEventListener(p.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
  };
  RingMenuButtonUpgradeBuilding.prototype.onRemoveSpecialEventEvent = function (e) {
    if (s.instanceOfClass(e.specialEventVO, "PrimeSaleEventVO")) {
      this.handlePrimeSale();
    }
  };
  RingMenuButtonUpgradeBuilding.prototype.onOfferRemoved = function (e) {
    this.handlePrimeSale();
  };
  RingMenuButtonUpgradeBuilding.prototype.onClick = function (e, t) {
    C.Iso.controller.server.upgradeBuilding(this.targetBuilding.vo.objectId, this.targetBuilding.vo.wodId);
  };
  return RingMenuButtonUpgradeBuilding;
}(require("./98.js").ARingMenuButton);
exports.RingMenuButtonUpgradeBuilding = h;
var g = require("./86.js");
var C = require("./33.js");
var _ = require("./1199.js");
var m = require("./369.js");
a.classImplementsInterfaces(h, "IRingMenuButton");