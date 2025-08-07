Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./105.js");
var l = require("./209.js");
var c = function (e) {
  function AllianceCrestSurroundingsVO() {
    var t = e.call(this) || this;
    t._name = "AllianceCrest";
    t._width = 7;
    t._height = 6;
    t._posOrigin = r.IsoGridOriginEnum.BOTTOM_CORNER;
    t._posOffset.x = 11;
    t._posOffset.y = -19;
    t._minLevel = a.TutorialConst.TUTORIAL_END_LEVEL;
    return t;
  }
  n.__extends(AllianceCrestSurroundingsVO, e);
  AllianceCrestSurroundingsVO.prototype.getInfoTooltipLine2 = function () {
    return s.Localize.text("dialog_EntryPointCoA");
  };
  AllianceCrestSurroundingsVO.prototype.getInfoTooltipLine1 = function () {
    return s.Localize.text("dialog_CoACamp_name");
  };
  Object.defineProperty(AllianceCrestSurroundingsVO.prototype, "isClickAvailable", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.ASurroundingBuildingVO.prototype, "isClickAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return AllianceCrestSurroundingsVO;
}(l.ASurroundingBuildingVO);
exports.AllianceCrestSurroundingsVO = c;
o.classImplementsInterfaces(c, "IRelativeGridBuildingVO");