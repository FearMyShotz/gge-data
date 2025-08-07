Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./49.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./31.js");
var d = require("./19.js");
var p = require("./13.js");
var h = require("./4.js");
var g = require("./20.js");
var C = require("./82.js");
var _ = require("./47.js");
var m = require("./59.js");
var f = require("./1173.js");
var O = require("./11.js");
var E = require("./291.js");
var y = require("./25.js");
var b = require("./145.js");
var D = require("./46.js");
var I = createjs.Point;
var T = function (e) {
  function CastleBuildingInfoDialog() {
    var t = this;
    t._currentBuildingLevels = [];
    t._currentBuildingIndex = 0;
    t._scrollY = 0;
    t._scrollHeight = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleBuildingInfoDialog.NAME) || this;
  }
  n.__extends(CastleBuildingInfoDialog, e);
  CastleBuildingInfoDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    o.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.mc_buildingLevels.btn_left, this.dialogDisp.mc_buildingLevels.btn_right], g.ClickFeedbackButtonHover);
    this.dialogDisp.mc_target.toolTipText = "target";
    this.dialogDisp.mc_source.toolTipText = "source";
    this.dialogDisp.mc_unique.toolTipText = "uniqueDeco";
    this.dialogDisp.mc_effectBuilding.toolTipText = "dialog_effectBuildings_effectDecoIcon_tooltip";
    this.dialogDisp.mc_fusionLevel.toolTipText = "fusionLevel";
    this.dialogDisp.mc_relic.toolTipText = "filter_decoType_onlyRelics";
    this.dialogDisp.mc_fusionLevel.mouseChildren = false;
    for (var i = 0; i < CastleBuildingInfoDialog.NUMBER_OF_DEFAULT_EFFECT_MCS; ++i) {
      this.getDefaultEffectMc(i).mouseChildren = false;
    }
    for (i = 0; i < CastleBuildingInfoDialog.NUMBER_OF_ADDITIONAL_EFFECT_MCS; ++i) {
      this.getAdditionalEffectMc(i).mouseChildren = false;
    }
    this.itxtInfo = this.textFieldManager.registerTextField(this.dialogDisp.mc_content.txt_info, new l.LocalizedTextVO(""));
    this.itxtCondition = this.textFieldManager.registerTextField(this.dialogDisp.mc_content.txt_effectCondition, new l.LocalizedTextVO(""));
    var n = new _.SimpleScrollVO().initByParent(this.dialogDisp.mc_slider).addMouseWheelElements([this.dialogDisp]);
    var a = new m.DynamicSizeScrollStrategyVertical(false, this.dialogDisp.mc_content.mask.height, true);
    this._scrollComponent = new C.ModernSliderScrollComponent(n, a, true);
    this._scrollY = this.dialogDisp.mc_content.y;
  };
  CastleBuildingInfoDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.initBuildingLevels();
    this.updateAllInfos();
    this._scrollComponent.init(0, Math.max(0, this._scrollHeight - this.dialogDisp.mc_content.mask.height), 30, 30);
    this._scrollComponent.show();
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
  };
  CastleBuildingInfoDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    if (this._scrollComponent) {
      this._scrollComponent.scrollToValue(0);
      this._scrollComponent.hide();
      this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    }
  };
  CastleBuildingInfoDialog.prototype.initBuildingLevels = function () {
    this._currentBuildingLevels = [];
    if (this.dialogProperties.buildingVO.getUpgradeVO() || this.dialogProperties.buildingVO.getDowngradeVO()) {
      for (var e = this.dialogProperties.buildingVO; e;) {
        this._currentBuildingLevels.push(e);
        e = e.getUpgradeVO();
      }
      for (var t = this.dialogProperties.buildingVO.getDowngradeVO(); t;) {
        this._currentBuildingLevels.unshift(t);
        t = t.getDowngradeVO();
      }
      this._currentBuildingIndex = c.int(Math.max(0, this._currentBuildingLevels.indexOf(this.dialogProperties.buildingVO)));
    } else {
      this._currentBuildingIndex = 0;
    }
  };
  CastleBuildingInfoDialog.prototype.updateAllInfos = function () {
    this.updateTextInfos();
    this.updateIcon();
    this.updateFusionInfos();
    this.updateEffectItems(this.getDefaultEffectItemVOs(), this.dialogDisp.mc_content.mc_effects, CastleBuildingInfoDialog.NUMBER_OF_DEFAULT_EFFECT_MCS);
    this.updateEffectItems(this.getAdditionalEffectItemVOs(), this.dialogDisp.mc_content.mc_buildingEffects, CastleBuildingInfoDialog.NUMBER_OF_ADDITIONAL_EFFECT_MCS);
    this.updateEffectCondition();
    this.updateBuildingLevelInfo();
    this.layoutContent();
    this.dialogDisp.mc_effectBuilding.visible = this.getAdditionalEffectItemVOs().length > 0;
    this.dialogDisp.mc_relic.visible = this.getCurrentRelevantBuildingVO().isRelicBuilding;
  };
  CastleBuildingInfoDialog.prototype.updateTextInfos = function () {
    var e = this.getCurrentRelevantBuildingVO();
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.TextVO(p.TextHelper.toUpperCaseLocaSafeTextId(e.getNameString()))).autoFitToBounds = true;
    this.itxtInfo.textContentVO.textId = e.getShortInfoString();
  };
  CastleBuildingInfoDialog.prototype.updateIcon = function () {
    var e = new E.CollectableItemBuildingVO();
    e.buildingVO = this.getCurrentRelevantBuildingVO();
    this._buildingClip = y.CollectableRenderHelper.displaySingleItemComplete(this, new u.CollectableRenderClips(this.dialogDisp.mc_icon), e, new d.CollectableRenderOptions(d.CollectableRenderOptions.SET_ICON, new I(150, 180)));
    var t = this._buildingClip.itemVE.dispCreator.dispContainer.children[0] ? this._buildingClip.itemVE.dispCreator.dispContainer.children[0] : null;
    if (t && e.buildingVO.hasFlag) {
      if (t.isLoaded) {
        this.addExtraClips();
      } else {
        t.doWhenLoaded(this.bindFunction(this.addExtraClips));
      }
    }
  };
  CastleBuildingInfoDialog.prototype.addExtraClips = function () {
    if (this._buildingClip.itemVE) {
      this.addFlagToPlaceholder(this._buildingClip.itemVE.dispCreator.dispContainer);
    }
  };
  CastleBuildingInfoDialog.prototype.addFlagToPlaceholder = function (e) {
    if (e.children) {
      var t = undefined;
      for (var i = 0; i < e.children.length; i++) {
        if ((t = e.children[i]).flagHolder) {
          var n;
          for (var o = 0; o < t.children.length; o++) {
            if (t.children[o] && t.children[o].name == "flagHolder") {
              var a = this.createAdditionalClip(b.IsoAdditionalClipEnum.FLAG);
              t.children[o].addChild(a.asDisplayObject());
              n = true;
            }
          }
          if (n && t.parent && t.parent.cacheCanvas) {
            t.parent.updateCache();
          }
        } else {
          this.addFlagToPlaceholder(t);
        }
      }
    }
  };
  CastleBuildingInfoDialog.prototype.createAdditionalClip = function (e) {
    var t = D.IsoHelper.view.getAssetFileURL(e.assetAndClipName);
    var i = a.GoodgameBitmapEngine.clipFactory.getExternalClipSource(e.assetAndClipName, t, this.getFlagClipColor(), null, null, false);
    return new a.GoodgameBitmapClipExternal(i, 12, D.IsoHelper.view.areAnimationsActive);
  };
  CastleBuildingInfoDialog.prototype.getFlagClipColor = function () {
    var e = [];
    var t = h.CastleModel.userData.playerCrest;
    if (t) {
      e.push(new a.ClipColor("flag", t.colorsFour));
      return e;
    } else {
      return e;
    }
  };
  CastleBuildingInfoDialog.prototype.updateFusionInfos = function () {
    var e = this.getCurrentRelevantBuildingVO();
    if (this.hasFusionInfo()) {
      var t = e.fusionInfoVO;
      this.dialogDisp.mc_target.visible = t.isFusionTarget;
      this.dialogDisp.mc_source.visible = t.isFusionSource;
      this.dialogDisp.mc_unique.visible = e.isUnique();
      this.dialogDisp.mc_fusionLevel.visible = t.isFusionSource || t.isFusionTarget;
      this.textFieldManager.registerTextField(this.dialogDisp.mc_fusionLevel.txt_level, new l.LocalizedNumberVO(t.getCurrentLevel()));
    } else {
      this.dialogDisp.mc_target.visible = false;
      this.dialogDisp.mc_source.visible = false;
      this.dialogDisp.mc_unique.visible = false;
      this.dialogDisp.mc_fusionLevel.visible = false;
    }
  };
  CastleBuildingInfoDialog.prototype.updateEffectItems = function (e, t, i) {
    t.visible = e.length > 0;
    if (t.visible) {
      for (var n = 0; n < i; ++n) {
        var o = this.getEffectMc(n, t);
        var s = n < e.length ? e[n] : null;
        if (s) {
          o.visible = true;
          this.textFieldManager.registerTextField(o.txt_value, s.textVO).autoFitToBounds = true;
          o.toolTipText = s.tooltipText;
          a.MovieClipHelper.replaceMovieClip(o.mc_icon, s.iconClass);
          a.MovieClipHelper.scaleToFit(o.mc_icon, 25, 25);
        } else {
          o.visible = false;
        }
      }
    }
  };
  CastleBuildingInfoDialog.prototype.updateBuildingLevelInfo = function () {
    var e = this.getCurrentRelevantBuildingVO();
    var t = !this.hasFusionInfo() && !s.instanceOfClass(e, "ADecoBuildingVO");
    this.dialogDisp.mc_buildingLevels.visible = t;
    if (t) {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_buildingLevels.txt_level, new l.LocalizedNumberVO(e.level));
      this.dialogDisp.mc_buildingLevels.btn_left.visible = this._currentBuildingIndex > 0;
      this.dialogDisp.mc_buildingLevels.btn_right.visible = this._currentBuildingIndex < this._currentBuildingLevels.length - 1;
    }
  };
  CastleBuildingInfoDialog.prototype.updateEffectCondition = function () {
    this.itxtCondition.textContentVO.textId = "";
    this.dialogDisp.mc_content.txt_effectCondition.visible = this.itxtCondition.textContentVO.textId != "";
  };
  CastleBuildingInfoDialog.prototype.scrollBuildingLevel = function (e) {
    var t = c.int(a.MathBase.clamp(this._currentBuildingIndex + e, 0, this._currentBuildingLevels.length - 1));
    if (t != this._currentBuildingIndex) {
      this._currentBuildingIndex = t;
      this.updateAllInfos();
    }
  };
  CastleBuildingInfoDialog.prototype.layoutContent = function () {
    var e = this.dialogDisp.mc_content;
    e.mc_buildingEffects.y = 0;
    this.itxtCondition.y = 0;
    var t = this.itxtInfo.textHeight;
    if (e.mc_buildingEffects.visible) {
      t += 10;
      e.mc_buildingEffects.y = t;
      t += e.mc_buildingEffects.height;
    }
    if (this.itxtCondition.visible) {
      t += 6;
      this.itxtCondition.y = t;
      t += this.itxtCondition.textHeight;
    }
    t += 10;
    e.mc_effects.y = t;
    var i = 3 + Math.ceil(this.getDefaultEffectItemVOs().length / 3) * 30;
    this._scrollHeight = t + i + 2;
  };
  CastleBuildingInfoDialog.prototype.getEffectMc = function (e, t) {
    return t.getChildByName("mc_value" + e);
  };
  CastleBuildingInfoDialog.prototype.getAdditionalEffectMc = function (e) {
    return this.getEffectMc(e, this.dialogDisp.mc_content.mc_buildingEffects);
  };
  CastleBuildingInfoDialog.prototype.getDefaultEffectMc = function (e) {
    return this.getEffectMc(e, this.dialogDisp.mc_content.mc_effects);
  };
  CastleBuildingInfoDialog.prototype.getCurrentRelevantBuildingVO = function () {
    if (s.instanceOfClass(this.dialogProperties.buildingVO, "ADecoBuildingVO") || this._currentBuildingLevels.length <= 0) {
      return this.dialogProperties.buildingVO;
    } else {
      return this._currentBuildingLevels[this._currentBuildingIndex];
    }
  };
  CastleBuildingInfoDialog.prototype.getDefaultEffectItemVOs = function () {
    var e = this.getCurrentRelevantBuildingVO();
    var t = s.instanceOfClass(e, "AEffectBuildingVO") ? e.infoDialogVO : null;
    var i = [];
    if (t) {
      for (var n = 0, o = t.items; n < o.length; n++) {
        var r = o[n];
        if (r !== undefined && r.isVisibleInInfoDialog) {
          i.push(r);
        }
      }
    }
    if (i.length < CastleBuildingInfoDialog.NUMBER_OF_DEFAULT_EFFECT_MCS && e.xp > 0) {
      (r = new f.CastleMultiBuildingInfoPanelItemVO()).textVO = new l.LocalizedTextVO(a.GenericTextIds.VALUE_NOMINAL_ADD, [e.xp]);
      r.tooltipText = h.CastleModel.userData.isLegend ? "dialog_buildingInfo_xp_legend" : "dialog_buildingInfo_xp";
      r.iconClass = h.CastleModel.userData.isLegend ? Library.CastleInterfaceElements.Icon_XP_Legend : Library.CastleInterfaceElements.Icon_XP;
      r.isVisibleInInfoDialog = true;
      i.push(r);
    }
    if (i.length < CastleBuildingInfoDialog.NUMBER_OF_DEFAULT_EFFECT_MCS && e.mightValue > 0) {
      (r = new f.CastleMultiBuildingInfoPanelItemVO()).textVO = new l.LocalizedNumberVO(e.mightValue);
      r.tooltipText = "dialog_buildingInfo_might";
      r.iconClass = Library.CastleInterfaceElements.Icon_Might_starOnly;
      r.isVisibleInInfoDialog = true;
      i.push(r);
    }
    return i;
  };
  CastleBuildingInfoDialog.prototype.getAdditionalEffectItemVOs = function () {
    var e = this.getCurrentRelevantBuildingVO();
    var t = s.instanceOfClass(e, "AEffectBuildingVO") ? e.infoDialogVO : null;
    var i = [];
    if (t) {
      for (var n = 0, o = t.items; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined && a.isAdditionalEffect) {
          i.push(a);
        }
      }
    }
    return i;
  };
  CastleBuildingInfoDialog.prototype.hasFusionInfo = function () {
    var e = this.getCurrentRelevantBuildingVO();
    return s.instanceOfClass(e, "ADecoBuildingVO") && e.isFusionRelevant();
  };
  CastleBuildingInfoDialog.prototype.onScroll = function () {
    this.dialogDisp.mc_content.y = this._scrollY - this._scrollComponent.currentValue;
  };
  CastleBuildingInfoDialog.prototype.onClick = function (t) {
    if (o.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.mc_buildingLevels.btn_left:
          this.scrollBuildingLevel(-1);
          break;
        case this.dialogDisp.mc_buildingLevels.btn_right:
          this.scrollBuildingLevel(1);
      }
    }
  };
  Object.defineProperty(CastleBuildingInfoDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleBuildingInfoDialog.NAME = "CastleBuildingInfoEx_Nov23";
  CastleBuildingInfoDialog.NUMBER_OF_DEFAULT_EFFECT_MCS = 9;
  CastleBuildingInfoDialog.NUMBER_OF_ADDITIONAL_EFFECT_MCS = 3;
  return CastleBuildingInfoDialog;
}(O.CastleExternalDialog);
exports.CastleBuildingInfoDialog = T;
s.classImplementsInterfaces(T, "ICollectableRendererList");