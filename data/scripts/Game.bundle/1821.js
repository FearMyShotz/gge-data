Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./69.js");
var a = require("./33.js");
var s = require("./9.js");
var r = require("./695.js");
var l = require("./871.js");
var c = require("./556.js");
var u = function (e) {
  function ADistrictGachaEventVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ADistrictGachaEventVO, e);
  ADistrictGachaEventVO.prototype.hasDistrict = function () {
    return !!this.getDistrictBuildingVO();
  };
  ADistrictGachaEventVO.prototype.getDistrictBuildingVO = function () {
    return a.Iso.data.objects.provider.getFunctionalBuildingByType(this.getDistrictType());
  };
  ADistrictGachaEventVO.prototype.openDialog = function (e = true) {
    s.CastleDialogHandler.getInstance().registerDialogs(c.GachaEventMainDialog);
  };
  ADistrictGachaEventVO.prototype.openDistrictDialog = function () {
    var e = this.getDistrictBuildingVO();
    if (e) {
      s.CastleDialogHandler.getInstance().registerDefaultDialogs(r.BuildingDistrictDialog, new l.BuildingDistrictDialogProperties(e));
    }
  };
  ADistrictGachaEventVO.prototype.getDistrictType = function () {
    throw new o.AbstractMethodError();
  };
  return ADistrictGachaEventVO;
}(require("./668.js").AGachaEventVO);
exports.ADistrictGachaEventVO = u;