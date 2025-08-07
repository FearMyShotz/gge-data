Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function DictionaryUtil() {}
  DictionaryUtil.containsKey = function (e, t) {
    return e.get(t) !== undefined;
  };
  return DictionaryUtil;
}();
exports.DictionaryUtil = i;