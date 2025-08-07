Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./5.js");
var s = require("./8.js");
var r = require("./175.js");
var o = require("./4.js");
var l = require("./371.js");
var u = require("./6.js");
var c = require("./2.js").getLogger("BasicIdentityManagementCommand");
var _ = function (e) {
  function BasicIdentityManagementCommand(t = false) {
    return e.call(this, t) || this;
  }
  i.__extends(BasicIdentityManagementCommand, e);
  BasicIdentityManagementCommand.prototype.execute = function (e = null) {
    var t = e;
    a.EnvGlobalsHandler.globals.isIdentityManagementActive = t;
    c.debug("[BasicIdentityManagementCommand] execute() -> isIdentityManagementActive: " + t);
    if (t) {
      if (!o.BasicModel.identityManagement) {
        o.BasicModel.identityManagement = new l.BasicIdentityManagementData();
        o.BasicModel.identityManagement.initialize();
      }
      s.BasicController.getInstance().dispatchEvent(new r.IdentityManagementEvent(r.IdentityManagementEvent.ID_MANAGEMENT_ACTIVE));
    } else {
      if (o.BasicModel.identityManagement) {
        o.BasicModel.identityManagement.dispose();
        o.BasicModel.identityManagement = null;
      }
      s.BasicController.getInstance().dispatchEvent(new r.IdentityManagementEvent(r.IdentityManagementEvent.ID_MANAGEMENT_INCTIVE));
    }
  };
  BasicIdentityManagementCommand.NAME = "BasicIdentityManagementCommand";
  return BasicIdentityManagementCommand;
}(u.SimpleCommand);
exports.BasicIdentityManagementCommand = _;