Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./18.js");
var s = require("./792.js");
var r = require("./1567.js");
var l = createjs.MouseEvent;
var c = function (e) {
  function UnitProductionListComponent(t, i) {
    var n = this;
    n.canInteract = true;
    n.canShowLocks = true;
    CONSTRUCTOR_HACK;
    (n = e.call(this, t.mc_buildList, i) || this)._connector = t.mc_buildList.connector;
    n._connector.visible = false;
    n._productionItemMC = t.mc_buildList.productionItem;
    n._productionItemAreaMC = t.mc_buildList.productionItemArea;
    n._productionItemAreaMC.toolTipText = n.noProductionSlotText();
    return n;
  }
  n.__extends(UnitProductionListComponent, e);
  UnitProductionListComponent.prototype.fillProductionItem = function () {
    this.clearProductionItem();
    if (this._productionItemSlot) {
      this._productionItem = this.createBuildListItem();
      this._productionItem.slotVO = this._productionItemSlot;
      this._productionItem.showProgressbar = true;
      this.initBuildListItem(this._productionItem);
      this._productionItemMC.addChild(this._productionItem.disp);
      this._connector.visible = false;
      var e = this._buildlist.getSlotByPos(0);
      if (e && this._productionItemSlot.sourceRecruitmentID == e.recruitmentID && this._productionItemSlot.amount > 0) {
        this._connector.visible = true;
      }
      if (this._productionItemSlot.amount > 0) {
        this._productionItemAreaMC.toolTipText = "";
      } else {
        this._productionItemAreaMC.toolTipText = this.noProductionSlotText();
      }
    } else {
      this._productionItemAreaMC.toolTipText = this.noProductionSlotText();
    }
  };
  UnitProductionListComponent.prototype.clearProductionItem = function () {
    if (this._productionItem) {
      if (this._productionItem.disp.stage) {
        this._productionItem.disp.stage.removeEventListener(l.MOUSE_UP, this.bindFunction(this.onItemMouseUp));
        this._productionItem.disp.stage.removeEventListener(l.MOUSE_MOVE, this.bindFunction(this.onItemMouseMove));
      }
      this._productionItem.disp.removeEventListener(l.CLICK, this.bindFunction(this.onItemClick));
      this._productionItem.disp.removeEventListener(l.MOUSE_DOWN, this.bindFunction(this.onItemMouseDown));
      this._productionItem.disp.removeEventListener(l.MOUSE_OVER, this.bindFunction(this.onMouseOverItem));
      this._productionItem.remove();
      if (this._productionItem.disp.parent) {
        this._productionItemMC.removeChild(this._productionItem.disp);
      }
    }
  };
  UnitProductionListComponent.prototype.toggleConnector = function () {
    this._connector.visible = !this._connector.visible;
  };
  UnitProductionListComponent.prototype.fillItems = function (t, i = 0) {
    this.showProgressbar = false;
    e.prototype.fillItems.call(this, t, i);
    this._productionItemSlot = t.currentProductionSlot;
    this.fillProductionItem();
  };
  UnitProductionListComponent.prototype.onItemClick = function (t) {
    if (this.canInteract) {
      var i = o.castAs(t.target.bItem, "BasicBuildListItem");
      if (i == this._productionItem) {
        if (this.selectedItem) {
          this.selectedItem.isSelected = false;
        }
        this._selectedSlot = -1;
        i.isSelected = true;
        this.dispatchEvent(new s.BasicBuildListEvent(s.BasicBuildListEvent.SELECTED_ITEM));
      } else {
        this._productionItem.isSelected = false;
        e.prototype.onItemClick.call(this, t);
      }
    }
  };
  UnitProductionListComponent.prototype.onMouseOverItem = function (t) {
    e.prototype.onMouseOverItem.call(this, t);
  };
  UnitProductionListComponent.prototype.onItemMouseDown = function (t) {
    var i = o.castAs(t.target.bItem, "BasicBuildListItem");
    if (this._productionItem != i) {
      e.prototype.onItemMouseDown.call(this, t);
    }
  };
  UnitProductionListComponent.prototype.setItemTooltip = function (t) {
    e.prototype.setItemTooltip.call(this, t);
    if (t == this._productionItem && this._productionItemSlot.amount <= 0) {
      t.disp.toolTipText = this.noProductionSlotText();
    }
  };
  Object.defineProperty(UnitProductionListComponent.prototype, "selectedItem", {
    get: function () {
      if (this._productionItem && this._productionItem.isSelected) {
        return this._productionItem;
      } else {
        return Object.getOwnPropertyDescriptor(u.BasicBuildListComponent.prototype, "selectedItem").get.call(this);
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.UnitBuildListComponent.prototype, "selectedItem").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  UnitProductionListComponent.prototype.noProductionSlotText = function () {
    if (this.category == a.ClientConstCastle.UNIT_CATEGORY_TOOLS) {
      return "recruitSlot_noProduction";
    } else {
      return "recruitSlot_noRecruitment";
    }
  };
  Object.defineProperty(UnitProductionListComponent.prototype, "productionItem", {
    get: function () {
      return this._productionItem;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitProductionListComponent.prototype, "isProductionItemSelected", {
    get: function () {
      return !!this._productionItem && this._productionItem.isSelected;
    },
    enumerable: true,
    configurable: true
  });
  return UnitProductionListComponent;
}(r.UnitBuildListComponent);
exports.UnitProductionListComponent = c;
var u = require("./458.js");