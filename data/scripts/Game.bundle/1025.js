Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./6.js");
var r = require("./69.js");
var l = require("./85.js");
var c = require("./4.js");
var u = createjs.Point;
var d = createjs.MouseEvent;
var p = function () {
  function AInventoryListItem(e, t) {
    this.disp = e;
    this.disp.btn_dismiss.toolTipText = "dialog_dismissUnit_tooltip";
    this.tooltip = t;
    this.infoAmountText = AInventoryListItem.textFieldManager.registerTextField(this.disp.item.mc_contentHolder.infoAmount.txt_value, new a.LocalizedNumberVO(0));
    this.show();
  }
  AInventoryListItem.prototype.show = function () {
    this.disp.addEventListener(d.CLICK, this.bindFunction(this.onClick));
    this.disp.addEventListener(d.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    this.disp.addEventListener(d.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    if (o.currentBrowserInfo.isMobile) {
      var e = this.disp.btn_dismiss;
      if (e) {
        e.scaleX = e.scaleY = 1.5;
      }
    }
  };
  AInventoryListItem.prototype.destroy = function () {
    this.disp.removeEventListener(d.CLICK, this.bindFunction(this.onClick));
    this.disp.removeEventListener(d.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    this.disp.removeEventListener(d.MOUSE_OVER, this.bindFunction(this.onMouseOver));
  };
  Object.defineProperty(AInventoryListItem.prototype, "unitVO", {
    get: function () {
      return this._unitVO;
    },
    set: function (e) {
      this._unitVO = e;
      this.update();
    },
    enumerable: true,
    configurable: true
  });
  AInventoryListItem.prototype.onClick = function (e) {
    switch (e.target) {
      case this.disp.item:
        this.onClickUnit();
        break;
      case this.disp.btn_info:
        this.onClickUnitInfo();
        break;
      case this.disp.btn_dismiss:
        this.onClickDismissUnit();
    }
  };
  AInventoryListItem.prototype.onMouseOver = function (e) {
    if (this.unitVO) {
      this.dismissButtonVisibility = true;
      if (e.target == this.disp.item) {
        this.tooltip.show(this.unitVO, this.disp);
      }
    }
  };
  AInventoryListItem.prototype.onMouseOut = function (e) {
    this.tooltip.hide();
    this.dismissButtonVisibility = false;
  };
  AInventoryListItem.prototype.onClickUnit = function () {
    throw new r.AbstractMethodError();
  };
  AInventoryListItem.prototype.onClickUnitInfo = function () {
    throw new r.AbstractMethodError();
  };
  AInventoryListItem.prototype.onClickDismissUnit = function () {
    throw new r.AbstractMethodError();
  };
  Object.defineProperty(AInventoryListItem.prototype, "hasDismissButton", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  AInventoryListItem.prototype.update = function () {
    if (this.unitVO) {
      h.WodPicHelper.setCorrectUnitBackgroundPic(this.unitVO, this.disp.item.mc_bg, Library.CastleInterfaceElements.castleRecruitUnitBackground, Library.CastleInterfaceElements.castleRecruitUnitBackground_Berimond);
      this.disp.visible = true;
      this.tooltip.hide();
      h.WodPicHelper.addUnitPic(this.unitVO, this.disp.item.mc_contentHolder.mc_content, s.int(this.disp.item.width / this.disp.item.scaleX), s.int(this.disp.item.height / this.disp.item.scaleY), c.CastleModel.userData.playerCrest.colorsTwo[0], c.CastleModel.userData.playerCrest.colorsTwo[1], 26, new u(12, 14));
      this.disp.item.mc_contentHolder.infoAmount.visible = this.unitVO.inventoryAmount > 0;
      this.infoAmountText = AInventoryListItem.textFieldManager.registerTextField(this.disp.item.mc_contentHolder.infoAmount.txt_value, new l.CastleLocalizedNumberVO(this.unitVO.inventoryAmount, {
        compactThreshold: 10000,
        compactFractionalDigits: 0
      }));
      this.dismissButtonVisibility = false;
    } else {
      this.disp.visible = false;
    }
  };
  Object.defineProperty(AInventoryListItem.prototype, "dismissButtonVisibility", {
    set: function (e) {
      if (this.disp.btn_dismiss && this.unitVO) {
        this.disp.btn_dismiss.visible = this.unitVO.isDismissable && this.hasDismissButton && (e || o.currentBrowserInfo.isMobile);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AInventoryListItem, "textFieldManager", {
    get: function () {
      return n.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return AInventoryListItem;
}();
exports.AInventoryListItem = p;
var h = require("./63.js");
o.classImplementsInterfaces(p, "IInventoryListItem");