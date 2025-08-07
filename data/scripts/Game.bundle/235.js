Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./84.js");
var s = createjs.Point;
var r = function (e) {
  function AllianceCrestSizeEnum(t, i, n) {
    var a = e.call(this, t, o.BasicEnum.instantiationKey) || this;
    a._width = NaN;
    a._height = NaN;
    a._width = i;
    a._height = n;
    return a;
  }
  n.__extends(AllianceCrestSizeEnum, e);
  Object.defineProperty(AllianceCrestSizeEnum.prototype, "width", {
    get: function () {
      return this._width;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceCrestSizeEnum.prototype, "height", {
    get: function () {
      return this._height;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceCrestSizeEnum.prototype, "size", {
    get: function () {
      this._size ||= new s(this._width, this._height);
      return this._size;
    },
    enumerable: true,
    configurable: true
  });
  AllianceCrestSizeEnum.__initialize_static_members = function () {
    AllianceCrestSizeEnum.XS = new AllianceCrestSizeEnum("crestSize_xs", 34, 40);
    AllianceCrestSizeEnum.WORLD_MAP = new AllianceCrestSizeEnum("worldmap", 40, 46);
    AllianceCrestSizeEnum.S = new AllianceCrestSizeEnum("crestSize_s", 56, 66);
    AllianceCrestSizeEnum.M = new AllianceCrestSizeEnum("crestSize_m", 68, 80);
    AllianceCrestSizeEnum.L = new AllianceCrestSizeEnum("crestSize_l", 153, 180);
    AllianceCrestSizeEnum.XL = new AllianceCrestSizeEnum("crestSize_xl", 418, 492);
    AllianceCrestSizeEnum.SIZE_PLAYERINFO = new AllianceCrestSizeEnum("crestSize_playerInfo", 115, 135);
    AllianceCrestSizeEnum.SIZE_BATTLEPHASE_ENDED = new AllianceCrestSizeEnum("crestSize_battlephase_ended", 175, 205);
    AllianceCrestSizeEnum.SIZE_BATTLEPHASE_ENDED_WINNER = new AllianceCrestSizeEnum("crestSize_battlephase_ended_winner", 90, 106);
    AllianceCrestSizeEnum.SIZE_NAME_CITY = new AllianceCrestSizeEnum("crestSize_name_city", 135, 175);
    AllianceCrestSizeEnum.SIZE_MAP_INFO = new AllianceCrestSizeEnum("crestSize_map_info", 54, 52);
    AllianceCrestSizeEnum.SIZE_FIGHTSCREEN = new AllianceCrestSizeEnum("crestSize_fighscreen", 110, 116);
    AllianceCrestSizeEnum.SIZE_FIGHTSCREEN_2 = new AllianceCrestSizeEnum("crestSize_fighscreen", 46, 46);
    AllianceCrestSizeEnum.CREST_CEATION_BIG = new AllianceCrestSizeEnum("crestcreationBig", 248, 326);
    AllianceCrestSizeEnum.CREST_CEATION_SMALL = new AllianceCrestSizeEnum("crestcreationSmall", 70, 90);
    AllianceCrestSizeEnum.CREST_CEATION_SMALL_PREMIUM = new AllianceCrestSizeEnum("crestcreationSmallPremium", 100, 100);
    AllianceCrestSizeEnum.CREST_CEATION_SMALL_FREE = new AllianceCrestSizeEnum("crestcreationSmallPremium", 64, 64);
  };
  return AllianceCrestSizeEnum;
}(a.CastleEnum);
exports.AllianceCrestSizeEnum = r;
r.__initialize_static_members();