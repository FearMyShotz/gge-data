Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function BranchesModel() {}
  BranchesModel.prototype.branchByZoneId = function (e) {
    return window.ggs.worldAssignment.facade.getBranchByZoneId(e);
  };
  Object.defineProperty(BranchesModel.prototype, "currentBranch", {
    get: function () {
      return window.ggs.worldAssignment.facade.currentBranch;
    },
    enumerable: true,
    configurable: true
  });
  return BranchesModel;
}();
exports.BranchesModel = i;
exports.shouldReloadBranch = function (e) {
  t = window.ggs.worldAssignment.facade;
  n = e.zoneId.toString();
  i = t.currentBranch;
  return (a = t.getBranchByZoneId(n)) && a != i;
  var t;
  var n;
  var i;
  var a;
};