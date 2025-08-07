Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./530.js");
var r = require("./71.js");
var l = require("./15.js");
var c = require("./4.js");
var u = require("./68.js");
var d = require("./2721.js");
var p = require("./2722.js");
var h = require("./1474.js");
var g = createjs.Container;
var C = createjs.Point;
var _ = function () {
  function ResearchTree(e, t, i, n, o) {
    this._lastXPos = 0;
    this._researchXPoses = [];
    this._contentHolder = e;
    this._tabVO = t;
    this._groupList = t.groups;
    this._selectionChangedCallback = i;
    this._scrollComponent = n;
    this._scrollComponentSmall = o;
    this.initTree();
  }
  ResearchTree.prototype.initTree = function () {
    var e = this;
    this._disp = new g();
    this._layerResearch = new g();
    this._layerConnectionDot = new g();
    this._layerConnectionLine = new g();
    this._layerBackground = new g();
    this._disp.addChild(this._layerBackground);
    this._disp.addChild(this._layerConnectionLine);
    this._disp.addChild(this._layerConnectionDot);
    this._disp.addChild(this._layerResearch);
    this._items = new Map();
    this._connectionDots = new Map();
    this._connectionLines = new Map();
    this._groupList.forEach(function (t) {
      e.createResearchTreeItem(t);
    });
    this.createBackground();
    if (this._tabVO.enableCategories) {
      this.createCategoryBackgrounds();
    }
  };
  ResearchTree.prototype.createResearchTreeItem = function (e) {
    var t = this;
    if (!e.isEmptyGroup()) {
      var i = new (o.getDefinitionByName("ResearchTree_ResearchContainer"))();
      this._layerResearch.addChild(i);
      var n = new h.ResearchTreeItem(e, i);
      n.onClick.add(this.bindFunction(this.handleResearchClick));
      this._items.set(e.id, n);
      this.positionTreeComponent(n.disp, e.x, e.y);
      if (this._researchXPoses.length == 0 || this._researchXPoses[this._researchXPoses.length - 1] < e.x) {
        this._researchXPoses.push(e.x);
      }
      if (n.disp.x > this._lastXPos) {
        this._lastXPos = n.disp.x;
      }
      e.prerequisitePaths.forEach(function (e) {
        return t.createConnectionForPath(n, e);
      });
    }
  };
  ResearchTree.prototype.createConnectionForPath = function (e, t) {
    for (var i = 1; i < t.length - 1; i++) {
      var n = t[i];
      var o = undefined;
      if (!this._connectionDots.has(n)) {
        o = new d.ResearchTreeConnectionDot();
        this.positionTreeComponent(o.disp, n.x, n.y);
        this._layerConnectionDot.addChild(o.disp);
        this._connectionDots.set(n, o);
      }
      e.addConnectionElement(o.disp);
    }
    for (i = 0; i < t.length - 1; i++) {
      var a = t[i];
      var s = t[i + 1];
      var r = new C((a.x + s.x) / 2, (a.y + s.y) / 2);
      var l = undefined;
      if (!this._connectionLines.has(r)) {
        l = new p.ResearchTreeConnectionLine(r);
        this.positionTreeComponent(l.disp, r.x, r.y);
        this._layerConnectionLine.addChild(l.disp);
        this._connectionLines.set(r, l);
      }
      if (this._connectionDots.has(a)) {
        this._connectionDots.get(a).addConnectingLine(l);
      }
      if (this._connectionDots.has(s)) {
        this._connectionDots.get(s).addConnectingLine(l);
      }
      e.addConnectionElement(l.disp);
    }
  };
  ResearchTree.prototype.createBackground = function () {
    var e = new (o.getDefinitionByName(ResearchTree.TREE_BG_ASSET_BASENAME + "Start"))();
    this._layerBackground.addChild(e);
    var t = o.getDefinitionByName(ResearchTree.TREE_BG_ASSET_BASENAME + (this._groupList[0].tabId + 1));
    for (var i = 0; i < this._lastXPos + 50;) {
      var n = new t();
      this._layerBackground.addChild(n);
      n.x = e.width + i;
      i += Math.floor(n.width);
    }
    var a = new (o.getDefinitionByName(ResearchTree.TREE_BG_ASSET_BASENAME + "End"))();
    this._layerBackground.addChild(a);
    var s = this._lastXPos + 50;
    if (this._tabVO.enableCategories && this._researchXPoses[this._researchXPoses.length - 1] > this._researchXPoses[this._researchXPoses.length - 2] + 1) {
      s = this.researchXtoScreenX(this._researchXPoses[this._researchXPoses.length - 1] + 1) + 50;
    }
    a.x = Math.max(s, this._contentHolder.mask.width - a.width);
  };
  ResearchTree.prototype.createCategoryBackgrounds = function () {
    var e = 0;
    var t = [undefined];
    var i = [undefined];
    this._groupList.forEach(function (e) {
      if (!e.isEmptyGroup()) {
        if (t[e.x]) {
          if (!t[e.x].includes(e.categoryID)) {
            t[e.x].push(e.categoryID);
          }
        } else {
          t[e.x] = [e.categoryID];
        }
        if (i[e.x]) {
          i[e.x]++;
        } else {
          i[e.x] = 1;
        }
      }
    });
    var s = new Map();
    var r = function (r) {
      var c = t[r];
      var u = r == l._researchXPoses[l._researchXPoses.length - 1];
      if (c === undefined) {
        var d = 0;
        if (e > 0 && r - e < 2) {
          d += 3 - (r - e);
        }
        var p = r + d;
        if (e + 2 < p && p >= 0 && !u && p < l._researchXPoses[l._researchXPoses.length - 1]) {
          var h = new (o.getDefinitionByName(ResearchTree.TREE_BG_ASSET_BASENAME + "CategoryDivider"))();
          l._layerBackground.addChild(h);
          l.positionTreeComponent(h, p, 1);
          e = p;
          console.log("divider at x: " + p);
        }
      } else if (c.some(function (e) {
        return s.has(e);
      })) {
        if (c.length == 1 && s.has(c[0]) && s.get(c[0]).startPosX < r - 1) {
          var g = s.get(c[0]);
          if (g.mc_header && g.mc_line_right) {
            g.mc_header.width += ResearchTree.ITEMOFFSETX;
            g.mc_line_right.x += ResearchTree.ITEMOFFSETX;
          }
        }
      } else {
        var C = new (c.length == 1 ? i[r] >= 2 ? o.getDefinitionByName(ResearchTree.TREE_BG_ASSET_BASENAME + "Category") : o.getDefinitionByName(ResearchTree.TREE_BG_ASSET_BASENAME + "Category3") : o.getDefinitionByName(ResearchTree.TREE_BG_ASSET_BASENAME + "Category2"))();
        l._layerBackground.addChild(C);
        l.positionTreeComponent(C, r, 1);
        c.forEach(function (e) {
          return s.set(e, C);
        });
        C.startPosX = r;
        n.GoodgameTextFieldManager.getInstance().registerTextField(C.txt_category, new a.LocalizedTextVO("dialog_researchTower_" + l._tabVO.categoryName + c[0] + "_title")).autoFitToBounds = true;
        if (c.length > 1 && C.txt_category2) {
          n.GoodgameTextFieldManager.getInstance().registerTextField(C.txt_category2, new a.LocalizedTextVO("dialog_researchTower_" + l._tabVO.categoryName + c[1] + "_title")).autoFitToBounds = true;
        }
      }
    };
    var l = this;
    for (var c = 1; c < t.length; c++) {
      r(c);
    }
  };
  ResearchTree.prototype.addCoordinatesToAllPositions = function () {
    var e = this;
    this.gridTextfields ||= [];
    this.gridTextfields.forEach(function (t) {
      return e._layerResearch.removeChild(t);
    });
    if (c.CastleModel.researchData.showResearchGrid) {
      var t = 0;
      var i = 0;
      this._items.forEach(function (e) {
        if (e.groupVO.x > t) {
          t = e.groupVO.x;
        }
        if (e.groupVO.y > i) {
          i = e.groupVO.y;
        }
      });
      for (var n = 1; n <= t; n++) {
        for (var a = 1; a <= i; a++) {
          var s = new o.TextField();
          s.textColor = 16711935;
          s.scaleX = s.scaleY = 1.4;
          s.autoSize = o.TextFieldAutoSize.CENTER;
          s.text = n + "/" + a;
          s.border = true;
          s.filters = u.BitmapFilterHelper.FILTER_GLOW_STANDARD;
          s.x = this.researchXtoScreenX(n - 1);
          s.y = this.researchXtoScreenY(a);
          s.mouseEnabled = false;
          this._layerResearch.addChild(s);
          this.gridTextfields.push(s);
        }
      }
    }
  };
  ResearchTree.prototype.update = function (e = null) {
    Array.from(this._items.values()).forEach(function (e) {
      return e.update();
    });
    this.addCoordinatesToAllPositions();
  };
  ResearchTree.prototype.handleResearchClick = function (e) {
    this._selectionChangedCallback(e);
  };
  ResearchTree.prototype.selectGroup = function (e, t = true, i = 0) {
    if (this._selectedItem) {
      this._selectedItem.deselect();
    }
    this._selectedItem = this._items.get(e.id);
    this._selectedItem.select();
    if (t) {
      this._scrollComponent.scrollToValue(this._selectedItem.disp.x - i);
      this._scrollComponentSmall.scrollToValue(this._selectedItem.disp.x - i);
    }
  };
  ResearchTree.prototype.show = function () {
    this._disp.visible = true;
    this._contentHolder.addChild(this._disp);
    this.update();
    Array.from(this._items.values()).forEach(function (e) {
      return e.show();
    });
    c.CastleModel.researchData.addEventListener(s.CastleResearchEvent.RESEARCH_INFO_UPDATE, this.bindFunction(this.update));
    l.CastleBasicController.getInstance().addEventListener(r.AreaDataEvent.ON_INFO_VALUES_CHANGED, this.bindFunction(this.update));
  };
  ResearchTree.prototype.hide = function () {
    this._disp.visible = false;
    if (this._contentHolder.children.indexOf(this._disp) > -1) {
      this._contentHolder.removeChild(this._disp);
    }
    Array.from(this._items.values()).forEach(function (e) {
      return e.hide();
    });
    if (this._selectedItem) {
      this._selectedItem.deselect();
      this._selectedItem = null;
    }
    c.CastleModel.researchData.removeEventListener(s.CastleResearchEvent.RESEARCH_INFO_UPDATE, this.bindFunction(this.update));
    l.CastleBasicController.getInstance().removeEventListener(r.AreaDataEvent.ON_INFO_VALUES_CHANGED, this.bindFunction(this.update));
  };
  ResearchTree.prototype.isVisible = function () {
    return this._disp.visible;
  };
  Object.defineProperty(ResearchTree.prototype, "lastXPos", {
    get: function () {
      return this._lastXPos;
    },
    enumerable: true,
    configurable: true
  });
  ResearchTree.prototype.centerOnCurrentResearch = function (e = 0) {
    var t;
    var i = c.CastleModel.researchData.currentResearchVO;
    if (i) {
      var n = Array.from(this._items.values()).find(function (e) {
        return e.groupVO.id == i.groupID;
      });
      if (n) {
        this._scrollComponent.scrollToValue(n.disp.x - e);
        this._scrollComponentSmall.scrollToValue(n.disp.x - e);
        return;
      }
    }
    var o = Array.from(this._items.values()).filter(function (e) {
      return e.groupVO.isResearchable;
    });
    if (t = o.length > 0 ? o.reduce(this.getLowestAvailableResearch) : this._items.values()[0]) {
      this._scrollComponent.scrollToValue(t.disp.x - e);
      this._scrollComponentSmall.scrollToValue(t.disp.x - e);
    }
  };
  ResearchTree.prototype.getLowestAvailableResearch = function (e, t) {
    if (t.groupVO.isResearchable && t.groupVO.x < e.groupVO.x || t.groupVO.x <= e.groupVO.x && t.groupVO.y <= e.groupVO.y) {
      return t;
    } else {
      return e;
    }
  };
  ResearchTree.prototype.positionTreeComponent = function (e, t, i) {
    var n = this._tabVO.enableCategories ? ResearchTree.TREEOFFSETY_CATEGORIES : ResearchTree.TREEOFFSETY;
    e.x = this.researchXtoScreenX(t);
    e.y = n + (i - 1) * ResearchTree.ITEMOFFSETY;
  };
  ResearchTree.prototype.researchXtoScreenX = function (e) {
    return ResearchTree.TREEOFFSETX + (e - 1) * ResearchTree.ITEMOFFSETX;
  };
  ResearchTree.prototype.researchXtoScreenY = function (e) {
    return ResearchTree.TREEOFFSETY + (e - 1) * ResearchTree.ITEMOFFSETY;
  };
  ResearchTree.TREEOFFSETX = 210;
  ResearchTree.TREEOFFSETY = 50;
  ResearchTree.TREEOFFSETY_CATEGORIES = 62;
  ResearchTree.ITEMOFFSETX = 80;
  ResearchTree.ITEMOFFSETY = 85;
  ResearchTree.TREE_BG_ASSET_BASENAME = "ResearchTree_BG_";
  return ResearchTree;
}();
exports.ResearchTree = _;