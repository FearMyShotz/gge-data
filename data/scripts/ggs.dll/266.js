Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function BasicLocalizationData() {}
  Object.defineProperty(BasicLocalizationData.prototype, "getUsernameMinLength", {
    get: function () {
      return this._usernameMinLength;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicLocalizationData.prototype, "setUsernameMinLength", {
    set: function (e) {
      this._usernameMinLength = e;
    },
    enumerable: true,
    configurable: true
  });
  return BasicLocalizationData;
}();
exports.BasicLocalizationData = i;