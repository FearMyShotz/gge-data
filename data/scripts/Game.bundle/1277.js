Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function AEquipableClickHandler() {
    this._tabChangeAllowed = true;
  }
  AEquipableClickHandler.prototype.init = function () {
    this.controller.addEventListener(d.CastleLayoutManagerEvent.SHOW_DIALOG, this.bindFunction(this.onShowDialog));
  };
  AEquipableClickHandler.prototype.dispose = function () {
    this.controller.removeEventListener(d.CastleLayoutManagerEvent.SHOW_DIALOG, this.bindFunction(this.onShowDialog));
  };
  AEquipableClickHandler.prototype.onShowDialog = function (e) {
    this.IGNORED_DRAG_CANCEL_DIALOGS ||= [a.CastleExternalPreloaderDialog, s.CastleEquipmentSellDialog, c.CastleSellEmbeddedEquipmentDialog, r.CastleNewSocketDialog, l.CastleReplaceSocketDialog];
    if (this.IGNORED_DRAG_CANCEL_DIALOGS.indexOf(e.params[0]) == -1) {
      this.cancelDragMovement();
    }
  };
  AEquipableClickHandler.prototype.cancelDragMovement = function () {
    throw new u.AbstractMethodError();
  };
  AEquipableClickHandler.prototype.hideDialog = function () {};
  AEquipableClickHandler.prototype.setStorageWarning = function () {};
  AEquipableClickHandler.prototype.handleDialogClick = function (e) {
    throw new u.AbstractMethodError();
  };
  AEquipableClickHandler.prototype.handleDialogMouseOver = function (e) {
    throw new u.AbstractMethodError();
  };
  AEquipableClickHandler.prototype.handleDialogMouseOut = function (e) {};
  AEquipableClickHandler.prototype.handleInventoryClick = function (e) {
    throw new u.AbstractMethodError();
  };
  AEquipableClickHandler.prototype.handleInventoryEntryClick = function (e) {
    throw new u.AbstractMethodError();
  };
  AEquipableClickHandler.prototype.handleInventoryEntryTouchDragStart = function (e) {
    throw new u.AbstractMethodError();
  };
  AEquipableClickHandler.prototype.handleInventoryEntryTouchDragEnd = function (e) {
    throw new u.AbstractMethodError();
  };
  Object.defineProperty(AEquipableClickHandler.prototype, "inventory", {
    set: function (e) {
      this._inventory = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEquipableClickHandler.prototype, "inventoryDisp", {
    get: function () {
      return this._inventory.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEquipableClickHandler.prototype, "layoutManager", {
    get: function () {
      return o.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEquipableClickHandler.prototype, "controller", {
    get: function () {
      return p.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEquipableClickHandler.prototype, "tabChangeAllowed", {
    get: function () {
      return this._tabChangeAllowed;
    },
    set: function (e) {
      this._tabChangeAllowed = e;
    },
    enumerable: true,
    configurable: true
  });
  return AEquipableClickHandler;
}();
exports.AEquipableClickHandler = n;
var o = require("./17.js");
var a = require("./154.js");
var s = require("./595.js");
var r = require("./1278.js");
var l = require("./1279.js");
var c = require("./909.js");
var u = require("./69.js");
var d = require("./91.js");
var p = require("./15.js");