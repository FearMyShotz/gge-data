Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./6.js");
var r = require("./7.js");
var l = function (e) {
  function C2SIsoBuyObjectVO(t, i, n, o, a = -1, r = false, l = -1) {
    var c = this;
    c.WID = 0;
    c.X = 0;
    c.Y = 0;
    c.R = 0;
    c.PWR = 0;
    c.PO = 0;
    c.DOID = 0;
    CONSTRUCTOR_HACK;
    (c = e.call(this) || this).WID = t;
    c.X = i;
    c.Y = n;
    c.R = o;
    c.PO = a;
    c.DOID = l;
    c.PWR = s.int(r == 1 ? 1 : 0);
    return c;
  }
  n.__extends(C2SIsoBuyObjectVO, e);
  C2SIsoBuyObjectVO.prototype.getCmdId = function () {
    return r.ClientConstSF.C2S_BUY_OBJECT;
  };
  return C2SIsoBuyObjectVO;
}(o.BasicCommandVO);
exports.C2SIsoBuyObjectVO = l;
a.classImplementsInterfaces(l, "IBuildingConstructionCommandVO");