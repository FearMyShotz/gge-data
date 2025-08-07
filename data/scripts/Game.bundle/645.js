Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function AutoRecruitmentEvent(t, i = false, n = false) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i, n) || this;
  }
  n.__extends(AutoRecruitmentEvent, e);
  AutoRecruitmentEvent.__initialize_static_members = function () {
    AutoRecruitmentEvent.ON_PURCHASE_CONFIRM = "onPurchaseConfirm";
    AutoRecruitmentEvent.ON_PURCHASE_DENY = "onPurchaseDeny";
    AutoRecruitmentEvent.ON_LOOPED_SLOT_PURCHASED = "onLoopedSlotPurchased";
    AutoRecruitmentEvent.ON_COPY_SUCCESS = "onCopySuccess";
  };
  return AutoRecruitmentEvent;
}(createjs.Event);
exports.AutoRecruitmentEvent = o;
o.__initialize_static_members();