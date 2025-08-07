Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function ClientConstColor() {}
  ClientConstColor.rgbToUint = function (e, t, i) {
    return e << 16 | t << 8 | i;
  };
  ClientConstColor.uint32toHexString = function (e) {
    return "#" + ClientConstColor.uint8toHex((e & 16711680) >> 16) + ClientConstColor.uint8toHex((e & 65280) >> 8) + ClientConstColor.uint8toHex((e & 255) >> 0);
  };
  ClientConstColor.uint8toHex = function (e) {
    var t = Number(e & 255).toString(16).toUpperCase();
    if (e < 16) {
      t = "0" + t;
    }
    return t;
  };
  ClientConstColor.__initialize_static_members = function () {
    ClientConstColor.FONT_INSUFFICIENT_COLOR = ClientConstColor.MODERN_RED;
    ClientConstColor.MODERN_DEFAULT = ClientConstColor.FONT_DEFAULT_COLOR;
    ClientConstColor.USE_DEFAULT_COLOR = Number.MAX_VALUE;
  };
  ClientConstColor.BACKGROUND_COLOR = 7178542;
  ClientConstColor.LORD_HAS_UNIQUE_ITEM_EQUIPPED = 16280941;
  ClientConstColor.LORD_HAS_NO_UNIQUE_ITEM_EQUIPPED = 16280941;
  ClientConstColor.EQUIPMENT_COLOR_RARITY_COMMON = 13421772;
  ClientConstColor.EQUIPMENT_COLOR_RARITY_RARE = 10151967;
  ClientConstColor.EQUIPMENT_COLOR_RARITY_EPIC = 13010425;
  ClientConstColor.EQUIPMENT_COLOR_RARITY_LEGENDARY = 16362780;
  ClientConstColor.EQUIPMENT_COLOR_RARITY_UNIQUE = 16736609;
  ClientConstColor.EQUIPMENT_COLOR_GEM = 16366371;
  ClientConstColor.ALLIANCE_DIPLOMACY_WAR = 10360577;
  ClientConstColor.ALLIANCE_DIPLOMACY_SOFTALLIED = 15657952;
  ClientConstColor.ALLIANCE_DIPLOMACY_ALLIED = 15124482;
  ClientConstColor.ALLIANCE_COLOR_DIPLOMACY = 9348366;
  ClientConstColor.ALLIANCE_COLOR_MEMBER = 32421;
  ClientConstColor.ALLIANCE_COLOR_LEVEL = 7094616;
  ClientConstColor.ALLIANCE_COLOR_DEPOSIT = 15296059;
  ClientConstColor.ALLIANCE_COLOR_DEFAULT = 4104050;
  ClientConstColor.ALLIANCE_COLOR_PALACE = 13391616;
  ClientConstColor.GENERIC_LIGHT_BLUE = 2910357;
  ClientConstColor.GENERIC_LIGHT_BLUE2 = 6805236;
  ClientConstColor.GENERIC_RED = 13369344;
  ClientConstColor.COLORBLIND_RED = 13382417;
  ClientConstColor.GENERIC_BRIGHT_RED = 16711680;
  ClientConstColor.GENERIC_BRIGHT_YELLOW = 16776960;
  ClientConstColor.GENERIC_BROWN = 4403749;
  ClientConstColor.GENERIC_WHITE = 16777215;
  ClientConstColor.GENERIC_LIGHT_BROWN = 12958069;
  ClientConstColor.GENERIC_BLACK = 0;
  ClientConstColor.GENERIC_DARK_GREEN = 26112;
  ClientConstColor.GENERIC_GREEN = 34816;
  ClientConstColor.COLORBLIND_GREEN = 39304;
  ClientConstColor.GENERIC_LIGHT_GREEN = 9940285;
  ClientConstColor.GENERIC_DIRTY_GREEN = 2247687;
  ClientConstColor.GENERIC_DIRTY_RED = 8985371;
  ClientConstColor.GENERIC_BLUE_EFFECT = 366790;
  ClientConstColor.FONT_FROZEN = 3368635;
  ClientConstColor.FONT_DEFAULT_COLOR = 4469542;
  ClientConstColor.HELP_LINK_COLOR = 210322;
  ClientConstColor.DEFAULT_LINK_COLOR = 2342123;
  ClientConstColor.DARK_LINK_COLOR = 8707574;
  ClientConstColor.ATTACK_ALERT_FRAME_COLOR = 12267811;
  ClientConstColor.PRIME_DAY_PERCENTAGE_COLOR = 4469542;
  ClientConstColor.MODERN_RED = 13369344;
  ClientConstColor.MODERN_RED2 = 15344681;
  ClientConstColor.MODERN_GREEN = 34560;
  ClientConstColor.MODERN_DEFAULT_BRIGHT = 15388850;
  ClientConstColor.MODERN_SUBSCRIPTION = 6805236;
  ClientConstColor.MODERN_LINK_BRIGHT = 6805236;
  ClientConstColor.MODERN_LINK_BRIGHT_HOVERED = 2136737;
  ClientConstColor.DEFAULT_SUBSCRIPTION = 411053;
  return ClientConstColor;
}();
exports.ClientConstColor = n;
n.__initialize_static_members();