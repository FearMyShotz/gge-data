Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./60.js");
var s = require("./4.js");
var r = require("./1484.js");
var l = function (e) {
  function IsoDataObjectGroupEvent() {
    var t = this;
    t._buildingPoints = [];
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(IsoDataObjectGroupEvent, e);
  IsoDataObjectGroupEvent.prototype.initObjects = function () {
    this.resetList();
    if (this.isoData && this.isoData.areaData) {
      if (this.isoData.areaData.isLowLevelUnderworld) {
        this.addSpecialEventBuildingsByLowLevelUnderWorld();
      } else {
        this.addSpecialEventBuildings();
      }
      this.addOfferBuildings();
      this.list.sort(IsoDataObjectGroupEvent.sortBuildings);
      this.updateBuildingPoints();
      this.assignBuildingPoints();
    }
  };
  IsoDataObjectGroupEvent.prototype.addSpecialEventBuildings = function () {
    var e = s.CastleModel.privateOfferData.getListOfHiddenEvents();
    for (var t = 0, i = Array.from(s.CastleModel.specialEventData.activeEvents.values()); t < i.length; t++) {
      var n = i[t];
      if (n !== undefined) {
        if (!!this.hasSpecialEventABuildingInThisCastle(n) && (!(e.indexOf(n.eventId) >= 0) || !this.isoData.areaData.isMyHomeCastle)) {
          this.list.push(this.createEventBuildingByEvent(n));
        }
      }
    }
    for (var o = 0, a = Array.from(s.CastleModel.specialEventData.activeFakeEvents.values()); o < a.length; o++) {
      var r = a[o];
      if (r !== undefined && this.hasSpecialEventABuildingInThisCastle(r) && e.indexOf(r.eventId) < 0) {
        this.list.push(this.createEventBuildingByEvent(r));
      }
    }
  };
  IsoDataObjectGroupEvent.prototype.addSpecialEventBuildingsByLowLevelUnderWorld = function () {
    var e = s.CastleModel.specialEventData.getEventByClass(u.PrivateUnitDealerEventVO);
    if (e) {
      var t = this.createEventBuildingByEvent(e);
      if (t) {
        this.list.push(t);
      }
    }
  };
  IsoDataObjectGroupEvent.prototype.addOfferBuildings = function () {
    var e;
    var t = s.CastleModel.privateOfferData.getPrivateOffersWithVisualParamter(a.ClientConstOffer.OFFER_VISUAL_ISO_OBJECT);
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var r = n[i];
        if (r !== undefined && (e = o.castAs(r.getDescriptionByName(a.ClientConstOffer.VISUAL_COMPONENT_CONTAINER).visuals.get(a.ClientConstOffer.OFFER_VISUAL_ISO_OBJECT), "OfferDescriptionVisualIsoObject")) && e.isVisible && e.isIsoObjectVisibleByArea(this.isoData.areaData.areaInfo.areaType) && this.isoData.areaData.isMyHomeCastle) {
          this.list.push(this.createOfferBuilding(e, r));
        }
      }
    }
  };
  IsoDataObjectGroupEvent.prototype.updateBuildingPoints = function () {
    if (this.isoData.areaData.isMyHomeCastle) {
      this._buildingPoints = r.IsoGeneratorEventBuildingPosition.getPosListByNewVersion(this.isoData.grid);
    } else {
      this._buildingPoints = r.IsoGeneratorEventBuildingPosition.getPosListByOldVersion(this.isoData.grid, this.list.length);
    }
  };
  IsoDataObjectGroupEvent.prototype.assignBuildingPoints = function () {
    var e = 0;
    if (this.list != null) {
      for (var t = 0, i = this.list; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          var o = this._buildingPoints[e];
          if (o) {
            n.x = o.x;
            n.y = o.y;
          }
          e++;
        }
      }
    }
  };
  IsoDataObjectGroupEvent.prototype.createEventBuildingByEvent = function (e) {
    var t = s.CastleModel.wodData.createVObyWOD(e.eventBuildingWOD, c.CastleWodData.TYPE_BUILDING);
    t.eventVO = e;
    t.init(this.isoData);
    t.updateData();
    return t;
  };
  IsoDataObjectGroupEvent.prototype.createOfferBuilding = function (e, t) {
    var i = new d.OfferBuildingVO(e.objectType, e.objectName, t);
    i.init(this.isoData);
    i.updateData();
    return i;
  };
  IsoDataObjectGroupEvent.prototype.hasSpecialEventABuildingInThisCastle = function (e) {
    return !!e.isVisible && !!this.isoData.areaData.isMyArea && !this.isoData.areaData.isUnderConquerProcess && !this.isoData.areaData.areaInfo.isUnderConquerControl && !!e.isActive && !(e.eventBuildingWOD <= 0) && !(s.CastleModel.userData.userLevel < e.minLevel) && !(e.kingdomIDs.indexOf(s.CastleModel.kingdomData.activeKingdomID) < 0) && e.allowedAreaTypes.indexOf(this.isoData.areaData.areaInfo.areaType) >= 0;
  };
  IsoDataObjectGroupEvent.sortBuildings = function (e, t) {
    return e.isoSortOrder - t.isoSortOrder;
  };
  return IsoDataObjectGroupEvent;
}(require("./358.js").AIsoDataObjectGroupSimpleList);
exports.IsoDataObjectGroupEvent = l;
var c = require("./56.js");
var u = require("./998.js");
var d = require("./1487.js");