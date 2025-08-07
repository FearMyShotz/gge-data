var a;
(a = function () {
  function e(e) {
    n.appendChild(e.dom);
    return e;
  }
  function u(e) {
    for (var i = 0; i < n.children.length; i++) {
      n.children[i].style.display = i === e ? "block" : "none";
    }
    t = e;
  }
  var t = 0;
  var n = document.createElement("div");
  n.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000";
  n.addEventListener("click", function (e) {
    e.preventDefault();
    u(++t % n.children.length);
  }, false);
  var i = (performance || Date).now();
  var s = i;
  var r = 0;
  var o = e(new a.Panel("FPS", "#0ff", "#002"));
  var l = e(new a.Panel("MS", "#0f0", "#020"));
  if (self.performance && self.performance.memory) {
    var c = e(new a.Panel("MB", "#f08", "#201"));
  }
  u(0);
  return {
    REVISION: 16,
    dom: n,
    addPanel: e,
    showPanel: u,
    begin: function () {
      i = (performance || Date).now();
    },
    end: function () {
      r++;
      var e = (performance || Date).now();
      l.update(e - i, 200);
      if (e > s + 1000 && (o.update(r * 1000 / (e - s), 100), s = e, r = 0, c)) {
        var t = performance.memory;
        c.update(t.usedJSHeapSize / 1048576, t.jsHeapSizeLimit / 1048576);
      }
      return e;
    },
    update: function () {
      i = this.end();
    },
    domElement: n,
    setMode: u
  };
}).Panel = function (e, t, n) {
  var i = Infinity;
  var a = 0;
  var s = Math.round;
  var r = s(window.devicePixelRatio || 1);
  var o = r * 80;
  var l = r * 48;
  var u = r * 3;
  var c = r * 2;
  var _ = r * 3;
  var d = r * 15;
  var m = r * 74;
  var h = r * 30;
  var p = document.createElement("canvas");
  p.width = o;
  p.height = l;
  p.style.cssText = "width:80px;height:48px";
  var g = p.getContext("2d");
  g.font = "bold " + r * 9 + "px Helvetica,Arial,sans-serif";
  g.textBaseline = "top";
  g.fillStyle = n;
  g.fillRect(0, 0, o, l);
  g.fillStyle = t;
  g.fillText(e, u, c);
  g.fillRect(_, d, m, h);
  g.fillStyle = n;
  g.globalAlpha = 0.9;
  g.fillRect(_, d, m, h);
  return {
    dom: p,
    update: function (l, E) {
      i = Math.min(i, l);
      a = Math.max(a, l);
      g.fillStyle = n;
      g.globalAlpha = 1;
      g.fillRect(0, 0, o, d);
      g.fillStyle = t;
      g.fillText(s(l) + " " + e + " (" + s(i) + "-" + s(a) + ")", u, c);
      g.drawImage(p, _ + r, d, m - r, h, _, d, m - r, h);
      g.fillRect(_ + m - r, d, r, h);
      g.fillStyle = n;
      g.globalAlpha = 0.9;
      g.fillRect(_ + m - r, d, r, s((1 - l / E) * h));
    }
  };
};
module.exports = a;