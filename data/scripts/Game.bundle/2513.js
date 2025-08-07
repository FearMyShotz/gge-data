Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function UnitAllocator() {}
  UnitAllocator.getIndicesOfMaxToMinSorting = function (e) {
    var t = [0, 1, 2];
    if (e[t[0]] > e[t[1]]) {
      if (e[t[2]] > e[t[0]]) {
        t[0] = 2;
        t[1] = 0;
        t[2] = 1;
      } else if (e[t[2]] > e[t[1]]) {
        t[1] = 2;
        t[2] = 1;
      }
    } else if (e[t[1]] > e[t[2]]) {
      if (e[t[0]] > e[t[2]]) {
        t[0] = 1;
        t[1] = 0;
      } else {
        t[0] = 1;
        t[1] = 2;
        t[2] = 0;
      }
    } else {
      t[0] = 2;
      t[2] = 0;
    }
    return t;
  };
  UnitAllocator.getSideUnitCount = function (e, t) {
    var i = [e * 1 * t[0] / 100, e * 1 * t[1] / 100, e * 1 * t[2] / 100];
    var n = [l.int(i[0]), l.int(i[1]), l.int(i[2])];
    var o = [i[0] - n[0], i[1] - n[1], i[2] - n[2]];
    var a = Math.round(o[0] + o[1] + o[2]);
    if (a > 0) {
      var s = UnitAllocator.getIndicesOfMaxToMinSorting(o);
      for (var r = 0; r < a; r++) {
        n[l.int(s[r])]++;
      }
    }
    return n;
  };
  UnitAllocator.calculateUnitLineup = function (e, t, i, n, d) {
    var p = new u.UnitInventoryDictionary();
    p.addAll(c.CastleModel.armyData.getSupportUnitsAtArea(c.CastleModel.defenceData.areaInfo).getUnits(null));
    var h = new u.UnitInventoryDictionary();
    h.addAll(i.getUnits(null));
    p.getUnits(null).forEach(function (e) {
      return h.deductUnit(e.wodId, e.inventoryAmount);
    });
    var g = 0;
    var C = 0;
    var _ = 0;
    var m = 0;
    var f = l.int(i.getSoldierCount());
    e = Math.ceil(e * (1 + t / 100));
    var O;
    var E;
    var y = l.int(Math.min(e, f));
    var b = UnitAllocator.getSideUnitCount(y, n);
    var D = l.int(i.getUnitCountByUnitType(a.ClientConstCastle.UNIT_TYPE_SOLDIER_MELEE, true, true));
    var I = l.int(i.getUnitCountByUnitType(a.ClientConstCastle.UNIT_TYPE_SOLDIER_RANGE, true, true));
    var T = [];
    var v = [];
    var S = [];
    var A = [];
    var L = 0;
    var P = 0;
    for (m = 0; m < 3; m++) {
      S[m] = b[m] * d[m] / 100;
      A[m] = b[m] - S[m];
      L += S[m];
      P += A[m];
    }
    O = l.int(l.int(L));
    E = l.int(l.int(P));
    if (L > D) {
      for (m = 0; m < 3; m++) {
        S[m] = O == 0 ? 0 : D * S[m] / L;
        A[m] = b[m] - S[m];
      }
    } else if (P > I) {
      for (m = 0; m < 3; m++) {
        A[m] = E == 0 ? 0 : I * A[m] / P;
        S[m] = b[m] - A[m];
      }
    }
    for (m = 0; m < 3; m++) {
      T[m] = l.int(S[m]);
      v[m] = l.int(A[m]);
    }
    var M = [S[0] - T[0], S[1] - T[1], S[2] - T[2]];
    var R = [A[0] - v[0], A[1] - v[1], A[2] - v[2]];
    var V = l.int(l.int(M[0] + M[1] + M[2] + 0.5));
    var x = l.int(l.int(R[0] + R[1] + R[2] + 0.49999));
    var w = [T[0] + v[0] == b[0], T[1] + v[1] == b[1], T[2] + v[2] == b[2]];
    var B = UnitAllocator.getIndicesOfMaxToMinSorting(M);
    var F = 0;
    for (_ = 0; _ < 3 && (F = l.int(B[_]), !(V <= 0)); _++) {
      if (!w[F]) {
        T[F]++;
        V--;
        w[F] = T[F] + v[F] == b[F];
      }
    }
    B = UnitAllocator.getIndicesOfMaxToMinSorting(R);
    _ = 0;
    for (; _ < 3 && (F = l.int(B[_]), !(x <= 0)); _++) {
      if (!w[F]) {
        v[F]++;
        x--;
        w[F] = T[F] + v[F] == b[F];
      }
    }
    var N = [];
    N[0] = [];
    N[1] = [];
    N[2] = [];
    N[3] = [];
    N[4] = [];
    var k = [];
    var U = c.CastleModel.defenceData.prioMelee;
    var G = 0;
    var H = 0;
    var j = 0;
    for (_ = 0; _ < U.length; _++) {
      G = l.int(U[_]);
      H = l.int(i.getUnitCountByWodId(G));
      C = l.int(T[0] + T[1] + T[2]);
      g = l.int(Math.min(H, C));
      if (C > 0 && g > 0) {
        (k = [])[0] = l.int(Math.round(g * 1 * T[0] / C));
        k[2] = l.int(Math.round(g * 1 * T[2] / C - 0.0001));
        k[1] = g - k[0] - k[2];
        this.deductUnitAmount(G, g, i, h, p);
        j = 0;
        for (; j < k.length; j++) {
          if (k[j] > 0) {
            var W = c.CastleModel.wodData.createVObyWOD(G, o.CastleWodData.TYPE_UNIT);
            W.inventoryAmount = l.int(k[j]);
            N[j].push(W);
          }
          T[j] -= k[j];
        }
      }
    }
    var Y = c.CastleModel.defenceData.prioRange;
    for (_ = 0; _ < Y.length; _++) {
      G = l.int(Y[_]);
      H = l.int(i.getUnitCountByWodId(G));
      C = l.int(v[0] + v[1] + v[2]);
      g = l.int(Math.min(H, C));
      if (C > 0 && g > 0) {
        (k = [])[0] = l.int(Math.round(g * 1 * v[0] / C));
        k[2] = l.int(Math.round(g * 1 * v[2] / C - 0.0001));
        k[1] = g - k[0] - k[2];
        this.deductUnitAmount(G, g, i, h, p);
        j = 0;
        for (; j < k.length; j++) {
          var K = c.CastleModel.wodData.createVObyWOD(G, o.CastleWodData.TYPE_UNIT);
          K.inventoryAmount = l.int(k[j]);
          if (k[j] > 0) {
            N[j].push(K);
          }
          v[j] -= k[j];
        }
      }
    }
    var z = [];
    z[0] = c.CastleModel.defenceData.itemsLeftWall.items;
    z[1] = c.CastleModel.defenceData.itemsMiddleWall.items;
    z[2] = c.CastleModel.defenceData.itemsRightWall.items;
    var q = 0;
    var X = 0;
    for (q = 0; q < z.length; q++) {
      for (X = 0; X < z[q].length; X++) {
        var Q = z[q][X].unitVO;
        if (Q && Q.attackType == a.ClientConstCastle.DEFENSE_TOOL) {
          N[q].push(Q);
        }
      }
    }
    var J = [];
    J[0] = c.CastleModel.defenceData.itemsLeftMoat.items;
    J[1] = c.CastleModel.defenceData.itemsMiddleMoat.items;
    J[2] = c.CastleModel.defenceData.itemsRightMoat.items;
    q = 0;
    for (; q < J.length; q++) {
      for (X = 0; X < J[q].length; X++) {
        var Z = J[q][X].unitVO;
        if (r.instanceOfClass(Z, "ToolUnitVO")) {
          N[q].push(Z);
        }
      }
    }
    D = l.int(i.getUnitCountByUnitType(a.ClientConstCastle.UNIT_TYPE_SOLDIER_MELEE, true, true));
    I = l.int(i.getUnitCountByUnitType(a.ClientConstCastle.UNIT_TYPE_SOLDIER_RANGE, true, true));
    var $;
    var ee;
    var te = c.CastleModel.defenceData.keepUnitSlotCount;
    if (te == Number.POSITIVE_INFINITY) {
      $ = Number.POSITIVE_INFINITY;
      ee = Number.POSITIVE_INFINITY;
    } else {
      ee = te - ($ = te * d[3] / 100);
    }
    var ie = Math.min($ + Math.max(0, ee - I), D);
    var ne = Math.min(ee + Math.max(0, $ - D), I);
    for (_ = 0; _ < U.length; _++) {
      G = l.int(U[_]);
      H = l.int(i.getUnitCountByWodId(G));
      g = l.int(Math.min(H, ie));
      if (H > 0 && g > 0) {
        this.deductUnitAmount(G, g, i, h, p);
        var oe = c.CastleModel.wodData.createVObyWOD(G, o.CastleWodData.TYPE_UNIT);
        oe.inventoryAmount = g;
        N[3].push(oe);
        ie -= g;
      }
    }
    for (_ = 0; _ < Y.length; _++) {
      G = l.int(Y[_]);
      H = l.int(i.getUnitCountByWodId(G));
      g = l.int(Math.min(H, ne));
      if (H > 0 && g > 0) {
        this.deductUnitAmount(G, g, i, h, p);
        var ae = c.CastleModel.wodData.createVObyWOD(G, o.CastleWodData.TYPE_UNIT);
        ae.inventoryAmount = g;
        N[3].push(ae);
        ne -= g;
      }
    }
    D = l.int(p.getUnitCountByUnitType(a.ClientConstCastle.UNIT_TYPE_SOLDIER_MELEE, true, true));
    I = l.int(p.getUnitCountByUnitType(a.ClientConstCastle.UNIT_TYPE_SOLDIER_RANGE, true, true));
    var se = c.CastleModel.defenceData.allianceUnitYardLimit;
    var re = se * d[3] / 100;
    var le = se - re;
    var ce = Math.min(re + Math.max(0, le - I), D);
    var ue = Math.min(le + Math.max(0, re - D), I);
    for (_ = 0; _ < U.length; _++) {
      G = l.int(U[_]);
      H = l.int(p.getUnitCountByWodId(G));
      g = l.int(Math.min(H, ce));
      if (H > 0 && g > 0) {
        this.deductUnitAmount(G, g, i, null, p);
        var de = N[3].find(function (e) {
          return e.wodId == G;
        });
        if (de) {
          de.inventoryAmount += g;
        } else {
          var pe = c.CastleModel.wodData.createVObyWOD(G, o.CastleWodData.TYPE_UNIT);
          pe.inventoryAmount += g;
          N[3].push(pe);
        }
        ce -= g;
      }
    }
    for (_ = 0; _ < Y.length; _++) {
      G = l.int(Y[_]);
      H = l.int(p.getUnitCountByWodId(G));
      g = l.int(Math.min(H, ue));
      if (H > 0 && g > 0) {
        this.deductUnitAmount(G, g, i, null, p);
        var he = N[3].find(function (e) {
          return e.wodId == G;
        });
        if (he) {
          he.inventoryAmount += g;
        } else {
          var ge = c.CastleModel.wodData.createVObyWOD(G, o.CastleWodData.TYPE_UNIT);
          ge.inventoryAmount = g;
          N[3].push(ge);
        }
        ue -= g;
      }
    }
    var Ce = c.CastleModel.defenceData.itemsKeep.items;
    for (X = 0; X < Ce.length; X++) {
      var _e = Ce[X].unitVO;
      if (r.instanceOfClass(_e, "ToolUnitVO")) {
        var me = s.castAs(_e, "ToolUnitVO");
        if (me && me.numberofDolls > 0) {
          N[3].push(_e);
        }
      }
    }
    if (c.CastleModel.defenceData.itemsKeepSupport) {
      for (var fe = 0, Oe = c.CastleModel.defenceData.itemsKeepSupport.items; fe < Oe.length; fe++) {
        var Ee = Oe[fe].unitVO;
        if (r.instanceOfClass(Ee, "ToolUnitVO")) {
          N[4].push(Ee);
        }
      }
    }
    return N;
  };
  UnitAllocator.deductUnitAmount = function (e, t, i, n, o) {
    i.changeUnitAmount(e, -t);
    var a = 0;
    if (n) {
      a = Math.min(t, n.getUnitCountByWodId(e));
      n.changeUnitAmount(e, -a);
    }
    o.changeUnitAmount(e, -(t - a));
  };
  return UnitAllocator;
}();
exports.UnitAllocator = n;
var o = require("./56.js");
var a = require("./18.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./6.js");
var c = require("./4.js");
var u = require("./156.js");