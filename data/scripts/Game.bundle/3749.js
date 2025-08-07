Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./13.js");
var l = function (e) {
  function SamuraiDaimyoEventDialogRanking(t) {
    var i = e.call(this, t) || this;
    i.init();
    return i;
  }
  n.__extends(SamuraiDaimyoEventDialogRanking, e);
  SamuraiDaimyoEventDialogRanking.prototype.init = function () {
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_allianceName, new s.TextVO(r.TextHelper.toUpperCaseLocaSafeTextId("dialog_alliance_name"))).autoFitToBounds = true;
    this.subLayerDisp.mc_icon_rank.toolTipText = "allianceRanking";
    this.subLayerDisp.mc_icon_level.toolTipText = "level";
    this.subLayerDisp.mc_icon_members.toolTipText = "dialog_alliance_member";
    this.subLayerDisp.mc_icon_points.toolTipText = "warEffortPoints";
    this._highscore = new c.ModernHighscoreComponent(this.subLayerDisp.mc_list, SamuraiDaimyoEventDialogRanking.MAX_VISIBLE_ITEMS, u.SamuraiDaimyoEventDialogRankingItem, a.HighscoreConst.ALLIANCE_DAIMYO, -1);
  };
  SamuraiDaimyoEventDialogRanking.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this._highscore.onShow();
    this._highscore.requestOwnRankFromServer();
  };
  SamuraiDaimyoEventDialogRanking.prototype.hide = function () {
    this._highscore.onHide();
    e.prototype.hide.call(this);
  };
  SamuraiDaimyoEventDialogRanking.MAX_VISIBLE_ITEMS = 8;
  return SamuraiDaimyoEventDialogRanking;
}(require("./34.js").CastleDialogSubLayer);
exports.SamuraiDaimyoEventDialogRanking = l;
var c = require("./752.js");
var u = require("./3750.js");
o.classImplementsInterfaces(l, "ICollectableRendererList", "ISublayer");