Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.Point;
var o = function () {
  function SectorHelper() {}
  SectorHelper.getNextRandomInt = function (e) {
    return r.int(SectorHelper.rand.nextInt(e));
  };
  SectorHelper.absolutPosToSectorPos = function (e) {
    return new n(r.int(e.x / s.WorldConst.SECTOR_WIDTH), r.int(e.y / s.WorldConst.SECTOR_HEIGHT));
  };
  SectorHelper.getSectorX = function (e) {
    return r.int(r.int(e / s.WorldConst.SECTOR_WIDTH));
  };
  SectorHelper.getSectorY = function (e) {
    return r.int(r.int(e / s.WorldConst.SECTOR_HEIGHT));
  };
  SectorHelper.absolutPosToRelativePos = function (e) {
    return new n(e.x % s.WorldConst.SECTOR_WIDTH, e.y % s.WorldConst.SECTOR_HEIGHT);
  };
  SectorHelper.getSectorTopLeft = function (e) {
    var t = SectorHelper.getLoopedPosition(e);
    return new n(t.x * s.WorldConst.SECTOR_WIDTH, t.y * s.WorldConst.SECTOR_HEIGHT);
  };
  SectorHelper.getSectorBottomRight = function (e) {
    var t = SectorHelper.getLoopedPosition(e);
    return new n(t.x * s.WorldConst.SECTOR_WIDTH + s.WorldConst.SECTOR_WIDTH - 1, t.y * s.WorldConst.SECTOR_HEIGHT + s.WorldConst.SECTOR_HEIGHT - 1);
  };
  SectorHelper.getLoopedPosition = function (e) {
    var t = r.int(e.x);
    var i = r.int(e.y);
    t = e.x < 0 ? r.int((l.ClientConstCastle.WORLDMAPSIZE_X - Math.abs(e.x) % l.ClientConstCastle.WORLDMAPSIZE_X) % l.ClientConstCastle.WORLDMAPSIZE_X) : r.int(e.x % l.ClientConstCastle.WORLDMAPSIZE_X);
    i = e.y < 0 ? r.int((l.ClientConstCastle.WORLDMAPSIZE_Y - Math.abs(e.y) % l.ClientConstCastle.WORLDMAPSIZE_Y) % l.ClientConstCastle.WORLDMAPSIZE_Y) : r.int(e.y % l.ClientConstCastle.WORLDMAPSIZE_Y);
    return new n(t, i);
  };
  SectorHelper.getLoopedAreaPosition = function (e) {
    var t = r.int(e.x);
    var i = r.int(e.y);
    t = e.x < 0 ? r.int((l.ClientConstCastle.WORLD_WIDTH - Math.abs(e.x) % l.ClientConstCastle.WORLD_WIDTH) % l.ClientConstCastle.WORLD_WIDTH) : r.int(e.x % l.ClientConstCastle.WORLD_WIDTH);
    return new n(t, i);
  };
  SectorHelper.getLoopedAreaPositionX = function (e) {
    if (e < 0) {
      return r.int((l.ClientConstCastle.WORLD_WIDTH - Math.abs(e) % l.ClientConstCastle.WORLD_WIDTH) % l.ClientConstCastle.WORLD_WIDTH);
    } else {
      return r.int(e % l.ClientConstCastle.WORLD_WIDTH);
    }
  };
  SectorHelper.getLoopedPixelPosition = function (e) {
    var t = r.int(e.x);
    var i = r.int(e.y);
    t = e.x < 0 ? r.int((l.ClientConstCastle.WORLDMAPPIXELSIZE_X - Math.abs(e.x) % l.ClientConstCastle.WORLDMAPPIXELSIZE_X) % l.ClientConstCastle.WORLDMAPPIXELSIZE_X) : r.int(e.x % l.ClientConstCastle.WORLDMAPPIXELSIZE_X);
    i = e.y < 0 ? r.int((l.ClientConstCastle.WORLDMAPPIXELSIZE_Y - Math.abs(e.y) % l.ClientConstCastle.WORLDMAPPIXELSIZE_Y) % l.ClientConstCastle.WORLDMAPPIXELSIZE_Y) : r.int(e.y % l.ClientConstCastle.WORLDMAPPIXELSIZE_Y);
    return new n(t, i);
  };
  SectorHelper.getScreenLoopedXPixelPosition = function (e) {
    var t = r.int(e);
    var i = r.int(l.ClientConstCastle.WORLDMAPPIXELSIZE_X);
    if (e < -i / 2 || e > -i / 2 && e < i * -3 / 8) {
      t += i;
    }
    if (e > i / 2 && e > i * 5 / 8) {
      t -= i;
    }
    return t;
  };
  SectorHelper.getLoopedYPixelPosition = function (e) {
    r.int(e);
    if (e < 0) {
      return r.int((l.ClientConstCastle.WORLDMAPPIXELSIZE_Y - Math.abs(e) % l.ClientConstCastle.WORLDMAPPIXELSIZE_Y) % l.ClientConstCastle.WORLDMAPPIXELSIZE_Y);
    } else {
      return r.int(e % l.ClientConstCastle.WORLDMAPPIXELSIZE_Y);
    }
  };
  SectorHelper.getLoopedSectorPosition = function (e) {
    var t = r.int(e.x);
    var i = r.int(e.y);
    var o = r.int(r.int(l.ClientConstCastle.WORLDMAPSIZE_X));
    var a = r.int(r.int(l.ClientConstCastle.WORLDMAPSIZE_Y));
    t = e.x < 0 ? r.int((o - Math.abs(e.x) % o) % o) : r.int(e.x % o);
    i = e.y < 0 ? r.int((a - Math.abs(e.y) % a) % a) : r.int(e.y % a);
    return new n(t, i);
  };
  SectorHelper.pixelToAreaPosition = function (e) {
    var t = r.int(e.x);
    var i = r.int(e.y);
    t = r.int(t / 64);
    i = r.int(i / 64);
    return new n(t, i);
  };
  SectorHelper.__initialize_static_members = function () {
    SectorHelper.rand = new a.SimpleRandom(923);
  };
  return SectorHelper;
}();
exports.SectorHelper = o;
var a = require("./2.js");
var s = require("./5.js");
var r = require("./6.js");
var l = require("./18.js");
o.__initialize_static_members();