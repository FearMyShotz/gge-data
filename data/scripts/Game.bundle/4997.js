Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./5.js");
var u = require("./5.js");
var d = require("./7.js");
var p = require("./4.js");
var h = require("./10.js");
var g = function (e) {
  function SPRCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(SPRCommand, e);
  Object.defineProperty(SPRCommand.prototype, "cmdId", {
    get: function () {
      return d.ClientConstSF.S2C_SHOPPING_CART_REWARD;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  SPRCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case l.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        var n = a.castAs(p.CastleModel.specialEventData.getActiveEventByEventId(c.EventConst.EVENTTYPE_SHOPPING_CART_PRIMEDAY), "ShoppingCartPrimeSaleEventVO");
        if (n) {
          var s = n.rewardCount;
          n.c2Payed = i[r.CommKeys.PAYED_C2];
          n.cartsPaid = n.rewardCount - s;
        }
        var d = i[r.CommKeys.SHOPPING_CART];
        if (!d || d.length < u.ShoppingCartConst.SHOPPING_CART_SIZE) {
          break;
        }
        var h = new C.CollectableList();
        var g = undefined;
        for (var O = 0; O < d.length; O++) {
          (g = p.CastleModel.shoppingCartPrimeDayData.getNodeByOption(d[O]).item.clone()).amount *= n ? n.cartsPaid : 1;
          h.addItem(g);
        }
        _.CastleDialogHandler.getInstance().registerDefaultDialogs(m.CastlePaymentRewardSpecialOfferFinishDialog, new f.CastleShoppingCartPrimeDayFinishDialogProperties(h, n), true, o.BasicDialogHandler.PRIORITY_HIGH);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return true;
  };
  return SPRCommand;
}(h.CastleCommand);
exports.SPRCommand = g;
var C = require("./48.js");
var _ = require("./9.js");
var m = require("./1080.js");
var f = require("./4998.js");
s.classImplementsInterfaces(g, "IExecCommand");