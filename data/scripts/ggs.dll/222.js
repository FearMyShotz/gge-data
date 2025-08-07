function sortOn(e, t, n) {
  if (arguments.length === 2 && typeof t == "number") {
    n = t;
    t = undefined;
  }
  if (!Array.isArray(t)) {
    t = [t];
  }
  if (!Array.isArray(n)) {
    n = [n];
  }
  if (t.length !== n.length) {
    n = new Array(t.length).fill(undefined);
  }
  var i = n[0] & sortOn.RETURNINDEXEDARRAY;
  if (i) {
    e = Array.from(e);
  }
  var a = t.map(function (e, t) {
    return function createComparisonFn(e, t) {
      if ((t = t || 0) & sortOn.UNIQUESORT) {
        throw new Error("UNIQUESORT is not implemented");
      }
      var n = [];
      if (e) {
        n.push(function getProperty() {
          return this[e];
        });
      }
      n.push(t & sortOn.NUMERIC ? function () {
        return parseFloat(this);
      } : function () {
        return typeof this == "string" && this || typeof this == "number" && "" + this || this && this.toString() || this;
      });
      if (t & sortOn.CASEINSENSITIVE) {
        n.push(String.prototype.toLowerCase);
      }
      n.apply = Array.prototype.reduce.bind(n, function (e, t) {
        return t.apply(e);
      });
      var i = t & sortOn.DESCENDING ? -1 : 1;
      var a = -i;
      return function comparisonFn(e, t) {
        e = n.apply(e);
        t = n.apply(t);
        if (e > t || e != null && t == null) {
          return i;
        } else if (e < t || e == null && t != null) {
          return a;
        } else {
          return 0;
        }
      };
    }(e, n[t]);
  });
  var s = e.sort(function comparisonFn(e, t) {
    return a.reduce(function (n, i) {
      return n || i(e, t);
    }, 0);
  });
  if (i) {
    return s;
  } else {
    return undefined;
  }
}
sortOn.defineConstants = function (e, t) {
  function constant(e) {
    return {
      get: function get() {
        return e;
      },
      set: function set() {
        throw new Error("trying to set read-only property");
      }
    };
  }
  if (arguments.length === 1) {
    t = false;
  }
  var n = {
    CASEINSENSITIVE: constant(1),
    DESCENDING: constant(2),
    UNIQUESORT: constant(4),
    RETURNINDEXEDARRAY: constant(8),
    NUMERIC: constant(16)
  };
  if (!!t || !Object.keys(n).some(function (t) {
    return e[t];
  })) {
    Object.defineProperties(e, n);
  }
};
sortOn.defineConstants(sortOn);
sortOn.extend = function (e, t) {
  if (arguments.length === 1) {
    t = false;
  }
  if (!!t || !e.prototype.hasOwnProperty("sortOn")) {
    Object.defineProperty(e.prototype, "sortOn", {
      enumerable: false,
      value: function value(e, t) {
        var n = Array.from(arguments);
        n.unshift(this);
        return sortOn.apply(this, n);
      }
    });
    sortOn.defineConstants(e, t);
  }
};
module.exports = sortOn;