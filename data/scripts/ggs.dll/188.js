Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./189.js");
var a = createjs.Event;
var s = createjs.MouseEvent;
var r = createjs.Container;
var o = function () {
  function BasicCustomCursor(e) {
    this._lastUpdate = 0;
    this._lookForLowPerformance = false;
    this._useUpdateAfterEvent = true;
    this._isEnabled = false;
    this._hidePermanent = false;
    this._disp = e;
    this._additionalCursorGfx = new r();
    this._additionalCursorGfx.mouseChildren = false;
    this._additionalCursorGfx.mouseEnabled = false;
    this._disp.addChild(this._additionalCursorGfx);
  }
  BasicCustomCursor.prototype.init = function () {
    this._disp.mouseEnabled = false;
    this._disp.mouseChildren = false;
    this._disp.addEventListener(a.ADDED_TO_STAGE, this.bindFunction(this.onAddedToStage));
    this._isEnabled = true;
  };
  BasicCustomCursor.prototype.onAddedToStage = function (e) {
    this._disp.removeEventListener(a.ADDED_TO_STAGE, this.bindFunction(this.onAddedToStage));
    this._disp.stage.addEventListener(s.MOUSE_MOVE, this.bindFunction(this.updateMouse));
    this._disp.stage.addEventListener(s.MOUSE_LEAVE, this.bindFunction(this.mouseLeaveHandler));
    this._disp.stage.addEventListener(a.ENTER_FRAME, this.bindFunction(this.updateTimer));
    this.setCursorType(BasicCustomCursor.CURSOR_ARROW);
  };
  BasicCustomCursor.prototype.hideForPerformance = function () {
    if (this._disp) {
      this._disp.stage.removeEventListener(s.MOUSE_MOVE, this.bindFunction(this.updateMouse));
      this._disp.stage.removeEventListener(s.MOUSE_LEAVE, this.bindFunction(this.mouseLeaveHandler));
      this._disp.stage.removeEventListener(s.MOUSE_MOVE, this.bindFunction(this.mouseReturnHandler));
      this._disp.stage.removeEventListener(a.ENTER_FRAME, this.bindFunction(this.updateTimer));
      this._disp.visible = false;
      this.isEnabled = false;
      this._hidePermanent = true;
    }
  };
  BasicCustomCursor.prototype.updateTimer = function (e) {
    this._lastUpdate = Date.now();
  };
  BasicCustomCursor.prototype.setCursorType = function (e) {
    if (this._currentType != e && this._disp) {
      i.MovieClipHelper.clearMovieClip(this.additionalCursorGfx);
      this._disp.gotoAndStop(e);
    }
  };
  BasicCustomCursor.prototype.updateMouse = function (e) {
    if (this._isEnabled && this._disp.stage) {
      this._disp.x = this._disp.stage.mouseX;
      this._disp.y = this._disp.stage.mouseY;
      if (this.isOkToUpdate()) {
        this._useUpdateAfterEvent;
      }
    }
  };
  BasicCustomCursor.prototype.mouseLeaveHandler = function (e) {
    this.hideCustomCursor();
    if (this._disp.stage) {
      this._disp.stage.addEventListener(s.MOUSE_MOVE, this.bindFunction(this.mouseReturnHandler));
    }
  };
  BasicCustomCursor.prototype.mouseReturnHandler = function (e) {
    this.isEnabled = this._isEnabled;
    if (this._disp.stage) {
      this._disp.stage.removeEventListener(s.MOUSE_MOVE, this.bindFunction(this.mouseReturnHandler));
    }
  };
  BasicCustomCursor.prototype.hideCustomCursor = function () {
    if (this._disp) {
      this._disp.visible = false;
    }
  };
  BasicCustomCursor.prototype.showCustomCursor = function () {
    if (this._disp && !this._hidePermanent) {
      this._disp.visible = true;
    }
  };
  Object.defineProperty(BasicCustomCursor.prototype, "isEnabled", {
    get: function () {
      return this._isEnabled;
    },
    set: function (e) {
      this.setIsEnabled(e);
    },
    enumerable: true,
    configurable: true
  });
  BasicCustomCursor.prototype.setIsEnabled = function (e) {
    if (!this._hidePermanent) {
      this._isEnabled = e;
      if (this._isEnabled) {
        this.showCustomCursor();
      } else {
        this.hideCustomCursor();
      }
    }
  };
  Object.defineProperty(BasicCustomCursor.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicCustomCursor.prototype, "additionalCursorGfx", {
    get: function () {
      return this._additionalCursorGfx;
    },
    enumerable: true,
    configurable: true
  });
  BasicCustomCursor.prototype.isOkToUpdate = function () {
    if (!this._lookForLowPerformance) {
      return true;
    }
    var e = Date.now();
    var t = e - this._lastUpdate;
    if (t > BasicCustomCursor.MAXIMUM_TIME_TO_FALLBACK) {
      this.hideForPerformance();
      return false;
    } else {
      return t > BasicCustomCursor.MINIMUM_TIME_TO_UPDATE && (this._lastUpdate = e, true);
    }
  };
  Object.defineProperty(BasicCustomCursor.prototype, "lookForLowPerformance", {
    set: function (e) {
      this._lookForLowPerformance = e;
      this._lastUpdate = Date.now();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicCustomCursor.prototype, "useUpdateAfterEvent", {
    get: function () {
      return this._useUpdateAfterEvent;
    },
    set: function (e) {
      this._useUpdateAfterEvent = e;
    },
    enumerable: true,
    configurable: true
  });
  BasicCustomCursor.CURSOR_ARROW = 1;
  BasicCustomCursor.CURSOR_CLICK = 2;
  BasicCustomCursor.CURSOR_DRAG = 3;
  BasicCustomCursor.CURSOR_HAND = 4;
  BasicCustomCursor.CURSOR_ZOOM = 5;
  BasicCustomCursor.MINIMUM_TIME_TO_UPDATE = 50;
  BasicCustomCursor.MAXIMUM_TIME_TO_FALLBACK = 150;
  return BasicCustomCursor;
}();
exports.BasicCustomCursor = o;