Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./53.js");
var a = function (e) {
  function CastleLayoutWorldmap() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleLayoutWorldmap, e);
  CastleLayoutWorldmap.prototype.setLayout = function (t, i) {
    e.prototype.setLayout.call(this, t, i);
    t.changeScreen(d.CastleWorldMapScreen, null);
    t.worldmapScreen.buildWorldMap();
    t.addTutorialPanel();
    if (o.ABGHelper.isOnABGAndCollector) {
      t.showPanelRedirecter(s.ABGAllianceCollectorPointPanel, null, false);
    }
    if (o.ABGHelper.isOnABGAndTower) {
      t.showPanelRedirecter(r.ABGAllianceTowerPanel, null, false);
      t.showPanelRedirecter(l.ABGAllianceTowerPointMalusInfoPanel, null, false);
    }
    t.showPanelRedirecter(u.CastleNavigationPanel, null, false);
    t.showPanelRedirecter(c.CastleActionPanel, null, false);
  };
  return CastleLayoutWorldmap;
}(require("./1819.js").CastleBasicLayout);
exports.CastleLayoutWorldmap = a;
var s = require("./1853.js");
var r = require("./1854.js");
var l = require("./1855.js");
var c = require("./559.js");
var u = require("./1874.js");
var d = require("./1138.js");