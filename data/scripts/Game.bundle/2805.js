Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.Container;
var o = createjs.Point;
var a = function () {
  function IsoScaffoldRenderer() {}
  IsoScaffoldRenderer.prototype.init = function (e, t) {
    this._target = e;
    this._isoObjectVO = t;
  };
  IsoScaffoldRenderer.prototype.destroy = function () {
    if (this.disp && this.disp.parent) {
      this.disp.parent.removeChild(this.disp);
    }
    this._disp = null;
  };
  IsoScaffoldRenderer.prototype.createDisp = function () {
    if (this._disp) {
      this._disp.removeChildren();
    } else {
      this._target.addChild(this._disp = new n());
    }
  };
  IsoScaffoldRenderer.prototype.addToDisp = function (e) {
    this._disp.addChild(e);
  };
  IsoScaffoldRenderer.prototype.render = function () {
    this.createDisp();
    if (u.instanceOfClass(this.isoObjectVO, "ATowerVO") && !u.instanceOfClass(this.isoObjectVO, "FactionLookoutTowerVO")) {
      this.renderByTower();
    } else if (u.instanceOfClass(this.isoObjectVO, "BasicGateVO")) {
      this.renderByGate();
    } else if (u.instanceOfClass(this.isoObjectVO, "AEffectBuildingVO")) {
      this.renderByInnerBuilding();
    }
  };
  IsoScaffoldRenderer.prototype.renderByGate = function () {
    var e = s.BasicModel.basicLoaderData.getVersionedItemAssetUrl(this.assetFileName);
    var t = l.GoodgameBitmapEngine.clipFactory.getExternalClipSource("Scaffold_Gate", e);
    var i = new r.GoodgameBitmapClipExternal(t, 0, false);
    i.x = i.y = 0;
    this.addToDisp(i);
  };
  IsoScaffoldRenderer.prototype.renderByTower = function () {
    var e = s.BasicModel.basicLoaderData.getVersionedItemAssetUrl(this.assetFileName);
    var t = l.GoodgameBitmapEngine.clipFactory.getExternalClipSource("Scaffold_Tower", e);
    var i = new r.GoodgameBitmapClipExternal(t, 0, false);
    i.x = i.y = 0;
    this.addToDisp(i);
  };
  IsoScaffoldRenderer.prototype.renderByInnerBuilding = function () {
    var e = new c.SimpleRandom(this.width * this.height);
    var t = s.BasicModel.basicLoaderData.getVersionedItemAssetUrl(this.assetFileName);
    for (var i = Math.floor((this.width - 3) / 2) - 1; i >= 0; i--) {
      var n = this.width - 3 - (i + 1) * 2;
      var a = this.height - 2;
      var u = IsoScaffoldRenderer.gridPosToPixelPos(new o(n, a), 40);
      var d = "Scaffold_Left_" + e.nextInt(2);
      var p = l.GoodgameBitmapEngine.clipFactory.getExternalClipSource(d, t);
      var h = new r.GoodgameBitmapClipExternal(p, 0, false);
      h.x = u.x;
      h.y = u.y;
      this.addToDisp(h);
    }
    for (var g = Math.floor((this.height - 3) / 2) - 1; g >= 0; g--) {
      var C = this.width - 2;
      var _ = this.height - 3 - (g + 1) * 2;
      var m = IsoScaffoldRenderer.gridPosToPixelPos(new o(C, _), 40);
      var f = "Scaffold_Right_" + e.nextInt(2);
      var O = l.GoodgameBitmapEngine.clipFactory.getExternalClipSource(f, t);
      var E = new r.GoodgameBitmapClipExternal(O, 0, false);
      E.x = m.x;
      E.y = m.y;
      this.addToDisp(E);
    }
    var y = IsoScaffoldRenderer.gridPosToPixelPos(new o(this.width - 3, this.height - 3), 40);
    var b = l.GoodgameBitmapEngine.clipFactory.getExternalClipSource("Scaffold_Front", t);
    var D = new r.GoodgameBitmapClipExternal(b, 0, false);
    D.x = y.x;
    D.y = y.y;
    this.addToDisp(D);
  };
  Object.defineProperty(IsoScaffoldRenderer.prototype, "assetFileName", {
    get: function () {
      return "Scaffold";
    },
    enumerable: true,
    configurable: true
  });
  IsoScaffoldRenderer.gridPosToPixelPos = function (e, t) {
    return new o((e.x - e.y) * t, (e.x + e.y) * t / 2);
  };
  Object.defineProperty(IsoScaffoldRenderer.prototype, "target", {
    get: function () {
      return this._target;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoScaffoldRenderer.prototype, "width", {
    get: function () {
      return this.isoObjectVO.width;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoScaffoldRenderer.prototype, "height", {
    get: function () {
      return this.isoObjectVO.height;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoScaffoldRenderer.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoScaffoldRenderer.prototype, "isoObjectVO", {
    get: function () {
      return this._isoObjectVO;
    },
    enumerable: true,
    configurable: true
  });
  return IsoScaffoldRenderer;
}();
exports.IsoScaffoldRenderer = a;
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./2.js");
var u = require("./1.js");