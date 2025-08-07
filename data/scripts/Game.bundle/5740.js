Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./1131.js");
var r = require("./15.js");
var l = require("./54.js");
var c = require("./5741.js");
var u = function (e) {
  function CastleLostAndFoundData() {
    var t = this;
    t._itemVOs = [];
    t._lastCount = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(CastleLostAndFoundData, e);
  CastleLostAndFoundData.prototype.reset = function () {
    this._itemVOs = [];
  };
  CastleLostAndFoundData.prototype.parse_LFE = function (e) {
    if (e) {
      this.reset();
      for (var t = 0; t < e.length; t++) {
        var i = new c.LostAndFoundListItemVO();
        i.parseData(e[t]);
        this._itemVOs.push(i);
      }
      this._itemVOs.sort(this.bindFunction(this.sortVOs));
      t = 0;
      for (; t < this._itemVOs.length; t++) {
        this._itemVOs[t].rank = t + 1;
      }
      this._lastCount = a.int(this._itemVOs.length);
      r.CastleBasicController.getInstance().dispatchEvent(new s.CastleLostAndFoundDataEvent(s.CastleLostAndFoundDataEvent.UPDATE_DATA));
    }
  };
  CastleLostAndFoundData.prototype.executeUpdate = function (e) {
    var t = this.getItemAmount();
    if (this._lastCount != t) {
      this._lastCount = t;
      r.CastleBasicController.getInstance().dispatchEvent(new s.CastleLostAndFoundDataEvent(s.CastleLostAndFoundDataEvent.UPDATE_DATA));
    }
  };
  CastleLostAndFoundData.prototype.sortVOs = function (e, t) {
    if (e.receivedTimeStamp != t.receivedTimeStamp) {
      return a.int(e.receivedTimeStamp - t.receivedTimeStamp);
    } else {
      return a.int(e.endTimeStamp - t.endTimeStamp);
    }
  };
  Object.defineProperty(CastleLostAndFoundData.prototype, "itemVOs", {
    get: function () {
      return this._itemVOs;
    },
    enumerable: true,
    configurable: true
  });
  CastleLostAndFoundData.prototype.getItemAmount = function () {
    var e = 0;
    if (this._itemVOs != null) {
      for (var t = 0, i = this._itemVOs; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.remainingTimeInSeconds > 0) {
          e++;
        }
      }
    }
    return e;
  };
  return CastleLostAndFoundData;
}(l.CastleBasicData);
exports.CastleLostAndFoundData = u;
o.classImplementsInterfaces(u, "IUpdatable", "ICastleBasicData");