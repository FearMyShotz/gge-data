Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.MouseEvent;
var o = createjs.Point;
var a = function () {
  function CastleForumViewTopicScrollComponent(e) {
    this._isDraggingSlideButton = false;
    this._isOverDisturbingDisp = false;
    this._disp = e;
    this._placeHolderStartPos = new o(e.mc_posts.mc_placeHolder.x, e.mc_posts.mc_placeHolder.y);
  }
  CastleForumViewTopicScrollComponent.prototype.onShow = function () {
    this.removeListeners();
    this.addListeners();
    this.scrollToStart();
  };
  CastleForumViewTopicScrollComponent.prototype.onHide = function () {
    this.removeListeners();
  };
  CastleForumViewTopicScrollComponent.prototype.addExtraListeners = function () {
    if (this.disturbingDisp) {
      this.disturbingDisp.addEventListener(n.CLICK, this.bindFunction(this.onExtraComponentMouseClick));
      this.disturbingDisp.addEventListener(n.MOUSE_DOWN, this.bindFunction(this.onExtraComponentMouseClick));
      this.disturbingDisp.addEventListener(n.ROLL_OVER, this.bindFunction(this.onRollOverDisturbedDisp));
      this.disturbingDisp.addEventListener(n.ROLL_OUT, this.bindFunction(this.onRollOutDisturbedDisp));
    }
  };
  CastleForumViewTopicScrollComponent.prototype.removeExtraListeners = function () {
    if (this.disturbingDisp) {
      this.disturbingDisp.removeEventListener(n.CLICK, this.bindFunction(this.onExtraComponentMouseClick));
      this.disturbingDisp.removeEventListener(n.MOUSE_DOWN, this.bindFunction(this.onExtraComponentMouseClick));
      this.disturbingDisp.removeEventListener(n.ROLL_OVER, this.bindFunction(this.onRollOverDisturbedDisp));
      this.disturbingDisp.removeEventListener(n.ROLL_OUT, this.bindFunction(this.onRollOutDisturbedDisp));
    }
  };
  CastleForumViewTopicScrollComponent.prototype.addListeners = function () {
    this.disp.addEventListener(n.CLICK, this.bindFunction(this.onMouseClick));
    this.disp.addEventListener(n.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
    this.disp.addEventListener(n.PRESS_MOVE, this.bindFunction(this.onSliding));
    this.disp.addEventListener(n.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.disp.parent.addEventListener(n.MOUSE_UP, this.bindFunction(this.onMouseUp));
    this.addExtraListeners();
  };
  CastleForumViewTopicScrollComponent.prototype.removeListeners = function () {
    this.disp.removeEventListener(n.CLICK, this.bindFunction(this.onMouseClick));
    this.disp.removeEventListener(n.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
    this.disp.removeEventListener(n.PRESS_MOVE, this.bindFunction(this.onSliding));
    this.disp.removeEventListener(n.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.disp.parent.removeEventListener(n.MOUSE_UP, this.bindFunction(this.onMouseUp));
    this.removeExtraListeners();
  };
  CastleForumViewTopicScrollComponent.prototype.onRollOverDisturbedDisp = function (e) {
    this._isOverDisturbingDisp = true;
  };
  CastleForumViewTopicScrollComponent.prototype.onRollOutDisturbedDisp = function (e) {
    var t = this.disturbingDisp.getBounds(this.disturbingDisp.stage);
    if (t) {
      var i = t.x + t.width;
      var n = t.y + t.height;
      if (e.nativeEvent.clientX < t.x || e.nativeEvent.clientX > i || e.nativeEvent.clientY < t.y || e.nativeEvent.clientY > n) {
        this._isOverDisturbingDisp = false;
        this.disturbingDisp.txt_text.blur();
      }
    }
  };
  CastleForumViewTopicScrollComponent.prototype.onMouseWheel = function (e) {
    if (!this._isOverDisturbingDisp) {
      if (e.delta < 0) {
        this.scrollUp();
      } else if (e.delta > 0) {
        this.scrollDown();
      }
    }
  };
  CastleForumViewTopicScrollComponent.prototype.onMouseDown = function (e) {
    if (e.target == this.disp.btn_slider) {
      this._isDraggingSlideButton = true;
    }
  };
  CastleForumViewTopicScrollComponent.prototype.onMouseUp = function (e) {
    this._isDraggingSlideButton = false;
  };
  CastleForumViewTopicScrollComponent.prototype.onSliding = function (e) {
    if (this._isDraggingSlideButton) {
      this.disp.btn_slider.y = this.getValidSliderButtonPos(this.disp.mc_slider.mouseY + this.disp.mc_slider.y);
      this.setPostPosFromSliderButtonPos();
    }
  };
  CastleForumViewTopicScrollComponent.prototype.getValidSliderButtonPos = function (e) {
    if (this.disp.mc_posts.mc_placeHolder.height < this.disp.mc_posts.mc_mask.height) {
      return this.disp.mc_slider.y;
    } else {
      return r.CastleMathHelper.clamp(e, this.disp.mc_slider.y, this.disp.mc_slider.y + this.disp.mc_slider.height);
    }
  };
  CastleForumViewTopicScrollComponent.prototype.getValidPostPos = function (e) {
    var t = Math.min(e, this._placeHolderStartPos.y);
    return Math.max(t, -this.disp.mc_posts.mc_placeHolder.height + this.disp.mc_posts.mc_mask.height + this._placeHolderStartPos.y);
  };
  CastleForumViewTopicScrollComponent.prototype.setPostPosFromSliderButtonPos = function () {
    if (this.disp.mc_posts.mc_placeHolder.height < this.disp.mc_posts.mc_mask.height) {
      this.disp.mc_posts.mc_placeHolder.y = this._placeHolderStartPos.y;
    } else {
      var e = this.disp.mc_posts.mc_placeHolder.height - this.disp.mc_posts.mc_mask.height;
      this.disp.mc_posts.mc_placeHolder.y = this._placeHolderStartPos.y + this.sliderPercentFromButtonPos * -e;
    }
    this.checkScrollButtonState();
  };
  CastleForumViewTopicScrollComponent.prototype.setSliderButtonPosFromPostPos = function () {
    if (this.disp.mc_posts.mc_placeHolder.height < this.disp.mc_posts.mc_mask.height) {
      this.disp.btn_slider.y = this.disp.mc_slider.y;
    } else {
      this.disp.btn_slider.y = this.disp.mc_slider.y + this.disp.mc_slider.height * this.sliderPercentFromPostPos;
    }
    this.checkScrollButtonState();
  };
  CastleForumViewTopicScrollComponent.prototype.checkScrollButtonState = function () {
    var e = this.sliderPercentFromButtonPos;
    l.ButtonHelper.enableButton(this.disp.btn_up, e != 0);
    l.ButtonHelper.enableButton(this.disp.btn_down, e != 1);
  };
  Object.defineProperty(CastleForumViewTopicScrollComponent.prototype, "sliderPercentFromButtonPos", {
    get: function () {
      var e = 1 - (this.disp.btn_slider.y - this.disp.mc_slider.y) / this.disp.mc_slider.height;
      return e = 1 - Math.min(Math.max(e, 0), 1);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleForumViewTopicScrollComponent.prototype, "sliderPercentFromPostPos", {
    get: function () {
      var e = 1 - (this.disp.mc_posts.mc_placeHolder.height + (-this._placeHolderStartPos.y + this.disp.mc_posts.mc_placeHolder.y) - this.disp.mc_posts.mc_mask.height) / (this.disp.mc_posts.mc_placeHolder.height - this.disp.mc_posts.mc_mask.height);
      return e = r.CastleMathHelper.clamp(e, 0, 1);
    },
    enumerable: true,
    configurable: true
  });
  CastleForumViewTopicScrollComponent.prototype.onMouseClick = function (e) {
    if (l.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.disp.btn_up:
          this.scrollUp();
          break;
        case this.disp.btn_down:
          this.scrollDown();
      }
    }
  };
  CastleForumViewTopicScrollComponent.prototype.onExtraComponentMouseClick = function (e) {
    if (this.disp.btn_slider.y != this.getValidSliderButtonPos(this.disp.mc_slider.y + this.disp.mc_slider.height)) {
      this.scrollToEnd();
      this.disturbingDisp.txt_text.blur();
    }
  };
  CastleForumViewTopicScrollComponent.prototype.scrollUp = function () {
    if (this.disp.mc_posts.mc_placeHolder.height < this.disp.mc_posts.mc_mask.height) {
      this.disp.mc_posts.mc_placeHolder.y = this._placeHolderStartPos.y;
    } else {
      this.disp.mc_posts.mc_placeHolder.y = this.getValidPostPos(this.disp.mc_posts.mc_placeHolder.y + CastleForumViewTopicScrollComponent.STEP);
    }
    this.setSliderButtonPosFromPostPos();
  };
  CastleForumViewTopicScrollComponent.prototype.scrollDown = function () {
    if (this.disp.mc_posts.mc_placeHolder.height < this.disp.mc_posts.mc_mask.height) {
      this.disp.mc_posts.mc_placeHolder.y = this._placeHolderStartPos.y;
    } else {
      this.disp.mc_posts.mc_placeHolder.y = this.getValidPostPos(this.disp.mc_posts.mc_placeHolder.y - CastleForumViewTopicScrollComponent.STEP);
    }
    this.setSliderButtonPosFromPostPos();
  };
  CastleForumViewTopicScrollComponent.prototype.scrollToStart = function () {
    this.disp.btn_slider.y = this.getValidSliderButtonPos(this.disp.mc_slider.y);
    this.setPostPosFromSliderButtonPos();
  };
  CastleForumViewTopicScrollComponent.prototype.scrollToEnd = function () {
    this.disp.btn_slider.y = this.getValidSliderButtonPos(this.disp.mc_slider.y + this.disp.mc_slider.height);
    this.setPostPosFromSliderButtonPos();
  };
  Object.defineProperty(CastleForumViewTopicScrollComponent.prototype, "disturbingDisp", {
    get: function () {
      return this.disp.mc_posts.mc_placeHolder.getChildByName("mc_answer");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleForumViewTopicScrollComponent.prototype, "textFieldManager", {
    get: function () {
      return s.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleForumViewTopicScrollComponent.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleForumViewTopicScrollComponent.__initialize_static_members = function () {
    CastleForumViewTopicScrollComponent.STEP = 20;
  };
  return CastleForumViewTopicScrollComponent;
}();
exports.CastleForumViewTopicScrollComponent = a;
var s = require("./2.js");
var r = require("./213.js");
var l = require("./8.js");
a.__initialize_static_members();