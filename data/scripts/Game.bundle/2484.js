Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./5.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./6.js");
var h = require("./231.js");
var g = require("./2485.js");
var C = require("./2486.js");
var _ = require("./53.js");
var m = require("./4.js");
var f = require("./180.js");
var O = require("./8.js");
var E = require("./11.js");
var y = require("./2487.js");
var b = function (e) {
  function CastleAllianceMemberSettingsDialog() {
    var t = this;
    t._newRank = 0;
    t.warning = 0;
    t.kickFromAllianceWarnings = [t.bindFunction(t.firstQuitAllianceWarning), t.bindFunction(t.checkKingsTowerOwnership), t.bindFunction(t.checkCapitalAllianceOwnership), t.bindFunction(t.checkMetropolisAllianceOwnership), t.bindFunction(t.checkMonuments), t.bindFunction(t.checkLaboratories)];
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleAllianceMemberSettingsDialog.NAME) || this;
  }
  n.__extends(CastleAllianceMemberSettingsDialog, e);
  CastleAllianceMemberSettingsDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close, this.dialogDisp.btn_cancle, this.dialogDisp.btn_ok, this.dialogDisp.btn_kickMember, this.dialogDisp.btn_newLeader, this.dialogDisp.mc_rankList.btn_up, this.dialogDisp.mc_rankList.btn_down]);
    this.scroller = new a.ItemScrollList(this.dialogDisp.mc_rankList);
    this.scroller.scrollItemClass = A.CastleAllianceRankItem;
  };
  CastleAllianceMemberSettingsDialog.prototype.selectRank = function (e) {
    this._newRank = e;
    this.itxt_rankInfo.textContentVO.textId = "dialog_alliance_rankinfo" + D.CastleAllianceData.getTextIDForRank(this._newRank);
    this.itxt_rankName.textContentVO.textId = "dialog_alliance_rank" + D.CastleAllianceData.getTextIDForRank(this._newRank);
    this.dialogDisp.ico_selectedRank1.gotoAndStop(e + 1);
    this.dialogDisp.ico_selectedRank2.gotoAndStop(e + 1);
    this._scrollComponent.scrollToStart();
  };
  CastleAllianceMemberSettingsDialog.prototype.initScroller = function () {
    O.ButtonHelper.enableButton(this.dialogDisp.btn_newLeader, m.CastleModel.userData.allianceRank == l.AllianceConst.RANK_LEADER);
    this.scroller.clear();
    for (var e = h.ClientConstAlliance.getInferiorRanks(m.CastleModel.userData.allianceRank), t = 0, i = 0; i < e.length; i++) {
      if (e[i] == this.dialogProperties.playerInfoVO.allianceRank) {
        t = i;
      }
      this.scroller.pushContent(new y.AllianceRankVO(e[i], this.dialogProperties.playerInfoVO.allianceRank));
    }
    this.scroller.initList(Math.max(0, t - 1));
    this.scroller.addEventListener(s.ScrollItemEvent.CLICK, this.bindFunction(this.onScrollItemClicked));
    this.scroller.addEventListener(s.ScrollItemEvent.ON_SCROLL, this.bindFunction(this.onScrollerScrolled));
  };
  CastleAllianceMemberSettingsDialog.prototype.onClick = function (t) {
    if (O.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_help:
          I.CastleDialogHandler.getInstance().showHelper("", c.Localize.text("help_allianceReRank"));
          break;
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancle:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          this.changeMemberRank();
          break;
        case this.dialogDisp.btn_kickMember:
          this.onClickKickMember();
          break;
        case this.dialogDisp.btn_newLeader:
          I.CastleDialogHandler.getInstance().registerDefaultDialogs(v.CastleDelayedYesNoDialog, new o.BasicStandardYesNoDialogProperties(c.Localize.text("alliance_newLeader_title"), c.Localize.text("alliance_newLeader_copy", [this.dialogProperties.playerInfoVO.playerName]), this.bindFunction(this.sendNewLeader)));
      }
    }
  };
  CastleAllianceMemberSettingsDialog.prototype.sendNewLeader = function (e = null) {
    m.CastleModel.smartfoxClient.sendCommandVO(new C.C2SAllianceRerankMemberVO(this.dialogProperties.playerInfoVO.playerID, l.AllianceConst.RANK_LEADER));
    this.hide();
  };
  CastleAllianceMemberSettingsDialog.prototype.onClickKickMember = function () {
    this.warning = 0;
    this.onNextKickFromAllianceWarning();
  };
  CastleAllianceMemberSettingsDialog.prototype.onNextKickFromAllianceWarning = function (e = null) {
    var t = this.warning++;
    if (t < this.kickFromAllianceWarnings.length) {
      if (!this.kickFromAllianceWarnings[t]()) {
        this.onNextKickFromAllianceWarning();
      }
    } else {
      this.onKickMember();
    }
  };
  CastleAllianceMemberSettingsDialog.prototype.showKickFromAllianceWarning = function (e, t = "dialog_alliance_kickUser_title") {
    I.CastleDialogHandler.getInstance().registerDefaultDialogs(S.CastleStandardYesNoDialog, new o.BasicStandardYesNoDialogProperties(c.Localize.text(t), c.Localize.text(e), this.bindFunction(this.onNextKickFromAllianceWarning)));
  };
  CastleAllianceMemberSettingsDialog.prototype.firstQuitAllianceWarning = function () {
    this.showKickFromAllianceWarning("dialog_alliance_kickUser_copy");
    return true;
  };
  CastleAllianceMemberSettingsDialog.prototype.checkCapitalAllianceOwnership = function () {
    return !!this.dialogProperties.playerInfoVO.hasCapital && (this.showKickFromAllianceWarning("alert_dismissAlliance_capitalLost"), true);
  };
  CastleAllianceMemberSettingsDialog.prototype.checkMetropolisAllianceOwnership = function () {
    return !!this.dialogProperties.playerInfoVO.hasMetropolis && (this.showKickFromAllianceWarning("alert_dismissAlliance_metropolisLost"), true);
  };
  CastleAllianceMemberSettingsDialog.prototype.checkMonuments = function () {
    return !!this.dialogProperties.playerInfoVO.hasMonument && (this.showKickFromAllianceWarning("dialog_banFromAlliance_monument"), true);
  };
  CastleAllianceMemberSettingsDialog.prototype.checkLaboratories = function () {
    return !!this.dialogProperties.playerInfoVO.hasLaboratory && (this.showKickFromAllianceWarning("dialog_banFromAlliance_laboratory"), true);
  };
  CastleAllianceMemberSettingsDialog.prototype.checkKingsTowerOwnership = function () {
    return !!this.dialogProperties.playerInfoVO.hasKingstower && (this.showKickFromAllianceWarning("dialog_banFromAlliance_kingstower"), true);
  };
  CastleAllianceMemberSettingsDialog.prototype.onKickMember = function () {
    this.hide();
    m.CastleModel.smartfoxClient.sendCommandVO(new g.C2SAllianceKickMemberVO(this.dialogProperties.playerInfoVO.playerID));
  };
  CastleAllianceMemberSettingsDialog.prototype.changeMemberRank = function () {
    this.hide();
    if (this._newRank != this.dialogProperties.playerInfoVO.allianceRank) {
      m.CastleModel.smartfoxClient.sendCommandVO(new C.C2SAllianceRerankMemberVO(this.dialogProperties.playerInfoVO.playerID, this._newRank));
    }
  };
  CastleAllianceMemberSettingsDialog.prototype.onScrollItemClicked = function (e) {
    this.scroller.resetItems();
    e.scrollItem.checked = true;
    this._newRank = p.int(e.scrollItem.scrollItemVO.rankID);
    this.selectRank(this._newRank);
  };
  CastleAllianceMemberSettingsDialog.prototype.hideLoaded = function (t = null) {
    this.scroller.removeEventListener(s.ScrollItemEvent.CLICK, this.bindFunction(this.onScrollItemClicked));
    this.scroller.removeEventListener(s.ScrollItemEvent.ON_SCROLL, this.bindFunction(this.onScrollerScrolled));
    e.prototype.hideLoaded.call(this, t);
    if (this._scrollComponent) {
      this._scrollComponent.onHide();
    }
  };
  CastleAllianceMemberSettingsDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_changeRank, new u.LocalizedTextVO("dialog_alliance_changeRank"));
    this.dialogDisp.btn_kickMember.toolTipText = "dialog_alliance_kickUser";
    if (m.CastleModel.userData.allianceRank == l.AllianceConst.RANK_LEADER) {
      this.dialogDisp.btn_newLeader.toolTipText = "dialog_alliance_newLeader";
    } else {
      this.dialogDisp.btn_newLeader.toolTipText = "dialog_alliance_rankToLow";
    }
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this._scrollComponent = new T.CastleTextScrollComponent(new f.CastleTextScrollVO(this.dialogDisp.txt_rankInfo, this.dialogDisp.mc_scrollHandle.btn_up, this.dialogDisp.mc_scrollHandle.btn_down, this.dialogDisp.mc_scrollHandle.btn_slider, this.dialogDisp.mc_scrollHandle.mc_sliderLine, [this.dialogDisp.mc_scrollHandle]));
    this._scrollComponent.invisibleOnFit = true;
    this.itxt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new d.TextVO(this.dialogProperties.playerInfoVO.playerName));
    this.itxt_rankName = this.textFieldManager.registerTextField(this.dialogDisp.txt_rankName, new u.LocalizedTextVO(""));
    this.itxt_rankInfo = this.textFieldManager.registerTextField(this.dialogDisp.txt_rankInfo, new u.LocalizedTextVO(""));
    this.initScroller();
    this.selectRank(this.dialogProperties.playerInfoVO.allianceRank);
    this._scrollComponent.scrollToStart();
    if (this._scrollComponent) {
      this._scrollComponent.onShow();
    }
    this.dialogDisp.btn_kickMember.visible = !_.ABGHelper.isOnABGServer;
  };
  Object.defineProperty(CastleAllianceMemberSettingsDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceMemberSettingsDialog.prototype.onScrollerScrolled = function (e) {
    for (var t = 0, i = this.scroller.veList; t < i.length; t++) {
      var n = i[t];
      if (n !== undefined) {
        if (!n.itemVO) {
          break;
        }
        n.checked = n.itemVO.rankID == this._newRank;
      }
    }
  };
  CastleAllianceMemberSettingsDialog.NAME = "CastleAllianceMemberSettingsEx";
  return CastleAllianceMemberSettingsDialog;
}(E.CastleExternalDialog);
exports.CastleAllianceMemberSettingsDialog = b;
var D = require("./317.js");
var I = require("./9.js");
var T = require("./182.js");
var v = require("./2488.js");
var S = require("./151.js");
var A = require("./2489.js");
r.classImplementsInterfaces(b, "ICollectableRendererList");