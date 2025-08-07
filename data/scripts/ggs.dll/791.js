Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./6.js");
var s = require("./8.js");
var r = require("./9.js");
var o = require("./181.js");
var l = require("./425.js");
var u = require("./426.js");
var c = require("./427.js");
var _ = require("./428.js");
var d = require("./430.js");
var m = require("./431.js");
var h = require("./432.js");
var p = require("./433.js");
var g = require("./434.js");
var E = require("./436.js");
var C = require("./437.js");
var f = require("./438.js");
var T = require("./443.js");
var S = require("./445.js");
var y = require("./446.js");
var I = require("./30.js");
var v = function (e) {
  function BasicInitServerCommands() {
    var t = e !== null && e.apply(this, arguments) || this;
    t.commandDict = s.BasicController.commandDict;
    return t;
  }
  i.__extends(BasicInitServerCommands, e);
  BasicInitServerCommands.prototype.execute = function (e = null) {
    I.debug("BasicInitServerCommands");
    var t = s.BasicController.commandDict;
    t.set(r.BasicSmartfoxConstants.S2C_CASH_HASH, new u.GCHCommand());
    t.set(r.BasicSmartfoxConstants.S2C_NEW_CASH_HASH, new h.NCHCommand());
    t.set(r.BasicSmartfoxConstants.S2C_GET_FORUM_LOGIN_DATA, new c.GFLCommand());
    t.set(r.BasicSmartfoxConstants.S2C_SERVER_MESSAGE, new E.SMSCommand());
    t.set(r.BasicSmartfoxConstants.S2C_COMA_TEASER, new o.CMTCommand());
    t.set(r.BasicSmartfoxConstants.S2C_SERVER_INFO_EVENT, new p.NFOCommand());
    t.set(r.BasicSmartfoxConstants.S2C_VERIFY_PLAYER_MAIL_EVENT, new S.VPMCommand());
    t.set(r.BasicSmartfoxConstants.S2C_LOST_PASSWORD_EVENT, new m.LPPCommand());
    t.set(r.BasicSmartfoxConstants.S2C_CHILD_PROTECTION_AUTO_SHUTDOWN_EVENT, new l.CPSCommand());
    t.set(r.BasicSmartfoxConstants.S2C_SOCIAL_PLAYER_EXISTS, new C.SPECommand());
    t.set(r.BasicSmartfoxConstants.S2C_NEW_LOGIN_SOCIAL, new f.SPLCommand());
    t.set(r.BasicSmartfoxConstants.S2C_TEST_CASE_INFO, new T.TCICommand());
    t.set(r.BasicSmartfoxConstants.S2C_GET_PLAYER_INFO, new d.GPICommand());
    t.set(r.BasicSmartfoxConstants.S2C_GENERATE_INVITE_CODE, new _.GICCommand());
    t.set(r.BasicSmartfoxConstants.S2C_SET_INVITE_CODE, new g.SICCommand());
    t.set(r.BasicSmartfoxConstants.S2C_VERSION_CHECK, new y.VCKCommand());
  };
  return BasicInitServerCommands;
}(a.SimpleCommand);
exports.BasicInitServerCommands = v;