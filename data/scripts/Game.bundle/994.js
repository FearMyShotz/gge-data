Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./100.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./49.js");
var r = createjs.MouseEvent;
var l = function () {
  function CastleLegendSkillItem(e, t = false, i = false) {
    this._isMaxLevel = false;
    this._isActive = false;
    this._isTierUnlocked = false;
    this._isInProgress = false;
    this._isVisualOnly = false;
    this._shouldShowInfoIcon = false;
    this._legendSkillVO = e;
    this._isVisualOnly = t;
    this._shouldShowInfoIcon = i && !this._legendSkillVO.isPreview;
    var n = e.isSpecialSkill() ? CastleLegendSkillItem.ASSET_NAME_SPECIAL : CastleLegendSkillItem.ASSET_NAME;
    this._disp = new (a.getDefinitionByName(n))();
    if (!this._legendSkillVO.isSpecialSkill()) {
      this.disp.mc_hover.visible = false;
      this.disp.mc_down.visible = false;
    }
    this.disp.mouseChildren = false;
    this.disp.changeTextFieldCacheScale(2);
    this.setSkillInfo(e);
  }
  CastleLegendSkillItem.prototype.setSkillInfo = function (e) {
    this._legendSkillVO = e;
    this._isActive = this.legendSkillData.isSkillActive(this._legendSkillVO);
    this._isMaxLevel = this.isActive && this._legendSkillVO.level == this.legendSkillData.getMaxSkillLevelInGroup(this._legendSkillVO.skillTreeID, this._legendSkillVO.tier, this._legendSkillVO.skillGroupID);
    this._isTierUnlocked = this.legendSkillData.isTierUnlocked(this._legendSkillVO.skillTreeID, this._legendSkillVO.tier) && !this._legendSkillVO.isPreview;
    this._isInProgress = this.legendSkillData.isSceatSkillInProgress(this._legendSkillVO);
    this.updateDisp();
  };
  CastleLegendSkillItem.prototype.updateDisp = function () {
    g.MovieClipHelper.clearMovieClip(this.disp.skillHolder);
    this.disp.skillHolder.addChild(this._isVisualOnly ? this._legendSkillVO.skillIcon : this._legendSkillVO.createSkillIcon());
    this.disp.mc_skillLocked.visible = !this.isTierUnlocked || !this._legendSkillVO.isUnlocked();
    if (!this._itxt_levelInfo && !this._legendSkillVO.isSpecialSkill()) {
      var e = this._legendSkillVO.isPreview ? "-" : p.GenericTextIds.VALUE_PROPORTIONAL_VALUE;
      this._itxt_levelInfo = CastleLegendSkillItem.textFieldManager.registerTextField(this.disp.txt_level, new C.LocalizedTextVO(e, [0, 0]), new n.InternalGGSTextFieldConfigVO(true));
      this._itxt_levelInfo_inProgress = CastleLegendSkillItem.textFieldManager.registerTextField(this.disp.mc_progress.txt_level, new C.LocalizedTextVO(e, [0, 0]), new n.InternalGGSTextFieldConfigVO(true));
    }
    if (this._itxt_levelInfo) {
      var t = [this.activeLevel, this.legendSkillData.getMaxSkillLevelInGroup(this._legendSkillVO.skillTreeID, this._legendSkillVO.tier, this._legendSkillVO.skillGroupID)];
      this._itxt_levelInfo.textContentVO.textReplacements = t;
      this._itxt_levelInfo_inProgress.textContentVO.textReplacements = t;
      this._itxt_levelInfo.color = this.isMaxLevel ? u.ClientConstLegendSkills.COLORCODE_YELLOW : this.isActive ? u.ClientConstLegendSkills.COLORCODE_GREEN : u.ClientConstLegendSkills.COLORCODE_LIGHTWHITE;
      this.disp.mc_progress.visible = this._isInProgress;
    }
    this.disp.mc_max.visible = this._isMaxLevel;
    if (this.dispContainer.btn_info_small) {
      this.dispContainer.btn_info_small.visible = this._shouldShowInfoIcon;
      A.ButtonHelper.initButton(this.dispContainer.btn_info_small, 1.1, s.BasicButton);
    }
  };
  CastleLegendSkillItem.prototype.checkForTooltipUpdate = function () {
    if (f.LegendSkillIconHelper.currentTarget == this.disp) {
      f.LegendSkillIconHelper.showToolTip(this.disp, this._legendSkillVO);
    }
  };
  CastleLegendSkillItem.prototype.show = function () {
    this.disp.visible = true;
    this.disp.addEventListener(r.CLICK, this.bindFunction(this.onClick));
    if (this.dispContainer.btn_info_small) {
      this.dispContainer.btn_info_small.addEventListener(r.CLICK, this.bindFunction(this.onInfoClick));
    }
    this.disp.addEventListener(r.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this.disp.addEventListener(r.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    this.disp.addEventListener(r.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
  };
  CastleLegendSkillItem.prototype.hide = function () {
    this.disp.visible = false;
    this.disp.removeEventListener(r.CLICK, this.bindFunction(this.onClick));
    if (this.dispContainer.btn_info_small) {
      this.dispContainer.btn_info_small.removeEventListener(r.CLICK, this.bindFunction(this.onInfoClick));
    }
    this.disp.removeEventListener(r.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this.disp.removeEventListener(r.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    this.disp.removeEventListener(r.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
  };
  Object.defineProperty(CastleLegendSkillItem.prototype, "isMaxLevel", {
    get: function () {
      return this._isMaxLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillItem.prototype, "isActive", {
    get: function () {
      return this._isActive;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillItem.prototype, "isTierUnlocked", {
    get: function () {
      return this._isTierUnlocked;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillItem.prototype, "activeLevel", {
    get: function () {
      if (this.isActive || this._isInProgress) {
        return this._legendSkillVO.level;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleLegendSkillItem.prototype.onInfoClick = function (e) {
    if (this._shouldShowInfoIcon && e.target == this.dispContainer.btn_info_small) {
      this.openInfoDialogue(this._legendSkillVO);
    }
  };
  CastleLegendSkillItem.prototype.onClick = function (e) {
    var t = true;
    var i = o.currentBrowserInfo.isTouchEvent(e);
    if (i) {
      t = f.LegendSkillIconHelper.currentTarget === e.target;
    }
    if (!t) {
      this.onMouseOver(e);
    }
    if (t && this.canBuy()) {
      var n = this.isActive && this._legendSkillVO ? this.legendSkillData.getNextLevel(this._legendSkillVO) : this._legendSkillVO;
      if (n instanceof O.CastleSceatSkillVO) {
        E.CastleDialogHandler.getInstance().registerDefaultDialogs(y.CastleSceatSkillBuyDialog, new b.CastleSceatSkillBuyDialogPropterties(this._legendSkillVO, n));
      } else {
        this.legendSkillData.buySkill(n);
      }
    }
    if (i) {
      e.stopPropagation();
    }
    if (!this._legendSkillVO.isSpecialSkill()) {
      this.disp.mc_down.visible = false;
    }
  };
  CastleLegendSkillItem.prototype.onMouseOver = function (e) {
    if (this.canBuy()) {
      CastleLegendSkillItem.layoutManager.nativeCursor.setCursorType(d.BasicCustomCursor.CURSOR_CLICK);
      this.disp.scaleX = this.disp.scaleY = 1.05;
      this.disp.mc_hover.visible = true;
    }
    if (this._legendSkillVO.isPreview) {
      m.TextDarkTooltip.getInstance().showTooltip(this.disp, this._legendSkillVO.previewText);
    } else {
      f.LegendSkillIconHelper.showToolTip(this.disp, this._legendSkillVO);
    }
    D.CheatHOLSkillsIdsDisplay.instance.cheatShowSkillIdAndSkillGroupID(this.disp, this._legendSkillVO);
  };
  CastleLegendSkillItem.prototype.onMouseOut = function (e) {
    CastleLegendSkillItem.layoutManager.nativeCursor.setCursorType(d.BasicCustomCursor.CURSOR_ARROW);
    this.disp.scaleX = this.disp.scaleY = 1;
    f.LegendSkillIconHelper.hideToolTip();
    m.TextDarkTooltip.getInstance().hideTooltip();
    if (!this._legendSkillVO.isSpecialSkill()) {
      this.disp.mc_hover.visible = false;
      this.disp.mc_down.visible = false;
    }
  };
  CastleLegendSkillItem.prototype.onMouseDown = function (e) {
    if (this.canBuy()) {
      CastleLegendSkillItem.layoutManager.nativeCursor.setCursorType(d.BasicCustomCursor.CURSOR_CLICK);
      this.disp.scaleX = this.disp.scaleY = 1.05;
      this.disp.mc_down.visible = true;
    }
  };
  CastleLegendSkillItem.prototype.openInfoDialogue = function (e) {
    var t;
    var i = e.getCurrentEffectValue.strength;
    if (e.hasBuildingEffect) {
      if (t = _.CastleModel.wodData.getBuildingVOById(i)) {
        E.CastleDialogHandler.getInstance().registerDefaultDialogs(v.CastleBuildingInfoDialog, new S.CastleBuildingInfoDialogProperties(t));
      }
    } else if (e.hasUnitEffect && (t = _.CastleModel.wodData.getUnitVOByWodId(i))) {
      E.CastleDialogHandler.getInstance().registerDefaultDialogs(I.CastleRecruitInfoDialog, new T.CastleRecruitInfoDialogProperties(t));
    }
  };
  CastleLegendSkillItem.prototype.canBuy = function () {
    var e = this._legendSkillVO.isMaxLevel() ? this._legendSkillVO : this.legendSkillData.getNextLevel(this._legendSkillVO);
    if (!this._legendSkillVO.isMaxLevel() && this._legendSkillVO.level == 1 && !this._legendSkillVO.isActive) {
      e = this._legendSkillVO;
    }
    return !this.isMaxLevel && this.isTierUnlocked && e.isUnlocked() && this.legendSkillData.canAffordNextLevel(e) && !this._isInProgress && !this.legendSkillData.isAnyOtherSkillInProgress(this._legendSkillVO) && !this._isVisualOnly;
  };
  Object.defineProperty(CastleLegendSkillItem, "layoutManager", {
    get: function () {
      return c.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillItem, "textFieldManager", {
    get: function () {
      return h.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillItem.prototype, "legendSkillData", {
    get: function () {
      return _.CastleModel.legendSkillData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillItem.prototype, "disp", {
    get: function () {
      if (this._legendSkillVO.isSpecialSkill()) {
        return this._disp;
      } else {
        return this._disp.mc_main;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillItem.prototype, "dispContainer", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleLegendSkillItem.ASSET_NAME = "LegendSkillItemContainer";
  CastleLegendSkillItem.ASSET_NAME_SPECIAL = "LegendSkillItemContainer_Special";
  return CastleLegendSkillItem;
}();
exports.CastleLegendSkillItem = l;
var c = require("./17.js");
var u = require("./479.js");
var d = require("./2.js");
var p = require("./2.js");
var h = require("./2.js");
var g = require("./2.js");
var C = require("./3.js");
var _ = require("./4.js");
var m = require("./854.js");
var f = require("./995.js");
var O = require("./628.js");
var E = require("./9.js");
var y = require("./2673.js");
var b = require("./2674.js");
var D = require("./1457.js");
var I = require("./113.js");
var T = require("./120.js");
var v = require("./445.js");
var S = require("./444.js");
var A = require("./8.js");