Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./6.js");
var a = require("./18.js");
var s = require("./4.js");
var r = require("./358.js");
var l = createjs.Point;
var c = function (e) {
  function IsoDataObjectGroupExpansion() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(IsoDataObjectGroupExpansion, e);
  IsoDataObjectGroupExpansion.prototype.initObjects = function () {
    this.resetList();
    this.createExpansionObjects();
    if (this.list != null) {
      for (var e = 0, t = this.list; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.updateData();
        }
      }
    }
  };
  IsoDataObjectGroupExpansion.prototype.createExpansionObjects = function () {
    if (this.isoData.areaData.isMyArea && !this.isoData.areaData.isUnderConquerProcess) {
      var e = s.CastleModel.wodData.createVObyWOD(a.ClientConstCastle.EXTENSION_GROUND_WOD_ID, u.CastleWodData.TYPE_BUILDING);
      var t = s.CastleModel.wodData.createVObyWOD(a.ClientConstCastle.START_GROUND_WOD_ID, u.CastleWodData.TYPE_BUILDING);
      var i = this.isoData.objects.groundObjects.startPoint;
      var n = o.int(s.CastleModel.areaData.activeIsoData.objects.groundObjects.expansionAmount + 1);
      var r = o.int(i.x - a.ClientConstCastle.EXPANSIONS_TO_EACHSIDE * e.width);
      var c = o.int(i.y - a.ClientConstCastle.EXPANSIONS_TO_EACHSIDE * e.width);
      var d = o.int(i.x + t.width + a.ClientConstCastle.EXPANSIONS_TO_EACHSIDE * e.width) + (n >= 17 ? e.width : 0);
      var h = o.int(i.x + t.width + a.ClientConstCastle.EXPANSIONS_TO_EACHSIDE * e.width);
      p.getLogger("CastleGame").debug("startX: " + r + "|  startY: " + c + "  | endX: " + d + " | endY: " + h);
      for (var g = r; g < d; g += o.int(e.height)) {
        for (var C = c; C < h; C += o.int(e.width)) {
          var _ = new l(g, C);
          var m = new l(g, C - 1);
          var f = new l(g + e.height - 1, C - 1);
          var O = new l(g, C + e.width + 1);
          var E = new l(g + e.height - 1, C + e.width + 1);
          if (!this.isoData.grid.isPointOnBuildingGround(_)) {
            if (this.isoData.grid.isPointOnBuildingGround(m) && this.isoData.grid.isPointOnBuildingGround(f) && !this.isoData.grid.isPointOnBuildingGround(O) && !this.isoData.grid.isPointOnBuildingGround(E)) {
              this.addExpansionObject(g, C, 1, e);
            } else if (!this.isoData.grid.isPointOnBuildingGround(m) && !this.isoData.grid.isPointOnBuildingGround(f) && this.isoData.grid.isPointOnBuildingGround(O) && this.isoData.grid.isPointOnBuildingGround(E)) {
              this.addExpansionObject(g, C, 3, e);
            } else if (this.isoData.grid.isPointOnBuildingGround(m) && this.isoData.grid.isPointOnBuildingGround(f) && this.isoData.grid.isPointOnBuildingGround(O) && this.isoData.grid.isPointOnBuildingGround(E)) {
              this.addExpansionObject(g, C, 3, e);
            }
          }
        }
      }
      for (C = c; C < h; C += o.int(e.height)) {
        for (g = r; g < d; g += o.int(e.width)) {
          _ = new l(g, C);
          m = new l(g - 1, C);
          f = new l(g - 1, C + e.height - 1);
          E = new l(g + e.width + 1, C);
          O = new l(g + e.width + 1, C + e.height - 1);
          if (!this.isoData.grid.isPointOnBuildingGround(_)) {
            if (this.isoData.grid.isPointOnBuildingGround(m) && this.isoData.grid.isPointOnBuildingGround(f) && !this.isoData.grid.isPointOnBuildingGround(O) && !this.isoData.grid.isPointOnBuildingGround(E)) {
              this.addExpansionObject(g, C, 0, e);
            } else if (!this.isoData.grid.isPointOnBuildingGround(m) && !this.isoData.grid.isPointOnBuildingGround(f) && this.isoData.grid.isPointOnBuildingGround(O) && this.isoData.grid.isPointOnBuildingGround(E)) {
              this.addExpansionObject(g, C, 2, e);
            } else if (this.isoData.grid.isPointOnBuildingGround(m) && this.isoData.grid.isPointOnBuildingGround(f) && this.isoData.grid.isPointOnBuildingGround(O) && this.isoData.grid.isPointOnBuildingGround(E)) {
              this.addExpansionObject(g, C, 2, e);
            }
          }
        }
      }
    }
  };
  IsoDataObjectGroupExpansion.prototype.addExpansionObject = function (e, t, i, n) {
    var o = new d.CastleExpansionVO();
    o.init(this.isoData);
    o.width = n.width;
    o.height = n.height;
    o.x = e;
    o.y = t;
    p.getLogger("CastleGame").debug("Expansion:  x: " + e + "|  y: " + t + "  | width: " + n.width + " | height: " + n.height + " | rotation: " + i);
    o.rotation = i;
    this.list.push(o);
  };
  return IsoDataObjectGroupExpansion;
}(r.AIsoDataObjectGroupSimpleList);
exports.IsoDataObjectGroupExpansion = c;
var u = require("./56.js");
var d = require("./1488.js");
var p = require("./118.js");