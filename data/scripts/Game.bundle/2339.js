Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./23.js");
var a = createjs.TimerEvent;
var s = function () {
  function CastleCraftingGemFailedAnimation() {}
  CastleCraftingGemFailedAnimation.playAnimation = function (e, t = null) {
    CastleCraftingGemFailedAnimation._gemList = e.concat([]);
    CastleCraftingGemFailedAnimation.sortList();
    CastleCraftingGemFailedAnimation._callBack = t;
    CastleCraftingGemFailedAnimation._delay = 0;
    if (CastleCraftingGemFailedAnimation._gemList != null) {
      for (var i = 0, o = CastleCraftingGemFailedAnimation._gemList; i < o.length; i++) {
        var s = o[i];
        if (s !== undefined) {
          CastleCraftingGemFailedAnimation._delay += CastleCraftingGemFailedAnimation._delayStep;
          var r = new n.Timer(CastleCraftingGemFailedAnimation._delay, 1);
          r.addEventListener(a.TIMER, CastleCraftingGemFailedAnimation.doAnimation(r, s));
          r.start();
        }
      }
    }
  };
  CastleCraftingGemFailedAnimation.sortList = function () {
    CastleCraftingGemFailedAnimation._gemList.pop();
    CastleCraftingGemFailedAnimation._gemList.reverse();
    var e = CastleCraftingGemFailedAnimation._gemList.shift();
    CastleCraftingGemFailedAnimation._gemList[CastleCraftingGemFailedAnimation._gemList.length] = e;
  };
  CastleCraftingGemFailedAnimation.doAnimation = function (e, t) {
    return function callbackHide(i) {
      if (t.mc_itemHolder && t.mc_itemHolder.getChildAt(0)) {
        var n = t.mc_itemHolder.getChildAt(0).getChildAt(1).currentshownDisplayObject;
        CastleCraftingGemFailedAnimation.breakMc(n);
        CastleCraftingGemFailedAnimation.hideMc(n);
      }
      e.removeEventListener(a.TIMER, CastleCraftingGemFailedAnimation.doAnimation);
      e = null;
    };
  };
  CastleCraftingGemFailedAnimation.breakMc = function (e) {
    if (e && e.mc_broken) {
      e.mc_broken.visible = true;
    }
  };
  CastleCraftingGemFailedAnimation.hideMc = function (e) {
    if (e) {
      o.TweenMax.to(e, 0.5, {
        alpha: 0,
        onComplete: CastleCraftingGemFailedAnimation.onAnimationFinished
      });
    } else {
      CastleCraftingGemFailedAnimation.onAnimationFinished();
    }
  };
  CastleCraftingGemFailedAnimation.onAnimationFinished = function () {
    CastleCraftingGemFailedAnimation._delay -= CastleCraftingGemFailedAnimation._delayStep;
    if (CastleCraftingGemFailedAnimation._callBack && CastleCraftingGemFailedAnimation._delay == 0) {
      CastleCraftingGemFailedAnimation._callBack();
    }
  };
  Object.defineProperty(CastleCraftingGemFailedAnimation, "callBack", {
    set: function (e) {
      CastleCraftingGemFailedAnimation._callBack = e;
    },
    enumerable: true,
    configurable: true
  });
  CastleCraftingGemFailedAnimation._delayStep = 85;
  CastleCraftingGemFailedAnimation._delay = 0;
  return CastleCraftingGemFailedAnimation;
}();
exports.CastleCraftingGemFailedAnimation = s;