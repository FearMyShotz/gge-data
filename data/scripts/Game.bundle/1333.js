Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./21.js");
var c = require("./4.js");
var u = require("./213.js");
var d = require("./2363.js");
var p = require("./415.js");
var h = require("./1334.js");
var g = function (e) {
  function WorldmapInfoTooltip() {
    var t = this;
    CONSTRUCTOR_HACK;
    (t = e.call(this, new Library.CastleInterfaceElements.InfoTooltip_Building()) || this).infoToolTip.mouseChildren = false;
    t.infoToolTip.mouseEnabled = false;
    t._itxtLine1 = t.textFieldManager.registerTextField(t.infoToolTip.txt_line1, new r.TextVO(""), new o.InternalGGSTextFieldConfigVO(true));
    t._itxtLine2 = t.textFieldManager.registerTextField(t.infoToolTip.txt_line2, new r.TextVO(""), new o.InternalGGSTextFieldConfigVO(true));
    t._itxtLine3 = t.textFieldManager.registerTextField(t.infoToolTip.txt_line3, new r.TextVO(""), new o.InternalGGSTextFieldConfigVO(true));
    t._itxtLine1.autoFitToBounds = true;
    t._itxtLine2.autoFitToBounds = true;
    t._itxtLine3.autoFitToBounds = true;
    return t;
  }
  n.__extends(WorldmapInfoTooltip, e);
  WorldmapInfoTooltip.prototype.updateMenuPosition = function () {
    if (!!this.toolTipData && (!a.instanceOfClass(this.target, "SiegeMapmovement") || !this.target.ringMenuBlocksTooltip())) {
      if (!this.target || a.instanceOfClass(this.target, "VisualMapElement") && !this.target.disp) {
        this.hide();
      } else if (!(this.target instanceof h.OccupiedMarker) || this.target.uiDisp && this.target.uiDisp.parent) {
        var e = this.toolTipData.toolTipPosition;
        if (this.toolTipData.clampToViewport) {
          var t = Math.max(this._itxtLine1.textWidth, this._itxtLine2.textWidth, this._itxtLine3.textWidth) / 2;
          this.disp.x = u.CastleMathHelper.clamp(e.x, t, this.disp.stage.stageWidth - t);
        } else {
          this.disp.x = e.x;
        }
        this.disp.y = e.y;
      } else {
        this.hide();
      }
    }
  };
  Object.defineProperty(WorldmapInfoTooltip.prototype, "worldLayer", {
    get: function () {
      return null;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.BasicIngameUIComponent.prototype, "worldLayer").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  WorldmapInfoTooltip.prototype.initComponent = function () {
    this.updateTooltip();
    if (this.toolTipData.isTimerToolTip) {
      c.CastleModel.timerData.addEventListener(l.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    } else {
      c.CastleModel.timerData.removeEventListener(l.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    }
  };
  WorldmapInfoTooltip.prototype.onTimerUpdate = function (e) {
    this.updateTooltip();
  };
  WorldmapInfoTooltip.prototype.updateTooltip = function () {
    if (d.instanceOf_IWorldMapObject(this.target) && a.instanceOfClass(this.target.worldmapObjectVO, "ContainerBuilderMapobjectVO") && this.target.worldmapObjectVO.underConstruction) {
      this.safelyAssignTextContent(this._itxtLine1, new s.LocalizedTextVO("areaNotAvailable_tooltip"));
      this.safelyAssignTextContent(this._itxtLine2, new s.LocalizedTextVO("areaNotAvailable_checkLater_tooltip"));
      this.safelyAssignTextContent(this._itxtLine3, new r.TextVO(""));
    } else {
      this.safelyAssignTextContent(this._itxtLine1, this.toolTipData.line1Content);
      this.safelyAssignTextContent(this._itxtLine2, this.toolTipData.line2Content);
      this.safelyAssignTextContent(this._itxtLine3, this.toolTipData.line3Content);
    }
  };
  WorldmapInfoTooltip.prototype.safelyAssignTextContent = function (e, t) {
    if (t) {
      e.textContentVO = t;
    } else {
      e.clearText();
    }
  };
  Object.defineProperty(WorldmapInfoTooltip.prototype, "toolTipData", {
    get: function () {
      return this.target;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldmapInfoTooltip.prototype, "infoToolTip", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldmapInfoTooltip.prototype, "target", {
    get: function () {
      return Object.getOwnPropertyDescriptor(p.BasicIngameUIComponent.prototype, "target").get.call(this);
    },
    set: function (e) {
      if (d.instanceOf_IWorldMapObject(e)) {
        this.removeTimer();
        this.targetOwnerInfo = e.worldmapObjectVO.ownerInfo;
      }
      Object.getOwnPropertyDescriptor(p.BasicIngameUIComponent.prototype, "target").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  WorldmapInfoTooltip.prototype.onMouseOut = function (t) {
    this.removeTimer();
    e.prototype.onMouseOut.call(this, t);
  };
  WorldmapInfoTooltip.prototype.hide = function () {
    this.removeTimer();
    e.prototype.hide.call(this);
  };
  WorldmapInfoTooltip.prototype.destroy = function () {
    this.removeTimer();
    e.prototype.destroy.call(this);
  };
  WorldmapInfoTooltip.prototype.removeTimer = function () {
    c.CastleModel.timerData.removeEventListener(l.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  WorldmapInfoTooltip.__initialize_static_members = function () {
    WorldmapInfoTooltip.NAME = "WorldmapInfoTooltip";
  };
  return WorldmapInfoTooltip;
}(p.BasicIngameUIComponent);
exports.WorldmapInfoTooltip = g;
g.__initialize_static_members();