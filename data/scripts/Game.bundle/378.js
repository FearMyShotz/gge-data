Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./1.js");
var c = require("./1.js");
var u = require("./1.js");
var d = require("./1.js");
var p = require("./3.js");
var h = require("./3.js");
var g = require("./6.js");
var C = require("./427.js");
var _ = require("./85.js");
var m = require("./4.js");
var f = require("./213.js");
var O = require("./40.js");
var E = createjs.Point;
var y = createjs.MouseEvent;
var b = createjs.Rectangle;
var D = function (e) {
  function CastleInventoryComponent(t, i, n, o, a, s, r = false, l = null, c = 0, u = CastleInventoryComponent.DEFAULT_GAP, d = -1, p = null, h = true, g = true) {
    var C = this;
    C._inventoryCurrentPage = 0;
    C._inventoryMaxPage = 0;
    C._maxItems = 0;
    C._iconWidth = 0;
    C._iconHeight = 0;
    C._itemWidth = 0;
    C._itemHeight = 0;
    C._itemGap = CastleInventoryComponent.DEFAULT_GAP;
    C._itemsClickable = false;
    C._ownerCrest = null;
    C._levelIconSize = -1;
    C._levelIconOffset = null;
    C.useBG = true;
    C.autoFitBounds = true;
    CONSTRUCTOR_HACK;
    (C = e.call(this, t) || this).useBG = h;
    C.autoFitBounds = g;
    C._levelIconSize = d;
    C._levelIconOffset = p;
    C._maxItems = i;
    C._inventoryArray = n;
    C.itemClass = o;
    C._iconWidth = a;
    C._iconHeight = s;
    C._itemGap = u;
    C._itemsClickable = r;
    t.addEventListener(y.CLICK, C.bindFunction(C.onClick));
    C._ownerCrest = l;
    C.onInventoryUpdated(null);
    S.ButtonHelper.initBasicButtons([C.inventoryComponent.btn_leftArrow, C.inventoryComponent.btn_rightArrow]);
    return C;
  }
  n.__extends(CastleInventoryComponent, e);
  CastleInventoryComponent.prototype.enableMouseWheel = function () {
    this.disp.addEventListener(y.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
  };
  CastleInventoryComponent.prototype.destroy = function () {
    if (this.disp) {
      this.removeEventListener();
    }
    e.prototype.destroy.call(this);
  };
  Object.defineProperty(CastleInventoryComponent.prototype, "inventoryLength", {
    get: function () {
      return this._inventoryArray.length;
    },
    enumerable: true,
    configurable: true
  });
  CastleInventoryComponent.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.inventoryComponent.btn_leftArrow:
      case this.inventoryComponent.btn_rightArrow:
        this.onClickInventoryArrow(t);
    }
    if (this._itemsClickable && d.instanceOfClass(t.target, u.getQualifiedClassName(this.itemClass))) {
      var i = l.castAs(t.target.unitVO, "BasicUnitVO");
      if (i) {
        this.disp.dispatchEvent(new C.CastleInventoryComponentEvent(C.CastleInventoryComponentEvent.CLICK_ITEM, i, this._ownerCrest));
      }
    }
  };
  CastleInventoryComponent.prototype.onMouseWheel = function (t) {
    e.prototype.onMouseWheel.call(this, t);
    this.scrollInventory(t.delta < 0 ? CastleInventoryComponent.SCROLL_LEFT : CastleInventoryComponent.SCROLL_RIGHT);
  };
  CastleInventoryComponent.prototype.initInventoryArrows = function (e) {
    this._inventoryMaxPage = g.int((e - 1) / this._maxItems);
    if (this.inventoryComponent.btn_rightArrow && this.inventoryComponent.btn_leftArrow) {
      this.inventoryComponent.btn_rightArrow.visible = this._inventoryMaxPage > 0 && this._inventoryCurrentPage < this._inventoryMaxPage;
      this.inventoryComponent.btn_leftArrow.visible = this._inventoryMaxPage > 0 && this._inventoryCurrentPage > 0;
    }
  };
  CastleInventoryComponent.prototype.onInventoryUpdated = function (e) {
    this.fillInventoryByGroup();
  };
  CastleInventoryComponent.prototype.updateInventory = function (e, t = null) {
    this._inventoryArray = e;
    this.fadeOutUnitsArray = t;
    this.fillInventoryByGroup(this.fadeOutUnitsArray);
  };
  CastleInventoryComponent.prototype.onClickInventoryArrow = function (e) {
    if (e.target == this.inventoryComponent.btn_leftArrow) {
      this.scrollInventory(CastleInventoryComponent.SCROLL_LEFT);
    } else {
      this.scrollInventory(CastleInventoryComponent.SCROLL_RIGHT);
    }
  };
  CastleInventoryComponent.prototype.scrollInventory = function (e) {
    var t = this._inventoryCurrentPage;
    this._inventoryCurrentPage = g.int(f.CastleMathHelper.clamp(this._inventoryCurrentPage + e, 0, this._inventoryMaxPage));
    if (t != this._inventoryCurrentPage) {
      this.fillInventoryByGroup(this.fadeOutUnitsArray);
    }
    this.disp.dispatchEvent(new C.CastleInventoryComponentEvent(C.CastleInventoryComponentEvent.SCROLL_INVENTORY, null));
  };
  CastleInventoryComponent.prototype.fillInventoryByGroup = function (e = null) {
    this._inventoryArray.sort(I.ClientConstSort.sortByUnitSortOrder);
    this.initInventoryArrows(this._inventoryArray.length);
    this._inventoryCurrentPage = g.int(Math.min(this._inventoryCurrentPage, this._inventoryMaxPage));
    var t = this.inventoryCurrentPage * this._maxItems;
    r.MovieClipHelper.clearMovieClip(this.inventoryComponent.mc_unitHolder);
    var i = g.int(Math.min(this._maxItems, this._inventoryArray.length - t));
    for (var n = 0; n < this._maxItems && t < this._inventoryArray.length; n++) {
      var c = l.castAs(this._inventoryArray[t], "BasicUnitVO");
      var u = new this.itemClass();
      u.txt_amount.defaultCacheScale = 2;
      this._itemWidth = g.int(u.width);
      this._itemHeight = g.int(u.height);
      var C = u.txt_amount.width;
      var m = u.txt_amount.height;
      if (t >= this._inventoryArray.length) {
        break;
      }
      if (c.isStronghold) {
        u.gotoAndStop(2);
        u.toolTipText = p.Localize.text(c.getNameString()) + "\n" + p.Localize.text("stronghold_UnitInside");
      } else {
        u.gotoAndStop(1);
        u.toolTipText = c.getNameString();
      }
      u.visible = true;
      u.mouseChildren = false;
      u.unitVO = c;
      this.addInventoryPic(c, u);
      u.txt_amount.visible = true;
      if (u.amountBgr) {
        u.amountBgr.visible = true;
      }
      if (d.instanceOfClass(c, "EffectIconUnitVO")) {
        var f = c.inventoryAmount >= 0 ? a.GenericTextIds.VALUE_PERCENTAGE_ADD : a.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT;
        var O = c.inventoryAmount >= 0 ? a.GenericTextIds.VALUE_NOMINAL_ADD : a.GenericTextIds.VALUE_NOMINAL_SUBTRACT;
        if (u.itxt_amount) {
          u.itxt_amount.textContentVO.textId = c.valueIsPercentage ? f : O;
          u.itxt_amount.textContentVO.textReplacements = [String(Math.abs(c.inventoryAmount))];
        } else if (c.valueIsPercentage) {
          u.itxt_amount = v.CastleComponent.textFieldManager.registerTextField(u.txt_amount, new h.LocalizedTextVO(f, [String(Math.abs(c.inventoryAmount))]), new s.InternalGGSTextFieldConfigVO(true));
        } else {
          u.itxt_amount = v.CastleComponent.textFieldManager.registerTextField(u.txt_amount, new h.LocalizedTextVO(O, [Math.abs(c.inventoryAmount)], true), new s.InternalGGSTextFieldConfigVO(true));
        }
      } else if (c.name != CastleInventoryComponent.UNKNOWN_TOOL_NAME || c.type != CastleInventoryComponent.UNKNOWN_TOOL_TYPE) {
        if (u.itxt_amount) {
          u.itxt_amount.textContentVO.numberValue = c.inventoryAmount;
        } else {
          u.itxt_amount = v.CastleComponent.textFieldManager.registerTextField(u.txt_amount, new _.CastleLocalizedNumberVO(c.inventoryAmount, {
            compactThreshold: 1000000
          }), new s.InternalGGSTextFieldConfigVO(true));
        }
      } else {
        u.txt_amount.visible = false;
        if (u.amountBgr) {
          u.amountBgr.visible = false;
        }
      }
      if ((c.name != CastleInventoryComponent.UNKNOWN_TOOL_NAME || c.type != CastleInventoryComponent.UNKNOWN_TOOL_TYPE) && !!this.autoFitBounds) {
        u.itxt_amount.fitTextSizeToBounds(new b(0, 0, C, m));
      }
      this.positionItem(u, n, i);
      u.actLikeButton = this._itemsClickable;
      if (e && e.indexOf(c) > -1) {
        var E = new o.ColorMatrix();
        E.desaturate();
        u.useFilters([E.filter]);
        u.actLikeButton = false;
      }
      this.inventoryComponent.mc_unitHolder.addChild(u);
      t++;
    }
  };
  CastleInventoryComponent.prototype.positionItem = function (e, t, i) {
    e.x = t * (this._itemWidth + this._itemGap);
  };
  CastleInventoryComponent.prototype.addInventoryPic = function (e, t) {
    var i = this._ownerCrest ? this._ownerCrest : m.CastleModel.userData.playerCrest;
    var n = 0;
    var o = 0;
    if (i) {
      n = i.backgroundColor1;
      o = i.backgroundColor2;
    }
    if (t.mc_bg && this.useBG) {
      T.WodPicHelper.setCorrectUnitBackgroundPic(e, t.mc_bg, Library.CastleInterfaceElements.castleAttackSpyInfoBackground, Library.CastleInterfaceElements.castleAttackSpyInfoBackground_berimond);
    }
    T.WodPicHelper.addUnitPicToContainer(e, t, this._iconWidth * 0.9, this._iconHeight * 0.9, this._iconWidth, this._iconHeight, n, o, this._levelIconSize < 0 ? 14 : this._levelIconSize, this._levelIconOffset ? this._levelIconOffset : new E(20, 20));
  };
  Object.defineProperty(CastleInventoryComponent.prototype, "inventoryComponent", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleInventoryComponent.prototype, "currentCategory", {
    set: function (e) {
      this._currentCategory = e;
      this.fillInventoryByGroup();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleInventoryComponent.prototype, "inventoryCurrentPage", {
    get: function () {
      return this._inventoryCurrentPage;
    },
    set: function (e) {
      this._inventoryCurrentPage = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleInventoryComponent.prototype, "itemWidth", {
    get: function () {
      return this._itemWidth;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleInventoryComponent.prototype, "itemHeight", {
    get: function () {
      return this._itemHeight;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleInventoryComponent.prototype, "itemGap", {
    get: function () {
      return this._itemGap;
    },
    set: function (e) {
      this._itemGap = e;
      this.fillInventoryByGroup();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleInventoryComponent.prototype, "maxItems", {
    get: function () {
      return this._maxItems;
    },
    set: function (e) {
      this._maxItems = g.int(e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleInventoryComponent.prototype, "inventoryArray", {
    get: function () {
      return this._inventoryArray;
    },
    enumerable: true,
    configurable: true
  });
  CastleInventoryComponent.DEFAULT_GAP = 5;
  CastleInventoryComponent.UNKNOWN_TOOL_NAME = "Unknown";
  CastleInventoryComponent.UNKNOWN_TOOL_TYPE = "Tools";
  CastleInventoryComponent.SCROLL_RIGHT = 1;
  CastleInventoryComponent.SCROLL_LEFT = -1;
  return CastleInventoryComponent;
}(O.CastleItemRenderer);
exports.CastleInventoryComponent = D;
var I = require("./75.js");
var T = require("./63.js");
var v = require("./14.js");
var S = require("./8.js");
c.classImplementsInterfaces(D, "ICollectableRendererList");