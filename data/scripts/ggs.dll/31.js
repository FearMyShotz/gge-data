Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./20.js");
var a = require("./55.js");
var s = function () {
  function GGSCountryController() {
    this._currentCountryChanged = new i.Signal(a.Country);
    if (GGSCountryController._instance) {
      throw new Error("Calling constructor not allowed! Use getInstance instead.");
    }
  }
  Object.defineProperty(GGSCountryController, "instance", {
    get: function () {
      GGSCountryController._instance ||= new GGSCountryController();
      return GGSCountryController._instance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSCountryController.prototype, "activeCountries", {
    get: function () {
      return window.ggs.worldAssignment.facade.activeCountries;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSCountryController.prototype, "currentCountry", {
    get: function () {
      return window.ggs.worldAssignment.facade.currentCountry;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GGSCountryController.prototype, "currentCountryChanged", {
    get: function () {
      return this._currentCountryChanged;
    },
    enumerable: true,
    configurable: true
  });
  return GGSCountryController;
}();
exports.GGSCountryController = s;