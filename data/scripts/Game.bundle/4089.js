Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./58.js");
var r = require("./39.js");
var l = require("./53.js");
var c = require("./4.js");
var u = require("./744.js");
var d = require("./89.js");
var p = function (e) {
  function RankingPanelButton() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RankingPanelButton, e);
  RankingPanelButton.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    this.listenOnXPChanged();
  };
  Object.defineProperty(RankingPanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Btn_Ranking;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.APanelButton.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  RankingPanelButton.prototype.getButtonTooltip = function () {
    if (this.isButtonEnabled()) {
      return "panel_multiinfo_ranking";
    } else {
      return a.Localize.text(r.ClientConstTextIds.LEVEL_NEEDED, [s.ClientConstLevelRestrictions.MIN_LEVEL_RANKINGS]);
    }
  };
  RankingPanelButton.prototype.isButtonEnabled = function () {
    return c.CastleModel.userData.userLevel >= s.ClientConstLevelRestrictions.MIN_LEVEL_RANKINGS;
  };
  RankingPanelButton.prototype.isButtonVisible = function () {
    return !l.ABGHelper.isOnABGServer;
  };
  RankingPanelButton.prototype.onButtonClicked = function () {
    h.CastleComponent.dialogHandler.registerDefaultDialogs(g.CastleHighscoreDialog, new u.CastleHighscoreDialogProperties(g.CastleHighscoreDialog.SEARCH_OVERALL));
  };
  return RankingPanelButton;
}(d.APanelButton);
exports.RankingPanelButton = p;
var h = require("./14.js");
var g = require("./745.js");
o.classImplementsInterfaces(p, "ICollectableRendererList");