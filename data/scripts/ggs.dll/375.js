Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./176.js");
var s = require("./5.js");
var r = require("./11.js");
var o = require("./8.js");
var l = require("./43.js");
var u = require("./4.js");
var c = require("./12.js");
var _ = require("./6.js");
var d = require("./78.js");
var m = require("./56.js");
var h = require("./38.js");
var p = function (e) {
  function BasicReloadNetworkCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(BasicReloadNetworkCommand, e);
  BasicReloadNetworkCommand.prototype.execute = function (e = null) {
    this.reloadNetworkXML();
    this.reloadInstances();
  };
  BasicReloadNetworkCommand.prototype.reloadNetworkXML = function () {
    m.ClientFunnelTrackingController.getInstance().trackState(h.ClientFunnelGameStates.NETWORK_XML_START);
    u.BasicModel.basicLoaderData.appLoader.addXMLLoader(r.BasicConstants.NETWORK_INFO_LOADER, l.PathProvider.instance.networkConfigURL, "", this.onReloadNetworkXML, true);
  };
  BasicReloadNetworkCommand.prototype.onReloadNetworkXML = function () {
    m.ClientFunnelTrackingController.getInstance().trackState(h.ClientFunnelGameStates.NETWORK_XML_END);
    var e = u.BasicModel.basicLoaderData.appLoader.getLoaderData(r.BasicConstants.NETWORK_INFO_LOADER);
    this.env.defaultInstanceId = parseInt(e.general.defaultinstance.text());
    this.env.allowedfullscreen = e.general.allowedfullscreen == "true";
    this.env.networknameString = e.general.networkname.text();
    this.env.loginIsKeyBased = e.general.usekeybaselogin == "true";
    this.env.hasNetworkBuddies = e.general.networkbuddies == "true";
    this.env.enableFeedMessages = e.general.enablefeedmessages == "true";
    this.env.enableLonelyCow = e.general.enablelonelycow == "true";
    this.env.requestPayByJS = e.general.requestpaybyjs == "true";
    this.env.networkNewsByJS = e.general.networknewsbyjs == "true";
    this.env.earnCredits = parseInt(e.general.earncredits);
    this.env.useexternallinks = e.general.useexternallinks == "true";
    this.env.invitefriends = e.general.invitefriends == "true";
    this.env.maxUsernameLength = parseInt(e.general.maxusernamelength.text());
    this.env.usePayment = e.general.usepayment == "true";
    this.env.showVersion = e.general.showversion == "true";
    delete e.instance[0];
    c.CommandController.instance.executeCommand(o.BasicController.COMMAND_UPDATE_NETWORK, a.BasicNetworkUpdateCommand);
  };
  BasicReloadNetworkCommand.prototype.reloadInstances = function () {};
  Object.defineProperty(BasicReloadNetworkCommand.prototype, "env", {
    get: function () {
      return s.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  i.__decorate([d.commentedOut("HTML-2006", "TODO HTML5  trying to remove all worldassignemnt stuff when / why are we reloading instances"), i.__metadata("design:type", Function), i.__metadata("design:paramtypes", []), i.__metadata("design:returntype", undefined)], BasicReloadNetworkCommand.prototype, "reloadInstances", null);
  return BasicReloadNetworkCommand;
}(_.SimpleCommand);
exports.BasicReloadNetworkCommand = p;