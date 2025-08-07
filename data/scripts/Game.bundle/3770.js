Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./28.js");
var d = require("./21.js");
var p = require("./31.js");
var h = require("./19.js");
var g = require("./13.js");
var C = require("./4.js");
var _ = require("./27.js");
var m = require("./47.js");
var f = require("./59.js");
var O = require("./8.js");
var E = require("./73.js");
var y = require("./11.js");
var b = require("./350.js");
var D = createjs.Point;
var I = function (e) {
  function EquipmentExpireDialog() {
    var t = this;
    t._expiringEquipments = [];
    CONSTRUCTOR_HACK;
    return t = e.call(this, EquipmentExpireDialog.NAME) || this;
  }
  n.__extends(EquipmentExpireDialog, e);
  EquipmentExpireDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    O.ButtonHelper.initButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close], R.ClickFeedbackButton);
    O.ButtonHelper.initButton(this.dialogDisp.btn_jumpEquipment, 1.05, V.ClickFeedbackButtonBackground);
    O.ButtonHelper.initButton(this.dialogDisp.btn_attackAnyway, 1.05, V.ClickFeedbackButtonBackground);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new c.TextVO(g.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempEquipment_expireWarning_header"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_arrival, new c.TextVO(g.TextHelper.toUpperCaseLocaSafeTextId("dialog_postAttack_arrival"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_equipmentTitle, new c.TextVO(g.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempEquipment_expireWarning_equipList_header"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_equipments.txt_effectTitle, new l.LocalizedTextVO("dialog_tempEquipment_expireWarning_lostEffects_header")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_jumpEquipment.txt_text, new c.TextVO(g.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempEquipment_expireWarning_changeEquip_button"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_attackAnyway.txt_text, new c.TextVO(g.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempEquipment_expireWarning_attackAnyway_button"))).autoFitToBounds = true;
    this.dialogDisp.mc_travelTime.mouseChildren = false;
    this.dialogDisp.mc_travelTime.toolTipText = "travelTime";
    for (var i = 0; i < EquipmentExpireDialog.MAX_VISIBLE_EQUIPMENTS; ++i) {
      var n = this.dialogDisp.mc_equipments.getChildByName("mc_equipment" + i);
      this.textFieldManager.registerTextField(n.txt_expired, new c.TextVO(g.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempEquipment_expireWarning_equipList_expired"))).autoFitToBounds = true;
      n.mc_equipment.mc_slotType.gotoAndStop(i + 1);
    }
    this._scrollComponent = new A.SimpleScrollComponent(new m.SimpleScrollVO().initByParent(this.dialogDisp.mc_scroll).addMouseWheelElements([this.dialogDisp.mc_equipments, this.dialogDisp.mc_scroll]).addVisualElements([this.dialogDisp.mc_scroll.mc_background]), new f.DynamicSizeScrollStrategyVertical(true));
  };
  EquipmentExpireDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this._expiringEquipments = [];
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScrollValueChanged));
    C.CastleModel.timerData.addEventListener(d.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTickEvent));
    this.updateInfoText();
    this.updateLord();
    this.updateTravelTimes();
    this.checkEquipment();
    this.updateEquipments();
  };
  EquipmentExpireDialog.prototype.hide = function () {
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScrollValueChanged));
    C.CastleModel.timerData.removeEventListener(d.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTickEvent));
    this._scrollComponent.hide();
    this._expiringEquipments = [];
    e.prototype.hide.call(this);
  };
  EquipmentExpireDialog.prototype.updateInfoText = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_info, new l.LocalizedTextVO(this.dialogProperties.lordVO.isBaron ? "dialog_tempEquipment_expireWarning_desc_castellan" : "dialog_tempEquipment_expireWarning_desc_commander", [this.dialogProperties.lordVO.label])).autoFitToBounds = true;
  };
  EquipmentExpireDialog.prototype.updateLord = function () {
    var e = this.dialogDisp.mc_lord;
    e.mouseChildren = false;
    o.MovieClipHelper.clearMovieClip(e.mc_icon);
    if (this.dialogProperties.lordVO.isHero) {
      E.EquipmentIconHelper.addLordIcon(this.dialogProperties.lordVO, e.mc_icon, 75, 75);
    } else {
      E.EquipmentIconHelper.addLordIcon(this.dialogProperties.lordVO, e.mc_icon, 64, 64);
    }
    e.toolTipText = this.dialogProperties.lordVO.name;
  };
  EquipmentExpireDialog.prototype.updateTravelTimes = function () {
    var e = new Date();
    e.setTime(e.getTime() + this.dialogProperties.travelTime * u.ClientConstTime.SEC_2_MILLISEC);
    this.textFieldManager.registerTextField(this.dialogDisp.mc_travelTime.txt_time, new c.TextVO(a.TimeStringHelper.getShortTimeStringBySeconds(this.dialogProperties.travelTime)));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_arrivalDate, new c.TextVO(_.CastleTimeStringHelper.getDateStringFromDate(e)));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_arrivalTime, new c.TextVO(a.TimeStringHelper.getDateToString(e.getTime(), a.TimeStringHelper.DATE_TIMEOCLOCK_FORMAT_ADVANCED, r.Localize.text)));
  };
  EquipmentExpireDialog.prototype.updateEquipments = function () {
    this.destroyCollectableRenderList();
    for (var e = 0; e < EquipmentExpireDialog.MAX_VISIBLE_EQUIPMENTS; ++e) {
      var t = this.getEquipmentBySlotType(M.EquipmentExpiredDialog.EQUIPMENT_SLOT_TYPE_ORDER[e]);
      var i = this.dialogDisp.mc_equipments.getChildByName("mc_equipment" + e);
      if (t) {
        var n = new T.CollectableItemEquipmentUniqueEnchantedVO(t.enchantmentLevel);
        n.equipmentVO = t;
        L.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new p.CollectableRenderClips(i).addIconMc(i.mc_equipment.mc_icon), n, new h.CollectableRenderOptions(h.CollectableRenderOptions.SET_BASIC, new D(60, 60)));
      } else {
        o.MovieClipHelper.clearMovieClip(i.mc_equipment.mc_icon);
      }
    }
    this.updateEquipmentTimes();
    var a = this.textFieldManager.registerTextField(this.dialogDisp.mc_equipments.txt_effects, new c.TextVO(S.LordEffectHelper.createEffectListStringFromEquipments(this._expiringEquipments)));
    a.height = a.textHeight;
    this.dialogDisp.mc_equipments.mc_effectsBackground.height = Math.max(EquipmentExpireDialog.DEFAULT_EFFECT_BACKGROUND, EquipmentExpireDialog.DEFAULT_EFFECT_BACKGROUND + (a.height - EquipmentExpireDialog.DEFAULT_EFFECT_TEXTFIELD_HEIGHT));
    var s = this.dialogDisp.mc_equipments.getBounds(null);
    this._scrollComponent.init(0, Math.max(s.height - EquipmentExpireDialog.EFFECTS_MASK_HEIGHT, 0), 25, 25);
    this._scrollComponent.show();
    this._scrollComponent.scrollToPercent(0);
    this._scrollComponent.setVisibility(s.height > EquipmentExpireDialog.EFFECTS_MASK_HEIGHT);
  };
  EquipmentExpireDialog.prototype.updateEquipmentTimes = function () {
    for (var e = 0; e < EquipmentExpireDialog.MAX_VISIBLE_EQUIPMENTS; ++e) {
      var t = this.getEquipmentBySlotType(M.EquipmentExpiredDialog.EQUIPMENT_SLOT_TYPE_ORDER[e]);
      var i = this.dialogDisp.mc_equipments.getChildByName("mc_equipment" + e);
      if (t) {
        var n = t.remainingDuration <= 0;
        i.txt_expired.visible = n;
        i.mc_time.visible = !n;
        if (!n) {
          this.textFieldManager.registerTextField(i.mc_time.txt_time, new c.TextVO(a.TimeStringHelper.getHoureMinuteSecondTimeString(t.remainingDuration)));
        }
      } else {
        i.txt_expired.visible = false;
        i.mc_time.visible = true;
        this.textFieldManager.registerTextField(i.mc_time.txt_time, new c.TextVO("-"));
      }
    }
  };
  EquipmentExpireDialog.prototype.checkEquipment = function () {
    var e = false;
    for (var t = 0; t < M.EquipmentExpiredDialog.EQUIPMENT_SLOT_TYPE_ORDER.length; ++t) {
      var i = M.EquipmentExpiredDialog.EQUIPMENT_SLOT_TYPE_ORDER[t];
      var n = this.dialogProperties.lordVO.equipmentSlots[i].equipmentVO;
      if (n && n.uniqueID > 0 && n.remainingDuration > 0 && !this.doesEquipmentExistInList(this._expiringEquipments, n) && n.remainingDuration - this.dialogProperties.travelTime <= 0) {
        var o = C.CastleModel.equipData.getEquipmentByUniqueID(n.uniqueID, true);
        o.durationEndTimestamp = n.durationEndTimestamp;
        this._expiringEquipments.push(o);
        e = true;
      }
    }
    if (e) {
      this.updateEquipments();
    }
  };
  EquipmentExpireDialog.prototype.doesEquipmentExistInList = function (e, t) {
    if (e != null) {
      for (var i = 0, n = e; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o.uniqueID == t.uniqueID) {
          return true;
        }
      }
    }
    return false;
  };
  EquipmentExpireDialog.prototype.getEquipmentBySlotType = function (e) {
    if (this._expiringEquipments != null) {
      for (var t = 0, i = this._expiringEquipments; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.slotType == e) {
          return n;
        }
      }
    }
    return null;
  };
  EquipmentExpireDialog.prototype.onClick = function (t) {
    if (O.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          y.CastleExternalDialog.dialogHandler.showHelper("", r.Localize.text("help_tempEquipment_expireWarning"));
          break;
        case this.dialogDisp.btn_jumpEquipment:
          this.dialogProperties.onDeniedFunc();
          v.CastleDialogHandler.getInstance().registerDefaultDialogs(P.CastleEquipmentDialog, new b.CastleEquipmentDialogProperties(null, this.dialogProperties.lordVO.id, this.dialogProperties.lordVO.isBaron));
          this.hide();
          break;
        case this.dialogDisp.btn_attackAnyway:
          this.dialogProperties.onConfirmFunc(this.dialogProperties.boostTraveling, this.dialogProperties.premiumCommander);
          this.hide();
      }
    }
  };
  EquipmentExpireDialog.prototype.onScrollValueChanged = function () {
    this.dialogDisp.mc_equipments.y = -this._scrollComponent.currentValue;
  };
  EquipmentExpireDialog.prototype.onTickEvent = function (e) {
    this.updateTravelTimes();
    this.checkEquipment();
    this.updateEquipmentTimes();
  };
  Object.defineProperty(EquipmentExpireDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  EquipmentExpireDialog.NAME = "EquipmentExpire";
  EquipmentExpireDialog.MAX_VISIBLE_EQUIPMENTS = 6;
  EquipmentExpireDialog.DEFAULT_EFFECT_TEXTFIELD_HEIGHT = 94.5;
  EquipmentExpireDialog.DEFAULT_EFFECT_BACKGROUND = 132.2;
  EquipmentExpireDialog.EFFECTS_MASK_HEIGHT = 310;
  return EquipmentExpireDialog;
}(y.CastleExternalDialog);
exports.EquipmentExpireDialog = I;
var T = require("./1052.js");
var v = require("./9.js");
var S = require("./133.js");
var A = require("./95.js");
var L = require("./25.js");
var P = require("./246.js");
var M = require("./1685.js");
var R = require("./36.js");
var V = require("./121.js");
s.classImplementsInterfaces(I, "ICollectableRendererList");