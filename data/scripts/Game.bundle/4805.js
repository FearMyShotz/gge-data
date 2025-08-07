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
  function NECCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(NECCommand, e);
  Object.defineProperty(NECCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_GET_NEXT_EXPIRING_CONSTRUCTION_ITEM_EVENT;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  NECCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        r.CastleModel.constructionItemData.parse_NEC(i);
        if (i.CI && r.CastleModel.areaData.activeArea) {
          r.CastleModel.areaData.activeArea.updater.parseConstructionItems(i.CI);
        }
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return NECCommand;
}(l.CastleCommand);
exports.NECCommand = c;
o.classImplementsInterfaces(c, "IExecCommand");