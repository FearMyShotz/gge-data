Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = function (e) {
  function CastleSlimModel() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleSlimModel, e);
  Object.defineProperty(CastleSlimModel, "networkCookie", {
    set: function (e) {
      o.BasicModel._networkCookie = e;
    },
    enumerable: true,
    configurable: true
  });
  return CastleSlimModel;
}(o.BasicModel);
exports.CastleSlimModel = a;