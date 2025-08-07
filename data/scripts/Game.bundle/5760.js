Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./37.js");
var r = require("./54.js");
var l = require("./4.js");
var c = require("./5761.js");
var u = function (e) {
  function CastleFortuneTellerData(t) {
    var i = e.call(this) || this;
    i._fortuneTellerClassVOs = new Map();
    i.parseXML(t);
    return i;
  }
  n.__extends(CastleFortuneTellerData, e);
  CastleFortuneTellerData.prototype.parseXML = function (e) {
    for (var t = 0, i = e.fortuneTellerClasses; t < i.length; t++) {
      var n = i[t];
      if (n !== undefined) {
        var o = new c.FortuneTellerClassVO();
        o.parseXML(n);
        this._fortuneTellerClassVOs.set(o.id, o);
      }
    }
  };
  Object.defineProperty(CastleFortuneTellerData.prototype, "maxTriesPerDay", {
    get: function () {
      return o.DictionaryUtil.getDictionaryLength(this._fortuneTellerClassVOs);
    },
    enumerable: true,
    configurable: true
  });
  CastleFortuneTellerData.prototype.getFortuneTellerClassByCount = function (e) {
    return this._fortuneTellerClassVOs.get(e);
  };
  CastleFortuneTellerData.prototype.parseFTL = function (e) {
    if (e && e.RIDS) {
      var t = l.CastleModel.rewardData.getCopiedListById(e.RIDS[0]);
      this.dispatchEvent(new s.CastleServerMessageArrivedEvent(s.CastleServerMessageArrivedEvent.FORTUNE_TELLER_REWARD_ARRIVED, [t]));
    }
  };
  return CastleFortuneTellerData;
}(r.CastleBasicData);
exports.CastleFortuneTellerData = u;
a.classImplementsInterfaces(u, "IUpdatable", "ICastleBasicData");