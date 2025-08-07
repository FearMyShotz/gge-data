Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./28.js");
var a = createjs.Sound;
var s = require("./2.js").getLogger("sound");
var r = function (e) {
  function SoundService() {
    var t = e.call(this) || this;
    t.sounds = new Map();
    t._queue = null;
    t._audioSpriteInit = false;
    if (SoundService._instance) {
      throw new Error("SoundService has no constructor, use SoundService.instance");
    }
    if (!a.isReady) {
      throw new Error("createjs.Sound not ready");
    }
    a.on("fileload", t.fileLoadHandler, t);
    a.on("fileerror", t.fileErrorHandler, t);
    return t;
  }
  i.__extends(SoundService, e);
  Object.defineProperty(SoundService, "instance", {
    get: function () {
      return SoundService._instance ||= new SoundService();
    },
    enumerable: true,
    configurable: true
  });
  SoundService.prototype.init = function (e) {
    var t = this;
    if (!this._audioSpriteInit) {
      this._audioSpriteInit = true;
      this._queue = new createjs.LoadQueue();
      this._jsonUrl = e;
      this._queue.loadFile({
        id: "audiospritesJson",
        priority: 1,
        src: e,
        type: createjs.AbstractLoader.JSON
      });
      this._queue.addEventListener("fileload", this._loadAudioSprites.bind(this));
      this._queue.addEventListener("error", function (e) {
        s.error("error loading audiosprites.json by load queue from ", t._jsonUrl);
      });
    }
  };
  SoundService.prototype._loadAudioSprites = function () {
    if (!this._queue) {
      throw new Error("_loadAudioSprites: this._queue is not set");
    }
    var e = this._queue.getResult("audiospritesJson");
    if (!e) {
      throw new Error("Cannot load audio manifest");
    }
    e.src = this._jsonUrl.replace(/.json$/i, ".mp3");
    this._queue = null;
    a.registerSounds([e]);
  };
  SoundService.prototype.fileLoadHandler = function (e) {
    if (e.id) {
      var t = SoundService.instance.sounds.get(e.id);
      if (t) {
        t.dispatchEvent(SoundService.LOAD_DONE);
        SoundService.instance.sounds.delete(e.id);
      }
    } else {
      this.dispatchEvent(SoundService.AUDIO_SPRITE_DONE);
    }
  };
  SoundService.prototype.fileErrorHandler = function (e) {
    if (e.id) {
      var t = SoundService.instance.sounds.get(e.id);
      if (t) {
        t.dispatchEvent(SoundService.LOAD_ERROR);
        SoundService.instance.sounds.delete(e.id);
      }
    }
    s.error("error loading audiosprite", e);
  };
  SoundService.LOAD_DONE = "sound_load_done";
  SoundService.LOAD_ERROR = "sound_load_error";
  SoundService.AUDIO_SPRITE_DONE = "AudioSpritesDone";
  return SoundService;
}(createjs.EventDispatcher);
exports.SoundService = r;