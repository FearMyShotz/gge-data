Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./26.js");
var s = require("./8.js");
var r = require("./9.js");
var o = require("./4.js");
var l = require("./12.js");
var u = require("./18.js");
var c = require("./35.js");
var _ = function (e) {
  function CMTCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(CMTCommand, e);
  Object.defineProperty(CMTCommand.prototype, "cmdId", {
    get: function () {
      return r.BasicSmartfoxConstants.S2C_COMA_TEASER;
    },
    enumerable: true,
    configurable: true
  });
  CMTCommand.prototype.executeCommand = function (t, n) {
    if (t == 0) {
      for (var i = 0, a = JSON.parse(n[1]); i < a.length; i++) {
        var r = a[i];
        var _ = r.type;
        var d = r.tid;
        if (CMTCommand.TEASER_TYPE_TEXT_ID[_] != null) {
          var m = u.Localize.text(CMTCommand.TEASER_TYPE_TEXT_ID[_], [o.BasicModel.userData.userName]);
          var h = u.Localize.text("cm_teaser" + d + "_copy", [u.Localize.text("gametitle")]);
          l.CommandController.instance.executeCommand(s.BasicController.COMMAND_SHOW_COMA_TEASER, [_, d, m, h]);
        } else {
          c.warn("CMTCommand - unknown teaser type: " + _);
        }
      }
    }
    return e.prototype.executeCommand.call(this, t, n);
  };
  CMTCommand.TEASERTYPE_EVENT = 0;
  CMTCommand.TEASERTYPE_INFO = 1;
  CMTCommand.TEASERTYPE_WARNING = 2;
  CMTCommand.TEASER_TYPE_TEXT_ID = ["cm_teaserevent_title", "cm_teaserinfo_title", "cm_teaserwarning_title"];
  return CMTCommand;
}(a.BasicCommand);
exports.CMTCommand = _;