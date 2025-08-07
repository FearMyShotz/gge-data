Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./23.js");
var s = require("./23.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./1.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./6.js");
var h = require("./2715.js");
var g = require("./13.js");
var C = require("./4.js");
var _ = require("./20.js");
var m = require("./82.js");
var f = require("./47.js");
var O = require("./626.js");
var E = require("./8.js");
var y = require("./11.js");
var b = createjs.MouseEvent;
var D = function (e) {
  function CastleResearchDialog() {
    var t = this;
    t._pages = [];
    t._tabs = [];
    t._currentTabIndex = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleResearchDialog.NAME) || this;
  }
  n.__extends(CastleResearchDialog, e);
  CastleResearchDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this._model = C.CastleModel.researchData;
    E.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_lastResearch], _.ClickFeedbackButtonHover);
    E.ButtonHelper.initButton(this.dialogDisp.mc_sideMenu.btn_dropdown, 1.01, _.ClickFeedbackButtonHover);
    this._researchProgressInfo = new S.ResearchProgressInfo(this.dialogDisp.mc_sideMenu.mc_progress);
    this._researchInfo = new v.ResearchInfo(this.dialogDisp.mc_sideMenu.mc_info);
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.dialogDisp.btn_lastResearch.toolTipText = "dialog_researchTower_home";
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new d.TextVO(g.TextHelper.toUpperCaseLocaSafeTextId("research")));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_sideMenu.txt_noSelection, new u.LocalizedTextVO("dialog_researchTower_noTechnologySelected_desc"));
    var i = new O.DynamicSizeScrollStrategyHorizontal(true, this.dialogDisp.mc_mask.width);
    var n = new O.DynamicSizeScrollStrategyHorizontal(true, this.dialogDisp.mc_mask.width);
    this._scrollComponent = new m.ModernSliderScrollComponent(new f.SimpleScrollVO().initByParent(this.dialogDisp.mc_slider).addMouseWheelElements([this.dialogDisp]), i);
    this._scrollComponentSmall = new m.ModernSliderScrollComponent(new f.SimpleScrollVO().initByParent(this.dialogDisp.mc_slider_small).addMouseWheelElements([this.dialogDisp]), n);
    this._isInfoExpanded = true;
    this._expandX = this.dialogDisp.mc_sideMenu.x;
    this._collapseX = this._expandX + (this.dialogDisp.mc_sideMenu.width - this.dialogDisp.mc_sideMenu.btn_dropdown.width);
    this._contentStartX = this.dialogDisp.mc_contentHolder.x;
  };
  CastleResearchDialog.prototype.initTabs = function () {
    if (this._tabs != null) {
      for (var e = 0, t = this._tabs; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.removeEventListener(b.CLICK, this.bindFunction(this.handleTabPressed));
        }
      }
    }
    o.MovieClipHelper.clearMovieClip(this.disp.tabsHolder);
    var n = this._model.tabsCount;
    for (var a = p.int(this._model.editingEnabled ? n * 2 : n), s = 0; s < a; s++) {
      var l;
      var c = s % n;
      var u = this._model.tabs[c];
      var d = this.getAsset(CastleResearchDialog.TAB_CLIP_CLASS);
      if (this._pages.length <= s) {
        this._pages.push(null);
      }
      if (s >= n) {
        var h = new r.ColorTransform(1, 1, 0.5, 1, 64);
        d.mc_icon.useFilters([new createjs.ColorFilter(h.redMultiplier, h.greenMultiplier, h.blueMultiplier, h.alphaMultiplier, h.redOffset, h.greenOffset, h.blueOffset, h.alphaOffset)]);
      }
      if (s == this._currentTabIndex) {
        if (!(l = this._pages[s])) {
          l = this.initPageForTab(u, s);
        }
        if (!l.isVisible()) {
          l.show();
        }
        d.mc_selected.visible = true;
      } else {
        if ((l = this._pages[s]) && l.isVisible()) {
          l.hide();
        }
        d.mc_selected.visible = false;
      }
      d.mc_icon.addChild(this.getAsset(u.iconClassName));
      d.index = s;
      d.mouseChildren = false;
      E.ButtonHelper.initButton(d, -1, _.ClickFeedbackButtonHover);
      E.ButtonHelper.enableButton(d, u.isAvailable());
      d.addEventListener(b.CLICK, this.bindFunction(this.handleTabPressed));
      d.toolTipText = u.toolTipText;
      this.disp.tabsHolder.addChild(d);
      d.x = s * CastleResearchDialog.TAB_SPACING;
      this._tabs[s] = d;
    }
  };
  CastleResearchDialog.prototype.updateTabs = function () {
    for (var e = 0; e < this._tabs.length; e++) {
      var t = this._model.tabs[e];
      var i = this._tabs[e];
      E.ButtonHelper.enableButton(i, t.isAvailable());
      i.toolTipText = t.toolTipText;
    }
  };
  CastleResearchDialog.prototype.initPageForTab = function (e, t) {
    var i = new A.ResearchTree(this.dialogDisp.mc_contentHolder, e, this.bindFunction(this.onSelectionChanged), this._scrollComponent, this._scrollComponentSmall);
    this._pages[t] = i;
    i.show();
    return i;
  };
  CastleResearchDialog.prototype.handleTabPressed = function (e) {
    if (E.ButtonHelper.isButtonEnabled(e.target)) {
      var t = p.int(e.target.index);
      this.switchToPage(t);
    }
  };
  CastleResearchDialog.prototype.switchToPage = function (e) {
    if (e != this._currentTabIndex) {
      this.currentPage.hide();
      this.currentTabClip.mc_selected.visible = false;
      if (this.currentTabClip.cacheCanvas) {
        this.currentTabClip.updateCache();
      }
      this._researchInfo.setResearchGroup(null);
      this._currentTabIndex = e;
      if (!this._pages[this._currentTabIndex]) {
        this.initPageForTab(this._model.tabs[e], e);
      }
      if (!this.currentPage.isVisible()) {
        this.currentPage.show();
      }
      this.collapse();
      this.updateScrollComponent(this._scrollComponent);
      this.updateScrollComponent(this._scrollComponentSmall);
      this.currentPage.centerOnCurrentResearch(this.centerOffset);
      this.currentTabClip.mc_selected.visible = true;
      if (this.currentTabClip.cacheCanvas) {
        this.currentTabClip.updateCache();
      }
    }
  };
  CastleResearchDialog.prototype.updateScrollComponent = function (e, t = true) {
    var i = e.currentValue;
    var n = Math.max(0, A.ResearchTree.TREEOFFSETX + this.currentPage.lastXPos - this.centerOffset * 2);
    e.init(0, n, A.ResearchTree.ITEMOFFSETX, A.ResearchTree.ITEMOFFSETX);
    e.show();
    if (this.currentScrollComponent == e) {
      e.onScrollSignal.add(this.bindFunction(this.onScrollValueChange));
      e.setVisibility(true);
    } else {
      e.setVisibility(false);
    }
    e.scrollToValue(t ? 0 : i);
    e.enableComponent(n > 0);
  };
  CastleResearchDialog.prototype.onScrollValueChange = function () {
    s.TweenMax.killTweensOf(this.dialogDisp.mc_contentHolder);
    s.TweenMax.to(this.dialogDisp.mc_contentHolder, 0.15, {
      x: this._contentStartX - this.currentScrollComponent.currentValue,
      ease: a.Linear.easeOut
    });
    this._scrollComponent.scrollToValue(this.currentScrollComponent.currentValue, false);
    this._scrollComponentSmall.scrollToValue(this.currentScrollComponent.currentValue, false);
  };
  Object.defineProperty(CastleResearchDialog.prototype, "currentScrollComponent", {
    get: function () {
      if (this._isInfoExpanded) {
        return this._scrollComponentSmall;
      } else {
        return this._scrollComponent;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResearchDialog.prototype, "currentTabClip", {
    get: function () {
      return this._tabs[this._currentTabIndex];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResearchDialog.prototype, "currentPage", {
    get: function () {
      if (this._currentTabIndex < this._pages.length) {
        return this._pages[this._currentTabIndex];
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleResearchDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this);
    if (this._tabs && this._tabs.length != 0) {
      this.updateTabs();
    } else {
      this.initTabs();
    }
    if (!this.currentPage.isVisible()) {
      this.currentPage.show();
    }
    this._researchProgressInfo.show();
    this._researchInfo.show();
    this.collapse(true);
    this.updateScrollComponent(this._scrollComponent);
    this.updateScrollComponent(this._scrollComponentSmall);
    this.currentPage.centerOnCurrentResearch(this.centerOffset);
    C.CastleModel.smartfoxClient.sendCommandVO(new h.C2SResearchInfoVO());
    if (this.dialogProperties) {
      this.openNextResearch(this.dialogProperties.researchVOToDisplay, this.dialogProperties.recentlyFinishedResearchVO);
    } else {
      var i = C.CastleModel.researchData.currentResearchVO;
      if (i && i.groupVO.tabId != this._currentTabIndex) {
        this.switchToPage(i.groupVO.tabId);
      }
      this.currentPage.centerOnCurrentResearch(this.centerOffset);
    }
  };
  CastleResearchDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this);
    this.currentPage.hide();
    this._researchProgressInfo.hide();
    this._researchInfo.hide();
    if (this._scrollComponent) {
      this._scrollComponent.hide();
      this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScrollValueChange));
      this._scrollComponentSmall.hide();
      this._scrollComponentSmall.onScrollSignal.remove(this.bindFunction(this.onScrollValueChange));
    }
  };
  CastleResearchDialog.prototype.jumpToGroup = function (e, t = true) {
    if (e.tabId != this._currentTabIndex) {
      this.switchToPage(e.tabId);
    }
    if (!this._isInfoExpanded) {
      this.expand();
    }
    this.currentPage.selectGroup(e, t, this.centerOffset);
    this._researchInfo.setResearchGroup(e);
  };
  CastleResearchDialog.prototype.onClick = function (e) {
    switch (e.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_help:
        T.CastleDialogHandler.getInstance().showHelper("", C.CastleModel.languageData.getTextById("help_research"));
        break;
      case this.dialogDisp.btn_lastResearch:
        this.jumpToBestResearch();
        break;
      case this.dialogDisp.mc_sideMenu.btn_dropdown:
        this.toggleExpansion();
    }
  };
  CastleResearchDialog.prototype.jumpToBestResearch = function () {
    var e = [I.CollectableEnum.C2, I.CollectableEnum.STONE, I.CollectableEnum.WOOD];
    var t = null;
    var i = null;
    for (var n = 0, o = Array.from(C.CastleModel.researchData.groupVOs.values()); n < o.length; n++) {
      if ((p = o[n]) !== undefined && p.tabId == this._currentTabIndex && p.isResearchable) {
        var a = p.topResearch.getFinalCosts();
        if (t) {
          for (var s = 0; s < e.length; s++) {
            var r = e[s];
            var l = i.getFirstItemOfType(r);
            var c = a.getFirstItemOfType(r);
            if (c != null && l != null) {
              if (c.amount > l.amount) {
                t = p;
                i = a;
                break;
              }
              if (c.amount < l.amount) {
                break;
              }
            }
          }
        } else {
          t = p;
          i = a;
        }
      }
    }
    if (t) {
      this.jumpToGroup(t);
    } else {
      for (var u = 0, d = Array.from(C.CastleModel.researchData.groupVOs.values()); u < d.length; u++) {
        var p;
        if ((p = d[u]) !== undefined && p.tabId == this._currentTabIndex && !p.isEmptyGroup()) {
          this.jumpToGroup(p);
          break;
        }
      }
    }
  };
  CastleResearchDialog.prototype.onSelectionChanged = function (e) {
    this.jumpToGroup(e);
  };
  Object.defineProperty(CastleResearchDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleResearchDialog.prototype.getAsset = function (e) {
    return new (c.getDefinitionByName(e))();
  };
  CastleResearchDialog.prototype.openNextResearch = function (e, t) {
    if (e != null) {
      this.jumpToGroup(e.groupVO);
    } else if (t != null) {
      this.jumpToGroup(t.groupVO);
    }
  };
  CastleResearchDialog.prototype.toggleExpansion = function () {
    if (this._isInfoExpanded) {
      this.collapse();
    } else {
      this.expand();
    }
  };
  CastleResearchDialog.prototype.expand = function (e = false) {
    if (!this._isInfoExpanded) {
      this.currentScrollComponent.onScrollSignal.remove(this.bindFunction(this.onScrollValueChange));
      this._isInfoExpanded = true;
      s.TweenMax.killTweensOf(this.dialogDisp.mc_sideMenu);
      s.TweenMax.to(this.dialogDisp.mc_sideMenu, e ? 0.2 : 0, {
        x: this._expandX,
        ease: a.Linear.easeOut,
        onComplete: this.bindFunction(this.onExpandComplete)
      });
    }
  };
  CastleResearchDialog.prototype.collapse = function (e = false) {
    if (this._isInfoExpanded) {
      this.currentScrollComponent.onScrollSignal.remove(this.bindFunction(this.onScrollValueChange));
      this._isInfoExpanded = false;
      s.TweenMax.killTweensOf(this.dialogDisp.mc_sideMenu);
      s.TweenMax.to(this.dialogDisp.mc_sideMenu, e ? 0.2 : 0, {
        x: this._collapseX,
        ease: a.Linear.easeOut,
        onComplete: this.bindFunction(this.onExpandComplete)
      });
    }
  };
  CastleResearchDialog.prototype.onExpandComplete = function () {
    this.dialogDisp.mc_sideMenu.btn_dropdown.arrow_down.visible = this._isInfoExpanded;
    this.dialogDisp.mc_sideMenu.btn_dropdown.arrow_up.visible = !this._isInfoExpanded;
    this.updateScrollComponent(this._scrollComponent, false);
    this.updateScrollComponent(this._scrollComponentSmall, false);
  };
  Object.defineProperty(CastleResearchDialog.prototype, "centerOffset", {
    get: function () {
      if (this._isInfoExpanded) {
        return (this.dialogDisp.mc_mask.width - this.dialogDisp.mc_sideMenu.width) / 2;
      } else {
        return (this.dialogDisp.mc_mask.width - this.dialogDisp.mc_sideMenu.btn_dropdown.width) / 2;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleResearchDialog.__initialize_static_members = function () {
    CastleResearchDialog.MAX_ZOOM = 1;
    CastleResearchDialog.OPTIMAL_ZOOM_STEP = 1.5;
  };
  CastleResearchDialog.NAME = "CastleResearch_23Jan";
  CastleResearchDialog.TAB_CLIP_CLASS = "Btn_Research_Tab";
  CastleResearchDialog.TAB_SPACING = 64;
  return CastleResearchDialog;
}(y.CastleExternalDialog);
exports.CastleResearchDialog = D;
var I = require("./12.js");
var T = require("./9.js");
var v = require("./2716.js");
var S = require("./2719.js");
var A = require("./1473.js");
l.classImplementsInterfaces(D, "ICollectableRendererList");
D.__initialize_static_members();