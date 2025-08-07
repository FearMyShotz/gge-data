Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.MovieClip;
var o = createjs.ColorFilter;
var a = function () {
  function CrestHelper() {}
  CrestHelper.replaceIntoPlaceHolder = function (e, t) {
    var i = e.getBounds(e.parent);
    l.MovieClipHelper.replaceMovieClip(e, Library.CastleInterfaceElements.mc_crest);
    l.MovieClipHelper.scaleToFit(e, i.width, i.height);
    var n = u.castAs(e.getChildAt(0), "MovieClip");
    if (n) {
      CrestHelper.setCrestGraphics(n, t);
    }
  };
  CrestHelper.setCrestGraphics = function (e, t, i = null, n = false) {
    i ||= CrestHelper.DEFAULT_SIZE;
    CrestHelper.symbolSize = i;
    if (t) {
      if (n) {
        e.toolTipText = t.tooltipText;
        e.mouseChildren = false;
      }
      switch (t.backgroundType) {
        case r.ClientConstCrest.BACKGROUND_TYPE_ONE_PLAIN:
          CrestHelper.changeColor(e, 0, t.backgroundColor1);
          CrestHelper.changeColor(e, 1, t.backgroundColor1);
          CrestHelper.changeColor(e, 2, t.backgroundColor1);
          CrestHelper.changeColor(e, 3, t.backgroundColor1);
          break;
        case r.ClientConstCrest.BACKGROUND_TYPE_TWO_HORIZONTAL:
          CrestHelper.changeColor(e, 0, t.backgroundColor1);
          CrestHelper.changeColor(e, 1, t.backgroundColor2);
          CrestHelper.changeColor(e, 2, t.backgroundColor1);
          CrestHelper.changeColor(e, 3, t.backgroundColor2);
          break;
        case r.ClientConstCrest.BACKGROUND_TYPE_TWO_VERTICAL:
          CrestHelper.changeColor(e, 0, t.backgroundColor1);
          CrestHelper.changeColor(e, 1, t.backgroundColor1);
          CrestHelper.changeColor(e, 2, t.backgroundColor2);
          CrestHelper.changeColor(e, 3, t.backgroundColor2);
          break;
        case r.ClientConstCrest.BACKGROUND_TYPE_FOUR_X:
          CrestHelper.changeColor(e, 0, t.backgroundColor1);
          CrestHelper.changeColor(e, 1, t.backgroundColor2);
          CrestHelper.changeColor(e, 2, t.backgroundColor2);
          CrestHelper.changeColor(e, 3, t.backgroundColor1);
      }
      e.symbols.gotoAndStop(t.symbolPosType + 1);
      var o;
      for (var a = e.symbols, s = [], l = 0; l < a.numChildren; l++) {
        if ((o = a.getChildAt(l)).name.indexOf("c1") >= 0) {
          s.push(new Promise(function (e) {
            CrestHelper.addSymbol(o, t.symbolType1, t.symbolPosType, CrestHelper.getChangeSymbolColorCallback(o, t.symbolColor1, e));
          }));
        } else {
          s.push(new Promise(function (e) {
            CrestHelper.addSymbol(o, t.symbolType2, t.symbolPosType, CrestHelper.getChangeSymbolColorCallback(o, t.symbolColor2, e));
          }));
        }
      }
      return Promise.all(s);
    }
  };
  CrestHelper.getChangeSymbolColorCallback = function (e, t, i = null) {
    return function (n) {
      CrestHelper.changeSymbolColor(e, t);
      if (i) {
        i();
      }
    };
  };
  CrestHelper.addSymbol = function (e, t, i, n) {
    if (e && t) {
      l.MovieClipHelper.clearMovieClip(e);
      var o = p.int(CrestHelper.symbolSize[i][0]);
      var a = p.int(CrestHelper.symbolSize[i][1]);
      CrestHelper.getCrestSymbolGraphic(t, o, a, false, n, 1, null, e);
    }
  };
  CrestHelper.changeSymbolColor = function (e, t) {
    if (e.cacheCanvas) {
      g.CastleMovieClipHelper.uncacheSafe(e);
      e.filters = [];
    }
    var i = new c.ColorTransform();
    i.color = t;
    e.useFilters([new o(i.redMultiplier, i.greenMultiplier, i.blueMultiplier, i.alphaMultiplier, i.redOffset, i.greenOffset, i.blueOffset, i.alphaOffset)]);
  };
  CrestHelper.changeColor = function (e, t, i) {
    var n = new c.ColorTransform();
    n.color = i;
    e.colorChange["cc" + t].useFilters([new o(n.redMultiplier, n.greenMultiplier, n.blueMultiplier, n.alphaMultiplier, n.redOffset, n.greenOffset, n.blueOffset, n.alphaOffset)]);
  };
  CrestHelper.getPlayerOrFactionCrest = function (e) {
    if (!C.PlayerHelper.isNPCPlayer(e.playerID)) {
      switch (e.factionID) {
        case d.FactionConst.BLUE_FACTION:
          return s.FactionEventVO.BLUE_CREST_VO;
        case d.FactionConst.RED_FACTION:
          return s.FactionEventVO.RED_CREST_VO;
      }
    }
    return e.crest;
  };
  CrestHelper.getCrestSymbolGraphic = function (e, t, i, o = false, a = null, s = 1, r = null, l = null) {
    var c = l || new n();
    var u = o ? "lockedCrest" : e.graphicClassName;
    var d = new h.CastleGoodgameExternalClip(u, e.assetUrl, null, 0, true);
    d.alpha = s;
    c.addChild(d);
    c.mouseChildren = false;
    d.doWhenLoaded(g.CastleMovieClipHelper.getScaleAndCacheWithAntiAliasingOnLoaded(t, i));
    if (a) {
      d.doWhenLoaded(a);
    }
    return c;
  };
  CrestHelper.DEFAULT_SIZE = [[0, 0], [120, 120], [70, 100], [100, 60], [50, 50]];
  return CrestHelper;
}();
exports.CrestHelper = a;
var s = require("./202.js");
var r = require("./368.js");
var l = require("./2.js");
var c = require("./1.js");
var u = require("./1.js");
var d = require("./5.js");
var p = require("./6.js");
var h = require("./24.js");
var g = require("./41.js");
var C = require("./112.js");