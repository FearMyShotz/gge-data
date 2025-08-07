Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleTutorialArrowController(e) {
    this.arrows = [];
    if (e == null) {
      throw new Error("do not instantiate, use instance getter");
    }
  }
  Object.defineProperty(CastleTutorialArrowController, "instance", {
    get: function () {
      CastleTutorialArrowController._instance ||= new CastleTutorialArrowController(new a());
      return CastleTutorialArrowController._instance;
    },
    enumerable: true,
    configurable: true
  });
  CastleTutorialArrowController.prototype.replace = function (e, t = true, i = false, n = 1, o = undefined) {
    if (!e) {
      throw new ReferenceError("target must not be null!");
    }
    this.clear();
    this.add(e, t, i, n, o);
  };
  CastleTutorialArrowController.prototype.add = function (e, t = true, i = false, n = 1, a = undefined) {
    if (!e) {
      throw new ReferenceError("target must not be null!");
    }
    var s = new o.CastleTutorialArrow(e);
    this.arrows.push(s);
    if (i) {
      s.flip();
    }
    if (t) {
      s.mirror();
    }
    s.scale = n;
    s.offset = a;
    s.display();
  };
  CastleTutorialArrowController.prototype.remove = function (e) {
    if (this.arrows[e]) {
      this.arrows[e].destroy();
      this.arrows.splice(e, 1);
    }
  };
  CastleTutorialArrowController.prototype.clear = function () {
    if (this.arrows != null) {
      for (var e = 0, t = this.arrows; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.destroy();
        }
      }
    }
    this.arrows = [];
  };
  return CastleTutorialArrowController;
}();
exports.CastleTutorialArrowController = n;
var o = require("./2361.js");
var a = function () {
  return function SingletonBlocker() {};
}();
exports.SingletonBlocker = a;