function pngDataURLFromCanvas(e) {
  return e.toDataURL();
}
function arrayBufferFromBase64String(e) {
  for (var t = window.atob(e), n = new Uint8Array(t.length), i = 0; i < t.length; i++) {
    n[i] = t.charCodeAt(i);
  }
  return n.buffer;
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pngObjectURLFromCanvas = function pngObjectURLFromCanvas(e) {
  var t = pngDataURLFromCanvas(e);
  var n = "data:image/png;base64,";
  if (!t.startsWith(n)) {
    throw new Error("pngDataURL is not valid");
  }
  var i = arrayBufferFromBase64String(t.substring(n.length));
  var a = new Blob([i], {
    type: "image/png"
  });
  return URL.createObjectURL(a);
};
exports.curObjectURLFromCanvas = function curObjectURLFromCanvas(e, t = {
  x: 0,
  y: 0
}) {
  var n = pngDataURLFromCanvas(e);
  var i = "data:image/png;base64,";
  if (!n.startsWith(i)) {
    throw new Error("pngDataURL is not valid");
  }
  var a = arrayBufferFromBase64String(n.substring(i.length));
  new Blob([a], {
    type: "image/png"
  });
  var s = new Blob([function curFileHeader(e = 1) {
    var t = new ArrayBuffer(6);
    var n = new DataView(t);
    n.setUint16(0, 0, true);
    n.setUint16(2, 2, true);
    n.setUint16(4, e, true);
    return t;
  }(), function curICONDIRENTRY(e, t, n, i, a) {
    var s = new ArrayBuffer(16);
    var r = new DataView(s);
    r.setUint8(0, e % 256);
    r.setUint8(1, t % 256);
    r.setUint8(2, 0);
    r.setUint8(3, 0);
    r.setUint16(4, a.x, true);
    r.setUint16(6, a.y, true);
    r.setUint32(8, n, true);
    r.setUint32(12, i, true);
    return s;
  }(e.width, e.height, a.byteLength, 22, t), a], {
    type: "image/x-icon"
  });
  return URL.createObjectURL(s);
};