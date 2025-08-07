Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./2.js");
var a = require("./3.js");
var s = i.getLogger("ConfigFilesVersionsModel");
var r = function () {
  function ConfigFilesVersionsModel() {}
  Object.defineProperty(ConfigFilesVersionsModel, "instance", {
    get: function () {
      if (ConfigFilesVersionsModel._instance == null) {
        ConfigFilesVersionsModel._instance = new ConfigFilesVersionsModel();
      }
      return ConfigFilesVersionsModel._instance;
    },
    enumerable: true,
    configurable: true
  });
  ConfigFilesVersionsModel.prototype.loadVersionJson = function (e) {
    var t = this;
    return new Promise(function (n, i) {
      if (t._versionData) {
        s.debug("ConfigFilesVersionsModel already contains data, loading of " + e + " will be skipped.");
        n();
      } else {
        var r = new a.URLLoaderService(new a.URLRequest(e));
        r.load().then(function (e) {
          s.debug("versions loaded successfully");
          t._versionData = JSON.parse(e);
          r.dispose();
          n();
        }).catch(function (e) {
          s.warn("Error while loading/parsing version json");
          r.dispose();
          i(e);
        });
      }
    });
  };
  ConfigFilesVersionsModel.prototype.languageVersion = function (e) {
    return this._versionData.languages[e];
  };
  ConfigFilesVersionsModel.prototype.networkVersion = function (e) {
    return this._versionData.networks[e];
  };
  Object.defineProperty(ConfigFilesVersionsModel.prototype, "countryVersion", {
    get: function () {
      return this._versionData.country;
    },
    enumerable: true,
    configurable: true
  });
  ConfigFilesVersionsModel.prototype.dispose = function () {
    this._versionData = null;
    ConfigFilesVersionsModel._instance = null;
  };
  return ConfigFilesVersionsModel;
}();
exports.ConfigFilesVersionsModel = r;