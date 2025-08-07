Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./944.js");
var d = require("./1346.js");
var p = require("./171.js");
var h = createjs.MouseEvent;
var g = createjs.Point;
var C = function (e) {
  function CastleSelectorComponent(t, i = 7, n = "", o = 1, a = 40, s = 45, r = null, l = 15) {
    var c = e.call(this, t) || this;
    if (c.castleSelectorComponent.castleListCombobox) {
      c._castleList = new f.ComboboxComponent(c.castleSelectorComponent.castleListCombobox, n, o, a, s, -1, i, r ? new r() : new d.ComboboxItemRendererCastleList(), l, true, false, 3);
      c.castleSelectorComponent.addEventListener(h.CLICK, c.bindFunction(c.bringToFront), false, 0, true);
    }
    return c;
  }
  n.__extends(CastleSelectorComponent, e);
  CastleSelectorComponent.prototype.bringToFront = function (e) {
    if (this.castleSelectorComponent.parent) {
      this.castleSelectorComponent.parent.setChildIndex(this.castleSelectorComponent, this.castleSelectorComponent.parent.numChildren - 1);
    }
  };
  CastleSelectorComponent.prototype.initComponent = function (e, t, i = null, n = null, o = -1, a = null, s = null, r = null) {
    this.fillCastleList(t, n, o, i, a, s, r);
    this.setNameField();
    this.fillUserCastle();
    this.fillUserCrest(e);
  };
  CastleSelectorComponent.prototype.fillCastleList = function (e, t, i, n, a, s, r) {
    if (this._castleList) {
      var l;
      this._castleList.clearItems();
      this._wmoList = [];
      this._itemIsEnabled = [];
      this._itemTooltip = [];
      for (var u = e.list, d = 0; d < u.length; d++) {
        var h = u[d];
        if (!h.isUnderConquerControl && (i == -1 || h.kingdomID == i) && (t == null || !!(t.indexOf(h.kingdomID) < 0)) && (!r || !!(r.indexOf(h.areaType) > -1))) {
          this._wmoList.push(h);
          (l = new p.ComboboxItemRendererVO()).itemLabel = h.areaNameString;
          l.data = h;
          if (a != null) {
            this._itemIsEnabled.push(a[d]);
            l.enabled = a[d];
          }
          if (s != null) {
            this._itemTooltip.push(s[d]);
            l.tooltipText = s[d];
          }
          this._castleList.addItem(l);
        }
      }
      var g = c.int(n ? this._wmoList.indexOf(n) : 0);
      if (g < 0) {
        g = 0;
      }
      this._castleList.initArrowGrayOut(this._castleList.numItems > 1);
      this._castleList.selectItemIndex(g);
      this._castleList.disp.addEventListener(o.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.fillUserCastle));
    }
  };
  CastleSelectorComponent.prototype.setNameField = function () {
    if (this.castleSelectorComponent.mc_name) {
      if (this.castleSelectorComponent.mc_name.icastleName_txt) {
        this.castleSelectorComponent.mc_name.icastleName_txt.textContentVO.stringValue = this.selectedCastleVO.areaNameString;
      } else {
        this.castleSelectorComponent.mc_name.icastleName_txt = u.CastleUIComponent.textFieldManager.registerTextField(this.castleSelectorComponent.mc_name.castleName_txt, new l.TextVO(this.selectedCastleVO.areaNameString));
      }
      this.castleSelectorComponent.mc_name.mc_dove.visible = false;
      this.castleSelectorComponent.mc_name.mc_rank.visible = false;
      if (this.castleSelectorComponent.mc_name.mc_searchAlliance) {
        this.castleSelectorComponent.mc_name.mc_searchAlliance.visible = false;
      }
    }
  };
  CastleSelectorComponent.prototype.fillUserCrest = function (e) {
    if (this.castleSelectorComponent.mc_crest0 && this.selectedCastleVO) {
      if (CastleSelectorComponent.isFactionArea(this.selectedCastleVO.areaType)) {
        _.CrestHelper.setCrestGraphics(this.castleSelectorComponent.mc_crest0, _.CrestHelper.getPlayerOrFactionCrest(e));
      } else {
        _.CrestHelper.setCrestGraphics(this.castleSelectorComponent.mc_crest0, e.crest);
      }
    }
  };
  CastleSelectorComponent.prototype.changeSelectedCastle = function (e) {
    var t = c.int(this.getCastleIndex(e));
    if (t < 0) {
      t = 0;
    }
    this.castleList.selectItemIndex(t);
  };
  CastleSelectorComponent.prototype.fillUserCastle = function (e = null) {
    if (this.castleSelectorComponent.mc_castle0) {
      a.MovieClipHelper.clearMovieClip(this.castleSelectorComponent.mc_castle0);
      var t = m.WorldmapObjectIconHelper.drawMapObjectIcon(this.selectedCastleVO, new g(75, 60), true, false, true, "panel_action_jumpTo");
      if (t) {
        this.castleSelectorComponent.mc_castle0.addChild(t);
      }
    }
  };
  CastleSelectorComponent.isFactionArea = function (e) {
    switch (e) {
      case r.WorldConst.AREA_TYPE_FACTION_CAMP:
      case r.WorldConst.AREA_TYPE_FACTION_CAPITAL:
      case r.WorldConst.AREA_TYPE_FACTION_TOWER:
      case r.WorldConst.AREA_TYPE_FACTION_VILLAGE:
        return true;
      default:
        return false;
    }
  };
  CastleSelectorComponent.prototype.dispose = function () {
    if (this._castleList) {
      this._castleList.disp.removeEventListener(o.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.fillUserCastle));
    }
  };
  Object.defineProperty(CastleSelectorComponent.prototype, "selectedCastleVO", {
    get: function () {
      if (this._castleList) {
        return this._castleList.selectedData;
      } else {
        return this._wmoList[0];
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSelectorComponent.prototype, "castleSelectorComponent", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSelectorComponent.prototype, "castleList", {
    get: function () {
      return this._castleList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSelectorComponent.prototype, "selectedIndex", {
    get: function () {
      return this._castleList.selectedId;
    },
    enumerable: true,
    configurable: true
  });
  CastleSelectorComponent.prototype.getCastleByKingdom = function (e) {
    for (var t = 0; t < this._wmoList.length; t++) {
      if (this._wmoList[t].kingdomID == e) {
        return this._wmoList[t];
      }
    }
    return null;
  };
  CastleSelectorComponent.prototype.getCastleIndex = function (e) {
    for (var t = 0; t < this._wmoList.length; t++) {
      if (this._wmoList[t].objectId == e.objectId) {
        return t;
      }
    }
    return -1;
  };
  CastleSelectorComponent.prototype.castleIsEnabled = function (e) {
    var t = c.int(this.getCastleIndex(e));
    return t >= 0 && !!this._itemIsEnabled[t];
  };
  return CastleSelectorComponent;
}(u.CastleUIComponent);
exports.CastleSelectorComponent = C;
var _ = require("./61.js");
var m = require("./70.js");
var f = require("./178.js");
s.classImplementsInterfaces(C, "ICollectableRendererList");