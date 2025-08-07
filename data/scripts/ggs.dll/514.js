var i = exports;
var a = require("./46.js");
var s = require("./27.js");
function genValuePartial_fromObject(e, t, n, i) {
  if (t.resolvedType) {
    if (t.resolvedType instanceof a) {
      e("switch(d%s){", i);
      var s = t.resolvedType.values;
      for (var r = Object.keys(s), o = 0; o < r.length; ++o) {
        if (t.repeated && s[r[o]] === t.typeDefault) {
          e("default:");
        }
        e("case%j:", r[o])("case %i:", s[r[o]])("m%s=%j", i, s[r[o]])("break");
      }
      e("}");
    } else {
      e("if(typeof d%s!==\"object\")", i)("throw TypeError(%j)", t.fullName + ": object expected")("m%s=types[%i].fromObject(d%s)", i, n, i);
    }
  } else {
    var l = false;
    switch (t.type) {
      case "double":
      case "float":
        e("m%s=Number(d%s)", i, i);
        break;
      case "uint32":
      case "fixed32":
        e("m%s=d%s>>>0", i, i);
        break;
      case "int32":
      case "sint32":
      case "sfixed32":
        e("m%s=d%s|0", i, i);
        break;
      case "uint64":
        l = true;
      case "int64":
      case "sint64":
      case "fixed64":
      case "sfixed64":
        e("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", i, i, l)("else if(typeof d%s===\"string\")", i)("m%s=parseInt(d%s,10)", i, i)("else if(typeof d%s===\"number\")", i)("m%s=d%s", i, i)("else if(typeof d%s===\"object\")", i)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", i, i, i, l ? "true" : "");
        break;
      case "bytes":
        e("if(typeof d%s===\"string\")", i)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", i, i, i)("else if(d%s.length)", i)("m%s=d%s", i, i);
        break;
      case "string":
        e("m%s=String(d%s)", i, i);
        break;
      case "bool":
        e("m%s=Boolean(d%s)", i, i);
    }
  }
  return e;
}
function genValuePartial_toObject(e, t, n, i) {
  if (t.resolvedType) {
    if (t.resolvedType instanceof a) {
      e("d%s=o.enums===String?types[%i].values[m%s]:m%s", i, n, i, i);
    } else {
      e("d%s=types[%i].toObject(m%s,o)", i, n, i);
    }
  } else {
    var s = false;
    switch (t.type) {
      case "double":
      case "float":
        e("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", i, i, i, i);
        break;
      case "uint64":
        s = true;
      case "int64":
      case "sint64":
      case "fixed64":
      case "sfixed64":
        e("if(typeof m%s===\"number\")", i)("d%s=o.longs===String?String(m%s):m%s", i, i, i)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", i, i, i, i, s ? "true" : "", i);
        break;
      case "bytes":
        e("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", i, i, i, i, i);
        break;
      default:
        e("d%s=m%s", i, i);
    }
  }
  return e;
}
i.fromObject = function fromObject(e) {
  var t = e.fieldsArray;
  var n = s.codegen(["d"], e.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
  if (!t.length) {
    return n("return new this.ctor");
  }
  n("var m=new this.ctor");
  for (var i = 0; i < t.length; ++i) {
    var r = t[i].resolve();
    var o = s.safeProp(r.name);
    if (r.map) {
      n("if(d%s){", o)("if(typeof d%s!==\"object\")", o)("throw TypeError(%j)", r.fullName + ": object expected")("m%s={}", o)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", o);
      genValuePartial_fromObject(n, r, i, o + "[ks[i]]")("}")("}");
    } else if (r.repeated) {
      n("if(d%s){", o)("if(!Array.isArray(d%s))", o)("throw TypeError(%j)", r.fullName + ": array expected")("m%s=[]", o)("for(var i=0;i<d%s.length;++i){", o);
      genValuePartial_fromObject(n, r, i, o + "[i]")("}")("}");
    } else {
      if (!(r.resolvedType instanceof a)) {
        n("if(d%s!=null){", o);
      }
      genValuePartial_fromObject(n, r, i, o);
      if (!(r.resolvedType instanceof a)) {
        n("}");
      }
    }
  }
  return n("return m");
};
i.toObject = function toObject(e) {
  var t = e.fieldsArray.slice().sort(s.compareFieldsById);
  if (!t.length) {
    return s.codegen()("return {}");
  }
  var n = s.codegen(["m", "o"], e.name + "$toObject")("if(!o)")("o={}")("var d={}");
  var i = [];
  var r = [];
  var o = [];
  for (var l = 0; l < t.length; ++l) {
    if (!t[l].partOf) {
      (t[l].resolve().repeated ? i : t[l].map ? r : o).push(t[l]);
    }
  }
  if (i.length) {
    n("if(o.arrays||o.defaults){");
    l = 0;
    for (; l < i.length; ++l) {
      n("d%s=[]", s.safeProp(i[l].name));
    }
    n("}");
  }
  if (r.length) {
    n("if(o.objects||o.defaults){");
    l = 0;
    for (; l < r.length; ++l) {
      n("d%s={}", s.safeProp(r[l].name));
    }
    n("}");
  }
  if (o.length) {
    n("if(o.defaults){");
    l = 0;
    for (; l < o.length; ++l) {
      var u = o[l];
      var c = s.safeProp(u.name);
      if (u.resolvedType instanceof a) {
        n("d%s=o.enums===String?%j:%j", c, u.resolvedType.valuesById[u.typeDefault], u.typeDefault);
      } else if (u.long) {
        n("if(util.Long){")("var n=new util.Long(%i,%i,%j)", u.typeDefault.low, u.typeDefault.high, u.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", c)("}else")("d%s=o.longs===String?%j:%i", c, u.typeDefault.toString(), u.typeDefault.toNumber());
      } else if (u.bytes) {
        var _ = "[" + Array.prototype.slice.call(u.typeDefault).join(",") + "]";
        n("if(o.bytes===String)d%s=%j", c, String.fromCharCode.apply(String, u.typeDefault))("else{")("d%s=%s", c, _)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", c, c)("}");
      } else {
        n("d%s=%j", c, u.typeDefault);
      }
    }
    n("}");
  }
  var d = false;
  for (l = 0; l < t.length; ++l) {
    u = t[l];
    var m = e._fieldsArray.indexOf(u);
    c = s.safeProp(u.name);
    if (u.map) {
      if (!d) {
        d = true;
        n("var ks2");
      }
      n("if(m%s&&(ks2=Object.keys(m%s)).length){", c, c)("d%s={}", c)("for(var j=0;j<ks2.length;++j){");
      genValuePartial_toObject(n, u, m, c + "[ks2[j]]")("}");
    } else if (u.repeated) {
      n("if(m%s&&m%s.length){", c, c)("d%s=[]", c)("for(var j=0;j<m%s.length;++j){", c);
      genValuePartial_toObject(n, u, m, c + "[j]")("}");
    } else {
      n("if(m%s!=null&&m.hasOwnProperty(%j)){", c, u.name);
      genValuePartial_toObject(n, u, m, c);
      if (u.partOf) {
        n("if(o.oneofs)")("d%s=%j", s.safeProp(u.partOf.name), u.name);
      }
    }
    n("}");
  }
  return n("return d");
};