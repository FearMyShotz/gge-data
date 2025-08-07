Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function Pagination(e, t, i = true, n = false) {
    this._maxPages = 0;
    this._currentPage = 1;
    this._currentPageIndex = 0;
    this._controls = [];
    this._enabled = false;
    this._cyclic = false;
    this._container = e;
    this._maxPages = t;
    this._enabled = i;
    this._cyclic = n;
    if (t < 1) {
      throw new Error("maxPages must not be < 1!");
    }
  }
  Object.defineProperty(Pagination.prototype, "maxPages", {
    get: function () {
      return this._maxPages;
    },
    set: function (e) {
      this._maxPages = e;
      this.reset();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Pagination.prototype, "currentPageIndex", {
    get: function () {
      return this._currentPageIndex;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Pagination.prototype, "currentPage", {
    get: function () {
      return this._currentPage;
    },
    set: function (e) {
      if (this._currentPage != e && (this._cyclic && e < 1 ? e = this._maxPages + e % this._maxPages : this._cyclic && e > this.maxPages && (e %= this._maxPages), !(e < 1) && !(e > this._maxPages))) {
        this._currentPage = e;
        var t = this._currentPageIndex;
        this._currentPageIndex = e - 1;
        this.updateElements();
        this._container.updatePages(t, this._currentPageIndex);
      }
    },
    enumerable: true,
    configurable: true
  });
  Pagination.prototype.canScrollLeft = function () {
    return this._cyclic && this._maxPages > 1 || this._currentPage > 1;
  };
  Pagination.prototype.canScrollRight = function () {
    return this._cyclic && this._maxPages > 1 || this._currentPage < this._maxPages;
  };
  Pagination.prototype.scrollLeft = function () {
    return this.scroll(Pagination.SCROLL_LEFT);
  };
  Pagination.prototype.scrollRight = function () {
    return this.scroll(Pagination.SCROLL_RIGHT);
  };
  Pagination.prototype.scroll = function (e) {
    return (!!this._cyclic || !(this._currentPage + e < 1)) && (!!this._cyclic || !(this._currentPage + e > this._maxPages)) && (this.currentPage = this._currentPage + e, true);
  };
  Pagination.prototype.updateElements = function () {
    if (this._enabled != 0 && this._controls != null) {
      for (var e = 0, t = this._controls; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.update();
        }
      }
    }
  };
  Pagination.prototype.reset = function () {
    this._currentPage = 1;
    this._currentPageIndex = 0;
    if (this._enabled != 0) {
      this.updateElements();
      this._container.updatePages(0, 0);
    }
  };
  Pagination.prototype.handleClick = function (e) {
    if (this._enabled == 0 || !o.ButtonHelper.isButtonEnabled(e.target)) {
      return false;
    }
    if (this._controls != null) {
      for (var t = 0, i = this._controls; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.onClick(e)) {
          return true;
        }
      }
    }
    return false;
  };
  Pagination.prototype.disable = function () {
    if (this._enabled != 0 && (this._enabled = false, this._controls != null)) {
      for (var e = 0, t = this._controls; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.disable();
        }
      }
    }
  };
  Pagination.prototype.enable = function () {
    if (this._enabled != 1 && (this._enabled = true, this._controls != null)) {
      for (var e = 0, t = this._controls; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.enable();
        }
      }
    }
  };
  Object.defineProperty(Pagination.prototype, "enabled", {
    get: function () {
      return this._enabled;
    },
    enumerable: true,
    configurable: true
  });
  Pagination.prototype.addControl = function (e) {
    this._controls.push(e);
    if (this._enabled == 1) {
      e.update();
    }
  };
  Pagination.__initialize_static_members = function () {
    Pagination.SCROLL_RIGHT = 1;
  };
  Pagination.SCROLL_LEFT = -1;
  return Pagination;
}();
exports.Pagination = n;
var o = require("./8.js");
n.__initialize_static_members();