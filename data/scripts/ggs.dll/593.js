Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function MouseCursorData() {
    this.data = [];
  }
  Object.defineProperty(MouseCursorData.prototype, "data", {
    get: function () {
      return this._data;
    },
    set: function (e) {
      this._data = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MouseCursorData.prototype, "frameRate", {
    get: function () {
      if (this._frameRate === undefined) {
        this._frameRate = 0;
      }
      return this._frameRate;
    },
    set: function (e) {
      this._frameRate = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MouseCursorData.prototype, "hotSpot", {
    get: function () {
      if (this._hotSpot === undefined) {
        this._hotSpot = new createjs.Point(0, 0);
      }
      return this._hotSpot;
    },
    set: function (e) {
      this.hotSpot = e;
    },
    enumerable: true,
    configurable: true
  });
  return MouseCursorData;
}();
exports.MouseCursorData = i;