Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./44.js");
var a = require("./3.js");
var s = Math.random();
var r = function () {
  function BasicEnum(e, t) {
    if (t !== BasicEnum.instantiationKey) {
      this.throwInstantiationError();
    }
    this._name = e;
    var n = Object(this).constructor;
    if (BasicEnum._basicValues.get(n) == null) {
      BasicEnum._basicValues.set(n, []);
    }
    BasicEnum._basicValues.get(n).push(this);
  }
  Object.defineProperty(BasicEnum.prototype, "name", {
    get: function () {
      return this._name;
    },
    enumerable: true,
    configurable: true
  });
  BasicEnum.getByProperty = function (e, t, n, i) {
    var a = i;
    var s = BasicEnum._basicValues.get(e);
    if (s != null) {
      for (var r = 0, o = s; r < o.length; r++) {
        var l = o[r];
        if (l[t] === n) {
          a = l;
          break;
        }
      }
    }
    return a;
  };
  BasicEnum.prototype.toString = function () {
    return this.getClassName() + "." + this._name;
  };
  BasicEnum.prototype.getClassName = function () {
    return a.getQualifiedClassName(this);
  };
  BasicEnum.prototype.throwInstantiationError = function () {
    i.error("Only instantiate " + this.getClassName() + " within itself!");
  };
  BasicEnum._basicValues = new Map();
  BasicEnum.instantiationKey = s;
  return BasicEnum;
}();
exports.BasicEnum = r;
exports.instantiationKey = s;