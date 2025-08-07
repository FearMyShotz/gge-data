Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./897.js");
var a = require("./8.js");
var s = function (e) {
  function CastleAdvancedTroopSelectionItemScrollList(t, i = null, n = null, o = null) {
    var s = e.call(this, t, i, n, o) || this;
    a.ButtonHelper.initSmallButtons([s._componentDisp.btn_up, s._componentDisp.btn_down]);
    return s;
  }
  n.__extends(CastleAdvancedTroopSelectionItemScrollList, e);
  CastleAdvancedTroopSelectionItemScrollList.prototype.onValueChange = function (e) {
    this.dispatchEvent(new o.CastleAdvancedTroopSelectionEvent(e.scrollItem, o.CastleAdvancedTroopSelectionEvent.UNIT_SELECTION_CHANGED));
  };
  CastleAdvancedTroopSelectionItemScrollList.prototype.updateItemList = function (t = 0) {
    e.prototype.updateItemList.call(this, t);
    if (this.veList != null) {
      for (var i = 0, n = this.veList; i < n.length; i++) {
        var a = n[i];
        if (a !== undefined) {
          if (a.visible) {
            a.addEventListener(o.CastleAdvancedTroopSelectionEvent.UNIT_SELECTION_CHANGED, this.bindFunction(this.onValueChange));
          } else {
            a.removeEventListener(o.CastleAdvancedTroopSelectionEvent.UNIT_SELECTION_CHANGED, this.bindFunction(this.onValueChange));
          }
        }
      }
    }
  };
  CastleAdvancedTroopSelectionItemScrollList.prototype.updateLimits = function () {
    if (this.veList != null) {
      for (var e = 0, t = this.veList; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.updateSelection();
        }
      }
    }
  };
  return CastleAdvancedTroopSelectionItemScrollList;
}(require("./314.js").SliderItemScrollList);
exports.CastleAdvancedTroopSelectionItemScrollList = s;