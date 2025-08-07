Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = function (e) {
  function CastleInGameHelpCategoriesEnum(t, i) {
    var n = this;
    n._key = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this, t, o.BasicEnum.instantiationKey) || this)._key = i;
    return n;
  }
  n.__extends(CastleInGameHelpCategoriesEnum, e);
  Object.defineProperty(CastleInGameHelpCategoriesEnum.prototype, "key", {
    get: function () {
      return this._key;
    },
    enumerable: true,
    configurable: true
  });
  CastleInGameHelpCategoriesEnum.getInGameHelpCategories = function () {
    return [CastleInGameHelpCategoriesEnum.WELCOME, CastleInGameHelpCategoriesEnum.YOUR_CASTLE, CastleInGameHelpCategoriesEnum.OUTPOSTS, CastleInGameHelpCategoriesEnum.BUILDINGS, CastleInGameHelpCategoriesEnum.RESOURCES, CastleInGameHelpCategoriesEnum.COINS_AND_TAXES, CastleInGameHelpCategoriesEnum.RUBIES, CastleInGameHelpCategoriesEnum.PUBLIC_ORDER, CastleInGameHelpCategoriesEnum.LEVEL, CastleInGameHelpCategoriesEnum.WORLD_MAP, CastleInGameHelpCategoriesEnum.UNITS_AND_TOOLS, CastleInGameHelpCategoriesEnum.ATTACK, CastleInGameHelpCategoriesEnum.DEFENSES, CastleInGameHelpCategoriesEnum.ROBBER_AND_BARON_CASTLES, CastleInGameHelpCategoriesEnum.HONOR, CastleInGameHelpCategoriesEnum.ALLIANCES, CastleInGameHelpCategoriesEnum.EQUIPMENT, CastleInGameHelpCategoriesEnum.AGENTS, CastleInGameHelpCategoriesEnum.KINGDOMS, CastleInGameHelpCategoriesEnum.MILITARY_HOSPITAL, CastleInGameHelpCategoriesEnum.COMMAND_CENTRES, CastleInGameHelpCategoriesEnum.BOOKMARKS, CastleInGameHelpCategoriesEnum.EVENTS, CastleInGameHelpCategoriesEnum.MIGHT_POINTS];
  };
  CastleInGameHelpCategoriesEnum.prototype.getCategoryText = function () {
    return "ingameHelp_category_" + (this._key + 1);
  };
  CastleInGameHelpCategoriesEnum.prototype.getCategoryContentText = function () {
    return "ingameHelp_category_" + (this._key + 1) + "_text_1";
  };
  CastleInGameHelpCategoriesEnum.getCategoryFromKey = function (e) {
    var t = CastleInGameHelpCategoriesEnum.getInGameHelpCategories();
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o.key == e) {
          return o;
        }
      }
    }
    return CastleInGameHelpCategoriesEnum.UNDEFINED;
  };
  CastleInGameHelpCategoriesEnum.__initialize_static_members = function () {
    CastleInGameHelpCategoriesEnum.UNDEFINED = new CastleInGameHelpCategoriesEnum("UNDEFINED", 0);
    CastleInGameHelpCategoriesEnum.WELCOME = new CastleInGameHelpCategoriesEnum("WELCOME", 0);
    CastleInGameHelpCategoriesEnum.YOUR_CASTLE = new CastleInGameHelpCategoriesEnum("YOUR_CASTLE", 1);
    CastleInGameHelpCategoriesEnum.OUTPOSTS = new CastleInGameHelpCategoriesEnum("OUTPOSTS", 2);
    CastleInGameHelpCategoriesEnum.BUILDINGS = new CastleInGameHelpCategoriesEnum("BUILDINGS", 3);
    CastleInGameHelpCategoriesEnum.RESOURCES = new CastleInGameHelpCategoriesEnum("RESOURCES", 4);
    CastleInGameHelpCategoriesEnum.COINS_AND_TAXES = new CastleInGameHelpCategoriesEnum("COINS_AND_TAXES", 5);
    CastleInGameHelpCategoriesEnum.RUBIES = new CastleInGameHelpCategoriesEnum("RUBIES", 6);
    CastleInGameHelpCategoriesEnum.PUBLIC_ORDER = new CastleInGameHelpCategoriesEnum("PUBLIC_ORDER", 7);
    CastleInGameHelpCategoriesEnum.LEVEL = new CastleInGameHelpCategoriesEnum("LEVEL", 8);
    CastleInGameHelpCategoriesEnum.WORLD_MAP = new CastleInGameHelpCategoriesEnum("WORLD_MAP", 9);
    CastleInGameHelpCategoriesEnum.UNITS_AND_TOOLS = new CastleInGameHelpCategoriesEnum("UNITS_AND_TOOLS", 10);
    CastleInGameHelpCategoriesEnum.ATTACK = new CastleInGameHelpCategoriesEnum("ATTACK", 11);
    CastleInGameHelpCategoriesEnum.DEFENSES = new CastleInGameHelpCategoriesEnum("DEFENSES", 12);
    CastleInGameHelpCategoriesEnum.ROBBER_AND_BARON_CASTLES = new CastleInGameHelpCategoriesEnum("ROBBER_AND_BARON_CASTLES", 13);
    CastleInGameHelpCategoriesEnum.HONOR = new CastleInGameHelpCategoriesEnum("HONOR", 14);
    CastleInGameHelpCategoriesEnum.ALLIANCES = new CastleInGameHelpCategoriesEnum("ALLIANCES", 15);
    CastleInGameHelpCategoriesEnum.EQUIPMENT = new CastleInGameHelpCategoriesEnum("EQUIPMENT", 16);
    CastleInGameHelpCategoriesEnum.AGENTS = new CastleInGameHelpCategoriesEnum("AGENTS", 17);
    CastleInGameHelpCategoriesEnum.KINGDOMS = new CastleInGameHelpCategoriesEnum("KINGDOMS", 18);
    CastleInGameHelpCategoriesEnum.MILITARY_HOSPITAL = new CastleInGameHelpCategoriesEnum("MILITARY_HOSPITAL", 19);
    CastleInGameHelpCategoriesEnum.COMMAND_CENTRES = new CastleInGameHelpCategoriesEnum("COMMAND_CENTRES", 20);
    CastleInGameHelpCategoriesEnum.BOOKMARKS = new CastleInGameHelpCategoriesEnum("BOOKMARKS", 21);
    CastleInGameHelpCategoriesEnum.EVENTS = new CastleInGameHelpCategoriesEnum("EVENTS", 22);
    CastleInGameHelpCategoriesEnum.MIGHT_POINTS = new CastleInGameHelpCategoriesEnum("MIGHT_POINTS", 23);
  };
  return CastleInGameHelpCategoriesEnum;
}(o.BasicEnum);
exports.CastleInGameHelpCategoriesEnum = a;
a.__initialize_static_members();