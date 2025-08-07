Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./81.js");
var l = require("./14.js");
var c = require("./4.js");
var u = require("./94.js");
var d = require("./93.js");
var p = require("./43.js");
var h = require("./237.js");
var g = function (e) {
  function CastleStormIslandsMainDialogPerformanceAllianceItem() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleStormIslandsMainDialogPerformanceAllianceItem, e);
  CastleStormIslandsMainDialogPerformanceAllianceItem.prototype.fill = function () {
    this._clickFeedbackBehaviour ||= new h.ClickFeedbackHoverBehaviour(this.getItemMc());
    this._clickFeedbackBehaviour.addEventListener();
    this.rankingItemVO = this.data;
    l.CastleComponent.textFieldManager.registerTextField(this.getItemMc().txt_name, new a.TextVO(this.rankingItemVO.playerName));
    l.CastleComponent.textFieldManager.registerTextField(this.getItemMc().txt_level, new s.LocalizedNumberVO(this.rankingItemVO.playerLevel));
    this.getItemMc().gotoAndStop(this.getFrame());
    this.getItemMc().icon_rank.gotoAndStop(this.rankingItemVO.allianceRank + 1);
    this.getItemMc().mc_downState.visible = false;
    this.getItemMc().mc_mouseOver.visible = false;
    this.getItemMc().mouseChildren = false;
    if (this.rankingItemVO.hasUnlockedEiland) {
      l.CastleComponent.textFieldManager.registerTextField(this.getItemMc().txt_rank, new s.LocalizedNumberVO(this.rankingItemVO.rank));
      l.CastleComponent.textFieldManager.registerTextField(this.getItemMc().txt_points, new s.LocalizedNumberVO(this.rankingItemVO.aquaPoints));
      this.getItemMc().mc_inactive.visible = false;
    } else {
      l.CastleComponent.textFieldManager.registerTextField(this.getItemMc().txt_rank, new a.TextVO("-"));
      l.CastleComponent.textFieldManager.registerTextField(this.getItemMc().txt_points, new a.TextVO("-"));
      this.getItemMc().mc_inactive.visible = true;
    }
  };
  CastleStormIslandsMainDialogPerformanceAllianceItem.prototype.removeEventListener = function () {
    e.prototype.removeEventListener.call(this);
    if (this._clickFeedbackBehaviour) {
      this._clickFeedbackBehaviour.removeEventListener();
    }
  };
  CastleStormIslandsMainDialogPerformanceAllianceItem.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    l.CastleComponent.dialogHandler.registerDialogsWithTypeAndDefaultValues(u.CastlePlayerInfoDialog, new d.CastlePlayerInfoDialogProperties(this.rankingItemVO.playerID), p.CastleDialogConsts.DIALOG_TYPE_SINGLE);
  };
  CastleStormIslandsMainDialogPerformanceAllianceItem.prototype.getFrame = function () {
    if (this.rankingItemVO.playerID == c.CastleModel.userData.playerID) {
      return 4;
    } else if (this.rankingItemVO.rank <= 3 && this.rankingItemVO.hasUnlockedEiland) {
      return this.rankingItemVO.rank;
    } else {
      return 5;
    }
  };
  return CastleStormIslandsMainDialogPerformanceAllianceItem;
}(r.AInfiniteScrollListItem);
exports.CastleStormIslandsMainDialogPerformanceAllianceItem = g;
o.classImplementsInterfaces(g, "ICollectableRendererList");