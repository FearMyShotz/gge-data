Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./82.js");
var a = require("./199.js");
var s = require("./3.js");
var r = function () {
  function AComboBoxItem() {
    this._selectedItemClickSignal = new i.NoneValueSignal();
    this._listItemClickSignal = new a.ObjectSignal();
    this._className = s.getQualifiedClassName(this);
  }
  AComboBoxItem.prototype.createAsset = function (e) {
    this._disp = e;
    this._disp.addEventListener("click", this.bindFunction(this.onItemMouseClick));
    this._disp.addEventListener("mouseover", this.bindFunction(this.onMouseOver));
    this._disp.addEventListener("mouseout", this.bindFunction(this.onMouseOut));
    this._disp.addEventListener("mousedown", this.bindFunction(this.onMouseDown));
    this._disp.addEventListener("pressmove", this.bindFunction(this.onPressMove));
    return this._disp;
  };
  AComboBoxItem.prototype.setClickFunction = function (e, t = null) {
    this.clickFunction = e;
    this.clickFunctionParams = t;
  };
  AComboBoxItem.prototype.onItemMouseClick = function (e) {
    if (this.selected) {
      this._selectedItemClickSignal.signal();
    } else {
      this._listItemClickSignal.signal(this);
      if (this.clickFunction != null) {
        if (this.clickFunctionParams) {
          this.clickFunction.apply(this, this.clickFunctionParams);
        } else {
          this.clickFunction.call(this);
        }
      }
    }
  };
  AComboBoxItem.prototype.onMouseOver = function (e) {};
  AComboBoxItem.prototype.onMouseOut = function (e) {};
  AComboBoxItem.prototype.onMouseDown = function (e) {};
  AComboBoxItem.prototype.onPressMove = function (e) {};
  AComboBoxItem.prototype.destroy = function () {
    this._disp.removeEventListener("click", this.bindFunction(this.onItemMouseClick));
    this._disp.removeEventListener("mouseover", this.bindFunction(this.onMouseOver));
    this._disp.removeEventListener("mouseout", this.bindFunction(this.onMouseOut));
    this._disp.removeEventListener("mousedown", this.bindFunction(this.onMouseDown));
    this._disp.removeEventListener("pressmove", this.bindFunction(this.onPressMove));
    this._selectedItemClickSignal.removeAll();
    this._listItemClickSignal.removeAll();
  };
  Object.defineProperty(AComboBoxItem.prototype, "x", {
    get: function () {
      return this._disp.x;
    },
    set: function (e) {
      this._disp.x = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AComboBoxItem.prototype, "y", {
    get: function () {
      return this._disp.y;
    },
    set: function (e) {
      this._disp.y = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AComboBoxItem.prototype, "width", {
    get: function () {
      return this._disp.width;
    },
    set: function (e) {
      this._disp.width = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AComboBoxItem.prototype, "height", {
    get: function () {
      return this._disp.height;
    },
    set: function (e) {
      this._disp.height = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AComboBoxItem.prototype, "selected", {
    get: function () {
      return this._selected;
    },
    enumerable: true,
    configurable: true
  });
  AComboBoxItem.prototype.select = function () {
    this._selected = true;
  };
  Object.defineProperty(AComboBoxItem.prototype, "listItemClickSignal", {
    get: function () {
      return this._listItemClickSignal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AComboBoxItem.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AComboBoxItem.prototype, "selectedItemClickSignal", {
    get: function () {
      return this._selectedItemClickSignal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AComboBoxItem.prototype, "itemClass", {
    get: function () {
      return this._itemClass;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AComboBoxItem.prototype, "className", {
    get: function () {
      return this._className;
    },
    enumerable: true,
    configurable: true
  });
  return AComboBoxItem;
}();
exports.AComboBoxItem = r;