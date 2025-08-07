Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./14.js");
var r = createjs.MouseEvent;
var l = createjs.Point;
var c = function (e) {
  function ConstructionItemExpiredCastleSelector(t, i) {
    var n = e.call(this) || this;
    n._disp = t;
    n._castleSelectionCallback = i;
    n._pagination = new p.Pagination(n, 1, false, true);
    n._paginationDots = new h.PaginationDots(n, n._pagination, n._disp.mc_dotContainer.mc_dot);
    n._pagination.addControl(n._paginationDots);
    n._pagination.addControl(new g.PaginationArrows(n, n._pagination));
    n._pagination.addControl(new O.PaginationMouseWheel(n._disp, n._pagination));
    n._castleDimension = new l(70, 60);
    n._castlesClickFeedback = [];
    for (var o = 0; o < ConstructionItemExpiredCastleSelector.MAX_CASTLES_SHOWN; o++) {
      var a = n._disp["castle" + o];
      n._castlesClickFeedback.push(new u.ClickFeedbackHoverBehaviour(a, a.mc_hover, a.mc_down));
    }
    return n;
  }
  n.__extends(ConstructionItemExpiredCastleSelector, e);
  ConstructionItemExpiredCastleSelector.prototype.fillFromAreas = function (e) {
    this._expiredAreas = e;
    var t = m.CastleModel.areaData.activeArea.areaInfo;
    for (var i = 0; i < this._expiredAreas.length; i++) {
      var n = this._expiredAreas[i];
      if (t.kingdomID == n.castleWMO.kingdomID && t.objectId == n.castleWMO.objectId) {
        this._selectedArea = n;
      }
    }
    if (!this._selectedArea) {
      var o = new d.ConstructionItemExpiredAreaVO();
      o.castleWMO = t;
      this._expiredAreas.push(o);
      this._selectedArea = o;
    }
    this._expiredAreas.sort(this.bindFunction(this.sortExpiredAreas));
    this._pagination.maxPages = Math.ceil(this._expiredAreas.length / ConstructionItemExpiredCastleSelector.MAX_CASTLES_SHOWN);
    this._pagination.currentPage = Math.floor(this._expiredAreas.indexOf(this._selectedArea) / ConstructionItemExpiredCastleSelector.MAX_CASTLES_SHOWN) + 1;
    this.update();
  };
  ConstructionItemExpiredCastleSelector.prototype.sortExpiredAreas = function (e, t) {
    if (e) {
      if (t) {
        return f.ClientConstSort.sortByKingdomId(e.castleWMO, t.castleWMO);
      } else {
        return -1;
      }
    } else {
      return 1;
    }
  };
  ConstructionItemExpiredCastleSelector.prototype.onClick = function (e) {
    this._pagination.handleClick(e);
    switch (e.target) {
      case this._disp.castle0:
      case this._disp.castle1:
      case this._disp.castle2:
        var t = parseInt(e.target.name.replace("castle", "")) + this._pagination.currentPageIndex * ConstructionItemExpiredCastleSelector.MAX_CASTLES_SHOWN;
        this._selectedArea = this._expiredAreas[t];
        if (this._castleSelectionCallback) {
          this._castleSelectionCallback();
        }
    }
  };
  ConstructionItemExpiredCastleSelector.prototype.show = function () {
    this._pagination.enable();
    for (var e = 0; e < this._castlesClickFeedback.length; e++) {
      this._castlesClickFeedback[e].addEventListener();
    }
    this._disp.addEventListener(r.CLICK, this.bindFunction(this.onClick));
  };
  ConstructionItemExpiredCastleSelector.prototype.hide = function () {
    this._pagination.disable();
    for (var e = 0; e < this._castlesClickFeedback.length; e++) {
      this._castlesClickFeedback[e].removeEventListener();
    }
    this._disp.removeEventListener(r.CLICK, this.bindFunction(this.onClick));
  };
  ConstructionItemExpiredCastleSelector.prototype.update = function () {
    this.updatePages(this._pagination.currentPageIndex, this._pagination.currentPageIndex);
  };
  ConstructionItemExpiredCastleSelector.prototype.updatePages = function (e, t) {
    for (var i = 0; i < ConstructionItemExpiredCastleSelector.MAX_CASTLES_SHOWN; i++) {
      var n = this._disp["castle" + i];
      var o = this._pagination.currentPageIndex * ConstructionItemExpiredCastleSelector.MAX_CASTLES_SHOWN + i;
      if (this._expiredAreas.length > o) {
        var a = this._expiredAreas[o];
        this.renderCastle(n, a);
      } else {
        n.visible = false;
      }
    }
  };
  ConstructionItemExpiredCastleSelector.prototype.renderCastle = function (e, t) {
    var i = t.castleWMO;
    var n = s.CastleComponent.textFieldManager.registerTextField(e.txt_name, new a.TextVO(i.areaNameString));
    s.CastleComponent.textFieldManager.registerTextField(e.txt_name_bold, new a.TextVO(i.areaNameString)).visible = i == this._selectedArea.castleWMO;
    n.visible = i != this._selectedArea.castleWMO;
    _.MovieClipHelper.clearMovieClip(e.castleHolder);
    e.mc_kingdomCrest.gotoAndStop(i.kingdomID + 1);
    e.mc_selected.visible = i == this._selectedArea.castleWMO;
    e.mc_deselected.visible = i != this._selectedArea.castleWMO;
    e.castleHolder.addChild(C.WorldmapObjectIconHelper.drawMapObjectIcon(i, this._castleDimension, true, false, false));
    e.visible = true;
    e.mouseChildren = false;
  };
  ConstructionItemExpiredCastleSelector.prototype.addDot = function (e) {
    this._disp.mc_dotContainer.addChild(e);
  };
  ConstructionItemExpiredCastleSelector.prototype.highlightDot = function (e, t) {
    e.gotoAndStop(t ? 2 : 1);
  };
  ConstructionItemExpiredCastleSelector.prototype.changeArrow = function (e, t) {
    return false;
  };
  ConstructionItemExpiredCastleSelector.prototype.getLeftArrow = function () {
    return this._disp.btn_left;
  };
  ConstructionItemExpiredCastleSelector.prototype.getRightArrow = function () {
    return this._disp.btn_right;
  };
  Object.defineProperty(ConstructionItemExpiredCastleSelector.prototype, "selectedArea", {
    get: function () {
      return this._selectedArea;
    },
    enumerable: true,
    configurable: true
  });
  ConstructionItemExpiredCastleSelector.MAX_CASTLES_SHOWN = 3;
  return ConstructionItemExpiredCastleSelector;
}(s.CastleComponent);
exports.ConstructionItemExpiredCastleSelector = c;
var u = require("./237.js");
var d = require("./1436.js");
var p = require("./429.js");
var h = require("./1253.js");
var g = require("./512.js");
var C = require("./70.js");
var _ = require("./2.js");
var m = require("./4.js");
var f = require("./75.js");
var O = require("./717.js");
o.classImplementsInterfaces(c, "ICollectableRendererList", "IPaginationContainer", "IPaginationDotsContainer", "IPaginationArrowsContainer");