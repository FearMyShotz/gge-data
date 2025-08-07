Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./3.js");
var s = require("./1843.js");
var r = require("./26.js");
var l = require("./32.js");
var c = require("./4.js");
var u = require("./110.js");
var d = function (e) {
  function StatusIconGlobalEffectEvent() {
    return e.call(this, "GlobalEffectEventButton", u.ACastleStatusIcon.PRIORITY_HIGH) || this;
  }
  n.__extends(StatusIconGlobalEffectEvent, e);
  StatusIconGlobalEffectEvent.prototype.setVisibilityLoaded = function () {
    if (this.eventVO && this.eventVO.remainingEventTimeInSeconds > 3 && this.eventVO.getShownItems().length > 0) {
      this.setTooltip("dialog_globalEffects_header");
      this.iconDisp.mc_new.visible = this.eventVO.showNewSign > 0;
      this.textFieldManager.registerTextField(this.iconDisp.mc_new.txt_copy, new a.LocalizedNumberVO(this.eventVO.showNewSign));
      this.show();
    } else {
      this.hide();
    }
  };
  Object.defineProperty(StatusIconGlobalEffectEvent.prototype, "eventVO", {
    get: function () {
      return c.CastleModel.specialEventData.getActiveEventByEventId(o.EventConst.EVENTTYPE_GLOBAL_EFFECTS);
    },
    enumerable: true,
    configurable: true
  });
  StatusIconGlobalEffectEvent.prototype.onClick = function () {
    if (this.eventVO) {
      this.eventVO.openDialog();
    } else {
      this.hide();
    }
  };
  StatusIconGlobalEffectEvent.prototype.addEventListenerForVisibility = function () {
    c.CastleModel.globalEffectData.addEventListener(s.GlobalEffectEvent.SEEN_EFFECTS_UPDATED, this.bindFunction(this.onChangePosibilityToShowMe));
    c.CastleModel.specialEventData.addEventListener(r.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onChangePosibilityToShowMe));
    c.CastleModel.specialEventData.addEventListener(r.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onChangePosibilityToShowMe));
    this.controller.addEventListener(l.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onChangePosibilityToShowMe));
  };
  StatusIconGlobalEffectEvent.prototype.removeEventListenerForVisibility = function () {
    c.CastleModel.globalEffectData.removeEventListener(s.GlobalEffectEvent.SEEN_EFFECTS_UPDATED, this.bindFunction(this.onChangePosibilityToShowMe));
    c.CastleModel.specialEventData.removeEventListener(r.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onChangePosibilityToShowMe));
    c.CastleModel.specialEventData.removeEventListener(r.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onChangePosibilityToShowMe));
    this.controller.removeEventListener(l.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onChangePosibilityToShowMe));
  };
  StatusIconGlobalEffectEvent.prototype.onChangePosibilityToShowMe = function (e) {
    this.setVisibility();
  };
  return StatusIconGlobalEffectEvent;
}(u.ACastleStatusIcon);
exports.StatusIconGlobalEffectEvent = d;