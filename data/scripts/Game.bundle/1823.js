Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./69.js");
var a = require("./34.js");
var s = require("./9.js");
var r = require("./697.js");
var l = require("./872.js");
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
  Object.defineProperty(ADistrictGachaEventVO.prototype, "animationFPS", {
    get: function () {
      return 24;
    },
    enumerable: true,
    configurable: true
  });
  return ADistrictGachaEventVO;
}(require("./557.js").AGachaEventVO);
exports.ADistrictGachaEventVO = u;