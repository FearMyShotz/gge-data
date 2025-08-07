Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = createjs.Point;
var a = createjs.Rectangle;
var s = function () {
  function FrameVO(e = 0, t = 0) {
    this.offsetX = e;
    this.offsetY = t;
  }
  FrameVO.prototype.loadFromParamObject = function (e) {
    var t = String(e.filename);
    this._frameName = t.substr(0, t.length - 4);
    this._posOnSheet = new a(e.frame.x, e.frame.y, e.frame.w, e.frame.h);
    this._registrationPoint = new i(this.offsetX - e.spriteSourceSize.x, this.offsetY - e.spriteSourceSize.y);
  };
  Object.defineProperty(FrameVO.prototype, "frameName", {
    get: function () {
      return this._frameName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FrameVO.prototype, "posOnSheet", {
    get: function () {
      return this._posOnSheet;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FrameVO.prototype, "registrationPoint", {
    get: function () {
      return this._registrationPoint;
    },
    enumerable: true,
    configurable: true
  });
  return FrameVO;
}();
exports.FrameVO = s;