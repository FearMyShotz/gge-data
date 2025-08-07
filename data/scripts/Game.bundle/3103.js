Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./4.js");
var r = function (e) {
  function RingMenuButtonResearch() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RingMenuButtonResearch, e);
  RingMenuButtonResearch.prototype.init = function (t, i, n) {
    e.prototype.init.call(this, t, i, n);
    this._disp = i.btn_research;
    this._disp.visible = a.instanceOfClass(n, "ResearchBuildingVE") && s.CastleModel.researchData.isResearchTowerBuilt;
  };
  RingMenuButtonResearch.prototype.onClick = function (e, t) {
    this.parent.hide();
    l.CastleDialogHandler.getInstance().registerDefaultDialogs(c.CastleResearchDialog);
  };
  RingMenuButtonResearch.prototype.getInfoText = function () {
    return "research";
  };
  RingMenuButtonResearch.prototype.timerUpdate = function (e) {
    this._disp.visible = a.instanceOfClass(this.targetBuilding, "ResearchBuildingVE") && s.CastleModel.researchData.isResearchTowerBuilt;
  };
  return RingMenuButtonResearch;
}(require("./98.js").ARingMenuButton);
exports.RingMenuButtonResearch = r;
var l = require("./9.js");
var c = require("./450.js");
o.classImplementsInterfaces(r, "IRingMenuButton");