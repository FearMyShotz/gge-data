Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function AIsoCommandModel(t) {
    var i = e.call(this) || this;
    i._isoData = t;
    return i;
  }
  n.__extends(AIsoCommandModel, e);
  Object.defineProperty(AIsoCommandModel.prototype, "isoData", {
    get: function () {
      return this._isoData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoCommandModel.prototype, "grid", {
    get: function () {
      return this._isoData.grid;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoCommandModel.prototype, "areaData", {
    get: function () {
      return this._isoData.areaData;
    },
    enumerable: true,
    configurable: true
  });
  return AIsoCommandModel;
}(require("./1181.js").AIsoCommand);
exports.AIsoCommandModel = a;
o.classImplementsInterfaces(a, "ICollectableRendererList");