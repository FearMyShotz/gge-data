Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SUpdatePresetNameVO(t) {
    var i = this;
    i.S = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).S = t.index;
    i.SN = t.name;
    return i;
  }
  n.__extends(C2SUpdatePresetNameVO, e);
  C2SUpdatePresetNameVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_UPDATE_PRESET_NAME;
  };
  return C2SUpdatePresetNameVO;
}(o.BasicCommandVO);
exports.C2SUpdatePresetNameVO = s;