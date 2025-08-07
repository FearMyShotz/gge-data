Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./26.js");
var r = require("./4.js");
var l = function (e) {
  function CastleWorldCupDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleWorldCupDialog.NAME) || this;
  }
  n.__extends(CastleWorldCupDialog, e);
  CastleWorldCupDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btnRules, this.dialogDisp.btnBuyC2, this.dialogDisp.btnClose]);
    this._notEnoughRubyState = new d.CastleWorldCupDialogNotEnoughRubiesState(this);
    this._notVotedState = new p.CastleWorldCupDialogNotVotedState(this);
    this._alreadyVotedState = new u.CastleWorldCupDialogAlreadyVotedState(this);
  };
  CastleWorldCupDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    this.updateState();
  };
  CastleWorldCupDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    r.CastleModel.specialEventData.addEventListener(c.WorldCupEventVO.VALUES_UPDATED, this.bindFunction(this.onValuesUpdated));
    r.CastleModel.specialEventData.addEventListener(s.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventEnded));
  };
  CastleWorldCupDialog.prototype.onValuesUpdated = function (e) {
    this.updateState();
  };
  CastleWorldCupDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    r.CastleModel.specialEventData.removeEventListener(c.WorldCupEventVO.VALUES_UPDATED, this.bindFunction(this.onValuesUpdated));
    r.CastleModel.specialEventData.removeEventListener(s.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventEnded));
  };
  CastleWorldCupDialog.prototype.onEventEnded = function (e) {
    if (e.specialEventVO.eventId == a.EventConst.EVENTTYPE_WORLD_CUP) {
      this.hide();
    }
  };
  CastleWorldCupDialog.prototype.hideDialog = function () {
    this.hide();
  };
  CastleWorldCupDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this.currentState.stopTimer();
  };
  CastleWorldCupDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    this.currentState.onClick(t);
  };
  CastleWorldCupDialog.prototype.destroy = function () {
    if (this.currentState) {
      this.currentState.destroy();
    }
    e.prototype.destroy.call(this);
  };
  CastleWorldCupDialog.prototype.updateState = function () {
    if (this.dialogProperties.worldCupEventVO.voted >= 0) {
      this.setState(this._alreadyVotedState);
    } else if (this.dialogProperties.worldCupEventVO.currencyC2 >= this.dialogProperties.worldCupEventVO.paymentC2) {
      this.setState(this._notVotedState);
    } else {
      this.setState(this._notEnoughRubyState);
    }
  };
  CastleWorldCupDialog.prototype.setState = function (e) {
    if (this.currentState) {
      this.currentState.resetState();
    }
    this.currentState = e;
    this.currentState.updateTexts();
    this.currentState.updateElements();
  };
  Object.defineProperty(CastleWorldCupDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleWorldCupDialog.__initialize_static_members = function () {
    CastleWorldCupDialog.NAME = "CastleWorldCupExternal";
  };
  return CastleWorldCupDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleWorldCupDialog = l;
var c = require("./669.js");
var u = require("./3961.js");
var d = require("./3962.js");
var p = require("./3963.js");
o.classImplementsInterfaces(l, "ICollectableRendererList");
l.__initialize_static_members();