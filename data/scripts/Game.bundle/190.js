Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./6.js");
var r = require("./123.js");
var l = require("./43.js");
var c = require("./2099.js");
var u = require("./4.js");
var d = require("./295.js");
var p = function (e) {
  function EventPackagePrimeSaleEventVO() {
    var t = this;
    t._discount = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(EventPackagePrimeSaleEventVO, e);
  EventPackagePrimeSaleEventVO.prototype.parseParamObject = function (e) {
    this._packageIDs = e.PID;
    this._discount = s.int(e.DIS);
  };
  EventPackagePrimeSaleEventVO.prototype.openDialog = function (e = true) {
    if (this.canShowDialog) {
      var t = new d.PaymentPopupDialogInfoVO(g.CastleEventPackagePrimeSaleDialog, new c.CastleEventPackagePrimeSaleDialogProperties(this), l.CastleDialogConsts.DIALOG_TYPE_PAYMENT_PRIME_SALE);
      h.CastleDialogHandler.getInstance().registerDialogsWithType(t.dialogClass, t.properties, t.blockDialogs, t.priority, 0, t.type);
    }
  };
  EventPackagePrimeSaleEventVO.prototype.canShowDialog = function () {
    if (u.CastleModel.privateOfferData.isHiddenEvent(this._eventId)) {
      return false;
    }
    var e = false;
    if (this._packageIDs != null) {
      for (var t = 0, i = this._packageIDs; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          if (u.CastleModel.eventPackageData.getEventPackageByID(n).isVisible(u.CastleModel.userData.userLevel, u.CastleModel.userData.userLegendLevel)) {
            e = true;
            break;
          }
        }
      }
    }
    return e && (this.canFindMerchant() || this.hasVIPPackageVOs());
  };
  Object.defineProperty(EventPackagePrimeSaleEventVO.prototype, "showAblePackageIDs", {
    get: function () {
      var e = [];
      for (var t = 0; t < this._packageIDs.length; t++) {
        if (u.CastleModel.eventPackageData.getEventPackageByID(this._packageIDs[t]).isVisible(u.CastleModel.userData.userLevel, u.CastleModel.userData.userLegendLevel)) {
          e.push(this._packageIDs[t]);
        }
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  EventPackagePrimeSaleEventVO.prototype.canFindMerchant = function () {
    var e = u.CastleModel.specialEventData.getActiveEventBySoldPackage(this.packageIDs[0]);
    return !!e && !u.CastleModel.privateOfferData.isHiddenEvent(e.eventId) && !(u.CastleModel.userData.userLevel < e.minLevel);
  };
  EventPackagePrimeSaleEventVO.prototype.hasVIPPackageVOs = function () {
    if (this.packageIDs != null) {
      for (var e = 0, t = this.packageIDs; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          var n = u.CastleModel.eventPackageData.getEventPackageByID(i);
          if (n && n.packageType == r.ClientConstPackages.PACKAGE_TYPE_VIP) {
            return true;
          }
        }
      }
    }
    return false;
  };
  Object.defineProperty(EventPackagePrimeSaleEventVO.prototype, "packageIDs", {
    get: function () {
      return this._packageIDs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackagePrimeSaleEventVO.prototype, "discount", {
    get: function () {
      return this._discount;
    },
    enumerable: true,
    configurable: true
  });
  EventPackagePrimeSaleEventVO.getPackageDiscountC2 = function (e) {
    var t;
    if (s.int(u.CastleModel.eventPackageData.getEventPackageByID(e).basicPriceC2) == 0) {
      return 0;
    } else if ((t = u.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_EVENT_PACKAGE_PRIME_SALES)) && t.packageIDs.indexOf(e) > -1) {
      return t.discount;
    } else {
      return 0;
    }
  };
  EventPackagePrimeSaleEventVO.hasDiscountedPackages = function (e) {
    var t = u.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_EVENT_PACKAGE_PRIME_SALES);
    var i = false;
    if (t) {
      for (var n = 0, o = t.packageIDs; n < o.length; n++) {
        var s = o[n];
        if (s !== undefined) {
          if (u.CastleModel.eventPackageData.getEventPackageByID(s).isVisible(u.CastleModel.userData.userLevel, u.CastleModel.userData.userLegendLevel, u.CastleModel.areaData.activeAreaInfo ? u.CastleModel.areaData.activeAreaInfo.areaType : 0) && e.containsEventPackage(s)) {
            i = true;
          }
        }
      }
    }
    return i;
  };
  return EventPackagePrimeSaleEventVO;
}(require("./79.js").ASpecialEventVO);
exports.EventPackagePrimeSaleEventVO = p;
var h = require("./9.js");
var g = require("./2107.js");
o.classImplementsInterfaces(p, "IEventOverviewable");