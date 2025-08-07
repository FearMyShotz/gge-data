Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = function (e) {
  function AllianceCrestEnum(t, i = false) {
    var n = this;
    n._isSimple = false;
    CONSTRUCTOR_HACK;
    (n = e.call(this, t, o.BasicEnum.instantiationKey) || this)._isSimple = i;
    return n;
  }
  n.__extends(AllianceCrestEnum, e);
  Object.defineProperty(AllianceCrestEnum.prototype, "isSimpleCrest", {
    get: function () {
      return this._isSimple;
    },
    enumerable: true,
    configurable: true
  });
  AllianceCrestEnum.__initialize_static_members = function () {
    AllianceCrestEnum.DEFAULT_CREST = new AllianceCrestEnum("Normal");
    AllianceCrestEnum.DEFAULT_CREST_SIMPLE = new AllianceCrestEnum("Simple", true);
  };
  return AllianceCrestEnum;
}(require("./84.js").CastleEnum);
exports.AllianceCrestEnum = a;
a.__initialize_static_members();