Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.Event;
var o = createjs.Point;
var a = function () {
  function CastleTutorialArrow(e) {
    if (!e) {
      throw new Error("target must not be null");
    }
    this.arrow = new l.GoodgameDisplayObjectClip(s.getDefinitionByName("TutorialArrow"), null, 30, false, true);
    this._targetLayer = r.CastleLayoutManager.getInstance().getTutorialLayer(e);
    this.arrow.asDisplayObject().addEventListener(n.ADDED_TO_STAGE, this.bindFunction(this.onArrowAddedToStage));
    this._target = e;
  }
  Object.defineProperty(CastleTutorialArrow.prototype, "scale", {
    set: function (e) {
      this.arrow.scaleX = Math.abs(this.arrow.scaleX) / this.arrow.scaleX * e;
      this.arrow.scaleY = Math.abs(this.arrow.scaleY) / this.arrow.scaleY * e;
    },
    enumerable: true,
    configurable: true
  });
  CastleTutorialArrow.prototype.mirror = function () {
    this.arrow.scaleX *= -1;
  };
  CastleTutorialArrow.prototype.flip = function () {
    this.arrow.scaleY *= -1;
  };
  Object.defineProperty(CastleTutorialArrow.prototype, "offset", {
    set: function (e) {
      e ||= new o(0, 0);
      this._offset = e;
      var t = this._target.localToGlobal(this._offset);
      var i = this._targetLayer.globalToLocal(t);
      this.arrow.x = i.x;
      this.arrow.y = i.y;
    },
    enumerable: true,
    configurable: true
  });
  CastleTutorialArrow.prototype.updatePosition = function (e = null) {
    var t = this.arrow.asDisplayObject();
    if (t.parent && !t.parent.stage) {
      t.parent.removeChild(t);
    }
    this.offset = this._offset;
  };
  CastleTutorialArrow.prototype.display = function () {
    this._targetLayer.addChild(this.arrow.asDisplayObject());
  };
  CastleTutorialArrow.prototype.onArrowAddedToStage = function (e) {
    this.updatePosition();
    this.arrow.asDisplayObject().addEventListener(n.ENTER_FRAME, this.bindFunction(this.updatePosition), false, -1000);
    this.arrow.play();
  };
  CastleTutorialArrow.prototype.onArrowRemovedFromStage = function (e) {
    this.arrow.asDisplayObject().removeEventListener(n.ENTER_FRAME, this.bindFunction(this.updatePosition), false);
    this.arrow.stop();
  };
  CastleTutorialArrow.prototype.destroy = function () {
    if (this._targetLayer.contains(this.arrow.asDisplayObject())) {
      this._targetLayer.removeChild(this.arrow.asDisplayObject());
    }
    this.arrow.asDisplayObject().removeEventListener(n.ADDED_TO_STAGE, this.bindFunction(this.onArrowRemovedFromStage));
    this.arrow.asDisplayObject().removeEventListener(n.REMOVED_FROM_STAGE, this.bindFunction(this.onArrowRemovedFromStage));
  };
  Object.defineProperty(CastleTutorialArrow.prototype, "target", {
    get: function () {
      return this._target;
    },
    enumerable: true,
    configurable: true
  });
  return CastleTutorialArrow;
}();
exports.CastleTutorialArrow = a;
var s = require("./1.js");
var r = require("./17.js");
var l = require("./2.js");