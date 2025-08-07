Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./344.js");
var u = require("./8.js");
var d = require("./881.js");
var p = function (e) {
  function UnitPicker(t) {
    var i = this;
    i._minAmount = 1;
    i._enableTracking = true;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).initTextField();
    return i;
  }
  n.__extends(UnitPicker, e);
  UnitPicker.prototype.initTextField = function () {
    this._disp.txt_pick.restrict = null;
    this._disp.txt_pick.type = s.TextFieldType.INPUT;
    this._itxt_pick = this.textFieldManager.registerTextField(this._disp.txt_pick, new r.NumberVO(0));
    this._itxt_pick.textAlign = o.GGSTextAlign.CENTER;
    this.enableTextfield(this._isEnabled);
  };
  UnitPicker.prototype.updateInfo = function () {
    if (this.selectedValue > -1 && this._itxt_pick.textContentVO) {
      var e = l.int((this.selectedValue + this.minAmount) * this.amountFactor);
      this._itxt_pick.textContentVO.numberValue = e;
    }
  };
  UnitPicker.prototype.setValue = function (e, t = true) {
    if (this._itxt_pick.textContentVO) {
      this._itxt_pick.textContentVO.numberValue = e;
    }
    if (t) {
      this._selectedValue = e - this.minAmount;
    }
    this.updateButtons();
  };
  Object.defineProperty(UnitPicker.prototype, "enabled", {
    get: function () {
      return Object.getOwnPropertyDescriptor(d.BasicPicker.prototype, "enabled").get.call(this);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.BasicPicker.prototype, "enabled").set.call(this, e);
      this.enableTextfield(e);
    },
    enumerable: true,
    configurable: true
  });
  UnitPicker.prototype.enableTextfield = function (e) {
    if (this._itxt_pick && this._itxt_pick.textContentVO) {
      this._itxt_pick.tabEnabled = e;
      this._itxt_pick.mouseEnabled = e;
    }
  };
  Object.defineProperty(UnitPicker.prototype, "textFieldManager", {
    get: function () {
      return a.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitPicker.prototype, "itxt_pick", {
    get: function () {
      return this._itxt_pick;
    },
    enumerable: true,
    configurable: true
  });
  UnitPicker.prototype.dispose = function () {
    e.prototype.dispose.call(this);
    this.textFieldManager.unregisterTextFieldByReference(this._itxt_pick);
  };
  UnitPicker.prototype.onClick = function (t) {
    if (this._isEnabled && u.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this._disp.btn_left:
        case this._disp.btn_right:
          if (this._enableTracking) {
            c.AttackDialogTrackingHelper.getInstance().trackDetailCounter(c.AttackDialogTrackingHelper.TRACK_MANUAL_FILLING);
            c.AttackDialogTrackingHelper.getInstance().trackDetailCounter(c.AttackDialogTrackingHelper.TRACK_MANUAL_FILLING);
          }
      }
    }
  };
  Object.defineProperty(UnitPicker.prototype, "minAmount", {
    get: function () {
      return this._minAmount;
    },
    set: function (e) {
      this._minAmount = e;
    },
    enumerable: true,
    configurable: true
  });
  UnitPicker.prototype.enableTracking = function (e) {
    this._enableTracking = e;
  };
  return UnitPicker;
}(d.BasicPicker);
exports.UnitPicker = p;