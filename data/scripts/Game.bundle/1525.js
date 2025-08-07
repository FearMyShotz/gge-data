Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = function (e) {
  function PrivateResourceVillageActionDialogProperties(t, i = -1) {
    var n = e.call(this) || this;
    n._uniqueVillageID = -1;
    n._villageInfoVO = t;
    n._uniqueVillageID = a.int(i);
    return n;
  }
  n.__extends(PrivateResourceVillageActionDialogProperties, e);
  Object.defineProperty(PrivateResourceVillageActionDialogProperties.prototype, "villageInfoVO", {
    get: function () {
      return this._villageInfoVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateResourceVillageActionDialogProperties.prototype, "uniqueVillageID", {
    get: function () {
      return this._uniqueVillageID;
    },
    enumerable: true,
    configurable: true
  });
  return PrivateResourceVillageActionDialogProperties;
}(o.BasicProperties);
exports.PrivateResourceVillageActionDialogProperties = s;