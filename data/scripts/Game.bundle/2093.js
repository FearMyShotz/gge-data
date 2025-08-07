Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./49.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./3.js");
var c = require("./23.js");
var u = require("./2094.js");
var d = require("./69.js");
var p = require("./21.js");
var h = require("./370.js");
var g = require("./4.js");
var C = require("./2095.js");
var _ = require("./167.js");
var m = require("./2096.js");
var f = require("./256.js");
var O = createjs.Container;
var E = function (e) {
  function CastleGenericBannerMerchantDialog(t) {
    var i = this;
    i.currentActiveBannerIndex = 0;
    i.lastUpdateInterval = 0;
    i.mouseOverPackageBanner = false;
    CONSTRUCTOR_HACK;
    return i = e.call(this, t) || this;
  }
  n.__extends(CastleGenericBannerMerchantDialog, e);
  CastleGenericBannerMerchantDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    this.controller.addEventListener(h.CastlePackageEvent.PACKAGEINFO_UPDATED, this.bindFunction(this.onPackageInfoArrived));
  };
  CastleGenericBannerMerchantDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    this.controller.removeEventListener(h.CastlePackageEvent.PACKAGEINFO_UPDATED, this.bindFunction(this.onPackageInfoArrived));
  };
  CastleGenericBannerMerchantDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this.mouseOverPackageBanner = false;
    this.resetBanner();
  };
  CastleGenericBannerMerchantDialog.prototype.destroy = function () {
    this.resetBanner();
    e.prototype.destroy.call(this);
  };
  Object.defineProperty(CastleGenericBannerMerchantDialog.prototype, "packageBannerClassName", {
    get: function () {
      throw new d.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericBannerMerchantDialog, "bannerButtonClassName", {
    get: function () {
      return "BannerButton";
    },
    enumerable: true,
    configurable: true
  });
  CastleGenericBannerMerchantDialog.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    if (r.getQualifiedClassName(t.target).indexOf(this.packageBannerClassName) >= 0) {
      this.mouseOverPackageBanner = true;
    }
  };
  CastleGenericBannerMerchantDialog.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    if (r.getQualifiedClassName(t.target).indexOf(this.packageBannerClassName) >= 0) {
      this.mouseOverPackageBanner = false;
    }
  };
  CastleGenericBannerMerchantDialog.prototype.onPackageInfoArrived = function (e) {
    this.fillBanner();
  };
  CastleGenericBannerMerchantDialog.prototype.resetBanner = function () {
    var e = 0;
    if (this.bannerLayer && this.bannerLayer.parent) {
      this.dialogDisp.bannerButtonContainer.removeChild(this.bannerLayer);
    }
    if (this.packageBanners) {
      for (e = 0; e < this.packageBanners.length; e++) {
        c.TweenMax.killTweensOf(this.packageBanners[e].packageBannerVE);
        this.dialogDisp.bannerContainer.removeChild(this.packageBanners[e].packageBannerVE);
        this.packageBanners[e].bannerButton.removeMouseEventListener();
        this.packageBanners[e].packageBannerVE.clipLoaded.remove(this.bindFunction(this.onPackageBannerObjectLoaded));
        if (this.packageBanners[e].bannerText) {
          this.textFieldManager.unregisterTextFieldByReference(this.packageBanners[e].bannerText);
        }
      }
      this.packageBanners = null;
    }
    this.dialogDisp.bannerBorder.visible = false;
    this.dialogDisp.bannerShadow.visible = false;
    this.lastUpdateInterval = 0;
    this.currentActiveBannerIndex = -1;
    g.CastleModel.timerData.removeEventListener(p.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onIntervalSecond));
  };
  CastleGenericBannerMerchantDialog.prototype.fillBanner = function () {
    this.resetBanner();
    this.packageBanners = [];
    this.bannerLayer = new O();
    this.dialogDisp.bannerButtonContainer.addChild(this.bannerLayer);
    var e = this.packageContainer.getVisiblePackages(g.CastleModel.userData.userLevel, g.CastleModel.userData.userLegendLevel, g.CastleModel.areaData.activeAreaInfo.areaType);
    this.sortPackagesByHighlightOrder(e);
    if (e != null) {
      for (var t = 0, i = e; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.isAvailable() && n.isBannerPackage) {
          var s = new m.PackageBannerObject();
          s.packageBannerVE = C.EventPackageAssetHelper.getBanner(n.packageID);
          s.packageBannerVO = n;
          var r = a.MovieClipHelper.getMovieClipByClassName(CastleGenericBannerMerchantDialog.bannerButtonClassName);
          s.bannerButton = new o.TwoStateButton(r);
          s.bannerButton.deselected();
          r.actLikeButton = true;
          r.index = this.packageBanners.length;
          this.bannerLayer.addChild(r);
          r.x = r.width / 2 + u.ClientConstMerchantEvent.BANNER_BUTTON_SPACING * r.index + r.width * r.index;
          this.dialogDisp.bannerContainer.addChild(s.packageBannerVE);
          this.packageBanners.push(s);
          if (s.packageBannerVE.isLoaded) {
            this.onPackageBannerObjectLoaded(s.packageBannerVE);
            s.packageBannerVE.currentshownDisplayObject.mouseChildren = false;
            s.packageBannerVE.currentshownDisplayObject.actLikeButton = true;
          } else {
            s.packageBannerVE.clipLoaded.add(this.bindFunction(this.onPackageBannerObjectLoaded));
          }
          this.dialogDisp.bannerBorder.visible = true;
          this.dialogDisp.bannerShadow.visible = true;
        }
      }
    }
    this.bannerLayer.x = -this.bannerLayer.width / 2;
    if (this.packageBanners.length > 0) {
      this.setActiveBanner(0, true);
      if (this.packageBanners.length > 1) {
        g.CastleModel.timerData.addEventListener(p.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onIntervalSecond));
      }
    }
  };
  CastleGenericBannerMerchantDialog.prototype.onPackageBannerObjectLoaded = function (e) {
    var t = e.currentshownDisplayObject.tfBanner;
    if (t) {
      var i = this.getPackageBannerByVE(e);
      i.bannerText = this.textFieldManager.registerTextField(t, new l.LocalizedTextVO(i.packageBannerVO.nameTextID, i.packageBannerVO.nameParams));
      i.bannerText.autoFitToBounds = true;
    }
    e.currentshownDisplayObject.mouseChildren = false;
    e.currentshownDisplayObject.actLikeButton = true;
  };
  CastleGenericBannerMerchantDialog.prototype.setActiveBanner = function (e, t = false) {
    if (e == this.packageBanners.length) {
      e = 0;
    }
    this.lastUpdateInterval = 0;
    if (this.currentActiveBannerIndex >= 0) {
      this.packageBanners[this.currentActiveBannerIndex].bannerButton.deselected();
    }
    this.packageBanners[e].bannerButton.selected();
    var i = this.packageBanners[e].packageBannerVE;
    this.dialogDisp.bannerContainer.addChild(i);
    if (t) {
      i.alpha = 1;
    } else {
      i.alpha = 0;
      c.TweenMax.to(i, u.ClientConstMerchantEvent.BANNER_FADING_TIME, {
        alpha: 1
      });
    }
    this.currentActiveBannerIndex = e;
  };
  CastleGenericBannerMerchantDialog.prototype.getPackageBannerByVE = function (e) {
    for (var t = 0; t < this.packageBanners.length; t++) {
      var i = this.packageBanners[t];
      if (i.packageBannerVE == e || i.packageBannerVE.currentshownDisplayObject == e) {
        return i;
      }
    }
    return null;
  };
  CastleGenericBannerMerchantDialog.prototype.onIntervalSecond = function (e) {
    this.lastUpdateInterval++;
    if (this.lastUpdateInterval % u.ClientConstMerchantEvent.BANNER_SWITCH_INTERVAL == 0 && !this.mouseOverPackageBanner) {
      this.setActiveBanner(this.currentActiveBannerIndex + 1);
    }
  };
  CastleGenericBannerMerchantDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    var i = r.getQualifiedClassName(t.target);
    if (i.indexOf(CastleGenericBannerMerchantDialog.bannerButtonClassName) >= 0) {
      if (this.packageBanners != null) {
        for (var n = 0, o = this.packageBanners; n < o.length; n++) {
          var a = o[n];
          if (a !== undefined && t.target == a.bannerButton.disp) {
            if (!a.bannerButton.isSelected) {
              this.setActiveBanner(this.packageBanners.indexOf(a));
            }
          }
        }
      }
    } else if (i.indexOf(this.packageBannerClassName) >= 0) {
      var s = this.getPackageBannerByVE(t.target).packageBannerVO;
      var l = false;
      for (var c = 0, u = y.ClientConstCollectable.GROUP_LIST_RESOURCES; c < u.length; c++) {
        var d = u[c];
        if (d !== undefined && s.getAmount(d) > 0 && !g.CastleModel.areaData.getActiveStorageItem(d).isFull) {
          l = true;
          break;
        }
      }
      if (s.isAvailable() && (s.fillAllStorages || l)) {
        this.openPackageBuyDialog(s);
      } else {
        this.handleUnbuyableAmount();
      }
    }
  };
  CastleGenericBannerMerchantDialog.prototype.handleUnbuyableAmount = function () {
    throw new d.AbstractMethodError();
  };
  CastleGenericBannerMerchantDialog.prototype.openPackageBuyDialog = function (e) {
    var t = this.createScrollItem(e);
    var i = new _.CastleGenericBuyDialogProperties();
    i.parseDataFromScrollItem(t);
    b.CastleDialogHandler.getInstance().registerDefaultDialogs(D.CastleResourceMerchantEventBuyDialog, i);
  };
  return CastleGenericBannerMerchantDialog;
}(f.CastleGenericMerchantDialog);
exports.CastleGenericBannerMerchantDialog = E;
var y = require("./86.js");
var b = require("./9.js");
var D = require("./879.js");
s.classImplementsInterfaces(E, "ICollectableRendererList");