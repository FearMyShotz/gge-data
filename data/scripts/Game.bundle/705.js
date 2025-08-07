Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./5.js");
var s = require("./6.js");
var r = function (e) {
  function CastleDefenceDialogProperties(t, i = s.int(a.DefenseConst.TOOL_TYPE_WALL)) {
    var n = e.call(this) || this;
    n.preselectedShopCategory = 0;
    n.worldMapObjectVO = t;
    if (c.instanceOfClass(n.worldMapObjectVO, "ABGAllianceTowerMapobjectVO")) {
      n.preselectedShopCategory = l.CastleDefenceDialog.NO_SHOP;
    } else {
      n.preselectedShopCategory = i;
    }
    return n;
  }
  n.__extends(CastleDefenceDialogProperties, e);
  return CastleDefenceDialogProperties;
}(o.BasicProperties);
exports.CastleDefenceDialogProperties = r;
var l = require("./426.js");
var c = require("./1.js");