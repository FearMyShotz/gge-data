Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./2.js");
var a = require("./118.js");
var s = createjs.Bitmap;
var r = createjs.Event;
var l = a.getLogger("StartScreenAdBannerLoader");
var c = function () {
  function StartScreenAdBannerLoader(e) {
    this.URL = "https://files-ak.goodgamestudios.com/loader/castle/eyecatcher-assets/";
    this._disp = e;
    this.loadQueue = window.AssetLoader || new createjs.LoadQueue();
  }
  StartScreenAdBannerLoader.prototype.startLoad = function () {
    var e = n.EnvGlobalsHandler.globals.isTest || n.EnvGlobalsHandler.globals.isLocal;
    this.json_url = this.URL + (e ? "test.json" : "live.json");
    this.json_loader = this.loadQueue.loadFile(this.json_url);
    this.json_loader.addEventListener(r.COMPLETE, this.bindFunction(this.onJsonFileComplete));
    this.json_loader.addEventListener(r.ERROR, this.bindFunction(this.onJsonError));
  };
  StartScreenAdBannerLoader.prototype.onJsonError = function (e) {
    this.removeJsonLoaderCallbacks();
    l.error("Error loading banner json from: " + this.json_url);
  };
  StartScreenAdBannerLoader.prototype.removeJsonLoaderCallbacks = function () {
    this.json_loader.removeEventListener(r.COMPLETE, this.bindFunction(this.onJsonFileComplete));
    this.json_loader.removeEventListener(r.ERROR, this.bindFunction(this.onJsonError));
  };
  StartScreenAdBannerLoader.prototype.onJsonFileComplete = function (e) {
    this.removeJsonLoaderCallbacks();
    var t = this.json_loader.getResult();
    if (t && t.current) {
      this.updateBanner(t.current);
    }
  };
  StartScreenAdBannerLoader.prototype.updateBanner = function (e) {
    if (this._furysBladeBanner && this._furysBladeBanner.parent) {
      this._furysBladeBanner.parent.removeChild(this._furysBladeBanner);
    }
    var t = o.GGSCountryController.instance.currentCountry.ggsCountryCode + ".png";
    this.bitmapUrl = this.URL + e + "/" + t;
    this.bitmapLoader = this.loadQueue.loadFile(this.bitmapUrl);
    this.bitmapLoader.addEventListener(r.COMPLETE, this.bindFunction(this.completeHandler));
    this.bitmapLoader.addEventListener(r.ERROR, this.bindFunction(this.bitmapErrorCallback));
  };
  StartScreenAdBannerLoader.prototype.bitmapErrorCallback = function () {
    this.clearListeners();
    l.error("Error loading banner image from: " + this.bitmapUrl);
  };
  StartScreenAdBannerLoader.prototype.completeHandler = function (e) {
    this._furysBladeBanner = new s(this.bitmapLoader.getResult());
    this._furysBladeBanner.x = -325 - this._furysBladeBanner.width / 2;
    this._furysBladeBanner.y = -170;
    this._furysBladeBanner.smoothing = true;
    this._disp.addChild(this._furysBladeBanner);
    this.clearListeners();
  };
  StartScreenAdBannerLoader.prototype.addListeners = function () {};
  StartScreenAdBannerLoader.prototype.clearListeners = function () {
    this.bitmapLoader.removeEventListener(r.COMPLETE, this.bindFunction(this.completeHandler));
    this.bitmapLoader.removeEventListener(r.ERROR, this.bindFunction(this.bitmapErrorCallback));
  };
  return StartScreenAdBannerLoader;
}();
exports.StartScreenAdBannerLoader = c;