Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1789.js");
var r = require("./15.js");
var l = function (e) {
  function SwitchSeasonMapCenterAndHighlightDungeonsCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(SwitchSeasonMapCenterAndHighlightDungeonsCommand, e);
  SwitchSeasonMapCenterAndHighlightDungeonsCommand.prototype.execute = function (e = null) {
    if (e) {
      r.CastleBasicController.getInstance().dispatchEvent(new s.CastleQuestConditionEvent(s.CastleQuestConditionEvent.HIGHLIGHT_ON_MAP, e));
    }
  };
  return SwitchSeasonMapCenterAndHighlightDungeonsCommand;
}(o.SimpleCommand);
exports.SwitchSeasonMapCenterAndHighlightDungeonsCommand = l;
a.classImplementsInterfaces(l, "ISimpleCommand");