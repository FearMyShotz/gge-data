Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.Container;
var o = createjs.Point;
var a = function () {
  function IsoAdditionalClipLayerVO(e, t) {
    this._type = r.IsoAdditionalClipEnum.NONE;
    this._sourceLayer = e;
    this._type = t;
    this._newLayer = this.createCopyFromSourceLayer();
  }
  IsoAdditionalClipLayerVO.prototype.updatePosition = function () {
    var e = this.sourceLayer.localToGlobal(new o(0, 0));
    var t = this.newLayer.parent.globalToLocal(e);
    this.newLayer.x = t.x;
    this.newLayer.y = t.y;
  };
  IsoAdditionalClipLayerVO.prototype.createCopyFromSourceLayer = function () {
    var e = s.ClientConstUtils.getClassFromObject(this.sourceLayer);
    if (e === undefined) {
      return new n();
    }
    var t = new e();
    t.name = this.sourceLayer.name;
    t.x = this.sourceLayer.x;
    t.y = this.sourceLayer.y;
    t.rotationX = this.sourceLayer.rotationX;
    t.rotationY = this.sourceLayer.rotationY;
    t.rotationZ = this.sourceLayer.rotationZ;
    t.scaleX = this.sourceLayer.scaleX;
    t.scaleY = this.sourceLayer.scaleY;
    t.scaleZ = this.sourceLayer.scaleZ;
    return t;
  };
  Object.defineProperty(IsoAdditionalClipLayerVO.prototype, "sourceLayer", {
    get: function () {
      return this._sourceLayer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoAdditionalClipLayerVO.prototype, "newLayer", {
    get: function () {
      return this._newLayer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoAdditionalClipLayerVO.prototype, "type", {
    get: function () {
      return this._type;
    },
    enumerable: true,
    configurable: true
  });
  return IsoAdditionalClipLayerVO;
}();
exports.IsoAdditionalClipLayerVO = a;
var s = require("./55.js");
var r = require("./145.js");