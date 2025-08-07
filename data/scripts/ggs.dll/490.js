Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function IndexedPriorityQueue(e) {
    this._size = 0;
    this._indexValues = [];
    this._compareValues = e;
    this._size = 0;
  }
  IndexedPriorityQueue.prototype.sortInto = function (e) {
    this._size++;
    this._indexValues[this._size] = e;
    this.sortUpTheHeap(this._size);
  };
  IndexedPriorityQueue.prototype.pop = function () {
    var e = this._indexValues[1];
    this._indexValues[1] = this._indexValues[this._size];
    this.sortDownTheHeap(1);
    this._size--;
    return e;
  };
  IndexedPriorityQueue.prototype.length = function () {
    return this._size;
  };
  IndexedPriorityQueue.prototype.sortUpTheHeap = function (e) {
    var t = this._indexValues[e];
    var n = this._compareValues[t];
    for (var i = e >> 1; i > 0;) {
      var a = this._indexValues[i];
      if (!(n < this._compareValues[a])) {
        break;
      }
      this._indexValues[e] = a;
      e = i;
      i >>= 1;
    }
    this._indexValues[e] = t;
  };
  IndexedPriorityQueue.prototype.sortDownTheHeap = function (e) {
    for (var t, n = this._indexValues[e], i = this._compareValues[n], a = e << 1; a < this._size && (a < this._size - 1 && this._compareValues[this._indexValues[a]] > this._compareValues[this._indexValues[a + 1]] && a++, t = this._indexValues[a], i > this._compareValues[t]);) {
      this._indexValues[e] = t;
      e = a;
      a <<= 1;
    }
    this._indexValues[e] = n;
  };
  return IndexedPriorityQueue;
}();
exports.IndexedPriorityQueue = i;