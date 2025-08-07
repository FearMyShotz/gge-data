Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.MouseEvent;
var o = function () {
  function ConstructionItemSlot(e, t, i, n) {
    this._disp = n;
    this._slotVO = e;
    this.interactionData = t;
    this.clickCallback = i;
    n.mc_item.mouseChildren = false;
    n.mc_lock.mouseEnabled = false;
  }
  ConstructionItemSlot.prototype.show = function () {
    this._disp.addEventListener(n.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this._disp.addEventListener(n.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    this._disp.addEventListener(n.CLICK, this.bindFunction(this.onClick));
    if (this.interactionData) {
      this.interactionData.SGN_UPDATE.add(this.bindFunction(this.sgnUpdate));
    }
  };
  ConstructionItemSlot.prototype.hide = function () {
    this._disp.removeEventListener(n.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this._disp.removeEventListener(n.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    this._disp.removeEventListener(n.CLICK, this.bindFunction(this.onClick));
    if (this.interactionData) {
      this.interactionData.SGN_UPDATE.remove(this.bindFunction(this.sgnUpdate));
    }
  };
  ConstructionItemSlot.prototype.sgnUpdate = function (e = null) {
    this.update();
  };
  ConstructionItemSlot.prototype.update = function () {
    this._disp.mc_lock.visible = this.isLocked();
    var e = !!this.interactionData && this.interactionData.isSlotLockedForDrop(this.slotVO, this.itemVO);
    l.ButtonHelper.enableButton(this._disp.mc_item, !e);
    this.setTooltip();
  };
  ConstructionItemSlot.prototype.onMouseOver = function (e) {
    if (e.target == this._disp.mc_item && this.itemVO && !this.isLocked()) {
      a.ConstructionItemTooltipHelper.showConstructionItemToolTip(this._disp, this.itemVO);
    }
  };
  ConstructionItemSlot.prototype.onMouseOut = function (e) {
    if (this.itemVO) {
      a.ConstructionItemTooltipHelper.hideToolTip();
    }
  };
  ConstructionItemSlot.prototype.onClick = function (e) {
    this.clickCallback(this);
  };
  ConstructionItemSlot.prototype.setTooltip = function () {
    if (s.ConstructionItemsHelper.hasConstructorForSlot(this._slotVO)) {
      if (this.interactionData && this.interactionData.draggedItem && this.interactionData.draggedItem.constructionItemVO.slotType != this._slotVO.slotType) {
        this._disp.mc_item.toolTipText = "dialog_ci_assign_info_wrongSlot_tooltip";
      } else if (this.interactionData && this.interactionData.isSlotLockedByAreaLimit(this._slotVO, this.itemVO)) {
        this._disp.mc_item.toolTipText = "dialog_ci_assign_maxLimit_tooltip";
      } else if (this.itemVO) {
        this._disp.mc_item.toolTipText = null;
      } else {
        this._disp.mc_item.toolTipText = s.ConstructionItemsHelper.getSlotNameTextId(this._slotVO.slotType);
      }
    } else {
      var e = r.int(s.ConstructionItemsHelper.getMinimumConstructorLevelForSlot(this._slotVO));
      this._disp.mc_item.toolTipText = {
        t: "dialog_ci_assign_info_lockedSlot_tooltip",
        p: [e]
      };
    }
  };
  Object.defineProperty(ConstructionItemSlot.prototype, "itemVO", {
    get: function () {
      if (this.buildingVO) {
        return this.buildingVO.getConstructionItem(this._slotVO);
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemSlot.prototype, "buildingVO", {
    get: function () {
      if (this.interactionData) {
        return this.interactionData.selectedBuilding;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  ConstructionItemSlot.prototype.isLocked = function () {
    return !s.ConstructionItemsHelper.hasConstructorForSlot(this._slotVO) || !!this.interactionData && this.interactionData.isSlotLockedForDrop(this.slotVO, this.itemVO);
  };
  Object.defineProperty(ConstructionItemSlot.prototype, "slotVO", {
    get: function () {
      return this._slotVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemSlot.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  return ConstructionItemSlot;
}();
exports.ConstructionItemSlot = o;
var a = require("./356.js");
var s = require("./239.js");
var r = require("./6.js");
var l = require("./8.js");