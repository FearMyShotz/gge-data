Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.instanceOfClass = function instanceOfClass(e, t) {
  if (typeof e === t.toLowerCase()) {
    return true;
  }
  if (e === undefined || e === null) {
    return false;
  }
  var n = e.__proto__.constructor.__fname || e.__proto__.constructor.name;
  return n === t || n !== "Object" && instanceOfClass(e.__proto__, t);
};