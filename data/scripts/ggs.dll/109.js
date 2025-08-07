export var RoundPropsPlugin = require("./1.js")._gsScope._gsDefine.plugin({
  propName: "roundProps",
  version: "1.7.0",
  priority: -1,
  API: 2,
  init: function (e, t, n) {
    this._tween = n;
    return true;
  }
});
export function _getRoundFunc(e) {
  var t = e < 1 ? Math.pow(10, (e + "").length - 2) : 1;
  return function (n) {
    return (Math.round(n / e) * e * t | 0) / t;
  };
}
export function _roundLinkedList(e, t) {
  while (e) {
    if (!e.f && !e.blob) {
      e.m = t || Math.round;
    }
    e = e._next;
  }
}
export var p = RoundPropsPlugin.prototype;
/*!
 * VERSION: 1.6.0
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
p._onInitAllProps = function () {
  var e;
  var t;
  var n;
  var i;
  var r = this._tween;
  var o = r.vars.roundProps;
  var l = {};
  var u = r._propLookup.roundProps;
  if (typeof o != "object" || o.push) {
    if (typeof o == "string") {
      o = o.split(",");
    }
    n = o.length;
    while (--n > -1) {
      l[o[n]] = Math.round;
    }
  } else {
    for (i in o) {
      l[i] = _getRoundFunc(o[i]);
    }
  }
  for (i in l) {
    for (e = r._firstPT; e;) {
      t = e._next;
      if (e.pg) {
        e.t._mod(l);
      } else if (e.n === i) {
        if (e.f === 2 && e.t) {
          _roundLinkedList(e.t._firstPT, l[i]);
        } else {
          this._add(e.t, i, e.s, e.c, l[i]);
          if (t) {
            t._prev = e._prev;
          }
          if (e._prev) {
            e._prev._next = t;
          } else if (r._firstPT === e) {
            r._firstPT = t;
          }
          e._next = e._prev = null;
          r._propLookup[i] = u;
        }
      }
      e = t;
    }
  }
  return false;
};
p._add = function (e, t, n, i, a) {
  this._addTween(e, t, n, n + i, t, a || Math.round);
  this._overwriteProps.push(t);
};