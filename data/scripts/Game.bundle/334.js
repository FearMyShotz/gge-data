Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./2.js");
var a = require("./1.js");
var s = function () {
  function StartscreenHelper() {}
  StartscreenHelper.usesModernStartscreen = function (e = -1) {
    var t = e > -1 ? e : o.BasicModel.instanceProxy.selectedInstanceVO.zoneId;
    var i = n.EnvGlobalsHandler.globals.loginIsKeyBased || n.EnvGlobalsHandler.globals.isFacebook;
    var a = StartscreenHelper.STARTSCREEN_ZONE_IDS.length == 0 || StartscreenHelper.STARTSCREEN_ZONE_IDS.indexOf(t) > -1;
    return !i && a;
  };
  StartscreenHelper.updateBackgroundAnimation = function (e = false) {
    var t;
    var i = document.getElementById("startScreenVideo");
    var n = document.documentElement.clientWidth;
    var o = document.documentElement.clientHeight;
    if (n <= 1024 && o <= 900) {
      t = "ModernStartscreenAnimation_small.mp4";
      i.style.width = "1024px";
      i.style.height = "900px";
      i.style.left = "calc(50% - 512px)";
    } else if (n <= 1366 && o <= 910) {
      t = "ModernStartscreenAnimation_medium.mp4";
      i.style.width = "1366px";
      i.style.height = "910px";
      i.style.left = "calc(50% - 683px)";
    } else {
      t = "ModernStartscreenAnimation_large.mp4";
      i.style.width = "1920px";
      i.style.height = "1080px";
      i.style.left = "calc(50% - 960px)";
    }
    if (i.src.indexOf(t) == -1) {
      i.src = t;
    }
    if (e) {
      var a = i.play();
      if (a && a.then) {
        a.then(function () {}, function (e) {});
      }
    }
  };
  StartscreenHelper.hasBackgroundAnimation = function () {
    return !a.currentBrowserInfo.isIE;
  };
  StartscreenHelper.STARTSCREEN_ZONE_IDS = [];
  return StartscreenHelper;
}();
exports.StartscreenHelper = s;