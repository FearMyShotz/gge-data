Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./7.js");
var r = function (e) {
  function C2SCollectMineResources(t) {
    var i = this;
    i.OID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).OID = a.int(t.OID);
    return i;
  }
  n.__extends(C2SCollectMineResources, e);
  C2SCollectMineResources.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_COLLECT_MINE_RESOURCES;
  };
  return C2SCollectMineResources;
}(o.BasicCommandVO);
exports.C2SCollectMineResources = r;