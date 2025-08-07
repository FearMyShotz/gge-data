Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./6.js");
var a = function () {
  function AlignmentHelper() {}
  AlignmentHelper.alignSingleLine = function (e, t, i = 0) {
    if (e != null && e.length != 0 || AlignmentHelper._validAlignmentTypes.indexOf(t) == -1) {
      var a;
      var s;
      var r;
      var l;
      var c = NaN;
      var u = 0;
      var d = [];
      for (var p = 0; p < e.length; p++) {
        if (e[p].visible) {
          d.push(e[p]);
        }
      }
      for (t != AlignmentHelper.ALIGN_HORIZONTAL_FROM_RIGHT && t != AlignmentHelper.ALIGN_VERTICAL_FROM_BOTTOM || (u = o.int(d.length - 1)); AlignmentHelper.hasNext(d, t, u);) {
        a = d[u];
        s = d[u = o.int(AlignmentHelper.getNextIndex(d, t, u))];
        r = a.getBounds(a.parent);
        l = s.getBounds(s.parent);
        if (t == AlignmentHelper.ALIGN_HORIZONTAL_FROM_LEFT) {
          c = s.x - l.left;
          s.x = r.right + i + c;
        } else if (t == AlignmentHelper.ALIGN_HORIZONTAL_FROM_RIGHT) {
          c = l.right - s.x;
          s.x = r.left - i - c;
        } else if (t == AlignmentHelper.ALIGN_VERTICAL_FROM_TOP) {
          c = s.y - l.top;
          s.y = r.bottom + i + c;
        } else if (t == AlignmentHelper.ALIGN_VERTICAL_FROM_BOTTOM) {
          c = l.bottom - s.y;
          s.y = r.top - i - c;
        }
      }
    } else {
      n.warn("AligmentHelper.alignSingleLine says: check your params!");
    }
  };
  AlignmentHelper.distributeHorizontally = function (e, t, i) {
    if (e != null && !(e.length < 2)) {
      var o;
      var a = AlignmentHelper.getTotalDispWidth(e);
      var s = e[0];
      var r = s.getBounds(s.parent);
      var l = (t.width - a - i - r.x) / (e.length - 1);
      if (n.GGSCountryController.instance.currentCountry.isLanguageWrittenRightToLeft) {
        e[1].x = e[0].width + (t.width - e[0].width - e[1].width - i) - r.x;
      } else {
        for (var c = 1; c < e.length; c++) {
          s;
          o = r;
          r = (s = e[c]).getBounds(s.parent);
          s.x = o.right + l + (r.x - r.left);
        }
      }
    }
  };
  AlignmentHelper.getTotalDispWidth = function (e) {
    var t = 0;
    for (var i = 0; i < e.length; i++) {
      t += e[i].width;
    }
    return t;
  };
  AlignmentHelper.getNextIndex = function (e, t, i) {
    if (AlignmentHelper.hasNext(e, t, i)) {
      if (t == AlignmentHelper.ALIGN_HORIZONTAL_FROM_LEFT || t == AlignmentHelper.ALIGN_VERTICAL_FROM_TOP) {
        return i + 1;
      } else {
        return i - 1;
      }
    } else {
      return -1;
    }
  };
  AlignmentHelper.hasNext = function (e, t, i) {
    if (t == AlignmentHelper.ALIGN_HORIZONTAL_FROM_LEFT || t == AlignmentHelper.ALIGN_VERTICAL_FROM_TOP) {
      return i + 1 >= 0 && i + 1 < e.length;
    } else {
      return i - 1 >= 0 && i - 1 < e.length;
    }
  };
  AlignmentHelper.ALIGN_HORIZONTAL_FROM_LEFT = 0;
  AlignmentHelper.ALIGN_HORIZONTAL_FROM_RIGHT = 1;
  AlignmentHelper.ALIGN_VERTICAL_FROM_TOP = 2;
  AlignmentHelper.ALIGN_VERTICAL_FROM_BOTTOM = 3;
  AlignmentHelper._validAlignmentTypes = [AlignmentHelper.ALIGN_VERTICAL_FROM_BOTTOM, AlignmentHelper.ALIGN_HORIZONTAL_FROM_LEFT, AlignmentHelper.ALIGN_HORIZONTAL_FROM_RIGHT, AlignmentHelper.ALIGN_VERTICAL_FROM_TOP];
  return AlignmentHelper;
}();
exports.AlignmentHelper = a;