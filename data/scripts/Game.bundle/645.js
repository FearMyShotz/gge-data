Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function AutoRecruitmentCosts() {
    this._costs = new o.CollectableList();
    this._loopFee = new s.CollectableItemC2VO(0);
    this._duplicatingCosts = new s.CollectableItemC2VO(0);
    this._priceType = c.AutoRecruitmentPriceEnum.SOLDIERS;
  }
  AutoRecruitmentCosts.prototype.fillByServerData = function (e) {
    this._costs = new o.CollectableList();
    if (e.CW) {
      this.costs.addItem(new l.CollectableItemWoodVO(e.CW));
    }
    if (e.CS) {
      this.costs.addItem(new r.CollectableItemStoneVO(e.CS));
    }
    if (e.C1) {
      this.costs.addItem(new a.CollectableItemC1VO(e.C1));
    }
    this._duplicatingCosts = new s.CollectableItemC2VO(e.DC);
  };
  Object.defineProperty(AutoRecruitmentCosts.prototype, "costs", {
    get: function () {
      return this._costs;
    },
    set: function (e) {
      this._costs = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentCosts.prototype, "duplicatingCosts", {
    get: function () {
      return this._duplicatingCosts;
    },
    set: function (e) {
      this._duplicatingCosts = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentCosts.prototype, "priceType", {
    get: function () {
      return this._priceType;
    },
    set: function (e) {
      this._priceType = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentCosts.prototype, "loopFee", {
    get: function () {
      return this._loopFee;
    },
    set: function (e) {
      this._loopFee = e;
    },
    enumerable: true,
    configurable: true
  });
  return AutoRecruitmentCosts;
}();
exports.AutoRecruitmentCosts = n;
var o = require("./48.js");
var a = require("./234.js");
var s = require("./128.js");
var r = require("./268.js");
var l = require("./269.js");
var c = require("./539.js");