Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./6.js");
var r = require("./41.js");
var l = require("./185.js");
var c = createjs.Point;
var u = function () {
  function CastleBuildingStats(e, t, i = 7) {
    this.SPECIAL_LAYOUT_START_POSITION = 7;
    this.useSpecialLayout = false;
    this.SPECIAL_LAYOUT_START_POSITION = i;
    this._infoLayer = e;
    this.posMap = t;
  }
  CastleBuildingStats.prototype.showBuildingInfo = function (e, t) {
    this.cleanUpDisp();
    var i = t.items;
    if (i.length != 0) {
      var a;
      var s;
      var u = this.getPanelItemClass(i.length, e);
      var d = this.getItemPosition(i.length);
      for (var p = 0; p < i.length; p++) {
        a = i[p];
        (s = new u()).x = d[p * 2];
        s.y = d[p * 2 + 1];
        o.MovieClipHelper.replaceMovieClip(s.icon_holder, a.iconClass);
        r.CastleMovieClipHelper.scaleWithAntiAliasing(s.icon_holder.children[0], 20, 20, -1, false);
        s.toolTipText = a.tooltipText;
        s.mouseChildren = false;
        var h = n.GoodgameTextFieldManager.getInstance().registerTextField(s.txt_info, a.textVO);
        h.color = a.textColor;
        h.autoFitToBounds = true;
        l.SubscriptionHelper.showSubscriptionStarToTextField(h, a.useSubscription, 15, new c(-3, -3), true, a.textColor);
        this._infoLayer.addChild(s);
      }
    }
  };
  CastleBuildingStats.prototype.getItemPosition = function (e) {
    if (this.useSpecialLayout) {
      e += this.SPECIAL_LAYOUT_START_POSITION;
    }
    return this.posMap.get(e);
  };
  CastleBuildingStats.prototype.getPanelItemClass = function (e, t) {
    this.useSpecialLayout = false;
    if (e == 1) {
      return Library.CastleInterfaceElements.MultiInfoPanelItemBig;
    } else if (e == 2 && this.foundProductionVOInBuildingsWithSpecialLayout(t)) {
      this.useSpecialLayout = true;
      return Library.CastleInterfaceElements.MultiInfoPanelItemBig;
    } else {
      return Library.CastleInterfaceElements.MultiInfoPanelItem;
    }
  };
  CastleBuildingStats.prototype.foundProductionVOInBuildingsWithSpecialLayout = function (e) {
    if (CastleBuildingStats.BUILDINGS_WITH_SPECIAL_LAYOUT != null) {
      for (var t = 0, i = CastleBuildingStats.BUILDINGS_WITH_SPECIAL_LAYOUT; t < i.length; t++) {
        if (i[t] !== undefined && a.instanceOfClass(e, "specialBuildingClass")) {
          return true;
        }
      }
    }
    return false;
  };
  CastleBuildingStats.prototype.cleanUpDisp = function () {
    for (var e = s.int(this._infoLayer.numChildren) - 1; e >= 0; e--) {
      var t = this._infoLayer.getChildAt(e);
      if (a.instanceOfClass(t, "MultiInfoPanelItem") || a.instanceOfClass(t, "MultiInfoPanelItemBig")) {
        this._infoLayer.removeChild(t);
        t = null;
      }
    }
  };
  Object.defineProperty(CastleBuildingStats.prototype, "textFieldmanager", {
    get: function () {
      return n.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastleBuildingStats.__initialize_static_members = function () {
    CastleBuildingStats.BUILDINGS_WITH_SPECIAL_LAYOUT = [d.StrongholdBuildingVO];
  };
  return CastleBuildingStats;
}();
exports.CastleBuildingStats = u;
var d = require("./767.js");
u.__initialize_static_members();