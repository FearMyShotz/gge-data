var i;
var a;
var s;
/*!
 * Globalize v1.7.0 2021-08-02T11:53Z Released under the MIT license
 * http://git.io/TrdQbw
 */
a = [require("./42.js"), require("./57.js"), require("./66.js")];
if ((s = typeof (i = function (e, t) {
  var n;
  var i = t._alwaysArray;
  var a = t._createError;
  var s = t._isPlainObject;
  var r = t._runtimeBind;
  var o = t._validateDefaultLocale;
  var l = t._validate;
  var u = t._validateParameterPresence;
  var c = t._validateParameterType;
  var _ = t._validateParameterTypePlainObject;
  n = function () {
    /** @file messageformat.js - ICU PluralFormat + SelectFormat for JavaScript
     *  @author Alex Sexton - @SlexAxton
     *  @version 0.3.0-1
     *  @copyright 2012-2015 Alex Sexton, Eemeli Aro, and Contributors
     *  @license To use or fork, MIT. To contribute back, Dojo CLA  */
    function propname(e, t) {
      if (/^[A-Z_$][0-9A-Z_$]*$/i.test(e)) {
        if (t) {
          return t + "." + e;
        } else {
          return e;
        }
      }
      var n = JSON.stringify(e);
      if (t) {
        return t + "[" + n + "]";
      } else {
        return n;
      }
    }
    function MessageFormat(e, t, n) {
      this.lc = [e];
      this.runtime.pluralFuncs = {};
      this.runtime.pluralFuncs[this.lc[0]] = t;
      this.runtime.fmt = {};
      if (n) {
        for (var i in n) {
          this.runtime.fmt[i] = n[i];
        }
      }
    }
    MessageFormat._parse = function () {
      function SyntaxError(e, t, n, i, a, s) {
        this.message = e;
        this.expected = t;
        this.found = n;
        this.offset = i;
        this.line = a;
        this.column = s;
        this.name = "SyntaxError";
      }
      (function peg$subclass(e, t) {
        function ctor() {
          this.constructor = e;
        }
        ctor.prototype = t.prototype;
        e.prototype = new ctor();
      })(SyntaxError, Error);
      return {
        SyntaxError: SyntaxError,
        parse: function parse(e) {
          var t;
          var n = arguments.length > 1 ? arguments[1] : {};
          var i = {};
          var a = {
            start: peg$parsestart
          };
          var s = peg$parsestart;
          function r(e) {
            return {
              type: "messageFormatPattern",
              statements: e
            };
          }
          var o = i;
          var l = "{";
          var u = {
            type: "literal",
            value: "{",
            description: "\"{\""
          };
          var c = null;
          var _ = ",";
          var d = {
            type: "literal",
            value: ",",
            description: "\",\""
          };
          var m = "}";
          var h = {
            type: "literal",
            value: "}",
            description: "\"}\""
          };
          function p(e, t) {
            var n = {
              type: "messageFormatElement",
              argumentIndex: e
            };
            if (t && t.length) {
              n.elementFormat = t[1];
            } else {
              n.output = true;
            }
            return n;
          }
          var g = "plural";
          var E = {
            type: "literal",
            value: "plural",
            description: "\"plural\""
          };
          function C(e, t) {
            return {
              type: "elementFormat",
              key: e,
              val: t
            };
          }
          var f = "selectordinal";
          var T = {
            type: "literal",
            value: "selectordinal",
            description: "\"selectordinal\""
          };
          var S = "select";
          var y = {
            type: "literal",
            value: "select",
            description: "\"select\""
          };
          function I(e, t) {
            return {
              type: "elementFormat",
              key: e,
              val: t
            };
          }
          function v(e, t) {
            return {
              type: "pluralFormatPattern",
              pluralForms: t,
              offset: e || 0
            };
          }
          var A = "offset";
          var O = {
            type: "literal",
            value: "offset",
            description: "\"offset\""
          };
          var L = ":";
          var D = {
            type: "literal",
            value: ":",
            description: "\":\""
          };
          function b(e) {
            return e;
          }
          function N(e, t) {
            return {
              key: e,
              val: t
            };
          }
          function R(e) {
            return e;
          }
          var P = "=";
          var B = {
            type: "literal",
            value: "=",
            description: "\"=\""
          };
          function M(e) {
            return {
              type: "selectFormatPattern",
              pluralForms: e
            };
          }
          function F(e) {
            return e;
          }
          var U = "#";
          var G = {
            type: "literal",
            value: "#",
            description: "\"#\""
          };
          function w() {
            return {
              type: "octothorpe"
            };
          }
          function k(e) {
            return {
              type: "string",
              val: e.join("")
            };
          }
          var x = {
            type: "other",
            description: "identifier"
          };
          var W = /^[0-9a-zA-Z$_]/;
          var V = {
            type: "class",
            value: "[0-9a-zA-Z$_]",
            description: "[0-9a-zA-Z$_]"
          };
          var H = /^[^ \t\n\r,.+={}]/;
          var j = {
            type: "class",
            value: "[^ \\t\\n\\r,.+={}]",
            description: "[^ \\t\\n\\r,.+={}]"
          };
          function q(e) {
            return e;
          }
          function K(e) {
            return e.join("");
          }
          var Y = /^[^{}#\\\0-\x1F \t\n\r]/;
          var z = {
            type: "class",
            value: "[^{}#\\\\\\0-\\x1F \\t\\n\\r]",
            description: "[^{}#\\\\\\0-\\x1F \\t\\n\\r]"
          };
          function Z(e) {
            return e;
          }
          var X = "\\\\";
          var Q = {
            type: "literal",
            value: "\\\\",
            description: "\"\\\\\\\\\""
          };
          function $() {
            return "\\";
          }
          var J = "\\#";
          var ee = {
            type: "literal",
            value: "\\#",
            description: "\"\\\\#\""
          };
          function te() {
            return "#";
          }
          var ne = "\\{";
          var ie = {
            type: "literal",
            value: "\\{",
            description: "\"\\\\{\""
          };
          function ae() {
            return "{";
          }
          var se = "\\}";
          var re = {
            type: "literal",
            value: "\\}",
            description: "\"\\\\}\""
          };
          function oe() {
            return "}";
          }
          var le = "\\u";
          var ue = {
            type: "literal",
            value: "\\u",
            description: "\"\\\\u\""
          };
          function ce(e, t, n, i) {
            return String.fromCharCode(parseInt("0x" + e + t + n + i));
          }
          var _e = /^[0-9]/;
          var de = {
            type: "class",
            value: "[0-9]",
            description: "[0-9]"
          };
          function me(e) {
            return parseInt(e.join(""), 10);
          }
          var he = /^[0-9a-fA-F]/;
          var pe = {
            type: "class",
            value: "[0-9a-fA-F]",
            description: "[0-9a-fA-F]"
          };
          var ge = {
            type: "other",
            description: "whitespace"
          };
          function Ee(e) {
            return e.join("");
          }
          var Ce = /^[ \t\n\r]/;
          var fe = {
            type: "class",
            value: "[ \\t\\n\\r]",
            description: "[ \\t\\n\\r]"
          };
          var Te = 0;
          var Se = 0;
          var ye = {
            line: 1,
            column: 1,
            seenCR: false
          };
          var Ie = 0;
          var ve = [];
          var Ae = 0;
          if ("startRule" in n) {
            if (!(n.startRule in a)) {
              throw new Error("Can't start parsing from rule \"" + n.startRule + "\".");
            }
            s = a[n.startRule];
          }
          function peg$computePosDetails(t) {
            if (Se !== t) {
              if (Se > t) {
                Se = 0;
                ye = {
                  line: 1,
                  column: 1,
                  seenCR: false
                };
              }
              (function advance(t, n, i) {
                var a;
                var s;
                for (a = n; a < i; a++) {
                  if ((s = e.charAt(a)) === "\n") {
                    if (!t.seenCR) {
                      t.line++;
                    }
                    t.column = 1;
                    t.seenCR = false;
                  } else if (s === "\r" || s === "\u2028" || s === "\u2029") {
                    t.line++;
                    t.column = 1;
                    t.seenCR = true;
                  } else {
                    t.column++;
                    t.seenCR = false;
                  }
                }
              })(ye, Se, t);
              Se = t;
            }
            return ye;
          }
          function peg$fail(e) {
            if (!(Te < Ie)) {
              if (Te > Ie) {
                Ie = Te;
                ve = [];
              }
              ve.push(e);
            }
          }
          function peg$buildException(t, n, i) {
            var a = peg$computePosDetails(i);
            var s = i < e.length ? e.charAt(i) : null;
            if (n !== null) {
              (function cleanupExpected(e) {
                var t = 1;
                for (e.sort(function (e, t) {
                  if (e.description < t.description) {
                    return -1;
                  } else if (e.description > t.description) {
                    return 1;
                  } else {
                    return 0;
                  }
                }); t < e.length;) {
                  if (e[t - 1] === e[t]) {
                    e.splice(t, 1);
                  } else {
                    t++;
                  }
                }
              })(n);
            }
            return new SyntaxError(t !== null ? t : function buildMessage(e, t) {
              var n;
              var i;
              var a;
              var s = new Array(e.length);
              for (a = 0; a < e.length; a++) {
                s[a] = e[a].description;
              }
              n = e.length > 1 ? s.slice(0, -1).join(", ") + " or " + s[e.length - 1] : s[0];
              i = t ? "\"" + function stringEscape(e) {
                function hex(e) {
                  return e.charCodeAt(0).toString(16).toUpperCase();
                }
                return e.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\x08/g, "\\b").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\f/g, "\\f").replace(/\r/g, "\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g, function (e) {
                  return "\\x0" + hex(e);
                }).replace(/[\x10-\x1F\x80-\xFF]/g, function (e) {
                  return "\\x" + hex(e);
                }).replace(/[\u0180-\u0FFF]/g, function (e) {
                  return "\\u0" + hex(e);
                }).replace(/[\u1080-\uFFFF]/g, function (e) {
                  return "\\u" + hex(e);
                });
              }(t) + "\"" : "end of input";
              return "Expected " + n + " but " + i + " found.";
            }(n, s), n, s, i, a.line, a.column);
          }
          function peg$parsestart() {
            return peg$parsemessageFormatPattern();
          }
          function peg$parsemessageFormatPattern() {
            var e;
            var t;
            Te;
            e = [];
            if ((t = peg$parsemessageFormatElement()) === i && (t = peg$parsestring()) === i) {
              t = peg$parseoctothorpe();
            }
            while (t !== i) {
              e.push(t);
              if ((t = peg$parsemessageFormatElement()) === i && (t = peg$parsestring()) === i) {
                t = peg$parseoctothorpe();
              }
            }
            if (e !== i) {
              e = r(e);
            }
            return e;
          }
          function peg$parsemessageFormatElement() {
            var t;
            var n;
            var a;
            var s;
            var r;
            var g;
            t = Te;
            if (e.charCodeAt(Te) === 123) {
              n = l;
              Te++;
            } else {
              n = i;
              if (Ae === 0) {
                peg$fail(u);
              }
            }
            if (n !== i && peg$parse_() !== i && (a = peg$parseid()) !== i) {
              s = Te;
              if (e.charCodeAt(Te) === 44) {
                r = _;
                Te++;
              } else {
                r = i;
                if (Ae === 0) {
                  peg$fail(d);
                }
              }
              if (r !== i && (g = peg$parseelementFormat()) !== i) {
                s = r = [r, g];
              } else {
                Te = s;
                s = o;
              }
              if (s === i) {
                s = c;
              }
              if (s !== i && (r = peg$parse_()) !== i) {
                if (e.charCodeAt(Te) === 125) {
                  g = m;
                  Te++;
                } else {
                  g = i;
                  if (Ae === 0) {
                    peg$fail(h);
                  }
                }
                if (g !== i) {
                  n = p(a, s);
                  t = n;
                } else {
                  Te = t;
                  t = o;
                }
              } else {
                Te = t;
                t = o;
              }
            } else {
              Te = t;
              t = o;
            }
            return t;
          }
          function peg$parseelementFormat() {
            var t;
            var n;
            var a;
            var s;
            var r;
            var l;
            t = Te;
            if ((n = peg$parse_()) !== i) {
              if (e.substr(Te, 6) === g) {
                a = g;
                Te += 6;
              } else {
                a = i;
                if (Ae === 0) {
                  peg$fail(E);
                }
              }
              if (a !== i && (s = peg$parse_()) !== i) {
                if (e.charCodeAt(Te) === 44) {
                  r = _;
                  Te++;
                } else {
                  r = i;
                  if (Ae === 0) {
                    peg$fail(d);
                  }
                }
                if (r !== i && peg$parse_() !== i && (l = peg$parsepluralFormatPattern()) !== i && peg$parse_() !== i) {
                  n = C(a, l);
                  t = n;
                } else {
                  Te = t;
                  t = o;
                }
              } else {
                Te = t;
                t = o;
              }
            } else {
              Te = t;
              t = o;
            }
            if (t === i && (t = Te, (n = peg$parse_()) !== i ? (e.substr(Te, 13) === f ? (a = f, Te += 13) : (a = i, Ae === 0 && peg$fail(T)), a !== i && (s = peg$parse_()) !== i ? (e.charCodeAt(Te) === 44 ? (r = _, Te++) : (r = i, Ae === 0 && peg$fail(d)), r !== i && peg$parse_() !== i && (l = peg$parsepluralFormatPattern()) !== i && peg$parse_() !== i ? (n = C(a, l), t = n) : (Te = t, t = o)) : (Te = t, t = o)) : (Te = t, t = o), t === i && (t = Te, (n = peg$parse_()) !== i ? (e.substr(Te, 6) === S ? (a = S, Te += 6) : (a = i, Ae === 0 && peg$fail(y)), a !== i && (s = peg$parse_()) !== i ? (e.charCodeAt(Te) === 44 ? (r = _, Te++) : (r = i, Ae === 0 && peg$fail(d)), r !== i && peg$parse_() !== i && (l = function peg$parseselectFormatPattern() {
              var e;
              var t;
              Te;
              e = [];
              if ((t = peg$parseselectForm()) !== i) {
                while (t !== i) {
                  e.push(t);
                  t = peg$parseselectForm();
                }
              } else {
                e = o;
              }
              if (e !== i) {
                e = M(e);
              }
              return e;
            }()) !== i && peg$parse_() !== i ? (n = C(a, l), t = n) : (Te = t, t = o)) : (Te = t, t = o)) : (Te = t, t = o), t === i))) {
              t = Te;
              if ((n = peg$parse_()) !== i) {
                if ((a = peg$parseid()) !== i) {
                  s = [];
                  r = peg$parseargStylePattern();
                  while (r !== i) {
                    s.push(r);
                    r = peg$parseargStylePattern();
                  }
                  if (s !== i) {
                    n = I(a, s);
                    t = n;
                  } else {
                    Te = t;
                    t = o;
                  }
                } else {
                  Te = t;
                  t = o;
                }
              } else {
                Te = t;
                t = o;
              }
            }
            return t;
          }
          function peg$parsepluralFormatPattern() {
            var t;
            var n;
            var a;
            var s;
            t = Te;
            if ((n = function peg$parseoffsetPattern() {
              var t;
              var n;
              var a;
              var s;
              var r;
              t = Te;
              if ((n = peg$parse_()) !== i) {
                if (e.substr(Te, 6) === A) {
                  a = A;
                  Te += 6;
                } else {
                  a = i;
                  if (Ae === 0) {
                    peg$fail(O);
                  }
                }
                if (a !== i && peg$parse_() !== i) {
                  if (e.charCodeAt(Te) === 58) {
                    s = L;
                    Te++;
                  } else {
                    s = i;
                    if (Ae === 0) {
                      peg$fail(D);
                    }
                  }
                  if (s !== i && peg$parse_() !== i && (r = peg$parsedigits()) !== i && peg$parse_() !== i) {
                    n = b(r);
                    t = n;
                  } else {
                    Te = t;
                    t = o;
                  }
                } else {
                  Te = t;
                  t = o;
                }
              } else {
                Te = t;
                t = o;
              }
              return t;
            }()) === i) {
              n = c;
            }
            if (n !== i) {
              a = [];
              if ((s = peg$parsepluralForm()) !== i) {
                while (s !== i) {
                  a.push(s);
                  s = peg$parsepluralForm();
                }
              } else {
                a = o;
              }
              if (a !== i) {
                n = v(n, a);
                t = n;
              } else {
                Te = t;
                t = o;
              }
            } else {
              Te = t;
              t = o;
            }
            return t;
          }
          function peg$parsepluralForm() {
            var t;
            var n;
            var a;
            var s;
            var r;
            var c;
            t = Te;
            if ((n = peg$parse_()) !== i && (a = function peg$parsepluralKey() {
              var t;
              var n;
              var a;
              t = Te;
              if ((n = peg$parseid()) !== i) {
                n = R(n);
              }
              if ((t = n) === i) {
                t = Te;
                if (e.charCodeAt(Te) === 61) {
                  n = P;
                  Te++;
                } else {
                  n = i;
                  if (Ae === 0) {
                    peg$fail(B);
                  }
                }
                if (n !== i && (a = peg$parsedigits()) !== i) {
                  n = b(a);
                  t = n;
                } else {
                  Te = t;
                  t = o;
                }
              }
              return t;
            }()) !== i && peg$parse_() !== i) {
              if (e.charCodeAt(Te) === 123) {
                s = l;
                Te++;
              } else {
                s = i;
                if (Ae === 0) {
                  peg$fail(u);
                }
              }
              if (s !== i && peg$parse_() !== i && (r = peg$parsemessageFormatPattern()) !== i && peg$parse_() !== i) {
                if (e.charCodeAt(Te) === 125) {
                  c = m;
                  Te++;
                } else {
                  c = i;
                  if (Ae === 0) {
                    peg$fail(h);
                  }
                }
                if (c !== i) {
                  n = N(a, r);
                  t = n;
                } else {
                  Te = t;
                  t = o;
                }
              } else {
                Te = t;
                t = o;
              }
            } else {
              Te = t;
              t = o;
            }
            return t;
          }
          function peg$parseselectForm() {
            var t;
            var n;
            var a;
            var s;
            var r;
            var c;
            t = Te;
            if ((n = peg$parse_()) !== i && (a = peg$parseid()) !== i && peg$parse_() !== i) {
              if (e.charCodeAt(Te) === 123) {
                s = l;
                Te++;
              } else {
                s = i;
                if (Ae === 0) {
                  peg$fail(u);
                }
              }
              if (s !== i && peg$parse_() !== i && (r = peg$parsemessageFormatPattern()) !== i && peg$parse_() !== i) {
                if (e.charCodeAt(Te) === 125) {
                  c = m;
                  Te++;
                } else {
                  c = i;
                  if (Ae === 0) {
                    peg$fail(h);
                  }
                }
                if (c !== i) {
                  n = N(a, r);
                  t = n;
                } else {
                  Te = t;
                  t = o;
                }
              } else {
                Te = t;
                t = o;
              }
            } else {
              Te = t;
              t = o;
            }
            return t;
          }
          function peg$parseargStylePattern() {
            var t;
            var n;
            var a;
            var s;
            t = Te;
            if ((n = peg$parse_()) !== i) {
              if (e.charCodeAt(Te) === 44) {
                a = _;
                Te++;
              } else {
                a = i;
                if (Ae === 0) {
                  peg$fail(d);
                }
              }
              if (a !== i && peg$parse_() !== i && (s = peg$parseid()) !== i && peg$parse_() !== i) {
                n = F(s);
                t = n;
              } else {
                Te = t;
                t = o;
              }
            } else {
              Te = t;
              t = o;
            }
            return t;
          }
          function peg$parseoctothorpe() {
            var t;
            Te;
            if (e.charCodeAt(Te) === 35) {
              t = U;
              Te++;
            } else {
              t = i;
              if (Ae === 0) {
                peg$fail(G);
              }
            }
            if (t !== i) {
              t = w();
            }
            return t;
          }
          function peg$parsestring() {
            var e;
            var t;
            Te;
            e = [];
            if ((t = peg$parsechars()) === i) {
              t = peg$parsewhitespace();
            }
            if (t !== i) {
              while (t !== i) {
                e.push(t);
                if ((t = peg$parsechars()) === i) {
                  t = peg$parsewhitespace();
                }
              }
            } else {
              e = o;
            }
            if (e !== i) {
              e = k(e);
            }
            return e;
          }
          function peg$parseid() {
            var t;
            var n;
            var a;
            var s;
            var r;
            var l;
            var u;
            Ae++;
            t = Te;
            if ((n = peg$parse_()) !== i) {
              a = Te;
              s = Te;
              if (W.test(e.charAt(Te))) {
                r = e.charAt(Te);
                Te++;
              } else {
                r = i;
                if (Ae === 0) {
                  peg$fail(V);
                }
              }
              if (r !== i) {
                l = [];
                if (H.test(e.charAt(Te))) {
                  u = e.charAt(Te);
                  Te++;
                } else {
                  u = i;
                  if (Ae === 0) {
                    peg$fail(j);
                  }
                }
                while (u !== i) {
                  l.push(u);
                  if (H.test(e.charAt(Te))) {
                    u = e.charAt(Te);
                    Te++;
                  } else {
                    u = i;
                    if (Ae === 0) {
                      peg$fail(j);
                    }
                  }
                }
                if (l !== i) {
                  s = r = [r, l];
                } else {
                  Te = s;
                  s = o;
                }
              } else {
                Te = s;
                s = o;
              }
              if (s !== i) {
                s = e.substring(a, Te);
              }
              if ((a = s) !== i && (s = peg$parse_()) !== i) {
                n = q(a);
                t = n;
              } else {
                Te = t;
                t = o;
              }
            } else {
              Te = t;
              t = o;
            }
            Ae--;
            if (t === i) {
              n = i;
              if (Ae === 0) {
                peg$fail(x);
              }
            }
            return t;
          }
          function peg$parsechars() {
            var e;
            var t;
            Te;
            e = [];
            if ((t = peg$parsechar()) !== i) {
              while (t !== i) {
                e.push(t);
                t = peg$parsechar();
              }
            } else {
              e = o;
            }
            if (e !== i) {
              e = K(e);
            }
            return e;
          }
          function peg$parsechar() {
            var t;
            var n;
            var a;
            var s;
            var r;
            var l;
            t = Te;
            if (Y.test(e.charAt(Te))) {
              n = e.charAt(Te);
              Te++;
            } else {
              n = i;
              if (Ae === 0) {
                peg$fail(z);
              }
            }
            if (n !== i) {
              n = Z(n);
            }
            if ((t = n) === i) {
              t = Te;
              if (e.substr(Te, 2) === X) {
                n = X;
                Te += 2;
              } else {
                n = i;
                if (Ae === 0) {
                  peg$fail(Q);
                }
              }
              if (n !== i) {
                n = $();
              }
              if ((t = n) === i) {
                t = Te;
                if (e.substr(Te, 2) === J) {
                  n = J;
                  Te += 2;
                } else {
                  n = i;
                  if (Ae === 0) {
                    peg$fail(ee);
                  }
                }
                if (n !== i) {
                  n = te();
                }
                if ((t = n) === i) {
                  t = Te;
                  if (e.substr(Te, 2) === ne) {
                    n = ne;
                    Te += 2;
                  } else {
                    n = i;
                    if (Ae === 0) {
                      peg$fail(ie);
                    }
                  }
                  if (n !== i) {
                    n = ae();
                  }
                  if ((t = n) === i) {
                    t = Te;
                    if (e.substr(Te, 2) === se) {
                      n = se;
                      Te += 2;
                    } else {
                      n = i;
                      if (Ae === 0) {
                        peg$fail(re);
                      }
                    }
                    if (n !== i) {
                      n = oe();
                    }
                    if ((t = n) === i) {
                      t = Te;
                      if (e.substr(Te, 2) === le) {
                        n = le;
                        Te += 2;
                      } else {
                        n = i;
                        if (Ae === 0) {
                          peg$fail(ue);
                        }
                      }
                      if (n !== i && (a = peg$parsehexDigit()) !== i && (s = peg$parsehexDigit()) !== i && (r = peg$parsehexDigit()) !== i && (l = peg$parsehexDigit()) !== i) {
                        n = ce(a, s, r, l);
                        t = n;
                      } else {
                        Te = t;
                        t = o;
                      }
                    }
                  }
                }
              }
            }
            return t;
          }
          function peg$parsedigits() {
            var t;
            var n;
            Te;
            t = [];
            if (_e.test(e.charAt(Te))) {
              n = e.charAt(Te);
              Te++;
            } else {
              n = i;
              if (Ae === 0) {
                peg$fail(de);
              }
            }
            if (n !== i) {
              while (n !== i) {
                t.push(n);
                if (_e.test(e.charAt(Te))) {
                  n = e.charAt(Te);
                  Te++;
                } else {
                  n = i;
                  if (Ae === 0) {
                    peg$fail(de);
                  }
                }
              }
            } else {
              t = o;
            }
            if (t !== i) {
              t = me(t);
            }
            return t;
          }
          function peg$parsehexDigit() {
            var t;
            if (he.test(e.charAt(Te))) {
              t = e.charAt(Te);
              Te++;
            } else {
              t = i;
              if (Ae === 0) {
                peg$fail(pe);
              }
            }
            return t;
          }
          function peg$parse_() {
            var e;
            var t;
            var n;
            Ae++;
            e = Te;
            t = [];
            n = peg$parsewhitespace();
            while (n !== i) {
              t.push(n);
              n = peg$parsewhitespace();
            }
            if (t !== i) {
              t = Ee(t);
            }
            Ae--;
            if ((e = t) === i) {
              t = i;
              if (Ae === 0) {
                peg$fail(ge);
              }
            }
            return e;
          }
          function peg$parsewhitespace() {
            var t;
            if (Ce.test(e.charAt(Te))) {
              t = e.charAt(Te);
              Te++;
            } else {
              t = i;
              if (Ae === 0) {
                peg$fail(fe);
              }
            }
            return t;
          }
          if ((t = s()) !== i && Te === e.length) {
            return t;
          }
          if (t !== i && Te < e.length) {
            peg$fail({
              type: "end",
              description: "end of input"
            });
          }
          throw peg$buildException(null, ve, Ie);
        }
      };
    }().parse;
    MessageFormat.plurals = {};
    MessageFormat.formatters = {};
    MessageFormat.prototype.runtime = {
      number: function (e, t) {
        if (isNaN(e)) {
          throw new Error("'" + e + "' isn't a number.");
        }
        return e - (t || 0);
      },
      plural: function (e, t, n, i, a) {
        if ({}.hasOwnProperty.call(i, e)) {
          return i[e]();
        }
        if (t) {
          e -= t;
        }
        var s = n(e, a);
        if (s in i) {
          return i[s]();
        } else {
          return i.other();
        }
      },
      select: function (e, t) {
        if ({}.hasOwnProperty.call(t, e)) {
          return t[e]();
        } else {
          return t.other();
        }
      },
      pluralFuncs: {},
      fmt: {},
      toString: function () {
        function e(t, n) {
          if (typeof t != "object") {
            var i = t.toString().replace(/^(function )\w*/, "$1");
            var a = /([ \t]*)\S.*$/.exec(i);
            if (a) {
              return i.replace(new RegExp("^" + a[1], "mg"), "");
            } else {
              return i;
            }
          }
          var s = [];
          for (var r in t) {
            if (r != "toString") {
              if (n == 0) {
                s.push("var " + r + " = " + e(t[r], n + 1) + ";\n");
              } else {
                s.push(propname(r) + ": " + e(t[r], n + 1));
              }
            }
          }
          if (n == 0) {
            return s.join("");
          }
          if (s.length == 0) {
            return "{}";
          }
          var a = "  ";
          while (--n) {
            a += "  ";
          }
          return "{\n" + s.join(",\n").replace(/^/gm, a) + "\n}";
        }
        return e(this, 0);
      }
    };
    MessageFormat.prototype._precompile = function (e, t) {
      t = t || {
        keys: {},
        offset: {}
      };
      var n;
      var i;
      var a = [];
      var s = [];
      switch (e.type) {
        case "messageFormatPattern":
          for (n = 0; n < e.statements.length; ++n) {
            a.push(this._precompile(e.statements[n], t));
          }
          i = a.join(" + ") || "\"\"";
          if (t.pf_count) {
            return i;
          } else {
            return "function(d) { return " + i + "; }";
          }
        case "messageFormatElement":
          t.pf_count = t.pf_count || 0;
          if (e.output) {
            return propname(e.argumentIndex, "d");
          } else {
            t.keys[t.pf_count] = e.argumentIndex;
            return this._precompile(e.elementFormat, t);
          }
        case "elementFormat":
          s = [propname(t.keys[t.pf_count], "d")];
          switch (e.key) {
            case "select":
              s.push(this._precompile(e.val, t));
              return "select(" + s.join(", ") + ")";
            case "selectordinal":
              return "plural(" + (s = s.concat([0, propname(this.lc[0], "pluralFuncs"), this._precompile(e.val, t), 1])).join(", ") + ")";
            case "plural":
              t.offset[t.pf_count || 0] = e.val.offset || 0;
              return "plural(" + (s = s.concat([t.offset[t.pf_count] || 0, propname(this.lc[0], "pluralFuncs"), this._precompile(e.val, t)])).join(", ") + ")";
            default:
              if (this.withIntlSupport && !(e.key in this.runtime.fmt) && e.key in MessageFormat.formatters) {
                i = MessageFormat.formatters[e.key];
                this.runtime.fmt[e.key] = typeof i(this) == "function" ? i(this) : i;
              }
              s.push(JSON.stringify(this.lc));
              if (e.val && e.val.length) {
                s.push(JSON.stringify(e.val.length == 1 ? e.val[0] : e.val));
              }
              return "fmt." + e.key + "(" + s.join(", ") + ")";
          }
        case "pluralFormatPattern":
        case "selectFormatPattern":
          t.pf_count = t.pf_count || 0;
          if (e.type == "selectFormatPattern") {
            t.offset[t.pf_count] = 0;
          }
          var r = true;
          for (n = 0; n < e.pluralForms.length; ++n) {
            var o = e.pluralForms[n].key;
            if (o === "other") {
              r = false;
            }
            var l = JSON.parse(JSON.stringify(t));
            l.pf_count++;
            a.push(propname(o) + ": function() { return " + this._precompile(e.pluralForms[n].val, l) + ";}");
          }
          if (r) {
            throw new Error("No 'other' form found in " + e.type + " " + t.pf_count);
          }
          return "{ " + a.join(", ") + " }";
        case "string":
          return JSON.stringify(e.val || "");
        case "octothorpe":
          if (t.pf_count) {
            s = [propname(t.keys[t.pf_count - 1], "d")];
            if (t.offset[t.pf_count - 1]) {
              s.push(t.offset[t.pf_count - 1]);
            }
            return "number(" + s.join(", ") + ")";
          } else {
            return "\"#\"";
          }
        default:
          throw new Error("Bad AST type: " + e.type);
      }
    };
    MessageFormat.prototype.compile = function (e, t) {
      var n = {};
      var i = this.lc;
      function a(e, t) {
        try {
          var n = MessageFormat._parse(t);
          return e._precompile(n);
        } catch (e) {
          throw new Error((n ? "Precompiler" : "Parser") + " error: " + e.toString());
        }
      }
      function s(e, t) {
        t ||= 0;
        if (typeof e != "object") {
          return e;
        }
        var n = [];
        var i = "";
        for (var a = 0; a < t; ++a) {
          i += "  ";
        }
        for (var r in e) {
          n.push("\n" + i + "  " + propname(r) + ": " + s(e[r], t + 1));
        }
        return "{" + n.join(",") + "\n" + i + "}";
      }
      if (typeof e == "string") {
        var r = new Function("number, plural, select, pluralFuncs, fmt", "return " + a(this, e));
        return r(this.runtime.number, this.runtime.plural, this.runtime.select, this.runtime.pluralFuncs, this.runtime.fmt);
      }
      t = t || {};
      for (var o in e) {
        if (t.locale) {
          this.lc = t.locale[o] && [].concat(t.locale[o]) || i;
        }
        if (typeof e[o] == "string") {
          try {
            n[o] = a(this, e[o]);
          } catch (e) {
            e.message = e.message.replace(":", " with `" + o + "`:");
            throw e;
          }
        } else {
          n[o] = {};
          for (var l in e[o]) {
            try {
              n[o][l] = a(this, e[o][l]);
            } catch (e) {
              e.message = e.message.replace(":", " with `" + l + "` in `" + o + "`:");
              throw e;
            }
          }
        }
      }
      this.lc = i;
      var u = this.runtime.toString() + "\n";
      switch (t.global || "") {
        case "exports":
          var c = [];
          for (var _ in n) {
            c.push(propname(_, "exports") + " = " + s(n[_]));
          }
          return new Function(u + c.join(";\n"));
        case "module.exports":
          return new Function(u + "module.exports = " + s(n));
        case "":
          return new Function(u + "return " + s(n));
        default:
          return new Function("G", u + propname(t.global, "G") + " = " + s(n));
      }
    };
    return MessageFormat;
  }();
  function d() {
    return a("E_MISSING_PLURAL_MODULE", "Plural module not loaded.");
  }
  var m = [].slice;
  t.loadMessages = function (t) {
    var n;
    var i = {
      "globalize-messages": t,
      main: {}
    };
    u(t, "json");
    _(t, "json");
    for (n in t) {
      if (t.hasOwnProperty(n)) {
        i.main[n] = {};
      }
    }
    e.load(i);
  };
  t.messageFormatter = t.prototype.messageFormatter = function (e) {
    var t;
    var a;
    var _;
    var h;
    var p;
    var g = m.call(arguments, 0);
    u(e, "path");
    c(e, "path", typeof e == "string" || Array.isArray(e), "a String nor an Array");
    e = i(e);
    t = this.cldr;
    o(t);
    (function (e) {
      l("E_MISSING_MESSAGE_BUNDLE", "Missing message bundle for locale `{locale}`.", e.attributes.bundle && e.get("globalize-messages/{bundle}") !== undefined, {
        locale: e.locale
      });
    })(t);
    (function (e, t) {
      e = e.join("/");
      l("E_MISSING_MESSAGE", "Missing required message content `{path}`.", t !== undefined, {
        path: e
      });
    })(e, _ = t.get(["globalize-messages/{bundle}"].concat(e)));
    if (Array.isArray(_)) {
      _ = _.join(" ");
    }
    (function (e, t) {
      e = e.join("/");
      l("E_INVALID_MESSAGE", "Invalid message content `{path}`. {expected} expected.", typeof t == "string", {
        expected: "a string",
        path: e
      });
    })(e, _);
    h = this.plural !== undefined ? this.pluralGenerator() : d;
    p = function (e) {
      return function messageFormatter(t) {
        var n;
        if (typeof t == "number" || typeof t == "string") {
          t = [].slice.call(arguments, 0);
        }
        c(n = t, "variables", n === undefined || s(n) || Array.isArray(n), "Array or Plain Object");
        return e(t);
      };
    }(a = new n(t.locale, h).compile(_));
    r(g, t, p, [function (e, t) {
      var n = e.locale;
      var i = t.toString;
      t.toString = function () {
        var e;
        var a = {};
        e = i.call(t);
        if (/number\(/.test(e)) {
          a.number = "messageFormat.number";
        }
        if (/plural\(/.test(e)) {
          a.plural = "messageFormat.plural";
        }
        if (/select\(/.test(e)) {
          a.select = "messageFormat.select";
        }
        e.replace(/pluralFuncs(\[([^\]]+)\]|\.([a-zA-Z]+))/, function (e) {
          a.pluralFuncs = "{\"" + n + "\": Globalize(\"" + n + "\").pluralGenerator()}";
          return e;
        });
        return "(function( " + Object.keys(a).join(", ") + " ) {\n  return " + e + "\n})(" + Object.keys(a).map(function (e) {
          return a[e];
        }).join(", ") + ")";
      };
      return t;
    }(t, a), h]);
    return p;
  };
  t.formatMessage = t.prototype.formatMessage = function (e) {
    return this.messageFormatter(e).apply({}, m.call(arguments, 1));
  };
  return t;
}) == "function" ? i.apply(exports, a) : i) !== undefined) {
  module.exports = s;
}