Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./4.js");
var r = require("./494.js");
var l = require("./40.js");
var c = require("./82.js");
var u = require("./47.js");
var d = require("./59.js");
var p = require("./42.js");
var h = require("./1594.js");
var g = function (e) {
  function RelicUpgradeDialogEffects(t) {
    var i = e.call(this, t) || this;
    i.init();
    return i;
  }
  n.__extends(RelicUpgradeDialogEffects, e);
  RelicUpgradeDialogEffects.prototype.init = function () {
    C.CastleComponent.textFieldManager.registerTextField(this.disp.txt_info, new a.LocalizedTextVO("dialog_relicEnchanter_stats_nothingSelected")).verticalAlign = p.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this._infoComponent = new m.RelicEquipmentUpgradeInfoComponent();
    this._infoComponent.init(this.disp.mc_items.mc_transform);
    this._infoComponent.disp.scaleX = this._infoComponent.disp.scaleY = RelicUpgradeDialogEffects.INFO_SCALE;
    this._scrollComponent = new c.ModernSliderScrollComponent(new u.SimpleScrollVO().initByParent(this.disp.mc_slider).addMouseWheelElements([this.disp]).addVisualElements([this.disp.mc_slider]), new d.DynamicSizeScrollStrategyVertical(true));
  };
  RelicUpgradeDialogEffects.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this._scrollComponent.show();
    this.updateWithNewVO(null, f.RelicUpgradeDialogStatus.EQUIP_TYPE_EQUIPMENT);
  };
  RelicUpgradeDialogEffects.prototype.onHide = function () {
    this._scrollComponent.hide();
    e.prototype.onHide.call(this);
  };
  RelicUpgradeDialogEffects.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
  };
  RelicUpgradeDialogEffects.prototype.removeEventListener = function () {
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    e.prototype.removeEventListener.call(this);
  };
  RelicUpgradeDialogEffects.prototype.updateWithNewVO = function (e, t) {
    var i = !!e && e.getEnchantmentLevel() == s.CastleModel.equipData.relicXml.maxRelicEnchanterLevel;
    var n = this._currentVO == e && !i;
    this._currentVO = e;
    var o = this.currentVO != null;
    if (o) {
      this._infoComponent.shutterConfig.category = t == f.RelicUpgradeDialogStatus.EQUIP_TYPE_EQUIPMENT ? h.RelicEquipmentInfoShutterConfig.CATEGORY_GEM : h.RelicEquipmentInfoShutterConfig.CATEGORY_EQUIPMENT;
      this._infoComponent.shutterConfig.effectsType = r.XmlRelicEffectVO.EFFECT_TYPE_NORMAL;
      this._infoComponent.currentEnchantmentLevel = e.getEnchantmentLevel();
      this._infoComponent.updateWithNewVO(this.currentVO.vo);
    }
    this.disp.mc_items.visible = o;
    this.disp.txt_info.visible = !o;
    if (!n) {
      var a = this._infoComponent.getCategoryYPosition(_.RelicEquipmentInfoComponent.CATEGORY_PREFIX_EQUIPMENT + _.RelicEquipmentInfoComponent.CATEGORY_PREFIX_EFFECTS + "normal") * RelicUpgradeDialogEffects.INFO_SCALE;
      var l = Math.max(0, this.disp.mc_items.mc_transform.height - this.disp.mc_mask.height);
      this._scrollComponent.init(0, l, RelicUpgradeDialogEffects.SCROLL_DELTA, RelicUpgradeDialogEffects.SCROLL_DELTA);
      this._scrollComponent.setVisibility(l > 0 && o);
      this._scrollComponent.scrollToValue(a);
    }
  };
  RelicUpgradeDialogEffects.prototype.onScroll = function () {
    this.disp.mc_items.mc_transform.y = -this._scrollComponent.currentValue;
  };
  Object.defineProperty(RelicUpgradeDialogEffects.prototype, "currentVO", {
    get: function () {
      return this._currentVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicUpgradeDialogEffects.prototype, "infoComponent", {
    get: function () {
      return this._infoComponent;
    },
    enumerable: true,
    configurable: true
  });
  RelicUpgradeDialogEffects.SCROLL_DELTA = 30;
  RelicUpgradeDialogEffects.INFO_SCALE = 1.3937;
  return RelicUpgradeDialogEffects;
}(l.CastleItemRenderer);
exports.RelicUpgradeDialogEffects = g;
var C = require("./14.js");
var _ = require("./592.js");
var m = require("./1593.js");
var f = require("./1038.js");
o.classImplementsInterfaces(g, "ICollectableRendererList");