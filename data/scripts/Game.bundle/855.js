Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1995.js");
var o = createjs.Point;
var a = function () {
  function GeneralsSkillTooltipHelper() {}
  GeneralsSkillTooltipHelper.hideToolTip = function () {
    GeneralsSkillTooltipHelper._generalsSkillTooltip.disp.visible = false;
    GeneralsSkillTooltipHelper._currentTarget = null;
  };
  GeneralsSkillTooltipHelper.showToolTip = function (e, t, i) {
    GeneralsSkillTooltipHelper._currentTarget = e;
    GeneralsSkillTooltipHelper._generalsSkillTooltip.initToolTip(t, i);
    var n = e.localToGlobal(new o(0, 0));
    GeneralsSkillTooltipHelper._generalsSkillTooltip.disp.x = n.x;
    GeneralsSkillTooltipHelper._generalsSkillTooltip.disp.y = Math.max(GeneralsSkillTooltipHelper._generalsSkillTooltip.disp.bg.height, n.y) - e.height / 2;
    if (GeneralsSkillTooltipHelper._generalsSkillTooltip.disp.y - GeneralsSkillTooltipHelper._generalsSkillTooltip.disp.bg.height < 0) {
      GeneralsSkillTooltipHelper._generalsSkillTooltip.disp.y = n.y + e.height / 2 + GeneralsSkillTooltipHelper._generalsSkillTooltip.disp.bg.height;
    }
    if (GeneralsSkillTooltipHelper._generalsSkillTooltip.disp.y > GeneralsSkillTooltipHelper._generalsSkillTooltip.disp.stage.stageHeight) {
      GeneralsSkillTooltipHelper._generalsSkillTooltip.disp.y = GeneralsSkillTooltipHelper._generalsSkillTooltip.disp.stage.stageHeight;
      GeneralsSkillTooltipHelper._generalsSkillTooltip.disp.x = n.x + e.width / 2 + GeneralsSkillTooltipHelper._generalsSkillTooltip.disp.bg.width / 2;
      if (GeneralsSkillTooltipHelper._generalsSkillTooltip.disp.x + GeneralsSkillTooltipHelper._generalsSkillTooltip.disp.bg.width / 2 > GeneralsSkillTooltipHelper._generalsSkillTooltip.disp.stage.stageWidth) {
        GeneralsSkillTooltipHelper._generalsSkillTooltip.disp.x = n.x - e.width / 2 - GeneralsSkillTooltipHelper._generalsSkillTooltip.disp.bg.width / 2;
      }
    }
    GeneralsSkillTooltipHelper._generalsSkillTooltip.disp.visible = true;
  };
  Object.defineProperty(GeneralsSkillTooltipHelper, "disp", {
    get: function () {
      return GeneralsSkillTooltipHelper._generalsSkillTooltip.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsSkillTooltipHelper, "currentTarget", {
    get: function () {
      return GeneralsSkillTooltipHelper._currentTarget;
    },
    enumerable: true,
    configurable: true
  });
  GeneralsSkillTooltipHelper.__initialize_static_members = function () {
    GeneralsSkillTooltipHelper._generalsSkillTooltip = new n.GeneralSkillTooltip();
  };
  return GeneralsSkillTooltipHelper;
}();
exports.GeneralsSkillTooltipHelper = a;
a.__initialize_static_members();