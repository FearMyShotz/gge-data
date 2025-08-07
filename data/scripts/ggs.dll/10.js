import * as i from "./1.js";
export let Linear = i.Linear;
export let Power0 = i.Power0;
export let Power1 = i.Power1;
export let Power2 = i.Power2;
export let Power3 = i.Power3;
export let Power4 = i.Power4;
/*!
 * VERSION: 1.16.1
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
i._gsScope._gsDefine("easing.Back", ["easing.Ease"], function () {
  var e;
  var t;
  var n;
  var a;
  var s = i._gsScope.GreenSockGlobals || i._gsScope;
  var r = s.com.greensock;
  var o = Math.PI * 2;
  var l = Math.PI / 2;
  var u = r._class;
  function c(e, t) {
    var n = u("easing." + e, function () {}, true);
    var a = n.prototype = new i.Ease();
    a.constructor = n;
    a.getRatio = t;
    return n;
  }
  var _ = i.Ease.register || function () {};
  function d(e, t, n, i, a) {
    var s = u("easing." + e, {
      easeOut: new t(),
      easeIn: new n(),
      easeInOut: new i()
    }, true);
    _(s, e);
    return s;
  }
  function m(e, t, n) {
    this.t = e;
    this.v = t;
    if (n) {
      this.next = n;
      n.prev = this;
      this.c = n.v - t;
      this.gap = n.t - e;
    }
  }
  function h(e, t) {
    var n = u("easing." + e, function (e) {
      this._p1 = e || e === 0 ? e : 1.70158;
      this._p2 = this._p1 * 1.525;
    }, true);
    var a = n.prototype = new i.Ease();
    a.constructor = n;
    a.getRatio = t;
    a.config = function (e) {
      return new n(e);
    };
    return n;
  }
  var p = d("Back", h("BackOut", function (e) {
    return (e -= 1) * e * ((this._p1 + 1) * e + this._p1) + 1;
  }), h("BackIn", function (e) {
    return e * e * ((this._p1 + 1) * e - this._p1);
  }), h("BackInOut", function (e) {
    if ((e *= 2) < 1) {
      return e * 0.5 * e * ((this._p2 + 1) * e - this._p2);
    } else {
      return ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2) * 0.5;
    }
  }));
  var g = u("easing.SlowMo", function (e, t, n) {
    t = t || t === 0 ? t : 0.7;
    if (e == null) {
      e = 0.7;
    } else if (e > 1) {
      e = 1;
    }
    this._p = e !== 1 ? t : 0;
    this._p1 = (1 - e) / 2;
    this._p2 = e;
    this._p3 = this._p1 + this._p2;
    this._calcEnd = n === true;
  }, true);
  var E = g.prototype = new i.Ease();
  E.constructor = g;
  E.getRatio = function (e) {
    var t = e + (0.5 - e) * this._p;
    if (e < this._p1) {
      if (this._calcEnd) {
        return 1 - (e = 1 - e / this._p1) * e;
      } else {
        return t - (e = 1 - e / this._p1) * e * e * e * t;
      }
    } else if (e > this._p3) {
      if (this._calcEnd) {
        if (e === 1) {
          return 0;
        } else {
          return 1 - (e = (e - this._p3) / this._p1) * e;
        }
      } else {
        return t + (e - t) * (e = (e - this._p3) / this._p1) * e * e * e;
      }
    } else if (this._calcEnd) {
      return 1;
    } else {
      return t;
    }
  };
  g.ease = new g(0.7, 0.7);
  E.config = g.config = function (e, t, n) {
    return new g(e, t, n);
  };
  (E = (e = u("easing.SteppedEase", function (e, t) {
    e = e || 1;
    this._p1 = 1 / e;
    this._p2 = e + (t ? 0 : 1);
    this._p3 = t ? 1 : 0;
  }, true)).prototype = new i.Ease()).constructor = e;
  E.getRatio = function (e) {
    if (e < 0) {
      e = 0;
    } else if (e >= 1) {
      e = 0.999999999;
    }
    return ((this._p2 * e | 0) + this._p3) * this._p1;
  };
  E.config = e.config = function (t, n) {
    return new e(t, n);
  };
  (E = (t = u("easing.ExpoScaleEase", function (e, t, n) {
    this._p1 = Math.log(t / e);
    this._p2 = t - e;
    this._p3 = e;
    this._ease = n;
  }, true)).prototype = new i.Ease()).constructor = t;
  E.getRatio = function (e) {
    if (this._ease) {
      e = this._ease.getRatio(e);
    }
    return (this._p3 * Math.exp(this._p1 * e) - this._p3) / this._p2;
  };
  E.config = t.config = function (e, n, i) {
    return new t(e, n, i);
  };
  (E = (n = u("easing.RoughEase", function (e) {
    var t;
    var n;
    var a;
    var s;
    var r;
    var o;
    var l = (e = e || {}).taper || "none";
    var u = [];
    var c = 0;
    var _ = (e.points || 20) | 0;
    for (var d = _, h = e.randomize !== false, p = e.clamp === true, g = e.template instanceof i.Ease ? e.template : null, E = typeof e.strength == "number" ? e.strength * 0.4 : 0.4; --d > -1;) {
      t = h ? Math.random() : 1 / _ * d;
      n = g ? g.getRatio(t) : t;
      a = l === "none" ? E : l === "out" ? (s = 1 - t) * s * E : l === "in" ? t * t * E : t < 0.5 ? (s = t * 2) * s * 0.5 * E : (s = (1 - t) * 2) * s * 0.5 * E;
      if (h) {
        n += Math.random() * a - a * 0.5;
      } else if (d % 2) {
        n += a * 0.5;
      } else {
        n -= a * 0.5;
      }
      if (p) {
        if (n > 1) {
          n = 1;
        } else if (n < 0) {
          n = 0;
        }
      }
      u[c++] = {
        x: t,
        y: n
      };
    }
    u.sort(function (e, t) {
      return e.x - t.x;
    });
    o = new m(1, 1, null);
    d = _;
    while (--d > -1) {
      r = u[d];
      o = new m(r.x, r.y, o);
    }
    this._prev = new m(0, 0, o.t !== 0 ? o : o.next);
  }, true)).prototype = new i.Ease()).constructor = n;
  E.getRatio = function (e) {
    var t = this._prev;
    if (e > t.t) {
      while (t.next && e >= t.t) {
        t = t.next;
      }
      t = t.prev;
    } else {
      while (t.prev && e <= t.t) {
        t = t.prev;
      }
    }
    this._prev = t;
    return t.v + (e - t.t) / t.gap * t.c;
  };
  E.config = function (e) {
    return new n(e);
  };
  n.ease = new n();
  d("Bounce", c("BounceOut", function (e) {
    if (e < 1 / 2.75) {
      return e * 7.5625 * e;
    } else if (e < 2 / 2.75) {
      return (e -= 1.5 / 2.75) * 7.5625 * e + 0.75;
    } else if (e < 2.5 / 2.75) {
      return (e -= 2.25 / 2.75) * 7.5625 * e + 0.9375;
    } else {
      return (e -= 2.625 / 2.75) * 7.5625 * e + 0.984375;
    }
  }), c("BounceIn", function (e) {
    if ((e = 1 - e) < 1 / 2.75) {
      return 1 - e * 7.5625 * e;
    } else if (e < 2 / 2.75) {
      return 1 - ((e -= 1.5 / 2.75) * 7.5625 * e + 0.75);
    } else if (e < 2.5 / 2.75) {
      return 1 - ((e -= 2.25 / 2.75) * 7.5625 * e + 0.9375);
    } else {
      return 1 - ((e -= 2.625 / 2.75) * 7.5625 * e + 0.984375);
    }
  }), c("BounceInOut", function (e) {
    var t = e < 0.5;
    if ((e = t ? 1 - e * 2 : e * 2 - 1) < 1 / 2.75) {
      e *= e * 7.5625;
    } else {
      e = e < 2 / 2.75 ? (e -= 1.5 / 2.75) * 7.5625 * e + 0.75 : e < 2.5 / 2.75 ? (e -= 2.25 / 2.75) * 7.5625 * e + 0.9375 : (e -= 2.625 / 2.75) * 7.5625 * e + 0.984375;
    }
    if (t) {
      return (1 - e) * 0.5;
    } else {
      return e * 0.5 + 0.5;
    }
  }));
  d("Circ", c("CircOut", function (e) {
    return Math.sqrt(1 - (e -= 1) * e);
  }), c("CircIn", function (e) {
    return -(Math.sqrt(1 - e * e) - 1);
  }), c("CircInOut", function (e) {
    if ((e *= 2) < 1) {
      return (Math.sqrt(1 - e * e) - 1) * -0.5;
    } else {
      return (Math.sqrt(1 - (e -= 2) * e) + 1) * 0.5;
    }
  }));
  d("Elastic", (a = function (e, t, n) {
    var a = u("easing." + e, function (e, t) {
      this._p1 = e >= 1 ? e : 1;
      this._p2 = (t || n) / (e < 1 ? e : 1);
      this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0);
      this._p2 = o / this._p2;
    }, true);
    var s = a.prototype = new i.Ease();
    s.constructor = a;
    s.getRatio = t;
    s.config = function (e, t) {
      return new a(e, t);
    };
    return a;
  })("ElasticOut", function (e) {
    return this._p1 * Math.pow(2, e * -10) * Math.sin((e - this._p3) * this._p2) + 1;
  }, 0.3), a("ElasticIn", function (e) {
    return -this._p1 * Math.pow(2, (e -= 1) * 10) * Math.sin((e - this._p3) * this._p2);
  }, 0.3), a("ElasticInOut", function (e) {
    if ((e *= 2) < 1) {
      return this._p1 * Math.pow(2, (e -= 1) * 10) * Math.sin((e - this._p3) * this._p2) * -0.5;
    } else {
      return this._p1 * Math.pow(2, (e -= 1) * -10) * Math.sin((e - this._p3) * this._p2) * 0.5 + 1;
    }
  }, 0.45));
  d("Expo", c("ExpoOut", function (e) {
    return 1 - Math.pow(2, e * -10);
  }), c("ExpoIn", function (e) {
    return Math.pow(2, (e - 1) * 10) - 0.001;
  }), c("ExpoInOut", function (e) {
    if ((e *= 2) < 1) {
      return Math.pow(2, (e - 1) * 10) * 0.5;
    } else {
      return (2 - Math.pow(2, (e - 1) * -10)) * 0.5;
    }
  }));
  d("Sine", c("SineOut", function (e) {
    return Math.sin(e * l);
  }), c("SineIn", function (e) {
    return 1 - Math.cos(e * l);
  }), c("SineInOut", function (e) {
    return (Math.cos(Math.PI * e) - 1) * -0.5;
  }));
  u("easing.EaseLookup", {
    find: function (e) {
      return i.Ease.map[e];
    }
  }, true);
  _(s.SlowMo, "SlowMo", "ease,");
  _(n, "RoughEase", "ease,");
  _(e, "SteppedEase", "ease,");
  return p;
}, true);
export var Back = i.globals.Back;
export var Elastic = i.globals.Elastic;
export var Bounce = i.globals.Bounce;
export var RoughEase = i.globals.RoughEase;
export var SlowMo = i.globals.SlowMo;
export var SteppedEase = i.globals.SteppedEase;
export var Circ = i.globals.Circ;
export var Expo = i.globals.Expo;
export var Sine = i.globals.Sine;
export var ExpoScaleEase = i.globals.ExpoScaleEase;