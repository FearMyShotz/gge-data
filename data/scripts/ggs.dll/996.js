function EventEmitter() {
  this._listeners = {};
}
module.exports = EventEmitter;
EventEmitter.prototype.on = function on(e, t, n) {
  (this._listeners[e] ||= []).push({
    fn: t,
    ctx: n || this
  });
  return this;
};
EventEmitter.prototype.off = function off(e, t) {
  if (e === undefined) {
    this._listeners = {};
  } else if (t === undefined) {
    this._listeners[e] = [];
  } else {
    for (var n = this._listeners[e], i = 0; i < n.length;) {
      if (n[i].fn === t) {
        n.splice(i, 1);
      } else {
        ++i;
      }
    }
  }
  return this;
};
EventEmitter.prototype.emit = function emit(e) {
  var t = this._listeners[e];
  if (t) {
    var n = [];
    for (var i = 1; i < arguments.length;) {
      n.push(arguments[i++]);
    }
    for (i = 0; i < t.length;) {
      t[i].fn.apply(t[i++].ctx, n);
    }
  }
  return this;
};