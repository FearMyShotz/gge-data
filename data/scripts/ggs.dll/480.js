Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./44.js");
var a = require("./3.js");
var s = function () {
  function DefaultAssetManager() {}
  DefaultAssetManager.prototype.doesExist = function (e) {
    try {
      this.getDefinition(e);
    } catch (e) {
      return false;
    }
    return true;
  };
  DefaultAssetManager.prototype.getDefinition = function (e) {
    var t;
    try {
      t = a.getDefinitionByNameFromLibrary(String(e));
    } catch (t) {
      i.error("error: {e}.\nidentifier: " + e);
    }
    return t;
  };
  DefaultAssetManager.prototype.getClass = function (e) {
    return this.getDefinition(e);
  };
  return DefaultAssetManager;
}();
exports.DefaultAssetManager = s;