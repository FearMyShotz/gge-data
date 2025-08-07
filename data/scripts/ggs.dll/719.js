function ownKeys(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    if (t) {
      i = i.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      });
    }
    n.push.apply(n, i);
  }
  return n;
}
function _defineProperty(e, t, n) {
  if (t in e) {
    Object.defineProperty(e, t, {
      value: n,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    e[t] = n;
  }
  return e;
}
function _defineProperties(e, t) {
  for (var n = 0; n < t.length; n++) {
    var i = t[n];
    i.enumerable = i.enumerable || false;
    i.configurable = true;
    if ("value" in i) {
      i.writable = true;
    }
    Object.defineProperty(e, i.key, i);
  }
}
var i = require("./93.js").Buffer;
var a = require("./720.js").inspect;
var s = a && a.custom || "inspect";
module.exports = function () {
  function BufferList() {
    (function _classCallCheck(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, BufferList);
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  (function _createClass(e, t, n) {
    if (t) {
      _defineProperties(e.prototype, t);
    }
    if (n) {
      _defineProperties(e, n);
    }
    return e;
  })(BufferList, [{
    key: "push",
    value: function push(e) {
      var t = {
        data: e,
        next: null
      };
      if (this.length > 0) {
        this.tail.next = t;
      } else {
        this.head = t;
      }
      this.tail = t;
      ++this.length;
    }
  }, {
    key: "unshift",
    value: function unshift(e) {
      var t = {
        data: e,
        next: this.head
      };
      if (this.length === 0) {
        this.tail = t;
      }
      this.head = t;
      ++this.length;
    }
  }, {
    key: "shift",
    value: function shift() {
      if (this.length !== 0) {
        var e = this.head.data;
        if (this.length === 1) {
          this.head = this.tail = null;
        } else {
          this.head = this.head.next;
        }
        --this.length;
        return e;
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      this.head = this.tail = null;
      this.length = 0;
    }
  }, {
    key: "join",
    value: function join(e) {
      if (this.length === 0) {
        return "";
      }
      for (var t = this.head, n = "" + t.data; t = t.next;) {
        n += e + t.data;
      }
      return n;
    }
  }, {
    key: "concat",
    value: function concat(e) {
      if (this.length === 0) {
        return i.alloc(0);
      }
      var t;
      var n;
      var a;
      var s = i.allocUnsafe(e >>> 0);
      for (var r = this.head, o = 0; r;) {
        t = r.data;
        n = s;
        a = o;
        i.prototype.copy.call(t, n, a);
        o += r.data.length;
        r = r.next;
      }
      return s;
    }
  }, {
    key: "consume",
    value: function consume(e, t) {
      var n;
      if (e < this.head.data.length) {
        n = this.head.data.slice(0, e);
        this.head.data = this.head.data.slice(e);
      } else {
        n = e === this.head.data.length ? this.shift() : t ? this._getString(e) : this._getBuffer(e);
      }
      return n;
    }
  }, {
    key: "first",
    value: function first() {
      return this.head.data;
    }
  }, {
    key: "_getString",
    value: function _getString(e) {
      var t = this.head;
      var n = 1;
      var i = t.data;
      for (e -= i.length; t = t.next;) {
        var a = t.data;
        var s = e > a.length ? a.length : e;
        if (s === a.length) {
          i += a;
        } else {
          i += a.slice(0, e);
        }
        if ((e -= s) === 0) {
          if (s === a.length) {
            ++n;
            if (t.next) {
              this.head = t.next;
            } else {
              this.head = this.tail = null;
            }
          } else {
            this.head = t;
            t.data = a.slice(s);
          }
          break;
        }
        ++n;
      }
      this.length -= n;
      return i;
    }
  }, {
    key: "_getBuffer",
    value: function _getBuffer(e) {
      var t = i.allocUnsafe(e);
      var n = this.head;
      var a = 1;
      n.data.copy(t);
      e -= n.data.length;
      while (n = n.next) {
        var s = n.data;
        var r = e > s.length ? s.length : e;
        s.copy(t, t.length - e, 0, r);
        if ((e -= r) === 0) {
          if (r === s.length) {
            ++a;
            if (n.next) {
              this.head = n.next;
            } else {
              this.head = this.tail = null;
            }
          } else {
            this.head = n;
            n.data = s.slice(r);
          }
          break;
        }
        ++a;
      }
      this.length -= a;
      return t;
    }
  }, {
    key: s,
    value: function value(e, t) {
      return a(this, function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t] ?? {};
          if (t % 2) {
            ownKeys(Object(n), true).forEach(function (t) {
              _defineProperty(e, t, n[t]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
          } else {
            ownKeys(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
          }
        }
        return e;
      }({}, t, {
        depth: 0,
        customInspect: false
      }));
    }
  }]);
  return BufferList;
}();