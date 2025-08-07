var n = new Map([["a", 1], ["b", 2], ["c", 3]]);
var i = Array.from(n.values());
if (i.length != 3 || i[0] != 1 || i[1] != 2 || i[2] != 3) {
  Map.prototype.values = function () {
    var e = [];
    this.forEach(function (t) {
      e.push(t);
    });
    return e.values();
  };
}
Object.assign(Map.prototype, {
  toArray: function () {
    return Array.from(this.values());
  },
  hasKey: function (e) {
    return this.has(e);
  },
  add: function (e, t) {
    this.set(e, t);
    return true;
  }
});