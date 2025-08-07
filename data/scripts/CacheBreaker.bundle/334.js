Object.defineProperty(exports, "__esModule", {
  value: true
});
var o = require("./2.js");
var r = require("./2.js");
var s = require("./1.js");
var i = function () {
  function StartscreenHelper() {}
  StartscreenHelper.usesModernStartscreen = function (e = -1) {
    var t = e > -1 ? e : r.BasicModel.instanceProxy.selectedInstanceVO.zoneId;
    var n = o.EnvGlobalsHandler.globals.loginIsKeyBased || o.EnvGlobalsHandler.globals.isFacebook;
    var s = StartscreenHelper.STARTSCREEN_ZONE_IDS.length == 0 || StartscreenHelper.STARTSCREEN_ZONE_IDS.indexOf(t) > -1;
    return !n && s;
  };
  StartscreenHelper.updateBackgroundAnimation = function (e = false) {
    var t;
    var n = document.getElementById("startScreenVideo");
    var o = document.documentElement.clientWidth;
    var r = document.documentElement.clientHeight;
    if (o <= 1024 && r <= 900) {
      t = "ModernStartscreenAnimation_small.mp4";
      n.style.width = "1024px";
      n.style.height = "900px";
      n.style.left = "calc(50% - 512px)";
    } else if (o <= 1366 && r <= 910) {
      t = "ModernStartscreenAnimation_medium.mp4";
      n.style.width = "1366px";
      n.style.height = "910px";
      n.style.left = "calc(50% - 683px)";
    } else {
      t = "ModernStartscreenAnimation_large.mp4";
      n.style.width = "1920px";
      n.style.height = "1080px";
      n.style.left = "calc(50% - 960px)";
    }
    if (n.src.indexOf(t) == -1) {
      n.src = t;
    }
    if (e) {
      var s = n.play();
      if (s && s.then) {
        s.then(function () {}, function (e) {});
      }
    }
  };
  StartscreenHelper.hasBackgroundAnimation = function () {
    return !s.currentBrowserInfo.isIE;
  };
  StartscreenHelper.STARTSCREEN_ZONE_IDS = [];
  return StartscreenHelper;
}();
exports.StartscreenHelper = i;