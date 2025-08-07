Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.MouseEvent;
var o = createjs.Point;
var a = function () {
  function AFactionAttackBox(e) {
    this._disp = e;
    p.ButtonHelper.initBasicButton(e.btn_showMe);
    this.itxt_header = s.GoodgameTextFieldManager.getInstance().registerTextField(e.txt_name, new l.LocalizedTextVO(""));
    this.itxt_description = s.GoodgameTextFieldManager.getInstance().registerTextField(e.txt_description, new l.LocalizedTextVO(""));
  }
  AFactionAttackBox.prototype.show = function () {
    this.updateButton();
    d.CastleModel.specialEventData.addEventListener(u.CastleSpecialEventEvent.FACTION_EVENT_LAST_MAN_STANDING_UPDATE, this.bindFunction(this.onLMSUpdate));
    this._disp.addEventListener(n.CLICK, this.bindFunction(this.onClick));
  };
  AFactionAttackBox.prototype.hide = function () {
    d.CastleModel.specialEventData.removeEventListener(u.CastleSpecialEventEvent.FACTION_EVENT_LAST_MAN_STANDING_UPDATE, this.bindFunction(this.onLMSUpdate));
    this._disp.removeEventListener(n.CLICK, this.bindFunction(this.onClick));
  };
  AFactionAttackBox.prototype.onLMSUpdate = function (e) {
    this.updateButton();
  };
  AFactionAttackBox.prototype.updateButton = function () {
    var e;
    var t = d.CastleModel.specialEventData.getActiveEventByEventId(r.EventConst.EVENTTYPE_FACTION);
    var i = !t.isActiveInEvent && !t.isLocked;
    p.ButtonHelper.enableButton(this._disp.btn_showMe, t.isActiveInEvent);
    e = i ? "dialog_faction_cannotAttack_tooltip" : t.isLocked ? "alert_not_available" : this.defaultShowMeButtonTooltip;
    this._disp.btn_showMe.toolTipText = e;
  };
  Object.defineProperty(AFactionAttackBox.prototype, "defaultShowMeButtonTooltip", {
    get: function () {
      throw new c.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  AFactionAttackBox.prototype.onClick = function (e) {
    if (p.ButtonHelper.isButtonEnabled(e.target) && e.target == this._disp.btn_showMe) {
      this.onClickShowMe();
    }
  };
  AFactionAttackBox.prototype.onClickShowMe = function () {
    throw new c.AbstractMethodError();
  };
  AFactionAttackBox.__initialize_static_members = function () {
    AFactionAttackBox.ICON_SIZE = new o(55, 55);
  };
  return AFactionAttackBox;
}();
exports.AFactionAttackBox = a;
var s = require("./2.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./69.js");
var u = require("./26.js");
var d = require("./4.js");
var p = require("./8.js");
a.__initialize_static_members();