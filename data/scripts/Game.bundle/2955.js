Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function AutoRecruitmentCopySublayerProperties(t, i, n) {
    var o = this;
    o._listId = 0;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this)._listId = t;
    o._loopFeeCosts = i;
    o._listComponent = n;
    return o;
  }
  n.__extends(AutoRecruitmentCopySublayerProperties, e);
  Object.defineProperty(AutoRecruitmentCopySublayerProperties.prototype, "listId", {
    get: function () {
      return this._listId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentCopySublayerProperties.prototype, "loopFeeCosts", {
    get: function () {
      return this._loopFeeCosts;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentCopySublayerProperties.prototype, "listComponent", {
    get: function () {
      return this._listComponent;
    },
    enumerable: true,
    configurable: true
  });
  return AutoRecruitmentCopySublayerProperties;
}(require("./2.js").BasicProperties);
exports.AutoRecruitmentCopySublayerProperties = o;