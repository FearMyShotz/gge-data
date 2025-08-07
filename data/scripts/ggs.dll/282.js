module.exports = Transform;
var i = require("./75.js").codes;
var a = i.ERR_METHOD_NOT_IMPLEMENTED;
var s = i.ERR_MULTIPLE_CALLBACK;
var r = i.ERR_TRANSFORM_ALREADY_TRANSFORMING;
var o = i.ERR_TRANSFORM_WITH_LENGTH_0;
var l = require("./76.js");
function Transform(e) {
  if (!(this instanceof Transform)) {
    return new Transform(e);
  }
  l.call(this, e);
  this._transformState = {
    afterTransform: function afterTransform(e, t) {
      var n = this._transformState;
      n.transforming = false;
      var i = n.writecb;
      if (i === null) {
        return this.emit("error", new s());
      }
      n.writechunk = null;
      n.writecb = null;
      if (t != null) {
        this.push(t);
      }
      i(e);
      var a = this._readableState;
      a.reading = false;
      if (a.needReadable || a.length < a.highWaterMark) {
        this._read(a.highWaterMark);
      }
    }.bind(this),
    needTransform: false,
    transforming: false,
    writecb: null,
    writechunk: null,
    writeencoding: null
  };
  this._readableState.needReadable = true;
  this._readableState.sync = false;
  if (e) {
    if (typeof e.transform == "function") {
      this._transform = e.transform;
    }
    if (typeof e.flush == "function") {
      this._flush = e.flush;
    }
  }
  this.on("prefinish", prefinish);
}
function prefinish() {
  var e = this;
  if (typeof this._flush != "function" || this._readableState.destroyed) {
    done(this, null, null);
  } else {
    this._flush(function (t, n) {
      done(e, t, n);
    });
  }
}
function done(e, t, n) {
  if (t) {
    return e.emit("error", t);
  }
  if (n != null) {
    e.push(n);
  }
  if (e._writableState.length) {
    throw new o();
  }
  if (e._transformState.transforming) {
    throw new r();
  }
  return e.push(null);
}
require("./94.js")(Transform, l);
Transform.prototype.push = function (e, t) {
  this._transformState.needTransform = false;
  return l.prototype.push.call(this, e, t);
};
Transform.prototype._transform = function (e, t, n) {
  n(new a("_transform()"));
};
Transform.prototype._write = function (e, t, n) {
  var i = this._transformState;
  i.writecb = n;
  i.writechunk = e;
  i.writeencoding = t;
  if (!i.transforming) {
    var a = this._readableState;
    if (i.needTransform || a.needReadable || a.length < a.highWaterMark) {
      this._read(a.highWaterMark);
    }
  }
};
Transform.prototype._read = function (e) {
  var t = this._transformState;
  if (t.writechunk === null || t.transforming) {
    t.needTransform = true;
  } else {
    t.transforming = true;
    this._transform(t.writechunk, t.writeencoding, t.afterTransform);
  }
};
Transform.prototype._destroy = function (e, t) {
  l.prototype._destroy.call(this, e, function (e) {
    t(e);
  });
};