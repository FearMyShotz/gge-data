Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./81.js");
var s = require("./6.js");
var r = require("./5.js");
var o = require("./8.js");
var l = require("./84.js");
var u = require("./25.js");
var c = function (e) {
  function BasicDestroyGameCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(BasicDestroyGameCommand, e);
  BasicDestroyGameCommand.prototype.execute = function (e = null) {
    o.BasicController.getInstance().onDestroyGame();
    u.BasicLayoutManager.getInstance().clearAllLayoutContent();
    l.BasicDialogHandler.getInstance().destroy();
    if (!r.EnvGlobalsHandler.globals.useLegacyFontManagement) {
      a.GoodgameTextFieldManager.getInstance().unregisterAllTextFields();
    }
    this.destroyGameSpecificObjects();
  };
  BasicDestroyGameCommand.prototype.destroyGameSpecificObjects = function () {};
  return BasicDestroyGameCommand;
}(s.SimpleCommand);
exports.BasicDestroyGameCommand = c;