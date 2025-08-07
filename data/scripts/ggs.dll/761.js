Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./762.js");
var a = function () {
  function BasicEnum(e, t) {
    if (t != BasicEnum.instantiationKey) {
      this.throwInstantiationError();
    }
    this._name = e;
    var n = this.constructor;
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
  BasicEnum.getByProperty = function (e, t, n, a) {
    var s = BasicEnum._basicValues.get(e);
    return i(s, [t, n]) || a;
  };
  BasicEnum.prototype.toString = function () {
    return this.getClassName() + "." + this._name;
  };
  BasicEnum.prototype.getClassName = function () {
    return this.getQualifiedClassName(this).match("[^:]*$")[0];
  };
  BasicEnum.prototype.throwInstantiationError = function () {
    throw new Error("Only instantiate " + this.getClassName() + " within itself!");
  };
  BasicEnum.prototype.getQualifiedClassName = function (e) {
    return e.constructor.name + "";
  };
  BasicEnum._basicValues = new Map();
  BasicEnum.instantiationKey = Math.random();
  return BasicEnum;
}();
exports.BasicEnum = a;