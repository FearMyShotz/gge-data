Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./62.js");
var a = require("./90.js");
var s = require("./72.js");
var r = require("./148.js");
var o = require("./628.js");
var l = require("./39.js");
var u = require("./2.js");
var c = require("./91.js");
var _ = require("./70.js");
var d = require("./71.js");
var m = u.getLogger("WorldAssignment.BranchesController");
var h = function () {
  function BranchesController() {
    var e = this;
    this.initializeBranch = function () {
      return i.__awaiter(e, undefined, undefined, function () {
        var e;
        var t;
        return i.__generator(this, function (n) {
          m.debug("initializeBranch");
          e = l.Context.instance.globals.zoneIdFromNetworkCookie > 0 ? l.Context.instance.globals.zoneIdFromNetworkCookie.toString() : l.Context.instance.get(s.NetworkInstancesManager).selectedNetworkInstance.zoneId.toString();
          m.debug("zoneId:", e);
          if (!(t = this.manager.getBranchByZoneId(e))) {
            m.debug("could not find branch for zone id  " + e + " will fallback to default ");
            t = this.manager.getBranchByBranchId("default");
          }
          if (!t) {
            throw new _.WorldAssignmentError(d.WorldAssignmentErrorCodes.BRANCHES_FAILED_TO_INITIALIZE, "BranchesController.initializeBranch: branch initialization failed");
          }
          this.manager.currentBranch = t;
          return [2];
        });
      });
    };
  }
  BranchesController.prototype.initialize = function () {
    this.service = new a.Service(l.Context.instance.globals.branchesConfigUrl);
    this.manager = l.Context.instance.get(r.BranchesManager);
  };
  BranchesController.prototype.dispose = function () {
    if (this.service) {
      this.service.dispose();
      this.service = null;
    }
  };
  BranchesController.prototype.loadBranches = function (e) {
    return i.__awaiter(this, undefined, undefined, function () {
      var t = this;
      return i.__generator(this, function (n) {
        m.debug("loadBranches");
        if (e) {
          e(c.WorldAssignmentTrackingConstants.BRANCH_XML_START);
        }
        return [2, this.service.load().then(function (n) {
          if (e) {
            e(c.WorldAssignmentTrackingConstants.BRANCH_XML_END);
          }
          t.manager.branches = o.BranchesXMLParser.parse(n);
        }).catch(function () {
          throw new _.WorldAssignmentError(d.WorldAssignmentErrorCodes.BRANCHES_FAILED_TO_LOAD, "Failed to load branches.xml from " + l.Context.instance.globals.branchesConfigUrl);
        })];
      });
    });
  };
  return BranchesController;
}();
exports.BranchesController = h;