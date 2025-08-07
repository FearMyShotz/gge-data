var t = require("./47.js");
function emitErrorAndCloseNT(e, t) {
  emitErrorNT(e, t);
  emitCloseNT(e);
}
function emitCloseNT(e) {
  if ((!e._writableState || !!e._writableState.emitClose) && (!e._readableState || !!e._readableState.emitClose)) {
    e.emit("close");
  }
}
function emitErrorNT(e, t) {
  e.emit("error", t);
}
module.exports = {
  destroy: function destroy(e, n) {
    var i = this;
    var a = this._readableState && this._readableState.destroyed;
    var s = this._writableState && this._writableState.destroyed;
    if (a || s) {
      if (n) {
        n(e);
      } else if (e) {
        if (this._writableState) {
          if (!this._writableState.errorEmitted) {
            this._writableState.errorEmitted = true;
            t.nextTick(emitErrorNT, this, e);
          }
        } else {
          t.nextTick(emitErrorNT, this, e);
        }
      }
      return this;
    } else {
      if (this._readableState) {
        this._readableState.destroyed = true;
      }
      if (this._writableState) {
        this._writableState.destroyed = true;
      }
      this._destroy(e || null, function (e) {
        if (!n && e) {
          if (i._writableState) {
            if (i._writableState.errorEmitted) {
              t.nextTick(emitCloseNT, i);
            } else {
              i._writableState.errorEmitted = true;
              t.nextTick(emitErrorAndCloseNT, i, e);
            }
          } else {
            t.nextTick(emitErrorAndCloseNT, i, e);
          }
        } else if (n) {
          t.nextTick(emitCloseNT, i);
          n(e);
        } else {
          t.nextTick(emitCloseNT, i);
        }
      });
      return this;
    }
  },
  undestroy: function undestroy() {
    if (this._readableState) {
      this._readableState.destroyed = false;
      this._readableState.reading = false;
      this._readableState.ended = false;
      this._readableState.endEmitted = false;
    }
    if (this._writableState) {
      this._writableState.destroyed = false;
      this._writableState.ended = false;
      this._writableState.ending = false;
      this._writableState.finalCalled = false;
      this._writableState.prefinished = false;
      this._writableState.finished = false;
      this._writableState.errorEmitted = false;
    }
  },
  errorOrDestroy: function errorOrDestroy(e, t) {
    var n = e._readableState;
    var i = e._writableState;
    if (n && n.autoDestroy || i && i.autoDestroy) {
      e.destroy(t);
    } else {
      e.emit("error", t);
    }
  }
};