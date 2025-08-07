Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function IsoCommandPackageObjectAdd(t) {
    return e.call(this, t) || this;
  }
  n.__extends(IsoCommandPackageObjectAdd, e);
  IsoCommandPackageObjectAdd.prototype.createCommandList = function () {
    if (!this.vo) {
      return null;
    }
    var e = [];
    e.push(new a.IsoCommandObjectAddModel(this.vo.isoData, this.vo));
    if (this.vo.objectType.groupType.needsAdvancedUpdates) {
      e.push(new r.IsoCommandAreaDataUpdated(this.vo.isoData));
    }
    e.push(new s.IsoCommandObjectAddView(this.vo), new l.IsoCommandZSortAll());
    return e;
  };
  return IsoCommandPackageObjectAdd;
}(require("./634.js").AIsoCommandPackageObject);
exports.IsoCommandPackageObjectAdd = o;
var a = require("./693.js");
var s = require("./694.js");
var r = require("./485.js");
var l = require("./691.js");