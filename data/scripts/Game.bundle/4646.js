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
var d = require("./5.js");
var p = require("./7.js");
var h = require("./364.js");
var g = require("./4.js");
var C = require("./10.js");
var _ = function (e) {
  function LCACommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(LCACommand, e);
  Object.defineProperty(LCACommand.prototype, "cmdId", {
    get: function () {
      return p.ClientConstSF.S2C_CREATE_AVATAR;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(C.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  LCACommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case d.ERROR.ALL_OK:
        g.CastleModel.userData.firstLogin = true;
        g.CastleModel.localData.saveCountryData(l.GGSCountryController.instance.currentCountry.ggsCountryCode);
        if (this.layoutManager.currentState == o.BasicLayoutManager.STATE_STARTSCREEN && (this.env.loginIsKeyBased || this.env.isFacebook)) {
          s.ClientFunnelTrackingController.getInstance().trackState(a.ClientFunnelGameStates.REGISTERED);
          r.ExternalInterfaceController.instance.executeJavaScriptFunction(new c.JavascriptCallOnRegisterCompleteFactory());
          g.CastleModel.smartfoxClient.sendMessage(p.ClientConstSF.C2S_GET_BASIC_DATA, []);
        }
        return true;
      case d.ERROR.INVALID_NAME:
        var i = JSON.parse(t[1]);
        this.controller.dispatchEvent(new h.CastleRegisterErrorEvent(h.CastleRegisterErrorEvent.REGISTER_ERROR, h.CastleRegisterErrorEvent.INVALID_NAME, i));
        break;
      case d.ERROR.NAME_ALREADY_IN_USE:
        i = JSON.parse(t[1]);
        this.controller.dispatchEvent(new h.CastleRegisterErrorEvent(h.CastleRegisterErrorEvent.REGISTER_ERROR, h.CastleRegisterErrorEvent.NAME_ALREADY_IN_USE, i));
        break;
      case d.ERROR.NAME_HAS_ONLY_NUMBERS:
        i = JSON.parse(t[1]);
        this.controller.dispatchEvent(new h.CastleRegisterErrorEvent(h.CastleRegisterErrorEvent.REGISTER_ERROR, h.CastleRegisterErrorEvent.NAME_HAS_ONLY_NUMBERS, i));
        break;
      case d.ERROR.USAGE_OF_BADWORDS:
        i = JSON.parse(t[1]);
        this.controller.dispatchEvent(new h.CastleRegisterErrorEvent(h.CastleRegisterErrorEvent.REGISTER_ERROR, h.CastleRegisterErrorEvent.USAGE_OF_BADWORDS, i));
        break;
      case d.ERROR.NO_FREE_RENAME:
        if (g.CastleModel.userData.userLevel > 1) {
          this.showErrorDialog(e, t);
        }
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return LCACommand;
}(C.CastleCommand);
exports.LCACommand = _;
u.classImplementsInterfaces(_, "IExecCommand");