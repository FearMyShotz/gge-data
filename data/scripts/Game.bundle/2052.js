Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function IsoCommandPackageMovementSpawn(t) {
    var i = e.call(this) || this;
    i._movementVO = t;
    return i;
  }
  n.__extends(IsoCommandPackageMovementSpawn, e);
  IsoCommandPackageMovementSpawn.prototype.createCommandList = function () {
    if (!this.movementVO) {
      return null;
    }
    var e = [];
    e.push(new a.IsoCommandObjectAddModel(this.movementVO.isoData, this.movementVO), new s.IsoCommandObjectAddView(this.movementVO), new r.IsoCommandZSortObject(this.movementVO));
    return e;
  };
  Object.defineProperty(IsoCommandPackageMovementSpawn.prototype, "movementVO", {
    get: function () {
      return this._movementVO;
    },
    enumerable: true,
    configurable: true
  });
  return IsoCommandPackageMovementSpawn;
}(require("./485.js").AIsoCommandPackage);
exports.IsoCommandPackageMovementSpawn = o;
var a = require("./691.js");
var s = require("./692.js");
var r = require("./486.js");