Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./6.js");
var a = require("./18.js");
var s = require("./68.js");
var r = require("./153.js");
var l = require("./2045.js");
var c = createjs.ColorFilter;
var u = createjs.Point;
var d = function () {
  function IsoConst() {}
  IsoConst._getIsoColorsDic = function () {
    var e = new Map();
    e.set(r.KingdomEnum.CLASSIC, new l.IsoColorVO(10204236, 7048512, 6390308));
    e.set(r.KingdomEnum.ICE, new l.IsoColorVO(15987444, 11711163, 13158851));
    e.set(r.KingdomEnum.DESSERT, new l.IsoColorVO(14930321, 10984830, 12097628));
    e.set(r.KingdomEnum.VOLCANO, new l.IsoColorVO(4601386, 4013886, 6702132));
    e.set(r.KingdomEnum.ISLAND, new l.IsoColorVO(11448899, 7048512, 10459474));
    e.set(r.KingdomEnum.FACTION, new l.IsoColorVO(7238191, 4013886, 7895100));
    e.set(r.KingdomEnum.SEAQUEEN, new l.IsoColorVO(9811262, 6390308, 6390308));
    e.set(r.KingdomEnum.THORNKING, new l.IsoColorVO(5406518, 11385024, 6390308));
    e.set(r.KingdomEnum.UNDERWORLD, new l.IsoColorVO(2906460, 11385024, 6390308));
    return e;
  };
  IsoConst._getBuildingGroundColorDic = function () {
    var e = new Map();
    e.set(a.ClientConstCastle.BUILDINGGROUND_TYPE_MILITARY, ["#299CD8", "#055998", 0.5]);
    e.set(a.ClientConstCastle.BUILDINGGROUND_TYPE_CIVIL, ["#E0Db12", "#9F7906", 0.4]);
    e.set(a.ClientConstCastle.BUILDINGGROUND_TYPE_DEFENCE, ["#9B9B9A", "#545454", 0.6]);
    e.set(a.ClientConstCastle.BUILDINGGROUND_TYPE_DECO, ["#604293", "#65247D", 0.45]);
    e.set("INVALID", ["#FF00FF", "#000000", 0]);
    return e;
  };
  IsoConst._getKeyWorldFunctions = function () {
    var e = new Map();
    e.set(IsoConst.KW_ET, h.IsoKeyWordCheats.onCheatET);
    e.set(IsoConst.KW_FARHAT, h.IsoKeyWordCheats.onCheatFarhat);
    e.set(IsoConst.KW_DEBUG_CROSS, h.IsoKeyWordCheats.onCheatDebugCross);
    e.set(IsoConst.KW_DEBUG_POS, h.IsoKeyWordCheats.onCheatDebugPos);
    e.set(IsoConst.KW_FPS, h.IsoKeyWordCheats.onCheatFps);
    e.set(IsoConst.KW_Z_SORT, h.IsoKeyWordCheats.onCheatZSort);
    return e;
  };
  IsoConst.__initialize_static_members = function () {
    IsoConst.GRID_TOTAL_DIMENSION = new u(500, 500);
    IsoConst.GRID_START_POS = new u(180, 180);
    IsoConst.GRID_INNER_DIMENSION = new u(60, 60);
    IsoConst.GRID_TILE_DIMENSION_UNTRANSLATED = new u(28.3, 28.3);
    IsoConst.GRID_TILE_DIMENSION_TRANSLATED = new u(80, 40);
    IsoConst.GRID_PATTERN_SIZE = new u(1, 1);
    IsoConst.CAMERA_CENTER_TILE = new u(210, 210);
    IsoConst.CAMERA_ZOOM_STEPS = [2, 1.5, 1, 0.75, 0.5625, 0.421875, 0.369140625, 0.31640625, 0.23730468, 0.17797851, 0.13348388, 0.10011291];
    IsoConst.CAMERA_ZOOM_DEFAULT_INDEX = o.int(IsoConst.CAMERA_ZOOM_STEPS.length - 1);
    IsoConst.VE_GLOW_FILTER_STANDARD = s.BitmapFilterHelper.FILTER_GLOW_STANDARD;
    IsoConst.VE_GLOW_FILTER_BLUE = s.BitmapFilterHelper.FILTER_GLOW_BLUE;
    IsoConst.DRAG_VALID_FILTER = new c(0, 0, 0, 3, 0, 200, 0, 0);
    IsoConst.DRAG_INVALID_FILTER = new c(0, 0, 0, 3, 255, 0, 0, 0);
    IsoConst.DRAG_VALID_DISTRICT_FILTER = new c(0, 0, 0, 3, 50, 89, 85, 0);
    IsoConst.ISO_COLORS = IsoConst._getIsoColorsDic();
    IsoConst.BUILDING_GROUND_COLORS = IsoConst._getBuildingGroundColorDic();
    IsoConst.Z_SORT_LOOK_POINT = new u(300, 300);
    IsoConst.KEY_WORD_FUNCTIONS = IsoConst._getKeyWorldFunctions();
    IsoConst.VALID_PANELS_FOR_DRAGGING = [p.CastleRotationPanel];
    if (n.currentBrowserInfo.isEdge || n.currentBrowserInfo.isIE) {
      IsoConst.CAMERA_ZOOM_STEPS = [0.5, 0.421875, 0.369140625, 0.31640625, 0.23730468, 0.17797851, 0.13348388, 0.10011291];
    }
  };
  IsoConst.GRID_TILE_DIMENSION_UNTRANSLATED = new u(28.3, 28.3);
  IsoConst.GRID_TILE_DIMENSION_TRANSLATED = new u(80, 40);
  IsoConst.MOVEMENTS_ACTIVATED = true;
  IsoConst.MOVEMENTS_MAX_AMOUNT = 20;
  IsoConst.MOVEMENTS_MAX_AMOUNT_ON_BUILDING_COUNT = 70;
  IsoConst.MOVEMENTS_FPS = 200;
  IsoConst.MOVEMENTS_SPEED_MIN = 0.04;
  IsoConst.MOVEMENTS_SPEED_MAX = 0.07;
  IsoConst.MOVEMENTS_VISIT_PROBABILITY = 30;
  IsoConst.MOVEMENTS_OUTER_PROBABILITY = 30;
  IsoConst.MOVEMENTS_SPAWN_INTERVAL = 1000;
  IsoConst.MOVEMENTS_FADE_SPEED = 0.065;
  IsoConst.MOVEMENTS_WALK_BOOST = 0.1;
  IsoConst.MOVEMENTS_WALK_BOOST_DECREASE = 0.001;
  IsoConst.CAMERA_DEBUG_MOVE_SPEED = 300;
  IsoConst.BUILDING_FOCUS_ALPHA = 0.7;
  IsoConst.BUILDING_FOCUS_DISTANCE_TO_DRAGGING = 45;
  IsoConst.BUILDING_GROUND_BORDER_ALPHA = 0.4;
  IsoConst.BUILDING_GROUND_BORDER_THICKNESS = 6;
  IsoConst.KEY_WORD_BUFFER_LENGTH = 100;
  IsoConst.KW_ET = "erichtaker";
  IsoConst.KW_FARHAT = "farhat";
  IsoConst.KW_DEBUG_CROSS = "isoworlddebugcross";
  IsoConst.KW_DEBUG_POS = "isoworlddebugpos";
  IsoConst.KW_FPS = "isoworldfps";
  IsoConst.KW_Z_SORT = "isoworldzsort";
  return IsoConst;
}();
exports.IsoConst = d;
var p = require("./1184.js");
var h = require("./2046.js");
d.__initialize_static_members();