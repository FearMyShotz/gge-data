Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./44.js");
var a = require("./37.js");
var s = createjs.Container;
var r = createjs.MovieClip;
var o = createjs.Event;
var l = createjs.Rectangle;
var u = require("./3.js");
var c = require("./2.js");
var _ = require("./126.js");
var d = c.getLogger("MovieClipHelper");
var m = function () {
  function MovieClipHelper() {}
  MovieClipHelper.stopAllMovies = function (e) {
    if (e) {
      if (e instanceof r) {
        e.stop();
      }
      for (var t = 0; t < e.numChildren; t++) {
        MovieClipHelper.stopAllMovies(e.getChildAt(t));
      }
    }
  };
  MovieClipHelper.stopAllMoviesGotoFrameOne = function (e) {
    if (e) {
      var t = e;
      if (t && t.totalFrames > 1) {
        t.gotoAndStop(1);
      }
      for (var n = 0; n < e.numChildren; n++) {
        if (e.getChildAt(n) instanceof r) {
          MovieClipHelper.stopAllMoviesGotoFrameOne(e.getChildAt(n));
        }
      }
    }
  };
  MovieClipHelper.playAllMovies = function (e) {
    if (e) {
      var t = e;
      if (t && t.totalFrames > 1) {
        t.play();
      }
      for (var n = 0; n < e.numChildren; n++) {
        if (e.getChildAt(n)) {
          MovieClipHelper.playAllMovies(e.getChildAt(n));
        }
      }
    }
  };
  MovieClipHelper.centerMovieClip = function (e, t, n, i = true) {
    var a = e.getBounds();
    var s = e.scaleX;
    if (i) {
      s = n / a.width;
      if (a.height * s > t) {
        s = t / a.height;
      }
    }
    e.x = -(a.width * s / 2 + a.left * s);
    e.y = -(a.height * s / 2 + a.top * s);
    e.scaleX = e.scaleY = s;
  };
  MovieClipHelper.isChildrenOf = function (e, t) {
    for (var n = e, i = false; !i && n.parent;) {
      if (n.parent == t) {
        i = true;
      } else {
        n = n.parent;
      }
    }
    return i;
  };
  MovieClipHelper.clearMovieClip = function (e) {
    if (e) {
      while (e.numChildren > 0) {
        var t = e.children[0];
        e.removeChildAt(0);
        if (t instanceof _.AbstractDisplayObjectClip) {
          t.dispose();
        }
      }
    } else {
      a.info("clearMovieClip called with null mc. Have a nice day debugging.");
    }
  };
  MovieClipHelper.replaceMovieClip = function (e, t = null) {
    if (t) {
      if (e.numChildren > 0) {
        if (e.getChildAt(0) instanceof t == 0) {
          MovieClipHelper.clearMovieClip(e);
          e.addChild(new t());
        }
      } else {
        e.addChild(new t());
      }
    } else {
      MovieClipHelper.clearMovieClip(e);
    }
  };
  MovieClipHelper.disableChildrenExceptList = function (e, t) {
    if (e) {
      for (var n = 0; n < e.numChildren; n++) {
        var i = e.getChildAt(n);
        for (var a = 0, s = t; a < s.length; a++) {
          var r = s[a];
          i.mouseEnabled = i == r || (i.mouseChildren = false);
        }
      }
    }
  };
  MovieClipHelper.getMovieClipByClassName = function (e) {
    try {
      return new (u.getDefinitionByName(e))();
    } catch (e) {
      return null;
    }
  };
  MovieClipHelper.getSpriteByClassName = function (e) {
    try {
      return new (u.getDefinitionByName(e)())();
    } catch (e) {
      return null;
    }
  };
  MovieClipHelper.secureGoto = function (e, t, n = false) {
    var i = 1;
    if (t.constructor === Number) {
      i = t;
      var a = e.totalFrames;
      if (i > a) {
        i = a;
      } else if (i <= 0) {
        i = 1;
      }
    } else {
      d.error("MovieClipHelper.secureGoto: goto frame by label not implemented.");
    }
    if (n) {
      e.gotoAndPlay(i);
    } else {
      e.gotoAndStop(i);
    }
  };
  MovieClipHelper.getVisibleSize = function (e) {
    if (e.width > 0 && e.height > 0) {
      var t = e.getBounds();
      return new l(t.x, t.y, Math.ceil(t.width), Math.ceil(t.height));
    }
    return new l(0, 0, 0, 0);
  };
  MovieClipHelper.scaleToFit = function (e, t, n) {
    var i = Math.min(t / (e.width / e.scaleX), n / (e.height / e.scaleY));
    e.scaleX = e.scaleY = i;
  };
  MovieClipHelper.scaleDownToFit = function (e, t, n) {
    var i = Math.min(t / (e.width / e.scaleX), n / (e.height / e.scaleY));
    if (i < e.scaleX) {
      e.scaleX = e.scaleY = i;
    }
  };
  MovieClipHelper.watchAnimationEnd = function (e, t = null) {
    e.addEventListener(o.ENTER_FRAME, this.bindFunction(function oef(n) {
      if (e.currentFrame == e.totalFrames) {
        e.removeEventListener(o.ENTER_FRAME, this.bindFunction(oef));
        e.stop();
        e.dispatchEvent(o.COMPLETE);
        if (t instanceof Function) {
          t(e);
        }
      }
    }));
  };
  MovieClipHelper.dissolveDisplayObjectContainer = function (e) {
    if (e) {
      var t = [];
      if (e instanceof s) {
        for (var n = e, a = 0; a < n.numChildren; a++) {
          var r = n.getChildAt(a);
          if (r instanceof s) {
            MovieClipHelper.dissolveDisplayObjectContainer(r);
          } else {
            t.push(r);
          }
        }
        while (n.numChildren > 0) {
          n.removeChildAt(0);
        }
        if (n.numChildren > 0) {
          i.error("ERROR");
        }
      }
    }
  };
  return MovieClipHelper;
}();
exports.MovieClipHelper = m;