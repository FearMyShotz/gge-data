Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./18.js");
var d = require("./13.js");
var p = require("./41.js");
var h = function () {
  function CastleSpecialServerPreBuildCastleSelectionBuildingList(e) {
    this.disp = e;
  }
  CastleSpecialServerPreBuildCastleSelectionBuildingList.prototype.fillWithData = function (e) {
    this._data = e;
    n.MovieClipHelper.clearMovieClip(this.disp.mc_items);
    var t = 0;
    for (var i = 0; i < e.length; i++) {
      if (!(e[i].length <= 0)) {
        var o = new (a.getDefinitionByName("CastleSpecialServerPreBuildCastleSelectionShopCategoryItem"))();
        this.fillCategory(o, i);
        this.disp.mc_items.addChild(o);
        o.y = t;
        t += c.int(o.height);
      }
    }
  };
  CastleSpecialServerPreBuildCastleSelectionBuildingList.prototype.fillCategory = function (e, t) {
    CastleSpecialServerPreBuildCastleSelectionBuildingList.textFieldManager.registerTextField(e.txt_title2, new s.TextVO(d.TextHelper.toUpperCaseLocaSafe(l.Localize.text(this.getTitleTextID(t)))));
    var i = this._data[t];
    i.sort(this.bindFunction(this.sortByName));
    n.MovieClipHelper.clearMovieClip(e.mc_items);
    var o = 0;
    for (var r = 0; r < i.length; r++) {
      var u = new (a.getDefinitionByName("CastleSpecialServerPreBuildCastleSelectionBuildingItem"))();
      this.fillItem(u, i[r]);
      e.mc_items.addChild(u);
      u.y = o;
      o += c.int(u.height);
    }
  };
  CastleSpecialServerPreBuildCastleSelectionBuildingList.prototype.getTitleTextID = function (e) {
    if (this._data[e].length <= 0) {
      return "";
    }
    for (var t, i = 0; i < this._data[e].length && (t = this._data[e][i].buildingVO.buildingGroundType) == ""; i++);
    switch (t) {
      case u.ClientConstCastle.BUILDINGGROUND_TYPE_CIVIL:
        return "panel_deco_civil";
      case u.ClientConstCastle.BUILDINGGROUND_TYPE_MILITARY:
        return "military";
      case u.ClientConstCastle.BUILDINGGROUND_TYPE_DEFENCE:
        return "Defence";
      case u.ClientConstCastle.BUILDINGGROUND_TYPE_DECO:
        return "panel_deco_deco";
    }
    return "";
  };
  CastleSpecialServerPreBuildCastleSelectionBuildingList.prototype.sortByName = function (e, t) {
    if (l.Localize.text(e.buildingVO.getNameString()) > l.Localize.text(t.buildingVO.getNameString())) {
      return 1;
    } else if (l.Localize.text(t.buildingVO.getNameString()) > l.Localize.text(e.buildingVO.getNameString())) {
      return -1;
    } else {
      return 0;
    }
  };
  CastleSpecialServerPreBuildCastleSelectionBuildingList.prototype.fillItem = function (e, t) {
    n.MovieClipHelper.clearMovieClip(e.mc_icon);
    var i = l.Localize.text(t.buildingVO.getNameString()) + " " + l.Localize.text("building_level", [t.buildingVO.level]);
    var o = t.buildingVO.costC2 > 0;
    CastleSpecialServerPreBuildCastleSelectionBuildingList.textFieldManager.registerTextField(e.txt_premium, new r.LocalizedTextVO("generic_amount_reward", [t.amount, i])).visible = o;
    CastleSpecialServerPreBuildCastleSelectionBuildingList.textFieldManager.registerTextField(e.txt_normal, new r.LocalizedTextVO("generic_amount_reward", [t.amount, i])).visible = !o;
    var a = t.buildingVO.getViewClass();
    if (a) {
      var s = new a();
      if (s) {
        s.init(t.buildingVO);
      }
      if (s.buildingGroundIconClass) {
        var c = new Library.CastleInterfaceElements.BuildingGroundBg();
        e.mc_icon.addChild(c);
        p.CastleMovieClipHelper.scaleWithAntiAliasing(c, 22, 22);
        var u = new s.buildingGroundIconClass();
        e.mc_icon.addChild(u);
        p.CastleMovieClipHelper.scaleWithAntiAliasing(u, 16, 16);
      }
    }
  };
  Object.defineProperty(CastleSpecialServerPreBuildCastleSelectionBuildingList, "textFieldManager", {
    get: function () {
      return o.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleSpecialServerPreBuildCastleSelectionBuildingList;
}();
exports.CastleSpecialServerPreBuildCastleSelectionBuildingList = h;