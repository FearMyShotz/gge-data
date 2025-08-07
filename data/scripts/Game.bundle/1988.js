Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function ClassHierarchyUtil() {}
  ClassHierarchyUtil.inheritsFrom = function (e, t, i = false, n = false) {
    if (t.prototype.isPrototypeOf(e.prototype)) {
      return true;
    }
    if (i) {
      if (n) {
        throw new Error(o.getQualifiedClassName(e) + " does not inherit from " + o.getQualifiedClassName(t));
      }
      return false;
    }
    if (t.prototype === e.prototype) {
      return true;
    }
    if (n) {
      throw new Error(o.getQualifiedClassName(e) + " does not inherit from " + o.getQualifiedClassName(t));
    }
    return false;
  };
  return ClassHierarchyUtil;
}();
exports.ClassHierarchyUtil = n;
var o = require("./1.js");