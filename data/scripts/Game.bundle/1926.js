Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./5.js");
var s = require("./26.js");
var r = require("./4.js");
var l = require("./1004.js");
var c = require("./1.js");
var u = function (e) {
  function CastleSoundController() {
    var t = e.call(this) || this;
    t.unMuteMusic();
    t.unmuteEffects();
    var i = r.CastleModel.localData.readSoundSettings();
    if (i) {
      var n = i[0];
      var o = i[2];
      if (n) {
        t.muteMusic();
      }
      if (o) {
        t.muteEffects();
      }
    }
    r.CastleModel.specialEventData.addEventListener(s.CastleSpecialEventEvent.ADD_SPECIALEVENT, t.bindFunction(t.onEventAdded));
    r.CastleModel.specialEventData.addEventListener(s.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, t.bindFunction(t.onEventRemoved));
    if (c.currentBrowserInfo.isChrome || c.currentBrowserInfo.isSafari) {
      window.addEventListener("click", t.bindFunction(t.resumeAudioContext));
    }
    return t;
  }
  n.__extends(CastleSoundController, e);
  CastleSoundController.prototype.resumeAudioContext = function () {
    try {
      if (createjs.WebAudioPlugin.context && createjs.WebAudioPlugin.context.state === "suspended") {
        this.stopMusic();
        this.playMusic(CastleSoundController.MUSIC_LOOP1, -1);
        createjs.WebAudioPlugin.context.resume();
        window.removeEventListener("click", this.bindFunction(this.resumeAudioContext));
      }
    } catch (e) {
      console.error("There was an error while trying to resume the SoundJS Web Audio context...");
      console.error(e);
    }
  };
  CastleSoundController.prototype.onEventRemoved = function (e) {
    if (!this.useWinterLoop && !this.isMuted) {
      this.playMusic(CastleSoundController.MUSIC_LOOP1, Number.MAX_VALUE);
    }
  };
  CastleSoundController.prototype.onEventAdded = function (e) {
    if (this.useWinterLoop && !this.isMuted) {
      this.playMusic(CastleSoundController.MUSIC_LOOP1_WINTER, Number.MAX_VALUE);
    }
  };
  CastleSoundController.prototype.playMusic = function (t, i = 1, n = false) {
    if (this.useWinterLoop) {
      t = CastleSoundController.MUSIC_LOOP1_WINTER;
    }
    e.prototype.playMusic.call(this, t, i, n);
  };
  Object.defineProperty(CastleSoundController.prototype, "activeSkinEvent", {
    get: function () {
      return r.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_EVENT_SKIN);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSoundController.prototype, "useWinterLoop", {
    get: function () {
      return this.activeSkinEvent && this.activeSkinEvent.skinString == l.EventSkinEventVO.SKIN_TYPE_WINTER_OFFENSIVE;
    },
    enumerable: true,
    configurable: true
  });
  CastleSoundController.MUSIC_LOOP1 = "new_empire_theme_smaller.mp3";
  CastleSoundController.MUSIC_LOOP1_WINTER = "AoK_Ambient_Main_Winter.mp3";
  return CastleSoundController;
}(o.BasicSoundController);
exports.CastleSoundController = u;