Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getQualifiedClassName = function getQualifiedClassName(e) {
  if (e && e.constructor) {
    if (e.constructor.name === "Function") {
      if (e.__fname) {
        return e.__fname;
      }
      var t = e.toString();
      return t = t.substring(9, t.indexOf("("));
    }
    return e.constructor.__fname || e.constructor.name;
  }
  return e + "";
};