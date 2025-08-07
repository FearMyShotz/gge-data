Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./15.js");
var u = require("./1111.js");
var d = function (e) {
  function CastleOpenDiscordCommand() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(CastleOpenDiscordCommand, e);
  CastleOpenDiscordCommand.prototype.execute = function (e = null) {
    var t = new r.URLRequest(CastleOpenDiscordCommand.DISCORD_URL);
    a.BrowserUtil.executeNavigateToURL(t, "_blank");
    o.CommandController.instance.executeCommand(c.CastleBasicController.TRACK_SOCIAL_BUTTON, e || [u.SocialButtonTrackingEvent.BUTTON_NAME_DISCORD]);
  };
  CastleOpenDiscordCommand.DISCORD_URL = "https://www.discord.gg/goodgamestudios";
  return CastleOpenDiscordCommand;
}(s.SimpleCommand);
exports.CastleOpenDiscordCommand = d;
l.classImplementsInterfaces(d, "ISimpleCommand");