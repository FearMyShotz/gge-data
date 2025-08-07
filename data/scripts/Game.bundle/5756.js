Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./53.js");
var s = require("./54.js");
var r = require("./5757.js");
var l = function (e) {
  function LandmarkData(t) {
    var i = e.call(this) || this;
    i._landmarks = new Map();
    i.parseXML(t);
    return i;
  }
  n.__extends(LandmarkData, e);
  LandmarkData.prototype.parseXML = function (e) {
    for (var t = 0, i = e.landmarks; t < i.length; t++) {
      var n = i[t];
      if (n !== undefined) {
        var o = new r.LandmarkVO();
        o.parseXML(n);
        this._landmarks.set(o.landmarkID, o);
        if (o.isDefault) {
          this._defaultLandmark = o;
        }
      }
    }
  };
  Object.defineProperty(LandmarkData.prototype, "defaultLandmark", {
    get: function () {
      return this._defaultLandmark;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LandmarkData.prototype, "capitalLandmark", {
    get: function () {
      if (a.ABGHelper.isOnABGServer) {
        return this._landmarks.get(a.ABGHelper.abgEvent.settingVO.capitalLandmarkID);
      } else {
        return this._defaultLandmark;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LandmarkData.prototype, "metroLandmark", {
    get: function () {
      if (a.ABGHelper.isOnABGServer) {
        return this._landmarks.get(a.ABGHelper.abgEvent.settingVO.capitalLandmarkID);
      } else {
        return this._defaultLandmark;
      }
    },
    enumerable: true,
    configurable: true
  });
  return LandmarkData;
}(s.CastleBasicData);
exports.LandmarkData = l;
o.classImplementsInterfaces(l, "IUpdatable", "ICastleBasicData");