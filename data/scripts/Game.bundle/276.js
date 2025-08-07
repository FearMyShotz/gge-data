Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = function () {
  function CastleWorldmapConst() {}
  CastleWorldmapConst._adjust = function () {
    if (n.currentBrowserInfo.isEdge || n.currentBrowserInfo.isIE) {
      CastleWorldmapConst.ZOOM_MIN = 1;
    }
  };
  CastleWorldmapConst.ZOOM_MIN = 0.8;
  CastleWorldmapConst.ZOOM_MAX = 1.5;
  CastleWorldmapConst.ZOOM_STEP = 0.05;
  CastleWorldmapConst.VIEWPORT_MARGIN = 100;
  CastleWorldmapConst.KEY_STEP = 3;
  CastleWorldmapConst.KEY_STEP_MAX = 50;
  return CastleWorldmapConst;
}();
exports.CastleWorldmapConst = o;
o._adjust();