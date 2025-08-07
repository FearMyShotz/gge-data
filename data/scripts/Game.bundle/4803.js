Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./4.js");
var l = require("./10.js");
var c = function (e) {
  function GIICommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GIICommand, e);
  Object.defineProperty(GIICommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_GET_CONSTRUCTION_ITEMS_INVENTORY;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  GIICommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        r.CastleModel.constructionItemData.updateInventory(i);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return GIICommand;
}(l.CastleCommand);
exports.GIICommand = c;
o.classImplementsInterfaces(c, "IExecCommand");