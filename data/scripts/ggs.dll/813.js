Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./25.js");
var s = require("./40.js");
var r = require("./454.js");
var o = function (e) {
  function BasicShowRegisterDialogCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(BasicShowRegisterDialogCommand, e);
  BasicShowRegisterDialogCommand.prototype.execute = function (e = null) {
    this.layoutManager.showDialog(s.CommonDialogNames.RegisterDialog_NAME, new r.BasicRegisterDialogProperties());
  };
  Object.defineProperty(BasicShowRegisterDialogCommand.prototype, "layoutManager", {
    get: function () {
      return a.BasicLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return BasicShowRegisterDialogCommand;
}(require("./6.js").SimpleCommand);
exports.BasicShowRegisterDialogCommand = o;