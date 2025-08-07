Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleLayoutSeasonWorldmap() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleLayoutSeasonWorldmap, e);
  CastleLayoutSeasonWorldmap.prototype.setLayout = function (e, t) {
    this.removeInterface(e);
    e.changeScreen(this.screenName, null);
    e.showPanelRedirecter(s.CastleChatPanel, null, false);
    e.showPanelRedirecter(l.CastleQuestStartPanel, null, false);
    e.showPanelRedirecter(c.CastleStatusPanel, null, false);
    e.showPanelRedirecter(u.CastleUserStatePanel, null, false);
    e.showPanelRedirecter(r.CastleOptionPanel, null, true);
    e.showPanelRedirecter(a.CastleSeasonEventActionPanel, null, false);
    e.showPanelRedirecter(d.CastleMultiInfoPanel, null, false);
  };
  Object.defineProperty(CastleLayoutSeasonWorldmap.prototype, "screenName", {
    get: function () {
      return p.CastleSeasonMapScreen;
    },
    enumerable: true,
    configurable: true
  });
  return CastleLayoutSeasonWorldmap;
}(require("./555.js").ACastleLayoutStrategy);
exports.CastleLayoutSeasonWorldmap = o;
var a = require("./1860.js");
var s = require("./1117.js");
var r = require("./514.js");
var l = require("./462.js");
var c = require("./472.js");
var u = require("./842.js");
var d = require("./673.js");
var p = require("./4144.js");