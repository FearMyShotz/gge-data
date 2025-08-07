Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CharacterHelper() {}
  CharacterHelper.createCharacterBig = function (e, t, i = -1, n = -1, u = false, d = null) {
    s.MovieClipHelper.clearMovieClip(t);
    var p = l.ClientConstCharacter.getCharacterBigAssetName(e);
    var h = new c.CastleGoodgameExternalClip(p, o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(p), null, 0, r.getDefinitionByName("QuestGiverBig_" + l.ClientConstCharacter.CHAR_ID_UNKNOWN));
    if (i >= 0 && n >= 0) {
      var g = new a.ClipSizeComponent(i, n);
      g.clipSizeChanged.add(CharacterHelper.onClipSizeChanged);
      h.clipSizeComponent = g;
    }
    CharacterHelper.currentLoadingInfos.push({
      clip: h,
      destMc: t,
      charId: e,
      maxWidth: i,
      maxHeight: n,
      mirror: u,
      onLoadedCallback: d
    });
    if (h.isLoaded) {
      CharacterHelper.onLoaded(h);
    } else {
      h.clipLoaded.addOnce(CharacterHelper.onLoaded);
    }
    return h;
  };
  CharacterHelper.onLoaded = function (e) {
    var t;
    var i = 0;
    for (var n = 0; n < CharacterHelper.currentLoadingInfos.length; ++n) {
      if (e == CharacterHelper.currentLoadingInfos[n].clip) {
        i = n;
        t = CharacterHelper.currentLoadingInfos[n];
        break;
      }
    }
    if (t.destMc) {
      s.MovieClipHelper.clearMovieClip(t.destMc);
    }
    if (t.destMc) {
      t.destMc.addChild(e);
    }
    if (t.mirror) {
      e.scaleY *= -1;
      e.rotation += 180;
    }
    CharacterHelper.currentLoadingInfos.splice(i, 1);
    if (t.onLoadedCallback) {
      t.onLoadedCallback(e);
    }
  };
  CharacterHelper.onClipSizeChanged = function (e) {
    var t = e.asDisplayObject();
    if (e.clipSizeComponent) {
      t.x = e.clipSizeComponent.offsetX;
      t.y = e.clipSizeComponent.offsetY;
    }
  };
  CharacterHelper.__initialize_static_members = function () {
    CharacterHelper.currentLoadingInfos = [];
  };
  return CharacterHelper;
}();
exports.CharacterHelper = n;
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./51.js");
var c = require("./24.js");
n.__initialize_static_members();