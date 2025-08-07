Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./28.js");
var r = function (e) {
  function CastleGallaryDialogProperties(t, i) {
    var n = this;
    n._endTimeStamp = 0;
    n._boost = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this)._endTimeStamp = a.int(t);
    n._boost = a.int(i);
    return n;
  }
  n.__extends(CastleGallaryDialogProperties, e);
  Object.defineProperty(CastleGallaryDialogProperties.prototype, "endTimeStamp", {
    get: function () {
      return this._endTimeStamp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGallaryDialogProperties.prototype, "boost", {
    get: function () {
      return this._boost;
    },
    enumerable: true,
    configurable: true
  });
  CastleGallaryDialogProperties.prototype.remainingDuration = function (e) {
    return a.int((this.endTimeStamp - e) * s.ClientConstTime.MILLISEC_2_SEC);
  };
  return CastleGallaryDialogProperties;
}(o.BasicProperties);
exports.CastleGallaryDialogProperties = r;