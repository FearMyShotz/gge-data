Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.MouseEvent;
var o = function () {
  function AInventoryList(e, t = 5) {
    this._currentPage = 0;
    this.maxPage = 0;
    this.itemsPerPage = 0;
    this.pageChangedSignal = new l.Signal();
    this.disp = e;
    this.itemsPerPage = t;
  }
  AInventoryList.prototype.init = function () {
    this.inventoryListItems = [];
    this.tooltip = this.createTooltipComponent(this.disp.mc_unitTooltip);
    for (var e = 0; e < this.itemsPerPage; e++) {
      var t = this.disp["i" + e];
      this.inventoryListItems[e] = this.createListItemComponent(t, this.tooltip);
    }
    r.ButtonHelper.initBasicButtons([this.disp.btn_leftArrow, this.disp.btn_rightArrow]);
    this.show();
  };
  AInventoryList.prototype.show = function () {
    this.disp.addEventListener(n.CLICK, this.bindFunction(this.onClick));
    for (var e = 0; e < this.inventoryListItems.length; ++e) {
      this.inventoryListItems[e].show();
    }
  };
  AInventoryList.prototype.destroy = function () {
    this.disp.removeEventListener(n.CLICK, this.bindFunction(this.onClick));
    for (var e = 0; e < this.inventoryListItems.length; ++e) {
      this.inventoryListItems[e].destroy();
    }
  };
  AInventoryList.prototype.createTooltipComponent = function (e) {
    throw new s.AbstractMethodError();
  };
  AInventoryList.prototype.createListItemComponent = function (e, t) {
    throw new s.AbstractMethodError();
  };
  AInventoryList.prototype.changeUnitInventory = function (e) {
    this._unitInventory = e;
    this.update();
  };
  Object.defineProperty(AInventoryList.prototype, "unitInventory", {
    get: function () {
      return this._unitInventory;
    },
    enumerable: true,
    configurable: true
  });
  AInventoryList.prototype.onClick = function (e) {
    switch (e.target) {
      case this.disp.btn_leftArrow:
        this.currentPage = this.currentPage - 1;
        break;
      case this.disp.btn_rightArrow:
        this.currentPage = this.currentPage + 1;
    }
  };
  AInventoryList.prototype.updateArrows = function (e) {
    this.maxPage = a.int((e - 1) / this.itemsPerPage);
    this.disp.btn_rightArrow.visible = this.maxPage > 0 && this._currentPage < this.maxPage;
    this.disp.btn_leftArrow.visible = this.maxPage > 0 && this._currentPage > 0;
  };
  AInventoryList.prototype.update = function () {
    this.updateArrows(this._unitInventory.length);
    this._currentPage = a.int(Math.min(this._currentPage, this.maxPage));
    var e = this._currentPage * this.itemsPerPage;
    for (var t = 0; t < this.itemsPerPage; t++) {
      if (e < this._unitInventory.length) {
        this.inventoryListItems[t].unitVO = this._unitInventory[e];
      } else {
        this.inventoryListItems[t].unitVO = null;
      }
      e++;
    }
  };
  Object.defineProperty(AInventoryList.prototype, "currentPage", {
    get: function () {
      return this._currentPage;
    },
    set: function (e) {
      var t = a.int(this.currentPage);
      this._currentPage = a.int(Math.max(0, Math.min(this.maxPage, e)));
      if (t != this.currentPage) {
        this.update();
        this.pageChangedSignal.dispatch();
      }
    },
    enumerable: true,
    configurable: true
  });
  return AInventoryList;
}();
exports.AInventoryList = o;
var a = require("./6.js");
var s = require("./69.js");
var r = require("./8.js");
var l = require("./57.js");