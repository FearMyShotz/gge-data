Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function ACastleLayoutStrategy() {}
  ACastleLayoutStrategy.prototype.setLayout = function (e, t) {
    throw new r.AbstractMethodError();
  };
  ACastleLayoutStrategy.prototype.removeInterface = function (e, t = false) {
    if (!!t || !e.dialogCastleSwitch) {
      e.hideAllDialogs();
    }
    e.hideAllPanels();
    e.hideAllAttackPanels();
    e.removeAllIngameUIComponents();
    e.hideBackgroundLayer();
  };
  Object.defineProperty(ACastleLayoutStrategy.prototype, "env", {
    get: function () {
      return l.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  ACastleLayoutStrategy.prototype.addCorrectResourcePanel = function (e) {
    if (u.CastleModel.kingdomData.activeKingdomID == c.FactionConst.KINGDOM_ID) {
      e.showPanelRedirecter(s.CastleResourcePanel_Season, null, false);
    } else {
      e.showPanelRedirecter(a.CastleResourcePanel, null, true);
    }
  };
  ACastleLayoutStrategy.prototype.addBuddyListPanel = function (e) {
    if (this.env.hasNetworkBuddies) {
      e.showPanelRedirecter(o.CastleBuddylistPanel, null, false);
    }
  };
  return ACastleLayoutStrategy;
}();
exports.ACastleLayoutStrategy = n;
var o = require("./3922.js");
var a = require("./3924.js");
var s = require("./1818.js");
var r = require("./69.js");
var l = require("./2.js");
var c = require("./5.js");
var u = require("./4.js");