var n = Set.prototype.add;
Object.assign(Set.prototype, {
  add: function (e) {
    n.call(this, e);
    return true;
  },
  remove: Set.prototype.delete,
  toArray: function () {
    return Array.from(this.values());
  }
});