Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./26.js");
var u = require("./12.js");
var d = require("./74.js");
var p = require("./13.js");
var h = require("./4.js");
var g = require("./52.js");
var C = require("./20.js");
var _ = require("./8.js");
var m = require("./11.js");
var f = require("./3796.js");
var O = require("./3797.js");
var E = function (e) {
  function ApprenticeSmithEventDialog() {
    return e.call(this, ApprenticeSmithEventDialog.NAME) || this;
  }
  n.__extends(ApprenticeSmithEventDialog, e);
  ApprenticeSmithEventDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    _.ButtonHelper.initButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close], C.ClickFeedbackButtonHover);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.TextVO(p.TextHelper.toUpperCaseLocaSafeTextId("eventBuilding_apprenticeSmith"))).autoFitToBounds = true;
  };
  ApprenticeSmithEventDialog.prototype.showLoaded = function (t) {
    var i;
    if (t === undefined) {
      t = null;
    }
    e.prototype.showLoaded.call(this, t);
    h.CastleModel.specialEventData.addEventListener(c.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    this.initTabsByPackages(O.ApprenticeSmithEventDialogShop, this.bindFunction(this.sortTabs));
    if (this.dialogProperties.highlightPackageId > 0) {
      i = h.CastleModel.eventPackageData.getEventPackageByID(this.dialogProperties.highlightPackageId);
    }
    var n = Math.max(this._currencies.findIndex(function (e) {
      if (i) {
        return e.hasType(i.getCostList().getItemByIndex(0));
      } else {
        return e.isSameAs(new d.CollectableTypeVO(u.CollectableEnum.GENERIC_CURRENCY, g.ClientConstCurrency.ID_SCEAT_TOKEN));
      }
    }), 0).toString();
    this.changeCategory(n);
    if (i) {
      this._currentSublayer.setStarterPackage(i);
    }
  };
  ApprenticeSmithEventDialog.prototype.hide = function () {
    h.CastleModel.specialEventData.removeEventListener(c.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    e.prototype.hide.call(this);
  };
  ApprenticeSmithEventDialog.prototype.sortTabs = function (e, t) {
    var i = new d.CollectableTypeVO().initByCollectable(e);
    var n = new d.CollectableTypeVO().initByCollectable(t);
    var o = [g.ClientConstCurrency.ID_SILVER_TOKEN, g.ClientConstCurrency.ID_GOLD_TOKEN, g.ClientConstCurrency.ID_SCEAT_TOKEN];
    return o.indexOf(n.id) - o.indexOf(i.id);
  };
  ApprenticeSmithEventDialog.prototype.onClick = function (t) {
    if (_.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          var i = this._subLayer.get(this._currentCategory).currencyType.id;
          var n = h.CastleModel.currencyData.getXmlCurrencyById(i);
          if (n) {
            m.CastleExternalDialog.dialogHandler.showHelper("", l.Localize.text("dialog_apprenticeSmith_" + n.name + "_desc"));
          }
      }
    }
  };
  ApprenticeSmithEventDialog.prototype.onRemoveEvent = function (e) {
    if (e.specialEventVO.eventId == s.EventConst.EVENTTYPE_APPRENTICE_TOKEN_VENDOR) {
      this.hide();
    }
  };
  ApprenticeSmithEventDialog.prototype.getEventPackages = function () {
    var e = this.getEventVO();
    if (e) {
      return e.getVisiblePackages(h.CastleModel.userData.userLevel, h.CastleModel.userData.userLegendLevel, a.WorldConst.AREA_TYPE_CASTLE);
    } else {
      return [];
    }
  };
  ApprenticeSmithEventDialog.prototype.getEventVO = function () {
    return h.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_APPRENTICE_TOKEN_VENDOR);
  };
  Object.defineProperty(ApprenticeSmithEventDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  ApprenticeSmithEventDialog.NAME = "ModernFilterableShopExt_SEP23";
  return ApprenticeSmithEventDialog;
}(f.ADynamicTabPackageShopDialog);
exports.ApprenticeSmithEventDialog = E;
o.classImplementsInterfaces(E, "ICollectableRendererList");