function codegen(e, t) {
  if (typeof e == "string") {
    t = e;
    e = undefined;
  }
  var n = [];
  function Codegen(e) {
    if (typeof e != "string") {
      var t = toString();
      if (codegen.verbose) {
        console.log("codegen: " + t);
      }
      t = "return " + t;
      if (e) {
        for (var i = Object.keys(e), a = new Array(i.length + 1), s = new Array(i.length), r = 0; r < i.length;) {
          a[r] = i[r];
          s[r] = e[i[r++]];
        }
        a[r] = t;
        return Function.apply(null, a).apply(null, s);
      }
      return Function(t)();
    }
    for (var o = new Array(arguments.length - 1), l = 0; l < o.length;) {
      o[l] = arguments[++l];
    }
    l = 0;
    e = e.replace(/%([%dfijs])/g, function replace(e, t) {
      var n = o[l++];
      switch (t) {
        case "d":
        case "f":
          return String(Number(n));
        case "i":
          return String(Math.floor(n));
        case "j":
          return JSON.stringify(n);
        case "s":
          return String(n);
      }
      return "%";
    });
    if (l !== o.length) {
      throw Error("parameter count mismatch");
    }
    n.push(e);
    return Codegen;
  }
  function toString(i) {
    return "function " + (i || t || "") + "(" + (e && e.join(",") || "") + "){\n  " + n.join("\n  ") + "\n}";
  }
  Codegen.toString = toString;
  return Codegen;
}
module.exports = codegen;
codegen.verbose = false;