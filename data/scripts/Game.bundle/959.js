Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = require("./1.js");
var s = function () {
  function CastleBasicAdvancedFightScreenDialogHelper() {
    this._displayType = 0;
  }
  CastleBasicAdvancedFightScreenDialogHelper.prototype.handleTarget = function (e) {};
  CastleBasicAdvancedFightScreenDialogHelper.prototype.update = function () {
    if (this.isVisible()) {
      this.display();
    }
  };
  CastleBasicAdvancedFightScreenDialogHelper.prototype.hide = function () {
    if (this._advancedFightScreenConnector) {
      this._advancedFightScreenConnector.hideAll(this._fightDialog);
    }
  };
  CastleBasicAdvancedFightScreenDialogHelper.prototype.handle = function (e) {
    if (a.instanceOfClass(e, "DisplayObject")) {
      if (this.isValidTarget(e, this._fightDialog)) {
        if (a.instanceOfClass(e, "AttackWavePicker")) {
          this.update();
        } else if (!a.instanceOfClass(e.parent, "AttackWavePicker")) {
          this.resetCurrent();
          this.handleTarget(e);
        }
      }
    } else {
      this.update();
    }
  };
  CastleBasicAdvancedFightScreenDialogHelper.prototype.resetCurrent = function () {
    if (this._advancedFightScreenConnector) {
      this._advancedFightScreenConnector.reset();
    }
  };
  CastleBasicAdvancedFightScreenDialogHelper.prototype.isValidTarget = function (e, t) {
    return !n.MovieClipHelper.isChildrenOf(e, t.castleadvancedTroopSelection.disp) || e == t.castleadvancedTroopSelection.disp.btn_ok;
  };
  CastleBasicAdvancedFightScreenDialogHelper.prototype.display = function () {
    this.showContainerConnector();
    this.displayListComponent();
  };
  CastleBasicAdvancedFightScreenDialogHelper.prototype.handleDefault = function (e) {
    if (a.instanceOfClass(e, "AttackSlotContainer")) {
      this.handleDialogSlotContainer(e);
      this.display();
    } else {
      this.hide();
    }
  };
  CastleBasicAdvancedFightScreenDialogHelper.prototype.handleDialogSlotContainer = function (e) {};
  CastleBasicAdvancedFightScreenDialogHelper.prototype.showContainerConnector = function () {
    if (!o.MobileHelper.isScreenTooSmall()) {
      if (this._advancedFightScreenConnector) {
        this._advancedFightScreenConnector.show();
      }
    }
  };
  CastleBasicAdvancedFightScreenDialogHelper.prototype.displayListComponent = function () {
    if (this._advancedFightScreenConnector) {
      this._advancedFightScreenConnector.displayComponent(this._fightDialog);
    }
  };
  CastleBasicAdvancedFightScreenDialogHelper.prototype.isVisible = function () {
    return !!this._advancedFightScreenConnector && this._advancedFightScreenConnector.isVisible;
  };
  return CastleBasicAdvancedFightScreenDialogHelper;
}();
exports.CastleBasicAdvancedFightScreenDialogHelper = s;
o.classImplementsInterfaces(s, "IAdvancedFightscreenHandler");