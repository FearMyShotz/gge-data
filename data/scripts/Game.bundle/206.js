Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./123.js");
var c = require("./26.js");
var u = require("./13.js");
var d = require("./4.js");
var p = require("./8.js");
var h = function (e) {
  function ModernPackageShopBuyDialog() {
    var t = this;
    t._elements = [];
    CONSTRUCTOR_HACK;
    return t = e.call(this, ModernPackageShopBuyDialog.NAME) || this;
  }
  n.__extends(ModernPackageShopBuyDialog, e);
  ModernPackageShopBuyDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    p.ButtonHelper.initButtons([this.dialogDisp.btn_close], m.ClickFeedbackButtonHover, 1);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.TextVO(u.TextHelper.toUpperCaseLocaSafeTextId("buy"))).autoFitToBounds = true;
  };
  ModernPackageShopBuyDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    d.CastleModel.specialEventData.addEventListener(c.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventChanged));
    d.CastleModel.specialEventData.addEventListener(c.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onEventChanged));
    this.buildElements();
    this.updateContent();
  };
  ModernPackageShopBuyDialog.prototype.hideLoaded = function (t = null) {
    d.CastleModel.specialEventData.removeEventListener(c.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventChanged));
    d.CastleModel.specialEventData.removeEventListener(c.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onEventChanged));
    if (this._elements != null) {
      for (var i = 0, n = this._elements; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          o.destroy();
        }
      }
    }
    e.prototype.hideLoaded.call(this, t);
  };
  ModernPackageShopBuyDialog.prototype.buildElements = function () {
    if (this._elements != null) {
      for (var e = 0, t = this._elements; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.destroy();
        }
      }
    }
    this._elements = [];
    a.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_elements);
    var n = this.dialogProperties.eventPackageVO.reward;
    var o = this.dialogProperties.eventPackageVO.packageType == l.ClientConstPackages.PACKAGE_TYPE_BUNDLE;
    var s = n.itemType == g.CollectableEnum.RELIC_EQUIPMENT;
    if (o) {
      this.addElement(C.ModernPackageShopBuyElementEnum.COMMON_INFO_BUNDLE);
    } else if (s) {
      this.addElement(C.ModernPackageShopBuyElementEnum.COMMON_INFO_RELIC);
    } else {
      this.addElement(C.ModernPackageShopBuyElementEnum.COMMON_INFO);
    }
    this.addElement(C.ModernPackageShopBuyElementEnum.INFO).setVisibility(false);
    if (o) {
      this.addElement(C.ModernPackageShopBuyElementEnum.BUNDLE_REWARDS);
    } else if (s) {
      this.addElement(C.ModernPackageShopBuyElementEnum.RELIC_INFO);
    }
    if (!o) {
      this.addElement(C.ModernPackageShopBuyElementEnum.AMOUNT);
    }
    this.addElement(C.ModernPackageShopBuyElementEnum.COSTS);
    this.addElement(C.ModernPackageShopBuyElementEnum.BOTTOM_MENU);
    this.alignDialog();
  };
  ModernPackageShopBuyDialog.prototype.addElement = function (e) {
    var t = new e.clazz();
    this.dialogDisp.mc_elements.addChild(t.disp);
    this._elements.push(t);
    t.init(this);
    t.onShow();
    return t;
  };
  ModernPackageShopBuyDialog.prototype.alignDialog = function () {
    var e = 0;
    if (this._elements != null) {
      for (var t = 0, i = this._elements; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          if (n.isVisible) {
            n.disp.x = 0;
            n.disp.y = e;
            var o = n.disp.getBounds(null);
            e += n.getDispHeight() + o.y;
          } else {
            n.disp.x = 0;
            n.disp.y = 0;
          }
        }
      }
    }
    this.dialogDisp.mc_background.height = ModernPackageShopBuyDialog.INITIAL_BACKGROUND_HEIGHT + e;
    this.updatePosition();
  };
  ModernPackageShopBuyDialog.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      var e = this.dispBounds.clone();
      e.height = this.dialogDisp.mc_background.height;
      var t = 1;
      if (this.disp.stage.stageWidth < e.width) {
        t = this.disp.stage.stageWidth / e.width;
      }
      if (this.disp.stage.stageHeight < e.height * t) {
        t = this.disp.stage.stageHeight / e.height;
      }
      this.disp.x = -e.left * t - e.width * t * 0.5 + this.disp.stage.stageWidth * 0.5;
      this.disp.y = -e.top * t - e.height * t * 0.5 + this.disp.stage.stageHeight * 0.5;
      this.disp.scaleX = this.disp.scaleY = t;
      this.disp.x = r.int(this.disp.x);
      this.disp.y = r.int(this.disp.y);
    }
  };
  ModernPackageShopBuyDialog.prototype.updateContent = function () {
    if (this._elements != null) {
      for (var e = 0, t = this._elements; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.update();
        }
      }
    }
    this.alignDialog();
  };
  ModernPackageShopBuyDialog.prototype.getElement = function (e) {
    if (this._elements != null) {
      for (var t = 0, i = this._elements; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.elementType == e) {
          return n;
        }
      }
    }
    return null;
  };
  ModernPackageShopBuyDialog.prototype.onClick = function (t) {
    if (p.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
      }
    }
  };
  ModernPackageShopBuyDialog.prototype.onSelectedAmountChanged = function () {
    var e = this.getElement(C.ModernPackageShopBuyElementEnum.COSTS);
    if (e) {
      e.update();
    }
  };
  ModernPackageShopBuyDialog.prototype.onEventChanged = function (e) {
    if (_.instanceOfClass(e.specialEventVO, "EventPackagePrimeSaleEventVO") && e.specialEventVO.packageIDs.indexOf(this.dialogProperties.eventPackageVO.packageID) > -1) {
      this.hide();
    }
    if (this.dialogProperties.specialEventVO && e.specialEventVO.eventId == this.dialogProperties.specialEventVO.eventId) {
      this.hide();
    }
  };
  Object.defineProperty(ModernPackageShopBuyDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  ModernPackageShopBuyDialog.NAME = "ModernPackageShopBuy_V";
  ModernPackageShopBuyDialog.INITIAL_BACKGROUND_HEIGHT = 63;
  return ModernPackageShopBuyDialog;
}(require("./11.js").CastleExternalDialog);
exports.ModernPackageShopBuyDialog = h;
o.classImplementsInterfaces(h, "ICollectableRendererList");
var g = require("./12.js");
var C = require("./591.js");
var _ = require("./1.js");
var m = require("./20.js");