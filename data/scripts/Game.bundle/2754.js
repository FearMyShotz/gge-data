Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./6.js");
var s = require("./4.js");
var r = require("./87.js");
var l = function (e) {
  function IsoDataObjectGroupFixedPosition() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(IsoDataObjectGroupFixedPosition, e);
  IsoDataObjectGroupFixedPosition.prototype.initObjects = function () {
    this.checkAndCreateWishWell();
    if (this.list != null) {
      for (var e = 0, t = this.list; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.updateData();
        }
      }
    }
  };
  IsoDataObjectGroupFixedPosition.prototype.updateObjectByServer = function (e, t) {
    if (this.list != null) {
      for (var i = 0, n = this.list; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o.objectId == e) {
          d.IsoHelper.data.updateIsoObjectByServer(o, t);
          var a = o;
          switch (a.buildingState) {
            case r.IsoBuildingStateEnum.DISASSEMBLED_COMPLETED:
            case r.IsoBuildingStateEnum.UPGRADE_COMPLETED:
              this.isoData.updater.removeObjectByObjectId(a.objectId);
          }
          return o;
        }
      }
    }
    return null;
  };
  IsoDataObjectGroupFixedPosition.prototype.checkAndCreateWishWell = function () {
    if (this.isoData && this.isoData.areaData && this.isoData.areaData.isMyHomeCastle) {
      var e;
      for (var t = a.int(this.list.length - 1); t >= 0; t--) {
        var i = this.list[t];
        if (h.instanceOfClass(i, "RubyWishingWellFixedPositionBuildingVO") && (e = i)) {
          p.Iso.controller.processor.executePackage(new u.IsoCommandPackageObjectRemoveByVO(e));
        }
      }
      if (this.canHaveWishWell()) {
        var n = d.IsoHelper.data.createIsoObjectVOByXml(s.CastleModel.rubyWishingWellData.getCurrentWodId(), this.isoData, true);
        p.Iso.controller.processor.executePackage(new c.IsoCommandPackageObjectAdd(n));
      }
    }
  };
  IsoDataObjectGroupFixedPosition.prototype.parseGCA = function (e) {
    var t = e.FP;
    if (t && (this.resetList(), t != null)) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          this.list.push(d.IsoHelper.data.createIsoObjectVOByServer(o, this.isoData));
        }
      }
    }
  };
  IsoDataObjectGroupFixedPosition.prototype.canHaveWishWell = function () {
    return this.isoData.areaData.isMyHomeCastle && s.CastleModel.userData.userLevel >= o.WishingWellConst.MIN_REQUIRED_PLAYER_LEVEL && !g.SpecialServerHelper.isOnSpecialServer;
  };
  return IsoDataObjectGroupFixedPosition;
}(require("./358.js").AIsoDataObjectGroupSimpleList);
exports.IsoDataObjectGroupFixedPosition = l;
var c = require("./2755.js");
var u = require("./1490.js");
var d = require("./46.js");
var p = require("./34.js");
var h = require("./1.js");
var g = require("./44.js");