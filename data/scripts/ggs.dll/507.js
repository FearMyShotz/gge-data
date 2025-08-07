module.exports = function asPromise(e, t) {
  var n = new Array(arguments.length - 1);
  var i = 0;
  var a = 2;
  var s = true;
  while (a < arguments.length) {
    n[i++] = arguments[a++];
  }
  return new Promise(function executor(a, r) {
    n[i] = function callback(e) {
      if (s) {
        s = false;
        if (e) {
          r(e);
        } else {
          for (var t = new Array(arguments.length - 1), n = 0; n < t.length;) {
            t[n++] = arguments[n];
          }
          a.apply(null, t);
        }
      }
    };
    try {
      e.apply(t || null, n);
    } catch (e) {
      if (s) {
        s = false;
        r(e);
      }
    }
  });
};