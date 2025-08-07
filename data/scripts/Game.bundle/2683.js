Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleEffectVO() {
    this._value = 0;
  }
  CastleEffectVO.createFromXML = function (e) {
    var t = [];
    for (var i in o.CastleEffectEnum.allValues) {
      var n = o.CastleEffectEnum.allValues[i];
      if (n !== undefined) {
        var a = e[n.name] || "";
        if (a.length > 0) {
          var s = new CastleEffectVO();
          s.type = n;
          s.value = Number(a);
          t.push(s);
        }
      }
    }
    return t;
  };
  Object.defineProperty(CastleEffectVO.prototype, "type", {
    get: function () {
      return this._type;
    },
    set: function (e) {
      this._type = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEffectVO.prototype, "value", {
    get: function () {
      return this._value;
    },
    set: function (e) {
      this._value = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEffectVO.prototype, "constructionItemTextId", {
    get: function () {
      return "ci_effect_" + this.type.name;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEffectVO.prototype, "buildingTextId", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  return CastleEffectVO;
}();
exports.CastleEffectVO = n;
var o = require("./97.js");