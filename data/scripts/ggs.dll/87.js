var i = exports;
var a = require("./27.js");
var s = ["double", "float", "int32", "uint32", "sint32", "fixed32", "sfixed32", "int64", "uint64", "sint64", "fixed64", "sfixed64", "bool", "string", "bytes"];
function bake(e, t) {
  var n = 0;
  var i = {};
  for (t |= 0; n < e.length;) {
    i[s[n + t]] = e[n++];
  }
  return i;
}
i.basic = bake([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2]);
i.defaults = bake([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, false, "", a.emptyArray, null]);
i.long = bake([0, 0, 0, 1, 1], 7);
i.mapKey = bake([0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2], 2);
i.packed = bake([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0]);