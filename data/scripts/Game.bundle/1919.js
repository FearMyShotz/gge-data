Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./69.js");
var s = require("./4.js");
var r = require("./4543.js");
var l = require("./8.js");
var c = require("./1045.js");
var u = function (e) {
  function CastleSpecialCurrencyMerchantDialogTypeHardMode(t) {
    return e.call(this, t) || this;
  }
  n.__extends(CastleSpecialCurrencyMerchantDialogTypeHardMode, e);
  CastleSpecialCurrencyMerchantDialogTypeHardMode.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.dialogDisp.mcSpecialCurrency.mc_coin.gotoAndStop(1);
    this.dialogDisp.mcSpecialCurrency2.mc_coin.gotoAndStop(2);
  };
  CastleSpecialCurrencyMerchantDialogTypeHardMode.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.dialogDisp.btn_travel.toolTipText = this.travelTooltipText;
    l.ButtonHelper.enableButton(this.dialogDisp.btn_travel, s.CastleModel.specialEventData.isSeasonEventActive);
  };
  Object.defineProperty(CastleSpecialCurrencyMerchantDialogTypeHardMode.prototype, "travelTooltipText", {
    get: function () {
      return "event_title_" + s.CastleModel.specialEventData.activeSeasonVO.eventId;
    },
    enumerable: true,
    configurable: true
  });
  CastleSpecialCurrencyMerchantDialogTypeHardMode.prototype.initBasicButtons = function (t) {
    t = t.concat([this.dialogDisp.btn_travel]);
    e.prototype.initBasicButtons.call(this, t);
  };
  Object.defineProperty(CastleSpecialCurrencyMerchantDialogTypeHardMode.prototype, "isEvent", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleSpecialCurrencyMerchantDialog.prototype, "isEvent").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleSpecialCurrencyMerchantDialogTypeHardMode.prototype.getItemListVOs = function () {
    var e = this.packageContainer.getVisiblePackages(s.CastleModel.userData.userLevel, s.CastleModel.userData.userLegendLevel, s.CastleModel.areaData.activeAreaInfo.areaType);
    var t = [];
    if (e != null) {
      for (var i = 0, n = e; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          if (o.sortOrder % 2 != (t.length + 1) % 2) {
            t.push(new r.EmptyScrollItemVO());
          }
          var a = this.createScrollItem(o);
          t.push(a);
        }
      }
    }
    return t;
  };
  Object.defineProperty(CastleSpecialCurrencyMerchantDialogTypeHardMode.prototype, "userSpecialCurrencies", {
    get: function () {
      var e = [];
      e.push(this.userCurrency1);
      e.push(this.userCurrency2);
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpecialCurrencyMerchantDialogTypeHardMode.prototype, "userCurrency1", {
    get: function () {
      throw new a.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpecialCurrencyMerchantDialogTypeHardMode.prototype, "userCurrency2", {
    get: function () {
      throw new a.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  CastleSpecialCurrencyMerchantDialogTypeHardMode.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (l.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_travel:
          this.hide();
          s.CastleModel.kingdomData.tempTargetSpaceID = s.CastleModel.specialEventData.activeSeasonVO.mapID;
          d.CastleDialogHandler.getInstance().registerDefaultDialogs(p.CastleHandleSeasonDialog, new h.CastleHandleSeasonDialogProperties(s.CastleModel.specialEventData.activeSeasonVO));
      }
    }
  };
  CastleSpecialCurrencyMerchantDialogTypeHardMode.NAME = "CastleThornkingEvent";
  return CastleSpecialCurrencyMerchantDialogTypeHardMode;
}(c.CastleSpecialCurrencyMerchantDialog);
exports.CastleSpecialCurrencyMerchantDialogTypeHardMode = u;
var d = require("./9.js");
var p = require("./1097.js");
var h = require("./1099.js");
o.classImplementsInterfaces(u, "ICollectableRendererList");