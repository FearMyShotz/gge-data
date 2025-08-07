Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.MouseEvent;
var o = function () {
  function CastleScrollComponent(e, t = 0) {
    this.startYPos = 0;
    this.dragChatButton = false;
    this.overScrollDown = 0;
    this.disp = e;
    this.startYPos = e.mc_contentHolder.y;
    this.overScrollDown = t;
  }
  CastleScrollComponent.prototype.show = function () {
    this.disp.addEventListener(n.CLICK, this.bindFunction(this.onMouseClick));
    this.disp.addEventListener(n.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
    this.disp.addEventListener(n.PRESS_MOVE, this.bindFunction(this.onSliding));
    this.disp.addEventListener(n.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.disp.addEventListener(n.MOUSE_UP, this.bindFunction(this.onMouseUp));
    this.updateDisp();
  };
  CastleScrollComponent.prototype.hide = function () {
    this.disp.removeEventListener(n.CLICK, this.bindFunction(this.onMouseClick));
    this.disp.removeEventListener(n.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
    this.disp.removeEventListener(n.PRESS_MOVE, this.bindFunction(this.onSliding));
    this.disp.removeEventListener(n.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.disp.removeEventListener(n.MOUSE_UP, this.bindFunction(this.onMouseUp));
  };
  CastleScrollComponent.prototype.onMouseClick = function (e) {
    this.disp.btn_up.mouseChildren = false;
    switch (e.target) {
      case this.disp.btn_up:
        this.scrollUp();
        break;
      case this.disp.btn_down:
        this.scrollDown();
        break;
      case this.disp.scroll_slide_holder:
      case this.disp.mc_sliderLine:
        this.onSliding(e, true);
        this.updateDisp();
    }
  };
  CastleScrollComponent.prototype.onMouseUp = function (e) {
    this.dragChatButton = false;
    this.updateDisp();
  };
  CastleScrollComponent.prototype.onMouseWheel = function (e) {
    var t = s.castAs(e.target, "TextField");
    if (!t || t.type != a.TextFieldType.INPUT || t.stage.focus != t || !(t.maxScrollV > 1)) {
      if (e.delta < 0) {
        this.scrollUp();
      } else if (e.delta > 0) {
        this.scrollDown();
      }
    }
  };
  CastleScrollComponent.prototype.onMouseDown = function (e) {
    if (r.ButtonHelper.isButtonEnabled(e.target) && e.target == this.disp.btn_slider) {
      this.dragChatButton = true;
    }
  };
  CastleScrollComponent.prototype.updateDisp = function () {
    var e = (this.startYPos - this.disp.mc_contentHolder.y) / (this.contentHeight - this.disp.mc_mask.height);
    e = Math.min(Math.max(e, 0), 1);
    this.disp.btn_slider.y = this.disp.mc_sliderLine.y + this.disp.btn_slider.height / 2 + (this.disp.mc_sliderLine.height - this.disp.btn_slider.height) * e;
    r.ButtonHelper.enableButton(this.disp.btn_up, e > 0);
    r.ButtonHelper.enableButton(this.disp.btn_down, e < 1);
  };
  CastleScrollComponent.prototype.scrollUp = function () {
    this.disp.mc_contentHolder.y = Math.min(this.disp.mc_contentHolder.y + CastleScrollComponent.STEP, this.startYPos);
    this.updateDisp();
  };
  CastleScrollComponent.prototype.scrollDown = function () {
    if (this.disp.mc_contentHolder.y + this.contentHeight > this.disp.mc_mask.y + this.disp.mc_mask.height) {
      this.disp.mc_contentHolder.y = Math.max(this.disp.mc_contentHolder.y - CastleScrollComponent.STEP, this.startYPos - (this.contentHeight - this.disp.mc_mask.height));
    }
    this.updateDisp();
  };
  CastleScrollComponent.prototype.scrollToEnd = function () {
    if (this.contentHeight > this.disp.mc_mask.height) {
      this.disp.mc_contentHolder.y = this.startYPos - (this.contentHeight - this.disp.mc_mask.height);
    }
    this.updateDisp();
  };
  CastleScrollComponent.prototype.scrollToStart = function () {
    this.disp.mc_contentHolder.y = this.startYPos;
    this.updateDisp();
  };
  CastleScrollComponent.prototype.scrollTo = function (e) {
    this.disp.mc_contentHolder.y = this.startYPos - e;
    this.updateDisp();
  };
  CastleScrollComponent.prototype.onSliding = function (e, t = false) {
    if (t || this.dragChatButton) {
      this.disp.btn_slider.y = Math.min(Math.max(this.disp.mc_sliderLine.mouseY + this.disp.mc_sliderLine.y, this.disp.mc_sliderLine.y + this.disp.btn_slider.height / 2), this.disp.mc_sliderLine.y + this.disp.mc_sliderLine.height - this.disp.btn_slider.height / 2);
      var i = (this.disp.btn_slider.y - this.disp.mc_sliderLine.y - this.disp.btn_slider.height / 2) / (this.disp.mc_sliderLine.height - this.disp.btn_slider.height);
      i = Math.min(Math.max(i, 0), 1);
      this.disp.mc_contentHolder.y = this.startYPos - i * (this.contentHeight - this.disp.mc_mask.height);
    }
  };
  Object.defineProperty(CastleScrollComponent.prototype, "contentHeight", {
    get: function () {
      return this.disp.mc_contentHolder.height + this.overScrollDown;
    },
    enumerable: true,
    configurable: true
  });
  CastleScrollComponent.STEP = 30;
  return CastleScrollComponent;
}();
exports.CastleScrollComponent = o;
var a = require("./1.js");
var s = require("./1.js");
var r = require("./8.js");