Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./100.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./57.js");
var p = require("./179.js");
var h = require("./4.js");
var g = require("./68.js");
var C = require("./24.js");
var _ = require("./14.js");
var m = require("./40.js");
var f = require("./237.js");
var O = require("./164.js");
var E = createjs.MovieClip;
var y = function (e) {
  function GeneralSelectionItem(t, i = null, n = true, o = true, r = true, l = false, c = null, u = true, p = true, h = false, g = false) {
    var _ = e.call(this, new E()) || this;
    _.onFilled = new d.Signal();
    _._generalVO = t;
    _._showStarLevel = o;
    _._clickable = r;
    _._displayBlock = u;
    _._isOwnGeneral = p;
    _._forcedShowAsMoving = h;
    _._hideAllInfo = g || t && t.isNPCGeneral;
    if (c) {
      _.onFilled.add(c);
    }
    if (l) {
      a.MovieClipHelper.clearMovieClip(i);
    }
    if (i) {
      i.addChild(_.disp);
    }
    _._useToolTip = n;
    _._onClickSignal = new d.Signal();
    _._containerClip = new C.CastleGoodgameExternalClip(GeneralSelectionItem.CONTAINER_ASSET_NAME, s.BasicModel.basicLoaderData.getVersionedItemAssetUrl(GeneralSelectionItem.CONTAINER_ASSET_NAME), null, 0, false);
    _.disp.addChild(_._containerClip);
    _.disp.mouseChildren = false;
    _._containerClip.doWhenLoaded(function (e) {
      return _.fillItem();
    });
    _.onFilled.dispatch();
    return _;
  }
  n.__extends(GeneralSelectionItem, e);
  GeneralSelectionItem.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    if (this._containerClip.isLoaded) {
      this.updateItem();
    }
  };
  GeneralSelectionItem.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    h.CastleModel.generalsData.addEventListener(p.GeneralsEvent.GENERALS_UPDATED, this.bindFunction(this.onGeneralsUpdated));
    if (this._clickFeedBack && this._clickable) {
      this._clickFeedBack.addEventListener();
    }
  };
  GeneralSelectionItem.prototype.removeEventListener = function () {
    e.prototype.removeEventListener.call(this);
    h.CastleModel.generalsData.removeEventListener(p.GeneralsEvent.GENERALS_UPDATED, this.bindFunction(this.onGeneralsUpdated));
    if (this._clickFeedBack) {
      this._clickFeedBack.removeEventListener();
    }
    if (this.onClickSignal) {
      this.onClickSignal.removeAll();
    }
  };
  GeneralSelectionItem.prototype.onGeneralsUpdated = function (e) {
    if (this._containerClip.isLoaded) {
      this.updateItem();
    }
  };
  GeneralSelectionItem.prototype.fillItem = function () {
    this.containerMC.mc.mc_selected.visible = false;
    this.containerMC.mc.mc_selected_locked.visible = false;
    this.containerMC.mc.txt_progress.defaultCacheScale = 2;
    this.containerMC.mc_inMovement.visible = false;
    this.updateItem();
    this.setSelected(false);
  };
  GeneralSelectionItem.prototype.fillIcon = function () {
    var e;
    var t = this;
    var i = this.generalVO ? this.generalVO.generalID : -1;
    e = this.generalVO === undefined ? GeneralSelectionItem.GENERAL_ICON_ASSET_PREFIX + GeneralSelectionItem.GENERAL_ICON_ASSET_UNKNOWN_SUFFIX : this.generalVO == null ? GeneralSelectionItem.GENERAL_ICON_ASSET_PREFIX + GeneralSelectionItem.GENERAL_ICON_ASSET_GENERIC_SUFFIX : this.generalVO.isImplemented ? GeneralSelectionItem.GENERAL_ICON_ASSET_PREFIX + i : GeneralSelectionItem.GENERAL_ICON_ASSET_PREFIX + i + GeneralSelectionItem.GENERAL_ICON_ASSET_PREVIEW_SUFFIX;
    var n = new C.CastleGoodgameExternalClip(e, s.BasicModel.basicLoaderData.getVersionedItemAssetUrl(e), null, 0, false);
    n.doWhenLoaded(function (e) {
      a.MovieClipHelper.clearMovieClip(t.containerMC.mc.mc_iconHolder);
      t.containerMC.mc.mc_iconHolder.addChild(n);
      t.containerMC.mc.mc_iconHolder.scaleX = t.containerMC.mc.mc_iconHolder.scaleY = 0.52;
      t.onFilled.dispatch();
    });
    a.MovieClipHelper.clearMovieClip(this.containerMC.mc.mc_lvl100_front);
    a.MovieClipHelper.clearMovieClip(this.containerMC.mc.mc_lvl100_back);
    if (this.generalVO && this.generalVO.currentStarLevel >= this.generalVO.maxStarLevel) {
      var o = "GeneralIcon100_front_" + this.generalVO.generalXmlVO.rarityString;
      var r = "GeneralIcon100_back_" + this.generalVO.generalXmlVO.rarityString;
      var l = new C.CastleGoodgameExternalClip(o, s.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Generals100_PortraisIcons"), null, 24, true);
      var c = new C.CastleGoodgameExternalClip(r, s.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Generals100_PortraisIcons"), null, 24, true);
      l.doWhenLoaded(function (e) {
        t.containerMC.mc.mc_lvl100_front.addChild(l);
        t.containerMC.mc.mc_lvl100_front.scaleX = t.containerMC.mc.mc_lvl100_front.scaleY = 0.5;
        e.currentshownDisplayObject.gotoAndPlay(1);
      });
      c.doWhenLoaded(function (e) {
        t.containerMC.mc.mc_lvl100_back.addChild(c);
        t.containerMC.mc.mc_lvl100_back.scaleX = t.containerMC.mc.mc_lvl100_back.scaleY = 0.5;
        e.currentshownDisplayObject.gotoAndPlay(1);
      });
    }
  };
  GeneralSelectionItem.prototype.initClickFeedback = function () {
    this.containerMC.mc.mc_hover.visible = false;
    this.containerMC.mc.mc_down.visible = false;
    this.containerMC.mc.mc_hover_locked.visible = false;
    this.containerMC.mc.mc_down_locked.visible = false;
    var e = this.generalVO && this.generalVO.isUnlocked ? this.containerMC.mc.mc_hover : this.containerMC.mc.mc_hover_locked;
    var t = this.generalVO && this.generalVO.isUnlocked ? this.containerMC.mc.mc_down : this.containerMC.mc.mc_down_locked;
    if (this._clickFeedBack) {
      this._clickFeedBack.removeEventListener();
    }
    this._clickFeedBack = new f.ClickFeedbackHoverBehaviour(this.disp, e, t);
    if (this._clickable) {
      this._clickFeedBack.addEventListener();
    }
  };
  GeneralSelectionItem.prototype.updateItem = function () {
    this._itxt_level = _.CastleComponent.textFieldManager.registerTextField(this.containerMC.mc.mc_level.txt_value, new u.NumberVO(1), new r.InternalGGSTextFieldConfigVO(true));
    this._itxt_progress = _.CastleComponent.textFieldManager.registerTextField(this.containerMC.mc.txt_progress, new c.LocalizedTextVO(o.GenericTextIds.VALUE_PROPORTIONAL_VALUE, null), new r.InternalGGSTextFieldConfigVO(true));
    this._itxt_progress.autoFitToBounds = true;
    this.fillIcon();
    this.initClickFeedback();
    this.updateFrame();
    this.updateLordIcon();
    this.updateLevel();
    this.updateIndicators();
    this.updateStars();
    this.updateShardProgress();
    this.updateToolTip();
    this.onFilled.dispatch();
  };
  GeneralSelectionItem.prototype.updateFrame = function () {
    var e = 1;
    if (this.generalVO && !this.generalVO.isNPCGeneral) {
      e = this.generalVO.generalRarityID + 1;
    }
    this.containerMC.mc.mc_frame.gotoAndStop(e);
  };
  GeneralSelectionItem.prototype.updateLordIcon = function () {
    var e = this.generalVO && this.generalVO.isUnlocked && !!this.generalVO.assignedLord;
    this.containerMC.mc.mc_castellan.visible = e && this.generalVO.assignedLord.isBaron && !this._hideAllInfo;
    this.containerMC.mc.mc_commander.visible = e && !this.generalVO.assignedLord.isBaron && !this._hideAllInfo;
    this.containerMC.mc.mc_inMovement.visible = (!this.isAvailable() && this._isOwnGeneral || this._forcedShowAsMoving) && !this._hideAllInfo;
    this.containerMC.mc.mc_inMovement_bg_small.visible = (!this.isAvailable() && this._isOwnGeneral || this._forcedShowAsMoving) && !this._showStarLevel && !this._hideAllInfo;
    this.containerMC.mc.mc_inMovement_bg.visible = (!this.isAvailable() && this._isOwnGeneral || this._forcedShowAsMoving) && this._showStarLevel && !this._hideAllInfo;
  };
  GeneralSelectionItem.prototype.updateLevel = function () {
    if (this.generalVO && this.generalVO.isUnlocked && !this._hideAllInfo) {
      var e = this.generalVO.currentLevel >= this.generalVO.maxLevel;
      this.containerMC.mc.mc_level.visible = true;
      this._itxt_level.visible = !e;
      this.containerMC.mc.mc_level.mc_max.visible = e;
      this._itxt_level.textContentVO.numberValue = this.generalVO.currentLevel;
    } else {
      this.containerMC.mc.mc_level.visible = false;
    }
  };
  GeneralSelectionItem.prototype.updateIndicators = function () {
    this.containerMC.mc.mc_levelUp.visible = this._isOwnGeneral && this.generalVO && this.generalVO.isUnlocked && this.generalVO.hasLevelUp && !this._hideAllInfo;
    this.containerMC.mc.mc_new.visible = this._isOwnGeneral && this.generalVO && this.generalVO.isUnlocked && this.generalVO.isNew && !this._hideAllInfo;
    this.containerMC.mc.mc_unlockable.visible = this._isOwnGeneral && this.generalVO && this.generalVO.canBeUnlocked && !this._hideAllInfo;
  };
  GeneralSelectionItem.prototype.updateStars = function () {
    if (this.generalVO && this.generalVO.isUnlocked && this._showStarLevel && !this._hideAllInfo) {
      this.containerMC.mc.mc_stars.visible = true;
      O.GeneralsHelper.updateStarLevel(this.containerMC.mc.mc_stars, this.generalVO);
    } else {
      this.containerMC.mc.mc_stars.visible = false;
    }
  };
  GeneralSelectionItem.prototype.updateShardProgress = function () {
    this.containerMC.mc.mc_locked.visible = this.generalVO && !this.generalVO.isUnlocked && !this._hideAllInfo;
    this._itxt_progress.visible = this.generalVO && this.generalVO.isImplemented && !this.generalVO.isUnlocked && !this._hideAllInfo;
    if (!!this.generalVO && !this.generalVO.isUnlocked && !this._hideAllInfo) {
      this._itxt_progress.textContentVO.textReplacements = [h.CastleModel.currencyData.getAmountById(this.generalVO.unlockCurrencyID), this.generalVO.requiredShards];
    }
  };
  GeneralSelectionItem.prototype.updateToolTip = function () {
    if (this._useToolTip) {
      if (this.generalVO) {
        if (this.generalVO.isImplemented) {
          if (this.generalVO.isUnlocked || this.generalVO.isNPCGeneral) {
            if (this.isEnabled) {
              this.disp.toolTipText = this.generalVO.nameText;
            } else {
              this.disp.toolTipText = {
                t: "dialog_generals_generalTravelling_tooltip",
                p: [this._generalVO.nameTextShort]
              };
            }
          } else {
            this.disp.toolTipText = l.Localize.text("dialog_generals_overview_selectGeneral_notOwned", [this.generalVO.nameText]);
          }
        } else {
          this.disp.toolTipText = "dialog_generals_overview_selectGeneral_unknown";
        }
      } else {
        this.disp.toolTipText = "dialog_generals_overview_selectGeneral_assignNobody";
      }
    }
  };
  GeneralSelectionItem.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (this.isEnabled) {
      this._onClickSignal.dispatch(this);
    }
  };
  GeneralSelectionItem.prototype.setSelected = function (e) {
    var t = this;
    this._containerClip.doWhenLoaded(function () {
      t.containerMC.mc.mc_selected.visible = e && !!t.generalVO && t.generalVO.isUnlocked;
      t.containerMC.mc.mc_selected_locked.visible = e && (!t.generalVO || !t.generalVO.isUnlocked);
      t.onFilled.dispatch();
    });
  };
  GeneralSelectionItem.prototype.enableComponent = function (t) {
    e.prototype.enableComponent.call(this, t);
    this.disp.useFilters(g.BitmapFilterHelper.NO_FILTER);
    if (this.containerMC && this.containerMC.mc) {
      if (t) {
        this.containerMC.mc.useFilters(g.BitmapFilterHelper.NO_FILTER);
      } else {
        this.containerMC.mc.useFilters(g.BitmapFilterHelper.FILTER_COLOR_MATRIX);
      }
      this.containerMC.mc_inMovement.visible = !t;
    }
  };
  GeneralSelectionItem.prototype.disableIfNotAvailable = function () {
    this.enableComponent(this.isAvailable());
  };
  GeneralSelectionItem.prototype.isAvailable = function () {
    return !this._displayBlock || !this.generalVO || !this.generalVO.assignedLord || this.generalVO.assignedLord.isAvailableForEquip;
  };
  Object.defineProperty(GeneralSelectionItem.prototype, "containerMC", {
    get: function () {
      return this._containerClip.currentshownDisplayObject;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralSelectionItem.prototype, "generalVO", {
    get: function () {
      return this._generalVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralSelectionItem.prototype, "onClickSignal", {
    get: function () {
      return this._onClickSignal;
    },
    enumerable: true,
    configurable: true
  });
  GeneralSelectionItem.CONTAINER_ASSET_NAME = "GeneralIconContainer2";
  GeneralSelectionItem.GENERAL_ICON_ASSET_PREFIX = "GeneralIcon_";
  GeneralSelectionItem.GENERAL_ICON_ASSET_PREVIEW_SUFFIX = "_Preview";
  GeneralSelectionItem.GENERAL_ICON_ASSET_GENERIC_SUFFIX = "Generic";
  GeneralSelectionItem.GENERAL_ICON_ASSET_UNKNOWN_SUFFIX = "Unknown";
  return GeneralSelectionItem;
}(m.CastleItemRenderer);
exports.GeneralSelectionItem = y;