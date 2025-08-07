Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function AIsoMovementAction(e, t) {
    this._willFadeIn = false;
    this._willFadeOut = false;
    this._currentTransparency = 1;
    this._transparencyDelta = 0;
    this._actionIsFinished = false;
    this._willFadeIn = e;
    this._willFadeOut = t;
  }
  AIsoMovementAction.prototype.init = function (e) {
    this._movementVO = e;
  };
  AIsoMovementAction.prototype.start = function () {};
  AIsoMovementAction.prototype.update = function (e) {
    this.updateFading();
  };
  AIsoMovementAction.prototype.destroy = function () {};
  AIsoMovementAction.prototype.updateFading = function () {
    this._currentTransparency += this._transparencyDelta;
    this._currentTransparency = a.MathBase.clamp(this._currentTransparency, 0, 1);
  };
  AIsoMovementAction.prototype.fadeOut = function () {
    this._currentTransparency = 1;
    this._transparencyDelta = -o.IsoConst.MOVEMENTS_FADE_SPEED;
  };
  AIsoMovementAction.prototype.fadeIn = function () {
    this._currentTransparency = 0;
    this._transparencyDelta = o.IsoConst.MOVEMENTS_FADE_SPEED;
  };
  Object.defineProperty(AIsoMovementAction.prototype, "actionType", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoMovementAction.prototype, "movementVO", {
    get: function () {
      return this._movementVO;
    },
    enumerable: true,
    configurable: true
  });
  AIsoMovementAction.prototype.onActionDone = function () {
    if (!this.actionIsFinished) {
      this._actionIsFinished = true;
      this.movementVO.onCurrentActionDone();
    }
  };
  Object.defineProperty(AIsoMovementAction.prototype, "grid", {
    get: function () {
      return this.movementVO.isoData.grid;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoMovementAction.prototype, "willFadeIn", {
    get: function () {
      return this._willFadeIn;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoMovementAction.prototype, "willFadeOut", {
    get: function () {
      return this._willFadeOut;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoMovementAction.prototype, "actionIsFinished", {
    get: function () {
      return this._actionIsFinished;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoMovementAction.prototype, "currentTransparency", {
    get: function () {
      return this._currentTransparency;
    },
    enumerable: true,
    configurable: true
  });
  return AIsoMovementAction;
}();
exports.AIsoMovementAction = n;
var o = require("./144.js");
var a = require("./2.js");