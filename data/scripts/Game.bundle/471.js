Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./23.js");
var o = require("./23.js");
var a = createjs.Graphics;
var s = createjs.Container;
var r = createjs.Shape;
var l = createjs.Point;
var c = createjs.Ticker;
var u = function () {
  function CastleTutorialSpotlight(e) {
    this.onTick = function (e) {
      if (!c.paused) {
        d.CastleLayoutManager.getInstance().castleTutorialStage.update(e);
      }
    };
    if (e == null) {
      throw new Error("do not instantiate, use instance getter");
    }
    this.createSprite();
  }
  Object.defineProperty(CastleTutorialSpotlight, "instance", {
    get: function () {
      CastleTutorialSpotlight._instance ||= new CastleTutorialSpotlight(new g());
      return CastleTutorialSpotlight._instance;
    },
    enumerable: true,
    configurable: true
  });
  CastleTutorialSpotlight.prototype.createSprite = function () {
    this.tutorialStage = d.CastleLayoutManager.getInstance().castleTutorialStage;
    c.addEventListener("tick", this.onTick);
    this._sprite = new s();
    this._rect = new s();
    this._rect.graphics.beginFill(0, 0.5).drawRect(0, 0, document.documentElement.clientWidth, document.documentElement.clientHeight);
    this._hole = new r(new a().beginFill(0, 0.7).drawCircle(0, 0, 150));
    this._hole.compositeOperation = "destination-out";
    this.tutorialStage.addChildAt(this._sprite, 0);
    this._sprite.addChild(this._rect);
    this._sprite.addChild(this._hole);
    this._sprite.visible = false;
  };
  CastleTutorialSpotlight.prototype.onResize = function (e) {
    if (this.isVisible) {
      this._rect.graphics.clear();
      this._rect.graphics.beginFill(0, 0.5).drawRect(0, 0, document.documentElement.clientWidth, document.documentElement.clientHeight);
      this.updateRect();
    }
  };
  CastleTutorialSpotlight.prototype.destroyTutorialCanvas = function () {
    if (this.tutorialStage) {
      c.removeEventListener("tick", this.onTick);
      this.controller.removeEventListener(h.CastleLayoutManagerEvent.ON_RESIZE, this.bindFunction(this.onResize));
      this.tutorialStage.clear();
      this.tutorialStage = null;
      this.clear();
      CastleTutorialSpotlight._instance = null;
    }
  };
  CastleTutorialSpotlight.prototype.updateRect = function () {
    this._rect.width = this.tutorialStage.canvas.width;
    this._rect.height = this.tutorialStage.canvas.height;
    this.correctPosition();
  };
  CastleTutorialSpotlight.prototype.replace = function (e, t = null) {
    if (!e) {
      throw new ReferenceError("mc must not be null!");
    }
    this._offset = t;
    this.showSpotlightToMc(e, this.isVisible);
  };
  CastleTutorialSpotlight.prototype.showSpotlightToMc = function (e, t) {
    this._targetObject = e;
    if (this._targetObject && this._targetObject.stage) {
      var i = this.targetPoint;
      if (i) {
        if (!t) {
          this._hole.x = i.x;
          this._hole.y = i.y;
          this.controller.addEventListener(h.CastleLayoutManagerEvent.ON_RESIZE, this.bindFunction(this.onResize));
        }
        this._sprite.visible = true;
        if (t) {
          this._tween = o.TweenMax.to(this._hole, 0.5, {
            x: i.x,
            y: i.y,
            ease: n.Power2.easeInOut,
            onUpdate: this.bindFunction(this.updateTween),
            onComplete: this.bindFunction(this.correctPosition)
          });
        }
      } else {
        this.clear();
      }
    } else {
      this.clear();
    }
  };
  CastleTutorialSpotlight.prototype.correctPosition = function () {
    if (this._targetObject && this._targetObject.stage) {
      window.setTimeout(this.bindFunction(function () {
        var e = this.targetPoint;
        if (this._hole && e && (this._hole.x != e.x || this._hole.y != e.y)) {
          this._tween = o.TweenMax.to(this._hole, 0.5, {
            x: e.x,
            y: e.y,
            ease: n.Power2.easeInOut,
            onUpdate: this.bindFunction(this.updateTween),
            onComplete: this.bindFunction(this.correctPosition)
          });
        }
      }), 250);
    } else {
      this.clear();
    }
  };
  CastleTutorialSpotlight.prototype.updateTween = function () {
    if (this._tween) {
      var e = this.targetPoint;
      if (e) {
        this._tween.updateTo({
          x: e.x,
          y: e.y
        }, false);
      }
    }
  };
  CastleTutorialSpotlight.prototype.clear = function () {
    this._targetObject = null;
    this._sprite.visible = false;
    this.controller.removeEventListener(h.CastleLayoutManagerEvent.ON_RESIZE, this.bindFunction(this.onResize));
  };
  Object.defineProperty(CastleTutorialSpotlight.prototype, "targetPoint", {
    get: function () {
      if (!this._targetObject) {
        return null;
      }
      var e = this._targetObject.parent.localToGlobal(new l(this._targetObject.x, this._targetObject.y));
      if (this._offset) {
        return e.add(this._offset);
      } else {
        return e;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTutorialSpotlight.prototype, "isVisible", {
    get: function () {
      return this._sprite && this._sprite.visible;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTutorialSpotlight.prototype, "controller", {
    get: function () {
      return p.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleTutorialSpotlight;
}();
exports.CastleTutorialSpotlight = u;
var d = require("./17.js");
var p = require("./15.js");
var h = require("./91.js");
var g = function () {
  return function SingletonBlocker() {};
}();
exports.SingletonBlocker = g;