Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function UnknownMapobjectVO() {
    return e.call(this) || this;
  }
  n.__extends(UnknownMapobjectVO, e);
  UnknownMapobjectVO.prototype.parseAreaInfo = function (e) {
    this._absAreaPosX = e[0];
    this._absAreaPosY = e[1];
    this.kingdomID = e[2];
  };
  return UnknownMapobjectVO;
}(require("./101.js").InteractiveMapobjectVO);
exports.UnknownMapobjectVO = a;
o.classImplementsInterfaces(a, "IDetailViewAble", "IWorldmapObjectVO");