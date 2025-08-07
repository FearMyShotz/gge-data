Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./18.js");
var u = require("./4065.js");
var d = require("./140.js");
var p = require("./161.js");
var h = require("./4.js");
var g = require("./20.js");
var C = require("./4066.js");
var _ = require("./42.js");
var m = require("./8.js");
var f = function (e) {
  function CastleMessageInboxDialog() {
    var t = this;
    t._currentMessageCategory = -1;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleMessageInboxDialog.NAME) || this;
  }
  n.__extends(CastleMessageInboxDialog, e);
  CastleMessageInboxDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    m.ButtonHelper.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancel, this.dialogDisp.btn_help, this.dialogDisp.btn_ignore]);
    m.ButtonHelper.initTwoStateButtons([this.dialogDisp.btn_all, this.dialogDisp.btn_player, this.dialogDisp.btn_battleAndSpyReports, this.dialogDisp.btn_battleAndSpyReportsSent, this.dialogDisp.btn_sent, this.dialogDisp.btn_archive, this.dialogDisp.btn_offer]);
    m.ButtonHelper.initButton(this.dialogDisp.category_message.btn_deleteAll, 1, g.ClickFeedbackButtonHover);
    m.ButtonHelper.initButton(this.dialogDisp.category_message.btn_deleteAll_overview, 1, g.ClickFeedbackButtonHover);
    this._subLayer = new Map();
    this._subLayer.set(c.ClientConstCastle.INBOX_CATEGORY_TYPED_MAIL, new E.CastleAllMessagesWithoutArchiveList(this.dialogDisp.category_message));
    this._subLayer.set(c.ClientConstCastle.INBOX_CATEGORY_PLAYER_MAIL, new b.CastleImportantMessagesList(this.dialogDisp.category_message, new C.CastleInboxMessageCountDisplay(this.dialogDisp.category_message.mc_statusbar, 2, "dialog_inbox_inboxCapacity", "dialog_inbox_inboxFull"), s.MessageConst.MAX_MAILBOX_SIZE));
    this._subLayer.set(c.ClientConstCastle.INBOX_CATEGORY_BATTLE_AND_SPY_REPORTS, new D.CastleTypedInboxBattleAndSpyMessagesList(this.dialogDisp.category_message, false, new C.CastleInboxMessageCountDisplay(this.dialogDisp.category_message.mc_statusbar, 3, "dialog_inbox_inboxCapacity", "dialog_inbox_inboxFull"), s.MessageConst.MAX_MAILBOX_BATTLE_AND_SPY_REPORTS));
    this._subLayer.set(c.ClientConstCastle.INBOX_CATEGORY_OFFER, new S.CastleTypedInboxOffer(this.dialogDisp.category_message, new C.CastleInboxMessageCountDisplay(this.dialogDisp.category_message.mc_statusbar, 1, "dialog_inbox_inboxCapacity", "dialog_inbox_inboxFull"), s.MessageConst.MAX_MAILBOX_SPECIAL_OFFERS_SIZE));
    this._subLayer.set(c.ClientConstCastle.INBOX_CATEGORY_BATTLE_AND_SPY_REPORTS_FORWARDED, new D.CastleTypedInboxBattleAndSpyMessagesList(this.dialogDisp.category_message, true, new C.CastleInboxMessageCountDisplay(this.dialogDisp.category_message.mc_statusbar, 4, "dialog_inbox_inboxCapacity", "dialog_inbox_inboxFull"), s.MessageConst.MAX_MAILBOX_BATTLE_AND_SPY_REPORTS_FORWARDED));
    this._subLayer.set(c.ClientConstCastle.MESSAGE_CATEGORY_OUTBOX, new I.CastleTypedInboxMessageList(this.dialogDisp.category_message, new C.CastleInboxMessageCountDisplay(this.dialogDisp.category_message.mc_statusbar, 2, "dialog_inbox_outboxCapacity", "dialog_inbox_inboxFull"), s.MessageConst.MAX_MAILBOX_OUTBOX_SIZE));
    this._subLayer.set(c.ClientConstCastle.INBOX_CATEGORY_FLAGGED_MAIL, new y.CastleFlaggedInboxMessageList(this.dialogDisp.category_message, new C.CastleInboxMessageCountDisplay(this.dialogDisp.category_message.mc_statusbar, 2, "dialog_inbox_archiveCapacity", "dialog_inbox_archiveFull"), s.MessageConst.MAX_MAILBOX_ARCHIVE_SIZE));
    this.itxt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new l.LocalizedTextVO("dialog_inbox_title"));
    this.itxt_title.autoFitToBounds = true;
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    if (this._currentMessageCategory < 0) {
      if (this.displayBattleLogTabInTutorial() && h.CastleModel.tutorialData.isInTutorial()) {
        this._currentMessageCategory = CastleMessageInboxDialog.MESSAGE_CATEGORY_BATTLE_AND_SPY_REPORT;
      } else {
        this._currentMessageCategory = CastleMessageInboxDialog.MESSAGE_CATEGORY_INBOX;
      }
    }
    this.changeMessageCategory(this._currentMessageCategory);
    this.onXPChanged();
  };
  CastleMessageInboxDialog.prototype.displayBattleLogTabInTutorial = function () {
    return true;
  };
  CastleMessageInboxDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.controller.addEventListener(d.CastleMessageDataEvent.UPDATE_MESSAGELIST, this.bindFunction(this.onUpdateMessageCounters));
    this.controller.addEventListener(p.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onXPChanged));
    this.controller.addEventListener(d.CastleMessageDataEvent.MESSAGE_RESTRICTIONS_UPDATED, this.bindFunction(this.updateRestrictions));
  };
  CastleMessageInboxDialog.prototype.hideLoaded = function (t = null) {
    this.controller.removeEventListener(d.CastleMessageDataEvent.UPDATE_MESSAGELIST, this.bindFunction(this.onUpdateMessageCounters));
    this.controller.removeEventListener(p.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onXPChanged));
    this.controller.removeEventListener(d.CastleMessageDataEvent.MESSAGE_RESTRICTIONS_UPDATED, this.bindFunction(this.updateRestrictions));
    e.prototype.hideLoaded.call(this, t);
  };
  CastleMessageInboxDialog.prototype.onXPChanged = function (e = null) {
    if (h.CastleModel.tutorialData.isTutorialFinished()) {
      this.changeMessageCategory(CastleMessageInboxDialog.MESSAGE_CATEGORY_INBOX);
      this.controller.removeEventListener(p.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onXPChanged));
    }
  };
  CastleMessageInboxDialog.prototype.onUpdateMessageCounters = function (e) {
    this._subLayer.get(c.ClientConstCastle.INBOX_CATEGORY_TYPED_MAIL).updateTabMessageCounter(this.dialogDisp.btn_all.mc_counter, this.dialogDisp.btn_all.mc_counter.txt_label);
    this._subLayer.get(c.ClientConstCastle.INBOX_CATEGORY_PLAYER_MAIL).updateTabMessageCounter(this.dialogDisp.btn_player.mc_counter, this.dialogDisp.btn_player.mc_counter.txt_label);
    this._subLayer.get(c.ClientConstCastle.INBOX_CATEGORY_BATTLE_AND_SPY_REPORTS).updateTabMessageCounter(this.dialogDisp.btn_battleAndSpyReports.mc_counter, this.dialogDisp.btn_battleAndSpyReports.mc_counter.txt_label);
    this._subLayer.get(c.ClientConstCastle.INBOX_CATEGORY_BATTLE_AND_SPY_REPORTS_FORWARDED).updateTabMessageCounter(this.dialogDisp.btn_battleAndSpyReportsSent.mc_counter, this.dialogDisp.btn_battleAndSpyReportsSent.mc_counter.txt_label);
    this._subLayer.get(c.ClientConstCastle.INBOX_CATEGORY_FLAGGED_MAIL).updateTabMessageCounter(this.dialogDisp.btn_archive.mc_counter, this.dialogDisp.btn_archive.mc_counter.txt_label);
    this._subLayer.get(c.ClientConstCastle.INBOX_CATEGORY_OFFER).updateTabMessageCounter(this.dialogDisp.btn_offer.mc_counter, this.dialogDisp.btn_offer.mc_counter.txt_label);
    this.updateDeleteAllButton();
  };
  CastleMessageInboxDialog.prototype.updateRestrictions = function (e) {
    this._currentSublayer.updateRestrictions();
  };
  CastleMessageInboxDialog.prototype.applyPropertiesLoaded = function (e = null) {
    this.itxt_title.textContentVO.textId = "dialog_inbox_title";
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.dialogDisp.btn_all.toolTipText = "dialog_inbox_showAllMessages";
    this.dialogDisp.btn_player.toolTipText = "dialog_inbox_showplayerAndSystem";
    this.dialogDisp.btn_battleAndSpyReports.toolTipText = "dialog_inbox_showBattleSpyReports";
    this.dialogDisp.btn_battleAndSpyReportsSent.toolTipText = "dialog_inbox_showForwardedReports";
    this.dialogDisp.btn_sent.toolTipText = "dialog_inbox_showOutbox";
    this.dialogDisp.btn_archive.toolTipText = "dialog_inbox_showArchive";
    this.dialogDisp.btn_ignore.toolTipText = "dialog_inbox_showIgnoreList";
    this.dialogDisp.btn_offer.toolTipText = "dialog_inbox_showSpecialOffers";
    m.ButtonHelper.enableButton(this.dialogDisp.btn_help, true);
    this.changeMessageCategory(this._currentMessageCategory);
    this.updateCategoryButtons();
  };
  CastleMessageInboxDialog.prototype.updateCategoryButtons = function () {
    m.ButtonHelper.enableButton(this.dialogDisp.btn_all, true);
    m.ButtonHelper.enableButton(this.dialogDisp.btn_sent, true);
    m.ButtonHelper.enableButton(this.dialogDisp.btn_player, true);
    m.ButtonHelper.enableButton(this.dialogDisp.btn_archive, true);
    m.ButtonHelper.enableButton(this.dialogDisp.btn_battleAndSpyReports, true);
    m.ButtonHelper.enableButton(this.dialogDisp.btn_battleAndSpyReportsSent, true);
    m.ButtonHelper.enableButton(this.dialogDisp.btn_offer, true);
    this.dialogDisp.btn_ignore.visible = this._currentMessageCategory == CastleMessageInboxDialog.MESSAGE_CATEGORY_INBOX;
    m.ButtonHelper.setButtonSelected(this.dialogDisp.btn_all, this._currentMessageCategory == CastleMessageInboxDialog.MESSAGE_CATEGORY_INBOX);
    m.ButtonHelper.setButtonSelected(this.dialogDisp.btn_sent, this._currentMessageCategory == CastleMessageInboxDialog.MESSAGE_CATEGORY_OUTBOX);
    m.ButtonHelper.setButtonSelected(this.dialogDisp.btn_player, this._currentMessageCategory == CastleMessageInboxDialog.MESSAGE_CATEGORY_PLAYER);
    m.ButtonHelper.setButtonSelected(this.dialogDisp.btn_archive, this._currentMessageCategory == CastleMessageInboxDialog.MESSAGE_CATEGORY_ARCHIVED);
    m.ButtonHelper.setButtonSelected(this.dialogDisp.btn_offer, this._currentMessageCategory == CastleMessageInboxDialog.MESSAGE_CATEGORY_OFFER);
    m.ButtonHelper.setButtonSelected(this.dialogDisp.btn_battleAndSpyReports, this._currentMessageCategory == CastleMessageInboxDialog.MESSAGE_CATEGORY_BATTLE_AND_SPY_REPORT);
    m.ButtonHelper.setButtonSelected(this.dialogDisp.btn_battleAndSpyReportsSent, this._currentMessageCategory == CastleMessageInboxDialog.MESSAGE_CATEGORY_BATTLE_AND_SPY_REPORT_FORWARDED);
    this.onUpdateMessageCounters(null);
  };
  CastleMessageInboxDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (m.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_all:
          this.changeMessageCategory(CastleMessageInboxDialog.MESSAGE_CATEGORY_INBOX);
          break;
        case this.dialogDisp.btn_player:
          this.changeMessageCategory(CastleMessageInboxDialog.MESSAGE_CATEGORY_PLAYER);
          break;
        case this.dialogDisp.btn_battleAndSpyReports:
          this.changeMessageCategory(CastleMessageInboxDialog.MESSAGE_CATEGORY_BATTLE_AND_SPY_REPORT);
          break;
        case this.dialogDisp.btn_battleAndSpyReportsSent:
          this.changeMessageCategory(CastleMessageInboxDialog.MESSAGE_CATEGORY_BATTLE_AND_SPY_REPORT_FORWARDED);
          break;
        case this.dialogDisp.btn_sent:
          this.changeMessageCategory(CastleMessageInboxDialog.MESSAGE_CATEGORY_OUTBOX);
          break;
        case this.dialogDisp.btn_archive:
          this.changeMessageCategory(CastleMessageInboxDialog.MESSAGE_CATEGORY_ARCHIVED);
          break;
        case this.dialogDisp.btn_offer:
          this.changeMessageCategory(CastleMessageInboxDialog.MESSAGE_CATEGORY_OFFER);
          break;
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          this.onBtnHelp();
          break;
        case this.dialogDisp.btn_ignore:
          O.CastleDialogHandler.getInstance().registerDialogs(v.PlayerIgnoreListDialog);
          break;
        case this.dialogDisp.category_message.btn_deleteAll:
        case this.dialogDisp.category_message.btn_deleteAll_overview:
          this.onClickDeleteAll();
      }
    }
  };
  CastleMessageInboxDialog.prototype.onBtnHelp = function () {
    if (this._currentMessageCategory == CastleMessageInboxDialog.MESSAGE_CATEGORY_ARCHIVED) {
      O.CastleDialogHandler.getInstance().showHelper("", r.Localize.text("help_archive_01", [s.MessageConst.MAX_MAILBOX_ARCHIVE_SIZE]));
    } else {
      O.CastleDialogHandler.getInstance().showHelper("", r.Localize.text("help_messages"));
    }
  };
  CastleMessageInboxDialog.prototype.changeMessageCategory = function (e) {
    this._currentMessageCategory = e;
    if (e == CastleMessageInboxDialog.MESSAGE_CATEGORY_ARCHIVED) {
      this.itxt_title.textContentVO.textId = "dialog_inbox_showArchive";
      this.changeCategory(c.ClientConstCastle.INBOX_CATEGORY_FLAGGED_MAIL);
      this.showSublayer(this._subLayer.get(c.ClientConstCastle.INBOX_CATEGORY_FLAGGED_MAIL), []);
    } else if (e == CastleMessageInboxDialog.MESSAGE_CATEGORY_OUTBOX) {
      this.itxt_title.textContentVO.textId = "dialog_inbox_showOutbox";
      this.changeCategory(c.ClientConstCastle.INBOX_CATEGORY_TYPED_MAIL);
      this.showSublayer(this._subLayer.get(c.ClientConstCastle.MESSAGE_CATEGORY_OUTBOX), [this._currentMessageCategory]);
    } else if (e == CastleMessageInboxDialog.MESSAGE_CATEGORY_PLAYER) {
      this.itxt_title.textContentVO.textId = "dialog_inbox_showplayerAndSystem";
      this.changeCategory(c.ClientConstCastle.INBOX_CATEGORY_TYPED_MAIL);
      this.showSublayer(this._subLayer.get(c.ClientConstCastle.INBOX_CATEGORY_PLAYER_MAIL), [this._currentMessageCategory]);
    } else if (e == CastleMessageInboxDialog.MESSAGE_CATEGORY_BATTLE_AND_SPY_REPORT) {
      this.itxt_title.textContentVO.textId = "dialog_inbox_showBattleSpyReports";
      this.changeCategory(c.ClientConstCastle.INBOX_CATEGORY_BATTLE_AND_SPY_REPORTS);
      this.showSublayer(this._subLayer.get(c.ClientConstCastle.INBOX_CATEGORY_BATTLE_AND_SPY_REPORTS), [this._currentMessageCategory]);
    } else if (e == CastleMessageInboxDialog.MESSAGE_CATEGORY_OFFER) {
      this.itxt_title.textContentVO.textId = "dialog_inbox_showSpecialOffers";
      this.changeCategory(c.ClientConstCastle.INBOX_CATEGORY_OFFER);
      this.showSublayer(this._subLayer.get(c.ClientConstCastle.INBOX_CATEGORY_OFFER), [this._currentMessageCategory]);
    } else if (e == CastleMessageInboxDialog.MESSAGE_CATEGORY_BATTLE_AND_SPY_REPORT_FORWARDED) {
      this.itxt_title.textContentVO.textId = "dialog_inbox_forwardedReports_title";
      this.changeCategory(c.ClientConstCastle.INBOX_CATEGORY_BATTLE_AND_SPY_REPORTS_FORWARDED);
      this.showSublayer(this._subLayer.get(c.ClientConstCastle.INBOX_CATEGORY_BATTLE_AND_SPY_REPORTS_FORWARDED), [this._currentMessageCategory]);
    } else {
      this.itxt_title.textContentVO.textId = "dialog_inbox_showAllMessages";
      this.changeCategory(c.ClientConstCastle.INBOX_CATEGORY_TYPED_MAIL);
      this.showSublayer(this._subLayer.get(c.ClientConstCastle.INBOX_CATEGORY_TYPED_MAIL), [this._currentMessageCategory]);
    }
    this.itxt_title.verticalAlign = _.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.updateCategoryButtons();
    this.updateDeleteAllButton();
  };
  CastleMessageInboxDialog.prototype.updateDeleteAllButton = function () {
    var e = this.getCurrentSublayer();
    this.dialogDisp.category_message.btn_deleteAll.visible = e.deleteButtonVisible;
    this.dialogDisp.category_message.btn_deleteAll_overview.visible = e.deleteButtonOverviewVisible;
    m.ButtonHelper.enableButton(this.dialogDisp.category_message.btn_deleteAll, this.deletableMessagesAmount > 0);
    m.ButtonHelper.enableButton(this.dialogDisp.category_message.btn_deleteAll_overview, e.getMessageCount() > 0);
    this.dialogDisp.category_message.btn_deleteAll.toolTipText = e.getMessageCount() > 0 ? e.deleteButtonToolTipText : "noMessages";
    this.dialogDisp.category_message.btn_deleteAll_overview.toolTipText = e.getMessageCount() > 0 ? e.deleteButtonToolTipText : "noMessages";
  };
  CastleMessageInboxDialog.prototype.onClickDeleteAll = function () {
    var e = "";
    var t = this.getCurrentSublayer();
    var i = t.getMessageCount();
    var n = t.allMessageIDs;
    if (this._currentMessageCategory == CastleMessageInboxDialog.MESSAGE_CATEGORY_ARCHIVED) {
      e = r.Localize.text("dialog_inbox_deleteMessageAll_popup_archived_desc", [i]);
    } else if (this._currentMessageCategory == CastleMessageInboxDialog.MESSAGE_CATEGORY_OUTBOX) {
      e = r.Localize.text("dialog_inbox_deleteMessageAll_popup_sent_desc", [i]);
    } else if (this._currentMessageCategory == CastleMessageInboxDialog.MESSAGE_CATEGORY_PLAYER) {
      e = r.Localize.text("dialog_inbox_deleteMessageAll_popup_playerAndSystem_desc", [i]);
    } else if (this._currentMessageCategory == CastleMessageInboxDialog.MESSAGE_CATEGORY_BATTLE_AND_SPY_REPORT) {
      e = r.Localize.text("dialog_inbox_deleteMessageAll_popup_battleLogs_desc", [i]);
    } else if (this._currentMessageCategory == CastleMessageInboxDialog.MESSAGE_CATEGORY_OFFER) {
      var s = [];
      for (var l = 0; l < n.length; l++) {
        if (a.instanceOfClass(h.CastleModel.messageData.getMessageVOById(n[l]), "MessagePrivateOfferVO")) {
          if (!h.CastleModel.messageData.getMessageVOById(n[l]).isOfferActive()) {
            s.push(n[l]);
          }
        } else {
          s.push(n[l]);
        }
      }
      n = s;
      i = s.length;
      e = r.Localize.text("dialog_inbox_deleteMessageAll_popup_offers_desc", [i]);
    } else {
      e = this._currentMessageCategory == CastleMessageInboxDialog.MESSAGE_CATEGORY_BATTLE_AND_SPY_REPORT_FORWARDED ? r.Localize.text("dialog_inbox_deleteMessageAll_popup_battleLogsForwarded_desc", [i]) : r.Localize.text("dialog_inbox_deleteMessageAll_popup_received_desc", [i]);
    }
    O.CastleDialogHandler.getInstance().registerDialogs(T.ConfirmDeleteAllMessagesDialog, new o.BasicStandardYesNoDialogProperties("", e, function () {
      o.BasicModel.smartfoxClient.sendCommandVO(new u.C2SDeleteMessagesVO(n));
    }));
  };
  Object.defineProperty(CastleMessageInboxDialog.prototype, "deletableMessagesAmount", {
    get: function () {
      var e = this.getCurrentSublayer();
      var t = e.allMessageIDs;
      if (this._currentMessageCategory == CastleMessageInboxDialog.MESSAGE_CATEGORY_OFFER) {
        var i = [];
        for (var n = 0; n < t.length; n++) {
          if (!a.instanceOfClass(h.CastleModel.messageData.getMessageVOById(t[n]), "MessagePrivateOfferVO") || !h.CastleModel.messageData.getMessageVOById(t[n]).isOfferActive()) {
            i.push(t[n]);
          }
        }
        return i.length;
      }
      return e.getMessageCount();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMessageInboxDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleMessageInboxDialog.prototype.getCurrentSublayer = function () {
    return this._currentSublayer;
  };
  CastleMessageInboxDialog.NAME = "CastleMessageInboxEx2";
  CastleMessageInboxDialog.MESSAGE_CATEGORY_INBOX = 0;
  CastleMessageInboxDialog.MESSAGE_CATEGORY_OUTBOX = 1;
  CastleMessageInboxDialog.MESSAGE_CATEGORY_PLAYER = 2;
  CastleMessageInboxDialog.MESSAGE_CATEGORY_OFFER = 3;
  CastleMessageInboxDialog.MESSAGE_CATEGORY_ARCHIVED = 9;
  CastleMessageInboxDialog.MESSAGE_CATEGORY_BATTLE_AND_SPY_REPORT = 5;
  CastleMessageInboxDialog.MESSAGE_CATEGORY_BATTLE_AND_SPY_REPORT_FORWARDED = 6;
  return CastleMessageInboxDialog;
}(require("./114.js").CastleExternalSubLayerDialog);
exports.CastleMessageInboxDialog = f;
var O = require("./9.js");
var E = require("./4067.js");
var y = require("./4069.js");
var b = require("./4070.js");
var D = require("./4071.js");
var I = require("./1129.js");
var T = require("./4072.js");
var v = require("./4073.js");
var S = require("./4075.js");
a.classImplementsInterfaces(f, "ICollectableRendererList");