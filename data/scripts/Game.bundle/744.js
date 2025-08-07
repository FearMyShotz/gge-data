Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./18.js");
var r = function (e) {
  function CastleHighscoreDialogProperties(t, i = a.int(s.ClientConstCastle.CATEGORY_HONOR)) {
    var n = this;
    n.startCategory = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).startTimeSpan = t;
    n.startCategory = i;
    return n;
  }
  n.__extends(CastleHighscoreDialogProperties, e);
  return CastleHighscoreDialogProperties;
}(o.BasicProperties);
exports.CastleHighscoreDialogProperties = r;