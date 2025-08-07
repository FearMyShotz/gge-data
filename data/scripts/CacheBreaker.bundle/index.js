Object.defineProperty(exports, "__esModule", {
  value: true
});
var o = require("./0.js");
var r = require("./2.js");
var s = require("./1977.js");
var i = require("./1978.js");
var a = require("./1979.js");
var l = require("./306.js");
var c = require("./334.js");
a.wrapper(l.appVersion);
var p = function (e) {
  function CastleCacheBreakerSwf() {
    CONSTRUCTOR_HACK;
    r.EnvGlobalsHandler.setEnvGlobalsClass(new s.CastleEnvironmentGlobals());
    return e.call(this) || this;
  }
  o.__extends(CastleCacheBreakerSwf, e);
  Object.defineProperty(CastleCacheBreakerSwf.prototype, "customEnvironments", {
    get: function () {
      var e = [];
      e.push(i.RelativePathEnvironment);
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCacheBreakerSwf.prototype, "ignoreSavedZoneId", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  CastleCacheBreakerSwf.prototype.loadGame = function () {
    if (r.BasicModel.branchesModel) {
      var t = "/" + r.BasicModel.branchesModel.currentBranch.id + "/index.html";
      if (!this.env.isTest && !window.location.pathname.includes(t)) {
        var n = window.location.href.replace(/\/[a-zA-Z0-9_]+\/index\.html/, t);
        document.location.assign(n);
        return;
      }
    }
    e.prototype.loadGame.call(this);
    window.Helpshift("hide");
  };
  return CastleCacheBreakerSwf;
}(r.BasicCacheBreakerSwf);
exports.CastleCacheBreakerSwf = p;
window.setLoadingScreenProgress(30);
var d = 60;
window.fakeLoadingTimer = setInterval(function () {
  if (d >= 30) {
    window.setLoadingScreenProgress(100 - d);
    d -= 5 + Math.random() * 5 >> 0;
  }
}, 1000);
var u = document.getElementById("startScreenVideo");
if (c.StartscreenHelper.hasBackgroundAnimation()) {
  c.StartscreenHelper.updateBackgroundAnimation();
} else {
  u.remove();
  document.getElementById("edgeStartscreenVideoReplacement").style.backgroundImage = "url(ModernStartscreenAnimation_large.jpg)";
}
new p();