Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function BuddyVO() {
    this.thumbUrl = "";
  }
  Object.defineProperty(BuddyVO.prototype, "playerName", {
    get: function () {
      return this._playerName;
    },
    set: function (e) {
      this._playerName = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BuddyVO.prototype, "pln", {
    get: function () {
      return this._pln;
    },
    set: function (e) {
      this._pln = e;
    },
    enumerable: true,
    configurable: true
  });
  return BuddyVO;
}();
exports.BuddyVO = n;