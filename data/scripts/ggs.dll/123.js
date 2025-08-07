Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function MathBase() {
    throw new Error("MathBase is a static class and cannot be instantiated.");
  }
  MathBase.toFloatString = function (e, t = 4) {
    t = Math.pow(10, t);
    return (Math.round(e * t) / t).toString();
  };
  MathBase.max = function () {
    var e = [];
    for (var t = 0; t < arguments.length; t++) {
      e[t] = arguments[t];
    }
    return MathBase.maxArray(e);
  };
  MathBase.min = function () {
    var e = [];
    for (var t = 0; t < arguments.length; t++) {
      e[t] = arguments[t];
    }
    return MathBase.minArray(e);
  };
  MathBase.maxArray = function (e) {
    return Math.max.apply(MathBase, e);
  };
  MathBase.minArray = function (e) {
    return Math.min.apply(MathBase, e);
  };
  MathBase.floor = function (e, t) {
    var n = Math.pow(10, t);
    return Math.floor(e * n) / n;
  };
  MathBase.ceil = function (e, t) {
    var n = Math.pow(10, t);
    return Math.ceil(e * n) / n;
  };
  MathBase.round = function (e, t) {
    return Math.round(e * Math.pow(10, t)) / Math.pow(10, t);
  };
  MathBase.random = function (e, t, n = true) {
    if (n) {
      return Math.round(Math.random() * (t - e)) + e;
    } else {
      return Math.random() * (t - e) + e;
    }
  };
  MathBase.constrain = function (e, t, n) {
    if (e < t) {
      e = t;
    } else if (e > n) {
      e = n;
    }
    return e;
  };
  MathBase.clamp = function (e, t, n) {
    if (e < t) {
      return t;
    } else if (e > n) {
      return n;
    } else {
      return e;
    }
  };
  MathBase.limit = function (e, t, n, i = false) {
    if (!i) {
      return MathBase.clamp(e, t, n);
    }
    while (e > n) {
      e -= n - t;
    }
    while (e < t) {
      e += n - t;
    }
    return e;
  };
  MathBase.distance = function (e, t, n, i) {
    var a = e - t;
    var s = n - i;
    return Math.sqrt(a * a + s * s);
  };
  MathBase.proportion = function (e, t, n, i, a = 1) {
    return (i - n) / (t - e) * ((a || 1) - e) + n;
  };
  MathBase.percent = function (e, t) {
    if (t == 0) {
      return 0;
    } else {
      return e / t * 100;
    }
  };
  MathBase.isPositive = function (e) {
    return e >= 0;
  };
  MathBase.isNegative = function (e) {
    return e < 0;
  };
  MathBase.isOdd = function (e) {
    return ~~e % 2 == 1;
  };
  MathBase.isEven = function (e) {
    return ~~e % 2 == 0;
  };
  MathBase.isPrime = function (e) {
    if (e > 2 && e % 2 == 0) {
      return false;
    }
    for (var t = Math.sqrt(e), n = 3; n <= t; n += 2) {
      if (e % n == 0) {
        return false;
      }
    }
    return true;
  };
  MathBase.factorial = function (e) {
    if (e == 0) {
      return 1;
    }
    var t = e.valueOf();
    for (var n = t - 1; n;) {
      t *= n;
      n--;
    }
    return t;
  };
  MathBase.getDivisors = function (e) {
    var t = new Array();
    for (var n = 1, i = e / 2; n <= i; n++) {
      if (e % n == 0) {
        t.push(n);
      }
    }
    if (e != 0) {
      t.push(e.valueOf());
    }
    return t;
  };
  MathBase.isInteger = function (e) {
    return e % 1 == 0;
  };
  MathBase.isNatural = function (e) {
    return e >= 0 && e % 1 == 0;
  };
  MathBase.sanitizeFloat = function (e, t = 5) {
    var n = Math.pow(10, t);
    return Math.round(n * e) / n;
  };
  MathBase.fuzzyEqual = function (e, t, n = 5) {
    var i = e - t;
    var a = Math.pow(10, -n);
    return i < a && i > -a;
  };
  MathBase.getSign = function (e) {
    if (e < 0) {
      return -1;
    } else {
      return 1;
    }
  };
  return MathBase;
}();
exports.MathBase = i;