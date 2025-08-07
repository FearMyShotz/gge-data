Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./4.js");
var s = function (e) {
  function GenericEventInfoListProperties(t, i = 0) {
    var n = this;
    n._eventID = 0;
    n._tabID = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this)._eventID = t;
    n._tabID = i;
    return n;
  }
  n.__extends(GenericEventInfoListProperties, e);
  Object.defineProperty(GenericEventInfoListProperties.prototype, "eventID", {
    get: function () {
      return this._eventID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GenericEventInfoListProperties.prototype, "tabID", {
    get: function () {
      return this._tabID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GenericEventInfoListProperties.prototype, "eventVO", {
    get: function () {
      return a.CastleModel.specialEventData.getActiveEventByEventId(this.eventID);
    },
    enumerable: true,
    configurable: true
  });
  return GenericEventInfoListProperties;
}(o.BasicProperties);
exports.GenericEventInfoListProperties = s;