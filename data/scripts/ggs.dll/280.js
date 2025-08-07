var t = require("./24.js");
var i = require("./47.js");
function CorkedRequest(e) {
  var t = this;
  this.next = null;
  this.entry = null;
  this.finish = function () {
    (function onCorkedFinish(e, t, n) {
      var i = e.entry;
      e.entry = null;
      while (i) {
        var a = i.callback;
        t.pendingcb--;
        a(n);
        i = i.next;
      }
      t.corkedRequestsFree.next = e;
    })(t, e);
  };
}
var a;
module.exports = Writable;
Writable.WritableState = WritableState;
var s = {
  deprecate: require("./721.js")
};
var r = require("./277.js");
var o = require("./93.js").Buffer;
var l = t.Uint8Array || function () {};
var u;
var c = require("./278.js");
var _ = require("./279.js").getHighWaterMark;
var d = require("./75.js").codes;
var m = d.ERR_INVALID_ARG_TYPE;
var h = d.ERR_METHOD_NOT_IMPLEMENTED;
var p = d.ERR_MULTIPLE_CALLBACK;
var g = d.ERR_STREAM_CANNOT_PIPE;
var E = d.ERR_STREAM_DESTROYED;
var C = d.ERR_STREAM_NULL_VALUES;
var f = d.ERR_STREAM_WRITE_AFTER_END;
var T = d.ERR_UNKNOWN_ENCODING;
var S = c.errorOrDestroy;
function nop() {}
function WritableState(e, t, s) {
  a = a || require("./76.js");
  e = e || {};
  if (typeof s != "boolean") {
    s = t instanceof a;
  }
  this.objectMode = !!e.objectMode;
  if (s) {
    this.objectMode = this.objectMode || !!e.writableObjectMode;
  }
  this.highWaterMark = _(this, e, "writableHighWaterMark", s);
  this.finalCalled = false;
  this.needDrain = false;
  this.ending = false;
  this.ended = false;
  this.finished = false;
  this.destroyed = false;
  var r = e.decodeStrings === false;
  this.decodeStrings = !r;
  this.defaultEncoding = e.defaultEncoding || "utf8";
  this.length = 0;
  this.writing = false;
  this.corked = 0;
  this.sync = true;
  this.bufferProcessing = false;
  this.onwrite = function (e) {
    (function onwrite(e, t) {
      var n = e._writableState;
      var a = n.sync;
      var s = n.writecb;
      if (typeof s != "function") {
        throw new p();
      }
      (function onwriteStateUpdate(e) {
        e.writing = false;
        e.writecb = null;
        e.length -= e.writelen;
        e.writelen = 0;
      })(n);
      if (t) {
        (function onwriteError(e, t, n, a, s) {
          --t.pendingcb;
          if (n) {
            i.nextTick(s, a);
            i.nextTick(finishMaybe, e, t);
            e._writableState.errorEmitted = true;
            S(e, a);
          } else {
            s(a);
            e._writableState.errorEmitted = true;
            S(e, a);
            finishMaybe(e, t);
          }
        })(e, n, a, t, s);
      } else {
        var r = needFinish(n) || e.destroyed;
        if (!r && !n.corked && !n.bufferProcessing && !!n.bufferedRequest) {
          clearBuffer(e, n);
        }
        if (a) {
          i.nextTick(afterWrite, e, n, r, s);
        } else {
          afterWrite(e, n, r, s);
        }
      }
    })(t, e);
  };
  this.writecb = null;
  this.writelen = 0;
  this.bufferedRequest = null;
  this.lastBufferedRequest = null;
  this.pendingcb = 0;
  this.prefinished = false;
  this.errorEmitted = false;
  this.emitClose = e.emitClose !== false;
  this.autoDestroy = !!e.autoDestroy;
  this.bufferedRequestCount = 0;
  this.corkedRequestsFree = new CorkedRequest(this);
}
function Writable(e) {
  var t = this instanceof (a = a || require("./76.js"));
  if (!t && !u.call(Writable, this)) {
    return new Writable(e);
  }
  this._writableState = new WritableState(e, this, t);
  this.writable = true;
  if (e) {
    if (typeof e.write == "function") {
      this._write = e.write;
    }
    if (typeof e.writev == "function") {
      this._writev = e.writev;
    }
    if (typeof e.destroy == "function") {
      this._destroy = e.destroy;
    }
    if (typeof e.final == "function") {
      this._final = e.final;
    }
  }
  r.call(this);
}
function doWrite(e, t, n, i, a, s, r) {
  t.writelen = i;
  t.writecb = r;
  t.writing = true;
  t.sync = true;
  if (t.destroyed) {
    t.onwrite(new E("write"));
  } else if (n) {
    e._writev(a, t.onwrite);
  } else {
    e._write(a, s, t.onwrite);
  }
  t.sync = false;
}
function afterWrite(e, t, n, i) {
  if (!n) {
    (function onwriteDrain(e, t) {
      if (t.length === 0 && t.needDrain) {
        t.needDrain = false;
        e.emit("drain");
      }
    })(e, t);
  }
  t.pendingcb--;
  i();
  finishMaybe(e, t);
}
function clearBuffer(e, t) {
  t.bufferProcessing = true;
  var n = t.bufferedRequest;
  if (e._writev && n && n.next) {
    var i = t.bufferedRequestCount;
    var a = new Array(i);
    var s = t.corkedRequestsFree;
    s.entry = n;
    var r = 0;
    var o = true;
    for (; n;) {
      a[r] = n;
      if (!n.isBuf) {
        o = false;
      }
      n = n.next;
      r += 1;
    }
    a.allBuffers = o;
    doWrite(e, t, true, t.length, a, "", s.finish);
    t.pendingcb++;
    t.lastBufferedRequest = null;
    if (s.next) {
      t.corkedRequestsFree = s.next;
      s.next = null;
    } else {
      t.corkedRequestsFree = new CorkedRequest(t);
    }
    t.bufferedRequestCount = 0;
  } else {
    while (n) {
      var l = n.chunk;
      var u = n.encoding;
      var c = n.callback;
      doWrite(e, t, false, t.objectMode ? 1 : l.length, l, u, c);
      n = n.next;
      t.bufferedRequestCount--;
      if (t.writing) {
        break;
      }
    }
    if (n === null) {
      t.lastBufferedRequest = null;
    }
  }
  t.bufferedRequest = n;
  t.bufferProcessing = false;
}
function needFinish(e) {
  return e.ending && e.length === 0 && e.bufferedRequest === null && !e.finished && !e.writing;
}
function callFinal(e, t) {
  e._final(function (n) {
    t.pendingcb--;
    if (n) {
      S(e, n);
    }
    t.prefinished = true;
    e.emit("prefinish");
    finishMaybe(e, t);
  });
}
function finishMaybe(e, t) {
  var n = needFinish(t);
  if (n && (function prefinish(e, t) {
    if (!t.prefinished && !t.finalCalled) {
      if (typeof e._final != "function" || t.destroyed) {
        t.prefinished = true;
        e.emit("prefinish");
      } else {
        t.pendingcb++;
        t.finalCalled = true;
        i.nextTick(callFinal, e, t);
      }
    }
  }(e, t), t.pendingcb === 0 && (t.finished = true, e.emit("finish"), t.autoDestroy))) {
    var a = e._readableState;
    if (!a || a.autoDestroy && a.endEmitted) {
      e.destroy();
    }
  }
  return n;
}
require("./94.js")(Writable, r);
WritableState.prototype.getBuffer = function getBuffer() {
  for (var e = this.bufferedRequest, t = []; e;) {
    t.push(e);
    e = e.next;
  }
  return t;
};
(function () {
  try {
    Object.defineProperty(WritableState.prototype, "buffer", {
      get: s.deprecate(function writableStateBufferGetter() {
        return this.getBuffer();
      }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
    });
  } catch (e) {}
})();
if (typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function") {
  u = Function.prototype[Symbol.hasInstance];
  Object.defineProperty(Writable, Symbol.hasInstance, {
    value: function value(e) {
      return !!u.call(this, e) || this === Writable && e && e._writableState instanceof WritableState;
    }
  });
} else {
  u = function realHasInstance(e) {
    return e instanceof this;
  };
}
Writable.prototype.pipe = function () {
  S(this, new g());
};
Writable.prototype.write = function (e, t, n) {
  var a = this._writableState;
  var s = false;
  var r = !a.objectMode && function _isUint8Array(e) {
    return o.isBuffer(e) || e instanceof l;
  }(e);
  if (r && !o.isBuffer(e)) {
    e = function _uint8ArrayToBuffer(e) {
      return o.from(e);
    }(e);
  }
  if (typeof t == "function") {
    n = t;
    t = null;
  }
  if (r) {
    t = "buffer";
  } else {
    t ||= a.defaultEncoding;
  }
  if (typeof n != "function") {
    n = nop;
  }
  if (a.ending) {
    (function writeAfterEnd(e, t) {
      var n = new f();
      S(e, n);
      i.nextTick(t, n);
    })(this, n);
  } else if (r || function validChunk(e, t, n, a) {
    var s;
    if (n === null) {
      s = new C();
    } else if (typeof n != "string" && !t.objectMode) {
      s = new m("chunk", ["string", "Buffer"], n);
    }
    return !s || (S(e, s), i.nextTick(a, s), false);
  }(this, a, e, n)) {
    a.pendingcb++;
    s = function writeOrBuffer(e, t, n, i, a, s) {
      if (!n) {
        var r = function decodeChunk(e, t, n) {
          if (!e.objectMode && e.decodeStrings !== false && typeof t == "string") {
            t = o.from(t, n);
          }
          return t;
        }(t, i, a);
        if (i !== r) {
          n = true;
          a = "buffer";
          i = r;
        }
      }
      var l = t.objectMode ? 1 : i.length;
      t.length += l;
      var u = t.length < t.highWaterMark;
      if (!u) {
        t.needDrain = true;
      }
      if (t.writing || t.corked) {
        var c = t.lastBufferedRequest;
        t.lastBufferedRequest = {
          chunk: i,
          encoding: a,
          isBuf: n,
          callback: s,
          next: null
        };
        if (c) {
          c.next = t.lastBufferedRequest;
        } else {
          t.bufferedRequest = t.lastBufferedRequest;
        }
        t.bufferedRequestCount += 1;
      } else {
        doWrite(e, t, false, l, i, a, s);
      }
      return u;
    }(this, a, r, e, t, n);
  }
  return s;
};
Writable.prototype.cork = function () {
  this._writableState.corked++;
};
Writable.prototype.uncork = function () {
  var e = this._writableState;
  if (e.corked) {
    e.corked--;
    if (!e.writing && !e.corked && !e.bufferProcessing && !!e.bufferedRequest) {
      clearBuffer(this, e);
    }
  }
};
Writable.prototype.setDefaultEncoding = function setDefaultEncoding(e) {
  if (typeof e == "string") {
    e = e.toLowerCase();
  }
  if (!(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1)) {
    throw new T(e);
  }
  this._writableState.defaultEncoding = e;
  return this;
};
Object.defineProperty(Writable.prototype, "writableBuffer", {
  enumerable: false,
  get: function get() {
    return this._writableState && this._writableState.getBuffer();
  }
});
Object.defineProperty(Writable.prototype, "writableHighWaterMark", {
  enumerable: false,
  get: function get() {
    return this._writableState.highWaterMark;
  }
});
Writable.prototype._write = function (e, t, n) {
  n(new h("_write()"));
};
Writable.prototype._writev = null;
Writable.prototype.end = function (e, t, n) {
  var a = this._writableState;
  if (typeof e == "function") {
    n = e;
    e = null;
    t = null;
  } else if (typeof t == "function") {
    n = t;
    t = null;
  }
  if (e !== null && e !== undefined) {
    this.write(e, t);
  }
  if (a.corked) {
    a.corked = 1;
    this.uncork();
  }
  if (!a.ending) {
    (function endWritable(e, t, n) {
      t.ending = true;
      finishMaybe(e, t);
      if (n) {
        if (t.finished) {
          i.nextTick(n);
        } else {
          e.once("finish", n);
        }
      }
      t.ended = true;
      e.writable = false;
    })(this, a, n);
  }
  return this;
};
Object.defineProperty(Writable.prototype, "writableLength", {
  enumerable: false,
  get: function get() {
    return this._writableState.length;
  }
});
Object.defineProperty(Writable.prototype, "destroyed", {
  enumerable: false,
  get: function get() {
    return this._writableState !== undefined && this._writableState.destroyed;
  },
  set: function set(e) {
    if (this._writableState) {
      this._writableState.destroyed = e;
    }
  }
});
Writable.prototype.destroy = c.destroy;
Writable.prototype._undestroy = c.undestroy;
Writable.prototype._destroy = function (e, t) {
  t(e);
};