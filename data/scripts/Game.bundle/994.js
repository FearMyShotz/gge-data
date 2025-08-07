Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.Point;
var o = function () {
  function LegendSkillIconHelper() {}
  LegendSkillIconHelper.hideToolTip = function () {
    LegendSkillIconHelper._legendSkillToolTip.disp.visible = false;
    LegendSkillIconHelper._currentTarget = null;
  };
  LegendSkillIconHelper.showToolTip = function (e, t) {
    LegendSkillIconHelper._currentTarget = e;
    LegendSkillIconHelper._legendSkillToolTip.initToolTip(t);
    var i = e.localToGlobal(new n(0, 0));
    LegendSkillIconHelper._legendSkillToolTip.disp.x = i.x;
    LegendSkillIconHelper._legendSkillToolTip.disp.y = Math.max(LegendSkillIconHelper._legendSkillToolTip.disp.bg.height, i.y) - e.height / 2;
    if (LegendSkillIconHelper._legendSkillToolTip.disp.y - LegendSkillIconHelper._legendSkillToolTip.disp.bg.height < 0) {
      LegendSkillIconHelper._legendSkillToolTip.disp.y = i.y + e.height / 2 + LegendSkillIconHelper._legendSkillToolTip.disp.bg.height;
    }
    LegendSkillIconHelper._legendSkillToolTip.disp.visible = true;
  };
  Object.defineProperty(LegendSkillIconHelper, "disp", {
    get: function () {
      return LegendSkillIconHelper._legendSkillToolTip.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LegendSkillIconHelper, "currentTarget", {
    get: function () {
      return LegendSkillIconHelper._currentTarget;
    },
    enumerable: true,
    configurable: true
  });
  LegendSkillIconHelper.__initialize_static_members = function () {
    LegendSkillIconHelper._legendSkillToolTip = new a.CastleLegendSkillTooltip();
  };
  return LegendSkillIconHelper;
}();
exports.LegendSkillIconHelper = o;
var a = require("./2666.js");
o.__initialize_static_members();