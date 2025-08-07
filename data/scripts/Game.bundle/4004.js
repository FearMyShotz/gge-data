Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./266.js");
var a = require("./32.js");
var s = require("./4.js");
var r = require("./237.js");
var l = require("./109.js");
var c = require("./107.js");
var u = function (e) {
  function StatusIconCapEyecatcher() {
    var t = e.call(this, "Btn_CapEyeCatcher", 1) || this;
    t.setTooltip("capEyeCatcher_hudIcon_tt");
    return t;
  }
  n.__extends(StatusIconCapEyecatcher, e);
  StatusIconCapEyecatcher.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this._clickFeedback = new r.ClickFeedbackHoverBehaviour(this.iconDisp);
    this._clickFeedback.updateCacheOnChange = true;
    o.registerUIComponentToCXF(this.icon, "openAnnouncements", {
      sourceId: c.CXFSourceTrackingConstants.CXF_SHOP_TRACKING_CAP_TOOL_BUTTON
    });
  };
  StatusIconCapEyecatcher.prototype.disposeLoaded = function () {
    o.unregisterUIComponentToCXF(this.icon);
    e.prototype.disposeLoaded.call(this);
  };
  StatusIconCapEyecatcher.prototype.addEventListenerForVisibility = function () {
    this.controller.addEventListener(a.CastleUserDataEvent.CAP_TOOL_NOTIFICATIONS_UPDATED, this.bindFunction(this.onCapToolNotificationsUpdated));
  };
  StatusIconCapEyecatcher.prototype.removeEventListenerForVisibility = function () {
    this.controller.removeEventListener(a.CastleUserDataEvent.CAP_TOOL_NOTIFICATIONS_UPDATED, this.bindFunction(this.onCapToolNotificationsUpdated));
  };
  StatusIconCapEyecatcher.prototype.onCapToolNotificationsUpdated = function (e) {
    this.setVisibility();
  };
  StatusIconCapEyecatcher.prototype.setVisibilityLoaded = function () {
    e.prototype.setVisibilityLoaded.call(this);
    if (s.CastleModel.userData.newCapTooNotifications > 0 && !s.CastleModel.userData.hideCapToolNotifications) {
      this.show();
    } else {
      this.hide();
    }
  };
  StatusIconCapEyecatcher.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this._clickFeedback.addEventListener();
  };
  StatusIconCapEyecatcher.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this._clickFeedback.removeEventListener();
  };
  StatusIconCapEyecatcher.prototype.onClick = function (t = null) {
    e.prototype.onClick.call(this, t);
    s.CastleModel.userData.hideCapToolNotifications = true;
  };
  return StatusIconCapEyecatcher;
}(l.ACastleStatusIcon);
exports.StatusIconCapEyecatcher = u;