Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./6.js");
var a = require("./564.js");
var s = require("./4148.js");
var r = require("./4149.js");
var l = require("./4150.js");
var c = function () {
  function CastleSeasonAppearanceItemComponent() {}
  CastleSeasonAppearanceItemComponent.prototype.initComponent = function (e, t, i) {
    var n = e.tMapNodeVOs;
    this._appearanceItems = [];
    this._walls = [];
    for (var o = 0; o < 10; o++) {
      if (i["deco_column_" + o]) {
        i["deco_column_" + o].visible = false;
      }
    }
    for (var c = 0; c < n.length; c++) {
      var u = n[c];
      var d = i["bg_node_" + u.pos];
      var p = i["deco_column_" + u.columnOnMap];
      if (d) {
        this._appearanceItems.push(new s.BackGroundAppearanceItem(d, u));
      }
      if (p) {
        this._appearanceItems.push(new r.DecoColumnAppearanceItem(p, u));
      }
    }
    var h = i.walls_container;
    if (h) {
      for (var g = 0; g < h.numChildren; g++) {
        var C = h.getChildAt(g);
        if (C) {
          var _ = C.name.substr(5).split("_");
          var m = a.CastleArrayHelper.toIntVector(_);
          var f = new l.WallAppearanceItem(C, m);
          f.updateVisibility(e.tMapNodeVOs);
          this._walls.push(f);
        }
      }
    }
  };
  CastleSeasonAppearanceItemComponent.prototype.updateComponent = function (e) {
    if (this._appearanceItems && e) {
      var t = 0;
      for (t = 0; t < this._appearanceItems.length; t++) {
        var i = o.int(this._appearanceItems[t].getNodeVO().nodeID);
        var n = e.getNodeById(i);
        this._appearanceItems[t].updateVO(n);
      }
      for (t = 0; t < this._walls.length; t++) {
        this._walls[t].updateVisibility(e.tMapNodeVOs);
      }
    }
  };
  CastleSeasonAppearanceItemComponent.prototype.destroy = function () {
    if (this._appearanceItems) {
      if (this._appearanceItems != null) {
        for (var e = 0, t = this._appearanceItems; e < t.length; e++) {
          var i = t[e];
          if (i !== undefined) {
            i.dispose();
            this._appearanceItems.splice(this._appearanceItems.indexOf(i), 1);
          }
        }
      }
      this._appearanceItems = null;
    }
  };
  return CastleSeasonAppearanceItemComponent;
}();
exports.CastleSeasonAppearanceItemComponent = c;
n.classImplementsInterfaces(c, "ITreasureUpdateComponent");