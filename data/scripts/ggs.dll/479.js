Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./480.js");
var a = function () {
  function AssetManager() {}
  Object.defineProperty(AssetManager, "manager", {
    get: function () {
      if (AssetManager._manager == null) {
        AssetManager._manager = new i.DefaultAssetManager();
      }
      return AssetManager._manager;
    },
    set: function (e) {
      AssetManager._manager = e;
    },
    enumerable: true,
    configurable: true
  });
  return AssetManager;
}();
exports.AssetManager = a;