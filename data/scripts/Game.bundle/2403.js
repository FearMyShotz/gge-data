Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./203.js");
var r = require("./8.js");
var l = function (e) {
  function CreateAllianceBookmarkSublayer(t, i) {
    var n = e.call(this, t) || this;
    n._checkButtonSubmitState = i;
    return n;
  }
  n.__extends(CreateAllianceBookmarkSublayer, e);
  CreateAllianceBookmarkSublayer.prototype.show = function (t) {
    this._currentBookmarkVO = t[0];
    e.prototype.show.call(this, t);
    r.ButtonHelper.initTwoStateButtons([this.subLayerDisp.btn_free_attack, this.subLayerDisp.btn_team_attack, this.subLayerDisp.btn_support]);
    this._teamAttackConfig = new u.TeamAttackConfiguration(this.subLayerDisp.team_attack_config, this.bindFunction(this._checkButtonSubmitState));
    this._teamAttackConfig.hide();
    this.setButtonToolTip(this.subLayerDisp.btn_free_attack);
    if (this._currentBookmarkVO.worldmapObjectVO.isOwnMapobject) {
      this.setBookmarkType(this.subLayerDisp.btn_support, s.EWorldmapBookmarkType.ALLIANCE_DEFEND);
    } else {
      this.setBookmarkType(this.subLayerDisp.btn_free_attack, s.EWorldmapBookmarkType.ALLIANCE_FREE_ATTACK);
    }
  };
  CreateAllianceBookmarkSublayer.prototype.hide = function () {
    if (this._teamAttackConfig) {
      this._teamAttackConfig.hide();
    }
    e.prototype.hide.call(this);
  };
  CreateAllianceBookmarkSublayer.prototype.onClick = function (e) {
    if (r.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.subLayerDisp.btn_free_attack:
          this.setBookmarkType(e.target, s.EWorldmapBookmarkType.ALLIANCE_FREE_ATTACK);
          this._teamAttackConfig.hide();
          break;
        case this.subLayerDisp.btn_team_attack:
          this.setBookmarkType(e.target, s.EWorldmapBookmarkType.ALLIANCE_ATTACK_ORDER);
          this._teamAttackConfig.show(this._currentBookmarkVO);
          break;
        case this.subLayerDisp.btn_support:
          this.setBookmarkType(e.target, s.EWorldmapBookmarkType.ALLIANCE_DEFEND);
          this._teamAttackConfig.hide();
      }
    }
  };
  CreateAllianceBookmarkSublayer.prototype.setBookmarkType = function (e, t) {
    if (this._currentBookmarkVO.type != t) {
      this._currentBookmarkVO.type = t;
      r.ButtonHelper.setButtonSelected(this.subLayerDisp.btn_free_attack, e == this.subLayerDisp.btn_free_attack);
      r.ButtonHelper.setButtonSelected(this.subLayerDisp.btn_team_attack, e == this.subLayerDisp.btn_team_attack);
      r.ButtonHelper.setButtonSelected(this.subLayerDisp.btn_support, e == this.subLayerDisp.btn_support);
      this.setButtonToolTip(e);
      this._checkButtonSubmitState();
    }
  };
  CreateAllianceBookmarkSublayer.prototype.setButtonToolTip = function (e) {
    this.subLayerDisp.btn_free_attack.toolTipText = e == this.subLayerDisp.btn_free_attack ? "Bookmarks_addBookmark_alliance_freeTarget_tooltip" : "Bookmarks_addBookmark_alliance_markFreeTarget_tooltip";
    this.subLayerDisp.btn_team_attack.toolTipText = e == this.subLayerDisp.btn_team_attack ? "Bookmarks_addBookmark_alliance_plannedTarget_tooltip" : "Bookmarks_addBookmark_alliance_markPlannedTarget_tooltip";
    this.subLayerDisp.btn_support.toolTipText = e == this.subLayerDisp.btn_support ? "Bookmarks_addBookmark_alliance_supportTarget_tooltip" : "Bookmarks_addBookmark_alliance_markSupportTarget_tooltip";
  };
  CreateAllianceBookmarkSublayer.prototype.showHelp = function () {
    c.CastleDialogHandler.getInstance().showHelper("", a.Localize.text("help_bookmarks_alliance_addBookmark"));
  };
  return CreateAllianceBookmarkSublayer;
}(require("./35.js").CastleDialogSubLayer);
exports.CreateAllianceBookmarkSublayer = l;
var c = require("./9.js");
var u = require("./2404.js");
o.classImplementsInterfaces(l, "ICollectableRendererList", "ISublayer");