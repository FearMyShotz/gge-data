Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = function (e) {
  function CastleInitServerListCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleInitServerListCommand, e);
  CastleInitServerListCommand.prototype.initAdditionalServer = function () {};
  CastleInitServerListCommand.prototype.createInstanceVO_EM = function (e, t, i, n, o, s = 4) {
    var r = new a.TestInstanceVO();
    r.ip = e;
    r.port = t;
    r.zone = i;
    r.zoneId = s;
    r.instanceId = n;
    r.instanceLocaId = o;
    return r;
  };
  return CastleInitServerListCommand;
}(o.BasicClientCommand);
exports.CastleInitServerListCommand = r;
s.classImplementsInterfaces(r, "ISimpleCommand");