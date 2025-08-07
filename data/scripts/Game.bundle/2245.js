Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function ClientConstGem() {}
  ClientConstGem.createColorMapping = function () {
    var e = {
      [ClientConstGem.EFFECT_DEFENSE_UNIT_AMOUNT_WALL]: ClientConstGem.GEM_COLOR_GREEN,
      [ClientConstGem.EFFECT_HIDEOUT_CAPACITY]: ClientConstGem.GEM_COLOR_YELLOW,
      [ClientConstGem.EFFECT_ATTACK_UNIT_AMOUNT_FRONT]: ClientConstGem.GEM_COLOR_DARKGREEN,
      [ClientConstGem.EFFECT_ATTACK_UNIT_AMOUNT_FLANK]: ClientConstGem.GEM_COLOR_LIGHTGREEN,
      [ClientConstGem.EFFECT_LOOT_CAPACITY]: ClientConstGem.GEM_COLOR_DARKBLUE,
      [ClientConstGem.EFFECT_RETURN_TRAVEL_BOOST]: ClientConstGem.GEM_COLOR_LIGHTBLUE,
      [ClientConstGem.EFFECT_ATTACK_SUPPORT_UNITS_WEAK]: ClientConstGem.GEM_COLOR_PINK,
      [ClientConstGem.EFFECT_ATTACK_SUPPORT_UNITS_STRONG]: ClientConstGem.GEM_COLOR_PURPLE,
      [ClientConstGem.EFFECT_DEFENSE_SUPPORT_UNITS_WEAK]: ClientConstGem.GEM_COLOR_PINK,
      [ClientConstGem.EFFECT_DEFENSE_SUPPORT_UNITS_STRONG]: ClientConstGem.GEM_COLOR_PURPLE,
      [ClientConstGem.EFFECT_ATTACK_BOOST_FLANK]: ClientConstGem.GEM_COLOR_GREEN,
      [ClientConstGem.EFFECT_DEFENSE_BOOST_FLANK]: ClientConstGem.GEM_COLOR_GREEN,
      [ClientConstGem.EFFECT_ATTACK_BOOST_FRONT]: ClientConstGem.GEM_COLOR_DARKGREEN,
      [ClientConstGem.EFFECT_DEFENSE_BOOST_FRONT]: ClientConstGem.GEM_COLOR_DARKGREEN,
      [ClientConstGem.EFFECT_ATTACK_BOOST_YARD]: ClientConstGem.GEM_COLOR_PINK,
      [ClientConstGem.EFFECT_DEFENSE_BOOST_YARD]: ClientConstGem.GEM_COLOR_LIGHTGREEN,
      [ClientConstGem.EFFECT_FAME_OFFENSE_BONUS]: ClientConstGem.GEM_COLOR_DARKBLUE,
      [ClientConstGem.EFFECT_FAME_DEFENSE_BONUS]: ClientConstGem.GEM_COLOR_DARKBLUE,
      [ClientConstGem.EFFECT_LOOT_BONUS]: ClientConstGem.GEM_COLOR_YELLOW,
      [ClientConstGem.EFFECT_LOOT_REDUCTION]: ClientConstGem.GEM_COLOR_YELLOW,
      [ClientConstGem.EFFECT_FIRE_BOOST]: ClientConstGem.GEM_COLOR_RED,
      [ClientConstGem.EFFECT_FIRE_BRIGADE_BOOST]: ClientConstGem.GEM_COLOR_RED,
      [ClientConstGem.EFFECT_MAGIC_FIND_BONUS]: ClientConstGem.GEM_COLOR_ORANGE,
      [ClientConstGem.EFFECT_COOLDOWN_REDUCTION]: ClientConstGem.GEM_COLOR_LIGHTBLUE
    };
    return e;
  };
  ClientConstGem.__initialize_static_members = function () {
    ClientConstGem.GEM_COLOR_LIGHTGREEN = 8446478;
    ClientConstGem.GEM_COLOR_DARKGREEN = 295943;
    ClientConstGem.GEM_COLOR_GREEN = 380018;
    ClientConstGem.GEM_COLOR_LIGHTBLUE = 2730978;
    ClientConstGem.GEM_COLOR_DARKBLUE = 861910;
    ClientConstGem.GEM_COLOR_RED = 13836847;
    ClientConstGem.GEM_COLOR_PINK = 16542658;
    ClientConstGem.GEM_COLOR_PURPLE = 6423740;
    ClientConstGem.GEM_COLOR_YELLOW = 14400545;
    ClientConstGem.GEM_COLOR_ORANGE = 15817252;
    ClientConstGem.EFFECT_ATTACK_SUPPORT_UNITS_WEAK = 511;
    ClientConstGem.EFFECT_ATTACK_SUPPORT_UNITS_STRONG = 512;
    ClientConstGem.EFFECT_ATTACK_BOOST_FRONT = 513;
    ClientConstGem.EFFECT_ATTACK_BOOST_FLANK = 514;
    ClientConstGem.EFFECT_ATTACK_BOOST_YARD = 504;
    ClientConstGem.EFFECT_FAME_OFFENSE_BONUS = 51;
    ClientConstGem.EFFECT_LOOT_BONUS = 54;
    ClientConstGem.EFFECT_FIRE_BOOST = 56;
    ClientConstGem.EFFECT_DEFENSE_BOOST_FRONT = 509;
    ClientConstGem.EFFECT_DEFENSE_BOOST_FLANK = 510;
    ClientConstGem.EFFECT_DEFENSE_BOOST_YARD = 501;
    ClientConstGem.EFFECT_FAME_DEFENSE_BONUS = 1;
    ClientConstGem.EFFECT_LOOT_REDUCTION = 3;
    ClientConstGem.EFFECT_FIRE_BRIGADE_BOOST = 5;
    ClientConstGem.EFFECT_DEFENSE_SUPPORT_UNITS_WEAK = 507;
    ClientConstGem.EFFECT_DEFENSE_SUPPORT_UNITS_STRONG = 508;
    ClientConstGem.EFFECT_MAGIC_FIND_BONUS = 60;
    ClientConstGem.EFFECT_COOLDOWN_REDUCTION = 65;
    ClientConstGem.EFFECT_DEFENSE_UNIT_AMOUNT_WALL = 13;
    ClientConstGem.EFFECT_HIDEOUT_CAPACITY = 502;
    ClientConstGem.EFFECT_ATTACK_UNIT_AMOUNT_FRONT = 503;
    ClientConstGem.EFFECT_ATTACK_UNIT_AMOUNT_FLANK = 66;
    ClientConstGem.EFFECT_LOOT_CAPACITY = 505;
    ClientConstGem.EFFECT_RETURN_TRAVEL_BOOST = 506;
    ClientConstGem.GEM_COLOR_MAPPING = ClientConstGem.createColorMapping();
  };
  return ClientConstGem;
}();
exports.ClientConstGem = n;
n.__initialize_static_members();