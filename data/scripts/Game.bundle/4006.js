Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./91.js");
var s = require("./4.js");
var r = require("./363.js");
var l = function (e) {
  function StatusIconEilandRanking() {
    return e.call(this, "Btn_EilandRanking", null, r.AEventHubItemStatusIcon.PRIORITY_EVENT_HIGH1) || this;
  }
  n.__extends(StatusIconEilandRanking, e);
  StatusIconEilandRanking.prototype.setVisibilityLoaded = function () {
    if (s.CastleModel.kingdomData.activeKingdomID != o.WorldIsland.KINGDOM_ID || this.layoutManager.currentState == u.CastleLayoutManager.STATE_KINGDOMMAP || this.layoutManager.currentState == u.CastleLayoutManager.STATE_SEASON_WORLDMAP || this.layoutManager.isInTreasureCamp) {
      this.hide();
    } else {
      this.setTooltip("eiland_ranking_tooltip");
      this.show();
    }
  };
  StatusIconEilandRanking.prototype.onClick = function () {
    c.CastleDialogHandler.getInstance().registerDefaultDialogs(p.CastleStormIslandsMainDialog, new d.CastleStormIslandsMainDialogProperties());
  };
  StatusIconEilandRanking.prototype.addEventListenerForVisibility = function () {
    this.controller.addEventListener(a.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE_FINISHED, this.bindFunction(this.onChangePosibilityToShowMe));
  };
  StatusIconEilandRanking.prototype.removeEventListenerForVisibility = function () {
    this.controller.removeEventListener(a.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE_FINISHED, this.bindFunction(this.onChangePosibilityToShowMe));
  };
  StatusIconEilandRanking.prototype.onChangePosibilityToShowMe = function (e) {
    this.setVisibility();
  };
  Object.defineProperty(StatusIconEilandRanking.prototype, "eventEndTimestamp", {
    get: function () {
      return s.CastleModel.kingdomData.getKingdomVOByID(o.WorldIsland.KINGDOM_ID).kingdomResetTimestamp;
    },
    enumerable: true,
    configurable: true
  });
  return StatusIconEilandRanking;
}(r.AEventHubItemStatusIcon);
exports.StatusIconEilandRanking = l;
var c = require("./9.js");
var u = require("./17.js");
var d = require("./1125.js");
var p = require("./474.js");