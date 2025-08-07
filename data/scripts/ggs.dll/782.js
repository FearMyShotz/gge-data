Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./92.js");
var s = require("./12.js");
var r = require("./5.js");
var o = require("./8.js");
var l = require("./423.js");
var u = require("./424.js");
var c = require("./43.js");
var _ = require("./4.js");
var d = require("./25.js");
var m = require("./3.js");
var h = require("./60.js");
var p = require("./6.js");
var g = require("./2.js").getLogger("CoreJS.BasicAddExtraCurrencyCommand");
var E = function (e) {
  function BasicAddExtraCurrencyCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(BasicAddExtraCurrencyCommand, e);
  BasicAddExtraCurrencyCommand.prototype.execute = function (e = null) {
    if (_.BasicModel.sessionData.loggedIn) {
      var t;
      this.sessionId = this.currentUnixTime;
      var n = 0;
      var i = 0;
      if (e) {
        if (e instanceof u.AddExtraCurrencyVO) {
          t = e.paymentHash;
          n = h.int(e.clickSourceId);
          i = h.int(e.shopTab);
        } else {
          t = e.toString();
        }
      } else {
        t = "";
      }
      this.paymentHash = t;
      s.CommandController.instance.executeCommand(o.BasicController.COMMAND_TRACK_GAME_PAYMENT_SHOP_CLICK_EVENT, new l.BasicPaymentShopClickTrackingVO(this.sessionId, n));
      this.layoutManager.revertFullscreen();
      g.debug("Use shop in Social Network? " + this.env.requestPayByJS);
      if (this.env.requestPayByJS) {
        this.onOpenPaymentByJS();
      } else {
        var a = new m.URLRequest(c.PathProvider.instance.shopURL + this.paymentHash);
        var r = {
          sid: this.sessionId
        };
        if (i > 0) {
          r.t = i;
        }
        a.data = r;
        this.onOpenPayment(a);
      }
    }
  };
  BasicAddExtraCurrencyCommand.prototype.onOpenPaymentByJS = function () {
    m.ExternalInterface.call("requestPayment");
  };
  BasicAddExtraCurrencyCommand.prototype.onOpenPayment = function (e) {
    a.BrowserUtil.openWindow(e);
  };
  Object.defineProperty(BasicAddExtraCurrencyCommand.prototype, "currentUnixTime", {
    get: function () {
      var e = new Date();
      return Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds()).valueOf();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicAddExtraCurrencyCommand.prototype, "layoutManager", {
    get: function () {
      return d.BasicLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicAddExtraCurrencyCommand.prototype, "env", {
    get: function () {
      return r.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  return BasicAddExtraCurrencyCommand;
}(p.SimpleCommand);
exports.BasicAddExtraCurrencyCommand = E;