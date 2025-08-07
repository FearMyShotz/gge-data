Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function AEquipableFilterView(e, t, i) {
    this.tabToolTipText = e;
    this.filter = t;
    this._clickHandler = i;
  }
  AEquipableFilterView.prototype.fillScrollListData = function (e) {
    throw new o.AbstractMethodError();
  };
  AEquipableFilterView.prototype.addListeners = function () {
    this._clickHandler.init();
  };
  AEquipableFilterView.prototype.removeListeners = function () {
    this._clickHandler.dispose();
  };
  AEquipableFilterView.prototype.triggerLightUpdate = function () {
    throw new o.AbstractMethodError();
  };
  AEquipableFilterView.prototype.informAboutChange = function () {
    if (this.listChangedCallback) {
      this.listChangedCallback(this);
    }
  };
  Object.defineProperty(AEquipableFilterView.prototype, "tabToolTip", {
    get: function () {
      return this.tabToolTipText;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEquipableFilterView.prototype, "isTabActive", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEquipableFilterView.prototype, "listChanged", {
    set: function (e) {
      this.listChangedCallback = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEquipableFilterView.prototype, "clickHandler", {
    get: function () {
      return this._clickHandler;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEquipableFilterView.prototype, "slotClass", {
    get: function () {
      throw new o.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  AEquipableFilterView.prototype.matches = function (e, t) {
    throw new o.AbstractMethodError();
  };
  return AEquipableFilterView;
}();
exports.AEquipableFilterView = n;
var o = require("./69.js");