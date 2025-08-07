Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./2409.js");
var c = require("./4.js");
var u = require("./223.js");
var d = require("./8.js");
var p = function (e) {
  function CastleForumVisibilityDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleForumVisibilityDialog.NAME) || this;
  }
  n.__extends(CastleForumVisibilityDialog, e);
  CastleForumVisibilityDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_cancel, this.dialogDisp.btn_rank0, this.dialogDisp.btn_rank1, this.dialogDisp.btn_rank2, this.dialogDisp.btn_rank3, this.dialogDisp.btn_rank4]);
  };
  CastleForumVisibilityDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.LocalizedTextVO("dialog_alliance_communication_selectRanks_header"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new s.LocalizedTextVO("dialog_alliance_communication_selectRanks_text"));
    this.initRankingGroupButtons();
    this.setRankingGroupButtonsFromProperties();
  };
  CastleForumVisibilityDialog.prototype.initRankingGroupButtons = function () {
    var e = r.int(a.AllianceConst.getRankingGroupFromRank(c.CastleModel.userData.allianceRank));
    for (var t = 0; t < a.AllianceConst.ALLIANCE_RANKING_GROUPS_COUNT; ++t) {
      this.dialogDisp["btn_rank" + t].mc_icon.gotoAndStop(t + 1);
      var i = t <= e;
      this.selectRankingGroupButton(t, i, true);
      this.enableRankingGroupButton(t, !i);
    }
    for (var n = 0; n < a.AllianceConst.ALLIANCE_RANKING_GROUPS_COUNT; ++n) {
      this.updateButtonToolTip(n);
    }
  };
  CastleForumVisibilityDialog.prototype.updateButtonToolTip = function (e) {
    if (d.ButtonHelper.isButtonEnabled(this.dialogDisp["btn_rank" + e])) {
      this.dialogDisp["btn_rank" + e].toolTipText = u.CastleAllianceForumData.getVisibilityToolTip(e);
    } else {
      this.dialogDisp["btn_rank" + e].toolTipText = "dialog_alliance_communication_selectRanks_higheRank_tooltip";
    }
  };
  CastleForumVisibilityDialog.prototype.enableRankingGroupButton = function (e, t) {
    d.ButtonHelper.enableButton(this.dialogDisp["btn_rank" + e], t);
    this.updateButtonToolTip(e);
  };
  CastleForumVisibilityDialog.prototype.selectRankingGroupButton = function (e, t, i = false) {
    if (d.ButtonHelper.isButtonEnabled(this.dialogDisp["btn_rank" + e]) || i) {
      if (t) {
        for (var n = e; n >= 0; --n) {
          this.singleSelectRankingGroupButton(n, t);
        }
      } else {
        for (var o = e + r.int(e < a.AllianceConst.ALLIANCE_RANKING_GROUPS_COUNT - 1 && this.isRankingGroupSelected(e + 1) ? 1 : 0); o < a.AllianceConst.ALLIANCE_RANKING_GROUPS_COUNT; ++o) {
          this.singleSelectRankingGroupButton(o, t);
        }
      }
    }
  };
  CastleForumVisibilityDialog.prototype.singleSelectRankingGroupButton = function (e, t) {
    this.dialogDisp["btn_rank" + e].mc_select.gotoAndStop(t ? 2 : 1);
  };
  CastleForumVisibilityDialog.prototype.setRankingGroupButtonsFromProperties = function () {
    if (this.dialogProperties.visibleRanks) {
      for (var e = 0; e < a.AllianceConst.ALLIANCE_RANKING_GROUPS_COUNT; ++e) {
        this.selectRankingGroupButton(e, false);
      }
      for (var t = 0; t < a.AllianceConst.ALLIANCE_RANKING_GROUPS_COUNT; ++t) {
        for (var i = 0; i < this.dialogProperties.visibleRanks.length; ++i) {
          if (this.dialogProperties.visibleRanks[i] == t) {
            this.selectRankingGroupButton(t, true);
          }
        }
      }
    } else {
      this.initRankingGroupButtons();
    }
  };
  CastleForumVisibilityDialog.prototype.isRankingGroupSelected = function (e) {
    return this.dialogDisp["btn_rank" + e].mc_select.currentFrame == 1;
  };
  CastleForumVisibilityDialog.prototype.getRankingGroupArrayFromSelection = function () {
    var e = [];
    for (var t = 0; t < a.AllianceConst.ALLIANCE_RANKING_GROUPS_COUNT; ++t) {
      if (this.isRankingGroupSelected(t)) {
        e.push(t);
      }
    }
    return e;
  };
  CastleForumVisibilityDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_rank0:
        this.selectRankingGroupButton(0, !this.isRankingGroupSelected(0));
        break;
      case this.dialogDisp.btn_rank1:
        this.selectRankingGroupButton(1, !this.isRankingGroupSelected(1));
        break;
      case this.dialogDisp.btn_rank2:
        this.selectRankingGroupButton(2, !this.isRankingGroupSelected(2));
        break;
      case this.dialogDisp.btn_rank3:
        this.selectRankingGroupButton(3, !this.isRankingGroupSelected(3));
        break;
      case this.dialogDisp.btn_rank4:
        this.selectRankingGroupButton(4, !this.isRankingGroupSelected(4));
        break;
      case this.dialogDisp.btn_ok:
        h.CastleForumNewTopic.visibleRankingGroups = this.getRankingGroupArrayFromSelection();
        if (this.dialogProperties.changingTopicId >= 0) {
          c.CastleModel.smartfoxClient.sendCommandVO(new l.C2SAllianceTopicChangeRanks(this.dialogProperties.changingTopicId, this.getRankingGroupArrayFromSelection()));
        }
        this.hide();
        break;
      case this.dialogDisp.btn_cancel:
        this.hide();
    }
  };
  Object.defineProperty(CastleForumVisibilityDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleForumVisibilityDialog.__initialize_static_members = function () {
    CastleForumVisibilityDialog.NAME = "CastleForumVisibilityEx";
  };
  return CastleForumVisibilityDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleForumVisibilityDialog = p;
var h = require("./1356.js");
o.classImplementsInterfaces(p, "ICollectableRendererList");
p.__initialize_static_members();