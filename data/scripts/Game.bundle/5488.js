Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetInstanceLink(t, i) {
    var n = this;
    n.WID = 0;
    n.ZID = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).ZID = t;
    n.WID = i;
    return n;
  }
  n.__extends(C2SGetInstanceLink, e);
  C2SGetInstanceLink.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_INSTANCE_LINK;
  };
  return C2SGetInstanceLink;
}(o.BasicCommandVO);
exports.C2SGetInstanceLink = s;