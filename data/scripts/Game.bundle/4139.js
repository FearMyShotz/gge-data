Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = function (e) {
  function CastleLayoutKingdomMap() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleLayoutKingdomMap, e);
  CastleLayoutKingdomMap.prototype.setLayout = function (e, t) {
    this.removeInterface(e);
    o.BasicDialogHandler.getInstance().blockDialogs = false;
    e.changeScreen(h.CastleKingdomOverviewScreen, null);
    e.showPanelRedirecter(r.CastleChatPanel, null, false);
    e.showPanelRedirecter(c.CastleQuestStartPanel, null, false);
    e.showPanelRedirecter(u.CastleStatusPanel, null, false);
    e.showPanelRedirecter(d.CastleUserStatePanel, null, false);
    e.showPanelRedirecter(l.CastleOptionPanel, null, true);
    e.showPanelRedirecter(s.CastleActionPanel, null, true);
    e.showPanelRedirecter(p.CastleMultiInfoPanel, null, true);
  };
  return CastleLayoutKingdomMap;
}(require("./555.js").ACastleLayoutStrategy);
exports.CastleLayoutKingdomMap = a;
var s = require("./559.js");
var r = require("./1118.js");
var l = require("./515.js");
var c = require("./462.js");
var u = require("./473.js");
var d = require("./843.js");
var p = require("./675.js");
var h = require("./4140.js");