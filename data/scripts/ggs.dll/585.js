Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = createjs.LoadQueue;
var a = function () {
  function URLLoader(e = null) {
    this.loadQueue = new i();
    this.request = e;
  }
  URLLoader.prototype.load = function (e) {
    if (!this.request) {
      throw new Error("this.request is not set");
    }
    this.loadQueue.loadFile(this.request.url);
  };
  URLLoader.prototype.close = function () {
    this.loadQueue.close();
  };
  Object.defineProperty(URLLoader.prototype, "dataFormat", {
    get: function () {
      return "";
    },
    set: function (e) {},
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(URLLoader.prototype, "data", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  URLLoader.prototype.addEventListener = function (e, t) {
    return this.loadQueue.addEventListener(e, t);
  };
  URLLoader.prototype.removeEventListener = function (e, t) {
    return new Function();
  };
  return URLLoader;
}();
exports.URLLoader = a;