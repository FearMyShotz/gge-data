Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./18.js");
var c = require("./32.js");
var u = require("./15.js");
var d = require("./4.js");
var p = require("./68.js");
var h = require("./17.js");
var g = require("./200.js");
var C = require("./1149.js");
var _ = createjs.MouseEvent;
var m = createjs.TimerEvent;
var f = createjs.Point;
var O = function (e) {
  function InteractiveMapmovement() {
    var t = this;
    t._hasRingMenu = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(InteractiveMapmovement, e);
  InteractiveMapmovement.prototype.initVisualRep = function () {
    e.prototype.initVisualRep.call(this);
    this.addMouseListener();
    if (this.mapMovementVO && this.mapMovementVO.movementOwnerInfo && this.mapMovementVO.movementOwnerInfo.isOwnOwnerInfo) {
      u.CastleBasicController.getInstance().addEventListener(c.CastleUserDataEvent.CHANGE_USER_AVATAR, this.bindFunction(this.onChangeCrest));
    }
  };
  InteractiveMapmovement.prototype.onChangeCrest = function (e) {
    var t = d.CastleModel.otherPlayerData.getOwnInfoVO();
    if (t) {
      this.mapMovementVO.updateOwnerInfos(t);
      this.drawMovementIcon();
    }
  };
  InteractiveMapmovement.prototype.remove = function () {
    e.prototype.remove.call(this);
    this.removeMouseListener();
    u.CastleBasicController.getInstance().removeEventListener(c.CastleUserDataEvent.CHANGE_USER_AVATAR, this.bindFunction(this.onChangeCrest));
  };
  InteractiveMapmovement.prototype.addMouseListener = function () {
    if (this.disp) {
      this.objectLayer.addEventListener(_.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this.objectLayer.addEventListener(_.ROLL_OVER, this.bindFunction(this.onRollOver));
      this.objectLayer.addEventListener(_.ROLL_OUT, this.bindFunction(this.onRollOut));
      this.objectLayer.addEventListener(_.MOUSE_OVER, this.bindFunction(this.onMouseOver));
      this.objectLayer.addEventListener(_.MOUSE_OUT, this.bindFunction(this.onMouseOut));
      this.objectLayer.addEventListener(_.CLICK, this.bindFunction(this.onClick));
      this.objectLayer.addEventListener(_.DOUBLE_CLICK, this.bindFunction(this.onDoubleClick));
      this.objectLayer.doubleClickEnabled = true;
      this._doubleClickTimer = new s.Timer(100, 1);
      this._doubleClickTimer.addEventListener(m.TIMER, this.bindFunction(this.onSingleClick));
    }
  };
  InteractiveMapmovement.prototype.onClick = function (e) {
    this._doubleClickTimer.start();
  };
  InteractiveMapmovement.prototype.onDoubleClick = function (e) {
    this._doubleClickTimer.stop();
  };
  InteractiveMapmovement.prototype.onSingleClick = function (e) {
    if (!this.mapMovementVO.isStationed || this.mapMovementVO.targetArea.areaType != r.WorldConst.AREA_TYPE_DAIMYO_TOWNSHIP && this.mapMovementVO.targetArea.areaType != r.WorldConst.AREA_TYPE_ALLIANCE_BATTLE_GROUND_TOWER) {
      this.onMouseUp();
    } else {
      E.CastleDialogHandler.getInstance().registerDefaultDialogs(y.SupportOverviewDialog, new b.SupportOverviewDialogProperties(this.mapMovementVO.targetArea));
    }
  };
  InteractiveMapmovement.prototype.removeMouseListener = function () {
    if (this.objectLayer) {
      this.objectLayer.removeEventListener(_.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this.objectLayer.removeEventListener(_.ROLL_OVER, this.bindFunction(this.onRollOver));
      this.objectLayer.removeEventListener(_.ROLL_OUT, this.bindFunction(this.onRollOut));
      this.objectLayer.removeEventListener(_.MOUSE_OVER, this.bindFunction(this.onMouseOver));
      this.objectLayer.removeEventListener(_.MOUSE_OUT, this.bindFunction(this.onMouseOut));
      this.objectLayer.removeEventListener(_.CLICK, this.bindFunction(this.onClick));
      this.objectLayer.removeEventListener(_.DOUBLE_CLICK, this.bindFunction(this.onDoubleClick));
    }
    if (this._doubleClickTimer) {
      this._doubleClickTimer.removeEventListener(m.TIMER, this.bindFunction(this.onSingleClick));
    }
  };
  InteractiveMapmovement.prototype.onMouseDown = function (e) {};
  InteractiveMapmovement.prototype.onMouseUp = function (e = null) {
    this.showRingMenu();
  };
  InteractiveMapmovement.prototype.showRingMenu = function () {};
  InteractiveMapmovement.prototype.onRollOut = function (e) {
    this.removeGlow();
    this.worldmapRenderer.camera.objectUnderMouse = null;
  };
  InteractiveMapmovement.prototype.onRollOver = function (e) {
    this.addGlow();
  };
  InteractiveMapmovement.prototype.onMouseOver = function (e) {
    if (o.BasicToolTipManager.TOOLTIP_LABEL in e.target && e.target.toolTipText) {
      h.CastleLayoutManager.getInstance().tooltipManager.show(e.target.toolTipText, e.target);
    }
  };
  InteractiveMapmovement.prototype.onMouseOut = function (e) {
    g.TooltipManagerFacade.hideAllTooltips();
  };
  InteractiveMapmovement.prototype.addGlow = function () {
    var e = d.CastleModel.kingdomData.activeKingdomID == r.WorldIce.KINGDOM_ID ? p.BitmapFilterHelper.FILTER_GLOW_BLUE : p.BitmapFilterHelper.FILTER_GLOW_STANDARD;
    if (this._arrowLayer && this._arrowLayer.width <= l.ClientConstCastle.MAX_SIZE_FOR_CACHING && this.objectLayer.height <= l.ClientConstCastle.MAX_SIZE_FOR_CACHING) {
      this._arrowLayer.useFilters(e, true);
    }
  };
  InteractiveMapmovement.prototype.removeGlow = function () {
    if (this._arrowLayer) {
      this._arrowLayer.useFilters(p.BitmapFilterHelper.NO_FILTER, false);
    }
    if (this._movementIconContainer.children[0]) {
      this._movementIconContainer.children[0].useFilters(p.BitmapFilterHelper.NO_FILTER, true);
    }
  };
  Object.defineProperty(InteractiveMapmovement.prototype, "hasRingMenu", {
    get: function () {
      return this._hasRingMenu;
    },
    set: function (e) {
      this._hasRingMenu = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapmovement.prototype, "line1Content", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapmovement.prototype, "line2Content", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapmovement.prototype, "line3Content", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapmovement.prototype, "isTimerToolTip", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapmovement.prototype, "toolTipPosition", {
    get: function () {
      var e = this.movementIconContainer.getBounds(null);
      return new f(this.movementIconContainer.x + e.x + e.width / 2, this.movementIconContainer.y + e.y + e.height / 2);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapmovement.prototype, "clampToViewport", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  return InteractiveMapmovement;
}(C.BasicMapmovement);
exports.InteractiveMapmovement = O;
a.classImplementsInterfaces(O, "IIngameUICapable", "IWorldmapTooltipData");
var E = require("./9.js");
var y = require("./962.js");
var b = require("./963.js");