Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function QueuedBuildingConstructionCommandVO(e, t) {
    this._wodID = 0;
    this._command = e;
    this._wodID = t;
  }
  Object.defineProperty(QueuedBuildingConstructionCommandVO.prototype, "command", {
    get: function () {
      return this._command;
    },
    set: function (e) {
      this._command = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(QueuedBuildingConstructionCommandVO.prototype, "wodID", {
    get: function () {
      return this._wodID;
    },
    set: function (e) {
      this._wodID = e;
    },
    enumerable: true,
    configurable: true
  });
  return QueuedBuildingConstructionCommandVO;
}();
exports.QueuedBuildingConstructionCommandVO = n;