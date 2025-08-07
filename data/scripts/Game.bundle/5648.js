Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./6.js");
var r = require("./84.js");
var l = require("./54.js");
var c = require("./540.js");
var u = function (e) {
  function AutoRecruitmentPriceData(t) {
    var i = e.call(this) || this;
    i._priceDic = new Map();
    i._priceDicByType = new Map();
    i._maxLoopsByType = new Map();
    i.parse(t);
    return i;
  }
  n.__extends(AutoRecruitmentPriceData, e);
  AutoRecruitmentPriceData.prototype.parse = function (e) {
    this._priceDic = new Map();
    this._priceDicByType = new Map();
    for (var t = 0, i = r.CastleEnum.getEnumListByClass(c.AutoRecruitmentPriceEnum); t < i.length; t++) {
      var n = i[t];
      this._priceDicByType.set(n, new Map());
    }
    this._maxLoopsByType = new Map();
    var a = e.autoRecruitmentPrices;
    if (a != null) {
      if (a != null) {
        for (var s = 0, l = a; s < l.length; s++) {
          var u = l[s];
          var d = new p.AutoRecruitmentPriceVO();
          d.fillByXmlNode(u);
          this._priceDic.set(d.id, d);
          this._priceDicByType.get(d.priceType)[d.loop] = d;
          if (!o.DictionaryUtil.containsKey(this._maxLoopsByType, d.priceType)) {
            this._maxLoopsByType.set(d.priceType, 0);
          }
          this._maxLoopsByType.set(d.priceType, this._maxLoopsByType.get(d.priceType) + 1);
        }
      }
    }
  };
  AutoRecruitmentPriceData.prototype.getPriceVO = function (e, t) {
    return this._priceDicByType.get(e)[t];
  };
  AutoRecruitmentPriceData.prototype.getPriceVOById = function (e) {
    return this._priceDic.get(e);
  };
  AutoRecruitmentPriceData.prototype.getMaxLoopsByType = function (e) {
    return s.int(this._maxLoopsByType.get(e));
  };
  AutoRecruitmentPriceData.prototype.getCosts = function (e, t, i) {
    var n = new d.CollectableItemC2VO(0);
    for (var o = t; o <= i; ++o) {
      var a = this.getPriceVO(e, o);
      if (a) {
        var s = a.costs;
        if (s) {
          n.amount += s.amount;
        }
      }
    }
    return n;
  };
  return AutoRecruitmentPriceData;
}(l.CastleBasicData);
exports.AutoRecruitmentPriceData = u;
var d = require("./128.js");
var p = require("./5649.js");
a.classImplementsInterfaces(u, "IUpdatable");