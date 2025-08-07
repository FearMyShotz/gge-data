Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function AbstractLocalStorage(e) {
    if (e === undefined || e === null || e === "") {
      throw new Error("Section cannot be null or empty");
    }
    this._section = e;
  }
  AbstractLocalStorage.prototype.hasAttribute = function (e) {
    return this._data.hasOwnProperty(e);
  };
  AbstractLocalStorage.prototype.getAttribute = function (e) {
    return this._data[e];
  };
  AbstractLocalStorage.prototype.setAttribute = function (e, t) {
    this._data[e] = t;
  };
  AbstractLocalStorage.prototype.deleteAttribute = function (e) {
    if (this.hasAttribute(e)) {
      delete this._data[e];
    }
  };
  AbstractLocalStorage.prototype.getAttributes = function () {
    var e = [];
    for (var t in this._data) {
      if (this._data[t] !== null) {
        e.push(t);
      }
    }
    return e;
  };
  return AbstractLocalStorage;
}();
exports.AbstractLocalStorage = i;