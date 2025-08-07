Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./72.js");
var a = require("./78.js");
var s = require("./1107.js");
var r = function (e) {
  function CastleAdvancedTroopSelectionItemInfiniteScrollList(t, i) {
    var n = e.call(this, t, i) || this;
    n.dispatcher = new o.CastleEventDispatcher();
    return n;
  }
  n.__extends(CastleAdvancedTroopSelectionItemInfiniteScrollList, e);
  CastleAdvancedTroopSelectionItemInfiniteScrollList.prototype.onValueChange = function (e) {
    this.dispatcher.dispatchEvent(new s.CastleAdvancedTroopSelectionInfiniteEvent(e.scrollItem, s.CastleAdvancedTroopSelectionInfiniteEvent.UNIT_SELECTION_CHANGED));
  };
  CastleAdvancedTroopSelectionItemInfiniteScrollList.prototype.updateWithNewData = function (t, i = true) {
    e.prototype.updateWithNewData.call(this, t, i);
    if (this._items != null) {
      for (var n = 0, o = this._items; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          a.dispatcher.addEventListener(s.CastleAdvancedTroopSelectionInfiniteEvent.UNIT_SELECTION_CHANGED, this.bindFunction(this.onValueChange));
        }
      }
    }
  };
  CastleAdvancedTroopSelectionItemInfiniteScrollList.prototype.updateLimits = function () {
    if (this._items != null) {
      for (var e = 0, t = this._items; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.updateSelection();
        }
      }
    }
  };
  return CastleAdvancedTroopSelectionItemInfiniteScrollList;
}(a.InfiniteScrollListComponent);
exports.CastleAdvancedTroopSelectionItemInfiniteScrollList = r;