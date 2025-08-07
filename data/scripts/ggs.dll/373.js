Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./83.js");
var s = function (e) {
  function IdentityManagementLicenseEvent(t, n = false, i = false) {
    var s = e.call(this, t, n, i) || this;
    s.initialAgeRatingTextId = a.IdentityManagementConstants.TEXT_ID_INITIAL_AGE_RATING_INFO;
    return s;
  }
  i.__extends(IdentityManagementLicenseEvent, e);
  IdentityManagementLicenseEvent.SHOW_LICENSE_INITIAL_AGE_RATING_TEXT = "showLicenseInitialAgeRatingText";
  IdentityManagementLicenseEvent.SHOW_LICENSE_LOGOS = "showLicenseLogos";
  IdentityManagementLicenseEvent.HIDE_LICENSE = "hideLicense";
  IdentityManagementLicenseEvent.HIDE_NICE_ID_DIALOG = "hideNiceIDDialog";
  return IdentityManagementLicenseEvent;
}(createjs.Event);
exports.IdentityManagementLicenseEvent = s;