var i;
var a;
/*!
 * js-logger - http://github.com/jonnyreeves/js-logger
 * Jonny Reeves, http://jonnyreeves.co.uk/
 * js-logger may be freely distributed under the MIT license.
 */
/*!
 * js-logger - http://github.com/jonnyreeves/js-logger
 * Jonny Reeves, http://jonnyreeves.co.uk/
 * js-logger may be freely distributed under the MIT license.
 */
(function (s) {
  'use strict';

  var r;
  var o = {
    VERSION: "1.6.1"
  };
  var l = {};
  function u(e, t) {
    return function () {
      return t.apply(e, arguments);
    };
  }
  function c() {
    var e;
    var t;
    var n = arguments;
    var i = n[0];
    for (t = 1; t < n.length; t++) {
      for (e in n[t]) {
        if (!(e in i) && !!n[t].hasOwnProperty(e)) {
          i[e] = n[t][e];
        }
      }
    }
    return i;
  }
  function _(e, t) {
    return {
      value: e,
      name: t
    };
  }
  o.TRACE = _(1, "TRACE");
  o.DEBUG = _(2, "DEBUG");
  o.INFO = _(3, "INFO");
  o.TIME = _(4, "TIME");
  o.WARN = _(5, "WARN");
  o.ERROR = _(8, "ERROR");
  o.OFF = _(99, "OFF");
  function d(e) {
    this.context = e;
    this.setLevel(e.filterLevel);
    this.log = this.info;
  }
  d.prototype = {
    setLevel: function (e) {
      if (e && "value" in e) {
        this.context.filterLevel = e;
      }
    },
    getLevel: function () {
      return this.context.filterLevel;
    },
    enabledFor: function (e) {
      var t = this.context.filterLevel;
      return e.value >= t.value;
    },
    trace: function () {
      this.invoke(o.TRACE, arguments);
    },
    debug: function () {
      this.invoke(o.DEBUG, arguments);
    },
    info: function () {
      this.invoke(o.INFO, arguments);
    },
    warn: function () {
      this.invoke(o.WARN, arguments);
    },
    error: function () {
      this.invoke(o.ERROR, arguments);
    },
    time: function (e) {
      if (typeof e == "string" && e.length > 0) {
        this.invoke(o.TIME, [e, "start"]);
      }
    },
    timeEnd: function (e) {
      if (typeof e == "string" && e.length > 0) {
        this.invoke(o.TIME, [e, "end"]);
      }
    },
    invoke: function (e, t) {
      if (r && this.enabledFor(e)) {
        r(t, c({
          level: e
        }, this.context));
      }
    }
  };
  var m;
  var h = new d({
    filterLevel: o.OFF
  });
  (m = o).enabledFor = u(h, h.enabledFor);
  m.trace = u(h, h.trace);
  m.debug = u(h, h.debug);
  m.time = u(h, h.time);
  m.timeEnd = u(h, h.timeEnd);
  m.info = u(h, h.info);
  m.warn = u(h, h.warn);
  m.error = u(h, h.error);
  m.log = m.info;
  o.setHandler = function (e) {
    r = e;
  };
  o.setLevel = function (e) {
    h.setLevel(e);
    for (var t in l) {
      if (l.hasOwnProperty(t)) {
        l[t].setLevel(e);
      }
    }
  };
  o.getLevel = function () {
    return h.getLevel();
  };
  o.get = function (e) {
    return l[e] ||= new d(c({
      name: e
    }, h.context));
  };
  o.createDefaultHandler = function (e) {
    (e = e || {}).formatter = e.formatter || function defaultMessageFormatter(e, t) {
      if (t.name) {
        e.unshift("[" + t.name + "]");
      }
    };
    var t = {};
    function n(e, t) {
      Function.prototype.apply.call(e, console, t);
    }
    if (typeof console == "undefined") {
      return function () {};
    } else {
      return function (i, a) {
        i = Array.prototype.slice.call(i);
        var s;
        var r = console.log;
        if (a.level === o.TIME) {
          s = (a.name ? "[" + a.name + "] " : "") + i[0];
          if (i[1] === "start") {
            if (console.time) {
              console.time(s);
            } else {
              t[s] = new Date().getTime();
            }
          } else if (console.timeEnd) {
            console.timeEnd(s);
          } else {
            n(r, [s + ": " + (new Date().getTime() - t[s]) + "ms"]);
          }
        } else {
          if (a.level === o.WARN && console.warn) {
            r = console.warn;
          } else if (a.level === o.ERROR && console.error) {
            r = console.error;
          } else if (a.level === o.INFO && console.info) {
            r = console.info;
          } else if (a.level === o.DEBUG && console.debug) {
            r = console.debug;
          } else if (a.level === o.TRACE && console.trace) {
            r = console.trace;
          }
          e.formatter(i, a);
          n(r, i);
        }
      };
    }
  };
  o.useDefaults = function (e) {
    o.setLevel(e && e.defaultLevel || o.DEBUG);
    o.setHandler(o.createDefaultHandler(e));
  };
  o.setDefaults = o.useDefaults;
  if ((a = typeof (i = o) == "function" ? i.call(exports, require, exports, module) : i) !== undefined) {
    module.exports = a;
  }
})();