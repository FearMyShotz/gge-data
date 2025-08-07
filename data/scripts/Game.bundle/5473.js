Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleForumAdvertisementDialogProperties(t) {
    var i = e.call(this) || this;
    i._messageVO = t;
    return i;
  }
  n.__extends(CastleForumAdvertisementDialogProperties, e);
  Object.defineProperty(CastleForumAdvertisementDialogProperties.prototype, "messageVO", {
    get: function () {
      return this._messageVO;
    },
    enumerable: true,
    configurable: true
  });
  return CastleForumAdvertisementDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleForumAdvertisementDialogProperties = o;