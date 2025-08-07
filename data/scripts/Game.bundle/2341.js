Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.MouseEvent;
var o = function () {
  function CastleAttackHornTimeListComponent(e, t, i, n) {
    this._visible = true;
    this._disp = e;
    d.ButtonHelper.initBasicButtons([this._disp.btn_show, this._disp.btn_hide]);
    this._itxtPlayerTime = this.createEntry("attackHorn_incomingAttack_player_timer", this._disp.mc_timeList[CastleAttackHornTimeListComponent.TIME_ENTRY_PREFIX + t]);
    this._itxtAllianceTime = this.createEntry("attackHorn_incomingAttack_alliance_timer", this._disp.mc_timeList[CastleAttackHornTimeListComponent.TIME_ENTRY_PREFIX + i]);
    this._itxtAllianceCityTime = this.createEntry("attackHorn_incomingAttack_allianceCity_timer", this._disp.mc_timeList[CastleAttackHornTimeListComponent.TIME_ENTRY_PREFIX + n]);
  }
  CastleAttackHornTimeListComponent.prototype.show = function () {
    this._disp.addEventListener(n.CLICK, this.bindFunction(this.onClick));
    c.CastleModel.timerData.addEventListener(l.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    this.update();
  };
  CastleAttackHornTimeListComponent.prototype.update = function () {
    if (this._visible) {
      this.fillList();
      this.showList();
    } else {
      this.hideList();
    }
  };
  CastleAttackHornTimeListComponent.prototype.onTimerUpdate = function (e) {
    this.fillList();
  };
  CastleAttackHornTimeListComponent.prototype.dispose = function () {
    this._disp.removeEventListener(n.CLICK, this.bindFunction(this.onClick));
    c.CastleModel.timerData.removeEventListener(l.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  CastleAttackHornTimeListComponent.prototype.onClick = function (e) {
    if (d.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this._disp.btn_show:
          this.showList();
          break;
        case this._disp.btn_hide:
          this.hideList();
      }
    }
  };
  CastleAttackHornTimeListComponent.prototype.hideList = function () {
    this._disp.mc_timeList.visible = false;
    this._disp.btn_hide.visible = false;
    this._disp.btn_show.visible = true;
    this._visible = false;
  };
  CastleAttackHornTimeListComponent.prototype.showList = function () {
    this._disp.mc_timeList.visible = true;
    this._disp.btn_hide.visible = true;
    this._disp.btn_show.visible = false;
    this._visible = true;
  };
  CastleAttackHornTimeListComponent.prototype.fillList = function () {
    var e;
    var t = c.CastleModel.armyData.getRemainingAttackTimeInMilliseconds() * r.ClientConstTime.MILLISEC_2_SEC;
    var i = c.CastleModel.armyData.getRemainingAllyAttackTimeInMilliseconds() * r.ClientConstTime.MILLISEC_2_SEC;
    var n = c.CastleModel.armyData.getRemainingAllianceCityAttackTimeInMilliseconds() * r.ClientConstTime.MILLISEC_2_SEC;
    if (t > 0) {
      e = u.CastleTimeStringHelper.getShortTimeString(t);
      this._itxtPlayerTime.textContentVO.stringValue = s.Localize.digitalClock(e);
    }
    if (i > 0) {
      e = u.CastleTimeStringHelper.getShortTimeString(i);
      this._itxtAllianceTime.textContentVO.stringValue = s.Localize.digitalClock(e);
    }
    if (n > 0) {
      e = u.CastleTimeStringHelper.getShortTimeString(n);
      this._itxtAllianceCityTime.textContentVO.stringValue = s.Localize.digitalClock(e);
    }
  };
  Object.defineProperty(CastleAttackHornTimeListComponent.prototype, "textFieldManager", {
    get: function () {
      return a.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastleAttackHornTimeListComponent.prototype.createEntry = function (e, t) {
    var i = null;
    if (t) {
      i = this.textFieldManager.registerTextField(t.txt_time, new s.TextVO(""));
      t.mouseChildren = false;
      t.toolTipText = e;
    }
    return i;
  };
  CastleAttackHornTimeListComponent.__initialize_static_members = function () {
    CastleAttackHornTimeListComponent.TIME_ENTRY_PREFIX = "mc_entry_";
  };
  return CastleAttackHornTimeListComponent;
}();
exports.CastleAttackHornTimeListComponent = o;
var a = require("./2.js");
var s = require("./3.js");
var r = require("./28.js");
var l = require("./21.js");
var c = require("./4.js");
var u = require("./27.js");
var d = require("./8.js");
o.__initialize_static_members();