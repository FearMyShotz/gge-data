Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.MouseEvent;
var o = function () {
  function CastleTreasureMapMovement(e, t, i, o, a = false) {
    this._from = 0;
    this._to = 0;
    this._isReversed = false;
    this._movementVO = t;
    this._disp = e;
    this._from = i;
    this._to = o;
    this._isReversed = a;
    this._disp.addEventListener(n.CLICK, this.bindFunction(this.onClick));
    this._disp.addEventListener(n.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this._disp.addEventListener(n.MOUSE_OUT, this.bindFunction(this.onMouseOut));
  }
  CastleTreasureMapMovement.prototype.update = function () {
    var e = c.int(this._movementVO.currentProgress * 100);
    if (this._disp) {
      if (this._isReversed) {
        this._disp.gotoAndStop(Math.max(1, Math.min(100 - e)));
      } else {
        this._disp.gotoAndStop(Math.min(100, Math.max(e)));
      }
    }
  };
  CastleTreasureMapMovement.prototype.onClick = function (e) {
    l.CommandController.instance.executeCommand(a.IngameClientCommands.OPEN_MOVEMENT_INFO_DIALOG_COMMAND, this._movementVO);
  };
  CastleTreasureMapMovement.prototype.onMouseOver = function (e) {
    this._disp.useFilters(u.BitmapFilterHelper.FILTER_GLOW_STANDARD);
    s.CastleLayoutManager.getInstance().customCursor.setCursorType(r.BasicCustomCursor.CURSOR_CLICK);
  };
  CastleTreasureMapMovement.prototype.onMouseOut = function (e) {
    this._disp.useFilters(u.BitmapFilterHelper.NO_FILTER);
    s.CastleLayoutManager.getInstance().customCursor.setCursorType(r.BasicCustomCursor.CURSOR_ARROW);
  };
  CastleTreasureMapMovement.prototype.dispose = function () {
    this._disp.removeEventListener(n.CLICK, this.bindFunction(this.onClick));
    this._disp.removeEventListener(n.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this._disp.removeEventListener(n.MOUSE_OUT, this.bindFunction(this.onMouseOut));
  };
  Object.defineProperty(CastleTreasureMapMovement.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTreasureMapMovement.prototype, "movementVO", {
    get: function () {
      return this._movementVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTreasureMapMovement.prototype, "target", {
    get: function () {
      return this._to;
    },
    enumerable: true,
    configurable: true
  });
  return CastleTreasureMapMovement;
}();
exports.CastleTreasureMapMovement = o;
var a = require("./29.js");
var s = require("./17.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./6.js");
var u = require("./68.js");