Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = function (e) {
  function AreaDataEnum(t, i) {
    var n = this;
    CONSTRUCTOR_HACK;
    (n = e.call(this, t, o.BasicEnum.instantiationKey) || this)._associatedClass = i;
    return n;
  }
  n.__extends(AreaDataEnum, e);
  Object.defineProperty(AreaDataEnum.prototype, "associatedClass", {
    get: function () {
      return this._associatedClass;
    },
    enumerable: true,
    configurable: true
  });
  AreaDataEnum.__initialize_static_members = function () {
    AreaDataEnum.COMMON_INFO = new AreaDataEnum("info", r.AreaDataCommonInfo);
    AreaDataEnum.ISO_DATA = new AreaDataEnum("isoData", s.IsoData);
    AreaDataEnum.STORAGE = new AreaDataEnum("storage", p.AreaDataStorage);
    AreaDataEnum.CONSTRUCTION_LIST = new AreaDataEnum("constructionList", c.AreaDataConstructionList);
    AreaDataEnum.CONSTRUCTION_ITEMS = new AreaDataEnum("constructionItems", l.AreaDataConstructionItems);
    AreaDataEnum.MORALITY = new AreaDataEnum("morality", u.AreaDataMorality);
    AreaDataEnum.SLUM = new AreaDataEnum("slum", d.AreaDataSlum);
  };
  return AreaDataEnum;
}(require("./84.js").CastleEnum);
exports.AreaDataEnum = a;
var s = require("./5228.js");
var r = require("./5252.js");
var l = require("./5253.js");
var c = require("./5254.js");
var u = require("./5257.js");
var d = require("./5258.js");
var p = require("./5259.js");
a.__initialize_static_members();