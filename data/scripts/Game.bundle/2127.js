Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleWorldMapBackgroundTilesDirectory() {
    this.sectorCountX = 0;
    this.sectorCountY = 0;
    this.sectorCountX = 0;
    this.sectorCountY = 0;
    this.setupData();
  }
  CastleWorldMapBackgroundTilesDirectory.prototype.setupData = function () {
    this.sectorCountX = r.int(r.int(a.ClientConstCastle.WORLDMAPSIZE_X));
    this.sectorCountY = r.int(r.int(a.ClientConstCastle.WORLDMAPSIZE_Y));
    this.tileVOs = [];
    this.visClassToBitmap = new Map();
    for (var e = 0; e < this.sectorCountY; e++) {
      var t = [];
      this.tileVOs.push(t);
      for (var i = 0; i < this.sectorCountX; i++) {
        var n = new o.CastleWorldMapBackgroundTileVO(i, e, this.visClassToBitmap);
        t.push(n);
      }
    }
  };
  CastleWorldMapBackgroundTilesDirectory.prototype.reInitialize = function () {
    this.sectorCountX = r.int(r.int(a.ClientConstCastle.WORLDMAPSIZE_X));
    this.sectorCountY = r.int(r.int(a.ClientConstCastle.WORLDMAPSIZE_Y));
    this.tileVOs = [];
    for (var e = 0; e < this.sectorCountY; e++) {
      var t = [];
      this.tileVOs.push(t);
      for (var i = 0; i < this.sectorCountX; i++) {
        var n = new o.CastleWorldMapBackgroundTileVO(i, e, this.visClassToBitmap);
        t.push(n);
      }
    }
  };
  CastleWorldMapBackgroundTilesDirectory.prototype.getBitmapForSectorByXY = function (e, t) {
    if (e > this.sectorCountX - 1 || t > this.sectorCountY - 1) {
      this.reInitialize();
    }
    return this.tileVOs[t][e].getBitmapData();
  };
  CastleWorldMapBackgroundTilesDirectory.prototype.drawDecoAreaForAreaByXY = function (e, t) {
    var i = r.int(e / s.WorldConst.SECTOR_WIDTH);
    var n = Math.floor(t / s.WorldConst.SECTOR_HEIGHT);
    if (n >= 0 && i < this.sectorCountX && n < this.sectorCountY && l.CastleModel.worldmapData.areaTiles.isSectorReadyForRendering(i, n)) {
      return this.tileVOs[n][i].drawDecoArea(e, t);
    } else {
      return null;
    }
  };
  CastleWorldMapBackgroundTilesDirectory.prototype.freeBitmapDataMemory = function (e, t) {
    if (t >= 0 && e < this.sectorCountX && t < this.sectorCountY) {
      return this.tileVOs[t][e].freeBitmapData();
    }
  };
  return CastleWorldMapBackgroundTilesDirectory;
}();
exports.CastleWorldMapBackgroundTilesDirectory = n;
var o = require("./2128.js");
var a = require("./18.js");
var s = require("./5.js");
var r = require("./6.js");
var l = require("./4.js");