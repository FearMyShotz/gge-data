Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./5.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./18.js");
var p = require("./169.js");
var h = require("./232.js");
var g = require("./26.js");
var C = require("./4.js");
var _ = require("./879.js");
var m = require("./274.js");
var f = require("./8.js");
var O = function (e) {
  function CastleDefenceBuyUnitsDialog() {
    return e.call(this, CastleDefenceBuyUnitsDialog.NAME) || this;
  }
  n.__extends(CastleDefenceBuyUnitsDialog, e);
  CastleDefenceBuyUnitsDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancle, this.dialogDisp.btn_ok]);
  };
  CastleDefenceBuyUnitsDialog.prototype.showLoaded = function (t = null) {
    this._amoutPicker = new _.TextPicker(this.dialogDisp.amoutPicker);
    this._amoutPicker.setNumItems(d.ClientConstCastle.UNIT_BUY_MAXIMUM + 1);
    var i = new m.BasicSliderVO(this.dialogDisp.mc_slider.sliderBar, this.dialogDisp.mc_slider.btn_slider, d.ClientConstCastle.UNIT_BUY_MAXIMUM, 0, this.dialogDisp);
    this._amountSlider = new b.ScrollComponent(i, b.ScrollComponent.HORIZONTAL_SLIDER);
    this._amountSlider.addEventListener(h.SliderEvent.VALUE_CHANGED, this.bindFunction(this.onSliderValueChange));
    this._associatedEventPackage = C.CastleModel.permanentCastleData.getUnitBaseLocation(this.defenceBuyUnitsProperties.worldmapObjectVO).unitsVO.getAssociatedEventPackage(this.defenceBuyUnitsProperties.unitVO.wodId);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_name, new c.LocalizedTextVO(this.defenceBuyUnitsProperties.unitVO.getNameString()));
    I.WodPicHelper.addUnitPic(this.defenceBuyUnitsProperties.unitVO, this.dialogDisp.mc_content, CastleDefenceBuyUnitsDialog.MAX_WIDTH, CastleDefenceBuyUnitsDialog.MAX_HEIGHT, C.CastleModel.userData.playerCrest.colorsTwo[0], C.CastleModel.userData.playerCrest.colorsTwo[1]);
    this.onChangeUnitAmount();
    this.dialogDisp.addEventListener(p.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onChangeUnitAmount));
    e.prototype.showLoaded.call(this, t);
  };
  CastleDefenceBuyUnitsDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    C.CastleModel.specialEventData.addEventListener(g.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onSpecialEventChange));
    C.CastleModel.specialEventData.addEventListener(g.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventChange));
  };
  CastleDefenceBuyUnitsDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    C.CastleModel.specialEventData.removeEventListener(g.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onSpecialEventChange));
    C.CastleModel.specialEventData.removeEventListener(g.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventChange));
  };
  CastleDefenceBuyUnitsDialog.prototype.onSpecialEventChange = function (e) {
    if (e.specialEventVO.eventId == l.EventConst.EVENTTYPE_EVENT_PACKAGE_PRIME_SALES) {
      this.updateCosts();
    }
    if (e.specialEventVO.eventId == l.EventConst.EVENTTYPE_ARMORER && !C.CastleModel.specialEventData.getEventByClass(e.specialEventVO.constructor) && r.instanceOfClass(this.defenceBuyUnitsProperties.unitVO, "ElitetoolUnitVO")) {
      this.hide();
    }
    if (!C.CastleModel.specialEventData.getActiveEventByEventId(e.specialEventVO.eventId)) {
      this.hide();
    }
  };
  CastleDefenceBuyUnitsDialog.prototype.onSliderValueChange = function (e) {
    this._amoutPicker.selectedValue = e.selectedValue;
    this.updateCosts();
  };
  CastleDefenceBuyUnitsDialog.prototype.hideLoaded = function (t = null) {
    this.dialogDisp.removeEventListener(p.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onChangeUnitAmount));
    this._amoutPicker.dispose();
    e.prototype.hideLoaded.call(this, t);
  };
  CastleDefenceBuyUnitsDialog.prototype.onChangeUnitAmount = function (e = null) {
    this._amountSlider.setSelectedIndex(this._amoutPicker.selectedValue);
    this.updateCosts();
  };
  CastleDefenceBuyUnitsDialog.prototype.updateCosts = function () {
    var e = u.int(this._associatedEventPackage ? this._associatedEventPackage.c2Discount : 0);
    var t = a.castAs(C.CastleModel.specialEventData.getActiveEventByEventId(l.EventConst.EVENTTYPE_UNIT_PRIME_SALE), "UnitPrimeSaleEventVO");
    if (t && t.wodIDHasDiscount(this.defenceBuyUnitsProperties.unitVO.wodId) && e == 0) {
      e = t.discount;
    }
    var i = u.int(Math.min(this.defenceBuyUnitsProperties.unitVO.costC2, this._associatedEventPackage ? this._associatedEventPackage.basicPriceC2 : this.defenceBuyUnitsProperties.unitVO.costC2));
    var n = Math.ceil(i * (1 - e / 100)) * this.selectedUnitAmout;
    var s = E.CollectableManager.parser.createGoodsListSave(new y.CollectableItemC2VO(n));
    D.CostHelper.initAsCosts(s, this.dialogDisp);
    if (e > 0) {
      this.dialogDisp.mc_discount.visible = true;
      this.textFieldManager.registerTextField(this.dialogDisp.mc_discount.txt_value, new c.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [e]));
    } else {
      this.dialogDisp.mc_discount.visible = false;
    }
  };
  Object.defineProperty(CastleDefenceBuyUnitsDialog.prototype, "selectedUnitAmout", {
    get: function () {
      return this._amoutPicker.selectedValue + 1;
    },
    enumerable: true,
    configurable: true
  });
  CastleDefenceBuyUnitsDialog.prototype.onClick = function (t) {
    if (!this.isLocked && !this.isWaitingForServerMessage && (e.prototype.onClick.call(this, t), f.ButtonHelper.isButtonEnabled(t.target))) {
      switch (t.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancle:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          var i = u.int(this._associatedEventPackage ? this._associatedEventPackage.packageID : -1);
          this.defenceBuyUnitsProperties.unitVO.requestInstantBuy(this.selectedUnitAmout, this.defenceBuyUnitsProperties.worldmapObjectVO.absAreaPos, this.defenceBuyUnitsProperties.worldmapObjectVO.kingdomID, this.defenceBuyUnitsProperties.mapID, i);
          this.hide();
      }
    }
  };
  Object.defineProperty(CastleDefenceBuyUnitsDialog.prototype, "defenceBuyUnitsProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleDefenceBuyUnitsDialog.NAME = "CastleDefenceBuyUnitsEx";
  CastleDefenceBuyUnitsDialog.MAX_WIDTH = 70;
  CastleDefenceBuyUnitsDialog.MAX_HEIGHT = 70;
  return CastleDefenceBuyUnitsDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleDefenceBuyUnitsDialog = O;
var E = require("./50.js");
var y = require("./128.js");
var b = require("./343.js");
var D = require("./66.js");
var I = require("./63.js");
s.classImplementsInterfaces(O, "ICollectableRendererList");