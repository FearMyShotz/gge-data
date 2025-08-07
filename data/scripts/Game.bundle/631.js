Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function AIsoGeneratorDefenceComponent() {}
  AIsoGeneratorDefenceComponent.prototype.init = function (e) {
    this._parentGenerator = e;
  };
  AIsoGeneratorDefenceComponent.prototype.execute = function () {};
  AIsoGeneratorDefenceComponent.prototype.cleanup = function () {};
  AIsoGeneratorDefenceComponent.prototype.isCollidingWithAnyOtherPosition = function (e, t) {
    if (e != null) {
      for (var i = 0, n = e; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o.collidesWith(t)) {
          return true;
        }
      }
    }
    return false;
  };
  AIsoGeneratorDefenceComponent.prototype.addPosToListOrCreateOne = function (e, t) {
    var i = e;
    if (t) {
      i ||= [];
      i.push(t);
    }
    return i;
  };
  Object.defineProperty(AIsoGeneratorDefenceComponent.prototype, "parentGenerator", {
    get: function () {
      return this._parentGenerator;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoGeneratorDefenceComponent.prototype, "result", {
    get: function () {
      return this.parentGenerator.result;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoGeneratorDefenceComponent.prototype, "map", {
    get: function () {
      return this.parentGenerator.grid.map;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoGeneratorDefenceComponent.prototype, "grounds", {
    get: function () {
      return this.parentGenerator.grounds;
    },
    enumerable: true,
    configurable: true
  });
  return AIsoGeneratorDefenceComponent;
}();
exports.AIsoGeneratorDefenceComponent = n;