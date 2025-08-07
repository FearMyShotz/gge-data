Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./6.js");
var a = require("./41.js");
var s = function () {
  function PaginationDots(e, t, i) {
    this._dotSpace = 15;
    this._dotY = 0;
    this._dots = [];
    this._container = e;
    this._pagination = t;
    if (!i) {
      throw new ReferenceError("dotMc must not be null!");
    }
    this._dotMc = i;
    this._dotMc.visible = false;
    this._dotClass = i.constructor;
    this._dotY = o.int(i.y);
    if (!this._dotClass) {
      throw new ReferenceError("dotClass must not be null!");
    }
    this.init();
  }
  PaginationDots.prototype.init = function () {
    this.removeDots();
    if (this._pagination.enabled) {
      var e;
      var t = this._dotSpace * (this._pagination.maxPages - 1);
      for (var i = 0; i < this._pagination.maxPages; i++) {
        (e = new this._dotClass()).x = t * -0.5 + this._dotSpace * i;
        e.y = this._dotY;
        e.actLikeButton = true;
        e.mouseChildren = false;
        this._dots.push(e);
        this._container.addDot(e);
      }
    }
  };
  PaginationDots.prototype.removeDots = function () {
    if (this._dots != null) {
      for (var e = 0, t = this._dots; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.parent.removeChild(i);
        }
      }
    }
    this._dots = [];
  };
  PaginationDots.prototype.update = function () {
    for (var e = o.int(this._dots.length - 1); e >= 0; e--) {
      this._container.highlightDot(this._dots[e], e == this._pagination.currentPageIndex);
    }
  };
  PaginationDots.prototype.disable = function () {
    this.removeDots();
  };
  PaginationDots.prototype.enable = function () {
    this.init();
    this.update();
  };
  PaginationDots.prototype.onClick = function (e) {
    for (var t = o.int(this._dots.length - 1); t >= 0; t--) {
      if (a.CastleMovieClipHelper.getFirstMovieClipParent(e.target) == this._dots[t]) {
        this._pagination.currentPage = t + 1;
        return true;
      }
    }
    return false;
  };
  PaginationDots.prototype.setToolTips = function (e) {
    for (var t = 0; t < this._dots.length; t++) {
      var i = this._dots[t];
      if (e.length > t) {
        i.toolTipText = e[t];
      } else {
        i.toolTipText = e[e.length - 1];
      }
    }
  };
  return PaginationDots;
}();
exports.PaginationDots = s;
n.classImplementsInterfaces(s, "IPaginationControl");