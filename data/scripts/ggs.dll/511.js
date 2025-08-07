module.exports = function encoder(e) {
  var t;
  var n = s.codegen(["m", "w"], e.name + "$encode")("if(!w)")("w=Writer.create()");
  for (var r = e.fieldsArray.slice().sort(s.compareFieldsById), o = 0; o < r.length; ++o) {
    var l = r[o].resolve();
    var u = e._fieldsArray.indexOf(l);
    var c = l.resolvedType instanceof i ? "int32" : l.type;
    var _ = a.basic[c];
    t = "m" + s.safeProp(l.name);
    if (l.map) {
      n("if(%s!=null&&m.hasOwnProperty(%j)){", t, l.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", t)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (l.id << 3 | 2) >>> 0, a.mapKey[l.keyType] | 8, l.keyType);
      if (_ === undefined) {
        n("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", u, t);
      } else {
        n(".uint32(%i).%s(%s[ks[i]]).ldelim()", _ | 16, c, t);
      }
      n("}")("}");
    } else if (l.repeated) {
      n("if(%s!=null&&%s.length){", t, t);
      if (l.packed && a.packed[c] !== undefined) {
        n("w.uint32(%i).fork()", (l.id << 3 | 2) >>> 0)("for(var i=0;i<%s.length;++i)", t)("w.%s(%s[i])", c, t)("w.ldelim()");
      } else {
        n("for(var i=0;i<%s.length;++i)", t);
        if (_ === undefined) {
          genTypePartial(n, l, u, t + "[i]");
        } else {
          n("w.uint32(%i).%s(%s[i])", (l.id << 3 | _) >>> 0, c, t);
        }
      }
      n("}");
    } else {
      if (l.optional) {
        n("if(%s!=null&&m.hasOwnProperty(%j))", t, l.name);
      }
      if (_ === undefined) {
        genTypePartial(n, l, u, t);
      } else {
        n("w.uint32(%i).%s(%s)", (l.id << 3 | _) >>> 0, c, t);
      }
    }
  }
  return n("return w");
};
var i = require("./46.js");
var a = require("./87.js");
var s = require("./27.js");
function genTypePartial(e, t, n, i) {
  if (t.resolvedType.group) {
    return e("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", n, i, (t.id << 3 | 3) >>> 0, (t.id << 3 | 4) >>> 0);
  } else {
    return e("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", n, i, (t.id << 3 | 2) >>> 0);
  }
}