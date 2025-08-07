Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./1.js");
var u = require("./153.js");
var d = require("./53.js");
var p = require("./44.js");
var h = require("./24.js");
var g = function () {
  function KingdomCrestsAndSymbolsHelper() {}
  KingdomCrestsAndSymbolsHelper.addSymbolToMC = function (e, t, i, s, u = 0) {
    if (e) {
      o.MovieClipHelper.clearMovieClip(e);
      var d = KingdomCrestsAndSymbolsHelper.getKingdomByID(i);
      var p = [];
      if (u == 0) {
        p.push(d.symbolColor);
      } else {
        p.push(u);
      }
      var h = [];
      h.push(new n.ClipColor("cc", p, "c"));
      var g = new a.GoodgameDisplayObjectClipExternal(KingdomCrestsAndSymbolsHelper.SYMBOL_PREFIX + d.xmlName, r.BasicModel.basicLoaderData.getVersionedItemAssetUrl(KingdomCrestsAndSymbolsHelper.ASSET_NAME), h, 1, false);
      g.clipSizeComponent = new l.ClipSizeComponent(s.x, s.y);
      e.addChild(g);
    }
    if (t) {
      var C = new c.ColorTransform();
      C.color = d.symbolBgColor;
      t.transform.colorTransform = C;
    }
  };
  KingdomCrestsAndSymbolsHelper.addCrestToMC = function (e, t, i) {
    if (e) {
      o.MovieClipHelper.clearMovieClip(e);
      var n = KingdomCrestsAndSymbolsHelper.getKingdomByID(t);
      var a = new h.CastleGoodgameExternalClip(KingdomCrestsAndSymbolsHelper.CREST_PREFIX + n.xmlName, KingdomCrestsAndSymbolsHelper.assetPath, null, 1, false);
      a.clipSizeComponent = new l.ClipSizeComponent(i.x, i.y);
      e.addChild(a);
    }
  };
  KingdomCrestsAndSymbolsHelper.getKingdomByID = function (e) {
    var t = u.KingdomEnum.getTypeById(e);
    if (e == u.KingdomEnum.CLASSIC.id && d.ABGHelper.isOnABGServer && p.SpecialServerHelper.useSkin) {
      t = u.KingdomEnum.getTypeByXMLName(d.ABGHelper.skinName);
    }
    return t;
  };
  Object.defineProperty(KingdomCrestsAndSymbolsHelper, "assetPath", {
    get: function () {
      return r.BasicModel.basicLoaderData.getVersionedItemAssetUrl(KingdomCrestsAndSymbolsHelper.ASSET_NAME);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingdomCrestsAndSymbolsHelper, "castleEnv", {
    get: function () {
      return s.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  KingdomCrestsAndSymbolsHelper.ASSET_NAME = "KingdomCrestsSymbols";
  KingdomCrestsAndSymbolsHelper.SYMBOL_PREFIX = "KingdomSymbol_";
  KingdomCrestsAndSymbolsHelper.CREST_PREFIX = "KingdomCrest_";
  return KingdomCrestsAndSymbolsHelper;
}();
exports.KingdomCrestsAndSymbolsHelper = g;