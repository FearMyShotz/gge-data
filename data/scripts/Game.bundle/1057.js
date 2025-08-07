Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./23.js");
var o = require("./23.js");
var a = createjs.Point;
var s = function () {
  function QuestMapTooltipHelper() {}
  QuestMapTooltipHelper.hideToolTip = function () {
    if (QuestMapTooltipHelper.disp) {
      o.TweenMax.killTweensOf(QuestMapTooltipHelper._questMapTooltip.disp);
      o.TweenMax.to(QuestMapTooltipHelper._questMapTooltip.disp, QuestMapTooltipHelper.FADE_DURATION, {
        autoAlpha: 0,
        ease: n.Linear.easeIn
      });
    }
  };
  QuestMapTooltipHelper.showToolTip = function (e, t) {
    QuestMapTooltipHelper._questMapTooltip.show(t);
    r.CastleLayoutManager.getInstance().addInteractiveToolTip(QuestMapTooltipHelper.disp);
    var i = e.localToGlobal(new a(0, 0));
    QuestMapTooltipHelper._questMapTooltip.disp.x = i.x;
    QuestMapTooltipHelper._questMapTooltip.disp.y = Math.max(QuestMapTooltipHelper._questMapTooltip.disp.height, i.y) - e.height / 2;
    if (QuestMapTooltipHelper._questMapTooltip.disp.y - QuestMapTooltipHelper._questMapTooltip.disp.height < 0) {
      QuestMapTooltipHelper._questMapTooltip.disp.y = i.y + e.height / 2 + QuestMapTooltipHelper._questMapTooltip.disp.height;
      QuestMapTooltipHelper._questMapTooltip.disp.arrow_down.visible = false;
      QuestMapTooltipHelper._questMapTooltip.disp.arrow_up.visible = true;
    } else {
      QuestMapTooltipHelper._questMapTooltip.disp.arrow_down.visible = true;
      QuestMapTooltipHelper._questMapTooltip.disp.arrow_up.visible = false;
    }
    o.TweenMax.killTweensOf(QuestMapTooltipHelper._questMapTooltip.disp);
    o.TweenMax.to(QuestMapTooltipHelper._questMapTooltip.disp, QuestMapTooltipHelper.FADE_DURATION, {
      autoAlpha: 1,
      ease: n.Linear.easeOut
    });
  };
  Object.defineProperty(QuestMapTooltipHelper, "disp", {
    get: function () {
      return QuestMapTooltipHelper._questMapTooltip.disp;
    },
    enumerable: true,
    configurable: true
  });
  QuestMapTooltipHelper.__initialize_static_members = function () {
    QuestMapTooltipHelper.FADE_DURATION = 0.1;
    QuestMapTooltipHelper._questMapTooltip = new l.QuestMapTooltip();
  };
  return QuestMapTooltipHelper;
}();
exports.QuestMapTooltipHelper = s;
var r = require("./17.js");
var l = require("./3315.js");
s.__initialize_static_members();