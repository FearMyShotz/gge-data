Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./6.js");
var l = require("./123.js");
var c = require("./1206.js");
var u = require("./370.js");
var d = require("./26.js");
var p = require("./32.js");
var h = require("./71.js");
var g = require("./15.js");
var C = require("./72.js");
var _ = require("./4.js");
var m = require("./213.js");
var f = require("./8.js");
var O = function (e) {
  function BuyEventPackagesComponent() {
    var t = e !== null && e.apply(this, arguments) || this;
    t.startIndex = 0;
    return t;
  }
  n.__extends(BuyEventPackagesComponent, e);
  BuyEventPackagesComponent.prototype.init = function (e, t, i = null) {
    this.scrollItemClass = e;
    this.itemList = t;
    this.dialogDisp = i;
    f.ButtonHelper.initBasicButtons([t.btn_up, t.btn_down]);
  };
  BuyEventPackagesComponent.prototype.show = function (e, t = -1) {
    this.itemListVOsFunction = e;
    this.startIndex = this.getIndexOfPackage(t);
    this.itemList.visible = false;
    this.removePackageScrollList();
    this.createPackageScrollList();
    _.CastleModel.specialEventData.addEventListener(d.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventRemoved));
    _.CastleModel.specialEventData.addEventListener(d.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onSpecialEventUpdated));
    _.CastleModel.specialEventData.addEventListener(p.CastleUserDataEvent.CHANGE_USER_LIFETIME_SPENT, this.bindFunction(this.onUserLifetimeSpentChanged));
    g.CastleBasicController.getInstance().addEventListener(u.CastlePackageEvent.PACKAGEINFO_UPDATED, this.bindFunction(this.onPackageInfoArrived));
    g.CastleBasicController.getInstance().addEventListener(p.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
    g.CastleBasicController.getInstance().addEventListener(h.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onUserResourcesChange));
    g.CastleBasicController.getInstance().addEventListener(p.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onUserCurrencyChange));
    g.CastleBasicController.getInstance().addEventListener(p.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onSpecialUserCurrencyUpdate));
    BuyEventPackagesComponent.requestPackageBuyCountUpdate();
  };
  BuyEventPackagesComponent.prototype.createPackageScrollList = function () {
    this.packageScrollList = new E.SliderItemScrollList(this.itemList, this.dialogDisp);
    this.packageScrollList.scrollItemClass = this.scrollItemClass;
    this.packageScrollList.scrollStep = l.ClientConstPackages.SCROLL_STEP;
    this.packageScrollList.addEventListener(o.ScrollItemEvent.ON_SCROLL, this.bindFunction(this.onScroll));
  };
  BuyEventPackagesComponent.prototype.removePackageScrollList = function () {
    if (this.packageScrollList) {
      this.packageScrollList.remove();
      this.packageScrollList.clear();
      this.packageScrollList.removeEventListener(o.ScrollItemEvent.ON_SCROLL, this.bindFunction(this.onScroll));
      this.packageScrollList = null;
    }
  };
  BuyEventPackagesComponent.prototype.hide = function () {
    this.removePackageScrollList();
    _.CastleModel.specialEventData.removeEventListener(d.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventRemoved));
    _.CastleModel.specialEventData.removeEventListener(d.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onSpecialEventUpdated));
    _.CastleModel.specialEventData.removeEventListener(p.CastleUserDataEvent.CHANGE_USER_LIFETIME_SPENT, this.bindFunction(this.onUserLifetimeSpentChanged));
    g.CastleBasicController.getInstance().removeEventListener(u.CastlePackageEvent.PACKAGEINFO_UPDATED, this.bindFunction(this.onPackageInfoArrived));
    g.CastleBasicController.getInstance().removeEventListener(p.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
    g.CastleBasicController.getInstance().removeEventListener(h.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onUserResourcesChange));
    g.CastleBasicController.getInstance().removeEventListener(p.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onUserCurrencyChange));
    g.CastleBasicController.getInstance().removeEventListener(p.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onSpecialUserCurrencyUpdate));
  };
  BuyEventPackagesComponent.prototype.update = function (e = -1) {
    if (this.packageScrollList) {
      if (e < 0) {
        e = r.int(this.packageScrollList.currentStartIndex);
      }
      this.packageScrollList.clear();
      this.fillScrollList(this.itemListVOsFunction());
      this.packageScrollList.hideButtons = true;
      this.packageScrollList.initList(e, true);
      y.CastleMovieClipHelper.updateParentCache(this.dialogDisp);
    }
  };
  BuyEventPackagesComponent.prototype.fillScrollList = function (e) {
    if (e != null) {
      for (var t = 0, i = e; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          this.packageScrollList.pushContent(n);
        }
      }
    }
  };
  BuyEventPackagesComponent.requestPackageBuyCountUpdate = function () {
    _.CastleModel.smartfoxClient.sendCommandVO(new c.C2SGetPackageBuyCountVO(_.CastleModel.areaData.activeArea.areaId, _.CastleModel.areaData.activeAreaInfo.kingdomID));
  };
  BuyEventPackagesComponent.prototype.onPackageInfoArrived = function (e) {
    this.itemList.visible = true;
    if (this.startIndex > -1) {
      var t = this.itemListVOsFunction();
      this.startIndex = r.int(m.CastleMathHelper.clamp(this.startIndex, 0, t.length - this.packageScrollList.itemsVisibleAtOnce));
      this.startIndex = this.startIndex % 2 ? this.startIndex - 1 : this.startIndex;
    }
    this.update(this.startIndex);
    this.startIndex = -1;
  };
  BuyEventPackagesComponent.prototype.onLevelUp = function (e) {
    this.update();
  };
  BuyEventPackagesComponent.prototype.onUserResourcesChange = function (e) {
    this.update();
  };
  BuyEventPackagesComponent.prototype.onUserCurrencyChange = function (e) {
    this.update();
  };
  BuyEventPackagesComponent.prototype.onSpecialUserCurrencyUpdate = function (e) {
    this.update();
  };
  BuyEventPackagesComponent.prototype.onUserLifetimeSpentChanged = function (e) {
    this.update();
  };
  BuyEventPackagesComponent.prototype.onSpecialEventRemoved = function (e) {
    if (e.specialEventVO.eventId == s.EventConst.EVENTTYPE_EVENT_PACKAGE_PRIME_SALES) {
      this.update();
    }
  };
  BuyEventPackagesComponent.prototype.onSpecialEventUpdated = function (e) {
    if (e.specialEventVO.eventId == s.EventConst.EVENTTYPE_EVENT_PACKAGE_PRIME_SALES) {
      this.update();
    }
  };
  BuyEventPackagesComponent.prototype.onScroll = function (e) {
    this.dispatchEvent(e.clone());
  };
  Object.defineProperty(BuyEventPackagesComponent.prototype, "currentStartIndex", {
    get: function () {
      if (this.packageScrollList) {
        return this.packageScrollList.currentStartIndex;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  BuyEventPackagesComponent.prototype.getIndexOfPackage = function (e) {
    if (e >= 0) {
      for (var t = this.itemListVOsFunction(), i = 0; i < t.length; ++i) {
        var n = a.castAs(t[i], "MerchantScrollItemVO");
        if (n && n.eventPackageVO.packageID == e) {
          return i;
        }
      }
    }
    return 0;
  };
  return BuyEventPackagesComponent;
}(C.CastleEventDispatcher);
exports.BuyEventPackagesComponent = O;
var E = require("./314.js");
var y = require("./41.js");