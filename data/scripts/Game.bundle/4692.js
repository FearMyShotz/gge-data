Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./7.js");
var d = require("./4.js");
var p = require("./10.js");
var h = function (e) {
  function ADPCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ADPCommand, e);
  Object.defineProperty(ADPCommand.prototype, "cmdId", {
    get: function () {
      return u.ClientConstSF.S2C_ALLIANCE_CHANGE_DIPLOMACY;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  ADPCommand.prototype.executeCommand = function (e, t) {
    var i;
    switch (e) {
      case r.ERROR.ALL_OK:
        i = JSON.parse(t[1]);
        var n = c.int(i.ODR);
        var a = c.int(i.NDR);
        var u = c.int(i.S);
        d.CastleModel.allianceData.parseAllianceInfo(i.AS);
        d.CastleModel.allianceData.parseAllianceInfo(i.AO);
        g.CastleDialogHandler.getInstance().registerDefaultDialogs(C.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(this.getTitleText(u), this.getCopyText(n, a, u)));
        break;
      case r.ERROR.OTHER_ALLIANCE_REACHED_MAXIMUM:
        if ((i = JSON.parse(t[1])).NDR == s.AllianceConst.DIPLOMACY_REAL_ALLIED) {
          g.CastleDialogHandler.getInstance().registerDefaultDialogs(C.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(l.Localize.text("generic_alert_information"), l.Localize.text("dialog_alliance_maxHardPacted")));
        } else if (i.NDR == s.AllianceConst.DIPLOMACY_SOFT_ALLIED) {
          g.CastleDialogHandler.getInstance().registerDefaultDialogs(C.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(l.Localize.text("generic_alert_information"), l.Localize.text("dialog_alliance_maxSoftPacted")));
        }
        break;
      case r.ERROR.THIS_ALLIANCE_REACHED_MAXIMUM:
        if ((i = JSON.parse(t[1])).NDR == s.AllianceConst.DIPLOMACY_REAL_ALLIED) {
          g.CastleDialogHandler.getInstance().registerDefaultDialogs(C.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(l.Localize.text("generic_alert_information"), l.Localize.text("diplomacy_max_pact_myAlliance")));
        } else if (i.NDR == s.AllianceConst.DIPLOMACY_SOFT_ALLIED) {
          g.CastleDialogHandler.getInstance().registerDefaultDialogs(C.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(l.Localize.text("generic_alert_information"), l.Localize.text("diplomacy_max_noAttack_myAlliance")));
        }
        break;
      case r.ERROR.EXCEEDING_MAXIMUM_COUNT:
        g.CastleDialogHandler.getInstance().registerDefaultDialogs(C.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(l.Localize.text("generic_alert_information"), l.Localize.text("dialog_diplomacy_error_93")));
        break;
      case r.ERROR.NO_CHANGE:
        g.CastleDialogHandler.getInstance().registerDefaultDialogs(C.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(l.Localize.text("generic_alert_information"), l.Localize.text("dialog_diplomacy_error_15")));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  ADPCommand.prototype.getTitleText = function (e) {
    switch (e) {
      case 0:
        return l.Localize.text("dialog_allianceDiplomacy_request_title");
      case 1:
        return l.Localize.text("dialog_allianceDiplomacy_changed_title");
    }
    return "";
  };
  ADPCommand.prototype.getTextSearch = function (e, t, i) {
    var n = "dialog_allianceDiplomacy_from_";
    switch (e) {
      case s.AllianceConst.DIPLOMACY_IN_WAR:
        n += "war";
        break;
      case s.AllianceConst.DIPLOMACY_NEUTRAL:
        n += "neutral";
        break;
      case s.AllianceConst.DIPLOMACY_REAL_ALLIED:
        n += "pact";
        break;
      case s.AllianceConst.DIPLOMACY_SOFT_ALLIED:
        n += "noAttack";
    }
    n += "_to_";
    switch (t) {
      case s.AllianceConst.DIPLOMACY_IN_WAR:
        n += "war";
        break;
      case s.AllianceConst.DIPLOMACY_NEUTRAL:
        n += "neutral";
        break;
      case s.AllianceConst.DIPLOMACY_REAL_ALLIED:
        n += "pact";
        break;
      case s.AllianceConst.DIPLOMACY_SOFT_ALLIED:
        n += "noAttack";
    }
    n += "_";
    switch (i) {
      case 0:
        n += "request";
        break;
      case 1:
        n += "changed";
    }
    return n;
  };
  ADPCommand.prototype.getCopyText = function (e, t, i) {
    var n;
    if ((n = l.Localize.text(this.getTextSearch(e, t, i))) == "") {
      n = this.getTextSearch(e, t, i);
    }
    return n;
  };
  return ADPCommand;
}(p.CastleCommand);
exports.ADPCommand = h;
var g = require("./9.js");
var C = require("./38.js");
a.classImplementsInterfaces(h, "IExecCommand");