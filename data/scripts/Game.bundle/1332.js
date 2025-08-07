Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = function () {
  function ATreasureMapRouteManager() {}
  ATreasureMapRouteManager.prototype.initComponent = function (e, t, i) {
    this._routeLayer = i;
    this.updateComponent(e);
  };
  ATreasureMapRouteManager.prototype.updateComponent = function (e) {};
  ATreasureMapRouteManager.prototype.destroy = function () {};
  return ATreasureMapRouteManager;
}();
exports.ATreasureMapRouteManager = o;
n.classImplementsInterfaces(o, "ITreasureUpdateComponent");