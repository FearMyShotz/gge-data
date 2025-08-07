Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./123.js");
var s = require("./64.js");
var r = require("./63.js");
var o = require("./23.js");
var l = require("./5.js");
var u = require("./43.js");
var c = require("./420.js");
var _ = require("./3.js");
var d = require("./3.js");
var m = createjs.Event;
var h = createjs.EventDispatcher;
var p = createjs.IOErrorEvent;
var g = createjs.ProgressEvent;
var E = createjs.SecurityErrorEvent;
var C = function (e) {
  function BasicSoundController() {
    var t = e.call(this) || this;
    t._globalSoundTransform = new d.SoundTransform();
    t._effectsTransform = new d.SoundTransform();
    t._musicTransform = new d.SoundTransform();
    t._isMuted = false;
    t._isEffectsMuted = false;
    t._isMusicMuted = true;
    t._globalSavedVolume = 1;
    t._musicSavedVolume = 1;
    t._effectsSavedVolume = 1;
    return t;
  }
  i.__extends(BasicSoundController, e);
  BasicSoundController.prototype.initialize = function () {
    this.loadedSongs = new Map();
    this._playingSoundEffects = [];
  };
  BasicSoundController.prototype.playSoundEffectByName = function (e, t = 0) {
    if (this.isEffectsMuted) {
      return null;
    }
    var n;
    if (n = this.loadedSongs.get(e)) {
      return n.play(0, t);
    }
    if (createjs.Sound.loadComplete(e)) {
      var i = new d.Sound(new _.URLRequest(e));
      this.loadedSongs.set(e, i);
      return i.play(0, t);
    }
    this.loadedSongs.set(e, this.loadMusicFile(u.PathProvider.instance.getSoundURL(e)));
    return null;
  };
  BasicSoundController.prototype.playSoundEffect = function (e, t = 0) {
    if (this.isEffectsMuted) {
      return null;
    } else {
      return e.play(0, t, this._effectsTransform);
    }
  };
  BasicSoundController.prototype.playLoopedSoundEffect = function (e, t = 0) {
    if (this.isEffectsMuted) {
      return null;
    }
    var n = e.play(0, -1, this._effectsTransform);
    this._playingSoundEffects.push(n);
    return n;
  };
  BasicSoundController.prototype.stopAllLoopedSoundEffects = function () {
    for (var e = 0; e < this._playingSoundEffects.length; e++) {
      var t = this._playingSoundEffects[e];
      t.stop();
      t = null;
    }
    this._playingSoundEffects = [];
  };
  BasicSoundController.prototype.stopLoopedSoundEffect = function (e) {
    for (var t = 0; t < this._playingSoundEffects.length; t++) {
      var n = this._playingSoundEffects[t];
      if (n == e) {
        n.stop();
        this._playingSoundEffects.splice(t, 1);
        return;
      }
    }
  };
  BasicSoundController.prototype.playMusic = function (e, t = 0, n = false) {
    if ((this._currentSongString !== e || n) && (this._currentSongString = e, this._currentSongLoops = t, !this._isMusicMuted)) {
      if (this.loadedSongs.get(e)) {
        this.dispatchEvent(new c.BasicSoundEvent(c.BasicSoundEvent.SONG_BUFFERED_COMPLETE));
        var i = this.loadedSongs.get(e);
        if (i.bytesLoaded === i.bytesTotal) {
          this.playSong(i, t);
        }
      } else {
        this.loadedSongs.set(e, this.loadMusicFile(u.PathProvider.instance.getSoundURL(e)));
      }
    }
  };
  BasicSoundController.prototype.stopMusic = function () {
    if (this._currentSongChannel != null) {
      this._currentSongChannel.stop();
      this._currentSongChannel.removeEventListener(m.SOUND_COMPLETE, this.bindFunction(this.onCurrentSongReachedEnd));
    }
    this._currentSongString = "";
    this._currentSong = null;
  };
  BasicSoundController.prototype.stopAllSounds = function () {
    this.stopAllLoopedSoundEffects();
    this.stopMusic();
  };
  BasicSoundController.prototype.preLoadMusic = function (e) {
    if (!this.loadedSongs.get(e)) {
      var t = new _.URLRequest(u.PathProvider.instance.getSoundURL(e));
      new d.Sound(t).addEventListener(p.IO_ERROR, this.bindFunction(this.onStreamError));
    }
  };
  BasicSoundController.prototype.onStreamError = function (e) {
    throw new Error("Fehler beim Streamen der Sounddatei! \n\n" + e.target.url + "\n\n" + e.text);
  };
  BasicSoundController.prototype.playSong = function (e, t = 0) {
    if (e != null) {
      if (this._currentSongChannel != null) {
        this._currentSongChannel.stop();
      }
      this._currentSongChannel = e.play(0, t, this._musicTransform);
      if (this._currentSongChannel != null) {
        this._currentSongChannel.addEventListener(m.SOUND_COMPLETE, this.bindFunction(this.onCurrentSongReachedEnd));
        this._currentSong = e;
      }
    }
  };
  BasicSoundController.prototype.onCurrentSongReachedEnd = function (e) {
    this.dispatchEvent(new c.BasicSoundEvent(c.BasicSoundEvent.SONG_PLAYED_COMPLETE));
  };
  BasicSoundController.prototype.loadMusicFile = function (e) {
    var t = new d.Sound();
    t.addEventListener(m.COMPLETE, this.bindFunction(this.onMusicFileLoadComplete));
    t.addEventListener(g.PROGRESS, this.bindFunction(this.onMusicFileLoadProgress));
    t.addEventListener(p.IO_ERROR, this.bindFunction(this.onMusicFileLoadIOError));
    t.addEventListener(E.SECURITY_ERROR, this.bindFunction(this.onMusicFileLoadSecurityError));
    t.load(new _.URLRequest(e));
    return t;
  };
  BasicSoundController.prototype.onMusicFileLoadIOError = function (e) {
    o.ExternalLog.logger.log(new r.IOErrorLOFactory(r.IOErrorLOFactory.GENERAL_LOADER_IO_ERROR, e.text, e.target.url));
    e.target.removeEventListener(m.COMPLETE, this.bindFunction(this.onMusicFileLoadComplete));
    e.target.removeEventListener(g.PROGRESS, this.bindFunction(this.onMusicFileLoadProgress));
    e.target.removeEventListener(p.IO_ERROR, this.bindFunction(this.onMusicFileLoadIOError));
    e.target.removeEventListener(E.SECURITY_ERROR, this.bindFunction(this.onMusicFileLoadSecurityError));
  };
  BasicSoundController.prototype.onMusicFileLoadSecurityError = function (e) {
    o.ExternalLog.logger.log(new s.SecurityErrorLOFactory(s.SecurityErrorLOFactory.GENERAL_LOADER_SECURITY_ERROR, e.text, e.target.url));
    e.target.removeEventListener(m.COMPLETE, this.bindFunction(this.onMusicFileLoadComplete));
    e.target.removeEventListener(g.PROGRESS, this.bindFunction(this.onMusicFileLoadProgress));
    e.target.removeEventListener(p.IO_ERROR, this.bindFunction(this.onMusicFileLoadIOError));
    e.target.removeEventListener(E.SECURITY_ERROR, this.bindFunction(this.onMusicFileLoadSecurityError));
  };
  BasicSoundController.prototype.onMusicFileLoadComplete = function (e) {
    e.target.removeEventListener(m.COMPLETE, this.bindFunction(this.onMusicFileLoadComplete));
    e.target.removeEventListener(g.PROGRESS, this.bindFunction(this.onMusicFileLoadProgress));
    e.target.removeEventListener(p.IO_ERROR, this.bindFunction(this.onMusicFileLoadIOError));
    e.target.removeEventListener(E.SECURITY_ERROR, this.bindFunction(this.onMusicFileLoadSecurityError));
    this.dispatchEvent(new c.BasicSoundEvent(c.BasicSoundEvent.SONG_BUFFERED_COMPLETE));
    var t = e.target;
    this.playSong(t, this._currentSongLoops);
  };
  BasicSoundController.prototype.onMusicFileLoadProgress = function (e) {
    var t = e.target;
    if (t.bytesLoaded > t.bytesTotal * BasicSoundController.BUFFER_SONG_LEGTH) {
      t.removeEventListener(p.IO_ERROR, this.bindFunction(this.onMusicFileLoadIOError));
      t.removeEventListener(E.SECURITY_ERROR, this.bindFunction(this.onMusicFileLoadSecurityError));
      t.removeEventListener(g.PROGRESS, this.bindFunction(this.onMusicFileLoadProgress));
      this.dispatchEvent(new c.BasicSoundEvent(c.BasicSoundEvent.SONG_BUFFERED_ENOUGH));
      this.playSong(e.target, this._currentSongLoops);
    }
  };
  BasicSoundController.prototype.toggleMute = function () {
    if (this._isMuted) {
      this.unMuteAll();
    } else {
      this.muteAll();
    }
  };
  BasicSoundController.prototype.toggleMuteMusic = function () {
    if (this._isMusicMuted) {
      this.unMuteMusic();
    } else {
      this.muteMusic();
    }
  };
  BasicSoundController.prototype.toggleMuteEffects = function () {
    if (this._isEffectsMuted) {
      this.unmuteEffects();
    } else {
      this.muteEffects();
    }
  };
  BasicSoundController.prototype.muteAll = function () {
    createjs.Sound.muted = this._isMuted = true;
  };
  BasicSoundController.prototype.unMuteAll = function () {
    createjs.Sound.muted = this._isMuted = false;
  };
  BasicSoundController.prototype.muteMusic = function () {
    this._isMusicMuted = true;
    this._musicSavedVolume = this._musicTransform.volume;
    this._musicTransform.volume = 0;
    this.applyMusicSoundTransform();
  };
  BasicSoundController.prototype.unMuteMusic = function () {
    this._isMusicMuted = false;
    this._musicTransform.volume = this._musicSavedVolume;
    this.applyMusicSoundTransform();
    if (!this._currentSong && this._currentSongString) {
      this.playMusic(this.currentSongString, this._currentSongLoops, true);
    }
  };
  BasicSoundController.prototype.muteEffects = function () {
    this._isEffectsMuted = true;
    this._effectsSavedVolume = this._effectsTransform.volume;
    this._effectsTransform.volume = 0;
  };
  BasicSoundController.prototype.unmuteEffects = function () {
    this._isEffectsMuted = false;
    this._effectsTransform.volume = this._effectsSavedVolume;
  };
  Object.defineProperty(BasicSoundController.prototype, "musicVolume", {
    get: function () {
      return this._musicTransform.volume;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSoundController.prototype, "isEffectsMuted", {
    get: function () {
      return this._isMuted || this._isEffectsMuted;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSoundController.prototype, "isMusicMuted", {
    get: function () {
      return this._isMuted || this._isMusicMuted;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSoundController.prototype, "isMuted", {
    get: function () {
      return this._isMuted;
    },
    enumerable: true,
    configurable: true
  });
  BasicSoundController.prototype.setMusicVolume = function (e) {
    if (this._isMusicMuted) {
      this._musicSavedVolume = a.MathBase.clamp(e, 0, 1);
    } else {
      this._musicTransform.volume = a.MathBase.clamp(e, 0, 1);
      this.applyMusicSoundTransform();
    }
  };
  BasicSoundController.prototype.setEffectsVolume = function (e) {
    this._effectsTransform.volume = a.MathBase.clamp(e, 0, 1);
  };
  Object.defineProperty(BasicSoundController.prototype, "musicMaxPeak", {
    get: function () {
      return Math.max(this._currentSongChannel.leftPeak, this._currentSongChannel.rightPeak);
    },
    enumerable: true,
    configurable: true
  });
  BasicSoundController.prototype.applyMusicSoundTransform = function () {
    if (this._currentSongChannel != null) {
      this._currentSongChannel.soundTransform = this._musicTransform;
    }
  };
  Object.defineProperty(BasicSoundController.prototype, "env", {
    get: function () {
      return l.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSoundController.prototype, "currentSongString", {
    get: function () {
      return this._currentSongString;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSoundController.prototype, "currentSongChannel", {
    get: function () {
      return this._currentSongChannel;
    },
    enumerable: true,
    configurable: true
  });
  BasicSoundController.BUFFER_SONG_LEGTH = 0.4;
  return BasicSoundController;
}(h);
exports.BasicSoundController = C;