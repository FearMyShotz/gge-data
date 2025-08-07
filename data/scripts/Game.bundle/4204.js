Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleLayoutWorldmapRelocation() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleLayoutWorldmapRelocation, e);
  CastleLayoutWorldmapRelocation.prototype.setLayout = function (e, t) {
    this.removeInterface(e);
    e.changeScreen(c.CastleWorldMapScreen, null);
    e.worldmapScreen.buildWorldMap();
    e.showPanelRedirecter(l.CastleUserStatePanel, null, false);
    e.showPanelRedirecter(s.CastleOptionPanel, null, true);
    this.addBuddyListPanel(e);
    e.addTutorialPanel();
    e.showPanelRedirecter(a.CastleNavigationPanel, null, false);
    e.showPanelRedirecter(r.CastleRelocatePanel, null, false);
  };
  return CastleLayoutWorldmapRelocation;
}(require("./555.js").ACastleLayoutStrategy);
exports.CastleLayoutWorldmapRelocation = o;
var a = require("./1872.js");
var s = require("./514.js");
var r = require("./4205.js");
var l = require("./842.js");
var c = require("./1138.js");