Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./1473.js");
var a = function () {
  function ResearchTreeConnectionLine(e) {
    var t = new (n.getDefinitionByName("ResearchTree_ConnectorLine"))();
    this._disp = t;
    this._pos = e;
    this._disp.height = this.orientation == ResearchTreeConnectionLine.ORIENTATION_HORIZONTAL ? o.ResearchTree.ITEMOFFSETX : o.ResearchTree.ITEMOFFSETY;
    this._disp.rotation = this.orientation == ResearchTreeConnectionLine.ORIENTATION_HORIZONTAL ? 90 : 0;
  }
  Object.defineProperty(ResearchTreeConnectionLine.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResearchTreeConnectionLine.prototype, "orientation", {
    get: function () {
      if (this._pos.x != Math.floor(this._pos.x)) {
        return ResearchTreeConnectionLine.ORIENTATION_HORIZONTAL;
      } else {
        return ResearchTreeConnectionLine.ORIENTATION_VERTICAL;
      }
    },
    enumerable: true,
    configurable: true
  });
  ResearchTreeConnectionLine.ORIENTATION_VERTICAL = "vertical";
  ResearchTreeConnectionLine.ORIENTATION_HORIZONTAL = "horizontal";
  return ResearchTreeConnectionLine;
}();
exports.ResearchTreeConnectionLine = a;