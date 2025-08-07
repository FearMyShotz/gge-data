Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./6.js");
var a = function () {
  function CollectablesCosts(e) {
    this._collectables = e;
  }
  Object.defineProperty(CollectablesCosts.prototype, "costC1", {
    get: function () {
      return this.basicCostC1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectablesCosts.prototype, "costC2", {
    get: function () {
      return this.basicCostC2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectablesCosts.prototype, "basicCostC1", {
    get: function () {
      return this._collectables.getAmountOrDefaultByType(s.CollectableEnum.C1);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectablesCosts.prototype, "basicCostC2", {
    get: function () {
      return this._collectables.getAmountOrDefaultByType(s.CollectableEnum.C2);
    },
    enumerable: true,
    configurable: true
  });
  CollectablesCosts.prototype.getCost = function (e) {
    return o.int(this._collectables.getAmountOrDefaultByTypeVO(e));
  };
  CollectablesCosts.prototype.getCostTypes = function () {
    return this._collectables.getContainingTypes();
  };
  Object.defineProperty(CollectablesCosts.prototype, "collectables", {
    get: function () {
      return this._collectables;
    },
    enumerable: true,
    configurable: true
  });
  return CollectablesCosts;
}();
exports.CollectablesCosts = a;
var s = require("./12.js");
n.classImplementsInterfaces(a, "ICostVO");