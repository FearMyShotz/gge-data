Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./28.js");
var a = createjs.Container;
var s = require("./135.js");
var r = function (e) {
  function Loader() {
    return e.call(this) || this;
  }
  i.__extends(Loader, e);
  Loader.prototype.load = function (e) {
    this.loadQueue.loadFile(this.urlRequest.url);
  };
  Object.defineProperty(Loader.prototype, "contentLoaderInfo", {
    get: function () {
      return new s.LoaderInfo();
    },
    enumerable: true,
    configurable: true
  });
  return Loader;
}(a);
exports.Loader = r;