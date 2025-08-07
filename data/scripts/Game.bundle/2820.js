Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./6.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./1.js");
var u = require("./1.js");
var d = require("./5.js");
var p = require("./421.js");
var h = require("./55.js");
var g = require("./53.js");
var C = require("./4.js");
var _ = require("./14.js");
var m = require("./153.js");
var f = require("./92.js");
var O = createjs.Shape;
var E = createjs.Container;
var y = function (e) {
  function IsoHelperView() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(IsoHelperView, e);
  IsoHelperView.prototype.createIsoObjectVEFromVO = function (e) {
    if (!e) {
      console.warn("IsoHelperView.createIsoObjectVEFromVO(): sourceVO is null.");
      return null;
    }
    var t = e.getViewClass();
    if (!t) {
      return null;
    }
    var i = new t();
    if (i) {
      i.init(e);
    }
    return i;
  };
  IsoHelperView.prototype.createFloorDisp = function (e, t, i) {
    var n = new E();
    n.mouseChildren = false;
    n.mouseEnabled = false;
    var o = v.IsoConst.GRID_TILE_DIMENSION_UNTRANSLATED.x * e.x;
    var a = v.IsoConst.GRID_TILE_DIMENSION_UNTRANSLATED.y * e.y;
    var s = new O();
    s.graphics.beginFill(t, i);
    s.graphics.drawRect(0, 0, o, a);
    s.graphics.endFill();
    s.rotation = 45;
    s.setBounds(0, 0, o, a);
    n.addChild(s);
    n.scaleX = 2;
    n.x = 0;
    n.y = 0;
    return n;
  };
  IsoHelperView.prototype.createCenterCross = function (e = -1, t = 16711935) {
    var i = new O();
    i.graphics.beginFill(t, 1);
    i.graphics.drawRect(-2, -30, 4, 60);
    i.graphics.drawRect(-30, -2, 60, 4);
    i.graphics.endFill();
    var n = new E();
    n.addChild(i);
    if (e >= 0) {
      var o = new u.TextField();
      o.text = "" + e;
      o.textColor = t;
      o.x = 35;
      o.y = -40;
      o.scaleX = o.scaleY = 4;
      o.autoSize = c.TextFieldAutoSize.LEFT;
      n.addChild(o);
    }
    return n;
  };
  Object.defineProperty(IsoHelperView.prototype, "stage", {
    get: function () {
      return _.CastleComponent.layoutManager.stage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoHelperView.prototype, "bgStage", {
    get: function () {
      return _.CastleComponent.layoutManager.bgStage;
    },
    enumerable: true,
    configurable: true
  });
  IsoHelperView.prototype.changeCursor = function (e) {
    _.CastleComponent.layoutManager.customCursor.setCursorType(e);
  };
  IsoHelperView.prototype.showRingMenu = function (e, t = null) {
    if (e) {
      if (!t) {
        return;
      }
      var i = s.int(t.vo.isInBuildingDistrict ? 8 : -1);
      _.CastleComponent.layoutManager.showIngameUIComponent(D.RingMenuBuilding, t, i);
      _.CastleComponent.controller.dispatchEvent(new f.IsoEvent(f.IsoEvent.SHOW_PANEL_INFO, [t.vo]));
    } else {
      _.CastleComponent.layoutManager.hideIngameUIComponent(D.RingMenuBuilding);
      _.CastleComponent.controller.dispatchEvent(new f.IsoEvent(f.IsoEvent.HIDE_PANEL_INFO, []));
    }
  };
  IsoHelperView.prototype.showBuildingInfoText = function (e, t = null) {
    if (e && t.interactiveVO.isInfoTooltipAvailable) {
      _.CastleComponent.layoutManager.showIngameUIComponent(I.InfoTooltipBuilding, t);
    } else {
      _.CastleComponent.layoutManager.hideIngameUIComponent(I.InfoTooltipBuilding);
    }
  };
  IsoHelperView.prototype.showRotationPanel = function (e, t = null) {
    if (e) {
      _.CastleComponent.layoutManager.showPanel(T.CastleRotationPanel);
      var i = _.CastleComponent.layoutManager.getPanel(T.CastleRotationPanel);
      if (i) {
        i.initAfterShow(t);
      }
    } else {
      _.CastleComponent.layoutManager.hidePanel(T.CastleRotationPanel);
    }
  };
  Object.defineProperty(IsoHelperView.prototype, "isInIsoScreen", {
    get: function () {
      return _.CastleComponent.layoutManager.currentState == b.CastleLayoutManager.STATE_ISO;
    },
    enumerable: true,
    configurable: true
  });
  IsoHelperView.prototype.doesAssetFileExist = function (e) {
    return l.BasicModel.basicLoaderData.isItemAssetVersioned(e);
  };
  IsoHelperView.prototype.getAssetFileURL = function (e) {
    return l.BasicModel.basicLoaderData.getVersionedItemAssetUrl(e);
  };
  Object.defineProperty(IsoHelperView.prototype, "areAnimationsActive", {
    get: function () {
      return C.CastleModel.gfxData.animationActive;
    },
    enumerable: true,
    configurable: true
  });
  IsoHelperView.prototype.calcPosToCoordinateSystem = function (e, t, i) {
    return i.globalToLocal(t.localToGlobal(e));
  };
  IsoHelperView.prototype.canUseIsoEventSkin = function () {
    var e = C.CastleModel.specialEventData.getActiveEventByEventId(d.EventConst.EVENTTYPE_EVENT_SKIN);
    return !!e && e.canUseIsoSkin() || g.ABGHelper.isOnABGServer;
  };
  IsoHelperView.prototype.getIsoEventSkinSuffix = function () {
    if (g.ABGHelper.isOnABGServer) {
      return p.ClientConstIsoChangeEventSkin.getValidSkinSuffixForCurrentKingdom(true, false);
    }
    if (this.canUseIsoEventSkin()) {
      var e = C.CastleModel.specialEventData.getActiveEventByEventId(d.EventConst.EVENTTYPE_EVENT_SKIN);
      return h.ClientConstUtils.capitalizeFirstLetter(e.skinString);
    }
    return "";
  };
  IsoHelperView.prototype.getIsoColorsByKingdomId = function (e) {
    return v.IsoConst.ISO_COLORS.get(m.KingdomEnum.getTypeById(e));
  };
  IsoHelperView.prototype.getIsoColorsByActiveKingdom = function () {
    return v.IsoConst.ISO_COLORS.get(m.KingdomEnum.getTypeById(C.CastleModel.areaData.activeAreaInfo.kingdomID));
  };
  IsoHelperView.prototype.isValidDragPanel = function (e) {
    return v.IsoConst.VALID_PANELS_FOR_DRAGGING.indexOf(h.ClientConstUtils.getClassFromObject(e)) >= 0;
  };
  IsoHelperView.prototype.getBuildingPlaceHolderClass = function (e, t) {
    var i = "Placeholder_" + e + "x" + t;
    try {
      return a.getDefinitionByNameFromLibrary(i);
    } catch (e) {
      r.error("AInteractiveIsoObjectVE.buildingPlaceHolderClass): ClassNotFound - " + i);
    }
    return null;
  };
  return IsoHelperView;
}(_.CastleComponent);
exports.IsoHelperView = y;
var b = require("./17.js");
var D = require("./369.js");
var I = require("./2821.js");
var T = require("./1184.js");
var v = require("./144.js");
o.classImplementsInterfaces(y, "ICollectableRendererList");