Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = function (e) {
  function CastleMysteryBoxResultDialogProperties(t, i = 0, n = false) {
    var o = this;
    o._skinId = 0;
    o.isTest = false;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this).rewardList = t;
    o._skinId = i;
    o.isTest = n;
    return o;
  }
  n.__extends(CastleMysteryBoxResultDialogProperties, e);
  Object.defineProperty(CastleMysteryBoxResultDialogProperties.prototype, "skinId", {
    get: function () {
      return this._skinId;
    },
    enumerable: true,
    configurable: true
  });
  return CastleMysteryBoxResultDialogProperties;
}(o.BasicProperties);
exports.CastleMysteryBoxResultDialogProperties = s;
a.classImplementsInterfaces(s, "ISkinnable");