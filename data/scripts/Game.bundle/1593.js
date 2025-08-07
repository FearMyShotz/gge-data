Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./23.js");
var u = require("./4.js");
var d = require("./33.js");
var p = require("./409.js");
var h = require("./495.js");
var g = require("./593.js");
var C = require("./1264.js");
var _ = require("./1594.js");
var m = createjs.Shape;
var f = createjs.Container;
var O = function (e) {
  function RelicEquipmentUpgradeInfoComponent() {
    var t = this;
    t._currentEnchantmentLevel = 0;
    t._upgradeEffects = [];
    t._shutterConfig = new _.RelicEquipmentInfoShutterConfig();
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(RelicEquipmentUpgradeInfoComponent, e);
  RelicEquipmentUpgradeInfoComponent.prototype.addElementEffect = function (t, i) {
    if (t.relicEffectVO.effectType == h.XmlRelicEffectVO.EFFECT_TYPE_NORMAL && this._currentEnchantmentLevel < u.CastleModel.equipData.relicXml.maxRelicEnchanterLevel) {
      var n = this.addElement(C.RelicEquipmentInfoElementEnum.EFFECT_ITEM_UPGRADE);
      var o = E.CastleComponent.textFieldManager.registerTextField(n.txt_text, new s.TextVO(t.getUndefinedDescriptionText()));
      o.height = o.textHeight;
      n.mc_bottom.y = g.RelicEquipmentInfoComponent.ELEMENT_PADDING_Y * 4 + o.textHeight;
      E.CastleComponent.textFieldManager.registerTextField(n.mc_bottom.txt_valueFrom, this.getValueTextVO(t));
      var a = t.clone();
      a.effectValue.add(new p.EffectValueSimple().parseFromValueArray([u.CastleModel.equipData.relicXml.getRelicEnchanter(this.currentEnchantmentLevel + 1).relicNormalEffectBoost]), null);
      var r = this._shutterConfig.slotTypeMatchesCategory(i) && this.isShutterException();
      E.CastleComponent.textFieldManager.registerTextField(n.mc_bottom.txt_valueToDefault, this.getValueTextVO(a, r));
      E.CastleComponent.textFieldManager.registerTextField(n.mc_bottom.txt_valueToSuccess, this.getValueTextVO(a, r));
      E.CastleComponent.textFieldManager.registerTextField(n.mc_bottom.txt_valueToFailed, this.getValueTextVO(a, r));
      n.mc_background.height = n.mc_bottom.y + n.mc_bottom.height + g.RelicEquipmentInfoComponent.ELEMENT_PADDING_Y;
      var c = l.int(u.CastleModel.equipData.relicXml.getStarRating(t.power));
      var d = 0;
      var _ = 0;
      var m = 0;
      if (c >= 7) {
        d = _ = m = 4;
      } else if (c >= 4) {
        d = 3;
        _ = c >= 5 ? 3 : 2;
        m = c >= 6 ? 3 : 2;
      } else {
        d = 2;
        _ = c >= 2 ? 2 : 1;
        m = c >= 3 ? 2 : 1;
      }
      n.mc_rating.mc_star0.gotoAndStop(d);
      n.mc_rating.mc_star1.gotoAndStop(_);
      n.mc_rating.mc_star2.gotoAndStop(m);
      n.mc_bottom.mc_arrow.mc_default.alpha = 1;
      n.mc_bottom.mc_arrow.mc_success.alpha = 0;
      n.mc_bottom.mc_arrow.mc_failed.alpha = 0;
      n.mc_bottom.txt_valueToDefault.alpha = 1;
      n.mc_bottom.txt_valueToSuccess.alpha = 0;
      n.mc_bottom.txt_valueToFailed.alpha = 0;
      this._upgradeEffects.push([i, this._currentElements[this._currentElements.length - 1]]);
    } else {
      e.prototype.addElementEffect.call(this, t, i);
    }
    return n;
  };
  RelicEquipmentUpgradeInfoComponent.prototype.createShutterDisp = function (e) {
    var t = new f();
    t.mouseChildren = false;
    t.mouseEnabled = false;
    var i = new m();
    i.graphics.beginFill(0, 0.3);
    i.graphics.drawRect(0, 0, e.width, e.height);
    i.graphics.endFill();
    t.addChild(i);
    t.x = 0;
    t.y = 0;
    return t;
  };
  RelicEquipmentUpgradeInfoComponent.prototype.clearElements = function () {
    e.prototype.clearElements.call(this);
    this.clearAnimations();
  };
  RelicEquipmentUpgradeInfoComponent.prototype.clearAnimations = function () {
    if (this._upgradeEffects != null) {
      for (var e = 0, t = this._upgradeEffects; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          var n = i[1].clip.currentshownDisplayObject;
          c.TweenMax.killTweensOf(n.mc_bottom.mc_arrow.mc_default);
          c.TweenMax.killTweensOf(n.mc_bottom.mc_arrow.mc_success);
          c.TweenMax.killTweensOf(n.mc_bottom.mc_arrow.mc_failed);
          c.TweenMax.killTweensOf(n.mc_bottom.txt_valueToDefault);
          c.TweenMax.killTweensOf(n.mc_bottom.txt_valueToSuccess);
          c.TweenMax.killTweensOf(n.mc_bottom.txt_valueToFailed);
        }
      }
    }
  };
  RelicEquipmentUpgradeInfoComponent.prototype.playUpgradeAnimation = function (e) {
    this.clearAnimations();
    if (this._upgradeEffects != null) {
      for (var t = 0, i = this._upgradeEffects; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          var o = n[1].clip.currentshownDisplayObject;
          if (!this._shutterConfig.slotTypeMatchesCategory(n[0]) || !this.isShutterException()) {
            if (e == RelicEquipmentUpgradeInfoComponent.ANIMATION_TYPE_DEFAULT) {
              this.startFading(o.mc_bottom.mc_arrow.mc_default, true);
              this.startFading(o.mc_bottom.mc_arrow.mc_success, false);
              this.startFading(o.mc_bottom.mc_arrow.mc_failed, false);
              this.startFading(o.mc_bottom.txt_valueToDefault, true);
              this.startFading(o.mc_bottom.txt_valueToSuccess, false);
              this.startFading(o.mc_bottom.txt_valueToFailed, false);
            } else {
              this.startFading(o.mc_bottom.mc_arrow.mc_default, false);
              this.startFading(o.mc_bottom.mc_arrow.mc_success, e == RelicEquipmentUpgradeInfoComponent.ANIMATION_TYPE_SUCCESS);
              this.startFading(o.mc_bottom.mc_arrow.mc_failed, e == RelicEquipmentUpgradeInfoComponent.ANIMATION_TYPE_FAILED);
              this.startFading(o.mc_bottom.txt_valueToDefault, false);
              this.startFading(o.mc_bottom.txt_valueToSuccess, e == RelicEquipmentUpgradeInfoComponent.ANIMATION_TYPE_SUCCESS);
              this.startFading(o.mc_bottom.txt_valueToFailed, e == RelicEquipmentUpgradeInfoComponent.ANIMATION_TYPE_FAILED);
            }
          }
        }
      }
    }
  };
  RelicEquipmentUpgradeInfoComponent.prototype.startFading = function (e, t) {
    if (t) {
      c.TweenMax.fromTo(e, RelicEquipmentUpgradeInfoComponent.ANIMATION_DURATION, {
        alpha: e.alpha
      }, {
        alpha: 1
      });
    } else if (e.alpha > 0) {
      c.TweenMax.fromTo(e, RelicEquipmentUpgradeInfoComponent.ANIMATION_DURATION, {
        alpha: e.alpha
      }, {
        alpha: 0
      });
    }
  };
  RelicEquipmentUpgradeInfoComponent.prototype.getValueTextVO = function (e, t = false) {
    if (t) {
      return new s.TextVO("-");
    }
    var i = "";
    i = e.relicEffectVO.valueTextType == h.XmlRelicEffectVO.VALUE_TYPE_INCREASE ? "value_percentage_add" : "value_percentage_subtract";
    if (e.effect.effectType.type == d.EffectTypeEnum.EFFECT_TYPE_DEFENSE_SUPPORT_UNITS || e.effect.effectType.type == d.EffectTypeEnum.EFFECT_TYPE_ATTACK_SUPPORT_UNITS) {
      i = a.GenericTextIds.VALUE_NOMINAL_ADD;
    }
    return new r.LocalizedTextVO(i, e.effectValue.textReplacements);
  };
  RelicEquipmentUpgradeInfoComponent.prototype.isShutterException = function () {
    return this._shutterConfig.category != _.RelicEquipmentInfoShutterConfig.CATEGORY_EQUIPMENT || !y.instanceOfClass(this.vo, "RelicGemVO");
  };
  RelicEquipmentUpgradeInfoComponent.prototype.onEffectCategoryAdded = function (t, i) {
    e.prototype.onEffectCategoryAdded.call(this, t, i);
    if (this._shutterConfig && this._shutterConfig.slotTypeMatchesCategory(i) && this._shutterConfig.effectsType == t && this.isShutterException()) {
      this._currentCategoryDisp.addChild(this.createShutterDisp(this._currentCategoryDisp));
    }
  };
  Object.defineProperty(RelicEquipmentUpgradeInfoComponent.prototype, "shutterConfig", {
    get: function () {
      return this._shutterConfig;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicEquipmentUpgradeInfoComponent.prototype, "currentEnchantmentLevel", {
    get: function () {
      return this._currentEnchantmentLevel;
    },
    set: function (e) {
      this._currentEnchantmentLevel = e;
    },
    enumerable: true,
    configurable: true
  });
  RelicEquipmentUpgradeInfoComponent.ANIMATION_TYPE_SUCCESS = "success";
  RelicEquipmentUpgradeInfoComponent.ANIMATION_TYPE_FAILED = "failed";
  RelicEquipmentUpgradeInfoComponent.ANIMATION_TYPE_DEFAULT = "default";
  RelicEquipmentUpgradeInfoComponent.ANIMATION_DURATION = 0.25;
  return RelicEquipmentUpgradeInfoComponent;
}(g.RelicEquipmentInfoComponent);
exports.RelicEquipmentUpgradeInfoComponent = O;
o.classImplementsInterfaces(O, "ICollectableRendererList");
var E = require("./14.js");
var y = require("./1.js");