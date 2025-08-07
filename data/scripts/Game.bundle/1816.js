Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function AResourcePanelItem() {
    this._isResourceContainer = false;
  }
  AResourcePanelItem.prototype.dispose = function () {
    this._disp = null;
  };
  Object.defineProperty(AResourcePanelItem.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AResourcePanelItem.prototype, "isResourceContainer", {
    get: function () {
      return this._isResourceContainer;
    },
    enumerable: true,
    configurable: true
  });
  return AResourcePanelItem;
}();
exports.AResourcePanelItem = n;