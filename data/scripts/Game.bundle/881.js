Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.MouseEvent;
var o = function () {
  function BasicPicker(e) {
    this._selectedValue = 0;
    this._numItems = 4;
    this._isEnabled = true;
    this._maxNumItems = 4;
    this._amountFactor = 1;
    this._loop = true;
    this._disp = e;
    this._disp.addEventListener(n.CLICK, this.bindFunction(this.onClick));
    u.ButtonHelper.initButtons([this._disp.btn_left, this._disp.btn_right], d.ClickFeedbackButtonHover, 1);
  }
  BasicPicker.prototype.onClick = function (e) {
    if (this._isEnabled && u.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this._disp.btn_left:
          this.selectedValue--;
          break;
        case this._disp.btn_right:
          this.selectedValue++;
      }
    }
  };
  BasicPicker.prototype.selectRandomValue = function () {
    this.selectedValue = r.int(s.Random.integer(0, this._numItems));
  };
  BasicPicker.prototype.updateInfo = function () {};
  Object.defineProperty(BasicPicker.prototype, "selectedValue", {
    get: function () {
      return this._selectedValue;
    },
    set: function (e) {
      this.setSelectedValue(e, this._loop);
    },
    enumerable: true,
    configurable: true
  });
  BasicPicker.prototype.selectMaxValue = function () {
    this.selectedValue = this._numItems - 1;
    if (this.maxBlocked) {
      this._disp.dispatchEvent(new l.BasicPickerEvent(l.BasicPickerEvent.PICKER_CHANGE_VALUE_MAX_BLOCKED));
    }
  };
  BasicPicker.prototype.setSelectedValueWithoutLoop = function (e) {
    this.setSelectedValue(e, false);
  };
  BasicPicker.prototype.setSelectedValue = function (e, t) {
    var i = r.int(Math.min(this._numItems, this._maxNumItems));
    if (e < 0) {
      if (t) {
        this._selectedValue = r.int(Math.max(i - 1, 0));
        if (this.maxBlocked) {
          this._disp.dispatchEvent(new l.BasicPickerEvent(l.BasicPickerEvent.PICKER_CHANGE_VALUE_MAX_BLOCKED));
        }
      } else {
        this._selectedValue = 0;
      }
    } else if (e >= i) {
      if (this.maxBlocked) {
        this._selectedValue = i - 1;
        this._disp.dispatchEvent(new l.BasicPickerEvent(l.BasicPickerEvent.PICKER_CHANGE_VALUE_MAX_BLOCKED));
      } else {
        this._selectedValue = t ? 0 : i - 1;
      }
    } else {
      this._selectedValue = e;
    }
    this._disp.dispatchEvent(new l.BasicPickerEvent(l.BasicPickerEvent.PICKER_CHANGE_VALUE));
    this.updateInfo();
    this.updateButtons();
  };
  BasicPicker.prototype.setNumItems = function (e, t = r.int(-Number.MAX_VALUE)) {
    this._numItems = e;
    if (t == -Number.MAX_VALUE) {
      this._maxNumItems = e;
    } else {
      this._maxNumItems = t;
    }
    this.updateInfo();
  };
  Object.defineProperty(BasicPicker.prototype, "numItems", {
    get: function () {
      return this._numItems;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicPicker.prototype, "maxNumItems", {
    get: function () {
      return this._maxNumItems;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicPicker.prototype, "maxBlocked", {
    get: function () {
      return this._numItems < this._maxNumItems;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicPicker.prototype, "enabled", {
    get: function () {
      return this._isEnabled;
    },
    set: function (e) {
      this._isEnabled = e;
      if (this._colorMatrix == null) {
        this._colorMatrix = new a.ColorMatrix();
        this._colorMatrix.desaturate();
      }
      this._disp.mouseEnabled = e;
      this._disp.mouseChildren = e;
      if (e) {
        this._disp.useFilters(c.BitmapFilterHelper.NO_FILTER);
      } else {
        this._disp.useFilters([this._colorMatrix.filter]);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicPicker.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicPicker.prototype, "amountFactor", {
    get: function () {
      return this._amountFactor;
    },
    set: function (e) {
      this._amountFactor = e;
    },
    enumerable: true,
    configurable: true
  });
  BasicPicker.prototype.dispose = function () {
    this._disp.removeEventListener(n.CLICK, this.bindFunction(this.onClick));
  };
  Object.defineProperty(BasicPicker.prototype, "buttonsEnabled", {
    set: function (e) {
      u.ButtonHelper.enableButton(this._disp.btn_left, e);
      u.ButtonHelper.enableButton(this._disp.btn_right, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicPicker.prototype, "buttonsVisible", {
    set: function (e) {
      this._disp.btn_left.visible = e;
      this._disp.btn_right.visible = e;
    },
    enumerable: true,
    configurable: true
  });
  BasicPicker.prototype.setLooping = function (e) {
    this._loop = e;
    this.updateButtons();
  };
  BasicPicker.prototype.updateButtons = function () {
    if (!this._loop) {
      var e = r.int(Math.min(this._numItems, this._maxNumItems));
      u.ButtonHelper.enableButton(this._disp.btn_left, this._selectedValue > 0);
      u.ButtonHelper.enableButton(this._disp.btn_right, this._selectedValue < e - 1);
    }
  };
  return BasicPicker;
}();
exports.BasicPicker = o;
var a = require("./2.js");
var s = require("./2.js");
var r = require("./6.js");
var l = require("./169.js");
var c = require("./68.js");
var u = require("./8.js");
var d = require("./20.js");