module.exports = parse;
parse.filename = null;
parse.defaults = {
  keepCase: false
};
var i = require("./516.js");
var a = require("./209.js");
var s = require("./204.js");
var r = require("./69.js");
var o = require("./205.js");
var l = require("./130.js");
var u = require("./46.js");
var c = require("./206.js");
var _ = require("./207.js");
var d = require("./87.js");
var m = require("./27.js");
var h = /^[1-9][0-9]*$/;
var p = /^-?[1-9][0-9]*$/;
var g = /^0[x][0-9a-fA-F]+$/;
var E = /^-?0[x][0-9a-fA-F]+$/;
var C = /^0[0-7]+$/;
var f = /^-?0[0-7]+$/;
var T = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/;
var S = /^[a-zA-Z_][a-zA-Z_0-9]*$/;
var y = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/;
var I = /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/;
function parse(e, t, n) {
  if (!(t instanceof a)) {
    n = t;
    t = new a();
  }
  n ||= parse.defaults;
  var v;
  var A;
  var O;
  var L;
  var D;
  var b = i(e, n.alternateCommentMode || false);
  var N = b.next;
  var R = b.push;
  var P = b.peek;
  var B = b.skip;
  var M = b.cmnt;
  var F = true;
  var U = false;
  var G = t;
  var w = n.keepCase ? function (e) {
    return e;
  } : m.camelCase;
  function illegal(e, t, n) {
    var i = parse.filename;
    if (!n) {
      parse.filename = null;
    }
    return Error("illegal " + (t || "token") + " '" + e + "' (" + (i ? i + ", " : "") + "line " + b.line + ")");
  }
  function readString() {
    var e;
    var t = [];
    do {
      if ((e = N()) !== "\"" && e !== "'") {
        throw illegal(e);
      }
      t.push(N());
      B(e);
      e = P();
    } while (e === "\"" || e === "'");
    return t.join("");
  }
  function readValue(e) {
    var t = N();
    switch (t) {
      case "'":
      case "\"":
        R(t);
        return readString();
      case "true":
      case "TRUE":
        return true;
      case "false":
      case "FALSE":
        return false;
    }
    try {
      return function parseNumber(e, t) {
        var n = 1;
        if (e.charAt(0) === "-") {
          n = -1;
          e = e.substring(1);
        }
        switch (e) {
          case "inf":
          case "INF":
          case "Inf":
            return n * Infinity;
          case "nan":
          case "NAN":
          case "Nan":
          case "NaN":
            return NaN;
          case "0":
            return 0;
        }
        if (h.test(e)) {
          return n * parseInt(e, 10);
        }
        if (g.test(e)) {
          return n * parseInt(e, 16);
        }
        if (C.test(e)) {
          return n * parseInt(e, 8);
        }
        if (T.test(e)) {
          return n * parseFloat(e);
        }
        throw illegal(e, "number", t);
      }(t, true);
    } catch (n) {
      if (e && y.test(t)) {
        return t;
      }
      throw illegal(t, "value");
    }
  }
  function readRanges(e, t) {
    var n;
    var i;
    do {
      if (!t || (n = P()) !== "\"" && n !== "'") {
        e.push([i = parseId(N()), B("to", true) ? parseId(N()) : i]);
      } else {
        e.push(readString());
      }
    } while (B(",", true));
    B(";");
  }
  function parseId(e, t) {
    switch (e) {
      case "max":
      case "MAX":
      case "Max":
        return 536870911;
      case "0":
        return 0;
    }
    if (!t && e.charAt(0) === "-") {
      throw illegal(e, "id");
    }
    if (p.test(e)) {
      return parseInt(e, 10);
    }
    if (E.test(e)) {
      return parseInt(e, 16);
    }
    if (f.test(e)) {
      return parseInt(e, 8);
    }
    throw illegal(e, "id");
  }
  function parsePackage() {
    if (v !== undefined) {
      throw illegal("package");
    }
    v = N();
    if (!y.test(v)) {
      throw illegal(v, "name");
    }
    G = G.define(v);
    B(";");
  }
  function parseImport() {
    var e;
    var t = P();
    switch (t) {
      case "weak":
        e = O ||= [];
        N();
        break;
      case "public":
        N();
      default:
        e = A ||= [];
    }
    t = readString();
    B(";");
    e.push(t);
  }
  function parseSyntax() {
    B("=");
    L = readString();
    if (!(U = L === "proto3") && L !== "proto2") {
      throw illegal(L, "syntax");
    }
    B(";");
  }
  function parseCommon(e, t) {
    switch (t) {
      case "option":
        parseOption(e, t);
        B(";");
        return true;
      case "message":
        (function parseType(e, t) {
          if (!S.test(t = N())) {
            throw illegal(t, "type name");
          }
          var n = new s(t);
          ifBlock(n, function parseType_block(e) {
            if (!parseCommon(n, e)) {
              switch (e) {
                case "map":
                  (function parseMapField(e) {
                    B("<");
                    var t = N();
                    if (d.mapKey[t] === undefined) {
                      throw illegal(t, "type");
                    }
                    B(",");
                    var n = N();
                    if (!y.test(n)) {
                      throw illegal(n, "type");
                    }
                    B(">");
                    var i = N();
                    if (!S.test(i)) {
                      throw illegal(i, "name");
                    }
                    B("=");
                    var a = new o(w(i), parseId(N()), t, n);
                    ifBlock(a, function parseMapField_block(e) {
                      if (e !== "option") {
                        throw illegal(e);
                      }
                      parseOption(a, e);
                      B(";");
                    }, function parseMapField_line() {
                      parseInlineOptions(a);
                    });
                    e.add(a);
                  })(n);
                  break;
                case "required":
                case "optional":
                case "repeated":
                  parseField(n, e);
                  break;
                case "oneof":
                  (function parseOneOf(e, t) {
                    if (!S.test(t = N())) {
                      throw illegal(t, "name");
                    }
                    var n = new l(w(t));
                    ifBlock(n, function parseOneOf_block(e) {
                      if (e === "option") {
                        parseOption(n, e);
                        B(";");
                      } else {
                        R(e);
                        parseField(n, "optional");
                      }
                    });
                    e.add(n);
                  })(n, e);
                  break;
                case "extensions":
                  readRanges(n.extensions ||= []);
                  break;
                case "reserved":
                  readRanges(n.reserved ||= [], true);
                  break;
                default:
                  if (!U || !y.test(e)) {
                    throw illegal(e);
                  }
                  R(e);
                  parseField(n, "optional");
              }
            }
          });
          e.add(n);
        })(e, t);
        return true;
      case "enum":
        (function parseEnum(e, t) {
          if (!S.test(t = N())) {
            throw illegal(t, "name");
          }
          var n = new u(t);
          ifBlock(n, function parseEnum_block(e) {
            switch (e) {
              case "option":
                parseOption(n, e);
                B(";");
                break;
              case "reserved":
                readRanges(n.reserved ||= [], true);
                break;
              default:
                (function parseEnumValue(e, t) {
                  if (!S.test(t)) {
                    throw illegal(t, "name");
                  }
                  B("=");
                  var n = parseId(N(), true);
                  var i = {};
                  ifBlock(i, function parseEnumValue_block(e) {
                    if (e !== "option") {
                      throw illegal(e);
                    }
                    parseOption(i, e);
                    B(";");
                  }, function parseEnumValue_line() {
                    parseInlineOptions(i);
                  });
                  e.add(t, n, i.comment);
                })(n, e);
            }
          });
          e.add(n);
        })(e, t);
        return true;
      case "service":
        (function parseService(e, t) {
          if (!S.test(t = N())) {
            throw illegal(t, "service name");
          }
          var n = new c(t);
          ifBlock(n, function parseService_block(e) {
            if (!parseCommon(n, e)) {
              if (e !== "rpc") {
                throw illegal(e);
              }
              (function parseMethod(e, t) {
                var n = t;
                if (!S.test(t = N())) {
                  throw illegal(t, "name");
                }
                var i;
                var a;
                var s;
                var r;
                var o = t;
                B("(");
                if (B("stream", true)) {
                  a = true;
                }
                if (!y.test(t = N())) {
                  throw illegal(t);
                }
                i = t;
                B(")");
                B("returns");
                B("(");
                if (B("stream", true)) {
                  r = true;
                }
                if (!y.test(t = N())) {
                  throw illegal(t);
                }
                s = t;
                B(")");
                var l = new _(o, n, i, s, a, r);
                ifBlock(l, function parseMethod_block(e) {
                  if (e !== "option") {
                    throw illegal(e);
                  }
                  parseOption(l, e);
                  B(";");
                });
                e.add(l);
              })(n, e);
            }
          });
          e.add(n);
        })(e, t);
        return true;
      case "extend":
        (function parseExtension(e, t) {
          if (!y.test(t = N())) {
            throw illegal(t, "reference");
          }
          var n = t;
          ifBlock(null, function parseExtension_block(t) {
            switch (t) {
              case "required":
              case "repeated":
              case "optional":
                parseField(e, t, n);
                break;
              default:
                if (!U || !y.test(t)) {
                  throw illegal(t);
                }
                R(t);
                parseField(e, "optional", n);
            }
          });
        })(e, t);
        return true;
    }
    return false;
  }
  function ifBlock(e, t, n) {
    var i = b.line;
    if (e) {
      e.comment = M();
      e.filename = parse.filename;
    }
    if (B("{", true)) {
      for (var a; (a = N()) !== "}";) {
        t(a);
      }
      B(";", true);
    } else {
      if (n) {
        n();
      }
      B(";");
      if (e && typeof e.comment != "string") {
        e.comment = M(i);
      }
    }
  }
  function parseField(e, t, n) {
    var i = N();
    if (i !== "group") {
      if (!y.test(i)) {
        throw illegal(i, "type");
      }
      var a = N();
      if (!S.test(a)) {
        throw illegal(a, "name");
      }
      a = w(a);
      B("=");
      var o = new r(a, parseId(N()), i, t, n);
      ifBlock(o, function parseField_block(e) {
        if (e !== "option") {
          throw illegal(e);
        }
        parseOption(o, e);
        B(";");
      }, function parseField_line() {
        parseInlineOptions(o);
      });
      e.add(o);
      if (!U && !!o.repeated && (d.packed[i] !== undefined || d.basic[i] === undefined)) {
        o.setOption("packed", false, true);
      }
    } else {
      (function parseGroup(e, t) {
        var n = N();
        if (!S.test(n)) {
          throw illegal(n, "name");
        }
        var i = m.lcFirst(n);
        if (n === i) {
          n = m.ucFirst(n);
        }
        B("=");
        var a = parseId(N());
        var o = new s(n);
        o.group = true;
        var l = new r(i, a, n, t);
        l.filename = parse.filename;
        ifBlock(o, function parseGroup_block(e) {
          switch (e) {
            case "option":
              parseOption(o, e);
              B(";");
              break;
            case "required":
            case "optional":
            case "repeated":
              parseField(o, e);
              break;
            default:
              throw illegal(e);
          }
        });
        e.add(o).add(l);
      })(e, t);
    }
  }
  function parseOption(e, t) {
    var n = B("(", true);
    if (!y.test(t = N())) {
      throw illegal(t, "name");
    }
    var i = t;
    if (n) {
      B(")");
      i = "(" + i + ")";
      t = P();
      if (I.test(t)) {
        i += t;
        N();
      }
    }
    B("=");
    parseOptionValue(e, i);
  }
  function parseOptionValue(e, t) {
    if (B("{", true)) {
      do {
        if (!S.test(D = N())) {
          throw illegal(D, "name");
        }
        if (P() === "{") {
          parseOptionValue(e, t + "." + D);
        } else {
          B(":");
          if (P() === "{") {
            parseOptionValue(e, t + "." + D);
          } else {
            setOption(e, t + "." + D, readValue(true));
          }
        }
        B(",", true);
      } while (!B("}", true));
    } else {
      setOption(e, t, readValue(true));
    }
  }
  function setOption(e, t, n) {
    if (e.setOption) {
      e.setOption(t, n);
    }
  }
  function parseInlineOptions(e) {
    if (B("[", true)) {
      do {
        parseOption(e, "option");
      } while (B(",", true));
      B("]");
    }
    return e;
  }
  while ((D = N()) !== null) {
    switch (D) {
      case "package":
        if (!F) {
          throw illegal(D);
        }
        parsePackage();
        break;
      case "import":
        if (!F) {
          throw illegal(D);
        }
        parseImport();
        break;
      case "syntax":
        if (!F) {
          throw illegal(D);
        }
        parseSyntax();
        break;
      case "option":
        if (!F) {
          throw illegal(D);
        }
        parseOption(G, D);
        B(";");
        break;
      default:
        if (parseCommon(G, D)) {
          F = false;
          continue;
        }
        throw illegal(D);
    }
  }
  parse.filename = null;
  return {
    package: v,
    imports: A,
    weakImports: O,
    syntax: L,
    root: t
  };
}