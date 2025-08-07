module.exports = function decoder(e) {
  var t = s.codegen(["r", "l"], e.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (e.fieldsArray.filter(function (e) {
    return e.map;
  }).length ? ",k" : ""))("while(r.pos<c){")("var t=r.uint32()");
  if (e.group) {
    t("if((t&7)===4)")("break");
  }
  t("switch(t>>>3){");
  for (var n = 0; n < e.fieldsArray.length; ++n) {
    var r = e._fieldsArray[n].resolve();
    var o = r.resolvedType instanceof i ? "int32" : r.type;
    var l = "m" + s.safeProp(r.name);
    t("case %i:", r.id);
    if (r.map) {
      t("r.skip().pos++")("if(%s===util.emptyObject)", l)("%s={}", l)("k=r.%s()", r.keyType)("r.pos++");
      if (a.long[r.keyType] !== undefined) {
        if (a.basic[o] === undefined) {
          t("%s[typeof k===\"object\"?util.longToHash(k):k]=types[%i].decode(r,r.uint32())", l, n);
        } else {
          t("%s[typeof k===\"object\"?util.longToHash(k):k]=r.%s()", l, o);
        }
      } else if (a.basic[o] === undefined) {
        t("%s[k]=types[%i].decode(r,r.uint32())", l, n);
      } else {
        t("%s[k]=r.%s()", l, o);
      }
    } else if (r.repeated) {
      t("if(!(%s&&%s.length))", l, l)("%s=[]", l);
      if (a.packed[o] !== undefined) {
        t("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", l, o)("}else");
      }
      if (a.basic[o] === undefined) {
        t(r.resolvedType.group ? "%s.push(types[%i].decode(r))" : "%s.push(types[%i].decode(r,r.uint32()))", l, n);
      } else {
        t("%s.push(r.%s())", l, o);
      }
    } else if (a.basic[o] === undefined) {
      t(r.resolvedType.group ? "%s=types[%i].decode(r)" : "%s=types[%i].decode(r,r.uint32())", l, n);
    } else {
      t("%s=r.%s()", l, o);
    }
    t("break");
  }
  t("default:")("r.skipType(t&7)")("break")("}")("}");
  n = 0;
  for (; n < e._fieldsArray.length; ++n) {
    var u = e._fieldsArray[n];
    if (u.required) {
      t("if(!m.hasOwnProperty(%j))", u.name)("throw util.ProtocolError(%j,{instance:m})", missing(u));
    }
  }
  return t("return m");
};
var i = require("./46.js");
var a = require("./87.js");
var s = require("./27.js");
function missing(e) {
  return "missing required '" + e.name + "'";
}