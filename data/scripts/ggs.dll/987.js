module.exports = function () {
  function e(e, t, n) {
    var i = n;
    for (var a = 0, s = e.length; a < s; a++) {
      i = t(i, e[a], a, e);
    }
    return i;
  }
  var t = !{
    toString: null
  }.propertyIsEnumerable("toString");
  var n = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"];
  function i(e) {
    if (e < 10) {
      return "0" + e;
    } else {
      return e;
    }
  }
  var a = {
    map: function (t, n) {
      return e(t, function (e, t, i, a) {
        return e.concat(n(t, i, a));
      }, []);
    },
    reduce: e,
    filter: function (t, n) {
      return e(t, function (e, t, i, a) {
        if (n(t, i, a)) {
          return e.concat(t);
        } else {
          return e;
        }
      }, []);
    },
    includes: function (t, n) {
      return e(t, function (e, t, i, a) {
        return e === true || t === n;
      }, false);
    },
    keys: function (e) {
      var i = [];
      var a = undefined;
      for (a in e) {
        if (Object.prototype.hasOwnProperty.call(e, a)) {
          i.push(a);
        }
      }
      if (!t) {
        return i;
      }
      for (var s = 0, r = n.length; s < r; s++) {
        if (Object.prototype.hasOwnProperty.call(e, n[s])) {
          i.push(n[s]);
        }
      }
      return i;
    },
    isArray: function (e) {
      return Object.prototype.toString.call(e) === "[object Array]";
    },
    isoDate: function () {
      var e = new Date();
      return e.getUTCFullYear() + "-" + i(e.getUTCMonth() + 1) + "-" + i(e.getUTCDate()) + "T" + i(e.getUTCHours()) + ":" + i(e.getUTCMinutes()) + ":" + i(e.getUTCSeconds()) + "." + (e.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) + "Z";
    }
  };
  var s = a.isoDate;
  var r = function () {
    function BugsnagBreadcrumb(e = "[anonymous]", t = {}, n = "manual", i = s()) {
      (function _classCallCheck(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      })(this, BugsnagBreadcrumb);
      this.type = n;
      this.name = e;
      this.metaData = t;
      this.timestamp = i;
    }
    BugsnagBreadcrumb.prototype.toJSON = function toJSON() {
      return {
        type: this.type,
        name: this.name,
        timestamp: this.timestamp,
        metaData: this.metaData
      };
    };
    return BugsnagBreadcrumb;
  }();
  var o = {};
  var l = a.includes;
  o.positiveIntIfDefined = function (e) {
    return l(["undefined", "number"], typeof e) && parseInt("" + e, 10) === e && e > 0;
  };
  o.stringWithLength = function (e) {
    return typeof e == "string" && !!e.length;
  };
  var u = {};
  var c = a.filter;
  var _ = a.reduce;
  var d = a.keys;
  var m = a.isArray;
  var h = a.includes;
  var p = o.positiveIntIfDefined;
  var g = o.stringWithLength;
  u.schema = {
    apiKey: {
      defaultValue: function () {
        return null;
      },
      message: "is required",
      validate: g
    },
    appVersion: {
      defaultValue: function () {
        return null;
      },
      message: "should be a string",
      validate: function (e) {
        return e === null || g(e);
      }
    },
    autoNotify: {
      defaultValue: function () {
        return true;
      },
      message: "should be true|false",
      validate: function (e) {
        return e === true || e === false;
      }
    },
    beforeSend: {
      defaultValue: function () {
        return [];
      },
      message: "should be a function or array of functions",
      validate: function (e) {
        return typeof e == "function" || m(e) && c(e, function (e) {
          return typeof e == "function";
        }).length === e.length;
      }
    },
    endpoints: {
      defaultValue: function () {
        return {
          notify: "https://notify.bugsnag.com",
          sessions: "https://sessions.bugsnag.com"
        };
      },
      message: "should be an object containing endpoint URLs { notify, sessions }. sessions is optional if autoCaptureSessions=false",
      validate: function (e, t) {
        return e && typeof e == "object" && g(e.notify) && (t.autoCaptureSessions === false || g(e.sessions)) && c(d(e), function (e) {
          return !h(["notify", "sessions"], e);
        }).length === 0;
      }
    },
    autoCaptureSessions: {
      defaultValue: function (e, t) {
        return t.endpoints === undefined || !!t.endpoints && !!t.endpoints.sessions;
      },
      message: "should be true|false",
      validate: function (e) {
        return e === true || e === false;
      }
    },
    notifyReleaseStages: {
      defaultValue: function () {
        return null;
      },
      message: "should be an array of strings",
      validate: function (e) {
        return e === null || m(e) && c(e, function (e) {
          return typeof e == "string";
        }).length === e.length;
      }
    },
    releaseStage: {
      defaultValue: function () {
        return "production";
      },
      message: "should be a string",
      validate: function (e) {
        return typeof e == "string" && e.length;
      }
    },
    maxBreadcrumbs: {
      defaultValue: function () {
        return 20;
      },
      message: "should be a number ≤40",
      validate: function (e) {
        return e === 0 || p(e) && (e === undefined || e <= 40);
      }
    },
    autoBreadcrumbs: {
      defaultValue: function () {
        return true;
      },
      message: "should be true|false",
      validate: function (e) {
        return typeof e == "boolean";
      }
    },
    user: {
      defaultValue: function () {
        return null;
      },
      message: "(object) user should be an object",
      validate: function (e) {
        return typeof e == "object";
      }
    },
    metaData: {
      defaultValue: function () {
        return null;
      },
      message: "should be an object",
      validate: function (e) {
        return typeof e == "object";
      }
    },
    logger: {
      defaultValue: function () {},
      message: "should be null or an object with methods { debug, info, warn, error }",
      validate: function (e) {
        return !e || e && _(["debug", "info", "warn", "error"], function (t, n) {
          return t && typeof e[n] == "function";
        }, true);
      }
    }
  };
  u.mergeDefaults = function (e, t) {
    if (!e || !t) {
      throw new Error("opts and schema objects are required");
    }
    return _(d(t), function (n, i) {
      n[i] = e[i] !== undefined ? e[i] : t[i].defaultValue(e[i], e);
      return n;
    }, {});
  };
  u.validate = function (e, t) {
    if (!e || !t) {
      throw new Error("opts and schema objects are required");
    }
    var n = _(d(t), function (n, i) {
      if (t[i].validate(e[i], e)) {
        return n;
      } else {
        return n.concat({
          key: i,
          message: t[i].message,
          value: e[i]
        });
      }
    }, []);
    return {
      valid: !n.length,
      errors: n
    };
  };
  function E(e) {
    if (e.app && typeof e.app.releaseStage == "string") {
      return e.app.releaseStage;
    } else {
      return e.config.releaseStage;
    }
  }
  function C(e) {
    return !!e && (!!e.stack || !!e.stacktrace || !!e["opera#sourceloc"]) && typeof (e.stack || e.stacktrace || e["opera#sourceloc"]) == "string" && e.stack !== e.name + ": " + e.message;
  }
  var f = {};
  (function (e, t) {
    'use strict';

    if (typeof f == "object") {
      f = t();
    } else {
      e.StackFrame = t();
    }
  })(this, function () {
    'use strict';

    function _isNumber(e) {
      return !isNaN(parseFloat(e)) && isFinite(e);
    }
    function _capitalize(e) {
      return e.charAt(0).toUpperCase() + e.substring(1);
    }
    function _getter(e) {
      return function () {
        return this[e];
      };
    }
    var e = ["isConstructor", "isEval", "isNative", "isToplevel"];
    var t = ["columnNumber", "lineNumber"];
    var n = ["fileName", "functionName", "source"];
    var i = e.concat(t, n, ["args"]);
    function StackFrame(e) {
      if (e instanceof Object) {
        for (var t = 0; t < i.length; t++) {
          if (e.hasOwnProperty(i[t]) && e[i[t]] !== undefined) {
            this["set" + _capitalize(i[t])](e[i[t]]);
          }
        }
      }
    }
    StackFrame.prototype = {
      getArgs: function () {
        return this.args;
      },
      setArgs: function (e) {
        if (Object.prototype.toString.call(e) !== "[object Array]") {
          throw new TypeError("Args must be an Array");
        }
        this.args = e;
      },
      getEvalOrigin: function () {
        return this.evalOrigin;
      },
      setEvalOrigin: function (e) {
        if (e instanceof StackFrame) {
          this.evalOrigin = e;
        } else {
          if (!(e instanceof Object)) {
            throw new TypeError("Eval Origin must be an Object or StackFrame");
          }
          this.evalOrigin = new StackFrame(e);
        }
      },
      toString: function () {
        var e = this.getFunctionName() || "{anonymous}";
        var t = "(" + (this.getArgs() || []).join(",") + ")";
        var n = this.getFileName() ? "@" + this.getFileName() : "";
        var i = _isNumber(this.getLineNumber()) ? ":" + this.getLineNumber() : "";
        var a = _isNumber(this.getColumnNumber()) ? ":" + this.getColumnNumber() : "";
        return e + t + n + i + a;
      }
    };
    for (var a = 0; a < e.length; a++) {
      StackFrame.prototype["get" + _capitalize(e[a])] = _getter(e[a]);
      StackFrame.prototype["set" + _capitalize(e[a])] = function (e) {
        return function (t) {
          this[e] = Boolean(t);
        };
      }(e[a]);
    }
    for (var s = 0; s < t.length; s++) {
      StackFrame.prototype["get" + _capitalize(t[s])] = _getter(t[s]);
      StackFrame.prototype["set" + _capitalize(t[s])] = function (e) {
        return function (t) {
          if (!_isNumber(t)) {
            throw new TypeError(e + " must be a Number");
          }
          this[e] = Number(t);
        };
      }(t[s]);
    }
    for (var r = 0; r < n.length; r++) {
      StackFrame.prototype["get" + _capitalize(n[r])] = _getter(n[r]);
      StackFrame.prototype["set" + _capitalize(n[r])] = function (e) {
        return function (t) {
          this[e] = String(t);
        };
      }(n[r]);
    }
    return StackFrame;
  });
  var T = {};
  (function (e, t) {
    'use strict';

    if (typeof T == "object") {
      T = t(f);
    } else {
      e.ErrorStackParser = t(e.StackFrame);
    }
  })(this, function ErrorStackParser(e) {
    'use strict';

    var t = /(^|@)\S+\:\d+/;
    var n = /^\s*at .*(\S+\:\d+|\(native\))/m;
    var i = /^(eval@)?(\[native code\])?$/;
    return {
      parse: function ErrorStackParser$$parse(e) {
        if (e.stacktrace !== undefined || e["opera#sourceloc"] !== undefined) {
          return this.parseOpera(e);
        }
        if (e.stack && e.stack.match(n)) {
          return this.parseV8OrIE(e);
        }
        if (e.stack) {
          return this.parseFFOrSafari(e);
        }
        throw new Error("Cannot parse given Error object");
      },
      extractLocation: function ErrorStackParser$$extractLocation(e) {
        if (e.indexOf(":") === -1) {
          return [e];
        }
        var t = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/.exec(e.replace(/[\(\)]/g, ""));
        return [t[1], t[2] || undefined, t[3] || undefined];
      },
      parseV8OrIE: function ErrorStackParser$$parseV8OrIE(t) {
        var i = t.stack.split("\n").filter(function (e) {
          return !!e.match(n);
        }, this);
        return i.map(function (t) {
          if (t.indexOf("(eval ") > -1) {
            t = t.replace(/eval code/g, "eval").replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, "");
          }
          var n = t.replace(/^\s+/, "").replace(/\(eval code/g, "(").split(/\s+/).slice(1);
          var i = this.extractLocation(n.pop());
          var a = n.join(" ") || undefined;
          var s = ["eval", "<anonymous>"].indexOf(i[0]) > -1 ? undefined : i[0];
          return new e({
            functionName: a,
            fileName: s,
            lineNumber: i[1],
            columnNumber: i[2],
            source: t
          });
        }, this);
      },
      parseFFOrSafari: function ErrorStackParser$$parseFFOrSafari(t) {
        var n = t.stack.split("\n").filter(function (e) {
          return !e.match(i);
        }, this);
        return n.map(function (t) {
          if (t.indexOf(" > eval") > -1) {
            t = t.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ":$1");
          }
          if (t.indexOf("@") === -1 && t.indexOf(":") === -1) {
            return new e({
              functionName: t
            });
          }
          var n = /((.*".+"[^@]*)?[^@]*)(?:@)/;
          var i = t.match(n);
          var a = i && i[1] ? i[1] : undefined;
          var s = this.extractLocation(t.replace(n, ""));
          return new e({
            functionName: a,
            fileName: s[0],
            lineNumber: s[1],
            columnNumber: s[2],
            source: t
          });
        }, this);
      },
      parseOpera: function ErrorStackParser$$parseOpera(e) {
        if (!e.stacktrace || e.message.indexOf("\n") > -1 && e.message.split("\n").length > e.stacktrace.split("\n").length) {
          return this.parseOpera9(e);
        } else if (e.stack) {
          return this.parseOpera11(e);
        } else {
          return this.parseOpera10(e);
        }
      },
      parseOpera9: function ErrorStackParser$$parseOpera9(t) {
        var n = /Line (\d+).*script (?:in )?(\S+)/i;
        var i = t.message.split("\n");
        var a = [];
        for (var s = 2, r = i.length; s < r; s += 2) {
          var o = n.exec(i[s]);
          if (o) {
            a.push(new e({
              fileName: o[2],
              lineNumber: o[1],
              source: i[s]
            }));
          }
        }
        return a;
      },
      parseOpera10: function ErrorStackParser$$parseOpera10(t) {
        var n = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
        var i = t.stacktrace.split("\n");
        var a = [];
        for (var s = 0, r = i.length; s < r; s += 2) {
          var o = n.exec(i[s]);
          if (o) {
            a.push(new e({
              functionName: o[3] || undefined,
              fileName: o[2],
              lineNumber: o[1],
              source: i[s]
            }));
          }
        }
        return a;
      },
      parseOpera11: function ErrorStackParser$$parseOpera11(n) {
        var i = n.stack.split("\n").filter(function (e) {
          return !!e.match(t) && !e.match(/^Error created at/);
        }, this);
        return i.map(function (t) {
          var n;
          var i = t.split("@");
          var a = this.extractLocation(i.pop());
          var s = i.shift() || "";
          var r = s.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^\)]*\)/g, "") || undefined;
          if (s.match(/\(([^\)]*)\)/)) {
            n = s.replace(/^[^\(]+\(([^\)]*)\)$/, "$1");
          }
          var o = n === undefined || n === "[arguments not available]" ? undefined : n.split(",");
          return new e({
            functionName: r,
            args: o,
            fileName: a[0],
            lineNumber: a[1],
            columnNumber: a[2],
            source: t
          });
        }, this);
      }
    };
  });
  var S = {};
  (function (e, t) {
    'use strict';

    if (typeof S == "object") {
      S = t(f);
    } else {
      e.StackGenerator = t(e.StackFrame);
    }
  })(this, function (e) {
    return {
      backtrace: function StackGenerator$$backtrace(t) {
        var n = [];
        var i = 10;
        if (typeof t == "object" && typeof t.maxStackSize == "number") {
          i = t.maxStackSize;
        }
        for (var a = arguments.callee; a && n.length < i && a.arguments;) {
          for (var s = new Array(a.arguments.length), r = 0; r < s.length; ++r) {
            s[r] = a.arguments[r];
          }
          if (/function(?:\s+([\w$]+))+\s*\(/.test(a.toString())) {
            n.push(new e({
              functionName: RegExp.$1 || undefined,
              args: s
            }));
          } else {
            n.push(new e({
              args: s
            }));
          }
          try {
            a = a.caller;
          } catch (e) {
            break;
          }
        }
        return n;
      }
    };
  });
  var y = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n) {
        if (Object.prototype.hasOwnProperty.call(n, i)) {
          e[i] = n[i];
        }
      }
    }
    return e;
  };
  var I = a.reduce;
  var v = a.filter;
  var A = function () {
    function BugsnagReport(e, t, n = [], i = D()) {
      (function ___classCallCheck_9(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      })(this, BugsnagReport);
      this.__isBugsnagReport = true;
      this._ignored = false;
      this._handledState = i;
      this.app = undefined;
      this.apiKey = undefined;
      this.breadcrumbs = [];
      this.context = undefined;
      this.device = undefined;
      this.errorClass = b(e, "[no error class]");
      this.errorMessage = b(t, "[no error message]");
      this.groupingHash = undefined;
      this.metaData = {};
      this.request = undefined;
      this.severity = this._handledState.severity;
      this.stacktrace = I(n, function (e, t) {
        var n = O(t);
        try {
          if (JSON.stringify(n) === "{}") {
            return e;
          } else {
            return e.concat(n);
          }
        } catch (t) {
          return e;
        }
      }, []);
      this.user = undefined;
      this.session = undefined;
    }
    BugsnagReport.prototype.ignore = function ignore() {
      this._ignored = true;
    };
    BugsnagReport.prototype.isIgnored = function isIgnored() {
      return this._ignored;
    };
    BugsnagReport.prototype.updateMetaData = function updateMetaData(e) {
      var t;
      if (!e) {
        return this;
      }
      var n = undefined;
      if ((arguments.length <= 1 ? undefined : arguments[1]) === null) {
        return this.removeMetaData(e);
      } else if ((arguments.length <= 2 ? undefined : arguments[2]) === null) {
        return this.removeMetaData(e, arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2]);
      } else {
        if (typeof (arguments.length <= 1 ? undefined : arguments[1]) == "object") {
          n = arguments.length <= 1 ? undefined : arguments[1];
        }
        if (typeof (arguments.length <= 1 ? undefined : arguments[1]) == "string") {
          (t = {})[arguments.length <= 1 ? undefined : arguments[1]] = arguments.length <= 2 ? undefined : arguments[2];
          n = t;
        }
        if (n) {
          this.metaData[e] ||= {};
          this.metaData[e] = y({}, this.metaData[e], n);
          return this;
        } else {
          return this;
        }
      }
    };
    BugsnagReport.prototype.removeMetaData = function removeMetaData(e, t) {
      if (typeof e != "string") {
        return this;
      } else if (t) {
        if (this.metaData[e]) {
          delete this.metaData[e][t];
          return this;
        } else {
          return this;
        }
      } else {
        delete this.metaData[e];
        return this;
      }
    };
    BugsnagReport.prototype.toJSON = function toJSON() {
      return {
        payloadVersion: "4",
        exceptions: [{
          errorClass: this.errorClass,
          message: this.errorMessage,
          stacktrace: this.stacktrace,
          type: "browserjs"
        }],
        severity: this.severity,
        unhandled: this._handledState.unhandled,
        severityReason: this._handledState.severityReason,
        app: this.app,
        device: this.device,
        breadcrumbs: this.breadcrumbs,
        context: this.context,
        user: this.user,
        metaData: this.metaData,
        groupingHash: this.groupingHash,
        request: this.request,
        session: this.session
      };
    };
    return BugsnagReport;
  }();
  function O(e) {
    var t = {
      file: e.fileName,
      method: L(e.functionName),
      lineNumber: e.lineNumber,
      columnNumber: e.columnNumber,
      code: undefined,
      inProject: undefined
    };
    if (t.lineNumber > -1 && !t.file && !t.method) {
      t.file = "global code";
    }
    return t;
  }
  function L(e) {
    if (/^global code$/i.test(e)) {
      return "global code";
    } else {
      return e;
    }
  }
  function D() {
    return {
      unhandled: false,
      severity: "warning",
      severityReason: {
        type: "handledException"
      }
    };
  }
  function b(e, t) {
    if (typeof e == "string" && e) {
      return e;
    } else {
      return t;
    }
  }
  A.getStacktrace = function (e, t = 0, n = 0) {
    if (C(e)) {
      return T.parse(e).slice(t);
    } else {
      return v(S.backtrace(), function (e) {
        return (e.functionName || "").indexOf("StackGenerator$$") === -1;
      }).slice(1 + n);
    }
  };
  A.ensureReport = function (e, t = 0, n = 0) {
    if (e.__isBugsnagReport) {
      return e;
    }
    try {
      var i = A.getStacktrace(e, t, 1 + n);
      return new A(e.name, e.message, i);
    } catch (t) {
      return new A(e.name, e.message, []);
    }
  };
  var N = A;
  var R = function pad(e, t) {
    var n = "000000000" + e;
    return n.substr(n.length - t);
  };
  var P = typeof window == "object" ? window : self;
  var B = 0;
  for (var M in P) {
    if (Object.hasOwnProperty.call(P, M)) {
      B++;
    }
  }
  var F = navigator.mimeTypes ? navigator.mimeTypes.length : 0;
  var U = R((F + navigator.userAgent.length).toString(36) + B.toString(36), 4);
  var G = function fingerprint() {
    return U;
  };
  var k = 0;
  var w = 4;
  var x = 36;
  var W = Math.pow(x, w);
  function randomBlock() {
    return R((Math.random() * W << 0).toString(x), w);
  }
  function cuid() {
    var e = new Date().getTime().toString(x);
    var t = R(function safeCounter() {
      k = k < W ? k : 0;
      return ++k - 1;
    }().toString(x), w);
    var n = G();
    var i = randomBlock() + randomBlock();
    return "c" + e + t + n + i;
  }
  cuid.fingerprint = G;
  var H = cuid;
  var V = a.isoDate;
  var j = function () {
    function Session() {
      (function ___classCallCheck_10(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      })(this, Session);
      this.id = H();
      this.startedAt = V();
      this._handled = 0;
      this._unhandled = 0;
    }
    Session.prototype.toJSON = function toJSON() {
      return {
        id: this.id,
        startedAt: this.startedAt,
        events: {
          handled: this._handled,
          unhandled: this._unhandled
        }
      };
    };
    Session.prototype.trackError = function trackError(e) {
      this[e._handledState.unhandled ? "_unhandled" : "_handled"] += 1;
    };
    return Session;
  }();
  var q = function isError(e) {
    switch (Object.prototype.toString.call(e)) {
      case "[object Error]":
      case "[object Exception]":
      case "[object DOMException]":
        return true;
      default:
        return e instanceof Error;
    }
  };
  var K = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n) {
        if (Object.prototype.hasOwnProperty.call(n, i)) {
          e[i] = n[i];
        }
      }
    }
    return e;
  };
  var Y = a.map;
  var z = a.reduce;
  var Z = a.includes;
  var X = a.isArray;
  function Q() {}
  var $ = function () {
    function BugsnagClient(e, t = u.schema, n = null) {
      (function ___classCallCheck_2(e, t) {
        if (!(e instanceof t)) {
          throw new TypeError("Cannot call a class as a function");
        }
      })(this, BugsnagClient);
      if (!e || !e.name || !e.version || !e.url) {
        throw new Error("`notifier` argument is required");
      }
      this.notifier = e;
      this.configSchema = t;
      this._configured = false;
      this._transport = {
        sendSession: Q,
        sendReport: Q
      };
      this._logger = {
        debug: Q,
        info: Q,
        warn: Q,
        error: Q
      };
      this.plugins = [];
      this.session = n;
      this.beforeSession = [];
      this.breadcrumbs = [];
      this.app = {};
      this.context = undefined;
      this.device = undefined;
      this.metaData = undefined;
      this.request = undefined;
      this.user = {};
      this.BugsnagReport = N;
      this.BugsnagBreadcrumb = r;
      this.BugsnagSession = j;
    }
    BugsnagClient.prototype.configure = function configure(e = {}) {
      this.config = u.mergeDefaults(K({}, this.config, e), this.configSchema);
      var t = u.validate(this.config, this.configSchema);
      if (!t.valid == 1) {
        throw new Error(te(t.errors));
      }
      if (typeof this.config.beforeSend == "function") {
        this.config.beforeSend = [this.config.beforeSend];
      }
      if (this.config.appVersion !== null) {
        this.app.version = this.config.appVersion;
      }
      if (this.config.metaData) {
        this.metaData = this.config.metaData;
      }
      if (this.config.user) {
        this.user = this.config.user;
      }
      if (this.config.logger) {
        this.logger(this.config.logger);
      }
      this._configured = true;
      this._logger.debug("Loaded!");
      return this;
    };
    BugsnagClient.prototype.use = function use(e) {
      this.plugins.push(e);
      return e.init(this);
    };
    BugsnagClient.prototype.transport = function transport(e) {
      this._transport = e;
      return this;
    };
    BugsnagClient.prototype.logger = function logger(e, t) {
      this._logger = e;
      return this;
    };
    BugsnagClient.prototype.sessionDelegate = function sessionDelegate(e) {
      this._sessionDelegate = e;
      return this;
    };
    BugsnagClient.prototype.startSession = function startSession() {
      if (this._sessionDelegate) {
        return this._sessionDelegate.startSession(this);
      } else {
        this._logger.warn("No session implementation is installed");
        return this;
      }
    };
    BugsnagClient.prototype.leaveBreadcrumb = function leaveBreadcrumb(e, t, n, i) {
      if (!this._configured) {
        throw new Error("client not configured");
      }
      e = e || undefined;
      n = typeof n == "string" ? n : undefined;
      i = typeof i == "string" ? i : undefined;
      t = typeof t == "object" && t !== null ? t : undefined;
      if (typeof e == "string" || t) {
        var a = new r(e, t, n, i);
        this.breadcrumbs.push(a);
        if (this.breadcrumbs.length > this.config.maxBreadcrumbs) {
          this.breadcrumbs = this.breadcrumbs.slice(this.breadcrumbs.length - this.config.maxBreadcrumbs);
        }
        return this;
      }
    };
    BugsnagClient.prototype.notify = function notify(e, t = {}) {
      if (!this._configured) {
        throw new Error("client not configured");
      }
      var n = E(this);
      var i = J(e, t, this._logger);
      var a = i.err;
      var s = i.errorFramesToSkip;
      var r = i._opts;
      if (r) {
        t = r;
      }
      if (!a) {
        var o = ne("nothing");
        this._logger.warn("Usage error. " + o);
        a = new Error("Bugsnag usage error. " + o);
      }
      if (typeof t != "object" || t === null) {
        t = {};
      }
      var l = N.ensureReport(a, s, 1);
      l.app = K({
        releaseStage: n
      }, l.app, this.app);
      l.context = l.context || t.context || this.context || undefined;
      l.device = K({}, l.device, this.device, t.device);
      l.request = K({}, l.request, this.request, t.request);
      l.user = K({}, l.user, this.user, t.user);
      l.metaData = K({}, l.metaData, this.metaData, t.metaData);
      l.breadcrumbs = this.breadcrumbs.slice(0);
      if (this.session) {
        this.session.trackError(l);
        l.session = this.session;
      }
      if (t.severity !== undefined) {
        l.severity = t.severity;
        l._handledState.severityReason = {
          type: "userSpecifiedSeverity"
        };
      }
      if (X(this.config.notifyReleaseStages) && !Z(this.config.notifyReleaseStages, n)) {
        this._logger.warn("Report not sent due to releaseStage/notifyReleaseStages configuration");
        return false;
      }
      var u = l.severity;
      var c = [].concat(t.beforeSend).concat(this.config.beforeSend);
      var _ = z(c, function (e, t) {
        return e === true || typeof t == "function" && t(l) === false || !!l.isIgnored();
      }, false);
      if (_) {
        this._logger.debug("Report not sent due to beforeSend callback");
        return false;
      } else {
        if (this.config.autoBreadcrumbs) {
          this.leaveBreadcrumb(l.errorClass, {
            errorClass: l.errorClass,
            errorMessage: l.errorMessage,
            severity: l.severity
          }, "error");
        }
        if (u !== l.severity) {
          l._handledState.severityReason = {
            type: "userCallbackSetSeverity"
          };
        }
        this._transport.sendReport(this._logger, this.config, {
          apiKey: l.apiKey || this.config.apiKey,
          notifier: this.notifier,
          events: [l]
        });
        return true;
      }
    };
    return BugsnagClient;
  }();
  function J(e, t, n) {
    var i = undefined;
    var a = 0;
    var s = undefined;
    switch (typeof e) {
      case "string":
        if (typeof t == "string") {
          var r = ne("string/string");
          n.warn("Usage error. " + r);
          i = new Error("Bugsnag usage error. " + r);
          s = {
            metaData: {
              notifier: {
                notifyArgs: [e, t]
              }
            }
          };
        } else {
          i = new Error(String(e));
          a += 2;
        }
        break;
      case "number":
      case "boolean":
        i = new Error(String(e));
        break;
      case "function":
        var o = ne("function");
        n.warn("Usage error. " + o);
        i = new Error("Bugsnag usage error. " + o);
        break;
      case "object":
        if (e !== null && (q(e) || e.__isBugsnagReport)) {
          i = e;
        } else if (e !== null && ee(e)) {
          (i = new Error(e.message || e.errorMessage)).name = e.name || e.errorClass;
          a += 2;
        } else {
          var l = ne("unsupported object");
          n.warn("Usage error. " + l);
          i = new Error("Bugsnag usage error. " + l);
        }
    }
    return {
      err: i,
      errorFramesToSkip: a,
      _opts: s
    };
  }
  function ee(e) {
    return (typeof e.name == "string" || typeof e.errorClass == "string") && (typeof e.message == "string" || typeof e.errorMessage == "string");
  }
  function te(e) {
    return "Bugsnag configuration error\n" + Y(e, function (e) {
      return "\"" + e.key + "\" " + e.message + " \n    got " + ie(e.value);
    }).join("\n\n");
  }
  function ne(e) {
    return "notify() expected error/opts parameters, got " + e;
  }
  function ie(e) {
    if (typeof e == "object") {
      return JSON.stringify(e);
    } else {
      return String(e);
    }
  }
  var ae = $;
  var se = o.positiveIntIfDefined;
  var re = {
    init: function (e) {
      var t = 0;
      e.config.beforeSend.push(function (n) {
        if (t >= e.config.maxEvents) {
          return n.ignore();
        }
        t++;
      });
      e.refresh = function () {
        t = 0;
      };
    },
    configSchema: {
      maxEvents: {
        defaultValue: function () {
          return 10;
        },
        message: "should be a positive integer ≤100",
        validate: function (e) {
          return se(e) && e < 100;
        }
      }
    }
  };
  var oe = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n) {
        if (Object.prototype.hasOwnProperty.call(n, i)) {
          e[i] = n[i];
        }
      }
    }
    return e;
  };
  var le = u.schema;
  var ue = a.map;
  var ce = {
    releaseStage: {
      defaultValue: function () {
        if (/^localhost(:\d+)?$/.test(window.location.host)) {
          return "development";
        } else {
          return "production";
        }
      },
      message: "should be set",
      validate: o.stringWithLength
    },
    collectUserIp: {
      defaultValue: function () {
        return true;
      },
      message: "should be true|false",
      validate: function (e) {
        return e === true || e === false;
      }
    },
    logger: oe({}, le.logger, {
      defaultValue: function () {
        if (typeof console != "undefined" && typeof console.debug == "function") {
          return _e();
        } else {
          return undefined;
        }
      }
    })
  };
  function _e() {
    var e = {};
    var t = console.log;
    ue(["debug", "info", "warn", "error"], function (n) {
      var i = console[n];
      e[n] = typeof i == "function" ? i.bind(console, "[bugsnag]") : t.bind(console, "[bugsnag]");
    });
    return e;
  }
  var de = {};
  var me = a.map;
  var he = a.reduce;
  var pe = a.filter;
  de.init = function (e) {
    me(ge, function (t) {
      var n = console[t];
      console[t] = function () {
        for (var i = arguments.length, a = Array(i), s = 0; s < i; s++) {
          a[s] = arguments[s];
        }
        e.leaveBreadcrumb("Console output", he(a, function (e, t, n) {
          var i = String(t);
          if (i === "[object Object]") {
            try {
              i = JSON.stringify(t);
            } catch (e) {}
          }
          e["[" + n + "]"] = i;
          return e;
        }, {
          severity: t.indexOf("group") === 0 ? "log" : t
        }), "log");
        n.apply(console, a);
      };
      console[t]._restore = function () {
        console[t] = n;
      };
    });
  };
  de.configSchema = {
    consoleBreadcrumbsEnabled: {
      defaultValue: function () {},
      validate: function (e) {
        return e === true || e === false || e === undefined;
      },
      message: "should be true|false"
    }
  };
  var ge = pe(["log", "debug", "info", "warn", "error"], function (e) {
    return typeof console != "undefined" && typeof console[e] == "function";
  });
  var Ee = {
    init: function (e) {
      e.config.beforeSend.unshift(function (e) {
        e.context ||= window.location.pathname;
      });
    }
  };
  var Ce = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n) {
        if (Object.prototype.hasOwnProperty.call(n, i)) {
          e[i] = n[i];
        }
      }
    }
    return e;
  };
  var fe = a.isoDate;
  var Te = {
    init: function (e) {
      e.config.beforeSend.unshift(function (e) {
        e.device = Ce({
          time: fe(),
          locale: navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || navigator.language,
          userAgent: navigator.userAgent
        }, e.device);
      });
      e.beforeSession.push(function (e) {
        e.device = {
          userAgent: navigator.userAgent
        };
      });
    }
  };
  var Se = {};
  var ye = a.reduce;
  var Ie = /^.*<script.*?>/;
  var ve = /<\/script>.*$/;
  var Ae = (Se = {
    init: function (e) {
      var t = "";
      var n = false;
      function i() {
        return document.documentElement.outerHTML;
      }
      var a = window.location.href;
      t = i();
      document.onreadystatechange = function () {
        if (document.readyState === "interactive") {
          t = i();
          n = true;
        }
      };
      e.config.beforeSend.unshift(function (e) {
        var s = e.stacktrace[0];
        if (!s || !s.file || !s.lineNumber) {
          return s;
        }
        if (s.file.replace(/#.*$/, "") !== a.replace(/#.*$/, "")) {
          return s;
        }
        if (!n || !t) {
          t = i();
        }
        var r = ["<!-- DOC START -->"].concat(t.split("\n"));
        var o = Ae(r, s.lineNumber - 1);
        var l = o.script;
        var u = o.start;
        var c = ye(l, function (e, t, n) {
          if (Math.abs(u + n + 1 - s.lineNumber) > 10) {
            return e;
          } else {
            e["" + (u + n + 1)] = t;
            return e;
          }
        }, {});
        s.code = c;
        e.updateMetaData("script", {
          content: l.join("\n")
        });
      });
    }
  }).extractScriptContent = function (e, t) {
    for (var n = t; n < e.length && !ve.test(e[n]);) {
      n++;
    }
    var i = n;
    for (; n > 0 && !Ie.test(e[n]);) {
      n--;
    }
    var a = n;
    var s = e.slice(a, i + 1);
    s[0] = s[0].replace(Ie, "");
    s[s.length - 1] = s[s.length - 1].replace(ve, "");
    return {
      script: s,
      start: a
    };
  };
  var Oe = {
    init: function (e) {
      if ("addEventListener" in window) {
        window.addEventListener("click", function (t) {
          var n = undefined;
          var i = undefined;
          try {
            n = Le(t.target);
            i = function getNodeSelector(e) {
              var t = [e.tagName];
              if (e.id) {
                t.push("#" + e.id);
              }
              if (e.className && e.className.length) {
                t.push("." + e.className.split(" ").join("."));
              }
              if (!document.querySelectorAll || !Array.prototype.indexOf) {
                return t.join("");
              }
              try {
                if (document.querySelectorAll(t.join("")).length === 1) {
                  return t.join("");
                }
              } catch (e) {
                return t.join("");
              }
              if (e.parentNode.childNodes.length > 1) {
                var n = Array.prototype.indexOf.call(e.parentNode.childNodes, e) + 1;
                t.push(":nth-child(" + n + ")");
              }
              if (document.querySelectorAll(t.join("")).length === 1) {
                return t.join("");
              } else if (e.parentNode) {
                return getNodeSelector(e.parentNode) + " > " + t.join("");
              } else {
                return t.join("");
              }
            }(t.target);
          } catch (t) {
            n = "[hidden]";
            i = "[hidden]";
            e._logger.error("Cross domain error when tracking click event. See docs: https://tinyurl.com/y94fq5zm");
          }
          e.leaveBreadcrumb("UI click", {
            targetText: n,
            targetSelector: i
          }, "user");
        }, true);
      }
    },
    configSchema: {
      interactionBreadcrumbsEnabled: {
        defaultValue: function () {},
        validate: function (e) {
          return e === true || e === false || e === undefined;
        },
        message: "should be true|false"
      }
    }
  };
  function Le(e) {
    var t = e.textContent || e.innerText || "";
    if (!t && (e.type === "submit" || e.type === "button")) {
      t = e.value;
    }
    return function truncate(e, t) {
      if (e && e.length <= t) {
        return e;
      } else {
        return e.slice(0, t - "(...)".length) + "(...)";
      }
    }(t = t.replace(/^\s+|\s+$/g, ""), 140);
  }
  var De = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n) {
        if (Object.prototype.hasOwnProperty.call(n, i)) {
          e[i] = n[i];
        }
      }
    }
    return e;
  };
  var be = {
    init: function (e) {
      if (!e.config.collectUserIp) {
        e.config.beforeSend.push(function (e) {
          e.user = De({
            id: "[NOT COLLECTED]"
          }, e.user);
          e.request = De({
            clientIp: "[NOT COLLECTED]"
          }, e.request);
        });
      }
    }
  };
  var Ne = {
    init: function (e) {
      if ("addEventListener" in window) {
        function t(t) {
          return function () {
            return e.leaveBreadcrumb(t, {}, "navigation");
          };
        }
        window.addEventListener("pagehide", t("Page hidden"), true);
        window.addEventListener("pageshow", t("Page shown"), true);
        window.addEventListener("load", t("Page loaded"), true);
        window.document.addEventListener("DOMContentLoaded", t("DOMContentLoaded"), true);
        window.addEventListener("load", function () {
          return window.addEventListener("popstate", t("Navigated back"), true);
        });
        window.addEventListener("hashchange", function (t) {
          var n = t.oldURL ? {
            from: Re(t.oldURL),
            to: Re(t.newURL),
            state: Be()
          } : {
            to: Re(window.location.href)
          };
          e.leaveBreadcrumb("Hash changed", n, "navigation");
        }, true);
        if (window.history.replaceState) {
          Pe(e, window.history, "replaceState");
        }
        if (window.history.pushState) {
          Pe(e, window.history, "pushState");
        }
        e.leaveBreadcrumb("Bugsnag loaded", {}, "navigation");
      }
    },
    configSchema: {
      navigationBreadcrumbsEnabled: {
        defaultValue: function () {},
        validate: function (e) {
          return e === true || e === false || e === undefined;
        },
        message: "should be true|false"
      }
    }
  };
  function Re(e) {
    var t = document.createElement("A");
    t.href = e;
    return "" + t.pathname + t.search + t.hash;
  }
  function Pe(e, t, n) {
    var i = t[n];
    t[n] = function (a, s, r) {
      e.leaveBreadcrumb("History " + n, function (e, t, n) {
        var i = Re(window.location.href);
        return {
          title: t,
          state: e,
          prevState: Be(),
          to: n || i,
          from: i
        };
      }(a, s, r), "navigation");
      if (typeof e.refresh == "function") {
        e.refresh();
      }
      if (e.session) {
        e.startSession();
      }
      i.apply(t, [a, s].concat(r !== undefined ? r : []));
    };
    t[n]._restore = function () {
      t[n] = i;
    };
  }
  function Be() {
    try {
      return window.history.state;
    } catch (e) {}
  }
  var Me = {};
  var Fe = "request";
  var Ue = "BS~~U";
  var Ge = "BS~~M";
  var ke = a.includes;
  var we = undefined;
  function xe() {
    return [we.config.endpoints.notify, we.config.endpoints.sessions];
  }
  Me.init = function (e) {
    we = e;
    We();
    He();
  };
  Me.configSchema = {
    networkBreadcrumbsEnabled: {
      defaultValue: function () {},
      validate: function (e) {
        return e === true || e === false || e === undefined;
      },
      message: "should be true|false"
    }
  };
  function We() {
    if ("addEventListener" in window.XMLHttpRequest.prototype) {
      var e = window.XMLHttpRequest.prototype.open;
      window.XMLHttpRequest.prototype.open = function open(t, n) {
        this[Ue] = n;
        this[Ge] = t;
        if (this["BS~~S"]) {
          this.removeEventListener("load", handleXHRLoad);
          this.removeEventListener("error", handleXHRError);
        }
        this.addEventListener("load", handleXHRLoad);
        this.addEventListener("error", handleXHRError);
        this["BS~~S"] = true;
        e.apply(this, arguments);
      };
    }
  }
  function handleXHRLoad() {
    if (!ke(xe(), this[Ue])) {
      var e = {
        status: this.status,
        request: this[Ge] + " " + this[Ue]
      };
      if (this.status >= 400) {
        we.leaveBreadcrumb("XMLHttpRequest failed", e, Fe);
      } else {
        we.leaveBreadcrumb("XMLHttpRequest succeeded", e, Fe);
      }
    }
  }
  function handleXHRError() {
    if (!ke(xe(), this[Ue])) {
      we.leaveBreadcrumb("XMLHttpRequest error", {
        request: this[Ge] + " " + this[Ue]
      }, Fe);
    }
  }
  function He() {
    if ("fetch" in window) {
      var e = window.fetch;
      window.fetch = function fetch() {
        for (var t = arguments.length, n = Array(t), i = 0; i < t; i++) {
          n[i] = arguments[i];
        }
        var a = n[0];
        var s = n[1];
        var r = "GET";
        if (s && s.method) {
          r = s.method;
        }
        return new Promise(function (t, i) {
          e.apply(undefined, n).then(function (e) {
            Ve(e, r, a);
            t(e);
          }).catch(function (e) {
            je(r, a);
            i(e);
          });
        });
      };
    }
  }
  function Ve(e, t, n) {
    var i = {
      status: e.status,
      request: t + " " + n
    };
    if (e.status >= 400) {
      we.leaveBreadcrumb("fetch() failed", i, Fe);
    } else {
      we.leaveBreadcrumb("fetch() succeeded", i, Fe);
    }
  }
  function je(e, t) {
    we.leaveBreadcrumb("fetch() error", {
      request: e + " " + t
    }, Fe);
  }
  var qe = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n) {
        if (Object.prototype.hasOwnProperty.call(n, i)) {
          e[i] = n[i];
        }
      }
    }
    return e;
  };
  var Ke = {
    init: function (e) {
      e.config.beforeSend.unshift(function (e) {
        if (!e.request || !e.request.url) {
          e.request = qe({}, e.request, {
            url: window.location.href
          });
        }
      });
    }
  };
  var Ye = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n) {
        if (Object.prototype.hasOwnProperty.call(n, i)) {
          e[i] = n[i];
        }
      }
    }
    return e;
  };
  var ze = a.map;
  var Ze = a.isArray;
  var Xe = a.includes;
  var Qe = {
    init: function (e) {
      return e.sessionDelegate($e);
    }
  };
  var $e = {
    startSession: function (e) {
      var t = e;
      t.session = new e.BugsnagSession();
      ze(t.beforeSession, function (e) {
        return e(t);
      });
      var n = E(t);
      if (Ze(t.config.notifyReleaseStages) && !Xe(t.config.notifyReleaseStages, n)) {
        t._logger.warn("Session not sent due to releaseStage/notifyReleaseStages configuration");
        return t;
      } else if (t.config.endpoints.sessions) {
        t._transport.sendSession(t._logger, t.config, {
          notifier: t.notifier,
          device: t.device,
          app: Ye({
            releaseStage: n
          }, t.app),
          sessions: [{
            id: t.session.id,
            startedAt: t.session.startedAt,
            user: t.user
          }]
        });
        return t;
      } else {
        t._logger.warn("Session not sent due to missing endpoints.sessions configuration");
        return t;
      }
    }
  };
  var Je = {};
  var et = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n) {
        if (Object.prototype.hasOwnProperty.call(n, i)) {
          e[i] = n[i];
        }
      }
    }
    return e;
  };
  var tt = a.map;
  var nt = (Je = {
    init: function (e) {
      e.config.beforeSend.push(function (e) {
        e.stacktrace = tt(e.stacktrace, function (e) {
          return et({}, e, {
            file: nt(e.file)
          });
        });
      });
    }
  })._strip = function (e) {
    if (typeof e == "string") {
      return e.replace(/\?.*$/, "").replace(/#.*$/, "");
    } else {
      return e;
    }
  };
  var it = {};
  var at = a.reduce;
  it.init = function (e) {
    function t(t) {
      var n = t.reason;
      var i = false;
      if (t.detail && t.detail.reason) {
        n = t.detail.reason;
        i = true;
      }
      var a = {
        severity: "error",
        unhandled: true,
        severityReason: {
          type: "unhandledPromiseRejection"
        }
      };
      var s = undefined;
      if (n && C(n)) {
        s = new e.BugsnagReport(n.name, n.message, T.parse(n), a);
        if (i) {
          s.stacktrace = at(s.stacktrace, rt(n), []);
        }
      } else {
        (s = new e.BugsnagReport(n && n.name ? n.name : "UnhandledRejection", n && n.message ? n.message : "Rejection reason was not an Error. See \"Promise\" tab for more detail.", [], a)).updateMetaData("promise", "rejection reason", st(n));
      }
      e.notify(s);
    }
    if ("addEventListener" in window) {
      window.addEventListener("unhandledrejection", t);
    } else {
      window.onunhandledrejection = function (e, n) {
        t({
          detail: {
            reason: e,
            promise: n
          }
        });
      };
    }
  };
  function st(e) {
    if (e === null || e === undefined) {
      return "undefined (or null)";
    } else if (q(e)) {
      (t = {})[Object.prototype.toString.call(e)] = {
        name: e.name,
        message: e.message,
        code: e.code,
        stack: e.stack
      };
      return t;
    } else {
      return e;
    }
    var t;
  }
  function rt(e) {
    return function (t, n) {
      if (n.file === e.toString()) {
        return t;
      } else {
        n.method &&= n.method.replace(/^\s+/, "");
        return t.concat(n);
      }
    };
  }
  var ot = {
    init: function (e) {
      var t = window.onerror;
      window.onerror = function (n, i, a, s, r) {
        if (a === 0 && /Script error\.?/.test(n)) {
          e._logger.warn("Ignoring cross-domain or eval script error. See docs: https://tinyurl.com/y94fq5zm");
        } else {
          var o = {
            severity: "error",
            unhandled: true,
            severityReason: {
              type: "unhandledException"
            }
          };
          var l = undefined;
          if (r) {
            if (r.name && r.message) {
              l = new e.BugsnagReport(r.name, r.message, lt(e.BugsnagReport.getStacktrace(r), i, a, s), o);
            } else {
              (l = new e.BugsnagReport("window.onerror", String(r), lt(e.BugsnagReport.getStacktrace(r, 1), i, a, s), o)).updateMetaData("window onerror", {
                error: r
              });
            }
          } else if (typeof n != "object" || n === null || i || a || s || r) {
            (l = new e.BugsnagReport("window.onerror", String(n), lt(e.BugsnagReport.getStacktrace(r, 1), i, a, s), o)).updateMetaData("window onerror", {
              event: n
            });
          } else {
            var u = n.type ? "Event: " + n.type : "window.onerror";
            var c = n.message || n.detail || "";
            (l = new e.BugsnagReport(u, c, e.BugsnagReport.getStacktrace(new Error(), 1).slice(1), o)).updateMetaData("window onerror", {
              event: n
            });
          }
          e.notify(l);
          if (typeof t == "function") {
            t(n, i, a, s, r);
          }
        }
      };
    }
  };
  function lt(e, t, n, i) {
    var a = e[0];
    if (a) {
      if (!a.fileName) {
        a.setFileName(t);
      }
      if (!a.lineNumber) {
        a.setLineNumber(n);
      }
      if (!a.columnNumber) {
        if (i !== undefined) {
          a.setColumnNumber(i);
        } else if (window.event && window.event.errorCharacter) {
          a.setColumnNumber(window.event && window.event.errorCharacter);
        }
      }
      return e;
    } else {
      return e;
    }
  }
  function ut(e, t, n) {
    return JSON.stringify(function ensureProperties(e) {
      var t = [];
      var n = 0;
      return function visit(e, i) {
        function edgesExceeded() {
          return i > dt && n > _t;
        }
        n++;
        if (i === undefined) {
          i = 0;
        }
        if (i > ct) {
          return mt;
        }
        if (edgesExceeded()) {
          return mt;
        }
        if (e === null || typeof e != "object") {
          return e;
        }
        if (function find(e, t) {
          for (var n = 0, i = e.length; n < i; n++) {
            if (e[n] === t) {
              return true;
            }
          }
          return false;
        }(t, e)) {
          return "[Circular]";
        }
        t.push(e);
        if (typeof e.toJSON == "function") {
          try {
            n--;
            var a = visit(e.toJSON(), i);
            t.pop();
            return a;
          } catch (e) {
            return throwsMessage(e);
          }
        }
        if (function __isArray_32(e) {
          return Object.prototype.toString.call(e) === "[object Array]";
        }(e)) {
          var s = [];
          for (var r = 0, o = e.length; r < o; r++) {
            if (edgesExceeded()) {
              s.push(mt);
              break;
            }
            s.push(visit(e[r], i + 1));
          }
          t.pop();
          return s;
        }
        var l = {};
        try {
          for (var u in e) {
            if (Object.prototype.hasOwnProperty.call(e, u)) {
              if (edgesExceeded()) {
                l[u] = mt;
                break;
              }
              l[u] = visit(safelyGetProp(e, u), i + 1);
            }
          }
        } catch (e) {}
        t.pop();
        return l;
      }(e);
    }(e), t, n);
  }
  var ct = 20;
  var _t = 25000;
  var dt = 8;
  var mt = "...";
  function throwsMessage(e) {
    return "[Throws: " + (e ? e.message : "?") + "]";
  }
  function safelyGetProp(e, t) {
    try {
      return e[t];
    } catch (e) {
      return throwsMessage(e);
    }
  }
  function ht(e) {
    var t = ut(e);
    if (t.length > 1000000 && (delete e.events[0].metaData, e.events[0].metaData = {
      notifier: "WARNING!\nSerialized payload was " + t.length / 1000000 + "MB (limit = 1MB)\nmetaData was removed"
    }, (t = ut(e)).length > 1000000)) {
      throw new Error("payload exceeded 1MB limit");
    }
    return t;
  }
  var pt = {};
  var gt = a.isoDate;
  pt = {
    sendReport: function (e, t, n, i = function () {}) {
      var a = Et(t, "notify", "4.0");
      var s = new window.XDomainRequest();
      s.onload = function () {
        i(null, s.responseText);
      };
      s.open("POST", a);
      setTimeout(function () {
        try {
          s.send(ht(n));
        } catch (t) {
          e.error(t);
        }
      }, 0);
    },
    sendSession: function (e, t, n, i = function () {}) {
      var a = Et(t, "sessions", "1.0");
      var s = new window.XDomainRequest();
      s.onload = function () {
        i(null, s.responseText);
      };
      s.open("POST", a);
      setTimeout(function () {
        try {
          s.send(ut(n));
        } catch (t) {
          e.error(t);
        }
      }, 0);
    }
  };
  function Et(e, t, n) {
    return Ct(e.endpoints[t], window.location.protocol) + "?apiKey=" + encodeURIComponent(e.apiKey) + "&payloadVersion=" + n + "&sentAt=" + encodeURIComponent(gt());
  }
  var Ct = pt._matchPageProtocol = function (e, t) {
    if (t === "http:") {
      return e.replace(/^https:/, "http:");
    } else {
      return e;
    }
  };
  var ft = a.isoDate;
  var Tt = {
    sendReport: function (e, t, n, i = function () {}) {
      try {
        var a = t.endpoints.notify;
        var s = new window.XMLHttpRequest();
        s.onreadystatechange = function () {
          if (s.readyState === window.XMLHttpRequest.DONE) {
            i(null, s.responseText);
          }
        };
        s.open("POST", a);
        s.setRequestHeader("Content-Type", "application/json");
        s.setRequestHeader("Bugsnag-Api-Key", n.apiKey || t.apiKey);
        s.setRequestHeader("Bugsnag-Payload-Version", "4.0");
        s.setRequestHeader("Bugsnag-Sent-At", ft());
        s.send(ht(n));
      } catch (t) {
        e.error(t);
      }
    },
    sendSession: function (e, t, n, i = function () {}) {
      try {
        var a = t.endpoints.sessions;
        var s = new window.XMLHttpRequest();
        s.onreadystatechange = function () {
          if (s.readyState === window.XMLHttpRequest.DONE) {
            i(null, s.responseText);
          }
        };
        s.open("POST", a);
        s.setRequestHeader("Content-Type", "application/json");
        s.setRequestHeader("Bugsnag-Api-Key", t.apiKey);
        s.setRequestHeader("Bugsnag-Payload-Version", "1.0");
        s.setRequestHeader("Bugsnag-Sent-At", ft());
        s.send(ut(n));
      } catch (t) {
        e.error(t);
      }
    }
  };
  var St = {};
  var yt = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n) {
        if (Object.prototype.hasOwnProperty.call(n, i)) {
          e[i] = n[i];
        }
      }
    }
    return e;
  };
  var It = a.map;
  var vt = a.reduce;
  var At = yt({}, u.schema, ce);
  var Ot = [ot, it, Te, Ee, Ke, re, de, Me, Ne, Oe, Se, Qe, be, Je];
  St = function (e, t = []) {
    if (typeof e == "string") {
      e = {
        apiKey: e
      };
    }
    var n = [];
    if (e.sessionTrackingEnabled) {
      n.push("deprecated option sessionTrackingEnabled is now called autoCaptureSessions");
      e.autoCaptureSessions = e.sessionTrackingEnabled;
    }
    if ((!!e.endpoint || !!e.sessionEndpoint) && !e.endpoints) {
      n.push("deprecated options endpoint/sessionEndpoint are now configured in the endpoints object");
      e.endpoints = {
        notify: e.endpoint,
        sessions: e.sessionEndpoint
      };
    }
    if (e.endpoints && e.endpoints.notify && !e.endpoints.sessions) {
      n.push("notify endpoint is set but sessions endpoint is not. No sessions will be sent.");
    }
    var i = vt([].concat(Ot).concat(t), function (e, t) {
      if (t.configSchema) {
        return yt({}, e, t.configSchema);
      } else {
        return e;
      }
    }, At);
    var a = new ae({
      name: "Bugsnag JavaScript",
      version: "4.7.3",
      url: "https://github.com/bugsnag/bugsnag-js"
    }, i);
    a.transport(window.XDomainRequest ? pt : Tt);
    a.configure(e);
    It(n, function (e) {
      return a._logger.warn(e);
    });
    a.use(Te);
    a.use(Ee);
    a.use(Ke);
    a.use(Se);
    a.use(re);
    a.use(Qe);
    a.use(be);
    a.use(Je);
    if (a.config.autoNotify !== false) {
      a.use(ot);
      a.use(it);
    }
    if (Lt(a.config, "navigationBreadcrumbsEnabled")) {
      a.use(Ne);
    }
    if (Lt(a.config, "interactionBreadcrumbsEnabled")) {
      a.use(Oe);
    }
    if (Lt(a.config, "networkBreadcrumbsEnabled")) {
      a.use(Me);
    }
    if (Lt(a.config, "consoleBreadcrumbsEnabled", false)) {
      a.use(de);
    }
    It(t, function (e) {
      return a.use(e);
    });
    if (a.config.autoCaptureSessions) {
      return a.startSession();
    } else {
      return a;
    }
  };
  function Lt(e, t) {
    var n = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
    if (typeof e[t] == "boolean") {
      return e[t];
    } else {
      return e.autoBreadcrumbs && (n || !/^dev(elopment)?$/.test(e.releaseStage));
    }
  }
  St.Bugsnag = {
    Client: ae,
    Report: N,
    Session: j,
    Breadcrumb: r
  };
  St.default = St;
  return St;
}();