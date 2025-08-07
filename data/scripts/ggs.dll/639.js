Object.defineProperty(exports, "__esModule", {
  value: true
});
function i(e) {
  return function (t) {
    function n(t) {
      if (e) {
        return "(" + t + ")";
      } else {
        return t;
      }
    }
    switch (t.tag) {
      case "always":
      case "never":
      case "void":
      case "boolean":
      case "number":
      case "string":
      case "function":
        return t.tag;
      case "literal":
        var a = t.value;
        if (typeof a == "string") {
          return "\"" + a + "\"";
        } else {
          return String(a);
        }
      case "array":
        return i(true)(t.element) + "[]";
      case "dictionary":
        return "{ [_: " + t.key + "]: " + i(false)(t.value) + " }";
      case "record":
        if ((s = Object.keys(t.fields)).length) {
          return "{ " + s.map(function (e) {
            return e + ": " + i(false)(t.fields[e]) + ";";
          }).join(" ") + " }";
        } else {
          return "{}";
        }
      case "partial":
        var s;
        if ((s = Object.keys(t.fields)).length) {
          return "{ " + s.map(function (e) {
            return e + "?: " + i(false)(t.fields[e]) + ";";
          }).join(" ") + " }";
        } else {
          return "{}";
        }
      case "tuple":
        return "[" + t.components.map(i(false)).join(", ") + "]";
      case "union":
        return n("" + t.alternatives.map(i(true)).join(" | "));
      case "intersect":
        return n("" + t.intersectees.map(i(true)).join(" & "));
      case "constraint":
        return i(e)(t.underlying);
      case "instanceof":
        return "InstanceOf<" + t.ctor.name + ">";
    }
  };
}
exports.default = i(false);