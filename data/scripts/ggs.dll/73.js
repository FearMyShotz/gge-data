Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function DictionaryUtil() {}
  DictionaryUtil.getKeys = function (e) {
    var t = [];
    if (e === null) {
      return [];
    } else {
      e.forEach(function (e, n, i) {
        t.push(n);
      });
      return t;
    }
  };
  DictionaryUtil.getValues = function (e) {
    var t = [];
    if (e === null) {
      return [];
    } else {
      e.forEach(function (e, n, i) {
        t.push(e);
      });
      return t;
    }
  };
  DictionaryUtil.containsKey = function (e, t) {
    return e.has(t);
  };
  DictionaryUtil.containsValue = function (e, t) {
    var n = false;
    return e !== null && (e.forEach(function (e, i, a) {
      if (e === t) {
        n = true;
      }
    }), n);
  };
  DictionaryUtil.clone = function (e) {
    return new Map(e);
  };
  DictionaryUtil.getKeyForValue = function (e, t) {
    var n = null;
    e.forEach(function (e, i, a) {
      if (e === t) {
        n = i;
      }
    });
    return n;
  };
  DictionaryUtil.concatDictionaries = function () {
    var e = [];
    for (var t = 0; t < arguments.length; t++) {
      e[t] = arguments[t];
    }
    var n = new Map();
    for (var i = 0; i < e.length; i++) {
      e[i].forEach(function (e, t, i) {
        n.set(t, e);
      });
    }
    return n;
  };
  DictionaryUtil.getDictionaryLength = function (e) {
    return e.size;
  };
  DictionaryUtil.isEmpty = function (e) {
    return e.size === 0;
  };
  return DictionaryUtil;
}();
exports.DictionaryUtil = i;