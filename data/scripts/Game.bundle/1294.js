Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function AOptionsDialogContentCreator() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AOptionsDialogContentCreator, e);
  AOptionsDialogContentCreator.prototype.createItems = function () {
    return [];
  };
  Object.defineProperty(AOptionsDialogContentCreator.prototype, "accordionComponent", {
    get: function () {
      return this._accordionComponent;
    },
    set: function (e) {
      this._accordionComponent = e;
    },
    enumerable: true,
    configurable: true
  });
  return AOptionsDialogContentCreator;
}(require("./14.js").CastleComponent);
exports.AOptionsDialogContentCreator = o;