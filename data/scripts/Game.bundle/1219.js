Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./57.js");
var r = require("./421.js");
var l = require("./4.js");
var c = require("./24.js");
var u = require("./885.js");
var d = createjs.Container;
var p = function (e) {
  function EmptyMapobject() {
    var t = e.call(this) || this;
    t.clipLoaded = new s.Signal(EmptyMapobject);
    return t;
  }
  n.__extends(EmptyMapobject, e);
  EmptyMapobject.prototype.initVisualRep = function () {
    if (!this.disp) {
      this.disp = new d();
      this.disp.mouseChildren = false;
      this.disp.mouseEnabled = false;
      var e = this.vo.actualVisClassName;
      e += r.ClientConstIsoChangeEventSkin.getValidSkinSuffixForCurrentKingdom(false);
      var t = new c.CastleGoodgameExternalClip(e, EmptyMapobject.assetFileURL, null, 0, false, null, false, 1, false, false);
      this.disp.addChild(t.asDisplayObject());
      if (t.isLoaded) {
        this.onLoaded(t);
      } else {
        t.clipLoaded.addOnce(this.bindFunction(this.onLoaded));
      }
    }
  };
  EmptyMapobject.prototype.onLoaded = function (e) {
    this.clipLoaded.dispatch(this);
  };
  Object.defineProperty(EmptyMapobject, "assetFileURL", {
    get: function () {
      var e = "WorldmapAssets_" + l.CastleModel.kingdomData.activeKingdomVO.kingdomName + r.ClientConstIsoChangeEventSkin.getValidSkinSuffixForCurrentKingdom(false);
      return o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(e);
    },
    enumerable: true,
    configurable: true
  });
  return EmptyMapobject;
}(u.BasicMapobject);
exports.EmptyMapobject = p;
a.classImplementsInterfaces(p, "IIngameUICapable");