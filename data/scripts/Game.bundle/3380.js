Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./37.js");
var l = require("./15.js");
var c = require("./4.js");
var u = require("./804.js");
var d = require("./236.js");
var p = require("./3381.js");
var h = require("./1058.js");
var g = function (e) {
  function OpenActiveTaxDialogCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(OpenActiveTaxDialogCommand, e);
  OpenActiveTaxDialogCommand.prototype.execute = function (e = null) {
    switch (c.CastleModel.taxData.taxInfoVO.taxState) {
      case u.TaxInfoVO.TAXSTATUS_NONE:
        l.CastleBasicController.getInstance().addEventListener(r.CastleServerMessageArrivedEvent.TXI_ARRIVED, this.bindFunction(this.onTXIArrivedForTaxStatusNone));
        c.CastleModel.smartfoxClient.sendCommandVO(new h.C2SGetTaxInfoVO());
        break;
      case u.TaxInfoVO.TAXSTATUS_COLLECTING:
      case u.TaxInfoVO.TAXSTATUS_WAIT_FOR_COLLECT:
        C.CastleDialogHandler.getInstance().registerDefaultDialogs(m.CastleCollectTaxProgressDialog);
    }
  };
  OpenActiveTaxDialogCommand.prototype.onTXIArrivedForTaxStatusNone = function (e) {
    l.CastleBasicController.getInstance().removeEventListener(r.CastleServerMessageArrivedEvent.TXI_ARRIVED, this.bindFunction(this.onTXIArrivedForTaxStatusNone));
    if (c.CastleModel.taxData.taxInfoVO.population > 0) {
      C.CastleDialogHandler.getInstance().registerDefaultDialogs(f.CastleCollectTaxStartDialog, new p.CastleCollectTaxStartDialogProperties());
    } else {
      C.CastleDialogHandler.getInstance().registerDefaultDialogs(_.CastleCharacterYesNoOKDialog, new d.CastleCharacterYesNoOKDialogProperties(s.Localize.text("generic_alert_warning"), s.Localize.text("alert_nofolk_copy"), 2, null, null, false));
    }
  };
  return OpenActiveTaxDialogCommand;
}(o.SimpleCommand);
exports.OpenActiveTaxDialogCommand = g;
var C = require("./9.js");
var _ = require("./238.js");
var m = require("./1059.js");
var f = require("./1646.js");
a.classImplementsInterfaces(g, "ISimpleCommand");