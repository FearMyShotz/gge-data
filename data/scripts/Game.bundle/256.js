Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./60.js");
var r = require("./69.js");
var l = require("./26.js");
var c = require("./4.js");
var u = require("./130.js");
var d = require("./11.js");
var p = require("./244.js");
var h = function (e) {
  function CastleGenericMerchantDialog(t) {
    return e.call(this, t) || this;
  }
  n.__extends(CastleGenericMerchantDialog, e);
  CastleGenericMerchantDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.buyPackagesComponent = new C.BuyEventPackagesComponent();
    this.buyPackagesComponent.init(this.merchantScrollItem, this.dialogDisp.itemList, this.dialogDisp);
  };
  CastleGenericMerchantDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.buyPackagesComponent.show(this.bindFunction(this.getItemListVOs), this.highlightPackageId);
    this.initBasicButtons([]);
  };
  CastleGenericMerchantDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    c.CastleModel.specialEventData.addEventListener(l.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventRemoved));
    c.CastleModel.privateOfferData.addEventListener(u.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
  };
  CastleGenericMerchantDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    c.CastleModel.specialEventData.removeEventListener(l.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventRemoved));
    c.CastleModel.privateOfferData.removeEventListener(u.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
  };
  CastleGenericMerchantDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this.buyPackagesComponent.hide();
  };
  CastleGenericMerchantDialog.prototype.onSpecialEventRemoved = function (e) {
    if (this.dialogProperties && this.dialogProperties.buyPackageEventVO && e.specialEventVO.eventId == this.dialogProperties.buyPackageEventVO.eventId) {
      this.hide();
    }
  };
  CastleGenericMerchantDialog.prototype.onOfferRemoved = function (e) {
    if (this.isPrivateOffer && e.offerVO == this.dialogPropertiesPrivateOffer.offerVO) {
      this.hide();
    }
  };
  CastleGenericMerchantDialog.prototype.getItemListVOs = function () {
    var e = this.packageContainer.getVisiblePackages(c.CastleModel.userData.userLevel, c.CastleModel.userData.userLegendLevel, c.CastleModel.areaData.activeAreaInfo.areaType);
    this.sortPackagesByHighlightOrder(e);
    var t = [];
    if (e != null) {
      for (var i = 0, n = e; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o && !o.isBannerPackage) {
          var a = this.createScrollItem(o);
          if (a) {
            t.push(a);
          }
        }
      }
    }
    return t;
  };
  CastleGenericMerchantDialog.prototype.createScrollItem = function (e) {
    var t = new p.MerchantScrollItemVO();
    t.specialEventVO = this.dialogProperties ? this.dialogProperties.buyPackageEventVO : null;
    t.eventPackageVO = e;
    t.offerVO = this.dialogPropertiesPrivateOffer ? this.dialogPropertiesPrivateOffer.offerVO : null;
    return t;
  };
  Object.defineProperty(CastleGenericMerchantDialog.prototype, "packageContainer", {
    get: function () {
      if (a.instanceOfClass(this.dialogPropertiesPrivateOffer, "CastlePrivateOfferDialogProperties")) {
        return this.dialogPropertiesPrivateOffer.offerVO.getAdditionalComponentByName(s.ClientConstOffer.OFFER_ADDITIONAL_PACKAGE_IDS);
      } else if (this.dialogProperties) {
        return this.dialogProperties.buyPackageEventVO;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericMerchantDialog.prototype, "highlightPackageId", {
    get: function () {
      if (this.dialogProperties) {
        return this.dialogProperties.highlightPackageId;
      } else {
        return -1;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericMerchantDialog.prototype, "merchantScrollItem", {
    get: function () {
      throw new r.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  CastleGenericMerchantDialog.prototype.initBasicButtons = function (t) {
    t = t.concat([this.dialogDisp.btn_close]);
    e.prototype.initBasicButtons.call(this, t);
  };
  CastleGenericMerchantDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  Object.defineProperty(CastleGenericMerchantDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericMerchantDialog.prototype, "isPrivateOffer", {
    get: function () {
      return a.instanceOfClass(this.properties, "CastlePrivateOfferDialogProperties");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericMerchantDialog.prototype, "dialogPropertiesPrivateOffer", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleGenericMerchantDialog.prototype.sortPackagesByHighlightOrder = function (e) {
    g.ClientConstSort.sortPackageListByHighlightOrder(e);
  };
  return CastleGenericMerchantDialog;
}(d.CastleExternalDialog);
exports.CastleGenericMerchantDialog = h;
var g = require("./75.js");
var C = require("./1205.js");
o.classImplementsInterfaces(h, "ICollectableRendererList");