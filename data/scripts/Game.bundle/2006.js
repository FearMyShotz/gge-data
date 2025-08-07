Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.Event;
var o = function () {
  function MCReplacer(e) {
    this.SUFFIX_C2R = "C2R";
    this._fps = 0;
    this.objectsToFillByType = new Map();
    this.typesLoaded = new Map();
    this.stage = e;
    this.stage.addEventListener("EVENT_MC_REPLACER", this.bindFunction(this.onReplaceMC));
  }
  MCReplacer.prototype.onReplaceMC = function (e) {
    var t;
    var i;
    var n = s.getQualifiedClassName(e.target);
    if (this.objectsToFillByType.get(n)) {
      i = this.objectsToFillByType.get(n);
    } else {
      i = new Array();
      this.objectsToFillByType.set(n, i);
    }
    i.push(e.target);
    t = new r.CastleGoodgameExternalClip(n + this.SUFFIX_C2R, this.getAssetFileURL(n + this.SUFFIX_C2R), null, this._fps, false);
    if (this.typesLoaded.get(n)) {
      if (t.isLoaded) {
        this.addIntoMC(e.target, t.currentshownDisplayObject);
        i.pop();
      }
    } else {
      this.typesLoaded.set(n, t);
      if (t.isLoaded) {
        this.addIntoMC(e.target, t.currentshownDisplayObject);
        i.pop();
      } else {
        t.clipLoaded.addOnceWithPriority(this.bindFunction(this.displayObjectClipIsLoaded), MCReplacer.CLIP_LOADED_PRIORITY_LOADED);
      }
    }
  };
  MCReplacer.prototype.getAssetFileURL = function (e) {
    return a.BasicModel.basicLoaderData.getVersionedItemAssetUrl(e);
  };
  MCReplacer.prototype.displayObjectClipIsLoaded = function (e) {
    var t;
    var i;
    var n;
    var o = s.getQualifiedClassName(e.currentshownDisplayObject).replace(this.SUFFIX_C2R, "");
    for (n = this.objectsToFillByType.get(o); n.length > 0;) {
      t = n[0];
      i = new r.CastleGoodgameExternalClip(o + this.SUFFIX_C2R, this.getAssetFileURL(o + this.SUFFIX_C2R), null, this._fps, false);
      this.addIntoMC(t, i.currentshownDisplayObject);
      n.splice(0, 1);
    }
  };
  MCReplacer.prototype.addIntoMC = function (e, t) {
    e.addChild(t);
    e.usePreSizes();
    e.dispatchEvent(new n(MCReplacer.MC_REPLACER_DONE));
  };
  MCReplacer.prototype.destroy = function () {
    if (this.objectsToFillByType != null) {
      for (var e = 0, t = Array.from(this.objectsToFillByType.values()); e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.length = 0;
        }
      }
    }
    this.objectsToFillByType = new Map();
  };
  MCReplacer.__initialize_static_members = function () {
    MCReplacer.CLIP_LOADED_PRIORITY_LOADED = 3;
  };
  MCReplacer.MC_REPLACER_DONE = "EVENT_MC_REPLACER_DONE";
  return MCReplacer;
}();
exports.MCReplacer = o;
var a = require("./2.js");
var s = require("./1.js");
var r = require("./24.js");
o.__initialize_static_members();