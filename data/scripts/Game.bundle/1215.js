Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function AreaHelper() {}
  AreaHelper.getAreaKey = function (e, t) {
    return e + "-" + t;
  };
  AreaHelper.getAreaKeyByArea = function (e) {
    if (e) {
      return e.areaInfo.kingdomID + "-" + e.areaInfo.objectId;
    } else {
      return "0_1";
    }
  };
  return AreaHelper;
}();
exports.AreaHelper = n;