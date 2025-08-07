Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function EventPackageAssetHelper() {}
  EventPackageAssetHelper.getBanner = function (e) {
    var t = EventPackageAssetHelper.BANNER_BASE_NAME + e;
    return new a.CastleGoodgameExternalClip(t, EventPackageAssetHelper.assetFileURL(t), null, 0, false);
  };
  EventPackageAssetHelper.assetFileURL = function (e) {
    return o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(e);
  };
  EventPackageAssetHelper.__initialize_static_members = function () {
    EventPackageAssetHelper.BANNER_BASE_NAME = "PackageBanner";
  };
  return EventPackageAssetHelper;
}();
exports.EventPackageAssetHelper = n;
var o = require("./2.js");
var a = require("./24.js");
n.__initialize_static_members();