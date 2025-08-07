createjs.Stage;
var n = 0;
var i = 0;
createjs.Touch._handleStart = function (e, t, n, i, a) {
  var s = e.__touch;
  if (s.multitouch || !s.count) {
    var r = s.pointers;
    if (!r[t]) {
      r[t] = n.timeStamp;
      s.count++;
      e._handlePointerDown(t, n, i, a);
    }
  }
};
createjs.Touch._handleEnd = function (e, t, n) {
  var i = e.__touch;
  var a = i.pointers;
  if (a[t]) {
    var s = a[t];
    var r = n.timeStamp - s;
    i.count--;
    n.isLongPressed = r > 250;
    e._handlePointerUp(t, n, true);
    delete a[t];
  }
};
createjs.Touch._IOS_handleEvent = function (e, t) {
  if (e) {
    if (e.__touch.preventDefault && t.preventDefault) {
      t.preventDefault();
    }
    var a = t.changedTouches;
    var s = t.type;
    if (s == "touchstart" && t.touches.length == 1) {
      for (var r = e; r;) {
        if (r._primaryPointerID === -1) {
          r._primaryPointerID = null;
        }
        r = r.nextStage;
      }
    }
    for (var o = 0, l = a.length; o < l; o++) {
      var u = a[o];
      var c = u.identifier;
      if (u.target == e.canvas) {
        if (s == "touchstart") {
          this._handleStart(e, c, t, u.pageX, u.pageY);
        } else if (s == "touchmove") {
          this._handleMove(e, c, t, u.pageX, u.pageY);
        } else if (s == "touchend" || s == "touchcancel") {
          this._handleEnd(e, c, t);
        }
      }
    }
    if (a.length === 1) {
      if (s == "touchstart" && (i = ++i % 2) === 0) {
        n = t.timeStamp;
      }
      if (i === 1 && s == "touchend") {
        if (t.timeStamp - n < 300) {
          e._handleDoubleClick(t);
        }
        n = 0;
      }
    } else {
      i = 0;
    }
  }
};