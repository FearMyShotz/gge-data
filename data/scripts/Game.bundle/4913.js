Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./50.js");
var l = require("./12.js");
var c = require("./45.js");
var u = require("./48.js");
var d = require("./4.js");
var p = require("./10.js");
var h = require("./4914.js");
var g = require("./4916.js");
var C = require("./9.js");
var _ = require("./37.js");
var m = function (e) {
  function OLECommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(OLECommand, e);
  Object.defineProperty(OLECommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_OPEN_LOOT_BOX;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  OLECommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        var n = d.CastleModel.lootBoxData.xml.getLootBoxByID(i.LID);
        var o = undefined;
        if (i.LTR) {
          o = r.CollectableManager.parser.s2cParamList.createList(i.LTR);
        }
        if (i.LTRR) {
          o = r.CollectableManager.parser.s2cParamList.createList(i.LTRR);
        }
        var s = i.KBS;
        var p = d.CastleModel.lootBoxData.xml.getLootBoxTypeByID(n.lootBoxTypeID).keyProgress;
        d.CastleModel.lootBoxData.setKeyProgress(n.lootBoxTypeID, i.KBS);
        var m = i.TBF;
        var f = new u.CollectableList();
        for (var O = 0, E = i.KTR; O < E.length; O++) {
          var y = E[O];
          f.addItem(c.CollectableHelper.createVO(l.CollectableEnum.GENERIC_CURRENCY, y.AMT, y.ID));
        }
        var b = o.addList(f);
        var D = i.UKI;
        var I = i.LTR;
        var T = new g.MysteryBoxOpeningDialogProperties(n, D, s, p, m, b, I);
        C.CastleDialogHandler.getInstance().registerDefaultDialogs(h.MysteryBoxOpeningDialog, T);
        this.controller.dispatchEvent(new _.CastleServerMessageArrivedEvent(_.CastleServerMessageArrivedEvent.OLE_LOOT_BOX_ARRIVED));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return OLECommand;
}(p.CastleCommand);
exports.OLECommand = m;
o.classImplementsInterfaces(m, "IExecCommand");