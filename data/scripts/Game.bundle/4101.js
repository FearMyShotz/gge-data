Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./53.js");
var l = require("./89.js");
var c = function (e) {
  function BackToMainServerButton() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(BackToMainServerButton, e);
  BackToMainServerButton.prototype.isButtonVisible = function () {
    return r.ABGHelper.isOnABGServer;
  };
  BackToMainServerButton.prototype.getButtonTooltip = function () {
    return "panel_action_mainKingdom";
  };
  Object.defineProperty(BackToMainServerButton.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Btn_GoToCastle;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.APanelButton.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  BackToMainServerButton.prototype.onButtonClicked = function () {
    a.CommandController.instance.executeCommand(o.BasicController.COMMAND_LOGOUT);
  };
  return BackToMainServerButton;
}(l.APanelButton);
exports.BackToMainServerButton = c;
s.classImplementsInterfaces(c, "ICollectableRendererList");