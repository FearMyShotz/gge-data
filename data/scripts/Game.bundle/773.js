Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./18.js");
var s = function (e) {
  function ATowerVO() {
    var t = e.call(this) || this;
    t._name = "Basic";
    t._group = a.ClientConstCastle.GROUP_TOWER;
    t._width = 2;
    t._height = 2;
    return t;
  }
  n.__extends(ATowerVO, e);
  ATowerVO.prototype.canUpgrade = function () {
    return e.prototype.canUpgrade.call(this) && this.level < this.isoData.objects.defences.currentWallLevel;
  };
  ATowerVO.prototype.getNameString = function () {
    return this.name.toLowerCase() + "_" + this.group.toLowerCase() + "_name";
  };
  ATowerVO.prototype.getShortInfoString = function () {
    return this.name.toLowerCase() + "_" + this.group.toLowerCase() + "_short_info";
  };
  ATowerVO.prototype.getUpgradeInfoString = function () {
    return this.name.toLowerCase() + "_" + this.group.toLowerCase() + "_upgrade_info";
  };
  return ATowerVO;
}(require("./633.js").ADefenceBuildingVO);
exports.ATowerVO = s;
o.classImplementsInterfaces(s, "IShopVO", "ICostVO", "IInventoryVO");