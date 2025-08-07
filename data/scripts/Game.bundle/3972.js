Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function DailySpecialBonusButton(t, i) {
    var n = this;
    n._type = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this, i, t) || this)._type = t;
    return n;
  }
  n.__extends(DailySpecialBonusButton, e);
  Object.defineProperty(DailySpecialBonusButton.prototype, "type", {
    get: function () {
      return this._type;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DailySpecialBonusButton.prototype, "toolTipText", {
    set: function (e) {
      this.button.toolTipText = e;
    },
    enumerable: true,
    configurable: true
  });
  DailySpecialBonusButton.__initialize_static_members = function () {
    DailySpecialBonusButton.TYPE_ALLIANCE = 3;
    DailySpecialBonusButton.TYPE_VIP = 4;
    DailySpecialBonusButton.STATE_REWARD_COLLECTED = 2;
  };
  return DailySpecialBonusButton;
}(require("./674.js").DailyLoginBonusStateButton);
exports.DailySpecialBonusButton = o;
o.__initialize_static_members();