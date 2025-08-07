Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./4.js");
var r = require("./79.js");
var l = function (e) {
  function BuyPackagesEventVO() {
    var t = e.call(this) || this;
    t.eventOverviewConfig.showRemainingEventDuration = false;
    return t;
  }
  n.__extends(BuyPackagesEventVO, e);
  BuyPackagesEventVO.prototype.parseEventXmlNode = function (e) {
    this._xmlPackages = [];
    this.addEventPackages(String(e.packageIDs || "").split("+"), this._xmlPackages);
    this.mergeNewEventPackages();
    this.sortEventPackages();
  };
  BuyPackagesEventVO.prototype.parseParamObject = function (e) {
    if (e.PIDS) {
      this._additionalPackages = [];
      this.addEventPackages(String(e.PIDS).split(","), this._additionalPackages);
      this.mergeNewEventPackages();
      this.sortEventPackages();
    }
  };
  BuyPackagesEventVO.prototype.mergeNewEventPackages = function () {
    if (this._additionalPackages) {
      this._eventPackages = this._xmlPackages.concat(this._additionalPackages);
    } else {
      this._eventPackages = this._xmlPackages;
    }
  };
  BuyPackagesEventVO.prototype.addEventPackages = function (e, t) {
    for (var i = 0; i < e.length; i++) {
      var n = s.CastleModel.eventPackageData.getEventPackageByID(parseInt(e[i]));
      if (n) {
        t.push(n);
      }
    }
  };
  BuyPackagesEventVO.prototype.openDialog = function (e = true) {
    this.openMerchantDialog(e, -1);
  };
  BuyPackagesEventVO.prototype.openMerchantDialog = function (e, t) {};
  BuyPackagesEventVO.prototype.sortEventPackages = function () {
    this.eventPackages.sort(this.bindFunction(this.sortOrder));
  };
  BuyPackagesEventVO.prototype.containsEventPackage = function (e) {
    for (var t = 0; t < this.eventPackages.length; ++t) {
      if (this.eventPackages[t].packageID == e) {
        return true;
      }
    }
    return false;
  };
  Object.defineProperty(BuyPackagesEventVO.prototype, "eventPackages", {
    get: function () {
      return this._eventPackages;
    },
    enumerable: true,
    configurable: true
  });
  BuyPackagesEventVO.prototype.getVisiblePackages = function (e, t, i) {
    var n = [];
    if (this.eventPackages != null) {
      for (var o = 0, a = this.eventPackages; o < a.length; o++) {
        var s = a[o];
        if (s !== undefined) {
          s.topPackage = false;
          if (s.isVisible(e, t, i)) {
            n.push(s);
          }
        }
      }
    }
    n.sort(this.bindFunction(this.sortOrder));
    return n;
  };
  BuyPackagesEventVO.prototype.sortOrder = function (e, t) {
    return e.sortOrder - t.sortOrder;
  };
  Object.defineProperty(BuyPackagesEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return -1;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.ASpecialEventVO.prototype, "eventBuildingWOD").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BuyPackagesEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.ASpecialEventVO.prototype, "eventBuildingNameId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BuyPackagesEventVO.prototype, "eventPackagesVO", {
    get: function () {
      return this;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.ASpecialEventVO.prototype, "eventPackagesVO").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BuyPackagesEventVO.prototype, "primesaleDescriptionTextID", {
    get: function () {
      return "limitedOffer";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BuyPackagesEventVO.prototype, "primesaleSaveRubiesTextID", {
    get: function () {
      return "dialog_privateOffer_whaleChest_rubySave";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BuyPackagesEventVO.prototype, "buyType", {
    get: function () {
      return a.PackageConst.BUY_TYPE_EVENT;
    },
    enumerable: true,
    configurable: true
  });
  return BuyPackagesEventVO;
}(r.ASpecialEventVO);
exports.BuyPackagesEventVO = l;
o.classImplementsInterfaces(l, "IEventOverviewable", "IDiscountableEventPackagesVO", "IEventPackagesVO");