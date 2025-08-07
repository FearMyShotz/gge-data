var t = require("./24.js");
var i = require("./47.js");
var a;
module.exports = Readable;
Readable.ReadableState = ReadableState;
require("./276.js").EventEmitter;
var s = function EElistenerCount(e, t) {
  return e.listeners(t).length;
};
var r = require("./277.js");
var o = require("./93.js").Buffer;
var l = t.Uint8Array || function () {};
var u;
var c = require("./718.js");
u = c && c.debuglog ? c.debuglog("stream") : function debug() {};
var _;
var d;
var m;
var h = require("./719.js");
var p = require("./278.js");
var g = require("./279.js").getHighWaterMark;
var E = require("./75.js").codes;
var C = E.ERR_INVALID_ARG_TYPE;
var f = E.ERR_STREAM_PUSH_AFTER_EOF;
var T = E.ERR_METHOD_NOT_IMPLEMENTED;
var S = E.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
require("./94.js")(Readable, r);
var y = p.errorOrDestroy;
var I = ["error", "close", "destroy", "pause", "resume"];
function ReadableState(e, t, i) {
  a = a || require("./76.js");
  e = e || {};
  if (typeof i != "boolean") {
    i = t instanceof a;
  }
  this.objectMode = !!e.objectMode;
  if (i) {
    this.objectMode = this.objectMode || !!e.readableObjectMode;
  }
  this.highWaterMark = g(this, e, "readableHighWaterMark", i);
  this.buffer = new h();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false;
  this.sync = true;
  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false;
  this.paused = true;
  this.emitClose = e.emitClose !== false;
  this.autoDestroy = !!e.autoDestroy;
  this.destroyed = false;
  this.defaultEncoding = e.defaultEncoding || "utf8";
  this.awaitDrain = 0;
  this.readingMore = false;
  this.decoder = null;
  this.encoding = null;
  if (e.encoding) {
    _ ||= require("./281.js").StringDecoder;
    this.decoder = new _(e.encoding);
    this.encoding = e.encoding;
  }
}
function Readable(e) {
  a = a || require("./76.js");
  if (!(this instanceof Readable)) {
    return new Readable(e);
  }
  var t = this instanceof a;
  this._readableState = new ReadableState(e, this, t);
  this.readable = true;
  if (e) {
    if (typeof e.read == "function") {
      this._read = e.read;
    }
    if (typeof e.destroy == "function") {
      this._destroy = e.destroy;
    }
  }
  r.call(this);
}
function readableAddChunk(e, t, n, i, a) {
  u("readableAddChunk", t);
  var s;
  var r = e._readableState;
  if (t === null) {
    r.reading = false;
    (function onEofChunk(e, t) {
      u("onEofChunk");
      if (t.ended) {
        return;
      }
      if (t.decoder) {
        var n = t.decoder.end();
        if (n && n.length) {
          t.buffer.push(n);
          t.length += t.objectMode ? 1 : n.length;
        }
      }
      t.ended = true;
      if (t.sync) {
        emitReadable(e);
      } else {
        t.needReadable = false;
        if (!t.emittedReadable) {
          t.emittedReadable = true;
          emitReadable_(e);
        }
      }
    })(e, r);
  } else {
    if (!a) {
      s = function chunkInvalid(e, t) {
        var n;
        if (!function _isUint8Array(e) {
          return o.isBuffer(e) || e instanceof l;
        }(t) && typeof t != "string" && t !== undefined && !e.objectMode) {
          n = new C("chunk", ["string", "Buffer", "Uint8Array"], t);
        }
        return n;
      }(r, t);
    }
    if (s) {
      y(e, s);
    } else if (r.objectMode || t && t.length > 0) {
      if (typeof t != "string" && !r.objectMode && Object.getPrototypeOf(t) !== o.prototype) {
        t = function _uint8ArrayToBuffer(e) {
          return o.from(e);
        }(t);
      }
      if (i) {
        if (r.endEmitted) {
          y(e, new S());
        } else {
          addChunk(e, r, t, true);
        }
      } else if (r.ended) {
        y(e, new f());
      } else {
        if (r.destroyed) {
          return false;
        }
        r.reading = false;
        if (r.decoder && !n) {
          t = r.decoder.write(t);
          if (r.objectMode || t.length !== 0) {
            addChunk(e, r, t, false);
          } else {
            maybeReadMore(e, r);
          }
        } else {
          addChunk(e, r, t, false);
        }
      }
    } else if (!i) {
      r.reading = false;
      maybeReadMore(e, r);
    }
  }
  return !r.ended && (r.length < r.highWaterMark || r.length === 0);
}
function addChunk(e, t, n, i) {
  if (t.flowing && t.length === 0 && !t.sync) {
    t.awaitDrain = 0;
    e.emit("data", n);
  } else {
    t.length += t.objectMode ? 1 : n.length;
    if (i) {
      t.buffer.unshift(n);
    } else {
      t.buffer.push(n);
    }
    if (t.needReadable) {
      emitReadable(e);
    }
  }
  maybeReadMore(e, t);
}
Object.defineProperty(Readable.prototype, "destroyed", {
  enumerable: false,
  get: function get() {
    return this._readableState !== undefined && this._readableState.destroyed;
  },
  set: function set(e) {
    if (this._readableState) {
      this._readableState.destroyed = e;
    }
  }
});
Readable.prototype.destroy = p.destroy;
Readable.prototype._undestroy = p.undestroy;
Readable.prototype._destroy = function (e, t) {
  t(e);
};
Readable.prototype.push = function (e, t) {
  var n;
  var i = this._readableState;
  if (i.objectMode) {
    n = true;
  } else if (typeof e == "string") {
    if ((t = t || i.defaultEncoding) !== i.encoding) {
      e = o.from(e, t);
      t = "";
    }
    n = true;
  }
  return readableAddChunk(this, e, t, false, n);
};
Readable.prototype.unshift = function (e) {
  return readableAddChunk(this, e, null, true, false);
};
Readable.prototype.isPaused = function () {
  return this._readableState.flowing === false;
};
Readable.prototype.setEncoding = function (e) {
  _ ||= require("./281.js").StringDecoder;
  var t = new _(e);
  this._readableState.decoder = t;
  this._readableState.encoding = this._readableState.decoder.encoding;
  for (var i = this._readableState.buffer.head, a = ""; i !== null;) {
    a += t.write(i.data);
    i = i.next;
  }
  this._readableState.buffer.clear();
  if (a !== "") {
    this._readableState.buffer.push(a);
  }
  this._readableState.length = a.length;
  return this;
};
var v = 1073741824;
function howMuchToRead(e, t) {
  if (e <= 0 || t.length === 0 && t.ended) {
    return 0;
  } else if (t.objectMode) {
    return 1;
  } else if (e != e) {
    if (t.flowing && t.length) {
      return t.buffer.head.data.length;
    } else {
      return t.length;
    }
  } else {
    if (e > t.highWaterMark) {
      t.highWaterMark = function computeNewHighWaterMark(e) {
        if (e >= v) {
          e = v;
        } else {
          e--;
          e |= e >>> 1;
          e |= e >>> 2;
          e |= e >>> 4;
          e |= e >>> 8;
          e |= e >>> 16;
          e++;
        }
        return e;
      }(e);
    }
    if (e <= t.length) {
      return e;
    } else if (t.ended) {
      return t.length;
    } else {
      t.needReadable = true;
      return 0;
    }
  }
}
function emitReadable(e) {
  var t = e._readableState;
  u("emitReadable", t.needReadable, t.emittedReadable);
  t.needReadable = false;
  if (!t.emittedReadable) {
    u("emitReadable", t.flowing);
    t.emittedReadable = true;
    i.nextTick(emitReadable_, e);
  }
}
function emitReadable_(e) {
  var t = e._readableState;
  u("emitReadable_", t.destroyed, t.length, t.ended);
  if (!t.destroyed && (!!t.length || !!t.ended)) {
    e.emit("readable");
    t.emittedReadable = false;
  }
  t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark;
  flow(e);
}
function maybeReadMore(e, t) {
  if (!t.readingMore) {
    t.readingMore = true;
    i.nextTick(maybeReadMore_, e, t);
  }
}
function maybeReadMore_(e, t) {
  while (!t.reading && !t.ended && (t.length < t.highWaterMark || t.flowing && t.length === 0)) {
    var n = t.length;
    u("maybeReadMore read 0");
    e.read(0);
    if (n === t.length) {
      break;
    }
  }
  t.readingMore = false;
}
function updateReadableListening(e) {
  var t = e._readableState;
  t.readableListening = e.listenerCount("readable") > 0;
  if (t.resumeScheduled && !t.paused) {
    t.flowing = true;
  } else if (e.listenerCount("data") > 0) {
    e.resume();
  }
}
function nReadingNextTick(e) {
  u("readable nexttick read 0");
  e.read(0);
}
function resume_(e, t) {
  u("resume", t.reading);
  if (!t.reading) {
    e.read(0);
  }
  t.resumeScheduled = false;
  e.emit("resume");
  flow(e);
  if (t.flowing && !t.reading) {
    e.read(0);
  }
}
function flow(e) {
  var t = e._readableState;
  for (u("flow", t.flowing); t.flowing && e.read() !== null;);
}
function fromList(e, t) {
  if (t.length === 0) {
    return null;
  } else {
    if (t.objectMode) {
      n = t.buffer.shift();
    } else if (!e || e >= t.length) {
      n = t.decoder ? t.buffer.join("") : t.buffer.length === 1 ? t.buffer.first() : t.buffer.concat(t.length);
      t.buffer.clear();
    } else {
      n = t.buffer.consume(e, t.decoder);
    }
    return n;
  }
  var n;
}
function endReadable(e) {
  var t = e._readableState;
  u("endReadable", t.endEmitted);
  if (!t.endEmitted) {
    t.ended = true;
    i.nextTick(endReadableNT, t, e);
  }
}
function endReadableNT(e, t) {
  u("endReadableNT", e.endEmitted, e.length);
  if (!e.endEmitted && e.length === 0 && (e.endEmitted = true, t.readable = false, t.emit("end"), e.autoDestroy)) {
    var n = t._writableState;
    if (!n || n.autoDestroy && n.finished) {
      t.destroy();
    }
  }
}
function indexOf(e, t) {
  for (var n = 0, i = e.length; n < i; n++) {
    if (e[n] === t) {
      return n;
    }
  }
  return -1;
}
Readable.prototype.read = function (e) {
  u("read", e);
  e = parseInt(e, 10);
  var t = this._readableState;
  var n = e;
  if (e !== 0) {
    t.emittedReadable = false;
  }
  if (e === 0 && t.needReadable && ((t.highWaterMark !== 0 ? t.length >= t.highWaterMark : t.length > 0) || t.ended)) {
    u("read: emitReadable", t.length, t.ended);
    if (t.length === 0 && t.ended) {
      endReadable(this);
    } else {
      emitReadable(this);
    }
    return null;
  }
  if ((e = howMuchToRead(e, t)) === 0 && t.ended) {
    if (t.length === 0) {
      endReadable(this);
    }
    return null;
  }
  var i;
  var a = t.needReadable;
  u("need readable", a);
  if (t.length === 0 || t.length - e < t.highWaterMark) {
    u("length less than watermark", a = true);
  }
  if (t.ended || t.reading) {
    u("reading or ended", a = false);
  } else if (a) {
    u("do read");
    t.reading = true;
    t.sync = true;
    if (t.length === 0) {
      t.needReadable = true;
    }
    this._read(t.highWaterMark);
    t.sync = false;
    if (!t.reading) {
      e = howMuchToRead(n, t);
    }
  }
  if ((i = e > 0 ? fromList(e, t) : null) === null) {
    t.needReadable = t.length <= t.highWaterMark;
    e = 0;
  } else {
    t.length -= e;
    t.awaitDrain = 0;
  }
  if (t.length === 0) {
    if (!t.ended) {
      t.needReadable = true;
    }
    if (n !== e && t.ended) {
      endReadable(this);
    }
  }
  if (i !== null) {
    this.emit("data", i);
  }
  return i;
};
Readable.prototype._read = function (e) {
  y(this, new T("_read()"));
};
Readable.prototype.pipe = function (e, t) {
  var n = this;
  var a = this._readableState;
  switch (a.pipesCount) {
    case 0:
      a.pipes = e;
      break;
    case 1:
      a.pipes = [a.pipes, e];
      break;
    default:
      a.pipes.push(e);
  }
  a.pipesCount += 1;
  u("pipe count=%d opts=%j", a.pipesCount, t);
  var r = (!t || t.end !== false) && e !== i.stdout && e !== i.stderr ? onend : unpipe;
  function onunpipe(t, i) {
    u("onunpipe");
    if (t === n && i && i.hasUnpiped === false) {
      i.hasUnpiped = true;
      (function cleanup() {
        u("cleanup");
        e.removeListener("close", onclose);
        e.removeListener("finish", onfinish);
        e.removeListener("drain", o);
        e.removeListener("error", onerror);
        e.removeListener("unpipe", onunpipe);
        n.removeListener("end", onend);
        n.removeListener("end", unpipe);
        n.removeListener("data", ondata);
        l = true;
        if (!!a.awaitDrain && (!e._writableState || !!e._writableState.needDrain)) {
          o();
        }
      })();
    }
  }
  function onend() {
    u("onend");
    e.end();
  }
  if (a.endEmitted) {
    i.nextTick(r);
  } else {
    n.once("end", r);
  }
  e.on("unpipe", onunpipe);
  var o = function pipeOnDrain(e) {
    return function pipeOnDrainFunctionResult() {
      var t = e._readableState;
      u("pipeOnDrain", t.awaitDrain);
      if (t.awaitDrain) {
        t.awaitDrain--;
      }
      if (t.awaitDrain === 0 && s(e, "data")) {
        t.flowing = true;
        flow(e);
      }
    };
  }(n);
  e.on("drain", o);
  var l = false;
  function ondata(t) {
    u("ondata");
    var i = e.write(t);
    u("dest.write", i);
    if (i === false) {
      if ((a.pipesCount === 1 && a.pipes === e || a.pipesCount > 1 && indexOf(a.pipes, e) !== -1) && !l) {
        u("false write response, pause", a.awaitDrain);
        a.awaitDrain++;
      }
      n.pause();
    }
  }
  function onerror(t) {
    u("onerror", t);
    unpipe();
    e.removeListener("error", onerror);
    if (s(e, "error") === 0) {
      y(e, t);
    }
  }
  function onclose() {
    e.removeListener("finish", onfinish);
    unpipe();
  }
  function onfinish() {
    u("onfinish");
    e.removeListener("close", onclose);
    unpipe();
  }
  function unpipe() {
    u("unpipe");
    n.unpipe(e);
  }
  n.on("data", ondata);
  (function prependListener(e, t, n) {
    if (typeof e.prependListener == "function") {
      return e.prependListener(t, n);
    }
    if (e._events && e._events[t]) {
      if (Array.isArray(e._events[t])) {
        e._events[t].unshift(n);
      } else {
        e._events[t] = [n, e._events[t]];
      }
    } else {
      e.on(t, n);
    }
  })(e, "error", onerror);
  e.once("close", onclose);
  e.once("finish", onfinish);
  e.emit("pipe", n);
  if (!a.flowing) {
    u("pipe resume");
    n.resume();
  }
  return e;
};
Readable.prototype.unpipe = function (e) {
  var t = this._readableState;
  var n = {
    hasUnpiped: false
  };
  if (t.pipesCount === 0) {
    return this;
  }
  if (t.pipesCount === 1) {
    if (e && e !== t.pipes) {
      return this;
    } else {
      e ||= t.pipes;
      t.pipes = null;
      t.pipesCount = 0;
      t.flowing = false;
      if (e) {
        e.emit("unpipe", this, n);
      }
      return this;
    }
  }
  if (!e) {
    var i = t.pipes;
    var a = t.pipesCount;
    t.pipes = null;
    t.pipesCount = 0;
    t.flowing = false;
    for (var s = 0; s < a; s++) {
      i[s].emit("unpipe", this, {
        hasUnpiped: false
      });
    }
    return this;
  }
  var r = indexOf(t.pipes, e);
  if (r === -1) {
    return this;
  } else {
    t.pipes.splice(r, 1);
    t.pipesCount -= 1;
    if (t.pipesCount === 1) {
      t.pipes = t.pipes[0];
    }
    e.emit("unpipe", this, n);
    return this;
  }
};
Readable.prototype.on = function (e, t) {
  var n = r.prototype.on.call(this, e, t);
  var a = this._readableState;
  if (e === "data") {
    a.readableListening = this.listenerCount("readable") > 0;
    if (a.flowing !== false) {
      this.resume();
    }
  } else if (e === "readable") {
    if (!a.endEmitted && !a.readableListening) {
      a.readableListening = a.needReadable = true;
      a.flowing = false;
      a.emittedReadable = false;
      u("on readable", a.length, a.reading);
      if (a.length) {
        emitReadable(this);
      } else if (!a.reading) {
        i.nextTick(nReadingNextTick, this);
      }
    }
  }
  return n;
};
Readable.prototype.addListener = Readable.prototype.on;
Readable.prototype.removeListener = function (e, t) {
  var n = r.prototype.removeListener.call(this, e, t);
  if (e === "readable") {
    i.nextTick(updateReadableListening, this);
  }
  return n;
};
Readable.prototype.removeAllListeners = function (e) {
  var t = r.prototype.removeAllListeners.apply(this, arguments);
  if (e === "readable" || e === undefined) {
    i.nextTick(updateReadableListening, this);
  }
  return t;
};
Readable.prototype.resume = function () {
  var e = this._readableState;
  if (!e.flowing) {
    u("resume");
    e.flowing = !e.readableListening;
    (function resume(e, t) {
      if (!t.resumeScheduled) {
        t.resumeScheduled = true;
        i.nextTick(resume_, e, t);
      }
    })(this, e);
  }
  e.paused = false;
  return this;
};
Readable.prototype.pause = function () {
  u("call pause flowing=%j", this._readableState.flowing);
  if (this._readableState.flowing !== false) {
    u("pause");
    this._readableState.flowing = false;
    this.emit("pause");
  }
  this._readableState.paused = true;
  return this;
};
Readable.prototype.wrap = function (e) {
  var t = this;
  var n = this._readableState;
  var i = false;
  e.on("end", function () {
    u("wrapped end");
    if (n.decoder && !n.ended) {
      var e = n.decoder.end();
      if (e && e.length) {
        t.push(e);
      }
    }
    t.push(null);
  });
  e.on("data", function (a) {
    if ((u("wrapped data"), n.decoder && (a = n.decoder.write(a)), !n.objectMode || a !== null && a !== undefined) && (n.objectMode || a && a.length)) {
      if (!t.push(a)) {
        i = true;
        e.pause();
      }
    }
  });
  for (var a in e) {
    if (this[a] === undefined && typeof e[a] == "function") {
      this[a] = function methodWrap(t) {
        return function methodWrapReturnFunction() {
          return e[t].apply(e, arguments);
        };
      }(a);
    }
  }
  for (var s = 0; s < I.length; s++) {
    e.on(I[s], this.emit.bind(this, I[s]));
  }
  this._read = function (t) {
    u("wrapped _read", t);
    if (i) {
      i = false;
      e.resume();
    }
  };
  return this;
};
if (typeof Symbol == "function") {
  Readable.prototype[Symbol.asyncIterator] = function () {
    if (d === undefined) {
      d = require("./723.js");
    }
    return d(this);
  };
}
Object.defineProperty(Readable.prototype, "readableHighWaterMark", {
  enumerable: false,
  get: function get() {
    return this._readableState.highWaterMark;
  }
});
Object.defineProperty(Readable.prototype, "readableBuffer", {
  enumerable: false,
  get: function get() {
    return this._readableState && this._readableState.buffer;
  }
});
Object.defineProperty(Readable.prototype, "readableFlowing", {
  enumerable: false,
  get: function get() {
    return this._readableState.flowing;
  },
  set: function set(e) {
    if (this._readableState) {
      this._readableState.flowing = e;
    }
  }
});
Readable._fromList = fromList;
Object.defineProperty(Readable.prototype, "readableLength", {
  enumerable: false,
  get: function get() {
    return this._readableState.length;
  }
});
if (typeof Symbol == "function") {
  Readable.from = function (e, t) {
    if (m === undefined) {
      m = require("./724.js");
    }
    return m(Readable, e, t);
  };
}