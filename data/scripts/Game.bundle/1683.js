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
var u = require("./6.js");
var d = require("./31.js");
var p = require("./19.js");
var h = require("./13.js");
var g = require("./127.js");
var C = require("./68.js");
var _ = require("./47.js");
var m = require("./59.js");
var f = require("./8.js");
var O = require("./73.js");
var E = require("./11.js");
var y = require("./350.js");
var b = createjs.Point;
var D = function (e) {
  function EquipmentExpiredDialog() {
    var t = this;
    t._currentLordPageIndex = 0;
    t._maxLordPageIndex = 0;
    t._currentSelectedLordIndex = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this, EquipmentExpiredDialog.NAME) || this;
  }
  n.__extends(EquipmentExpiredDialog, e);
  Object.defineProperty(EquipmentExpiredDialog, "EQUIPMENT_SLOT_TYPE_ORDER", {
    get: function () {
      if (this._EQUIPMENT_SLOT_TYPE_ORDER == undefined) {
        this._EQUIPMENT_SLOT_TYPE_ORDER = [g.BasicEquippableVO.SLOT_TYPE_HERO, g.BasicEquippableVO.SLOT_TYPE_WEAPON, g.BasicEquippableVO.SLOT_TYPE_HELMET, g.BasicEquippableVO.SLOT_TYPE_ARMOR, g.BasicEquippableVO.SLOT_TYPE_ARTIFACT, g.BasicEquippableVO.SLOT_TYPE_SKIN];
      }
      return this._EQUIPMENT_SLOT_TYPE_ORDER;
    },
    enumerable: true,
    configurable: true
  });
  EquipmentExpiredDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    f.ButtonHelper.initBasicButtons([this.dialogDisp.btn_left, this.dialogDisp.btn_right]);
    f.ButtonHelper.initButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close], P.ClickFeedbackButton);
    f.ButtonHelper.initButton(this.dialogDisp.btn_jumpEquipment, 1.05, M.ClickFeedbackButtonBackground);
    for (var i = 0; i < EquipmentExpiredDialog.MAX_VISIBLE_LORDS; ++i) {
      f.ButtonHelper.initBasicButton(this.dialogDisp.getChildByName("mc_lord" + i));
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new c.TextVO(h.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempEquipment_equipExpired_header"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_jumpEquipment.txt_text, new c.TextVO(h.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempEquipment_equipExpired_ehangeEquip_button"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_equipments.txt_exquipmentInfo, new l.LocalizedTextVO("dialog_tempEquipment_equipExpired_equipList_desc")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_equipments.txt_effectsTitle, new l.LocalizedTextVO("dialog_tempEquipment_equipExpired_equipList_lostEffect")).autoFitToBounds = true;
    i = 0;
    for (; i < EquipmentExpiredDialog.MAX_VISIBLE_EQUIPMENTS; ++i) {
      this.dialogDisp.mc_equipments.getChildByName("mc_equipment" + i).mc_placeholderIcon.gotoAndStop(i + 1);
    }
    this._scrollComponent = new S.SimpleScrollComponent(new _.SimpleScrollVO().initByParent(this.dialogDisp.mc_scroll).addMouseWheelElements([this.dialogDisp.mc_equipments, this.dialogDisp.mc_scroll]).addVisualElements([this.dialogDisp.mc_scroll.mc_background]), new m.DynamicSizeScrollStrategyVertical(true));
  };
  EquipmentExpiredDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this._currentLordPageIndex = 0;
    this._currentSelectedLordIndex = 0;
    this._maxLordPageIndex = u.int(Math.max(0, this.dialogProperties.numberOfLords - EquipmentExpiredDialog.MAX_VISIBLE_LORDS));
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScrollValueChanged));
    this.updateInfoText();
    this.updateLords();
    this.updateEquipments();
  };
  EquipmentExpiredDialog.prototype.hideLoaded = function (t = null) {
    if (this._scrollComponent) {
      this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScrollValueChanged));
      this._scrollComponent.hide();
    }
    e.prototype.hideLoaded.call(this);
  };
  EquipmentExpiredDialog.prototype.updateInfoText = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_info, new l.LocalizedTextVO(this.dialogProperties.numberOfEquipments > 1 ? "dialog_tempEquipment_equipExpired_desc_plural" : "dialog_tempEquipment_equipExpired_desc_singular", [this.dialogProperties.numberOfLords])).autoFitToBounds = true;
  };
  EquipmentExpiredDialog.prototype.scrollLordPage = function (e) {
    this._currentLordPageIndex = u.int(o.MathBase.clamp(e, 0, this._maxLordPageIndex));
    this.updateLords();
  };
  EquipmentExpiredDialog.prototype.updateLords = function () {
    for (var e = 0; e < EquipmentExpiredDialog.MAX_VISIBLE_LORDS; ++e) {
      var t = this.dialogDisp.getChildByName("mc_lord" + e);
      var i = this._currentLordPageIndex + e;
      var n = i >= this.dialogProperties.lordList.length ? null : this.dialogProperties.lordList[i];
      t.mouseChildren = false;
      t.visible = n != null;
      a.MovieClipHelper.clearMovieClip(t.mc_icon);
      if (n && t.visible) {
        if (n.isHero) {
          O.EquipmentIconHelper.addLordIcon(n, t.mc_icon, 60, 60);
        } else {
          O.EquipmentIconHelper.addLordIcon(n, t.mc_icon, 50, 50);
        }
      }
    }
    this.dialogDisp.btn_left.visible = this._currentLordPageIndex > 0;
    this.dialogDisp.btn_right.visible = this._currentLordPageIndex < this._maxLordPageIndex;
    this.updateLordHighlight();
  };
  EquipmentExpiredDialog.prototype.selectLord = function (e) {
    this._currentSelectedLordIndex = e;
    this.updateLordHighlight();
    this.updateEquipments();
  };
  EquipmentExpiredDialog.prototype.updateLordHighlight = function () {
    for (var e = 0; e < EquipmentExpiredDialog.MAX_VISIBLE_LORDS; ++e) {
      this.dialogDisp.getChildByName("mc_lord" + e).filters = [];
    }
    if (this._currentSelectedLordIndex >= this._currentLordPageIndex * EquipmentExpiredDialog.MAX_VISIBLE_LORDS && this._currentSelectedLordIndex < (this._currentLordPageIndex + 1) * EquipmentExpiredDialog.MAX_VISIBLE_LORDS) {
      this.dialogDisp.getChildByName("mc_lord" + this._currentSelectedLordIndex % EquipmentExpiredDialog.MAX_VISIBLE_LORDS).filters = C.BitmapFilterHelper.FILTER_GLOW_LORD_SCROLL_ITEM;
    }
  };
  EquipmentExpiredDialog.prototype.updateEquipments = function () {
    var e = this.dialogProperties.lordList[this._currentSelectedLordIndex];
    if (e) {
      var t = this.dialogProperties.getExpiredEquipmentVOByLord(e.id);
      this.destroyCollectableRenderList();
      var i = h.TextHelper.toUpperCaseLocaSafeTextId(r.Localize.text("dialog_tempEquipment_equipExpired_equipList_header", [this.dialogProperties.lordList[this._currentSelectedLordIndex].label]));
      this.textFieldManager.registerTextField(this.dialogDisp.txt_equipmentTitle, new c.TextVO(i)).autoFitToBounds = true;
      var n = new p.CollectableRenderOptions(p.CollectableRenderOptions.SET_BASIC, new b(60, 60));
      n.tooltip.showEquipmentCountdown = false;
      n.tooltip.forceHideTimer = true;
      for (var o = 0; o < EquipmentExpiredDialog.MAX_VISIBLE_EQUIPMENTS; ++o) {
        var s = t.getEquipmentBySlotType(EquipmentExpiredDialog.EQUIPMENT_SLOT_TYPE_ORDER[o]);
        var l = this.dialogDisp.mc_equipments.getChildByName("mc_equipment" + o);
        if (s) {
          var u = new I.CollectableItemEquipmentUniqueEnchantedVO(s.enchantmentLevel);
          u.equipmentVO = s;
          A.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new d.CollectableRenderClips(l), u, n);
        } else {
          a.MovieClipHelper.clearMovieClip(l.mc_icon);
        }
      }
      var g = this.textFieldManager.registerTextField(this.dialogDisp.mc_equipments.txt_effects, new c.TextVO(v.LordEffectHelper.createEffectListStringFromEquipments(t.equipments)));
      g.height = g.textHeight;
      this.dialogDisp.mc_equipments.mc_effectBackground.height = Math.max(EquipmentExpiredDialog.DEFAULT_EFFECT_BACKGROUND, EquipmentExpiredDialog.DEFAULT_EFFECT_BACKGROUND + (g.height - EquipmentExpiredDialog.DEFAULT_EFFECT_TEXTFIELD_HEIGHT));
      var C = this.dialogDisp.mc_equipments.getBounds(null);
      this._scrollComponent.init(0, Math.max(C.height - EquipmentExpiredDialog.EFFECTS_MASK_HEIGHT, 0), 25, 25);
      this._scrollComponent.show();
      this._scrollComponent.scrollToPercent(0);
      this._scrollComponent.setVisibility(C.height > EquipmentExpiredDialog.EFFECTS_MASK_HEIGHT);
    }
  };
  EquipmentExpiredDialog.prototype.onClick = function (t) {
    if (f.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      for (var i = 0; i < EquipmentExpiredDialog.MAX_VISIBLE_LORDS; ++i) {
        if (t.target == this.dialogDisp.getChildByName("mc_lord" + i)) {
          this.selectLord(this._currentLordPageIndex * EquipmentExpiredDialog.MAX_VISIBLE_LORDS + i);
        }
      }
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          E.CastleExternalDialog.dialogHandler.showHelper("", r.Localize.text("help_tempEquipment_equipExpired"));
          break;
        case this.dialogDisp.btn_left:
          this.scrollLordPage(this._currentLordPageIndex - 1);
          break;
        case this.dialogDisp.btn_right:
          this.scrollLordPage(this._currentLordPageIndex + 1);
          break;
        case this.dialogDisp.btn_jumpEquipment:
          this.onJumpToEquipmentButtonClicked();
      }
    }
  };
  EquipmentExpiredDialog.prototype.onJumpToEquipmentButtonClicked = function () {
    var e = this.dialogProperties.lordList[this._currentSelectedLordIndex];
    if (e) {
      T.CastleDialogHandler.getInstance().registerDefaultDialogs(L.CastleEquipmentDialog, new y.CastleEquipmentDialogProperties(null, e.id, e.isBaron));
    }
  };
  EquipmentExpiredDialog.prototype.onScrollValueChanged = function () {
    this.dialogDisp.mc_equipments.y = -this._scrollComponent.currentValue;
  };
  Object.defineProperty(EquipmentExpiredDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  EquipmentExpiredDialog.NAME = "EquipmentExpired";
  EquipmentExpiredDialog.MAX_VISIBLE_LORDS = 8;
  EquipmentExpiredDialog.MAX_VISIBLE_EQUIPMENTS = 6;
  EquipmentExpiredDialog.DEFAULT_EFFECT_TEXTFIELD_HEIGHT = 94.5;
  EquipmentExpiredDialog.DEFAULT_EFFECT_BACKGROUND = 132.2;
  EquipmentExpiredDialog.EFFECTS_MASK_HEIGHT = 255.35;
  return EquipmentExpiredDialog;
}(E.CastleExternalDialog);
exports.EquipmentExpiredDialog = D;
var I = require("./1051.js");
var T = require("./9.js");
var v = require("./133.js");
var S = require("./95.js");
var A = require("./25.js");
var L = require("./246.js");
var P = require("./36.js");
var M = require("./121.js");
s.classImplementsInterfaces(D, "ICollectableRendererList");