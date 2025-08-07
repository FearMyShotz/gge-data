Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function Branch(e = null, t = null, n = null) {
    this._id = e;
    this._version = t;
    this._zones = n;
  }
  Object.defineProperty(Branch.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Branch.prototype, "version", {
    get: function () {
      return this._version;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Branch.prototype, "zones", {
    get: function () {
      return this._zones;
    },
    enumerable: true,
    configurable: true
  });
  return Branch;
}();
exports.Branch = i;