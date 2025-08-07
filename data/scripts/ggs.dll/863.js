Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./81.js");
var a = require("./123.js");
var s = require("./459.js");
var r = require("./2.js");
var o = createjs.Container;
var l = r.getLogger("CoreJS.BasicToolTipManager");
var u = function () {
  function BasicToolTipManager(e, t, n) {
    this.TEXT_BORDER = 30;
    this.ARROW_HEIGHT = 8;
    this.ARROW_OFFSET = 5;
    this.TIP_SPACE = 5;
    this.MIN_WIDTH = 60;
    this._max_width = 200;
    this.textFieldHeightAdditive = 5;
    this.textFieldWidthAdditive = 5;
    this.backGroundHeightAdditive = 0;
    this._tooltipLayer = e;
    this._tooltipLayer.mouseChildren = false;
    this._tooltipLayer.mouseEnabled = false;
    this._disp = new o();
    this._tooltipLayer.addEventListener(s.BasicToolTipEvent.TOOLTIP_HIDE, this.bindFunction(this.onHide));
    this._tooltipBody = new t();
    this._tooltipArrow = new n();
    this._disp.mouseChildren = false;
    this._disp.mouseEnabled = false;
    this._disp.addChild(this._tooltipArrow);
    this._disp.addChild(this._tooltipBody);
    this._tooltipLayer.addChild(this._disp);
    this._textField = this.tooltipBody.txt_label;
    this._standardTextFieldY = this._textField.y;
    this._background = this.tooltipBody.background;
    this.updateTextField();
    this.hide();
    this.toolTipHeight = this._disp.height;
  }
  BasicToolTipManager.prototype.destroy = function () {
    this._tooltipLayer.removeEventListener(s.BasicToolTipEvent.TOOLTIP_HIDE, this.bindFunction(this.onHide));
  };
  BasicToolTipManager.prototype.updateTextField = function () {
    l.debug("updateTextField");
    this._textField.y = this._standardTextFieldY;
  };
  BasicToolTipManager.prototype.onHide = function (e) {
    this.hide();
  };
  BasicToolTipManager.prototype.show = function (e, t = null) {
    l.debug("show tooltip ");
    if (e != null) {
      this.updatePosition();
      if (this._ggsTextField) {
        this._ggsTextField.width = this._max_width;
      } else {
        this._textField.width = this._max_width;
      }
      if (this._ggsTextField) {
        this._ggsTextField.height = 2000;
      } else {
        this._textField.height = 2000;
      }
      this._target = t;
      if (this._textField && this._background) {
        this.assignToolTipText(e);
        if (this._ggsTextField.multiline) {
          this._ggsTextField.width = this._max_width;
        }
        this._ggsTextField.width = this._ggsTextField.textWidth + this.textFieldWidthAdditive;
        this._ggsTextField.height = this._ggsTextField.textHeight + this.textFieldHeightAdditive;
        this._ggsTextField.x = this._ggsTextField.width * -0.5;
        this._ggsTextField.y = -this._ggsTextField.height;
        this._background.width = Math.max(this.MIN_WIDTH, this._ggsTextField.width + this.TEXT_BORDER);
        if (this._ggsTextField.multiline) {
          this._background.height = this._ggsTextField.height + this.backGroundHeightAdditive;
        }
        this.toolTipHeight = this._background.height;
      }
      var n = this._background.width * 0.5;
      var i = this._target.parent.localToGlobal(this._target.x, this._target.y);
      var s = i.x;
      var r = i.y;
      this._tooltipArrow.scaleY = 1;
      if (s + n > this._disp.stage.stageWidth) {
        this._disp.x = this._disp.stage.stageWidth - n - this.TIP_SPACE;
        this._tooltipArrow.x = a.MathBase.min(Number(this._background.width * 0.5 - 10), Number(this._disp.globalToLocal(i.x, 0).x));
      } else if (s - n < 0) {
        this._disp.x = n + this.TIP_SPACE;
        this._tooltipArrow.x = this._disp.globalToLocal(i.x, 0).x;
      } else {
        this._disp.x = s;
        this._tooltipArrow.x = 0;
      }
      var o = this._target.getBounds();
      o.bottom *= this._target.scaleY;
      o.top *= this._target.scaleY;
      if (r + (o.top - this.toolTipHeight - this.ARROW_OFFSET - this.ARROW_HEIGHT) * this._disp.scaleY < 0) {
        r = this.flipHorizontalToolTip(this.toolTipHeight, o, i);
      } else {
        r += (o.top - this.ARROW_HEIGHT - this.ARROW_OFFSET) * this._disp.scaleY;
        this._tooltipArrow.y = 0;
      }
      this._disp.y = r;
      this._disp.visible = true;
      this._target.addEventListener("mousedown", this.bindFunction(this.onMouseDown));
    }
  };
  BasicToolTipManager.prototype.assignToolTipText = function (e) {};
  BasicToolTipManager.prototype.flipHorizontalToolTip = function (e, t, n) {
    this._tooltipArrow.scaleY = -1;
    this._tooltipArrow.y = -this.toolTipHeight;
    return n.y + (t.bottom + e + this.ARROW_OFFSET + this.ARROW_HEIGHT) * this._disp.scaleY;
  };
  BasicToolTipManager.prototype.updatePosition = function () {};
  BasicToolTipManager.prototype.hideAdvancedTooltip = function () {};
  BasicToolTipManager.prototype.onMouseDown = function (e) {
    this.hide();
  };
  Object.defineProperty(BasicToolTipManager.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  BasicToolTipManager.prototype.hide = function () {
    this._disp.visible = false;
    if (this._target) {
      this._target.removeEventListener("mousedown", this.bindFunction(this.onMouseDown));
    }
  };
  Object.defineProperty(BasicToolTipManager.prototype, "textFieldManager", {
    get: function () {
      return i.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicToolTipManager.prototype, "tooltipBody", {
    get: function () {
      return this._tooltipBody;
    },
    enumerable: true,
    configurable: true
  });
  BasicToolTipManager.TOOLTIP_LABEL = "toolTipText";
  return BasicToolTipManager;
}();
exports.BasicToolTipManager = u;