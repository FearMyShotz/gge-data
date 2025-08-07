Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./5.js");
var s = require("./8.js");
var r = require("./4.js");
var o = require("./25.js");
var l = require("./40.js");
var u = require("./448.js");
var c = require("./6.js");
var _ = require("./18.js");
var d = function (e) {
  function BasicOnClickMoreCurrencyCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(BasicOnClickMoreCurrencyCommand, e);
  BasicOnClickMoreCurrencyCommand.prototype.execute = function (e = null) {
    if (r.BasicModel.userData.isGuest()) {
      this.layoutManager.showDialog(l.CommonDialogNames.StandardYesNoDialog_NAME, new u.BasicStandardYesNoDialogProperties(_.Localize.text("alert_addgold_title"), _.Localize.text("alert_addgold_copy"), this.onStartRegisterDialog, null, null, _.Localize.text("panelwin_login_register"), _.Localize.text("btn_text_cancle")));
    } else {
      this.addExtraGold();
    }
  };
  BasicOnClickMoreCurrencyCommand.prototype.addExtraGold = function () {
    s.BasicController.getInstance().addExtraGold();
  };
  BasicOnClickMoreCurrencyCommand.prototype.onStartRegisterDialog = function (e) {
    s.BasicController.getInstance().onStartRegisterDialog();
  };
  Object.defineProperty(BasicOnClickMoreCurrencyCommand.prototype, "layoutManager", {
    get: function () {
      return o.BasicLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicOnClickMoreCurrencyCommand.prototype, "env", {
    get: function () {
      return a.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  return BasicOnClickMoreCurrencyCommand;
}(c.SimpleCommand);
exports.BasicOnClickMoreCurrencyCommand = d;