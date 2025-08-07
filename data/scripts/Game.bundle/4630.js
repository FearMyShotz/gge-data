Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./2.js");
var u = require("./1.js");
var d = require("./1.js");
var p = require("./5.js");
var h = require("./5.js");
var g = require("./3.js");
var C = require("./6.js");
var _ = require("./7.js");
var m = require("./44.js");
var f = require("./4.js");
var O = require("./351.js");
var E = require("./135.js");
var y = require("./1660.js");
var b = require("./1661.js");
var D = require("./66.js");
var I = function (e) {
  function CastleHandleServerErrorCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleHandleServerErrorCommand, e);
  CastleHandleServerErrorCommand.prototype.handleGameSpecificServerError = function (e) {
    var t = C.int(e.error);
    var i = e.params;
    var n = {};
    switch (t) {
      case p.ERROR.NOT_ENOUGH_RESOURCES:
        var a;
        if (i.length > 1) {
          n = JSON.parse(i[1]);
          if (C.int(n.hasOwnProperty("A") ? n.A : 0) > 0) {
            R.ModernPackageShopResourceTipEnum.__initialize_static_members();
            T.CastleDialogHandler.getInstance().registerDefaultDialogs(V.ModernPackageShopResourceTipDialog, new x.ModernPackageShopResourceTipDialogProperties(null, [R.ModernPackageShopResourceTipEnum.AQUAMARINE.typeVO]));
          } else {
            (a = new P.CastleResourceWaitDialogProperties(e.commandId)).parseParams(n);
            T.CastleDialogHandler.getInstance().registerDefaultDialogs(L.CastleResourceWaitDialog, a);
          }
        } else {
          this.performDefaultError(e);
        }
        break;
      case p.ERROR.NOT_ENOUGH_SPECIAL_CURRENCY:
        if (!i[1]) {
          return;
        }
        var r = (n = JSON.parse(i[1])) ? n.MCIDS : null;
        if (r && r.length != 0) {
          D.CostHelper.showNotEnoughSpecialCurrencyDialog(r);
        } else {
          this.performDefaultError(e);
        }
        break;
      case p.ERROR.USAGE_OF_BADWORDS:
        var c = "";
        if ((n = i.length > 1 ? JSON.parse(i[1]) : new Object()).BW && n.BW[0]) {
          c = n.BW[0];
        }
        if (c && c != "" && c != " ") {
          T.CastleDialogHandler.getInstance().registerDialogs(M.CastleStandardOkDialog, new s.BasicStandardOkDialogProperties(g.Localize.text("generic_alert_watchout"), g.Localize.text("alert_badword_textReplacement", [c])));
        } else {
          T.CastleDialogHandler.getInstance().registerDialogs(M.CastleStandardOkDialog, new s.BasicStandardOkDialogProperties(g.Localize.text("generic_alert_watchout"), g.Localize.text("alert_badword")));
        }
        break;
      case p.ERROR.NOT_ENOUGH_CURRENCY1:
        T.CastleDialogHandler.getInstance().registerDefaultDialogs(S.CastleNoMoneyC1Dialog, new O.CastleNoMoneyC1DialogProperties());
        break;
      case p.ERROR.NOT_ENOUGH_CURRENCY2:
        if (e.commandId == _.ClientConstSF.S2C_REVIVE_HOSPITAL_UNITS || e.commandId == _.ClientConstSF.S2C_REVIVE_ALL_HOSPITAL_UNITS) {
          T.CastleDialogHandler.getInstance().registerDefaultDialogs(A.CastleNoMoneyC2Dialog, new E.CastleNoMoneyC2DialogProperties());
        } else {
          T.CastleDialogHandler.getInstance().registerDefaultDialogs(A.CastleNoMoneyC2Dialog, new E.CastleNoMoneyC2DialogProperties(), true, o.BasicDialogHandler.PRIORITY_TOP);
        }
        break;
      case p.ERROR.INVALID_EMAIL:
        T.CastleDialogHandler.getInstance().registerDialogs(M.CastleStandardOkDialog, new s.BasicStandardOkDialogProperties(g.Localize.text("generic_alert_information"), g.Localize.text("generic_register_emailwrong_copy")));
        break;
      case p.ERROR.ALLI_NOT_ENOUGH_C2:
        T.CastleDialogHandler.getInstance().registerDefaultDialogs(A.CastleNoMoneyC2Dialog, new E.CastleNoMoneyC2DialogProperties(E.CastleNoMoneyC2DialogProperties.TYPE_ALLIANCE));
        break;
      case p.ERROR.NOT_OWNED_LONG_ENOUGH:
        T.CastleDialogHandler.getInstance().registerDefaultDialogs(M.CastleStandardOkDialog, new s.BasicStandardOkDialogProperties(g.Localize.text("generic_alert_information"), g.Localize.text("errorCode_" + t, [l.TimeStringHelper.getTimeToString(h.OutpostConst.MIN_TIME_BEFORE_ABANDON, l.TimeStringHelper.ONE_TIME_FORMAT, g.Localize.text)])));
        break;
      case p.ERROR.CL_OBJECT_ALREADY_IN_LIST:
        break;
      case p.ERROR.NO_TARGET:
        T.CastleDialogHandler.getInstance().registerDefaultDialogs(M.CastleStandardOkDialog, new s.BasicStandardOkDialogProperties("", g.Localize.text("errorCode_191")));
        break;
      case p.ERROR.IS_RELOCATING:
        var u = g.Localize.text("errorCode_" + t, [l.TimeStringHelper.getShortTimeStringBySeconds(f.CastleModel.userData.remainingRelocationDuration)]);
        T.CastleDialogHandler.getInstance().registerDefaultDialogs(M.CastleStandardOkDialog, new s.BasicStandardOkDialogProperties(g.Localize.text("generic_alert_information"), u));
        break;
      case p.ERROR.ALLIANCE_ALREADY_HAS_PEACE_REQUEST:
        T.CastleDialogHandler.getInstance().registerDefaultDialogs(M.CastleStandardOkDialog, new s.BasicStandardOkDialogProperties("", g.Localize.text("errorCode_289")));
        break;
      case p.ERROR.TOO_MUCH_UNITS:
        if (f.CastleModel.areaData.activeArea.isFactionCamp) {
          T.CastleDialogHandler.getInstance().registerDefaultDialogs(v.CastleFactionUnitLimitDialog, new s.BasicStandardOkDialogProperties(g.Localize.text("generic_alert_information"), null));
        } else {
          this.performDefaultError(e);
        }
        break;
      case p.ERROR.CONSTRUCTION_ITEM_INVENTORY_FULL:
        T.CastleDialogHandler.getInstance().registerDialogs(M.CastleStandardOkDialog, new s.BasicStandardOkDialogProperties(g.Localize.text("generic_alert_information"), g.Localize.text("alert_ci_inventoryFull_copy")));
        break;
      case p.ERROR.WORLD_IS_FULL:
        T.CastleDialogHandler.getInstance().registerDialogs(M.CastleStandardOkDialog, new s.BasicStandardOkDialogProperties(g.Localize.text("generic_alert_information"), g.Localize.text("world_is_full"), this.bindFunction(this.reloadPage), "", this.bindFunction(this.reloadPage)));
        break;
      case p.ERROR.C2_CONFIRMATION_REQUIRED:
        n = JSON.parse(i[1]);
        T.CastleDialogHandler.getInstance().registerDialogs(y.ConfirmC2Dialog, new b.ConfirmC2DialogProperties(n[p.CommKeys.CONFIRM_C2_THRESHOLD], e));
        break;
      default:
        this.performDefaultError(e);
    }
  };
  CastleHandleServerErrorCommand.prototype.reloadPage = function (e) {
    if (u.ExternalInterface.available) {
      try {
        u.ExternalInterface.call("function refresh(){location.reload();}");
      } catch (e) {
        c.error("ExternalInterface call failed.");
      }
    }
  };
  CastleHandleServerErrorCommand.prototype.performDefaultError = function (e) {
    var t = C.int(e.error);
    if (g.Localize.text("errorCode_" + t) != "errorCode_" + t) {
      T.CastleDialogHandler.getInstance().registerDialogs(M.CastleStandardOkDialog, new s.BasicStandardOkDialogProperties(g.Localize.text("generic_alert_information"), g.Localize.text(m.SpecialServerHelper.checkTextIDForSkinText("errorCode_" + t)) + (r.EnvGlobalsHandler.globals.isTest || r.EnvGlobalsHandler.globals.isLocal ? " (" + e.commandId + ")" : "")));
    } else {
      T.CastleDialogHandler.getInstance().registerDialogs(M.CastleStandardOkDialog, new s.BasicStandardOkDialogProperties(g.Localize.text("generic_alert_bug"), "errorCode: " + t + ": " + p.ERROR.getErrorText(t) + (r.EnvGlobalsHandler.globals.isTest || r.EnvGlobalsHandler.globals.isLocal ? " (" + e.commandId + ")" : "")));
    }
  };
  return CastleHandleServerErrorCommand;
}(a.BasicHandleServerErrorCommand);
exports.CastleHandleServerErrorCommand = I;
var T = require("./9.js");
var v = require("./4631.js");
var S = require("./352.js");
var A = require("./138.js");
var L = require("./872.js");
var P = require("./981.js");
var M = require("./38.js");
var R = require("./984.js");
var V = require("./983.js");
var x = require("./985.js");
d.classImplementsInterfaces(I, "ISimpleCommand");