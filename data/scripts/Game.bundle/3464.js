Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./6.js");
var c = require("./23.js");
var u = require("./23.js");
var d = createjs.Event;
var p = function (e) {
  function CastleIngameMessagePopup(t) {
    var i = this;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).dispBounds = t.getBounds(null);
    return i;
  }
  n.__extends(CastleIngameMessagePopup, e);
  CastleIngameMessagePopup.prototype.init = function () {
    e.prototype.init.call(this);
    this.removeBackground();
  };
  CastleIngameMessagePopup.prototype.show = function () {
    e.prototype.show.call(this);
    this.tweenIn();
    window.setTimeout(this.bindFunction(this.tweenOut), 2500);
  };
  CastleIngameMessagePopup.prototype.hide = function () {
    if (Object.getOwnPropertyDescriptor(a.FlashUIComponent.prototype, "disp").get.call(this) && Object.getOwnPropertyDescriptor(a.FlashUIComponent.prototype, "disp").get.call(this).stage) {
      Object.getOwnPropertyDescriptor(a.FlashUIComponent.prototype, "disp").get.call(this).stage.removeEventListener(r.KeyboardEvent.KEY_UP, this.bindFunction(this.onKeyUp));
      window.removeEventListener(d.RESIZE, this.bindFunction(this.onResize));
      Object.getOwnPropertyDescriptor(a.FlashUIComponent.prototype, "disp").get.call(this).visible = false;
    }
    h.CastleIngameMessageHandler.getInstance().onHideCurrentMessage();
  };
  CastleIngameMessagePopup.prototype.tweenIn = function () {
    u.TweenMax.fromTo(this.disp, 0.5, {
      alpha: 0
    }, {
      alpha: 1,
      ease: c.Linear.easeIn
    });
  };
  CastleIngameMessagePopup.prototype.tweenOut = function () {
    u.TweenMax.fromTo(this.disp, 0.5, {
      alpha: 1
    }, {
      alpha: 0,
      ease: c.Linear.easeIn,
      onComplete: this.bindFunction(this.hide)
    });
  };
  CastleIngameMessagePopup.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      var e = 1;
      if (this.disp.stage.stageWidth < this.dispBounds.width) {
        e = this.disp.stage.stageWidth / this.dispBounds.width;
      }
      if (this.disp.stage.stageHeight < this.dispBounds.height * e) {
        e = this.disp.stage.stageHeight / this.dispBounds.height;
      }
      this.disp.x = -this.dispBounds.left * e - this.dispBounds.width * e * 0.5 + this.disp.stage.stageWidth * 0.5;
      this.disp.y = -this.dispBounds.top * e - this.dispBounds.height * e * 0.5 + (this.disp.stage.stageHeight - 135);
      this.disp.scaleX = this.disp.scaleY = e;
      this.disp.x = l.int(this.disp.x);
      this.disp.y = l.int(this.disp.y);
    }
  };
  Object.defineProperty(CastleIngameMessagePopup.prototype, "textFieldManager", {
    get: function () {
      return s.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastleIngameMessagePopup.__initialize_static_members = function () {
    CastleIngameMessagePopup.NAME = "CastleIngameMessagePopup";
  };
  return CastleIngameMessagePopup;
}(o.BasicDialog);
exports.CastleIngameMessagePopup = p;
var h = require("./658.js");
p.__initialize_static_members();