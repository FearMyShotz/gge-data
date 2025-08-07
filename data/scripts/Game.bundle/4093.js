Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./53.js");
var s = require("./4094.js");
var r = require("./89.js");
var l = function (e) {
  function ABGRankingPanelButton() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ABGRankingPanelButton, e);
  Object.defineProperty(ABGRankingPanelButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Btn_Ranking2;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.APanelButton.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  ABGRankingPanelButton.prototype.getButtonTooltip = function () {
    return "panel_multiinfo_ranking";
  };
  ABGRankingPanelButton.prototype.onButtonClicked = function () {
    c.CastleComponent.dialogHandler.registerDefaultDialogs(u.CastleAllianceBattleGroundEventDialog, new s.CastleAllianceBattleGroundEventDialogProperties(u.CastleAllianceBattleGroundEventDialog.TAB_RANKING_ALLIANCE));
  };
  ABGRankingPanelButton.prototype.isButtonVisible = function () {
    return a.ABGHelper.isOnABGServer;
  };
  return ABGRankingPanelButton;
}(r.APanelButton);
exports.ABGRankingPanelButton = l;
var c = require("./14.js");
var u = require("./249.js");
o.classImplementsInterfaces(l, "ICollectableRendererList");