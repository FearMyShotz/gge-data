Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./39.js");
var d = require("./607.js");
var p = require("./44.js");
var h = require("./4.js");
var g = require("./8.js");
var C = require("./35.js");
var _ = require("./282.js");
var m = require("./1363.js");
var f = require("./1364.js");
var O = require("./1222.js");
var E = function (e) {
  function CastleAllianceInfoDialogDiplomacy(t, i) {
    var n = this;
    n.sendRank = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this, t) || this).itxt_copy = n.textFieldManager.registerTextField(n.dialogDisp.txt_copy, new l.LocalizedTextVO(""));
    n.onDiplomacyRequestSend = i;
    g.ButtonHelper.initBasicButtons([n.dialogDisp.btn_pact, n.dialogDisp.btn_noAttack, n.dialogDisp.btn_war]);
    return n;
  }
  n.__extends(CastleAllianceInfoDialogDiplomacy, e);
  CastleAllianceInfoDialogDiplomacy.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.updateButtons();
  };
  CastleAllianceInfoDialogDiplomacy.prototype.updateButtons = function () {
    this.resetButtons();
    switch (this.allianceInfoVO.allianceStatusToOwnAlliance) {
      case s.AllianceConst.DIPLOMACY_NEUTRAL:
        this.updateButtonsNeutral();
        break;
      case s.AllianceConst.DIPLOMACY_IN_WAR:
        this.updateButtonsInWar();
        break;
      case s.AllianceConst.DIPLOMACY_REAL_ALLIED:
        this.updateButtonsRealAllied();
        break;
      case s.AllianceConst.DIPLOMACY_SOFT_ALLIED:
        this.updateButtonsSoftAllied();
    }
    this.checkDiplomacyRights();
  };
  CastleAllianceInfoDialogDiplomacy.prototype.checkDiplomacyRights = function () {
    if (!h.CastleModel.allianceData.hasRight(h.CastleModel.userData.allianceRank, s.AllianceConst.RIGHT_DIPLOMACY)) {
      if (this.dialogDisp.btn_pact.enabled) {
        g.ButtonHelper.enableButton(this.dialogDisp.btn_pact, false);
        this.dialogDisp.btn_pact.toolTipText = r.Localize.text(this.dialogDisp.btn_pact.toolTipText) + "\n\n" + r.Localize.text("dialog_alliance_rankToLow");
      }
      if (this.dialogDisp.btn_noAttack.enabled) {
        g.ButtonHelper.enableButton(this.dialogDisp.btn_noAttack, false);
        this.dialogDisp.btn_noAttack.toolTipText = r.Localize.text(this.dialogDisp.btn_noAttack.toolTipText) + "\n\n" + r.Localize.text("dialog_alliance_rankToLow");
      }
      if (this.dialogDisp.btn_war.enabled) {
        g.ButtonHelper.enableButton(this.dialogDisp.btn_war, false);
        this.dialogDisp.btn_war.toolTipText = r.Localize.text(this.dialogDisp.btn_war.toolTipText) + "\n\n" + r.Localize.text("dialog_alliance_rankToLow");
      }
    }
  };
  CastleAllianceInfoDialogDiplomacy.prototype.updateButtonsSoftAllied = function () {
    if (this.allianceInfoVO.canInvitedForHardPact) {
      if (this.newAllianceStatusID != y.AllianceInfoVO.DIPLOMACY_REAL_ALLIED || this.newAllianceStatusConfirmed) {
        this.dialogDisp.btn_pact.toolTipText = "dialog_alliance_requst_pact";
        this.dialogDisp.btn_pact.questionText = r.Localize.text("dialog_alliance_yesNo_requst_pact");
      } else {
        this.dialogDisp.btn_pact.toolTipText = "dialog_alliance_change_acceptRequest_pact_tooltip";
        this.dialogDisp.btn_pact.questionText = r.Localize.text("dialog_alliance_yesNo_requst_pact_reply", [this.otherAllianceName]);
      }
    } else {
      g.ButtonHelper.enableButton(this.dialogDisp.btn_pact, false);
      this.dialogDisp.btn_pact.toolTipText = "dialog_alliance_maxHardPacted";
      this.dialogDisp.btn_pact.questionText = null;
    }
    if (this.newAllianceStatusConfirmed) {
      this.dialogDisp.btn_noAttack.toolTipText = "dialog_alliance_end_noAttack";
      this.dialogDisp.btn_noAttack.questionText = r.Localize.text("dialog_alliance_yesNo_end_noAttack");
    } else {
      g.ButtonHelper.enableButton(this.dialogDisp.btn_noAttack, false);
      this.dialogDisp.btn_noAttack.toolTipText = u.ClientConstTextIds.NOT_AVAILABLE;
    }
    this.dialogDisp.btn_noAttack.gotoAndStop(2);
    this.dialogDisp.btn_war.toolTipText = r.Localize.text("dialog_alliance_changeTo_war");
    this.dialogDisp.btn_war.questionText = r.Localize.text("dialog_alliance_yesNo_changeTo_war");
    this.itxt_copy.textContentVO.textId = "dialog_alliance_infoNoAttack";
  };
  CastleAllianceInfoDialogDiplomacy.prototype.updateButtonsRealAllied = function () {
    if (this.allianceInfoVO.canInvitedForSoftPact) {
      if (this.newAllianceStatusID != y.AllianceInfoVO.DIPLOMACY_SOFT_ALLIED || this.newAllianceStatusConfirmed) {
        this.dialogDisp.btn_noAttack.toolTipText = "dialog_alliance_change_noAttack";
        this.dialogDisp.btn_noAttack.questionText = r.Localize.text("dialog_alliance_yesNo_change_noAttack");
      } else {
        this.dialogDisp.btn_noAttack.toolTipText = "dialog_alliance_change_acceptRequest_noAttack_tooltip";
        this.dialogDisp.btn_noAttack.questionText = r.Localize.text("dialog_alliance_yesNo_requst_noAttack_reply", [this.otherAllianceName]);
      }
    } else {
      g.ButtonHelper.enableButton(this.dialogDisp.btn_noAttack, false);
      this.dialogDisp.btn_noAttack.toolTipText = "dialog_alliance_maxSoftPacted";
      this.dialogDisp.btn_noAttack.questionText = null;
    }
    this.dialogDisp.btn_pact.gotoAndStop(2);
    this.dialogDisp.btn_pact.toolTipText = "dialog_alliance_end_pact";
    this.dialogDisp.btn_pact.questionText = r.Localize.text("dialog_alliance_yesNo_end_pact");
    this.dialogDisp.btn_war.toolTipText = "dialog_alliance_pact_noWarAgainstPact";
    g.ButtonHelper.enableButton(this.dialogDisp.btn_war, false);
    this.itxt_copy.textContentVO.textId = "dialog_alliance_infoPact";
  };
  CastleAllianceInfoDialogDiplomacy.prototype.updateButtonsInWar = function () {
    if (this.allianceInfoVO.canInvitedForSoftPact) {
      if (this.newAllianceStatusID != y.AllianceInfoVO.DIPLOMACY_SOFT_ALLIED || this.newAllianceStatusConfirmed) {
        if (this.newAllianceStatusConfirmed) {
          this.dialogDisp.btn_noAttack.toolTipText = "dialog_alliance_requst_noAttack";
          this.dialogDisp.btn_noAttack.questionText = r.Localize.text("dialog_alliance_yesNo_requst_noAttack");
        } else {
          g.ButtonHelper.enableButton(this.dialogDisp.btn_noAttack, false);
          this.dialogDisp.btn_noAttack.toolTipText = u.ClientConstTextIds.NOT_AVAILABLE;
        }
      } else {
        this.dialogDisp.btn_noAttack.toolTipText = "dialog_alliance_change_acceptRequest_noAttack_tooltip";
        this.dialogDisp.btn_noAttack.questionText = r.Localize.text("dialog_alliance_yesNo_requst_noAttack_reply", [this.otherAllianceName]);
      }
    } else {
      g.ButtonHelper.enableButton(this.dialogDisp.btn_noAttack, false);
      this.dialogDisp.btn_noAttack.toolTipText = "dialog_allianceDiplomacy_noAgression_blocked_tooltip";
      this.dialogDisp.btn_noAttack.questionText = null;
    }
    this.dialogDisp.btn_war.gotoAndStop(2);
    if (this.allianceInfoVO.isInPeaceNegociations) {
      this.dialogDisp.btn_war.toolTipText = "dialog_alliance_newDiplomacyRequest";
    } else if (this.newAllianceStatusID != y.AllianceInfoVO.DIPLOMACY_NEUTRAL || this.newAllianceStatusConfirmed) {
      if (this.newAllianceStatusConfirmed) {
        this.dialogDisp.btn_war.toolTipText = "dialog_alliance_requst_noWar";
        this.dialogDisp.btn_war.questionText = r.Localize.text("dialog_alliance_yesNo_change_noWar");
      } else {
        g.ButtonHelper.enableButton(this.dialogDisp.btn_war, false);
        this.dialogDisp.btn_war.toolTipText = u.ClientConstTextIds.NOT_AVAILABLE;
      }
    } else {
      this.dialogDisp.btn_war.toolTipText = "dialog_alliance_change_acceptRequest_noAttack_tooltip";
      this.dialogDisp.btn_war.questionText = r.Localize.text("dialog_alliance_yesNo_requst_noAttack_reply", [this.otherAllianceName]);
    }
    g.ButtonHelper.enableButton(this.dialogDisp.btn_pact, false);
    this.dialogDisp.btn_pact.toolTipText = "dialog_allianceDiplomacy_from_neutral_to_war_changed";
    this.itxt_copy.textContentVO.textId = "dialog_alliance_infoInWar";
  };
  CastleAllianceInfoDialogDiplomacy.prototype.updateButtonsNeutral = function () {
    var e = this;
    if (this.allianceInfoVO.canInvitedForHardPact) {
      if (this.newAllianceStatusID != y.AllianceInfoVO.DIPLOMACY_REAL_ALLIED || this.newAllianceStatusConfirmed) {
        if (this.newAllianceStatusConfirmed) {
          this.dialogDisp.btn_pact.toolTipText = "dialog_alliance_requst_pact";
          this.dialogDisp.btn_pact.questionText = r.Localize.text("dialog_alliance_yesNo_requst_pact");
        } else {
          g.ButtonHelper.enableButton(this.dialogDisp.btn_pact, false);
          this.dialogDisp.btn_pact.toolTipText = u.ClientConstTextIds.NOT_AVAILABLE;
        }
      } else {
        this.dialogDisp.btn_pact.toolTipText = "dialog_alliance_change_acceptRequest_pact_tooltip";
        this.dialogDisp.btn_pact.questionText = r.Localize.text("dialog_alliance_yesNo_requst_pact_reply", [this.otherAllianceName]);
        this.dialogDisp.btn_pact.dialogName = I.CastleAllianceRequestDiplomacyDialog;
        this.dialogDisp.btn_pact.getDialogProperties = function () {
          return new m.CastleAllianceRequestDiplomacyDialogProperties(e.allianceInfoVO.allianceId, s.AllianceConst.DIPLOMACY_REAL_ALLIED, e.allianceInfoVO);
        };
      }
    } else {
      g.ButtonHelper.enableButton(this.dialogDisp.btn_pact, false);
      this.dialogDisp.btn_pact.toolTipText = "dialog_alliance_maxHardPacted";
      this.dialogDisp.btn_pact.questionText = null;
    }
    if (this.allianceInfoVO.canInvitedForSoftPact) {
      if (this.newAllianceStatusID != y.AllianceInfoVO.DIPLOMACY_SOFT_ALLIED || this.newAllianceStatusConfirmed) {
        if (this.newAllianceStatusConfirmed) {
          this.dialogDisp.btn_noAttack.toolTipText = "dialog_alliance_requst_noAttack";
          this.dialogDisp.btn_noAttack.questionText = r.Localize.text("dialog_alliance_yesNo_requst_noAttack");
        } else {
          g.ButtonHelper.enableButton(this.dialogDisp.btn_noAttack, false);
          this.dialogDisp.btn_noAttack.toolTipText = u.ClientConstTextIds.NOT_AVAILABLE;
        }
      } else {
        this.dialogDisp.btn_noAttack.toolTipText = "dialog_alliance_change_acceptRequest_noAttack_tooltip";
        this.dialogDisp.btn_noAttack.questionText = r.Localize.text("dialog_alliance_yesNo_requst_noAttack_reply", [this.otherAllianceName]);
      }
    } else {
      g.ButtonHelper.enableButton(this.dialogDisp.btn_noAttack, false);
      this.dialogDisp.btn_noAttack.toolTipText = "dialog_alliance_maxSoftPacted";
      this.dialogDisp.btn_noAttack.questionText = null;
    }
    if (this.newAllianceStatusConfirmed) {
      this.dialogDisp.btn_war.toolTipText = "dialog_alliance_changeTo_war";
      this.dialogDisp.btn_war.questionText = r.Localize.text("dialog_alliance_yesNo_changeTo_war");
    } else {
      g.ButtonHelper.enableButton(this.dialogDisp.btn_war, false);
      this.dialogDisp.btn_war.toolTipText = u.ClientConstTextIds.NOT_AVAILABLE;
    }
    this.itxt_copy.textContentVO.textId = "dialog_alliance_infoNeutral";
  };
  CastleAllianceInfoDialogDiplomacy.prototype.resetButtons = function () {
    g.ButtonHelper.enableButton(this.dialogDisp.btn_pact, true);
    this.dialogDisp.btn_pact.gotoAndStop(1);
    this.dialogDisp.btn_pact.dialogName = null;
    this.dialogDisp.btn_pact.getDialogProperties = null;
    g.ButtonHelper.enableButton(this.dialogDisp.btn_noAttack, true);
    this.dialogDisp.btn_noAttack.gotoAndStop(1);
    g.ButtonHelper.enableButton(this.dialogDisp.btn_war, true);
    this.dialogDisp.btn_war.gotoAndStop(1);
  };
  CastleAllianceInfoDialogDiplomacy.prototype.onMouseUp = function (e) {
    if (g.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.dialogDisp.btn_pact:
          if (this.dialogDisp.btn_pact.currentFrame == 0) {
            this.sendRank = c.int(s.AllianceConst.DIPLOMACY_REAL_ALLIED);
          } else {
            this.sendRank = c.int(s.AllianceConst.DIPLOMACY_NEUTRAL);
          }
          if (this.dialogDisp.btn_pact.dialogName && this.dialogDisp.btn_pact.getDialogProperties) {
            b.CastleDialogHandler.getInstance().registerDefaultDialogs(this.dialogDisp.btn_pact.dialogName, this.dialogDisp.btn_pact.getDialogProperties());
          } else {
            b.CastleDialogHandler.getInstance().registerDefaultDialogs(D.CastleStandardYesNoDialog, new o.BasicStandardYesNoDialogProperties(r.Localize.text("generic_alert_watchout"), e.target.questionText, this.bindFunction(this.sendNewRank)));
          }
          break;
        case this.dialogDisp.btn_noAttack:
          if (this.dialogDisp.btn_noAttack.currentFrame == 0) {
            this.sendRank = c.int(s.AllianceConst.DIPLOMACY_SOFT_ALLIED);
          } else {
            this.sendRank = c.int(s.AllianceConst.DIPLOMACY_NEUTRAL);
          }
          b.CastleDialogHandler.getInstance().registerDefaultDialogs(D.CastleStandardYesNoDialog, new o.BasicStandardYesNoDialogProperties(r.Localize.text("generic_alert_watchout"), e.target.questionText, this.bindFunction(this.sendNewRank)));
          break;
        case this.dialogDisp.btn_war:
          if (this.dialogDisp.btn_war.currentFrame == 0) {
            this.sendRank = c.int(s.AllianceConst.DIPLOMACY_IN_WAR);
            b.CastleDialogHandler.getInstance().registerDefaultDialogs(D.CastleStandardYesNoDialog, new o.BasicStandardYesNoDialogProperties(r.Localize.text("generic_alert_watchout"), e.target.questionText, this.bindFunction(this.sendNewRank)));
          } else {
            this.sendRank = c.int(s.AllianceConst.DIPLOMACY_NEUTRAL);
            if (this.bindFunction(this.onDiplomacyRequestSend) != null) {
              this.onDiplomacyRequestSend();
            }
            if (this.allianceInfoVO.isInPeaceNegociations) {
              if (p.SpecialServerHelper.isCrossplay()) {
                var t = r.Localize.text("dialog_allianceDiplomacy_peaceOffer_copy", [this.allianceInfoVO.allianceName]);
                b.CastleDialogHandler.getInstance().registerDefaultDialogs(_.ModernYesNoDialog, new o.BasicStandardYesNoDialogProperties("attention", t, this.bindFunction(this.onAcceptPeaceCrossplay)));
              } else {
                b.CastleDialogHandler.getInstance().registerDefaultDialogs(T.CastleReceivedPeaceOfferDialog, new f.CastleSuggestPeaceDialogProperties(this.allianceInfoVO.peaceOfferVO));
              }
            } else {
              var i = new O.PeaceOfferVO(this.allianceInfoVO.allianceId, this.allianceInfoVO.allianceName, 0, true);
              if (p.SpecialServerHelper.isCrossplay()) {
                b.CastleDialogHandler.getInstance().registerDefaultDialogs(_.ModernYesNoDialog, new o.BasicStandardYesNoDialogProperties("attention", "dialog_alliance_yesNo_end_war", this.bindFunction(this.onOfferPeaceCrossplay)));
              } else {
                b.CastleDialogHandler.getInstance().registerDefaultDialogs(v.CastleSuggestPeaceDialog, new f.CastleSuggestPeaceDialogProperties(i));
              }
            }
          }
      }
    }
  };
  CastleAllianceInfoDialogDiplomacy.prototype.onOfferPeaceCrossplay = function () {
    h.CastleModel.smartfoxClient.sendCommandVO(new d.C2SAllianceChangeDiplomacyVO(this.allianceInfoVO.allianceId, s.AllianceConst.DIPLOMACY_NEUTRAL));
  };
  CastleAllianceInfoDialogDiplomacy.prototype.onAcceptPeaceCrossplay = function () {
    h.CastleModel.smartfoxClient.sendCommandVO(new d.C2SAllianceChangeDiplomacyVO(this.allianceInfoVO.allianceId, s.AllianceConst.DIPLOMACY_NEUTRAL));
  };
  CastleAllianceInfoDialogDiplomacy.prototype.sendNewRank = function (e = null) {
    h.CastleModel.smartfoxClient.sendCommandVO(new d.C2SAllianceChangeDiplomacyVO(this.allianceInfoVO.allianceId, this.sendRank));
    if (this.bindFunction(this.onDiplomacyRequestSend) != null) {
      this.onDiplomacyRequestSend();
    }
  };
  Object.defineProperty(CastleAllianceInfoDialogDiplomacy.prototype, "allianceInfoVO", {
    get: function () {
      return this._params[0];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceInfoDialogDiplomacy.prototype, "newAllianceStatusID", {
    get: function () {
      return this._params[1];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceInfoDialogDiplomacy.prototype, "newAllianceStatusConfirmed", {
    get: function () {
      return !!this._params[2];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceInfoDialogDiplomacy.prototype, "otherAllianceName", {
    get: function () {
      return this._params[3];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceInfoDialogDiplomacy.prototype, "dialogDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  return CastleAllianceInfoDialogDiplomacy;
}(C.CastleDialogSubLayer);
exports.CastleAllianceInfoDialogDiplomacy = E;
var y = require("./704.js");
var b = require("./9.js");
var D = require("./151.js");
var I = require("./1365.js");
var T = require("./1368.js");
var v = require("./2571.js");
a.classImplementsInterfaces(E, "ICollectableRendererList", "ISublayer");