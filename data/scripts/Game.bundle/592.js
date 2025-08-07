Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./100.js");
var a = require("./1.js");
var s = require("./2.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./31.js");
var p = require("./19.js");
var h = require("./4.js");
var g = require("./52.js");
var C = require("./127.js");
var _ = require("./494.js");
var m = require("./14.js");
var f = require("./42.js");
var O = require("./1264.js");
var E = createjs.MovieClip;
var y = createjs.Point;
var b = createjs.Rectangle;
var D = function (e) {
  function RelicEquipmentInfoComponent() {
    var t = this;
    t._currentElements = [];
    t._isLoaded = false;
    t._hideTitle = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(RelicEquipmentInfoComponent, e);
  RelicEquipmentInfoComponent.prototype.init = function (e, t = false) {
    this._hideTitle = t;
    this._disp = new E();
    e.addChild(this._disp);
    var i = new P.RelicEquipmentInfoElement(O.RelicEquipmentInfoElementEnum.TITLE, "load");
    if (i.clip.isLoaded) {
      this.onLoaded(i.clip);
    } else {
      i.clip.clipLoaded.add(this.bindFunction(this.onLoaded));
    }
  };
  RelicEquipmentInfoComponent.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this.clearElements();
  };
  RelicEquipmentInfoComponent.prototype.updateWithNewVO = function (e) {
    this._vo = e;
    this.update();
  };
  RelicEquipmentInfoComponent.prototype.update = function () {
    if (this.isLoaded) {
      this.clearElements();
      if (!this.vo) {
        this.constructElementsByRandomRelic();
      }
      if (M.instanceOfClass(this.vo, "RelicEquipmentVO")) {
        this.constructElementsByRelicEquipment();
      } else if (M.instanceOfClass(this.vo, "RelicGemVO")) {
        this.constructElementsByRelicGem();
      }
    }
  };
  RelicEquipmentInfoComponent.prototype.constructElementsByRandomRelic = function () {
    this.startNewCategory(RelicEquipmentInfoComponent.CATEGORY_PREFIX_EQUIPMENT + "title");
    var e = [];
    e.push(c.Localize.text("relicequip_dialog_randomRelic_equipmentMystery"));
    e.push(c.Localize.text("relicequip_dialog_randomRelic_itemType"));
    e.push(c.Localize.text("relicequip_dialog_randomRelic_effectRandom"));
    e.push(c.Localize.text("relicequip_dialog_category_undefined"));
    var t = c.Localize.text("relicequip_dialog_category_placeholder_" + e.length, e);
    this.setupElementTitle(this.addElement(O.RelicEquipmentInfoElementEnum.TITLE_UNDEFINED), c.Localize.text("relicequip_dialog_randomRelic_name"), t, new v.CollectableTypeVO(I.CollectableEnum.GENERIC_CURRENCY, g.ClientConstCurrency.ID_RELIC_FRAGMENTS), c.Localize.text("relicequip_dialog_randomRelic_sellValue"));
    this.addElementText(c.Localize.text("relicequip_dialog_randomRelic_desc"));
    this.addElement(O.RelicEquipmentInfoElementEnum.END);
  };
  RelicEquipmentInfoComponent.prototype.constructElementsByRelicEquipment = function () {
    var e = this.vo;
    var t = e.relicInfoVO.isRelicDefined();
    if (!this.hideTitle) {
      this.startNewCategory(RelicEquipmentInfoComponent.CATEGORY_PREFIX_EQUIPMENT + "title");
      this.setupElementTitle(this.addElement(e.relicInfoVO.isRelicDefined() ? O.RelicEquipmentInfoElementEnum.TITLE : O.RelicEquipmentInfoElementEnum.TITLE_UNDEFINED), e.nameString + this.getDebugIdString(this.vo), e.getDescriptionText(), new v.CollectableTypeVO(I.CollectableEnum.GENERIC_CURRENCY, g.ClientConstCurrency.ID_RELIC_FRAGMENTS), A.RelicItemInfoVO.getSellPriceTextByInfoVO(e.relicInfoVO, e.getSellPrice().amount));
    }
    if (!t && !this.hideTitle) {
      this.addElementText(c.Localize.text("relicequip_dialog_randomRelic_desc"));
    }
    this.setupElementsEffects(e.relicInfoVO, e.slotType);
    if (e.canSlotGem) {
      this.startNewCategory(RelicEquipmentInfoComponent.CATEGORY_PREFIX_EQUIPMENT + RelicEquipmentInfoComponent.CATEGORY_PREFIX_GEM + "socket");
      if (e.gemVO && M.instanceOfClass(e.gemVO, "RelicGemVO")) {
        this.setupElementsEffects(e.gemVO.relicInfoVO, C.BasicEquippableVO.SLOT_TYPE_GEM);
      } else {
        this.addElementHeader("relicequip_dialog_category_relicGem");
        this.addElementGemSocket();
      }
    }
    this.addElement(O.RelicEquipmentInfoElementEnum.END);
  };
  RelicEquipmentInfoComponent.prototype.constructElementsByRelicGem = function () {
    var e = this.vo;
    var t = e.relicInfoVO.isRelicDefined();
    if (!this.hideTitle) {
      this.startNewCategory(RelicEquipmentInfoComponent.CATEGORY_PREFIX_GEM + "title");
      this.setupElementTitle(this.addElement(e.relicInfoVO.isRelicDefined() ? O.RelicEquipmentInfoElementEnum.TITLE : O.RelicEquipmentInfoElementEnum.TITLE_UNDEFINED), e.nameString + this.getDebugIdString(this.vo), e.getDescriptionText(), new v.CollectableTypeVO(I.CollectableEnum.GENERIC_CURRENCY, g.ClientConstCurrency.ID_RELIC_FRAGMENTS), e.relicInfoVO.getSellPriceText());
    }
    if (!t && !this.hideTitle) {
      this.addElementText(c.Localize.text("relicequip_dialog_randomRelic_desc"));
    }
    this.setupElementsEffects(e.relicInfoVO, e.slotType);
    this.addElement(O.RelicEquipmentInfoElementEnum.END);
  };
  RelicEquipmentInfoComponent.prototype.getDebugIdString = function (e) {
    var t = "";
    if (h.CastleModel.equipData.showEquipmentIds) {
      t = h.CastleModel.equipData.showEquipmentIds ? " (ID: " + e.id + ")" : "";
      var i = e;
      if (i && i.gemVO != null) {
        t += " (GemID: " + i.gemVO.id + ")";
      }
    }
    return t;
  };
  RelicEquipmentInfoComponent.prototype.alignElementsToTarget = function (e) {
    if (e && this.isLoaded && !(this._currentElements.length <= 0)) {
      this._disp.x = 0;
      this._disp.y = 0;
      var t = this.getCurrentElementsWidth();
      var i = this._currentElements[0].clip.height;
      var n = e.getBounds(null);
      var o = new b();
      var r = S.IsoHelper.view.calcPosToCoordinateSystem(n.topLeft, e, this._disp);
      var l = S.IsoHelper.view.calcPosToCoordinateSystem(n.bottomRight, e, this._disp);
      o.top = r.y;
      o.left = r.x;
      o.bottom = l.y;
      o.right = l.x;
      var c = new y(e.stage.stageWidth, e.stage.stageHeight);
      var u = new b();
      u.left = o.left;
      u.right = c.x - o.right;
      u.top = o.top;
      u.bottom = c.y - o.bottom;
      var d = this.getNumberOfNecessaryPages(o, u, c, i) * t - t * 0.5;
      var p = new y(u.right - d >= 0 || u.left - d < 0 ? 1 : -1, s.MathBase.clamp(u.bottom - u.top, -1, 1));
      var h = 0;
      var g = 0;
      var C = 0;
      var _ = true;
      var m = false;
      for (var f = 0; f < this._disp.numChildren; ++f) {
        var O = this._disp.getChildAt(f);
        var E = g == 0 ? u.top : c.y - (o.top - (_ ? C : 0));
        if (h + O.height > E) {
          if (g == 0) {
            C = h;
          }
          if (g == 0 && f == 0) {
            m = true;
          }
          if (g == 0 && f <= 1) {
            _ = false;
          }
          g++;
          h = _ ? i : 0;
          true;
        }
        if (m) {
          if (p.x > 0) {
            O.x = n.right + (g - 1) * t;
          } else {
            O.x = -n.left + (g - 1) * t * -1 - t;
          }
        } else {
          O.x = g * t * p.x;
        }
        O.y = h;
        h += O.height - 2;
      }
      if (g == 0) {
        C = h;
      }
      this._disp.x = o.x + o.width * 0.5 - t * 0.5;
      this._disp.y = o.top - C;
      if (a.MobileHelper.isScreenTooSmall()) {
        var D = this._disp.stage.stageWidth - (this._disp.x + this._disp.width);
        if (D < 0) {
          this._disp.x += D;
        }
      }
    }
  };
  RelicEquipmentInfoComponent.prototype.getNumberOfNecessaryPages = function (e, t, i, n) {
    var o = 0;
    var a = 0;
    var s = 0;
    var r = true;
    for (var l = 0; l < this._disp.numChildren; ++l) {
      var c = this._disp.getChildAt(l);
      var u = a == 0 ? t.top : i.y - (e.top - (r ? s : 0));
      var d = false;
      if (o + c.height > u) {
        if (a == 0) {
          s = o;
        }
        if (a == 0 && l <= 1) {
          r = false;
        }
        a++;
        o = r ? n : 0;
        d = true;
      }
      if (!d) {
        o += c.height;
      }
    }
    return a + 1;
  };
  RelicEquipmentInfoComponent.prototype.clearElements = function () {
    this._currentElements = [];
    this._currentCategoryDisp = null;
    this._disp.removeChildren();
    this._disp.x = 0;
    this._disp.y = 0;
    this.destroyCollectableRenderList();
  };
  RelicEquipmentInfoComponent.prototype.startNewCategory = function (e) {
    var t = this._currentCategoryDisp;
    this._currentCategoryDisp = new E();
    this._disp.addChild(this._currentCategoryDisp);
    this._currentCategoryDisp.name = e;
    this._currentCategoryDisp.x = t ? t.x : 0;
    this._currentCategoryDisp.y = t ? t.y + t.height : 0;
  };
  RelicEquipmentInfoComponent.prototype.addElement = function (e) {
    if (!this._currentCategoryDisp) {
      this.startNewCategory("commonLayer");
    }
    var t = this._currentElements.length > 0 ? this._currentElements[this._currentElements.length - 1] : null;
    var i = new P.RelicEquipmentInfoElement(e, this._currentCategoryDisp.name);
    this._currentCategoryDisp.addChild(i.clip);
    this._currentElements.push(i);
    var n = !!t && t.category == i.category;
    i.clip.x = n ? t.clip.x : 0;
    i.clip.y = n ? t.clip.y + t.clip.height - 2 : 0;
    if (this.disp.scaleX > 1) {
      this.disp.changeTextFieldCacheScale(2);
    }
    return i.clip.currentshownDisplayObject;
  };
  RelicEquipmentInfoComponent.prototype.setupElementTitle = function (e, t, i, n, a) {
    var s = 0;
    e.mc_backgroundEdgeTop.y = s;
    s += e.mc_backgroundEdgeTop.height;
    var l = m.CastleComponent.textFieldManager.registerTextField(e.txt_title, new r.TextVO(t), new o.InternalGGSTextFieldConfigVO(true));
    l.y = s + RelicEquipmentInfoComponent.ELEMENT_PADDING_Y;
    l.height = l.textHeight;
    e.mc_backgroundTitle.y = s;
    e.mc_backgroundTitle.height = RelicEquipmentInfoComponent.ELEMENT_PADDING_Y * 2 + l.textHeight;
    s += e.mc_backgroundTitle.height - 1;
    if (e.mc_backgroundLineTitle) {
      e.mc_backgroundLineTitle.y = s;
      s += e.mc_backgroundLineTitle.height - 2;
    }
    (l = m.CastleComponent.textFieldManager.registerTextField(e.txt_desc, new r.TextVO(i), new o.InternalGGSTextFieldConfigVO(true))).height = l.textHeight;
    l.y = s + RelicEquipmentInfoComponent.ELEMENT_PADDING_Y;
    e.mc_backgroundDesc.y = s;
    e.mc_backgroundDesc.height = RelicEquipmentInfoComponent.ELEMENT_PADDING_Y * 2 + l.textHeight;
    s += e.mc_backgroundDesc.height - 2;
    if (e.mc_backgroundLineDesc) {
      e.mc_backgroundLineDesc.y = s;
      s += e.mc_backgroundLineDesc.height;
    }
    (l = m.CastleComponent.textFieldManager.registerTextField(e.mc_sell.txt_text, new r.TextVO(a), new o.InternalGGSTextFieldConfigVO(true))).height = l.textHeight;
    e.mc_sell.y = s + RelicEquipmentInfoComponent.ELEMENT_PADDING_Y;
    e.mc_backgroundSell.y = s;
    e.mc_backgroundSell.height = RelicEquipmentInfoComponent.ELEMENT_PADDING_Y * 2 + e.mc_sell.height;
    s += e.mc_backgroundSell.height - 2;
    L.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new d.CollectableRenderClips(e.mc_sell.mc_icon).addIconMc(e.mc_sell.mc_icon), T.CollectableHelper.createVO(n.type, 0, n.id), new p.CollectableRenderOptions(p.CollectableRenderOptions.ICON, new y(20, 20)));
    e.mc_sell.mc_icon.y = l.y + l.height * 0.5;
    e.mc_backgroundEdgeBottom.y = s;
  };
  RelicEquipmentInfoComponent.prototype.addElementHeader = function (e, t = null) {
    var i = this.addElement(O.RelicEquipmentInfoElementEnum.HEADER);
    m.CastleComponent.textFieldManager.registerTextField(i.txt_text, new l.LocalizedTextVO(e, t), new o.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
    return i;
  };
  RelicEquipmentInfoComponent.prototype.addElementEffect = function (e, t) {
    var i = this.addElement(O.RelicEquipmentInfoElementEnum.EFFECT_ITEM);
    var n = m.CastleComponent.textFieldManager.registerTextField(i.txt_text, new r.TextVO(e.descriptionText), new o.InternalGGSTextFieldConfigVO(true));
    n.height = n.textHeight;
    i.mc_background.height = RelicEquipmentInfoComponent.ELEMENT_PADDING_Y * 2 + n.textHeight;
    var a = u.int(h.CastleModel.equipData.relicXml.getStarRating(e.power));
    var s = 0;
    var l = 0;
    var c = 0;
    if (a >= 7) {
      s = l = c = 4;
    } else if (a >= 4) {
      s = 3;
      l = a >= 5 ? 3 : 2;
      c = a >= 6 ? 3 : 2;
    } else {
      s = 2;
      l = a >= 2 ? 2 : 1;
      c = a >= 3 ? 2 : 1;
    }
    i.mc_rating.mc_star0.gotoAndStop(s);
    i.mc_rating.mc_star1.gotoAndStop(l);
    i.mc_rating.mc_star2.gotoAndStop(c);
    i.mc_rating.y = i.mc_background.height * 0.5;
    return i;
  };
  RelicEquipmentInfoComponent.prototype.addElementGemSocket = function () {
    var e = this.addElement(O.RelicEquipmentInfoElementEnum.GEM_SOCKET);
    m.CastleComponent.textFieldManager.registerTextField(e.txt_text, new l.LocalizedTextVO("relicequip_dialog_emptyGemSocket_name"), new o.InternalGGSTextFieldConfigVO(true)).verticalAlign = f.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    return e;
  };
  RelicEquipmentInfoComponent.prototype.addElementText = function (e) {
    var t = this.addElement(O.RelicEquipmentInfoElementEnum.TEXT);
    var i = m.CastleComponent.textFieldManager.registerTextField(t.txt_text, new r.TextVO(e), new o.InternalGGSTextFieldConfigVO(true));
    i.height = i.textHeight;
    t.mc_background.height = RelicEquipmentInfoComponent.ELEMENT_PADDING_Y * 2 + i.textHeight;
    return t;
  };
  RelicEquipmentInfoComponent.prototype.addElementEffectUndefined = function (e) {
    var t = this.addElement(O.RelicEquipmentInfoElementEnum.EFFECT_ITEM_UNDEFINED);
    var i = m.CastleComponent.textFieldManager.registerTextField(t.txt_text, new r.TextVO(e.getUndefinedDescriptionText()), new o.InternalGGSTextFieldConfigVO(true));
    var n = m.CastleComponent.textFieldManager.registerTextField(t.txt_value, new r.TextVO(e.getUndefinedValueText()), new o.InternalGGSTextFieldConfigVO(true));
    var a = s.MathBase.max(i.textHeight, n.textHeight);
    i.height = a;
    n.height = a;
    t.mc_background.height = RelicEquipmentInfoComponent.ELEMENT_PADDING_Y * 2 + a;
    t.mc_valueBackground.height = a;
    return t;
  };
  RelicEquipmentInfoComponent.prototype.addElementSubHeader = function (e) {
    var t = this.addElement(O.RelicEquipmentInfoElementEnum.HEADER_SUB);
    m.CastleComponent.textFieldManager.registerTextField(t.txt_text, new l.LocalizedTextVO(e), new o.InternalGGSTextFieldConfigVO(true));
    return t;
  };
  RelicEquipmentInfoComponent.prototype.setupElementsEffects = function (e, t) {
    var i = e.isRelicDefined();
    var n = i ? e.getCategorisedEffectsDefined() : e.getCategorisedEffectsUndefined();
    var o = t == C.BasicEquippableVO.SLOT_TYPE_GEM ? RelicEquipmentInfoComponent.CATEGORY_PREFIX_GEM : RelicEquipmentInfoComponent.CATEGORY_PREFIX_EQUIPMENT;
    var a = u.int(this.getEnchantmentLevelBySlotType(t));
    var s = "relicequip_dialog_primaryEffects_title";
    if (t == C.BasicEquippableVO.SLOT_TYPE_HERO) {
      s = "relicequip_dialog_heroEffects_title";
    } else if (t == C.BasicEquippableVO.SLOT_TYPE_GEM) {
      s = "relicequip_dialog_gemEffects_title";
    }
    if (n != null) {
      for (var r = 0, l = n; r < l.length; r++) {
        var d = l[r];
        if (d !== undefined) {
          this.startNewCategory(o + RelicEquipmentInfoComponent.CATEGORY_PREFIX_EFFECTS + d.categoryType);
          if (d.categoryType == _.XmlRelicEffectVO.EFFECT_TYPE_NORMAL) {
            if (a > 0) {
              this.addElementHeader("dialog_relicEnchanter_stats_effectTitleLevel", [s, a]);
            } else {
              this.addElementHeader(s);
            }
          } else {
            this.addElementHeader("relicequip_dialog_" + d.categoryType + "Effects_title");
          }
          if (!i && d.effects.length > 0) {
            this.addElementSubHeader("relicequip_dialog_predefinedEffect_title");
          }
          for (var p = 0, h = d.effects; p < h.length; p++) {
            var g = h[p];
            if (g !== undefined) {
              if (i) {
                this.addElementEffect(g, t);
              } else {
                this.addElementEffectUndefined(g);
              }
            }
          }
          if (!i && d.numberOfUnknownEffects > 0) {
            this.addElementSubHeader("relicequip_dialog_randomizedEffect_title");
            this.addElementText(c.Localize.text("relicequip_dialog_randomizedEffectMultiple_desc", [d.numberOfUnknownEffects]));
          }
          this.onEffectCategoryAdded(d.categoryType, t);
        }
      }
    }
  };
  RelicEquipmentInfoComponent.prototype.getCurrentElementsWidth = function () {
    var e = 0;
    if (this._currentElements != null) {
      for (var t = 0, i = this._currentElements; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.clip.width > e) {
          e = n.clip.width;
        }
      }
    }
    return e;
  };
  RelicEquipmentInfoComponent.prototype.getEnchantmentLevelBySlotType = function (e) {
    var t = this.vo;
    if (t) {
      if (e == C.BasicEquippableVO.SLOT_TYPE_GEM && t.gemVO) {
        return u.int(t.gemVO.enchantmentLevel);
      } else {
        return u.int(t.enchantmentLevel);
      }
    }
    var i = this.vo;
    if (i) {
      return i.enchantmentLevel;
    } else {
      return 0;
    }
  };
  RelicEquipmentInfoComponent.prototype.getCategoryYPosition = function (e) {
    if (this._currentElements != null) {
      for (var t = 0, i = this._currentElements; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.category == e) {
          return n.clip.getBounds(this._disp).y;
        }
      }
    }
    return 0;
  };
  RelicEquipmentInfoComponent.prototype.onLoaded = function (e) {
    e.clipLoaded.remove(this.bindFunction(this.onLoaded));
    this.clearElements();
    this._isLoaded = true;
    this.update();
  };
  RelicEquipmentInfoComponent.prototype.onEffectCategoryAdded = function (e, t) {};
  Object.defineProperty(RelicEquipmentInfoComponent.prototype, "vo", {
    get: function () {
      return this._vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicEquipmentInfoComponent.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicEquipmentInfoComponent.prototype, "isLoaded", {
    get: function () {
      return this._isLoaded;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicEquipmentInfoComponent.prototype, "hideTitle", {
    get: function () {
      return this._hideTitle;
    },
    enumerable: true,
    configurable: true
  });
  RelicEquipmentInfoComponent.ASSET_NAME = "RelicEquipmentInfo";
  RelicEquipmentInfoComponent.CATEGORY_PREFIX_EQUIPMENT = "equipment_";
  RelicEquipmentInfoComponent.CATEGORY_PREFIX_GEM = "gem_";
  RelicEquipmentInfoComponent.CATEGORY_PREFIX_EFFECTS = "effects_";
  RelicEquipmentInfoComponent.ELEMENT_PADDING_Y = 2;
  return RelicEquipmentInfoComponent;
}(m.CastleComponent);
exports.RelicEquipmentInfoComponent = D;
a.classImplementsInterfaces(D, "ICollectableRendererList");
var I = require("./12.js");
var T = require("./45.js");
var v = require("./74.js");
var S = require("./46.js");
var A = require("./906.js");
var L = require("./25.js");
var P = require("./2225.js");
var M = require("./1.js");