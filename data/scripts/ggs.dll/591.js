Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./28.js");
var a = require("./235.js");
var s = require("./236.js");
var r = require("./237.js");
var o = require("./2.js");
var l = createjs.EventDispatcher;
var u = createjs.PlayPropsConfig;
var c = o.getLogger("sound");
var _ = function (e) {
  function Sound(t) {
    var n = e.call(this) || this;
    n._bytesLoaded = 0;
    n._bytesTotal = 0;
    n._playWhenComplete = false;
    n._url = t;
    n._config = new u();
    n._config.set({
      delay: 0,
      interrupt: createjs.Sound.INTERRUPT_NONE,
      loop: 0,
      offset: 0,
      pan: 0,
      volume: 1
    });
    n._soundTransform = new s.SoundTransform();
    n._soundChannel = new r.SoundChannel();
    if (n._url) {
      n.load(n._url);
    }
    return n;
  }
  i.__extends(Sound, e);
  Object.defineProperty(Sound.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Sound.prototype, "bytesLoaded", {
    get: function () {
      return this._bytesLoaded;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Sound.prototype, "bytesTotal", {
    get: function () {
      return this._bytesTotal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Sound.prototype, "url", {
    get: function () {
      return this._url;
    },
    enumerable: true,
    configurable: true
  });
  Sound.prototype.play = function (e = 0, t = 0, n) {
    this._config.loop = t;
    this._config.offset = e;
    this._soundTransform = n || this._soundTransform || new s.SoundTransform();
    this._config.volume = this._soundTransform.volume;
    this._config.pan = this._soundTransform.pan;
    if (createjs.Sound.loadComplete(this._id) && !this._soundChannel.soundInstance) {
      this.onComplete();
    }
    if (this._soundChannel.soundInstance) {
      this._config.duration = this._config.loop === -1 ? Number.MAX_VALUE : this._soundChannel.soundInstance.duration * (t + 1);
      this._soundChannel.soundInstance.play(this._config);
      c.info("sound: starting to play " + this._id);
    } else {
      this._playWhenComplete = true;
    }
    return this._soundChannel;
  };
  Sound.prototype.load = function (e) {
    if (this._url && this._url.url !== e.url) {
      throw new Error("Sound url has already defined, can't load another sound.");
    }
    this._url = this._url || e;
    var t = this._url.url.split("/");
    this._id = t[t.length - 1].replace(/\.\w+$/i, "");
    if (!createjs.Sound.loadComplete(this._id)) {
      if (/.mp3$/i.test(this._url.url)) {
        a.SoundService.instance.sounds.set(this._id, this);
        createjs.Sound.registerSound(e.url, this._id);
        this.on(a.SoundService.LOAD_DONE, this.onComplete.bind(this));
        this.on(a.SoundService.LOAD_ERROR, this.onError.bind(this));
      }
    }
  };
  Sound.prototype.onComplete = function (e) {
    var t = this;
    var n = createjs.Sound.createInstance(this._id);
    n.on("failed", function () {
      c.error("sound[" + t._id + "] play failed");
    });
    n.on("complete", function () {
      c.debug("sound[" + t._id + "] play complete");
      t._soundChannel.dispatchEvent(createjs.Event.SOUND_COMPLETE);
      t.dispatchEvent(createjs.Event.SOUND_COMPLETE);
    });
    this._soundChannel.soundInstance = n;
    this._soundChannel.soundTransform = this._soundTransform;
    if (this._playWhenComplete) {
      this._playWhenComplete = false;
      this.play();
    }
    this.dispatchEvent(createjs.Event.COMPLETE);
    this.removeAllEventListeners(a.SoundService.LOAD_DONE);
    this.removeAllEventListeners(a.SoundService.LOAD_ERROR);
  };
  Sound.prototype.onError = function (e) {
    c.error("Fail to load Sound: " + (this.url !== undefined ? this.url.url : "Unkown URL (already discarded)"));
    this.dispatchEvent(createjs.IOErrorEvent.IO_ERROR);
    this.removeAllEventListeners(a.SoundService.LOAD_DONE);
    this.removeAllEventListeners(a.SoundService.LOAD_ERROR);
  };
  return Sound;
}(l);
exports.Sound = _;