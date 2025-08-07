Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./6.js");
var o = function () {
  function PopoverVO() {
    this._queueId = -1;
    this._id = -1;
  }
  PopoverVO.prototype.parseServerObject = function (e) {
    this._id = n.int(e.ID);
    this._data = e.D;
  };
  Object.defineProperty(PopoverVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PopoverVO.prototype, "data", {
    get: function () {
      return this._data;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PopoverVO.prototype, "queueId", {
    get: function () {
      return this._queueId;
    },
    set: function (e) {
      this._queueId = e;
    },
    enumerable: true,
    configurable: true
  });
  return PopoverVO;
}();
exports.PopoverVO = o;