Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = function (e) {
  function InfoCatalogTopicEnum(t, i) {
    var n = e.call(this, t, o.BasicEnum.instantiationKey) || this;
    n._pageName = i;
    return n;
  }
  n.__extends(InfoCatalogTopicEnum, e);
  Object.defineProperty(InfoCatalogTopicEnum.prototype, "pageName", {
    get: function () {
      return this._pageName;
    },
    enumerable: true,
    configurable: true
  });
  return InfoCatalogTopicEnum;
}(require("./84.js").CastleEnum);
exports.InfoCatalogTopicEnum = a;