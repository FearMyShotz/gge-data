Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./2.js");
var a = require("./9.js");
var s = require("./216.js");
var r = createjs.Ticker;
var l = createjs.Event;
var c = function () {
  function CinematicController() {
    this._musicMuted = false;
    if (CinematicController._instance) {
      throw new Error("Singleton class! Use CinematicController.getInstance() instead...");
    }
  }
  CinematicController.getInstance = function () {
    CinematicController._instance ||= new CinematicController();
    return CinematicController._instance;
  };
  CinematicController.prototype.playCinematic = function (e) {
    var t = this;
    var i = document.getElementById("cinematics");
    var n = document.getElementById("close");
    var a = document.documentElement.clientWidth;
    var s = document.documentElement.clientHeight;
    var c = CinematicController.CINEMATICS_PATH_URL + e.fileName;
    if (i.src.indexOf(c) == -1) {
      i.src = c;
    }
    i.height = s;
    i.width = a;
    i.style.display = "block";
    n.style.display = "block";
    this._musicMuted = o.BasicController.getInstance().soundController.isMusicMuted;
    if (!this._musicMuted) {
      o.BasicController.getInstance().soundController.muteMusic();
    }
    i.addEventListener("stalled", this.bindFunction(this.onStalled));
    var u = i.play();
    if (u && u.then) {
      u.then(function () {
        i.addEventListener("ended", t.bindFunction(t.onCinematicEnd));
        n.addEventListener("click", t.bindFunction(t.onCinematicSkip));
        window.addEventListener(l.RESIZE, t.bindFunction(t.onResize));
      }, function (e) {
        t.stopCinematic(true);
        t.showError();
      });
    }
    e.onPlayCinematic();
    r.paused = true;
  };
  CinematicController.prototype.stopCinematic = function (e = false) {
    r.paused = false;
    var t = document.getElementById("cinematics");
    var i = document.getElementById("close");
    t.removeEventListener("ended", this.bindFunction(this.onCinematicEnd));
    i.removeEventListener("click", this.bindFunction(this.onCinematicSkip));
    window.removeEventListener(l.RESIZE, this.bindFunction(this.onResize));
    if (!this._musicMuted) {
      o.BasicController.getInstance().soundController.unMuteMusic();
    }
    if (e) {
      t.load();
    }
    t.style.display = "none";
    i.style.display = "none";
  };
  CinematicController.prototype.showError = function () {
    a.CastleDialogHandler.getInstance().registerDefaultDialogs(s.DarkOkDialog, new n.BasicStandardOkDialogProperties("attention", "alert_cinematics_videoCannotDisplay"));
  };
  CinematicController.prototype.onCinematicEnd = function (e) {
    CinematicController.getInstance().stopCinematic(false);
  };
  CinematicController.prototype.onCinematicSkip = function (e) {
    CinematicController.getInstance().stopCinematic(true);
  };
  CinematicController.prototype.onStalled = function (e) {
    CinematicController.getInstance().stopCinematic(true);
    this.showError();
  };
  CinematicController.prototype.onResize = function (e) {
    var t = document.getElementById("cinematics");
    var i = document.documentElement.clientWidth;
    var n = document.documentElement.clientHeight;
    t.height = n;
    t.width = i;
  };
  CinematicController.CINEMATICS_PATH_URL = "../cinematics/";
  return CinematicController;
}();
exports.CinematicController = c;