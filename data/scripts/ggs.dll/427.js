Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./26.js");
var s = require("./9.js");
var r = require("./68.js");
var o = require("./4.js");
var l = function (e) {
  function GFLCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(GFLCommand, e);
  Object.defineProperty(GFLCommand.prototype, "cmdId", {
    get: function () {
      return s.BasicSmartfoxConstants.S2C_GET_FORUM_LOGIN_DATA;
    },
    enumerable: true,
    configurable: true
  });
  GFLCommand.prototype.executeCommand = function (e, t) {
    return e == r.BasicErrorConstants.ALL_OK && (o.BasicModel.forumData.updateCryptedForumHash(String(t[1])), true);
  };
  return GFLCommand;
}(a.BasicCommand);
exports.GFLCommand = l;