function factory(e) {
  if (typeof Float32Array != "undefined") {
    (function () {
      var t = new Float32Array([-0]);
      var n = new Uint8Array(t.buffer);
      var i = n[3] === 128;
      function writeFloat_f32_cpy(e, i, a) {
        t[0] = e;
        i[a] = n[0];
        i[a + 1] = n[1];
        i[a + 2] = n[2];
        i[a + 3] = n[3];
      }
      function writeFloat_f32_rev(e, i, a) {
        t[0] = e;
        i[a] = n[3];
        i[a + 1] = n[2];
        i[a + 2] = n[1];
        i[a + 3] = n[0];
      }
      function readFloat_f32_cpy(e, i) {
        n[0] = e[i];
        n[1] = e[i + 1];
        n[2] = e[i + 2];
        n[3] = e[i + 3];
        return t[0];
      }
      function readFloat_f32_rev(e, i) {
        n[3] = e[i];
        n[2] = e[i + 1];
        n[1] = e[i + 2];
        n[0] = e[i + 3];
        return t[0];
      }
      e.writeFloatLE = i ? writeFloat_f32_cpy : writeFloat_f32_rev;
      e.writeFloatBE = i ? writeFloat_f32_rev : writeFloat_f32_cpy;
      e.readFloatLE = i ? readFloat_f32_cpy : readFloat_f32_rev;
      e.readFloatBE = i ? readFloat_f32_rev : readFloat_f32_cpy;
    })();
  } else {
    (function () {
      function writeFloat_ieee754(e, t, n, i) {
        var a = t < 0 ? 1 : 0;
        if (a) {
          t = -t;
        }
        if (t === 0) {
          e(1 / t > 0 ? 0 : 2147483648, n, i);
        } else if (isNaN(t)) {
          e(2143289344, n, i);
        } else if (t > 3.4028234663852886e+38) {
          e((a << 31 | 2139095040) >>> 0, n, i);
        } else if (t < 1.1754943508222875e-38) {
          e((a << 31 | Math.round(t / 1.401298464324817e-45)) >>> 0, n, i);
        } else {
          var s = Math.floor(Math.log(t) / Math.LN2);
          e((a << 31 | s + 127 << 23 | Math.round(t * Math.pow(2, -s) * 8388608) & 8388607) >>> 0, n, i);
        }
      }
      function readFloat_ieee754(e, t, n) {
        var i = e(t, n);
        var a = (i >> 31) * 2 + 1;
        var s = i >>> 23 & 255;
        var r = i & 8388607;
        if (s === 255) {
          if (r) {
            return NaN;
          } else {
            return a * Infinity;
          }
        } else if (s === 0) {
          return a * 1.401298464324817e-45 * r;
        } else {
          return a * Math.pow(2, s - 150) * (r + 8388608);
        }
      }
      e.writeFloatLE = writeFloat_ieee754.bind(null, writeUintLE);
      e.writeFloatBE = writeFloat_ieee754.bind(null, writeUintBE);
      e.readFloatLE = readFloat_ieee754.bind(null, readUintLE);
      e.readFloatBE = readFloat_ieee754.bind(null, readUintBE);
    })();
  }
  if (typeof Float64Array != "undefined") {
    (function () {
      var t = new Float64Array([-0]);
      var n = new Uint8Array(t.buffer);
      var i = n[7] === 128;
      function writeDouble_f64_cpy(e, i, a) {
        t[0] = e;
        i[a] = n[0];
        i[a + 1] = n[1];
        i[a + 2] = n[2];
        i[a + 3] = n[3];
        i[a + 4] = n[4];
        i[a + 5] = n[5];
        i[a + 6] = n[6];
        i[a + 7] = n[7];
      }
      function writeDouble_f64_rev(e, i, a) {
        t[0] = e;
        i[a] = n[7];
        i[a + 1] = n[6];
        i[a + 2] = n[5];
        i[a + 3] = n[4];
        i[a + 4] = n[3];
        i[a + 5] = n[2];
        i[a + 6] = n[1];
        i[a + 7] = n[0];
      }
      function readDouble_f64_cpy(e, i) {
        n[0] = e[i];
        n[1] = e[i + 1];
        n[2] = e[i + 2];
        n[3] = e[i + 3];
        n[4] = e[i + 4];
        n[5] = e[i + 5];
        n[6] = e[i + 6];
        n[7] = e[i + 7];
        return t[0];
      }
      function readDouble_f64_rev(e, i) {
        n[7] = e[i];
        n[6] = e[i + 1];
        n[5] = e[i + 2];
        n[4] = e[i + 3];
        n[3] = e[i + 4];
        n[2] = e[i + 5];
        n[1] = e[i + 6];
        n[0] = e[i + 7];
        return t[0];
      }
      e.writeDoubleLE = i ? writeDouble_f64_cpy : writeDouble_f64_rev;
      e.writeDoubleBE = i ? writeDouble_f64_rev : writeDouble_f64_cpy;
      e.readDoubleLE = i ? readDouble_f64_cpy : readDouble_f64_rev;
      e.readDoubleBE = i ? readDouble_f64_rev : readDouble_f64_cpy;
    })();
  } else {
    (function () {
      function writeDouble_ieee754(e, t, n, i, a, s) {
        var r = i < 0 ? 1 : 0;
        if (r) {
          i = -i;
        }
        if (i === 0) {
          e(0, a, s + t);
          e(1 / i > 0 ? 0 : 2147483648, a, s + n);
        } else if (isNaN(i)) {
          e(0, a, s + t);
          e(2146959360, a, s + n);
        } else if (i > 1.7976931348623157e+308) {
          e(0, a, s + t);
          e((r << 31 | 2146435072) >>> 0, a, s + n);
        } else {
          var o;
          if (i < 2.2250738585072014e-308) {
            e((o = i / 5e-324) >>> 0, a, s + t);
            e((r << 31 | o / 4294967296) >>> 0, a, s + n);
          } else {
            var l = Math.floor(Math.log(i) / Math.LN2);
            if (l === 1024) {
              l = 1023;
            }
            e((o = i * Math.pow(2, -l)) * 4503599627370496 >>> 0, a, s + t);
            e((r << 31 | l + 1023 << 20 | o * 1048576 & 1048575) >>> 0, a, s + n);
          }
        }
      }
      function readDouble_ieee754(e, t, n, i, a) {
        var s = e(i, a + t);
        var r = e(i, a + n);
        var o = (r >> 31) * 2 + 1;
        var l = r >>> 20 & 2047;
        var u = (r & 1048575) * 4294967296 + s;
        if (l === 2047) {
          if (u) {
            return NaN;
          } else {
            return o * Infinity;
          }
        } else if (l === 0) {
          return o * 5e-324 * u;
        } else {
          return o * Math.pow(2, l - 1075) * (u + 4503599627370496);
        }
      }
      e.writeDoubleLE = writeDouble_ieee754.bind(null, writeUintLE, 0, 4);
      e.writeDoubleBE = writeDouble_ieee754.bind(null, writeUintBE, 4, 0);
      e.readDoubleLE = readDouble_ieee754.bind(null, readUintLE, 0, 4);
      e.readDoubleBE = readDouble_ieee754.bind(null, readUintBE, 4, 0);
    })();
  }
  return e;
}
function writeUintLE(e, t, n) {
  t[n] = e & 255;
  t[n + 1] = e >>> 8 & 255;
  t[n + 2] = e >>> 16 & 255;
  t[n + 3] = e >>> 24;
}
function writeUintBE(e, t, n) {
  t[n] = e >>> 24;
  t[n + 1] = e >>> 16 & 255;
  t[n + 2] = e >>> 8 & 255;
  t[n + 3] = e & 255;
}
function readUintLE(e, t) {
  return (e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24) >>> 0;
}
function readUintBE(e, t) {
  return (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0;
}
module.exports = factory(factory);