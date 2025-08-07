Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.MouseEvent;
var o = createjs.ColorMatrixFilter;
var a = function () {
  function ResearchTreeItem(e, t) {
    this.selected = false;
    this.connectionElements = [];
    this.onClick = new C.Signal();
    this.FILTER_DISABLED = new o([0.4, 0.6, 0, 0, 0, 0.3, 0.7, 0, 0, 0, 0.3, 0.6, 0.1, 0, 0, 0, 0, 0, 1, 0]);
    this.selected = false;
    this._disp = t;
    this.groupVO = e;
    t.visible = true;
    t.addEventListener(n.CLICK, this.bindFunction(this.handleResearchClick));
    t.addEventListener(n.MOUSE_OVER, this.bindFunction(this.bindFunction(this.onMouseOver)));
    t.addEventListener(n.MOUSE_OUT, this.bindFunction(this.bindFunction(this.onMouseOut)));
    t.mouseChildren = false;
    this.itxt_level = d.GoodgameTextFieldManager.getInstance().registerTextField(t.txt_level, new g.LocalizedTextVO(u.GenericTextIds.VALUE_PROPORTIONAL_VALUE));
    this._clickBehaviour = new s.ClickFeedbackHoverBehaviour(this._disp);
    this._clickBehaviour.updateCacheOnChange = true;
  }
  ResearchTreeItem.prototype.show = function () {
    this._clickBehaviour.addEventListener();
  };
  ResearchTreeItem.prototype.hide = function () {
    this._clickBehaviour.removeEventListener();
  };
  ResearchTreeItem.prototype.handleResearchClick = function (e) {
    this.onClick.dispatch(this.groupVO);
  };
  ResearchTreeItem.prototype.addConnectionElement = function (e) {
    this.connectionElements[this.connectionElements.length] = e;
  };
  Object.defineProperty(ResearchTreeItem.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResearchTreeItem.prototype, "groupId", {
    get: function () {
      return this._groupVO.id;
    },
    enumerable: true,
    configurable: true
  });
  ResearchTreeItem.prototype.update = function () {
    this.updateIcon();
    this.updateColor();
    this.updateLevelText();
    this.updateIconState();
    this.updateResearchToolTip();
    this.updateLinks();
    if (this._disp.cacheCanvas) {
      this._disp.updateCache();
    }
  };
  ResearchTreeItem.prototype.updateIcon = function () {
    this.disp.mc_iconContainer.scaleX = this.disp.mc_iconContainer.scaleY = ResearchTreeItem.ICON_SCALE;
    if (this._groupVO) {
      c.ResearchIconHelper.addResearchIcon(this._groupVO, this.disp.mc_iconContainer, NaN, this.bindFunction(this.onIconLoaded));
    } else {
      p.MovieClipHelper.clearMovieClip(this.disp.mc_iconContainer);
    }
  };
  ResearchTreeItem.prototype.updateLinks = function () {
    if (this.connectionElements != null) {
      for (var e = 0, t = this.connectionElements; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          this.updateColorOfDisp(i);
          if (this.selected && this.isLocked) {
            i.useFilters(m.BitmapFilterHelper.FILTER_GLOW_SELECTED_RESEARCH_FILTER.concat([this.FILTER_DISABLED]));
          }
          if (this.isLocked) {
            i.useFilters([this.FILTER_DISABLED]);
          } else {
            i.useFilters(m.BitmapFilterHelper.NO_FILTER);
          }
          if (i.cacheCanvas) {
            i.updateCache();
          }
        }
      }
    }
  };
  ResearchTreeItem.prototype.updateColor = function () {
    this.updateColorOfDisp(this.disp);
  };
  ResearchTreeItem.prototype.updateColorOfDisp = function (e) {
    var t;
    var i;
    if (!this.groupVO || this.isLocked) {
      t = ResearchTreeItem.LOCKED;
      i = 0;
    } else if (this._groupVO.isFullyResearched) {
      t = ResearchTreeItem.GREEN;
      i = 3;
    } else if (this._groupVO.currentLevel == 0) {
      t = ResearchTreeItem.NORMAL;
      i = 2;
    } else {
      i = 1;
      t = ResearchTreeItem.YELLOW;
    }
    if (!e.colorState || e.colorState && e.colorState < i) {
      e.state = i;
      var n = e.mcColor;
      n.visible = true;
      n.useFilters([new createjs.ColorFilter(t.redMultiplier, t.greenMultiplier, t.blueMultiplier, t.alphaMultiplier, t.redOffset, t.greenOffset, t.blueOffset, t.alphaOffset)]);
    }
  };
  ResearchTreeItem.prototype.select = function () {
    this.selected = true;
    this.updateIconState();
    this.updateLinks();
    if (this._disp.cacheCanvas) {
      this._disp.updateCache();
    }
  };
  ResearchTreeItem.prototype.deselect = function () {
    this.selected = false;
    this.updateIconState();
    this.updateLinks();
    if (this._disp.cacheCanvas) {
      this._disp.updateCache();
    }
  };
  Object.defineProperty(ResearchTreeItem.prototype, "isLocked", {
    get: function () {
      return !!this._groupVO && this._groupVO.isLocked;
    },
    enumerable: true,
    configurable: true
  });
  ResearchTreeItem.prototype.onIconLoaded = function () {
    this.updateIconState();
  };
  ResearchTreeItem.prototype.updateIconState = function () {
    this._disp.mc_selected.visible = this.selected;
    var e = _.CastleModel.researchData.currentResearchVO;
    var t = e && this.groupId == e.groupID;
    this._disp.mc_inProgress.visible = t;
    var i = [];
    if (this.isLocked) {
      i = i.concat(this.FILTER_DISABLED);
    }
    for (var n = 0; n < this._disp.numChildren; n++) {
      if (this._disp.getChildAt(n).name != "mc_selected") {
        this._disp.getChildAt(n).useFilters(i, true, 1);
      }
    }
    if (!this.isLocked) {
      this.updateColor();
    }
  };
  ResearchTreeItem.prototype.updateLevelText = function () {
    var e = 0;
    var t = 0;
    if (this._groupVO) {
      e = this._groupVO.currentLevel;
      t = this._groupVO.maxLevel;
    } else {
      e = t = 0;
    }
    this.itxt_level.textContentVO.textReplacements = [e, t];
  };
  ResearchTreeItem.prototype.updateResearchToolTip = function () {
    if (this._groupVO && !this._groupVO.getResearchByLevel(this._groupVO.currentLevel).hasAllEffectTypes([r.EffectTypeEnum.EFFECT_TYPE_ENABLE_CONSTRUCTIONITEM_RECIPE_ID])) {
      this._disp.toolTipText = g.Localize.text(this._groupVO.toolTip) + (_.CastleModel.researchData.showResearchIDs ? " ( ResearchID: " + (this._groupVO.activeResearch ? this._groupVO.activeResearch.researchID : this._groupVO.getResearchByLevel(1).researchID) + ", GroupID: " + this._groupVO.id + " )" : "");
    } else {
      this._disp.toolTipText = null;
    }
  };
  ResearchTreeItem.prototype.onMouseOver = function (e) {
    if (this._groupVO.getResearchByLevel(this._groupVO.currentLevel).hasAllEffectTypes([r.EffectTypeEnum.EFFECT_TYPE_ENABLE_CONSTRUCTIONITEM_RECIPE_ID])) {
      l.ConstructionItemTooltipHelper.showBlueprintToolTip(e.target, this._groupVO.getResearchByLevel(this._groupVO.currentLevel).blueprintVO, _.CastleModel.researchData.showResearchIDs ? " ( ResearchID: " + (this._groupVO.activeResearch ? this._groupVO.activeResearch.researchID : this._groupVO.getResearchByLevel(1).researchID) + ", GroupID: " + this._groupVO.id + " )" : null);
    }
  };
  ResearchTreeItem.prototype.onMouseOut = function (e) {
    l.ConstructionItemTooltipHelper.hideToolTip();
  };
  Object.defineProperty(ResearchTreeItem.prototype, "groupVO", {
    get: function () {
      return this._groupVO;
    },
    set: function (e) {
      this._groupVO = e;
      this.disp.groupVO = this.groupVO;
    },
    enumerable: true,
    configurable: true
  });
  ResearchTreeItem.tintTo = function (e, t, i) {
    return new h.ColorTransform(0, 0, 0, 1, e, t, i, 0);
  };
  ResearchTreeItem.alphaTo = function (e) {
    return new h.ColorTransform(1, 1, 1, e, 0, 0, 0, 0);
  };
  ResearchTreeItem.prototype.clearLinks = function () {
    this.connectionElements = [];
  };
  ResearchTreeItem.__initialize_static_members = function () {
    ResearchTreeItem.GREEN = ResearchTreeItem.tintTo(89, 181, 29);
    ResearchTreeItem.NORMAL = ResearchTreeItem.tintTo(112, 98, 79);
    ResearchTreeItem.YELLOW = ResearchTreeItem.tintTo(247, 174, 7);
    ResearchTreeItem.LOCKED = ResearchTreeItem.tintTo(65, 64, 66);
  };
  ResearchTreeItem.ICON_SCALE = 0.523;
  return ResearchTreeItem;
}();
exports.ResearchTreeItem = a;
var s = require("./237.js");
var r = require("./33.js");
var l = require("./356.js");
var c = require("./631.js");
var u = require("./2.js");
var d = require("./2.js");
var p = require("./2.js");
var h = require("./1.js");
var g = require("./3.js");
var C = require("./57.js");
var _ = require("./4.js");
var m = require("./68.js");
a.__initialize_static_members();