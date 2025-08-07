Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./72.js");
var a = require("./5774.js");
var s = require("./30.js");
var r = require("./28.js");
var l = require("./37.js");
var c = require("./15.js");
var u = function (e) {
  function ChangePlayerNameData(t) {
    var i = e.call(this) || this;
    i._currentNumNameChange = 0;
    i._resetNameChangeCooldownTimestamp = 0;
    i.parseXml(t);
    return i;
  }
  n.__extends(ChangePlayerNameData, e);
  ChangePlayerNameData.prototype.parseXml = function (e) {
    this._c2Costs = [];
    var t = e.playerNameChanges;
    if (t != null) {
      var i = undefined;
      for (var n = 0, o = t; n < o.length; n++) {
        var s = o[n];
        if (s !== undefined) {
          (i = new a.ChangePlayerNameVO()).nameChangeID = parseInt(s.nameChangeID || "");
          i.costC2 = parseInt(s.costC2 || "");
          this._c2Costs.push(i);
        }
      }
    }
  };
  ChangePlayerNameData.prototype.parse_GNCI = function (e) {
    this._currentNumNameChange = parseInt(e.PNCC) + 1;
    this._currentNumNameChange = Math.min(this._currentNumNameChange, this._c2Costs[this._c2Costs.length - 1].nameChangeID);
    this._resetNameChangeCooldownTimestamp = e.PNCD;
    c.CastleBasicController.getInstance().dispatchEvent(new l.CastleServerMessageArrivedEvent(l.CastleServerMessageArrivedEvent.GNCI_ARRIVED, [this.getCurrentC2Cost, this.resetNameChangeCooldownTimestamp]));
  };
  Object.defineProperty(ChangePlayerNameData.prototype, "getCurrentC2Cost", {
    get: function () {
      var e = this;
      var t = this._c2Costs.find(function (t) {
        return t.nameChangeID === e._currentNumNameChange;
      });
      if (t) {
        return t.costC2;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ChangePlayerNameData.prototype, "resetNameChangeCooldownTimestamp", {
    get: function () {
      return this._resetNameChangeCooldownTimestamp - s.CachedTimer.getCachedTimer() * r.ClientConstTime.MILLISEC_2_SEC;
    },
    enumerable: true,
    configurable: true
  });
  return ChangePlayerNameData;
}(o.CastleEventDispatcher);
exports.ChangePlayerNameData = u;