Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function TypeUtil() {}
  TypeUtil.isArrayLike = function (e) {
    if (!e) {
      return false;
    }
    if (e instanceof Array) {
      return true;
    }
    for (var t = 0, n = TypeUtil.IS_ARRAY_MEMEBRS.length; t < n; t++) {
      if (!(TypeUtil.IS_ARRAY_MEMEBRS[t] in e)) {
        return false;
      }
    }
    return true;
  };
  TypeUtil.isSimpleObject = function (e) {
    return e instanceof Object && Object(e).constructor === Object;
  };
  TypeUtil.isSameType = function (e, t) {
    return Object(e).constructor == Object(t).constructor;
  };
  TypeUtil.isPrimitiveType = function (e) {
    return e == Number || e == Number || e == Number || e == String || e == Boolean;
  };
  TypeUtil.isPrimitive = function (e) {
    return e == undefined || e == null || e instanceof Number || e instanceof Number || e instanceof Number || e instanceof String || e instanceof Boolean;
  };
  TypeUtil.isImmutableType = function (e) {
    return e == Number || e == Number || e == Number || e == String || e == Boolean || e == Function || e == Object;
  };
  TypeUtil.isImmutable = function (e) {
    return e == undefined || e == null || e instanceof Number || e instanceof Number || e instanceof Number || e instanceof String || e instanceof Boolean || e instanceof Function || e instanceof Object;
  };
  TypeUtil.getSimilarTo = function (e) {
    if (e && e instanceof Object) {
      try {
        return new (Object(e).constructor)();
      } catch (e) {}
    }
    return e;
  };
  TypeUtil.clone = function (e) {
    if (TypeUtil.isImmutable(e)) {
      return e;
    }
    if ("clone" in e && e.clone instanceof Function) {
      try {
        return e.clone();
      } catch (e) {}
    }
    if (TypeUtil.isArrayLike(e)) {
      return e.slice();
    }
    if (e instanceof Date) {
      var t = new Date();
      t.setTime(e.getTime());
      return t;
    }
    if (e instanceof Object) {
      var n = TypeUtil.getSimilarTo(e);
      for (var i in e) {
        n[i] = TypeUtil.clone(e[i]);
      }
      return n;
    }
    throw new Error("Clonning of " + String(e) + "is not supported.");
  };
  TypeUtil.IS_ARRAY_VECTOR = /__AS3__.vec::Vector.<[\w\.:]+>/;
  TypeUtil.IS_ARRAY_MEMEBRS = ["length", "concat", "push", "pop", "shift", "unshift", "indexOf", "lastIndexOf", "reverse", "slice", "splice"];
  return TypeUtil;
}();
exports.TypeUtil = i;