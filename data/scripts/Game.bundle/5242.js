Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function IsoCommandPackageUpdateSlums(t) {
    var i = e.call(this) || this;
    i._isoData = t;
    return i;
  }
  n.__extends(IsoCommandPackageUpdateSlums, e);
  IsoCommandPackageUpdateSlums.prototype.createCommandList = function () {
    var e = [];
    for (var t = 0, i = this.isoData.objects.surroundings.list; t < i.length; t++) {
      var n = i[t];
      if (n !== undefined) {
        var a = o.castAs(n, "ASlumBuildingPartVO");
        if (a) {
          e.push(new s.IsoCommandObjectUpdateModel(n.isoData, a), new r.IsoCommandObjectUpdateView(a));
        }
      }
    }
    return e;
  };
  Object.defineProperty(IsoCommandPackageUpdateSlums.prototype, "isoData", {
    get: function () {
      return this._isoData;
    },
    enumerable: true,
    configurable: true
  });
  return IsoCommandPackageUpdateSlums;
}(require("./485.js").AIsoCommandPackage);
exports.IsoCommandPackageUpdateSlums = a;
var s = require("./5243.js");
var r = require("./5244.js");