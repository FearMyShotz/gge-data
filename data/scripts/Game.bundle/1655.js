Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./8.js");
var u = require("./14.js");
var d = function (e) {
  function CastleBasicItemListScrollComponent(t = null, i = null, n = null, o = CastleBasicItemListScrollComponent.DEFAULT_SCROLL_STEP, a = 0, s = 0) {
    var r = this;
    r._currentScrollIndex = 0;
    r._currentPageIndex = 1;
    r._itemsPerPage = 0;
    r._amountOfItems = 0;
    r._startItemIndex = 0;
    CONSTRUCTOR_HACK;
    (r = e.call(this) || this)._itemsPerPage = o;
    r._amountOfItems = a;
    r._startItemIndex = s;
    if (t) {
      r.buttonDown = t;
    }
    if (i) {
      r.buttonUp = i;
    }
    if (n) {
      r.pageCounterTextField = n;
    }
    return r;
  }
  n.__extends(CastleBasicItemListScrollComponent, e);
  CastleBasicItemListScrollComponent.prototype.show = function (e) {
    if (!e) {
      throw new Error(" itemScrollList has not to be null! ");
    }
    this._itemScrollList = e;
    this.initPageNumber();
    this.updatePageNumber();
    this._itemScrollList.initList(this._currentScrollIndex, true);
    this.addEventListener();
  };
  CastleBasicItemListScrollComponent.prototype.hide = function () {
    this.removeEventListener();
    this._itemScrollList = null;
  };
  CastleBasicItemListScrollComponent.prototype.addEventListener = function () {
    this._itemScrollList.addEventListener(a.ScrollItemEvent.ON_SCROLL, this.bindFunction(this.onScroll));
  };
  CastleBasicItemListScrollComponent.prototype.removeEventListener = function () {
    if (this._itemScrollList) {
      this._itemScrollList.removeEventListener(a.ScrollItemEvent.ON_SCROLL, this.bindFunction(this.onScroll));
    }
  };
  CastleBasicItemListScrollComponent.prototype.initPageNumber = function () {
    var e = l.int(l.int(this._startItemIndex / this._itemsPerPage));
    if (e < this.pages) {
      this._currentPageIndex = e + 1;
      this._currentScrollIndex = l.int(e * this._itemsPerPage);
    } else {
      this._currentPageIndex = this.pages;
      this._currentScrollIndex = l.int((this.pages - 1) * this._itemsPerPage);
    }
  };
  CastleBasicItemListScrollComponent.prototype.onScroll = function (e) {
    var t = l.int(this._itemScrollList.currentStartIndex);
    if (t != this._currentScrollIndex) {
      if (this._currentScrollIndex < t) {
        this._currentPageIndex++;
      } else {
        this._currentPageIndex--;
      }
      this._currentScrollIndex = t - t % CastleBasicItemListScrollComponent.PAGE_SCROLL_STEP;
      this.updatePageNumber();
    }
  };
  CastleBasicItemListScrollComponent.prototype.updatePageNumber = function () {
    if (this._itxt_pageCounter) {
      this._itxt_pageCounter.textContentVO.textReplacements = [this._currentPageIndex, this.pages];
    }
  };
  Object.defineProperty(CastleBasicItemListScrollComponent.prototype, "pages", {
    get: function () {
      return l.int(Math.ceil(this._amountOfItems / this._itemsPerPage));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBasicItemListScrollComponent.prototype, "pageCounterTextField", {
    set: function (e) {
      if (this._itxt_pageCounter) {
        u.CastleComponent.textFieldManager.unregisterTextFieldByReference(this._itxt_pageCounter);
      }
      this._itxt_pageCounter = u.CastleComponent.textFieldManager.registerTextField(e, new r.LocalizedTextVO(o.GenericTextIds.VALUE_PROPORTIONAL_VALUE));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBasicItemListScrollComponent.prototype, "buttonUp", {
    set: function (e) {
      this._buttonUp = e;
      c.ButtonHelper.initBasicButton(this._buttonUp);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBasicItemListScrollComponent.prototype, "buttonDown", {
    set: function (e) {
      this._buttonDown = e;
      c.ButtonHelper.initBasicButton(this._buttonDown);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBasicItemListScrollComponent.prototype, "itemsPerPage", {
    set: function (e) {
      this._itemsPerPage = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBasicItemListScrollComponent.prototype, "startItemIndex", {
    set: function (e) {
      this._startItemIndex = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBasicItemListScrollComponent.prototype, "amountOfItems", {
    set: function (e) {
      this._amountOfItems = e;
    },
    enumerable: true,
    configurable: true
  });
  CastleBasicItemListScrollComponent.__initialize_static_members = function () {
    CastleBasicItemListScrollComponent.DEFAULT_SCROLL_STEP = 9;
    CastleBasicItemListScrollComponent.PAGE_SCROLL_STEP = 1;
  };
  return CastleBasicItemListScrollComponent;
}(u.CastleComponent);
exports.CastleBasicItemListScrollComponent = d;
s.classImplementsInterfaces(d, "ICollectableRendererList");
d.__initialize_static_members();