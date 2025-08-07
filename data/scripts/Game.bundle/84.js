Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./55.js");
var s = function (e) {
  function CastleEnum(t, i) {
    var n = this;
    CONSTRUCTOR_HACK;
    (n = e.call(this, t, i) || this).addToDic();
    return n;
  }
  n.__extends(CastleEnum, e);
  CastleEnum.getEnumListByClass = function (e) {
    var t = a.ClientConstUtils.getNameFromClass(e);
    var i = CastleEnum._enumDic.get(t);
    if (!i) {
      console.warn("Enum with name '" + t + "' is unknown. Does the enumClass extend from CastleEnum?");
    }
    return i;
  };
  CastleEnum.prototype.addToDic = function () {
    var e = this.getClassName();
    if (!CastleEnum._enumDic.get(e)) {
      CastleEnum._enumDic.set(e, []);
    }
    CastleEnum._enumDic.get(e).push(this);
  };
  CastleEnum.__initialize_static_members = function () {
    CastleEnum._enumDic = new Map();
  };
  return CastleEnum;
}(o.BasicEnum);
exports.CastleEnum = s;
s.__initialize_static_members();