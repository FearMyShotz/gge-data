Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.MouseEvent;
var o = function () {
  function CastleTableSorter() {}
  CastleTableSorter.prototype.init = function (e, t, i) {
    if (this._columnSorters) {
      this.destroy();
    }
    this._sortableList = e;
    this._changedCallback = t;
    this._columnSorters = i;
    this._currentSortingVO = null;
    this.forceSort(i[0]);
  };
  CastleTableSorter.prototype.show = function () {
    this._columnSorters.forEach(this.bindFunction(this.addClickListener));
  };
  CastleTableSorter.prototype.hide = function () {
    if (this._columnSorters) {
      this._columnSorters.forEach(this.bindFunction(this.removeClickListener));
    }
  };
  CastleTableSorter.prototype.destroy = function () {
    if (this._columnSorters) {
      this.hide();
      this._columnSorters = null;
      this._changedCallback = null;
      this._sortableList = null;
    }
  };
  CastleTableSorter.prototype.forceSort = function (e) {
    if (e != this._currentSortingVO) {
      this._currentSortingVO = e;
      this._currentSortingVO.isInAscendingOrder = false;
    }
    this._sortableList.sort(e.comparer);
    e.isInAscendingOrder = !e.isInAscendingOrder;
    if (!e.isInAscendingOrder) {
      this._sortableList.reverse();
    }
  };
  CastleTableSorter.prototype.addClickListener = function (e) {
    var t = [];
    for (var i = 1; i < arguments.length; i++) {
      t[i - 1] = arguments[i];
    }
    e.sortingTrigger.addEventListener(n.CLICK, this.bindFunction(this.onColumnClick));
  };
  CastleTableSorter.prototype.removeClickListener = function (e) {
    var t = [];
    for (var i = 1; i < arguments.length; i++) {
      t[i - 1] = arguments[i];
    }
    e.sortingTrigger.removeEventListener(n.CLICK, this.bindFunction(this.onColumnClick));
  };
  CastleTableSorter.prototype.onColumnClick = function (e) {
    var t = null;
    if (this._columnSorters != null) {
      for (var i = 0, n = this._columnSorters; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o.sortingTrigger == e.target) {
          this.forceSort(o);
          t = o;
          break;
        }
      }
    }
    if (t != null) {
      this._changedCallback(t);
    }
  };
  Object.defineProperty(CastleTableSorter.prototype, "currentSortingVO", {
    get: function () {
      return this._currentSortingVO;
    },
    enumerable: true,
    configurable: true
  });
  return CastleTableSorter;
}();
exports.CastleTableSorter = o;