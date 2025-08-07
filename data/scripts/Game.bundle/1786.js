Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./4.js");
var o = require("./2.js");
var a = function () {
  function UpdateDynamicTopXDataService() {}
  UpdateDynamicTopXDataService.prototype.updateDynamicTopXForVO = function (e, t = -1) {
    var i = t != -1 ? t : o.BasicModel.instanceProxy.selectedInstanceVO.zoneId;
    var a = n.CastleModel.dynamicTopXxmlData.getTopX(i, e.eventId, e.leagueID);
    if (a && a.length > 0 && e.topX.length > 0) {
      e.setDynamicTopX(a);
    }
  };
  return UpdateDynamicTopXDataService;
}();
exports.UpdateDynamicTopXDataService = a;