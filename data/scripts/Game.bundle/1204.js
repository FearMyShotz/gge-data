Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.Point;
var o = function () {
  function CastleShoppingCartPrimeDayAbstractItem(e, t, i) {
    this.category = e;
    this.itemMc = e.categoryMc[t + i];
    c.ButtonHelper.initBasicButton(this.itemMc.mc_item);
    c.ButtonHelper.initBasicButton(this.itemMc.emptySlot);
    this.itemMc.mc_item.actLikeButton = true;
    this.itemMc.emptySlot.mouseEnabled = false;
  }
  CastleShoppingCartPrimeDayAbstractItem.prototype.setPlaceholderVisibility = function (e = true) {
    this.itemMc.emptySlot.visible = e;
    this.itemVisibility(!e);
  };
  CastleShoppingCartPrimeDayAbstractItem.prototype.itemVisibility = function (e) {
    this.itemMc.btn_info.visible = e;
    this.itemMc.mc_item.mc_icon.visible = e;
    this.itemMc.mc_item.txt_text.visible = e;
    this.itemMc.mc_item.mc_textBackground.visible = e;
  };
  CastleShoppingCartPrimeDayAbstractItem.prototype.checkClick = function (e) {
    return false;
  };
  CastleShoppingCartPrimeDayAbstractItem.prototype.enable = function () {
    c.ButtonHelper.enableButton(this.itemMc.mc_item, true);
    c.ButtonHelper.enableButton(this.itemMc.emptySlot, true);
    this.hideBlocker();
  };
  CastleShoppingCartPrimeDayAbstractItem.prototype.disable = function () {
    c.ButtonHelper.enableButton(this.itemMc.mc_item, false);
    c.ButtonHelper.enableButton(this.itemMc.emptySlot, false);
    this.showBlocker();
  };
  CastleShoppingCartPrimeDayAbstractItem.prototype.hideBlocker = function () {
    this.itemMc.blocker.visible = false;
  };
  CastleShoppingCartPrimeDayAbstractItem.prototype.showBlocker = function () {
    this.itemMc.blocker.toolTipText = "dialog_shoppingCartPrimeDay_categoryFull_tooltip";
    this.itemMc.blocker.visible = true;
  };
  CastleShoppingCartPrimeDayAbstractItem.prototype.isEmpty = function () {
    return this._node == null;
  };
  Object.defineProperty(CastleShoppingCartPrimeDayAbstractItem.prototype, "optionId", {
    get: function () {
      if (this.isEmpty()) {
        return -1;
      } else {
        return this._node.cartOptionId;
      }
    },
    set: function (e) {
      this.node = l.CastleModel.shoppingCartPrimeDayData.getNodeByOption(e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleShoppingCartPrimeDayAbstractItem.prototype, "typeId", {
    set: function (e) {
      this.node = l.CastleModel.shoppingCartPrimeDayData.getNodeByTypeAndGroup(e, this.category.groupId);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleShoppingCartPrimeDayAbstractItem.prototype, "node", {
    set: function (e) {
      this._node = e;
      this.renderNode();
    },
    enumerable: true,
    configurable: true
  });
  CastleShoppingCartPrimeDayAbstractItem.prototype.renderNode = function () {
    var e = this.isEmpty();
    if (this._renderComponent) {
      this._renderComponent.destroy();
      this._renderComponent = null;
    }
    this.itemMc.blocker.visible = e;
    if (!e) {
      this._renderComponent = a.CollectableRenderHelper.displaySingleItem(new s.CollectableRenderClips(this.itemMc.mc_item).addInfoBtn(this.itemMc.btn_info), this._node.item, new r.CollectableRenderOptions(r.CollectableRenderOptions.SET_ADVANCED, CastleShoppingCartPrimeDayAbstractItem.REWARD_DIMENSION));
      this.enable();
    }
    this.setPlaceholderVisibility(e);
  };
  CastleShoppingCartPrimeDayAbstractItem.prototype.clear = function () {
    this.itemMc.blocker.visible = true;
    this.setPlaceholderVisibility(true);
    if (this._renderComponent) {
      this._renderComponent.destroy();
      this._renderComponent = null;
    }
  };
  Object.defineProperty(CastleShoppingCartPrimeDayAbstractItem.prototype, "visible", {
    set: function (e) {
      this.itemMc.visible = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleShoppingCartPrimeDayAbstractItem.prototype, "x", {
    set: function (e) {
      this.itemMc.x = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleShoppingCartPrimeDayAbstractItem.prototype, "y", {
    set: function (e) {
      this.itemMc.y = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleShoppingCartPrimeDayAbstractItem.prototype, "width", {
    get: function () {
      return this.itemMc.width;
    },
    enumerable: true,
    configurable: true
  });
  CastleShoppingCartPrimeDayAbstractItem.prototype.reset = function () {
    this.enable();
    this.setPlaceholderVisibility(false);
    this.hideBlocker();
  };
  CastleShoppingCartPrimeDayAbstractItem.prototype.select = function (e) {
    return !!e && !!this.isEmpty() && (this.node = e._node, true);
  };
  CastleShoppingCartPrimeDayAbstractItem.prototype.unselect = function () {};
  CastleShoppingCartPrimeDayAbstractItem.__initialize_static_members = function () {
    CastleShoppingCartPrimeDayAbstractItem.REWARD_DIMENSION = new n(55, 50);
  };
  return CastleShoppingCartPrimeDayAbstractItem;
}();
exports.CastleShoppingCartPrimeDayAbstractItem = o;
var a = require("./25.js");
var s = require("./31.js");
var r = require("./19.js");
var l = require("./4.js");
var c = require("./8.js");
o.__initialize_static_members();