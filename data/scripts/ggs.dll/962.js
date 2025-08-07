Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function ScrollItemVO() {
    this._active = false;
  }
  Object.defineProperty(ScrollItemVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    set: function (e) {
      this._id = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ScrollItemVO.prototype, "active", {
    get: function () {
      return this._active;
    },
    set: function (e) {
      this._active = e;
    },
    enumerable: true,
    configurable: true
  });
  return ScrollItemVO;
}();
exports.ScrollItemVO = i;