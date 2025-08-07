Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = function (e) {
  function SkipForFreeEventVO() {
    var t = this;
    t._seconds = 0;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this)._seconds = -1;
    return t;
  }
  n.__extends(SkipForFreeEventVO, e);
  SkipForFreeEventVO.prototype.parseParamObject = function (e) {
    this._seconds = a.int(e.SEC);
  };
  SkipForFreeEventVO.prototype.calculateSkipCosts = function (e, t) {
    if (t <= this.seconds) {
      return 0;
    } else {
      return e;
    }
  };
  Object.defineProperty(SkipForFreeEventVO.prototype, "seconds", {
    get: function () {
      return this._seconds;
    },
    enumerable: true,
    configurable: true
  });
  return SkipForFreeEventVO;
}(require("./79.js").ASpecialEventVO);
exports.SkipForFreeEventVO = s;
o.classImplementsInterfaces(s, "IEventOverviewable");