Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function BasicDragManager(e, t = 0, n = 0, i = 0, a = 1) {
    this.dragVO = null;
    this._scaleMode = 1;
    this._tempScaleMode = 0;
    this._posX = 1;
    this._posY = 1;
    this._alpha = 1;
    this.dragLayer = e;
    if (t != 0) {
      this._scaleMode = t;
    }
    if (n != 0) {
      this._posX = n;
    }
    if (i != 0) {
      this._posY = i;
    }
    this._alpha = a;
  }
  Object.defineProperty(BasicDragManager.prototype, "scaleMode", {
    set: function (e) {
      this._tempScaleMode = e;
    },
    enumerable: true,
    configurable: true
  });
  BasicDragManager.prototype.startDragging = function (e) {
    this.dragVO = e;
    if (this._tempScaleMode != 0) {
      this.dragVO.dragMC.scaleX = this._tempScaleMode;
      this.dragVO.dragMC.scaleY = this._tempScaleMode;
    } else {
      this.dragVO.dragMC.scaleX = this._scaleMode;
      this.dragVO.dragMC.scaleY = this._scaleMode;
    }
  };
  BasicDragManager.prototype.stopDragging = function () {
    if (this.dragVO) {
      this.dragVO.dragSourceMC.alpha = 1;
      this.dragLayer.removeChild(this.dragVO.dragMC);
      this.dragVO = null;
      this._tempScaleMode = 0;
    }
  };
  Object.defineProperty(BasicDragManager.prototype, "isDragging", {
    get: function () {
      return this.dragVO != null;
    },
    enumerable: true,
    configurable: true
  });
  return BasicDragManager;
}();
exports.BasicDragManager = i;