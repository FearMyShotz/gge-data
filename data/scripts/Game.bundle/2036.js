Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CollectableParserC2SCosts() {}
  CollectableParserC2SCosts.prototype.createCostsListForServer = function (e) {
    var t = e.clone();
    t.combineDuplicatedItems();
    var i;
    var n;
    var o = [];
    for (var a = 0; a < t.length; ++a) {
      if (n = (i = t.getItemByIndex(a)).itemType.serverKey) {
        o.push([n, i.amount]);
      }
    }
    return o;
  };
  return CollectableParserC2SCosts;
}();
exports.CollectableParserC2SCosts = n;