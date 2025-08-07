export var DirectionalRotationPlugin = require("./1.js")._gsScope._gsDefine.plugin({
  propName: "directionalRotation",
  version: "0.3.1",
  API: 2,
  init: function (e, t, n, i) {
    if (typeof t != "object") {
      t = {
        rotation: t
      };
    }
    this.finals = {};
    var a;
    var s;
    var r;
    var o;
    var l;
    var u;
    var c = t.useRadians === true ? Math.PI * 2 : 360;
    for (a in t) {
      if (a !== "useRadians") {
        if (typeof (o = t[a]) == "function") {
          o = o(i, e);
        }
        s = (u = (o + "").split("_"))[0];
        r = parseFloat(typeof e[a] != "function" ? e[a] : e[a.indexOf("set") || typeof e["get" + a.substr(3)] != "function" ? a : "get" + a.substr(3)]());
        l = (o = this.finals[a] = typeof s == "string" && s.charAt(1) === "=" ? r + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0) - r;
        if (u.length) {
          if ((s = u.join("_")).indexOf("short") !== -1 && (l %= c) !== l % (c / 2)) {
            l = l < 0 ? l + c : l - c;
          }
          if (s.indexOf("_cw") !== -1 && l < 0) {
            l = (l + c * 9999999999) % c - (l / c | 0) * c;
          } else if (s.indexOf("ccw") !== -1 && l > 0) {
            l = (l - c * 9999999999) % c - (l / c | 0) * c;
          }
        }
        if (l > 0.000001 || l < -0.000001) {
          this._addTween(e, a, r, r + l, a);
          this._overwriteProps.push(a);
        }
      }
    }
    return true;
  },
  set: function (e) {
    var t;
    if (e !== 1) {
      this._super.setRatio.call(this, e);
    } else {
      for (t = this._firstPT; t;) {
        if (t.f) {
          t.t[t.p](this.finals[t.p]);
        } else {
          t.t[t.p] = this.finals[t.p];
        }
        t = t._next;
      }
    }
  }
});
/*!
 * VERSION: 0.3.1
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
DirectionalRotationPlugin._autoCSS = true;