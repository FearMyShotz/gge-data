Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.ColorFilter;
var o = function () {
  function FlagHelper() {}
  FlagHelper.colorFlag = function (e, t, i = false) {
    if (e) {
      if (e.c3) {
        FlagHelper.fillCrestFlag(e, t, i);
      } else {
        FlagHelper.fillCustomFlag(e, t);
      }
      e.visible = true;
    }
  };
  FlagHelper.fillCustomFlag = function (e, t) {
    var i = new a.ColorTransform();
    i.color = t.backgroundColor1;
    if (e.c1) {
      e.c1.useFilters([new n(i.redMultiplier, i.greenMultiplier, i.blueMultiplier, i.alphaMultiplier, i.redOffset, i.greenOffset, i.blueOffset, i.alphaOffset)]);
    }
    if (t.backgroundType != s.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN) {
      i.color = t.backgroundColor2;
    }
    if (e.c2) {
      e.c2.useFilters([new n(i.redMultiplier, i.greenMultiplier, i.blueMultiplier, i.alphaMultiplier, i.redOffset, i.greenOffset, i.blueOffset, i.alphaOffset)]);
    }
  };
  FlagHelper.fillCrestFlag = function (e, t, i = false) {
    var o = i;
    if (e.c1.totalFrames == 1 && e.parent && e.parent.scaleX < 0) {
      o = true;
    }
    var s = new a.ColorTransform();
    s.color = t.backgroundColor1;
    switch (t.backgroundType) {
      case 0:
        if (e.c1) {
          e.c1.useFilters([new n(s.redMultiplier, s.greenMultiplier, s.blueMultiplier, s.alphaMultiplier, s.redOffset, s.greenOffset, s.blueOffset, s.alphaOffset)]);
        }
        if (e.c2) {
          e.c2.useFilters([new n(s.redMultiplier, s.greenMultiplier, s.blueMultiplier, s.alphaMultiplier, s.redOffset, s.greenOffset, s.blueOffset, s.alphaOffset)]);
        }
        if (e.c3) {
          e.c3.useFilters([new n(s.redMultiplier, s.greenMultiplier, s.blueMultiplier, s.alphaMultiplier, s.redOffset, s.greenOffset, s.blueOffset, s.alphaOffset)]);
        }
        if (e.c4) {
          e.c4.useFilters([new n(s.redMultiplier, s.greenMultiplier, s.blueMultiplier, s.alphaMultiplier, s.redOffset, s.greenOffset, s.blueOffset, s.alphaOffset)]);
        }
        break;
      case 1:
        if (o) {
          s.color = t.backgroundColor2;
        }
        if (e.c1) {
          e.c1.useFilters([new n(s.redMultiplier, s.greenMultiplier, s.blueMultiplier, s.alphaMultiplier, s.redOffset, s.greenOffset, s.blueOffset, s.alphaOffset)]);
        }
        if (e.c3) {
          e.c3.useFilters([new n(s.redMultiplier, s.greenMultiplier, s.blueMultiplier, s.alphaMultiplier, s.redOffset, s.greenOffset, s.blueOffset, s.alphaOffset)]);
        }
        s.color = o ? t.backgroundColor1 : t.backgroundColor2;
        if (e.c2) {
          e.c2.useFilters([new n(s.redMultiplier, s.greenMultiplier, s.blueMultiplier, s.alphaMultiplier, s.redOffset, s.greenOffset, s.blueOffset, s.alphaOffset)]);
        }
        if (e.c4) {
          e.c4.useFilters([new n(s.redMultiplier, s.greenMultiplier, s.blueMultiplier, s.alphaMultiplier, s.redOffset, s.greenOffset, s.blueOffset, s.alphaOffset)]);
        }
        break;
      case 2:
        if (e.c1) {
          e.c1.useFilters([new n(s.redMultiplier, s.greenMultiplier, s.blueMultiplier, s.alphaMultiplier, s.redOffset, s.greenOffset, s.blueOffset, s.alphaOffset)]);
        }
        if (e.c2) {
          e.c2.useFilters([new n(s.redMultiplier, s.greenMultiplier, s.blueMultiplier, s.alphaMultiplier, s.redOffset, s.greenOffset, s.blueOffset, s.alphaOffset)]);
        }
        s.color = t.backgroundColor2;
        if (e.c3) {
          e.c3.useFilters([new n(s.redMultiplier, s.greenMultiplier, s.blueMultiplier, s.alphaMultiplier, s.redOffset, s.greenOffset, s.blueOffset, s.alphaOffset)]);
        }
        if (e.c4) {
          e.c4.useFilters([new n(s.redMultiplier, s.greenMultiplier, s.blueMultiplier, s.alphaMultiplier, s.redOffset, s.greenOffset, s.blueOffset, s.alphaOffset)]);
        }
        break;
      case 3:
        if (o) {
          s.color = t.backgroundColor2;
        }
        if (e.c1) {
          e.c1.useFilters([new n(s.redMultiplier, s.greenMultiplier, s.blueMultiplier, s.alphaMultiplier, s.redOffset, s.greenOffset, s.blueOffset, s.alphaOffset)]);
        }
        if (e.c4) {
          e.c4.useFilters([new n(s.redMultiplier, s.greenMultiplier, s.blueMultiplier, s.alphaMultiplier, s.redOffset, s.greenOffset, s.blueOffset, s.alphaOffset)]);
        }
        s.color = o ? t.backgroundColor1 : t.backgroundColor2;
        if (e.c2) {
          e.c2.useFilters([new n(s.redMultiplier, s.greenMultiplier, s.blueMultiplier, s.alphaMultiplier, s.redOffset, s.greenOffset, s.blueOffset, s.alphaOffset)]);
        }
        if (e.c3) {
          e.c3.useFilters([new n(s.redMultiplier, s.greenMultiplier, s.blueMultiplier, s.alphaMultiplier, s.redOffset, s.greenOffset, s.blueOffset, s.alphaOffset)]);
        }
    }
  };
  return FlagHelper;
}();
exports.FlagHelper = o;
var a = require("./1.js");
var s = require("./368.js");