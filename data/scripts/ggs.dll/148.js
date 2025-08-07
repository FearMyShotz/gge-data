Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./2.js").getLogger("WorldAssignment.BranchesManager");
var a = function () {
  function BranchesManager() {
    this.branches = [];
  }
  BranchesManager.prototype.getBranchByZoneId = function (e) {
    var t;
    i.debug("BranchesManager.getBranchByZoneId: ", e);
    var n = null;
    for (var a = 0; a < this.branches.length; a++) {
      t = this.branches[a];
      i.debug("looping branch: ", t.zones);
      if (t.zones.indexOf(e) > -1) {
        return t;
      }
      if (!n && t.id === "default") {
        n = t;
      }
    }
    return n;
  };
  BranchesManager.prototype.getBranchByBranchId = function (e) {
    var t;
    for (var n = 0; n < this.branches.length; n++) {
      if ((t = this.branches[n]).id === e) {
        return t;
      }
    }
    return null;
  };
  Object.defineProperty(BranchesManager.prototype, "currentBranch", {
    get: function () {
      return this._currentBranch;
    },
    set: function (e) {
      this._currentBranch = e;
    },
    enumerable: true,
    configurable: true
  });
  return BranchesManager;
}();
exports.BranchesManager = a;