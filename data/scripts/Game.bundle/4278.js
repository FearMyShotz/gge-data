Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleEffectTypeVO(e = null) {
    this._combatType = 0;
    if (e == null) {
      this._name = "typeUnknown";
      this._type = s.EffectTypeEnum.getByID(-1);
    } else {
      var t = a.int(e.effectTypeID || "");
      this._name = e.name || "";
      this._type = s.EffectTypeEnum.getByID(t);
      this._combatType = a.int(e.combatType || "");
      this._effectCategory = parseInt(e.sortCategory || "");
      this._effectGroup = parseInt(e.sortGroup || "");
    }
  }
  Object.defineProperty(CastleEffectTypeVO.prototype, "name", {
    get: function () {
      return this._name;
    },
    enumerable: true,
    configurable: true
  });
  CastleEffectTypeVO.prototype.toString = function () {
    return this.getClassName() + "." + this._name;
  };
  CastleEffectTypeVO.prototype.getClassName = function () {
    return o.getQualifiedClassName(this).match("[^:]*$")[0];
  };
  Object.defineProperty(CastleEffectTypeVO.prototype, "id", {
    get: function () {
      return this._type.id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEffectTypeVO.prototype, "combatType", {
    get: function () {
      return this._combatType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEffectTypeVO.prototype, "valueClass", {
    get: function () {
      return this._type.valueClass;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEffectTypeVO.prototype, "type", {
    get: function () {
      return this._type;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEffectTypeVO.prototype, "effectCategory", {
    get: function () {
      return this._effectCategory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEffectTypeVO.prototype, "effectGroup", {
    get: function () {
      return this._effectGroup;
    },
    enumerable: true,
    configurable: true
  });
  return CastleEffectTypeVO;
}();
exports.CastleEffectTypeVO = n;
var o = require("./1.js");
var a = require("./6.js");
var s = require("./35.js");