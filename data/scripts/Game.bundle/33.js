Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function Iso() {}
  Object.defineProperty(Iso, "data", {
    get: function () {
      if (s.CastleModel.areaData) {
        return s.CastleModel.areaData.activeIsoData;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Iso, "renderer", {
    get: function () {
      Iso._renderer ||= new a.IsoViewRenderer();
      return Iso._renderer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Iso, "controller", {
    get: function () {
      Iso._controller ||= new o.IsoController();
      return Iso._controller;
    },
    enumerable: true,
    configurable: true
  });
  Iso.destroy = function () {
    if (Iso._renderer) {
      Iso._renderer.destroy();
      Iso._renderer = null;
    }
    if (Iso._controller) {
      Iso._controller.destroy();
      Iso._controller = null;
    }
  };
  return Iso;
}();
exports.Iso = n;
var o = require("./2042.js");
var a = require("./2074.js");
var s = require("./4.js");