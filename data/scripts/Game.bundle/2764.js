Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = function (e) {
  function IsoDataObjectGroupSurrounding() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(IsoDataObjectGroupSurrounding, e);
  IsoDataObjectGroupSurrounding.prototype.initObjects = function () {
    var e = new r.IsoGeneratorSurroundings();
    this._list = e.build();
    if (this.list != null) {
      for (var t = 0, i = this.list; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && a.instanceOfClass(n, "AIsoObjectVO")) {
          var o = n;
          o.init(this.isoData);
          o.updateData();
        }
      }
    }
    this.isoData.objects.invalidateCompleteObjectsList();
  };
  IsoDataObjectGroupSurrounding.prototype.getStoneField = function () {
    return this.getSurroundingByClass(c.StoneResourceFieldVO);
  };
  IsoDataObjectGroupSurrounding.prototype.getWoodField = function () {
    return this.getSurroundingByClass(u.WoodResourceFieldVO);
  };
  IsoDataObjectGroupSurrounding.prototype.getFoodField = function () {
    return this.getSurroundingByClass(l.FoodResourceFieldVO);
  };
  IsoDataObjectGroupSurrounding.prototype.getSurroundingByClass = function (e) {
    if (this.list != null) {
      for (var t = 0, i = this.list; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && a.instanceOfClass(n, o.getQualifiedClassName(e))) {
          return n;
        }
      }
    }
  };
  IsoDataObjectGroupSurrounding.prototype.getResourceCarts = function () {
    var e = [];
    if (this.list != null) {
      for (var t = 0, i = this.list; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && a.instanceOfClass(n, "ResourceCartSurroundingsVO")) {
          e.push(n);
        }
      }
    }
    return e;
  };
  return IsoDataObjectGroupSurrounding;
}(require("./358.js").AIsoDataObjectGroupSimpleList);
exports.IsoDataObjectGroupSurrounding = s;
var r = require("./2765.js");
var l = require("./1004.js");
var c = require("./1005.js");
var u = require("./1006.js");