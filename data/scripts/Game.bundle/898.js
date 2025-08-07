Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function AdvancedTroopsSelectionStrategyBasics() {}
  AdvancedTroopsSelectionStrategyBasics.prototype.getExchangeableSlots = function (e, t) {
    var i = [];
    if (t != null) {
      for (var n = 0, o = t; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined && a.unitVO && a.getWodId() != e.wodId) {
          i.push(a);
        }
      }
    }
    return i;
  };
  AdvancedTroopsSelectionStrategyBasics.prototype.getFreeAndSameSlots = function (e, t) {
    var i = [];
    if (t != null) {
      for (var n = 0, o = t; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined && (a.isFree() || a.unitVO && a.getWodId() == e.wodId)) {
          i.push(a);
        }
      }
    }
    return i;
  };
  AdvancedTroopsSelectionStrategyBasics.prototype.getSameSlots = function (e, t) {
    var i = [];
    if (t != null) {
      for (var n = 0, o = t; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined && a.unitVO && a.getWodId() == e.wodId) {
          i.push(a);
        }
      }
    }
    return i;
  };
  AdvancedTroopsSelectionStrategyBasics.prototype.getFreeSlots = function (e, t) {
    var i = [];
    if (t != null) {
      for (var n = 0, o = t; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined && a.isFree()) {
          i.push(a);
        }
      }
    }
    return i;
  };
  return AdvancedTroopsSelectionStrategyBasics;
}();
exports.AdvancedTroopsSelectionStrategyBasics = n;