Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleBookmarkPasserProperties(t, i = null, n = -1) {
    var o = this;
    o.messageID = 0;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this).bookmarkVO = t;
    o.checkButtonSubmitState = i;
    o.messageID = n;
    return o;
  }
  n.__extends(CastleBookmarkPasserProperties, e);
  return CastleBookmarkPasserProperties;
}(require("./2.js").BasicProperties);
exports.CastleBookmarkPasserProperties = o;