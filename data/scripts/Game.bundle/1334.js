Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./90.js");
var h = require("./4.js");
var g = require("./68.js");
var C = require("./24.js");
var _ = createjs.Container;
var m = createjs.MouseEvent;
var f = createjs.Point;
var O = function () {
  function OccupiedMarker() {}
  OccupiedMarker.prototype.init = function (e, t) {
    this._targetMapobjectVO = e;
    this._siegeOwnerVO = t;
    this._disp = new _();
    this._clip = new C.CastleGoodgameExternalClip("MapObjectSiege_Common", this.assetFileURL, this.getClipColor(), 0, false);
    this._disp.addChild(this.clip);
    this._disp.mouseChildren = false;
    this.disp.addEventListener(m.ROLL_OVER, this.bindFunction(this.onRollOver));
    this.disp.addEventListener(m.ROLL_OUT, this.bindFunction(this.onRollOut));
  };
  Object.defineProperty(OccupiedMarker.prototype, "assetFileURL", {
    get: function () {
      return n.BasicModel.basicLoaderData.getVersionedItemAssetUrl("MapObjectSiege_Common");
    },
    enumerable: true,
    configurable: true
  });
  OccupiedMarker.prototype.getClipColor = function () {
    var e = [];
    if (h.CastleModel.kingdomData.activeKingdomID == r.FactionConst.KINGDOM_ID) {
      e.push(new o.ClipColor("flag", this._siegeOwnerVO.factionID == r.FactionConst.BLUE_FACTION ? E.FactionEventVO.BLUE_CREST_VO.colorsFour : E.FactionEventVO.RED_CREST_VO.colorsFour));
    } else {
      e.push(new o.ClipColor("flag", this._siegeOwnerVO.crest.colorsFour));
    }
    return e;
  };
  OccupiedMarker.prototype.remove = function () {
    this._disp.removeEventListener(m.ROLL_OVER, this.bindFunction(this.onRollOver));
    this._disp.removeEventListener(m.ROLL_OUT, this.bindFunction(this.onRollOut));
  };
  OccupiedMarker.prototype.onRollOver = function (e) {
    if (!this.hasRingMenu) {
      y.CastleLayoutManager.getInstance().worldmapScreen.renderer.dispatchEvent(new p.CastleWorldmapEvent(p.CastleWorldmapEvent.INFOTOOLTIP, [true, this]));
    }
    this._disp.useFilters(this.getGlowFilter());
  };
  OccupiedMarker.prototype.onRollOut = function (e) {
    y.CastleLayoutManager.getInstance().worldmapScreen.renderer.dispatchEvent(new p.CastleWorldmapEvent(p.CastleWorldmapEvent.INFOTOOLTIP, [false]));
    this._disp.useFilters(g.BitmapFilterHelper.NO_FILTER);
  };
  OccupiedMarker.prototype.getGlowFilter = function () {
    if (h.CastleModel.kingdomData.activeKingdomID == l.WorldIce.KINGDOM_ID) {
      return g.BitmapFilterHelper.FILTER_GLOW_BLUE;
    } else {
      return g.BitmapFilterHelper.FILTER_GLOW_STANDARD;
    }
  };
  Object.defineProperty(OccupiedMarker.prototype, "hasRingMenu", {
    get: function () {
      return false;
    },
    set: function (e) {},
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OccupiedMarker.prototype, "uiBounds", {
    get: function () {
      return this.uiDisp.getBounds(null);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OccupiedMarker.prototype, "uiDisp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OccupiedMarker.prototype, "uiPos", {
    get: function () {
      if (this._disp) {
        return new f(this._disp.x, this._disp.y);
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OccupiedMarker.prototype, "mapObjectVO", {
    get: function () {
      return this._targetMapobjectVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OccupiedMarker.prototype, "ownerVO", {
    get: function () {
      return this._siegeOwnerVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OccupiedMarker.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OccupiedMarker.prototype, "clip", {
    get: function () {
      return this._clip;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OccupiedMarker.prototype, "line1Content", {
    get: function () {
      var e;
      this.ownerVO.playerID;
      h.CastleModel.userData.playerID;
      e = b.CastleTitleSystemHelper.getPlayerNameWithTitleFromPlayerInfo(this.ownerVO);
      return new u.LocalizedTextVO("worldmap_tooltipp_besieged", [e]);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OccupiedMarker.prototype, "line2Content", {
    get: function () {
      var e = c.Localize.text(a.GenericTextIds.VALUE_ASSIGN_COLON, [c.Localize.text("level"), this.ownerVO.playerLevel]);
      var t = c.Localize.text(a.GenericTextIds.VALUE_ASSIGN_COLON, [c.Localize.text("legendLevel"), this.ownerVO.playerLegendLevel]);
      var i = c.Localize.text(a.GenericTextIds.VALUE_ASSIGN_COLON, [c.Localize.text("honor"), this.ownerVO.honor]);
      var n = this.ownerVO.isLegend ? c.Localize.text(a.GenericTextIds.VALUE_SIMPLE_COMP, [e, t]) : e;
      return new u.LocalizedTextVO(a.GenericTextIds.VALUE_SIMPLE_COMP, [n, i]);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OccupiedMarker.prototype, "line3Content", {
    get: function () {
      if (this.ownerVO.isInAlliance && this.mapObjectVO.kingdomID != r.FactionConst.KINGDOM_ID) {
        return new d.TextVO(this.ownerVO.allianceName);
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OccupiedMarker.prototype, "isTimerToolTip", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OccupiedMarker.prototype, "toolTipPosition", {
    get: function () {
      var e = this.uiDisp.parent;
      var t = y.CastleLayoutManager.getInstance().worldmapScreen.camera.viewPortZoom;
      var i = e.getBounds(null);
      return new f(e.x + (i.x + i.width / 2) * t, e.y + (i.y + i.height / 2 - 20) * t);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OccupiedMarker.prototype, "clampToViewport", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  return OccupiedMarker;
}();
exports.OccupiedMarker = O;
var E = require("./202.js");
var y = require("./17.js");
var b = require("./117.js");
s.classImplementsInterfaces(O, "IIngameUICapable", "IWorldmapTooltipData");