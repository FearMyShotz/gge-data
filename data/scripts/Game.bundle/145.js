Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = function (e) {
  function IsoAdditionalClipEnum(t, i, n, a = false) {
    var s = this;
    s._addWithoutSubClip = false;
    CONSTRUCTOR_HACK;
    (s = e.call(this, t, o.BasicEnum.instantiationKey) || this)._layerName = n;
    s._assetAndClipName = i;
    s._addWithoutSubClip = a;
    return s;
  }
  n.__extends(IsoAdditionalClipEnum, e);
  Object.defineProperty(IsoAdditionalClipEnum.prototype, "layerName", {
    get: function () {
      return this._layerName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoAdditionalClipEnum.prototype, "assetAndClipName", {
    get: function () {
      return this._assetAndClipName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoAdditionalClipEnum.prototype, "addWithoutSubClip", {
    get: function () {
      return this._addWithoutSubClip;
    },
    enumerable: true,
    configurable: true
  });
  IsoAdditionalClipEnum.__initialize_static_members = function () {
    IsoAdditionalClipEnum.NONE = new IsoAdditionalClipEnum("none", "", "");
    IsoAdditionalClipEnum.FLAG = new IsoAdditionalClipEnum("flag", "FX_BuildingFlag", "flagHolder");
    IsoAdditionalClipEnum.DAMAGE = new IsoAdditionalClipEnum("damage", "FX_RoofFlame", "damageHolder", true);
    IsoAdditionalClipEnum.PLAGUE = new IsoAdditionalClipEnum("damage", "FX_RoofPlague", "damageHolder");
    IsoAdditionalClipEnum.SMOKE = new IsoAdditionalClipEnum("smoke", "", "smokeHolder");
    IsoAdditionalClipEnum.CAMP_FIRE = new IsoAdditionalClipEnum("campFire", "FX_Campfire", "fx_campfire");
    IsoAdditionalClipEnum.BARRACK_FIRE = new IsoAdditionalClipEnum("barrackFire", "FX_Campfire", "fx_barracksfire");
    IsoAdditionalClipEnum.COLOSSUS_FIRE = new IsoAdditionalClipEnum("colossusFire", "FX_Campfire", "fx_colossusFire");
    IsoAdditionalClipEnum.EXCLAMATION_MARK = new IsoAdditionalClipEnum("exclamationMark", "FX_Exclamationmark", "fx_exclamationmark");
    IsoAdditionalClipEnum.EXCLAMATION_MARK2 = new IsoAdditionalClipEnum("exclamationMark", "FX_Exclamationmark", "FX_Exclamationmark");
    IsoAdditionalClipEnum.EXCLAMATION_MARK3 = new IsoAdditionalClipEnum("exclamationMark", "FX_Exclamationmark", "exclamation");
    IsoAdditionalClipEnum.KOC_FIRE1 = new IsoAdditionalClipEnum("kocFire1", "FX_Campfire", "fx_throne_fire1");
    IsoAdditionalClipEnum.KOC_FIRE2 = new IsoAdditionalClipEnum("kocFire2", "FX_Campfire", "fx_throne_fire2");
    IsoAdditionalClipEnum.KOC_FIRE3 = new IsoAdditionalClipEnum("kocFire3", "FX_Campfire", "fx_throne_fire3");
    IsoAdditionalClipEnum.KOC_FIRE4 = new IsoAdditionalClipEnum("kocFire4", "FX_Campfire", "fx_throne_fire4");
  };
  return IsoAdditionalClipEnum;
}(require("./84.js").CastleEnum);
exports.IsoAdditionalClipEnum = a;
a.__initialize_static_members();