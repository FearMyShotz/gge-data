Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./5.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./3.js");
var g = require("./16.js");
var C = require("./85.js");
var _ = require("./4.js");
var m = require("./14.js");
var f = require("./2007.js");
var O = require("./1167.js");
var E = require("./41.js");
var y = require("./185.js");
var b = require("./290.js");
var D = require("./19.js");
var I = createjs.Container;
var T = createjs.Point;
var v = function (e) {
  function ACollectableItemVE() {
    var t = this;
    t._itemType = L.CollectableEnum.UNKNOWN;
    t._dispCreator = new b.DispCreatorComponent();
    t._triggerOnAllIconDispLoadedManually = false;
    t._scaleManually = false;
    t.isTouch = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(ACollectableItemVE, e);
  ACollectableItemVE.prototype.init = function (e, t) {
    this._vo = e;
    this._renderer = t;
    this._itemType = e.itemType;
    this.dispCreator.cacheDisp = false;
    this.initIconContainer();
    this.dispCreator.init(this.iconContainer);
  };
  ACollectableItemVE.prototype.initIconContainer = function () {
    this._iconContainer = new I();
    var e = r.getQualifiedClassName(this);
    this.iconContainer.name = e.slice(e.lastIndexOf(":") + 1);
    this.iconContainer.mouseChildren = false;
  };
  ACollectableItemVE.prototype.destroyIconContainer = function () {
    if (this.iconContainer) {
      this.iconContainer.removeChildren();
      if (this.iconContainer.parent) {
        this.iconContainer.parent.removeChild(this.iconContainer);
      }
      this._iconContainer = null;
    }
  };
  ACollectableItemVE.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this.dispCreator.onLoadedSignal.removeAll();
  };
  ACollectableItemVE.prototype.updateIconDimension = function () {
    if (!this._scaleManually) {
      var e = this.iconGetDimension();
      E.CastleMovieClipHelper.scaleAndCacheWithAntiAliasing(this._dispCreator.dispContainer, e);
    }
    this._iconContainer.visible = true;
  };
  ACollectableItemVE.prototype.iconUpdate = function () {
    if (this.iconContainer) {
      this._iconContainer.x = this._iconContainer.y = 0;
      this._iconContainer.visible = false;
      this.iconDestroy();
      this.dispCreator.switchCreationState(true);
      this.iconCreate();
      if (!this.triggerOnAllIconDispLoadedManually) {
        this.dispCreator.onLoadedSignal.add(this.bindFunction(this.onAllDispClipsLoaded));
      }
      this.dispCreator.switchCreationState(false);
    }
  };
  ACollectableItemVE.prototype.iconCreate = function () {};
  ACollectableItemVE.prototype.iconDestroy = function () {
    this.dispCreator.reset();
    this._iconContainer.x = this._iconContainer.y = 0;
  };
  ACollectableItemVE.prototype.iconGetDimension = function () {
    var e = this.dispCreator.dispContainer;
    var t = new T();
    if (e.width == 0 && e.height == 0 && e.children.length > 0 && l.instanceOfClass(e.children[0], "BaseContentReplacer")) {
      var i = e.children[0];
      t.x = i.getOriginWidth();
      t.y = i.getOriginHeight();
      i.addEventListener(f.MCReplacer.MC_REPLACER_DONE, this.bindFunction(this.onContentReplacerDone));
    } else {
      t.x = e.width;
      t.y = e.height;
    }
    var n = 1;
    if (this.itemType != L.CollectableEnum.BOOSTER || this.options.icon.useSmallBoosterIcons) {
      var o = this.options.icon.dimension.y / t.y;
      var a = this.options.icon.dimension.x / t.x;
      if (o < a) {
        n = o;
      } else if (a <= o) {
        n = a;
      }
    } else {
      n = this.options.icon.dimension.x / t.x;
    }
    var s = this._renderer.getRenderer(D.CollectableRenderOptions.ICON_TRANSFORM);
    return n *= s ? s.transform.scale : 1;
  };
  ACollectableItemVE.prototype.onContentReplacerDone = function (e) {
    this.updateIconDimension();
    if (this.dispCreator.dispContainer.children.length > 0 && this.dispCreator.dispContainer.children[0]) {
      this.dispCreator.dispContainer.children[0].removeEventListener(f.MCReplacer.MC_REPLACER_DONE, this.bindFunction(this.onContentReplacerDone));
    }
  };
  ACollectableItemVE.prototype.textfieldUpdate = function () {
    this.textfieldSetText(this.vo.getTextfieldText());
  };
  ACollectableItemVE.prototype.textfieldSetText = function (e) {
    m.CastleComponent.textFieldManager.registerTextField(this.renderer.clips.textfield, new h.TextVO(e), new a.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = this.renderer.options.textfield.useAutoFitToBounds;
  };
  ACollectableItemVE.prototype.textfieldSetTextAsNumber = function (e) {
    m.CastleComponent.textFieldManager.registerTextField(this.renderer.clips.textfield, new d.LocalizedNumberVO(e, this.options.textfield.useKiloAbbreviationForAmount), new a.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = this.renderer.options.textfield.useAutoFitToBounds;
  };
  ACollectableItemVE.prototype.textfieldBackgroundVisible = function () {
    return false;
  };
  ACollectableItemVE.prototype.tooltipUpdate = function () {
    var e = this.renderer.clips.getTooltipTargetMc();
    if (e) {
      e.mouseChildren = false;
      e.toolTipText = this.tooltipCreate();
    }
  };
  ACollectableItemVE.prototype.tooltipCreate = function () {
    return this.tooltipCreateByTextId(this.vo.getTooltipTextId());
  };
  ACollectableItemVE.prototype.tooltipShowAdvanced = function () {
    if (this.isTouch) {
      this.isTouch = false;
      var e = this.renderer.clips.getTooltipTargetMc();
      if (e && e.toolTipText) {
        M.CastleLayoutManager.getInstance().tooltipManager.show(e.toolTipText, e);
      }
    }
  };
  ACollectableItemVE.prototype.tooltipCreateByAmount = function (e) {
    var t = u.Localize.text(e);
    t = this.renderer.options.tooltip.useAmount ? u.Localize.text("generic_amount_reward", [new d.LocalizedNumberVO(this.vo.amount), t]) : t;
    return t = this.vo.grantType == c.RewardConst.ALLIANCE ? u.Localize.text(o.GenericTextIds.VALUE_ASSIGN_COLON, ["reward_forAllianceFunds", t]) : t;
  };
  ACollectableItemVE.prototype.tooltipCreateByTextId = function (e) {
    if (!e || e == "") {
      return null;
    }
    var t = u.Localize.text(e);
    return t = this.vo.grantType == c.RewardConst.ALLIANCE ? u.Localize.text(o.GenericTextIds.VALUE_ASSIGN_COLON, ["reward_forAllianceFunds", t]) : t;
  };
  ACollectableItemVE.prototype.costTextfieldUpdate = function () {};
  ACollectableItemVE.prototype.costTextfieldSetAsAmountAndStorage = function () {
    var e;
    var t = new C.CastleLocalizedNumberVO(this.vo.amount, this.options.costTextfield.useMillionAbbreviationForAmount ? {
      compactThreshold: 1000000
    } : null);
    e = this.options.costTextfield.usePlusOnPositiveValues && this.vo.amount >= 0 ? m.CastleComponent.textFieldManager.registerTextField(this.renderer.clips.textfield, new p.LocalizedTextVO(o.GenericTextIds.VALUE_NOMINAL_ADD, [t]), new a.InternalGGSTextFieldConfigVO(true)) : m.CastleComponent.textFieldManager.registerTextField(this.renderer.clips.textfield, t, new a.InternalGGSTextFieldConfigVO(true));
    if (this.options.costTextfield.showAvailableStorage) {
      var i = new P.CollectableTypeVO().initByCollectable(this.vo);
      var n = new C.CastleLocalizedNumberVO(A.CostHelper.getAvailableGoods(i), this.options.costTextfield.useMillionAbbreviationForAmount ? {
        compactThreshold: 1000000
      } : null);
      e.text = u.Localize.text(o.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [t.numberValue, n.numberValue]);
    }
    if (!!this.options.costTextfield.enableMarkOnNotEnough && !this.options.costTextfield.usePlusOnPositiveValues && (this.options.costTextfield.useOtherResourceStorage ? A.CostHelper.getAvailableGoodsFromCollectableList(this.options.costTextfield.useOtherResourceStorage, new P.CollectableTypeVO().initByCollectable(this.vo)) < this.vo.amount : !!_.CastleModel.areaData.activeArea && !!_.CastleModel.areaData.activeArea.isMyArea && A.CostHelper.getAvailableGoods(new P.CollectableTypeVO().initByCollectable(this.vo)) < this.vo.amount)) {
      e.color = g.ClientConstColor.FONT_INSUFFICIENT_COLOR;
    } else {
      y.SubscriptionHelper.showSubscriptionStarToTextField(e, this.vo.isSubscriptionBuffed, 15, new T(-5, 0), this.vo.useSubscriptionStar, this.options.costTextfield.defaultColor);
    }
  };
  ACollectableItemVE.prototype.onAllDispClipsLoaded = function (e = null) {
    this.dispCreator.onLoadedSignal.remove(this.bindFunction(this.onAllDispClipsLoaded));
    this.updateIconDimension();
    if (this.onIconDispLoaded) {
      this.onIconDispLoaded();
    }
    if (this.dispCreator.dispContainer.parent) {
      E.CastleMovieClipHelper.updateParentCache(this.dispCreator.dispContainer.parent);
    }
  };
  ACollectableItemVE.prototype.onInfoButtonClicked = function () {
    m.CastleComponent.layoutManager.showDialog(S.CastleRewardInfoDialog, new O.CastleRewardInfoDialogProperties(this.vo));
  };
  Object.defineProperty(ACollectableItemVE.prototype, "itemType", {
    get: function () {
      return this._itemType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollectableItemVE.prototype, "vo", {
    get: function () {
      return this._vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollectableItemVE.prototype, "iconContainer", {
    get: function () {
      return this._iconContainer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollectableItemVE.prototype, "dispCreator", {
    get: function () {
      return this._dispCreator;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollectableItemVE.prototype, "onIconDispLoaded", {
    get: function () {
      return this._onIconDispLoaded;
    },
    set: function (e) {
      this._onIconDispLoaded = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollectableItemVE.prototype, "triggerOnAllIconDispLoadedManually", {
    get: function () {
      return this._triggerOnAllIconDispLoadedManually;
    },
    set: function (e) {
      this._triggerOnAllIconDispLoadedManually = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollectableItemVE.prototype, "renderer", {
    get: function () {
      return this._renderer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollectableItemVE.prototype, "options", {
    get: function () {
      if (this.renderer) {
        return this.renderer.options;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollectableItemVE.prototype, "scaleManually", {
    get: function () {
      return this._scaleManually;
    },
    set: function (e) {
      this._scaleManually = e;
    },
    enumerable: true,
    configurable: true
  });
  ACollectableItemVE.prototype.storageBarScale = function () {
    return 0;
  };
  return ACollectableItemVE;
}(m.CastleComponent);
exports.ACollectableItemVE = v;
var S = require("./1168.js");
var A = require("./66.js");
var L = require("./12.js");
var P = require("./74.js");
var M = require("./17.js");
s.classImplementsInterfaces(v, "ICollectableRendererList");