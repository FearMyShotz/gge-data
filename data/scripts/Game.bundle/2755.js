Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./18.js");
var a = require("./358.js");
var s = createjs.Point;
var r = function (e) {
  function IsoDataObjectGroupGround() {
    var t = this;
    t._startPoint = new s();
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(IsoDataObjectGroupGround, e);
  IsoDataObjectGroupGround.prototype.addObject = function (t) {
    t.type = l.IsoHelper.data.getBackgroundType(this.isoData);
    e.prototype.addObject.call(this, t);
    this.isoData.grid.updateGrounds();
  };
  IsoDataObjectGroupGround.prototype.parseGCA = function (e) {
    var t = e.BG;
    if (t) {
      var i;
      this.resetList();
      if (t != null) {
        for (var n = 0, a = t; n < a.length; n++) {
          var r = a[n];
          if (r !== undefined) {
            (i = l.IsoHelper.data.createIsoObjectVOByServer(r, this.isoData)).type = l.IsoHelper.data.getBackgroundType(this.isoData);
            this.list.push(i);
            if (i.wodId == o.ClientConstCastle.START_GROUND_WOD_ID) {
              this._startPoint = new s(i.x, i.y);
            }
          }
        }
      }
      this.isoData.grid.updateGrounds();
    }
  };
  Object.defineProperty(IsoDataObjectGroupGround.prototype, "expansionAmount", {
    get: function () {
      return this.list.length - 1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataObjectGroupGround.prototype, "startPoint", {
    get: function () {
      return this._startPoint;
    },
    enumerable: true,
    configurable: true
  });
  return IsoDataObjectGroupGround;
}(a.AIsoDataObjectGroupSimpleList);
exports.IsoDataObjectGroupGround = r;
var l = require("./46.js");