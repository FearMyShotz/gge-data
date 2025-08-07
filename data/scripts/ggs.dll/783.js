Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./12.js");
var s = require("./36.js");
var r = require("./8.js");
var o = require("./4.js");
var l = require("./2.js").getLogger("Connection.BasicChangeCountryCommand");
var u = function (e) {
  function BasicChangeCountryCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(BasicChangeCountryCommand, e);
  BasicChangeCountryCommand.prototype.execute = function (e) {
    if (e) {
      var t = window.ggs.worldAssignment;
      var n = o.BasicModel.instanceProxy;
      var i = t.facade.currentCountry;
      l.debug("currentInstance:  " + n.selectedInstanceVO.instanceId + " currentCountry.ggsCountryCode " + i.ggsCountryCode + "  --> newCountry.ggsCountryCode " + e.ggsCountryCode);
      if (i.ggsCountryCode !== e.ggsCountryCode) {
        this.env.customCDN = e.cdn;
        o.BasicModel.networkCookie.country = e.ggsCountryCode;
        if (this.env.accountCookie != null) {
          this.env.accountCookie.cdn = this.env.activeCDN;
        }
        var s = t.selectInstanceByCountry(e);
        l.info("based on country " + e.ggsCountryCode + " WorldAssignment found instance " + s.instanceId + " --> " + s.ip, s);
        a.CommandController.instance.executeCommand(r.BasicController.COMMAND_CONNECT_TO_INSTANCEVO, s);
        a.CommandController.instance.executeCommand(r.BasicController.COMMAND_CHANGE_LANGUAGE, e.ggsCountryCode);
      } else {
        l.warn("same country was selected.  ignoring command");
      }
    } else {
      l.warn("cant change country if no country is passed!");
    }
  };
  return BasicChangeCountryCommand;
}(s.BasicClientCommand);
exports.BasicChangeCountryCommand = u;