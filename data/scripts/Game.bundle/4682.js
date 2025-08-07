Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./7.js");
var l = require("./4.js");
var c = require("./1229.js");
var u = require("./4683.js");
var d = require("./136.js");
var p = require("./629.js");
var h = function (e) {
  function AASCommand() {
    return e.call(this) || this;
  }
  n.__extends(AASCommand, e);
  Object.defineProperty(AASCommand.prototype, "cmdId", {
    get: function () {
      return r.ClientConstSF.S2C_AUTO_ALLIANCE_SEARCH;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(o.BasicCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  AASCommand.prototype.executeCommand = function (e, t) {
    var i;
    var n;
    switch (e) {
      case a.ERROR.ALL_OK:
        var o = JSON.parse(t[1]);
        if (o.gal) {
          l.CastleModel.userData.parse_GAL(o.gal);
          if (o.gam) {
            l.CastleModel.armyData.parse_GAM(o.gam);
          }
          i = s.Localize.text("dialog_alliance_joiningAlliance_failed_title");
          n = s.Localize.text("dialog_alliance_joiningAlliance_failed_copy");
          g.CastleDialogHandler.getInstance().registerDefaultDialogs(m.CastleLargeYesNoDialog, new p.CastleLargeYesNoDialogProperties(i, n, this.bindFunction(this.showAllianceDialog), null, null, "", "", false));
        } else if (o.AL) {
          var r = [];
          for (var u = 0, d = o.AL; u < d.length; u++) {
            var h = d[u];
            if (h !== undefined) {
              var C = new c.SearchListAllianceItemVO();
              C.parseItem(h);
              r.push(C);
            }
          }
          if (r.length == 0) {
            g.CastleDialogHandler.getInstance().registerDefaultDialogs(f.ModernYesNoDialog, new O.BasicStandardYesNoDialogProperties("dialog_noAllianceFound_title", "dialog_noAllianceFound_desc", function () {
              y.CastleLayoutManager.getInstance().hideAllDialogs();
              g.CastleDialogHandler.getInstance().registerDefaultDialogs(E.CastleNewAllianceDialog);
            }, this.bindFunction(this.showOrUpdateSearchDialog), this.bindFunction(this.showOrUpdateSearchDialog)));
          } else {
            this.showOrUpdateSearchDialog(r);
          }
        }
    }
    return false;
  };
  AASCommand.prototype.showOrUpdateSearchDialog = function (e) {
    if (y.CastleLayoutManager.getInstance().isDialogVisibleByName(C.CastleSearchAllianceDialog)) {
      b.CastleBasicController.getInstance().dispatchEvent(new D.CastleAllianceSearchEvent(D.CastleAllianceSearchEvent.ALLIANCE_SEARCH_UPDATED, e));
    } else {
      g.CastleDialogHandler.getInstance().registerDefaultDialogs(C.CastleSearchAllianceDialog, new u.CastleSearchAllianceDialogProperties(e));
    }
  };
  AASCommand.prototype.showAllianceDialog = function (e) {
    g.CastleDialogHandler.getInstance().registerDefaultDialogs(_.CastleAllianceDialog, new d.CastleAllianceDialogProperties());
  };
  return AASCommand;
}(o.BasicCommand);
exports.AASCommand = h;
var g = require("./9.js");
var C = require("./970.js");
var _ = require("./125.js");
var m = require("./449.js");
var f = require("./283.js");
var O = require("./2.js");
var E = require("./1337.js");
var y = require("./17.js");
var b = require("./15.js");
var D = require("./1411.js");