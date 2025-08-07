Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasKey = function hasKey(e, t) {
  return typeof t == "object" && e in t;
};