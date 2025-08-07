var n;
var i;
var a = module.exports = {};
function defaultSetTimout() {
  throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
  throw new Error("clearTimeout has not been defined");
}
function runTimeout(e) {
  if (n === setTimeout) {
    return setTimeout(e, 0);
  }
  if ((n === defaultSetTimout || !n) && setTimeout) {
    n = setTimeout;
    return setTimeout(e, 0);
  }
  try {
    return n(e, 0);
  } catch (t) {
    try {
      return n.call(null, e, 0);
    } catch (t) {
      return n.call(this, e, 0);
    }
  }
}
(function () {
  try {
    n = typeof setTimeout == "function" ? setTimeout : defaultSetTimout;
  } catch (e) {
    n = defaultSetTimout;
  }
  try {
    i = typeof clearTimeout == "function" ? clearTimeout : defaultClearTimeout;
  } catch (e) {
    i = defaultClearTimeout;
  }
})();
var s;
var r = [];
var o = false;
var l = -1;
function cleanUpNextTick() {
  if (o && s) {
    o = false;
    if (s.length) {
      r = s.concat(r);
    } else {
      l = -1;
    }
    if (r.length) {
      drainQueue();
    }
  }
}
function drainQueue() {
  if (!o) {
    var e = runTimeout(cleanUpNextTick);
    o = true;
    for (var t = r.length; t;) {
      s = r;
      r = [];
      while (++l < t) {
        if (s) {
          s[l].run();
        }
      }
      l = -1;
      t = r.length;
    }
    s = null;
    o = false;
    (function runClearTimeout(e) {
      if (i === clearTimeout) {
        return clearTimeout(e);
      }
      if ((i === defaultClearTimeout || !i) && clearTimeout) {
        i = clearTimeout;
        return clearTimeout(e);
      }
      try {
        return i(e);
      } catch (t) {
        try {
          return i.call(null, e);
        } catch (t) {
          return i.call(this, e);
        }
      }
    })(e);
  }
}
function Item(e, t) {
  this.fun = e;
  this.array = t;
}
function noop() {}
a.nextTick = function (e) {
  var t = new Array(arguments.length - 1);
  if (arguments.length > 1) {
    for (var n = 1; n < arguments.length; n++) {
      t[n - 1] = arguments[n];
    }
  }
  r.push(new Item(e, t));
  if (r.length === 1 && !o) {
    runTimeout(drainQueue);
  }
};
Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};
a.title = "browser";
a.browser = true;
a.env = {};
a.argv = [];
a.version = "";
a.versions = {};
a.on = noop;
a.addListener = noop;
a.once = noop;
a.off = noop;
a.removeListener = noop;
a.removeAllListeners = noop;
a.emit = noop;
a.prependListener = noop;
a.prependOnceListener = noop;
a.listeners = function (e) {
  return [];
};
a.binding = function (e) {
  throw new Error("process.binding is not supported");
};
a.cwd = function () {
  return "/";
};
a.chdir = function (e) {
  throw new Error("process.chdir is not supported");
};
a.umask = function () {
  return 0;
};