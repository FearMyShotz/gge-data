Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = function (e) {
  function IsoExpansionEnum(t, i) {
    var n = this;
    n._id = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this, t, o.BasicEnum.instantiationKey) || this)._id = i;
    return n;
  }
  n.__extends(IsoExpansionEnum, e);
  IsoExpansionEnum.getTypeById = function (e) {
    return this.getByProperty(IsoExpansionEnum, "id", e, IsoExpansionEnum.NORMAL);
  };
  Object.defineProperty(IsoExpansionEnum.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  IsoExpansionEnum.__initialize_static_members = function () {
    IsoExpansionEnum.PREMIUM = new IsoExpansionEnum("premium", 0);
    IsoExpansionEnum.NORMAL = new IsoExpansionEnum("normal", 1);
  };
  return IsoExpansionEnum;
}(require("./84.js").CastleEnum);
exports.IsoExpansionEnum = a;
a.__initialize_static_members();